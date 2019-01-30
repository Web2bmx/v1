import dataManager from "../../js/dataManager";

export default function paypalBtn() {

  let element;
  let subtotal;
  let total;
  let description;
  let name;
  let tax;

  let new_dataManager = new dataManager();

  let paquetes ={
    'basico':
      {
        'nombre': 'Básico',
        'description': `Sitio por un año,
        Logotipo,
        Agregar contenido,
        Actualizaciones`,
        'precio': '899'
      },
    'premium': 
      {
        'nombre': 'Premium',
        'description': `Dominio .com o .mx
        Sitio por un año,
        Logotipo,
        Agregar contenido,
        Actualizaciones`,
        'precio':'1599'
      }
  };

  let init = (element, tipo) => {
    this.element = element;
    this.subtotal = paquetes[tipo].precio;
    this.tax = (Number(this.subtotal) * 0.16).toFixed(2).toString();
    this.total = (Number(this.subtotal) * 1.16).toFixed(2).toString();
    this.name = paquetes[tipo].nombre;
    this.description = paquetes[tipo].description;
    // Render the PayPal button
    return paypal.Button.render({
      // Set your environment
      env: 'sandbox', // sandbox | production
      client: {
        sandbox: 'AeYhV898LwB_wov8dDxwQeKLrx1Yegkzeldu8P5WNPgfxi-ic1-5qlFnL4LK0xlkdrISIc5NeVNVi-Y9',
        production: 'Ab6PGV7NqDwbG9BNJ_2b0ttvuP53CaldZaLyn4YE2Pux_65VWHhL-IfbiYPQAkDayRzgu_3qAjHUkxUd'
      },

      locale: 'es_MX',

      // Specify the style of the button
      style: {
        label: 'paypal',  // checkout | credit | pay | buynow | generic
        size:  'responsive', // small | medium | large | responsive
        shape: 'rect',   // pill | rect
        color: 'blue',   // gold | blue | silver | black
        tagline: false,
        layout: 'horizontal',
        fundingicons: true
      },
      
      // Specify allowed and disallowed funding sources
      //
      // Options:
      // - paypal.FUNDING.CARD
      // - paypal.FUNDING.CREDIT
      // - paypal.FUNDING.ELV
      funding: {
        allowed: [ paypal.FUNDING.CARD ],
        disallowed: [ paypal.FUNDING.CREDIT ]
      },

      
      // Enable Pay Now checkout flow (optional)
      commit: true,
      
      // PayPal Client IDs - replace with your own
      // Create a PayPal app: https://developer.paypal.com/developer/applications/create
      
      // Set up a payment
      payment: (data, actions) => {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: this.total,
              currency: 'MXN',
              details: {
                subtotal: this.subtotal,
                tax: this.tax
              }                        
            },
            description: 'Paquete ' + this.name,
            item_list:{
              items: [
                {
                  name: 'Paquete ' + this.name,
                  description: this.description,
                  quantity: '1',
                  price: this.subtotal,
                  currency: 'MXN',
                  tax: this.tax
                }
              ]
            },
          }],
          note_to_payer: 'Contáctanos si necesitas ayuda en tu compra.'
        });
      },
      
      onAuthorize: (data, actions) => {
        return actions.payment.execute()
          .then((PaymentDetails) => {
            let id_pagina = new_dataManager.getObjFromLocalStorage('web2b_templateId');
            let id_usuario = new_dataManager.getObjFromLocalStorage('web2b_userId');
            let template_info = new_dataManager.getObjFromLocalStorage('web2b_template');
            let info_pago = JSON.stringify(PaymentDetails); 
            let paquete = PaymentDetails.transactions[0].item_list.items[0].name.search('Básico') != -1 ?
              'basico' : 'premium';
            //Crear pago
            $.post("scripts/crear_pago.php",{
              id_usuario: id_usuario,
              paquete: paquete,
              fecha_inicio: PaymentDetails.create_time,
              info_pago: info_pago,
              id_pagina: id_pagina,
              id_paypal: PaymentDetails.id
            }).done(function(result){
              // Crear página
              $.post("scripts/publicar_pagina.php",{
                site_name: template_info.selections.siteName.text,
                contenido: $('#template')[0].outerHTML,
                title: template_info.selections['inp-content-name'].text,
                description: template_info.selections['inp-content-slogan'].text
              }).done(function(result){
                  window.alert('Complete!');
              }).fail(function(result){
                window.alert('Algo salio mal!');
              });               
            }).fail(function(result){
              // Algo salio mal
            });            
            
          });
      },

      onCancel: (data, actions) => {
        // Show a cancel page or return to cart
      },

      onError: (err) => {
        // Show an error page here, when an error occurs
      }

    }, this.element);
  };

  return{
    init: init
  };

}
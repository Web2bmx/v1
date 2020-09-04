import dataManager from '../../js/dataManager';

export default function paypalBtn() {

	let element;
	let subtotal;
	let total;
	let description;
	let name;
	let tax;

	let new_dataManager = new dataManager();

	let paquetes = {
		'basico':
    {
    	'nombre': 'Básico',
    	'description': `Sitio por un año,
        Logotipo,
        Agregar contenido,
        Actualizaciones`,
    	'precio': '775'
    },
		'premium':
    {
    	'nombre': 'Premium',
    	'description': `Dominio .com o .mx
        Sitio por un año,
        Logotipo,
        Agregar contenido,
        Actualizaciones`,
    	'precio': '1375'
    }
	};

	var manageFinalData = function (fecha, paquete) {
		$('.app-cover-finish-package:first-child .finish').css('visibility', 'hidden');
		$('#paypal-button-container').empty();
		$('#paypal-button-container').attr('style', '');
		$('#paypal-button-container2').empty();
		$('#paypal-button-container2').attr('style', '');

		if (paquete === 'premium') {
			let new_paypalBtn2 = new paypalBtn();
			new_paypalBtn2.init('#paypal-button-container2', 'premium');
			$('#paypal-button-container2').css('margin-bottom', '0');
		} else {
			let new_paypalBtn1 = new paypalBtn();
			new_paypalBtn1.init('#paypal-button-container', 'basico');
			let new_paypalBtn2 = new paypalBtn();
			new_paypalBtn2.init('#paypal-button-container2', 'premium');
			$('#paypal-button-container').css('margin-bottom', '0');
			$('#paypal-button-container2').css('margin-bottom', '0');
		}
		// number of days
		let today = new Date();
		let finArr = fecha.split('-');
		let fin = new Date(Number(finArr[0]), Number(finArr[1]) - 1, Number(finArr[2]));
		let diff;
		if (fin >= today) {
			diff = Math.ceil((Math.abs(today - fin)) / (1000 * 3600 * 24));
			$('.daysLeft').text(diff);
			$('.created').fadeIn(400);
		} else {
			diff = 0;
			$('.caduco').fadeIn(400);
			$('.created').hide();
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
		return paypal.Buttons({

			// Specify the style of the button
			style: {
				label: 'pay',  // checkout | credit | pay | buynow | generic
				shape: 'rect',   // pill | rect
				color: 'blue',   // gold | blue | silver | black
				tagline: false,
				layout: 'vertical'
			},

			// PayPal Client IDs - replace with your own
			// Create a PayPal app: https://developer.paypal.com/developer/applications/create

			// Set up a payment
			createOrder: (data, actions) => {
				return actions.order.create({
					intent: 'CAPTURE',
					application_context: {
						brand_name: 'Web2b',
						locale: 'es-MX',
						landing_page: 'BILLING',
						user_action: 'PAY_NOW'
					},
					purchase_units: [{
						amount: {
							value: this.total,
							currency_code: 'MXN',
							breakdown: {
								item_total: {
									currency_code: 'MXN',
									value: this.subtotal
								},
								tax_total: {
									currency_code: 'MXN',
									value: this.tax                  
								},
								discount: {
									currency_code: 'MXN',
									value: 0                
								}
							}
						},
						description: 'Paquete ' + this.name,
						items: [
							{
								name: 'Paquete ' + this.name,
								description: this.description,
								quantity: '1',
								unit_amount: {
									currency_code: 'MXN',
									value: this.subtotal
								},
								tax: {
									currency_code: 'MXN',
									value: this.tax                  
								},
								category: 'DIGITAL_GOODS'
							}
						],
					}]
				});
			},

			onApprove: (data, actions) => {
				return actions.order.capture()
					.then((PaymentDetails) => {
						if (PaymentDetails.status == 'APPROVED' || PaymentDetails.status == 'COMPLETED') {

							let id_pagina = new_dataManager.getObjFromLocalStorage('web2b_templateId');
							let id_usuario = new_dataManager.getObjFromLocalStorage('web2b_userId');
							let template_info = new_dataManager.getObjFromLocalStorage('web2b_template');
							let info_pago = JSON.stringify(PaymentDetails);
							let paquete = PaymentDetails.purchase_units[0].items[0].name.search('Básico') != -1 ?
								'basico' : 'premium';

							//Crear pago
							$.post('scripts/crear_pago.php', {
								id_usuario: id_usuario,
								paquete: paquete,
								info_pago: info_pago,
								id_pagina: id_pagina,
								id_paypal: PaymentDetails.id
							}).done((PagoResult) => {
								// Crear página
								$.post('scripts/publicar_pagina.php', {
									site_name: template_info.selections.siteName.text,
									contenido: $('#template')[0].outerHTML,
									title: template_info.selections['inp-content-name'].text,
									description: template_info.selections['inp-content-slogan'].text
								}).done((PublishResult) => {
									$('.final-msgs p').text('La página se ha publicado exitosamente');
									$('.final-msgs').dialog('open');
									manageFinalData(PagoResult.fecha, paquete);
								}).fail((result) => {
									this.onFail();
								});
							}).fail((result) => {
								// Algo salio mal
								this.onFail();
							});

						} else {
							this.onFail();
						}
					});
			}

		}).render(this.element);
	};

	() => {
		$('.final-msgs p').text('Algo ha salido al tratar de publicar tu página. Por favor, intenta más tarde');
		$('.final-msgs').dialog('open');
	};

	return {
		init: init
	};

}
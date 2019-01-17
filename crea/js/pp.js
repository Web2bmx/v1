// Render the PayPal button
paypal.Button.render({
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
    payment: function(data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: '1046',
            currency: 'MXN'
          },
          description: 'Paquete Básico'
        }],
        note_to_payer: 'Contáctanos si necesitas ayuda en t compra.'
      });
    },
    
    onAuthorize: function (data, actions) {
      return actions.payment.execute()
        .then(function () {
          window.alert('Payment Complete!');
        });
    },

    onCancel: function (data, actions) {
      // Show a cancel page or return to cart
    },

    onError: function (err) {
      // Show an error page here, when an error occurs
    }

  }, '.paypal-button-container');
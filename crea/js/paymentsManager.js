import paypalBtn from './pp';
export default function paymentsManager () { 
    var _ctrl = null;
    var init = function(_that) {
        _ctrl = _that;
        
    };
    var createPayment = function() {
        let id_pagina = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_templateId');
        let id_usuario = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_userId');
        let template_info = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_template');

        if(template_info.selections.siteName.text.trim() == '' || template_info.selections.siteName.text.trim().lenght < 3) {
            $('.final-msgs p').text('El nombre de tu sitio no ha sido proporcionado. Por favor, regresa a las pantallas anteriores para definirlo.');				
            $('.final-msgs').dialog("open");				
            return;
        }
        
        //Crear pago
        $.post("scripts/crear_pago.php", {
            id_usuario: id_usuario,
            paquete: 'gratuito',
            info_pago: 'N/A',
            id_pagina: id_pagina,
            id_paypal: 'N/A'
        }).done((PagoResult) => {
            // Crear página
            publishPagina(template_info, PagoResult.fecha);
        }).fail(function (result) {
            // Algo salio mal
            $('.final-msgs p').text('Algo a salido mal. Por favor, intenta de nuevo. Si el error persiste, por favor contáctanos.');				
            $('.final-msgs').dialog("open");				
        });
    };
    var createPaypalButtons = function() {
		let actual_page = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_actualPage');
		if (actual_page && actual_page.paquete) {
			manageFinalData(actual_page.fecha_fin, actual_page.paquete);
		} else {
			$(".created").hide();
			/* PAYPAL Buttons */
			let new_paypalBtn1 = new paypalBtn();
			new_paypalBtn1.init('#paypal-button-container', 'basico');
			let new_paypalBtn2 = new paypalBtn();
			new_paypalBtn2.init('#paypal-button-container2', 'premium');
		}
	};
    var publishPagina = function(template_info = '', fecha = ''){
		template_info = template_info == '' ? _ctrl.new_dataManager.getObjFromLocalStorage('web2b_template') : template_info;

		let template_html = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>' +
						'<script src="' + '/crea/Templates/Template-' + template_info.selections.templateTypeId.value + '/js/scripts.js' + '"></script>' +
						$('#template')[0].outerHTML;

		//Crear pago
		$.post("scripts/publicar_pagina.php", {
			site_name: template_info.selections.siteName.text,
			contenido: template_html,
			title: template_info.selections['inp-content-name'].text,
			description: template_info.selections['inp-content-slogan'].text
		}).done((PublishResult) => {
			$('#app-cover').scrollTop(0);
			$('.final-msgs p').text('La página se ha publicado exitosamente');
			$('.final-msgs').dialog("open");
			if(fecha != '') {
				manageFinalData(fecha, 'gratuito');
			}
		}).fail(function (result) {
			$('.final-msgs p').text('Algo ha salido mal al tratar de publicar tu página. Por favor, intenta más tarde');
			$('.final-msgs').dialog("open");
		});

    };
    var manageFinalData = function (fecha, paquete) {
		$(".app-cover-finish-package:first-child .finish").css('visibility','hidden');
		$('#paypal-button-container').empty();
		$('#paypal-button-container').attr("style", "");
		$('#paypal-button-container2').empty();
		$('#paypal-button-container2').attr("style", "");

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
		let diff = _ctrl.new_utilsManager.fecha_diff(fecha);
		if(diff >= 0) {
			$(".daysLeft").text(diff);
			$(".created").fadeIn(400);
			$('#publish').show();
		} else {
			$(".caduco").fadeIn(400);
			$(".created").hide();			
		}
	};
    return {
        init : init,
        createPayment : createPayment,
        createPaypalButtons : createPaypalButtons,
        publishPagina : publishPagina
    };
}
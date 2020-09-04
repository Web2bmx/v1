export default function appManager() {
	var _ctrl = null;
	var init = function (_that) { _ctrl = _that; };
	var setApp = function () {
		/*SET MENU*/
		_ctrl.new_menuManager.setMenu();
		/*DESIGN SELECTION*/
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			setTimeout(function() {
				$('.control-design-cont').prepend($('.control-design-thumb.thumb-selected'));
				$('.control-design-cont').prepend($('.control-design-thumb:last'));
			}, 500);
			$('.control-design-thumb').on('click',function(e){
				let $this = $(this);
				let i = $('.control-design-thumb').index($this);
				if (i == 0) { $this.parent().prepend($('.control-design-thumb:last')); }
				if (i == 2) { $this.parent().append($('.control-design-thumb:first')); }
			});
		}
		$('.control-design-thumb').on('click', function () {
			$(this).parent().find('.thumb-selected').removeClass('thumb-selected');
			$(this).addClass('thumb-selected');
			$('[name^=\'inp-design\']').prop('checked', false);
			$(this).find('[name^=\'inp-design\']').prop('checked', true);
			_ctrl.new_templateManager.loadTemplate(true);
		});
		/*START SCREEN NEXT BUTTON*/
<<<<<<< HEAD
		$(".app-cover-start .next").click(function () {
			$("#app-cover").hide();
			_ctrl.new_menuManager.goToStep(0);
=======
		$('.app-cover-start .next').click(function () {
			$('#app-cover').hide();
			$('.app-cover-start').hide();
			$('.app-cover-finish').show();
			_ctrl.current_step = 0;
>>>>>>> bdb23d46c1551faaee362d061b05ea72727f41e5
		});
		/*FINISH BUTTON*/
		$('.finish').on('click', function () {
			_ctrl.new_paymentsManager.createPayment();
		});
		/* SWITCH PAGE CONTROL*/
		/* */
		$('.change-page').click(function() {
			$('#single-modal>div').append($('.page-switcher')).find('.page-switcher:last').show();
			$('#single-modal').addClass('small').fadeIn();
			$('body').append($('#modal-bg'));
		});
		/* */
		//$(".ventana-login").dialog("option", "width", 400);
		//$(".final-msgs").dialog("option", "width", 400);
		$('.change-page').click((e) => {
			e.preventDefault();
			let userId = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_userId');
			_ctrl.new_PageManager.fillModal(userId, () => {
				location.reload();
			});
			//$(".ventana-login").dialog("open");
		});
		/*LOGOUT BUTTON*/
		$('.logout').click((e) => {
			e.preventDefault();
			localStorage.clear();
			location.href = '/';
		});
		$('.cerrar-ventana').click(function () {
			$('.ventana-login').dialog('close');
		});
		$('.cerrar-final-msgs').click(function () {
			$('.final-msgs').dialog('close');
		});
		/*BACK BUTTON ON PAYMENTS*/
		$('#back').click(() => {
			_ctrl.current_step--;
			$('#app-cover').hide();
		});
		/*PUBLISH BUTTON*/
		$('#publish').click(() => {
			_ctrl.new_paymentsManager.publishPagina();
		});	
		/*UPDATE PAGES*/
		var actual_page = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_actualPage');
		if(actual_page.fecha_fin != null) {
			let diff = _ctrl.new_utilsManager.fecha_diff(actual_page.fecha_fin);
			if(diff != 0) {
				$('#publish').show();
			}
		}
	};
	return {
		init: init,
		setApp: setApp
	};
}
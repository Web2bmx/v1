export default function appManager() {
	var _ctrl = null;
	var init = function (_that) { _ctrl = _that; };
	var _cursorX = 0;
	var setApp = function () {
		/*SET MENU*/
		_ctrl.new_menuManager.setMenu();
		/*DESIGN SELECTION*/
		if(_ctrl.isMobile) {
			setTimeout(function() {
				$('.control-design-cont').prepend($('.control-design-thumb.thumb-selected'));
				$('.control-design-cont').prepend($('.control-design-thumb:last'));
			}, 300);
			$('body').on('touchstart', '.app-cover-start', function(event){
				let $this = $(this);
				_cursorX = event.touches[0].clientX;
			});
			$('body').on('touchend', '.app-cover-start', function(event){
				let $this = $(this);
				let tap = event.changedTouches[0].clientX - _cursorX;
				if (tap < 0) {
					$(".control-design-cont").append($('.control-design-thumb:first'));
				} else if (tap > 0)  {
					$(".control-design-cont").prepend($('.control-design-thumb:last'));
				}
				if (tap != 0) { $(".control-design-cont").css({ "left" : '-8.5rem' }); }
			});
			$('body').on('touchmove', '.app-cover-start', function(event){
				let $this = $(this);
				let tap = event.changedTouches[0].clientX - _cursorX;
				$(".control-design-cont").css({ "left" : ((-8.5 + (tap / 15)) + 'rem') });
			});
		}
		$('body').on('click','.control-design-thumb', function () {
			$(this).parent().find('.thumb-selected').removeClass('thumb-selected');
			$(this).addClass('thumb-selected');
			$('[name^=\'inp-design\']').prop('checked', false);
			$(this).find('[name^=\'inp-design\']').prop('checked', true);
			_ctrl.new_templateManager.loadTemplate(true);
		});
		/*START SCREEN NEXT BUTTON*/
		$('.app-cover-start .next').click(function () {
			$('#app-cover').hide();
			_ctrl.new_menuManager.goToStep(0);
		});
		/*FINISH BUTTON*/
		$('body').on('click', '.finish', function () {
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
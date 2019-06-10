import paypalBtn from './pp';

export default function appManager() {
	var _ctrl = null;
	var init = function (_that) {
		_ctrl = _that;
	};
	var firstTime = true;
	var setAppNavigation = function () {
		$(".app-control-step:gt(0)").hide();
		$("#control-view-nav>a").on("click", function (e) {
			e.preventDefault();
			let totalItems = $("#app-control>.app-control-step").length;
			if (!$(this).hasClass("disabled")) {
				var inc = $(this).attr("href") == "#next" ? 1 : -1;
				_ctrl.current_step += inc;
				if (_ctrl.current_step >= totalItems) {
					_ctrl.current_step = totalItems;
				}
				if (_ctrl.current_step == 1) {
					$("#control-view-nav>a:eq(0)").removeClass("disabled");
				}
				goToStep(_ctrl.current_step);
				_ctrl.new_templateManager.updateContent();
			}
		});
		for (let i = 0; i < $("#app-control>.app-control-step").length - 1; i++) {
			$("#control-view-index").append(($(".control-view-index-item.current").clone().removeClass("current")));
		}
		$(document).on("click", ".control-view-index-item", function () {
			let $this = $(this);
			let index = $(".control-view-index-item").index($this);
			_ctrl.current_step = index;
			goToStep(_ctrl.current_step);
			_ctrl.new_templateManager.updateContent();
		});
		$(".control-view-nav-display-mark:eq(" + _ctrl.current_step + ")").addClass("control-view-nav-display-mark-active");
		centerNav();
		$(window).resize(function () {
			centerNav();
		});
		
		$(".finish").on("click", function () {
			// _ctrl.current_step --;
			// $("#app-cover").hide();
			let id_pagina = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_templateId');
			let id_usuario = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_userId');
			let template_info = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_template');

			//Crear pago
			$.post("scripts/crear_pago.php", {
				id_usuario: id_usuario,
				paquete: 'gratuito',
				info_pago: 'N/A',
				id_pagina: id_pagina,
				id_paypal: 'N/A'
			}).done((PagoResult) => {
				// Crear página
				$.post("scripts/publicar_pagina.php", {
					site_name: template_info.selections.siteName.text,
					contenido: $('#template')[0].outerHTML,
					title: template_info.selections['inp-content-name'].text,
					description: template_info.selections['inp-content-slogan'].text
				}).done((PublishResult) => {
					$('.final-msgs p').text('La página se ha publicado exitosamente');
					$('.final-msgs').dialog("open");
					manageFinalData(PagoResult.fecha, 'gratuito');
				}).fail(function (result) {
					$('.final-msgs p').text('Algo ha salido al tratar de publicar tu página. Por favor, intenta más tarde');
					$('.final-msgs').dialog("open");
				});
			}).fail(function (result) {
				// Algo salio mal
			});
		});
		/* SWITCH TEMPLATE */
		$(".ventana-login").dialog("option", "width", 400);
		$(".final-msgs").dialog("option", "width", 400);
		$(".change-page").click((e) => {
			e.preventDefault();
			let userId = _ctrl.new_dataManager.getObjFromLocalStorage("web2b_userId");
			_ctrl.new_PageManager.fillModal(userId, () => {
				location.reload();
			});			
			$(".ventana-login").dialog("open");
		});
		$(".cerrar-ventana").click(function () {
			$(".ventana-login").dialog("close");
		});
		$(".cerrar-final-msgs").click(function () {
			$(".final-msgs").dialog("close");
		});		
		/*NAV BUTTONS*/
		$(".app-cover-start .next").click(function () {
			closeAppCover();
		});
		/*APP SWITCH*/
		var $appControl_h = $("#app-control").css("height");
		$("[id^='switch-']").on('click', function () {
			if ($(this).attr("id").indexOf("view") > -1) {
				$("#switch-view").hide();
				$("#switch-edit").show();
				$("#control-view-nav").hide();
				$("#app-control>.app-control-step").hide();
				$("#app-control").addClass("view");
			} else {
				$("#switch-view").show();
				$("#switch-edit").hide();
				$("#control-view-nav").show();
				$("#app-control>.app-control-step:eq(" + _ctrl.current_step + ")").show();
				$("#app-control").removeClass("view");
				centerNav();
				topStepMargin();
				$(window).resize(function () {
					topStepMargin();
				});
			}
			$("body").toggleClass("init");
		});	

		/* Go back */
		$("#back").click(() => {
			_ctrl.current_step --;
			$("#app-cover").hide();
		});
	};
	var setAppControls = function () {
		$(document.body).on("change", "[name^='inp-'][type!='text']", function () {
			_ctrl.new_templateManager.updateContent();
		});
		$(document.body).on("keyup", "[name^='inp-'][type='text'],textarea[name^='inp-']", function (e) {
			_ctrl.lastKeyPressed = e.keyCode || e.which;
			if (!$(e.currentTarget).attr('pattern') || _ctrl.new_validator.isValidinput($(e.currentTarget))) {
				_ctrl.new_templateManager.updateContent();
				$(".form-error", $(e.currentTarget).parent()).hide();
			} else {
				$(".form-error", $(e.currentTarget).parent()).show();
			}
		});
		$("#app-control").on("itemWasAdded", function () {
			_ctrl.current_step = _ctrl.new_itemManager.getIndex();
			goToStep(_ctrl.current_step);
			centerNav();
		});
	};
	var setAppSteps = function () {
		/* TEMPLATE DESIGN*/
		$(".control-design-thumb").on('click', function () {
			$(".control-design-thumb aside.thumb-selected").removeClass("thumb-selected");
			$("aside", this).addClass("thumb-selected");
			$("[name^='inp-design']").removeAttr("checked");
			$("input", this).attr("checked", "checked");
			_ctrl.new_templateManager.loadTemplate();
		});
		/* Upload image*/
		$('.file-upload button').on("click", (e) => {
			$(e.currentTarget).next("input").click();
		});
		$('.file-upload input[type=file]').on('change', (e) => {
			let file = $(e.currentTarget)[0].files[0].name;
			$("span", $(e.currentTarget).parent()).text(file);
			$("input[type=submit]", $(e.currentTarget).closest("form")).attr("disabled", false);
		});
		$('.file-upload').on('submit', _ctrl.new_imageManager.uploadImage);
		/* manage dialog */
		$("#ok_btn").click(function () {
			$(".alert.dialog").dialog("close");
		});
	};
	var closeAppCover = function () {
		$("#app-cover").hide();
		$(".app-cover-start").hide();
		$(".app-cover-finish").show();
		_ctrl.current_step = 0;
	};
	var goToStep = function (step) {
		if (step == -1) {
			$("#app-cover").show();
			$(".app-cover-start").show();
			$(".app-cover-finish").hide();
		} else if (step < ($(".app-control-step").length)) {
			$(".app-control-step").hide().filter(":eq(" + step + ")").show();
			$(".control-view-index-item").removeClass("current").filter(":eq(" + step + ")").addClass("current");
		} else {
			if(firstTime) {
				// Hide buttons when already a page is built
				let actual_page = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_actualPage');
				if(actual_page && actual_page.paquete) {
					manageFinalData(actual_page.fecha_fin, actual_page.paquete);
				} else {
					$(".created").hide();
					/* PAYPAL Buttons */
					let new_paypalBtn1 = new paypalBtn();
					new_paypalBtn1.init('#paypal-button-container', 'basico');
					let new_paypalBtn2 = new paypalBtn();
					new_paypalBtn2.init('#paypal-button-container2', 'premium');					
				}
				firstTime = false;				
			}

			$("#app-cover").show();
			$(".app-cover-start").hide();
			$(".app-cover-finish").show();


		}
	};
	var manageFinalData= function(fecha, paquete) {
		$(".app-cover-finish-package:first-child .finish").css('visibility','hidden');
		$('#paypal-button-container').empty();
		$('#paypal-button-container').attr("style","");
		$('#paypal-button-container2').empty();
		$('#paypal-button-container2').attr("style","");

		if(paquete === 'premium') {
			let new_paypalBtn2 = new paypalBtn();
			new_paypalBtn2.init('#paypal-button-container2', 'premium');	
			$('#paypal-button-container2').css('margin-bottom','0');
		} else {
			let new_paypalBtn1 = new paypalBtn();
			new_paypalBtn1.init('#paypal-button-container', 'basico');
			let new_paypalBtn2 = new paypalBtn();
			new_paypalBtn2.init('#paypal-button-container2', 'premium');
			$('#paypal-button-container').css('margin-bottom','0');
			$('#paypal-button-container2').css('margin-bottom','0');
    }
		// number of days
		let today = new Date();
		let finArr = fecha.split("-");
		let fin = new Date(Number(finArr[0]), Number(finArr[1])-1,Number(finArr[2]));
		let diff;
		if(fin >= today) {
			diff = Math.ceil((Math.abs(today-fin)) / (1000 * 3600 * 24));
			$(".daysLeft").text(diff);
			$(".created").fadeIn(400);
		} else {
			diff = 0;
			$(".caduco").fadeIn(400);
			$(".created").hide();
		}	
	};
	var topStepMargin = function () {
		let actual = $(".app-control-step:visible > div"),
			remain = $("#app-control").height() -
			$("#app-control-nav").height() -
			$("#app-switch").height() -
			actual.height();

		actual.css("margin-top", remain > 0 ? remain / 2 + "px" : "0");
	};
	var centerNav = function () {
		let parentW = $("#control-view-index").parent().width();
		$("#control-view-index").css("padding-left", parentW / 2 - $("#control-view-index").width() / 2);
	};
	return {
		init: init,
		setAppNavigation: setAppNavigation,
		setAppControls: setAppControls,
		setAppSteps: setAppSteps,
		topStepMargin: topStepMargin,
		goToStep: goToStep
	};
}
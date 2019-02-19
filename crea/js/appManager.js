import validator from "./validator";
import paypalBtn from './pp';

export default function appManager() {
	var _ctrl = null;
	var new_validator = new validator();
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
		/* ON NEW PAGE */
		$("[name='start']").on("click", function () {
			$(".form-error").hide();
			if ($("#nombrePagina").val().trim() == "" ||
				$("#correo").val().trim() == "" ||
				$("#password").val().trim() == "") {
				$(".empty-fields").css("display", "block");
			} else if (!new_validator.isValidDomain($("#nombrePagina").val().trim().toLowerCase())) {
				$(".name-invalid").show();
			} else if (!new_validator.isEmail($("#correo").val())) {
				$(".not-email").css("display", "block");
			} else if (!new_validator.validPassword($("#password").val())) {
				$(".password-invalid").css("display", "block");
			} else {
				_ctrl.new_dataManager.saveSelected(_ctrl.jd, 'inp-content-name', $("#nombrePagina").val().trim(), 'text');
				$.post("scripts/crear_usuario.php", {
					correo: $("#correo").val().trim(),
					password: $("#password").val(),
					info: JSON.stringify(_ctrl.jd)
				}).done(function (result) {
					if (!result.ok) {
						$(".otherMsgs").html(result.error);
						$(".otherMsgs").css("display", "block");
					} else {
						$(".app-new-start.dialog").dialog('close');
						_ctrl.new_templateManager.startTemplateProcess(result);
					}
				}).fail(function (result) {
					response = JSON.parse(result.responseText);
					$(".invalid-response").text("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + response.mensaje);
					$(".invalid-response").css("display", "block");
				});

			}

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
			}).done(function (result) {
				// Crear página
				$.post("scripts/publicar_pagina.php", {
					site_name: template_info.selections.siteName.text,
					contenido: $('#template')[0].outerHTML,
					title: template_info.selections['inp-content-name'].text,
					description: template_info.selections['inp-content-slogan'].text
				}).done(function (result) {
					window.alert('Complete!');
				}).fail(function (result) {
					window.alert('Algo salio mal!');
				});
			}).fail(function (result) {
				// Algo salio mal
			});
		});
		/* SWITCH TEMPLATE */
		$(".change-page").click((e) => {
			e.preventDefault();
			let userId = _ctrl.new_dataManager.getObjFromLocalStorage("web2b_userId");
			_ctrl.new_PageManager.fillModal(userId, () => {
				location.reload();
			});
			$(".ventana-login").dialog("option", "width", 400);
			$(".ventana-login").dialog("open");
		});
		$(".cerrar-ventana").click(function () {
			$(".ventana-login").dialog("close");
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
			_ctrl.new_templateManager.updateTemplate();
		});
		$(document.body).on("keyup", "[name^='inp-'][type='text'],textarea[name^='inp-']", function (e) {
			_ctrl.lastKeyPressed = e.keyCode || e.which;
			if (!$(e.currentTarget).attr('pattern') || new_validator.isValidinput($(e.currentTarget))) {
				_ctrl.new_templateManager.updateTemplate();
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
			_ctrl.new_templateManager.updateTemplate();
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
			$("#app-cover").show();
			$(".app-cover-start").hide();
			$(".app-cover-finish").show();

			if(firstTime) {
				// Hide buttons when already a page is built
				let actual_page = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_actualPage');
				if(actual_page.paquete !== null) {
					$(".finish").css('visibility','hidden');
				}

				/* PAYPAL Buttons */ 
				let new_paypalBtn1 = new paypalBtn();
				new_paypalBtn1.init('#paypal-button-container', 'basico');
				let new_paypalBtn2 = new paypalBtn();
				new_paypalBtn2.init('#paypal-button-container2', 'premium');
				firstTime = false;				
			}
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
		topStepMargin: topStepMargin
	};
}
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
			if (!$(this).hasClass("disabled")) {
				let inc = $(this).attr("href") == "#next" ? 1 : -1;
				_ctrl.current_step += inc;
				let totalSteps = $("#app-control>.app-control-step").length;
				if (_ctrl.current_step >= totalSteps) { _ctrl.current_step = totalSteps; }
				if (_ctrl.current_step == 1) { $("#control-view-nav>a:eq(0)").removeClass("disabled"); }
				goToStep(_ctrl.current_step);
				_ctrl.new_templateManager.updateContent(e.currentTarget);
			}
		});
		for (let i = 0; i < $("#app-control>.app-control-step").length - 1; i++) {
			$("#control-view-index").append(($(".control-view-index-step.current").clone().removeClass("current")));
		}
		$(document).on("click", ".control-view-index-step", function (e) {
			let $this = $(this);
			let index = $(".control-view-index-step").index($this);
			_ctrl.current_step = index;
			goToStep(_ctrl.current_step);
			_ctrl.new_templateManager.updateContent(e.currentTarget);
		});
		$(".control-view-nav-display-mark:eq(" + _ctrl.current_step + ")").addClass("control-view-nav-display-mark-active");
		
		$(".finish").on("click", function () {
			// _ctrl.current_step --;
			// $("#app-cover").hide();
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
		$('.logout').click((e) => {
			e.preventDefault();
			localStorage.clear();
			location.href = "/";
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
				$("#app-control").addClass("view").find(">.app-control-step").hide();
				if ($("#menu").length > 0 && $("#menu").css("position")) {
					$("#menu").css("top", "40px");
				}
			} else {
				$("#switch-view").show();
				$("#switch-edit").hide();
				$("#control-view-nav").show();
				$("#app-control").removeClass("view").find(">.app-control-step:eq(" + _ctrl.current_step + ")").show();
				if ($("#menu").length > 0 && $("#menu").css("position")) {
					$("#menu").css("top", "0");
				}
			}
			$("body").toggleClass("init");
		});

		/* Go back */
		$("#back").click(() => {
			_ctrl.current_step--;
			$("#app-cover").hide();
		});

		// Actualizar paginas
		var actual_page = _ctrl.new_dataManager.getObjFromLocalStorage('web2b_actualPage');
		if(actual_page.fecha_fin != null) {
			let diff = fecha_diff(actual_page.fecha_fin);
			if(diff != 0) {
				$('#publish').show();
			}
		}
		$("#publish").click(() => {
			publishPagina();
		});		
	};
	var setAppControls = function () {
		$(document.body).on("change", "[name^='inp-'][type!='text']", function (e) {
			_ctrl.new_templateManager.updateContent(e.currentTarget);
		});
		$(document.body).on("keyup", "[name^='inp-'][type='text'][id!='inp-contact-address'],textarea[name^='inp-']", function (e) {
			_ctrl.lastKeyPressed = e.keyCode || e.which;
			if (!$(e.currentTarget).attr('pattern') || _ctrl.new_validator.isValidinput($(e.currentTarget))) {
				_ctrl.new_templateManager.updateContent(e.currentTarget);
				$(".form-error", $(e.currentTarget).parent()).hide();
			} else {
				$(".form-error", $(e.currentTarget).parent()).show();
			}
		});
		$(document.body).on('click', '.img-thumb-cont', function () {
			var $this = $(this);
			$this.closest("[id^='app-control-images']")
				.not('#app-control-images-gallery')
				.find(".img-thumb")
				.removeClass("thumb-selected");
			$this.next("input").trigger("click");

			// if gallery
			const $parent = $this.closest("[id^='app-control-images']");
			if ($parent.attr('id').search('gallery') != -1) {
				const actualNum = $parent.find(".thumb-selected").length;
				$this.parent().find(".img-thumb-overlay span").text(actualNum + 1);
			}

			$this.parent().addClass("thumb-selected");
		});
		$("body").on('click', ".control-color-thumb", function() {
			let $this = $(this);
			$this.closest("#app-control-palettes").find(".control-color-thumb").removeClass("thumb-selected");
			$this.next("input").trigger("click");
			$this.addClass("thumb-selected");
		});
		$(document.body).on('click', '.img-thumb-overlay', function () {
			var $this = $(this); 

			// if gallery
			const $parent = $this.closest("[id^='app-control-images']");
			if ($parent.attr('id').search('gallery') != -1) {
				const actualNum = $this.parent().find(".img-thumb-overlay span").text();
				$parent.find(".thumb-selected").each((i,e) => {
					const an = $('.img-thumb-overlay span', e).text();
					if (an > actualNum) {
						$('.img-thumb-overlay span', e).text(an - 1);
					}
				});				
			}

			$this.closest(".img-thumb").removeClass("thumb-selected").find("input").trigger("click");
		});
		$(document.body).on('click', '.img-thumb-cont-zoom', function () {
			let img_url = $(this).parent().find(".img-thumb-cont").attr("data-img-url");
			$("#single-modal>div").html("<img src='" + img_url + "' class='img-thumb-zoomed' />");
			console.log($("#single-modal>div"));
			$("#single-modal").fadeIn();
		});
		$("#app-control").on("itemWasAdded", function () {
			_ctrl.current_step = _ctrl.new_itemManager.getCurrentStep();
			goToStep(_ctrl.current_step);
		});
		$("body").on("click", "#inp-content-item-add-y", function() {
			_ctrl.new_itemManager.addItem();
        });
		$("body").on('DOMSubtreeModified', "#app-control-images-logo", function () {
			$("#app-control-images-logo").parent().attr('style', '');
		});
	};
	var setAppSteps = function () {
		/* TEMPLATE DESIGN*/
		$(".control-design-thumb").on('click', function () {
			$(this).parent().find(".thumb-selected").removeClass("thumb-selected");
			$(this).addClass("thumb-selected");
			$("[name^='inp-design']").prop("checked", false);
			$("input", this).prop("checked", true);
			_ctrl.new_templateManager.loadTemplate(afterTemplateLoad, true);
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
		$(".brand-name .toogle").click(function (e) {
			e.preventDefault();
			let name = $(this).closest("aside").children().find('input[name^="inp-"]').attr("name");
			let selector = name ? '[name="' + name + '"]' : this;
			let type = $(this).closest("aside").children().find('input[name^="inp-"]').attr("type");
			if (name && type !== 'text') {
				name = name.replace('inp-', '#');
			}

			hideFormElements(selector, name, type);
		});
	};

	var hideFormElements = function (selector, name, type) {
		if ($(selector).closest("aside").hasClass("inactive")) {
			$(selector).closest("aside").removeClass("inactive");
			$("input, button", $(selector).closest("aside")).removeAttr("disabled");
			$("i", selector).removeClass("fa-toggle-off").addClass("fa-toggle-on");

			_ctrl.new_dataManager.saveSelected(
				_ctrl.jd,
				name + '@switch',
				true,
				type === 'text' ? type : 'image');

			hideTemplateElements(false, name);
		} else if ($(".brand-name aside.inactive").length > 0) {
			$(".brand-name .form-error").fadeIn(500);
			setTimeout(() => {
				$(".brand-name .form-error").fadeOut(500);
			}, 5000);
		} else {
			$(selector).closest("aside").addClass("inactive");
			$("input, button", $(selector).closest("aside")).attr("disabled", true);
			$("i", selector).removeClass("fa-toggle-on").addClass("fa-toggle-off");

			_ctrl.new_dataManager.saveSelected(
				_ctrl.jd,
				name + '@switch',
				false,
				type === 'text' ? type : 'image');

			hideTemplateElements(true, name);

		}

	};

	var hideTemplateElements = function (hide, selector) {
		if (selector === "#img-logo" || selector == undefined) {
			if (!hide)
				$('#branding').show();
			else
				$('#branding').hide();
		} else {
			selector = selector.replace('inp-', 'val-');
			if (!hide)
				$('#' + selector).show();
			else
				$('#' + selector).hide();
		}
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
			$(".control-view-index-step").removeClass("current").filter(":eq(" + step + ")").addClass("current");
		} else {
			if (firstTime) {
				// Hide buttons when already a page is built
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
				firstTime = false;
			}

			$("#app-cover").show();
			$(".app-cover-start").hide();
			$(".app-cover-finish").show();


		}
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
		let diff = fecha_diff(fecha);
		if(diff >= 0) {
			$(".daysLeft").text(diff);
			$(".created").fadeIn(400);
			$('#publish').show();
		} else {
			$(".caduco").fadeIn(400);
			$(".created").hide();			
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

	var fecha_diff = function(fecha) {
		// number of days
		let today = new Date();
		let finArr = fecha.split("-");
		let fin = new Date(Number(finArr[0]), Number(finArr[1]) - 1, Number(finArr[2]));
		let diff;
		if (fin >= today) {
			diff = Math.ceil((Math.abs(today - fin)) / (1000 * 3600 * 24));
		} else {
			diff = 0;
		}
		return diff;	
	};
	var afterTemplateLoad = () => {
		_ctrl.new_mapManager.start('inp-contact-address', 'iMap');
	};
	return {
		init: init,
		setAppNavigation: setAppNavigation,
		setAppControls: setAppControls,
		setAppSteps: setAppSteps,
		goToStep: goToStep,
		afterTemplateLoad: afterTemplateLoad,
		hideTemplateElements: hideTemplateElements,
		hideFormElements: hideFormElements
	};
}
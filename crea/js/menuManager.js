export default function templateManager () { 
	var _ctrl = null;
	var init = function(_that) { _ctrl = _that; };
    var setMenu = function () {
		setMainControls();
		setFormControls();		
		/* manage dialog ??*/
		$("#ok_btn").click(function () {
			$(".alert.dialog").dialog("close");
		});
		
	};
	var setMainControls = function () {
		/*APP SWITCH*/
		$("[id^='switch-']").on('click', function () {
			$("#app-control").toggleClass("view");
			$("#app-control-nav").toggleClass("view");
			$("#app-switch").toggleClass("view");
			$("body").toggleClass("init");
		});
		/*EO APP SWITCH*/
		/*STEP NAVIGATION*/
		$(".app-control-step:gt(0)").hide();
		for (let i = 0; i < $("#app-control>.app-control-step").length - 1; i++) {
			$("#control-view-index").append(($(".control-view-index-step.current").clone().removeClass("current")));
        }
		$(".control-view-nav-display-mark:eq(" + _ctrl.current_step + ")").addClass("control-view-nav-display-mark-active");
		$("#control-view-nav>a").on("click", function (e) {
			if ($(".app-control-step .container-error").length == 0) {
				let inc = $(this).attr("href") == "#next" ? 1 : -1;
				let index = _ctrl.current_step + inc;
				let totalSteps = $("#app-control>.app-control-step").length;
				if (index >= totalSteps) { index = totalSteps; }
				if (index == 1) { $("#control-view-nav>a:eq(0)").removeClass("disabled"); }
				_ctrl.new_menuManager.goToStep(index, e.currentTarget);
			}
		});
		$(document).on("click", ".control-view-index-step", function (e) {
			let $this = $(this);
			let index = $(".control-view-index-step").index($this);
			_ctrl.new_menuManager.goToStep(index, e.currentTarget);
		});
		/*EO STEP NAVIGATION*/
    };
	var setFormControls = function () {
		/*TEXT*/
		$(document.body).on("keyup", "[type='text'][name^='inp-'][id!='inp-contact-address']:not([disabled]),textarea[name^='inp-']", function (e) {
			_ctrl.lastKeyPressed = e.keyCode || e.which;
			_ctrl.new_templateManager.updateContent(e.currentTarget);
		});
		$("[data-validate]").on("focusout", function(e){
			_ctrl.new_utilsManager.validateFields(e.currentTarget, true);
		});
		/*TEXT*/
		/*NOT TEXT*/
		/*UPDATE ONLY IF VALUE CHANGES*/
		$(document.body).on("change", "[name^='inp-'][type!='text']", function (e) {
			_ctrl.new_templateManager.updateContent(e.currentTarget);
		});
		/*NOT TEXT*/
		/*TOGGLES*/
		$(".toggle").click(function (e) {
			e.preventDefault();
			let $this = $(this);
			let t = $this.attr("id").replace("toggle", "#conditional");
			let i = $this.attr("id").replace("toggle", "#inp-rem-content");
			if ($this.find(".fas.fa-toggle-on").length > 0) {
				$this.find(".fas.fa-toggle-on").attr("class", "fas fa-toggle-off");
			} else {
				$this.find(".fas.fa-toggle-off").attr("class", "fas fa-toggle-on");
			}
			$(i).trigger("click");
			_ctrl.new_templateManager.updateContent(e.currentTarget);
			hideFormElements($(t));
		});
		/*TOGGLES*/
		/*ACCORDION*/
		$("body").on("click", ".accordion h4", function() {
			$(this).toggleClass("expanded");
			$(this).next().toggle();
		}).find(".accordion h4").trigger("click");
		/*ACCORDION*/
		/*IMAGES*/
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
			$("#single-modal").fadeIn();
		}).append($("#single-modal"));
		$("body").on('DOMSubtreeModified', "#app-control-images-logo", function () {
			$("#app-control-images-logo").parent().attr('style', '');
		});
		/*IMAGES*/
		/*SINGLE MODAL*/
		$("#single-modal i").on("click", function() {
            $("#single-modal").fadeOut("fast", function() {
				$("body").append($(".page-switcher")).find(".page-switcher:last").hide();
				$("#single-modal").attr("class", "");
				$("#component_templates").append($("#modal-bg"));
			});
		});
		/*SINGLE MODAL*/
		/*COLOR*/
		$("body").on('click', ".control-color-thumb", function() {
			let $this = $(this);
			$this.closest("#app-control-palettes").find(".control-color-thumb").removeClass("thumb-selected");
			$this.parent().find("input").trigger("click");
			$this.addClass("thumb-selected");
		});
		/*COLOR*/
		/*ITEMS*/
		$("body").on("click", ".items-change-number", function() {
			var $this = $(this);
			let $t = $("#inp-content-items-number");
			let v = $this.hasClass("add-item") ? ($t.val() * 1) + 1 : ($t.val() * 1) - 1;
			if (v >= 1 && v <= 5) {
				$t.val(v);
				_ctrl.new_itemManager.addItem(v);
			}
		});
		/*ITEMS*/
		/*UPLOADS*/
		$('.file-upload button').on("click", (e) => {
			e.preventDefault();
			$(e.currentTarget).parent().find("input[type='file']").click();
		});
		$('.file-upload input[type=file]').on('change', (e) => {
			let file = $(e.currentTarget)[0].files[0].name;
			$("span", $(e.currentTarget).parent()).text(file);
			$("input[type=submit]", $(e.currentTarget).closest("form")).trigger("click");
			if(!$(e.currentTarget).closest(".accordion").next(".accordion").children('div').is(':visible')) {
				$(e.currentTarget).closest(".accordion").next(".accordion").find("h4").trigger("click");
			}			
		});
		$('.file-upload input[type="submit"]').on('click', _ctrl.new_imageManager.uploadImage);
		/*UPLOADS*/
	};
	var hideFormElements = function($s) {
		$s.toggleClass("hidden");
	};
	var goToStep = function (step, target) {
		if ($(".app-control-step .container-error").length == 0) {
			_ctrl.current_step = step;
			_ctrl.new_templateManager.updateContent(target);
			if (step == -1) {
				$("#app-cover").show();
				$(".app-cover-start").show();
				$(".app-cover-finish").hide();
			} else if (step < ($(".app-control-step").length)) {
				$(".app-control-step").hide().filter(":eq(" + step + ")").show();
				$(".control-view-index-step").removeClass("current").filter(":eq(" + step + ")").addClass("current");
			} else {
				$("#app-cover").show();
				$(".app-cover-start").hide();
				$(".app-cover-finish").show();
			}
		} else { $(".app-control-step .container-error").hide().fadeIn("fast"); }
	};
    return {
        init : init,
        setMenu : setMenu,
		hideFormElements: hideFormElements,
		goToStep: goToStep
    };
}
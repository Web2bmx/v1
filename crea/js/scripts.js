(function () {
    /*GLOBAL VARIABLES*/
	var windowObjectReference = null;
	var image_types = ["hero", "item-1"];
	var template_id = "";
	var sample_images_ready = false;
	var current_step = 0;
	var number_of_items = 1;
	var sample_colors_ready = false;
	var $images = null;
	var $palettes = null;
	var lastKeyPressed = 0;
	/*EO GLOBAL VARIABLES*/
	$(document).ready(function() {
		/*SET UP TEMPLATE*/
		updateTemplate();
		/*EO SET UP TEMPLATE*/
		/*SET UP APP*/
		setAppNavigation();
		setAppSteps();
		/*EO SET UP APP*/
	});
	/*APPLICATION FUNCTIONS*/
	function setAppSteps() {
		$(document.body).on("change", "[name^='inp-'][type!='text']", function() { 
			updateTemplate();
		});
		$(document.body).on("keyup", "[name^='inp-'][type='text'],textarea[name^='inp-']", function(e) {
			lastKeyPressed = e.keyCode || e.which;
			if (($(this).attr("name").indexOf("-contact-") > -1) || ($(this).attr("name").indexOf("-item-") > -1)) {
				goToByScroll($(document), 800);
			} else {
				goToByScroll($(document), 0);
			}
			if ($(this).attr("name").indexOf("-contact-") > -1) {
				$("#app-control").addClass("top");
			} else {
				$("#app-control").removeClass("top");
			}
			updateTemplate();
		});
		/*ADD ITEMS*/
		$("#inp-content-item-add-y").on("click", function() {
			var $this = $(this);
			var index = $(".app-control-step").index($this.closest(".app-control-step"));
			$("#control-view-index").prepend(($(".control-view-index-item.current").clone().removeClass("current"))).append(($(".control-view-index-item.current").clone().removeClass("current")));
			addItems(number_of_items);
			number_of_items ++;
			var $i_t = $(".app-control-step:eq(" + (current_step - 2) + ")").clone();
			$i_t.find("p").html("Tu producto o servicio");
			$i_t.find("input").attr("id", ("inp-content-title-item-" + number_of_items));
			$i_t.find("input").attr("name", ("inp-content-title-item-" + number_of_items));
			$i_t.find("input").attr("placeholder", "Tu producto o servicio");
			$i_t.find("input").val("");
			$i_t.find("textarea").attr("id", ("inp-content-item-" + number_of_items));
			$i_t.find("textarea").attr("name", ("inp-content-item-" + number_of_items));
			$i_t.find("textarea").attr("placeholder", "Tu producto o servicio");
			$i_t.find("textarea").val("");
			var $i_i = $(".app-control-step:eq(" + (current_step - 1) + ")").clone();
			$i_i.find("p").html("Elige una imagen para tu producto o servicio");
			$i_i.find("#app-control-images-item-" + (number_of_items - 1)).attr("id", ("app-control-images-item-" + number_of_items));
			$i_i.find("input").each(function() {
				$(this).attr("name", ("inp-img-item-" + number_of_items));
			});
			$this.closest(".app-control-step").before($i_t).before($i_i);
			current_step = index;
			goToStep(current_step);
			$this.prop('checked', false);
			$("#inp-content-item-add-n").trigger("click");
		});
		/*TOOLTIPS*/
		$(".app-control-step-tooltip-info").prev("*").append($(".app-control-step-tooltip.template").clone().removeClass("template"));
		$(".app-control-step-tooltip").click(function() {
			var $target = $(this).parent().next(".app-control-step-tooltip-info");
			if ($target.is(":visible")) {
				$target.removeClass("active");
			} else {
				$target.addClass("active");
			}
		});
		/*EO TOOLTIPS*/
		$.ajax({
			url: "xml/sample_colors.xml",
			dataType: "xml",
			success: function(data) {
				$xml = $(data);
				$palettes = $xml.find("palette");
				var t = $palettes.length;
				for (i = 0; i < $palettes.length; i++) {
					var $control_color = $(".template.control-color").clone();
					if (i == 0) {
						$control_color.find("input").attr("checked", "checked");
						$control_color.find(".control-color-thumb").addClass("thumb-selected");
					}
					var $palette = $palettes.filter(":eq(" + i + ")");
					$control_color.removeClass("template");
					$control_color.find("h4").html($palette.find("name").html());
					$control_color.find("input").attr("id", ("inp-palette-" + i));
					$control_color.find("input").attr("value", i);
					$control_color.find(".control-color-thumb").css({ "background-color" : $palette.find("bg>back").html() });
					var blocks = ["top", "middle", "bottom"];
					for (k = 0; k < 3; k++) {
						$control_color.find(".control-color-thumb-bg:eq(" + k + ")").css({ "background-color" : $palette.find(blocks[k] + ">back").html() });
						$control_color.find(".control-color-thumb-content:eq(" + k + ")").css({ "background-color" : $palette.find(blocks[k] + ">fore").html() });
					}
					$("#app-control-palettes").append($control_color);
				}
				$(".control-color-thumb").on('click', function() {
					var $this = $(this);
					$this.closest("#app-control-palettes").find(".control-color-thumb").removeClass("thumb-selected");
					$this.next("input").trigger("click");
					$this.addClass("thumb-selected");
				});
				sample_colors_ready = true;
			}
		});				
		/*IMAGENES*/
		$("#inp-business-type").on("change", function() {
			setImageSelection($(this).val());
		});
		
		/*DESIGN*/
		$(".control-design-thumb img").on('click', function() {
			var $this = $(this);
			$this.closest(".control-desing-cont").find(".control-design-thumb img").removeClass("thumb-selected");
			$this.next("input").trigger("click");
			$this.addClass("thumb-selected");
		}).filter(":first").addClass("thumb-selected");		
	}
	function setImageSelection (ide) {
		$(".photo-container").html("");
		$.getJSON("https://api.unsplash.com/photos/search",{
			client_id: '2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64',
			query: ide,
			page: 1,
			per_page: 20,
			orientation: 'landscape'
		}).done(function(data){
			for(x=0; x<data.length ; x++){
				var $img_thumb = $(".img-thumb.template").clone();
				$img_thumb.removeClass("template").find(".img-thumb-cont").css({
					"background-image" : ("url(" + data[x]["urls"]["regular"] + ")")
				});
				$img_thumb.find("input").attr("value", data[x]["urls"]["regular"]);
				for (i = 0; i < image_types.length; i++) {
					var $this_img_thumb = $img_thumb.clone();
					$this_img_thumb.find("input").attr("name", ("inp-img-" + image_types[i]));
					$("#app-control-images-" + image_types[i] + " .photo-container").append($this_img_thumb);
				}
			}
			
			$(document.body).on('click', '.img-thumb-cont', function() {
				var $this = $(this);
				$this.closest("[id^='app-control-images']").find(".img-thumb").removeClass("thumb-selected");
				$this.next("input").trigger("click");
				$this.parent().addClass("thumb-selected");
			});		
		}).fail(function(){});
	}
	function setAppNavigation() {
		$(".app-control-step:gt(0)").hide();
		$("#control-view-nav>a").on("click", function() {
			if (!$(this).hasClass("disabled")) {
				var inc = $(this).attr("href") == "#next" ? 1 : -1;
				current_step += inc;
				switch (current_step) {
					case 0 :
						$("#control-view-nav>a:eq(0)").addClass("disabled");
						break;
					case 1 :
						$("#control-view-nav>a:eq(0)").removeClass("disabled");
						break;
					case ($("#app-control>.app-control-step").length) :
						showAppCover();
					break;
				}
				goToStep(current_step);
				updateContent();
			}	
		});
		for (i=0; i < $("#app-control>.app-control-step").length -1; i++) {
			$("#control-view-index").append(($(".control-view-index-item.current").clone().removeClass("current")));
		}
		$(".control-view-nav-display-mark:eq(" + current_step + ")").addClass("control-view-nav-display-mark-active");
		$("[name='start']").on("click", function() {
			$("#app-cover").hide();
			$("#app-cover-start").hide();
			$("#app-cover-finish").show();
			/*if($("#nombre").val().trim() == "" || $("#correo").val().trim() == ""){
				$(".empty-fields").css("display","block");
			} else {
				if(!isEmail($("#correo").val())){
					$(".not-email").css("display","block");
				}else {
					$("#app-cover").hide();
					$("#app-cover-start").hide();
					$("#app-cover-finish").show();
				}
			}*/
	
		});
		$("[name='finish']").on("click", function() {
			current_step --;
			$("#app-cover").hide();
		});
		/*NAV BUTTONS*/
		/*APP SWITCH*/
		var $appControl_h = $("#app-control").css("height");
		$("[id^='switch-']").on('click', function() {
			if($(this).attr("id").indexOf("view") > -1) {
				$("#switch-view").hide();
				$("#switch-edit").show();
				$("#control-view-nav").hide();
				$("#app-control>.app-control-step").hide();
				$("#app-control").addClass("view");
			} else {
				$("#switch-view").show();
				$("#switch-edit").hide();
				$("#control-view-nav").show();
				$("#app-control>.app-control-step:eq(" + current_step + ")").show();
				$("#app-control").removeClass("view");
			}
		});
		/*EO APP SWITCH*/
	}
	function goToStep(step) {
		if (step < ($(".app-control-step").length)) {
			$(".app-control-step").hide().filter(":eq(" + step + ")").show();
			$(".control-view-index-item").removeClass("current").filter(":eq(" + step + ")").addClass("current");
		}
		goToByScroll($("#app-control"), 0);
	} 
	function showAppCover() { $("#app-cover").show(); }
	function updateContent() {
		var $this = $(this);
		var $template = $("#template");
		/*Colores*/
		if (sample_colors_ready) {
			var $palette = $palettes.filter(":eq(" + $("[name='inp-palette']:checked").val() + ")");
			var c1 = $palette.find("top>back").html();
			var col_hero_content = HexColorToRGBA(c1, .6);
			var c2 = $palette.find("middle>back").html();
			var col_items = HexColorToRGBA(c2, .6);
			$template.css({
				"background-color" : $palette.find("bg>back").html()
			});
			$template.find("#hero").css({
				"background-color" : $palette.find("top>back").html(),
				"color" : $palette.find("top>fore").html()
			});
			$template.find("#hero-content").css({
				"background-color" : col_hero_content,
				"color" : $palette.find("top>fore").html()
			});
			$template.find("#hero-content h1, #hero-content h2").css({
				"color" : $palette.find("top>fore").html()
			});
			$template.find(".items").css({
				"background-color" : $palette.find("middle>back").html(),
				"color" : $palette.find("middle>fore").html()
			});
			$template.find(".items .item-content").css({
				"background-color" : col_items,
				"color" : $palette.find("middle>fore").html()
			});
			$template.find("footer").css({
				"background-color" : $palette.find("bottom>back").html(),
				"color" : $palette.find("bottom>fore").html()
			});
		}
		/*Content & Contacto*/
		$("[id^='inp-contact-'], [id^='inp-content-']").each(function() {
			var $this = $(this);
			var i_id = $this.attr("id");
			var v_id = i_id.replace("inp", "val");
			if ($this.val() != "") {
				$template.find("#" + v_id).show().closest(".footer-column").show();
				switch (i_id) {
					case "inp-contact-email" :
						$template.find("#val-contact-email").html("<a href='mailto:" + $this.val() + "'>" + $this.val() + "</a>");
						break;
					case "inp-contact-map" :
						$template.find("#val-contact-map").html($this.val());
						break;	
					case "inp-contact-facebook" :
						$template.find("#val-contact-facebook").html('<span class="font-icon">g</span> <a href="' + $this.val() + '">' + $this.val() + '</a>');
						break;	
					case "inp-contact-twitter" :
						$template.find("#val-contact-twitter").html('<span class="font-icon">t</span> <a href="' + $this.val() + '">' + $this.val() + '</a>');
						break;	
					default : 
						$template.find("#" + v_id).html($this.val());
						break;
				}
			} else {
				if ($this.hasClass("optional")) {
					if ($(".app-control-step:eq(" + (current_step) + ")").has($this).length > 0) {
						if (lastKeyPressed == 8) {
							$template.find("#" + v_id).html($this.val());
						}
					}
					if ($(".app-control-step:eq(" + (current_step - 1) + ")").has($this).length > 0) {
						$template.find("#" + v_id).hide();
					}
				} else {
					$template.find("#" + v_id).html($this.attr("placeholder"));
				}
			}
		});
		$template.find(".footer-column:not(:has(li:visible))").hide();
		/*Images*/
		$("[name^='inp-img-']:checked").each(function() {
			var $this = $(this);
			var img_src = $this.val();
			var n_name = $this.attr("name").replace("inp-", "#");
			$template.find(n_name).attr("class", ("img-cont img-MC img-L")).css({
				"background-image" : ("url(" + img_src + ")")
			});
		});
	}
	function updateTemplate() {
		var id = $("[name^='inp-design']:checked").val().replace("inp-design-", "");
		if (template_id != id) {
			template_id = id;
			$("#template").html("");
			var src = "Templates/Template-" + template_id + "/index.html?bar"; 
			$("#template-cont").load("Templates/Template-" + id + "/index.html #template", function() {
				var $template = $("#template");
				$template.find("link[href^='css/styles.css']").attr("href", ("Templates/Template-" + id + "/css/styles.css"));
				$template.find("script[src^='js/scripts.js']").attr("src", ("Templates/Template-" + id + "/js/scripts.js"));
				$template.find(".img-cont").removeAttr("style").attr("style", "background-image: url('Templates/Images/placeholder.png')");
				for (i = 1; i < number_of_items; i ++) {
					addItems(i);		
				}
				updateContent();
			});
		} else { updateContent(); }
	}
	function addItems(i) {
		if ($("#template .items:last .item").length == 3) { $("#template .items:last").after("<div class='items'></div>"); }
		var $item_copy = $(".item:last").clone();
		$item_copy.find("#img-item-" + i).attr("id", ("img-item-" + (i + 1)));
		$item_copy.find("#val-content-title-item-" + i).attr("id", ("val-content-title-item-" + (i + 1)));
		$item_copy.find("#val-content-item-" + i).attr("id", ("val-content-item-" + (i + 1)));
		$("#template .items:last").append($item_copy);
		var c = "";
		switch ($("#template .items:last .item").length % 3) {
			case 0 : c = "three"; break;
			case 1 : c = "one"; break;
			case 2 : c = "two"; break;
		}
		$("#template .items:last").attr("class", "items").addClass(c);
	}
	/*EO APPLICATION FUNCTIONS*/
	/*GENERAL FUNCTIONS*/
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function openRequestedPopup(strUrl, strWindowName) {
		if(windowObjectReference == null || windowObjectReference.closed) {
		windowObjectReference = window.open(strUrl, strWindowName,
				"resizable,scrollbars,status");
		windowObjectReference.focus();
		} else {
		windowObjectReference.focus();
		}
	}
	function goToByScroll($element, target){
		$element.scrollTop(target);
	}
	function HexColorToRGBA(c, a) {
		var s = ("rgba(" + parseInt(c.substr(1, 2), 16) + "," + parseInt(c.substr(3, 2), 16) + "," + parseInt(c.substr(5, 2), 16) + ", " + a + ")");
		return s;
	}
	/*EO GENERAL FUNCTIONS*/
})();
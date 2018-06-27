(function () {
    /*GLOBAL VARIABLES*/
	var windowObjectReference = null;
	var image_types = ["hero", "item-1", "item-2", "item-3"];
	var template_id = "";
	var sample_images_ready = false;
	var current_step = 0;
	var sample_colors_ready = false;
	var $images = null;
	var $palettes = null;
	/*EO GLOBAL VARIABLES*/
	$(document).ready(function() {
		updateTemplate();
		$(document.body).on("change", "[name^='inp-'][type!='text']", function() { updateTemplate(); });
		$(document.body).on("keyup", "[name^='inp-'][type='text'],textarea[name^='inp-']", function() {
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
		
		var jd = getWeb2bJson();

		/*IMAGENES*/
		$.getJSON("https://api.unsplash.com/photos/search",{
			client_id: '2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64',
			query: jd.respuestas[1].respuesta || "pasta",
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
			
			$(".img-thumb-cont").on('click', function() {
				var $this = $(this);
				$this.closest("[id^='app-control-images']").find(".img-thumb").removeClass("thumb-selected");
				$this.next("input").trigger("click");
				$this.parent().addClass("thumb-selected");
			});		
			sample_images_ready = true;
		}).fail(function(){});
		/*NAV BUTTONS*/
		$(".app-control-step:gt(0)").hide();
		$("#control-view-nav-buttons>a").on("click", function() {
			var inc = $(this).attr("href") == "#next" ? 1 : -1;
			current_step += inc;
			switch (current_step) {
				case 0 :
					$("#control-view-nav-buttons>a:eq(0)").hide();
					break;
				case 1 :
					$("#control-view-nav-buttons>a:eq(0)").show();
					break;
				case ($("#app-control>.app-control-step").length) :
					showAppCover();
				break;
			}
			if (current_step < ($("#app-control>.app-control-step").length)) {
				$("#app-control>.app-control-step").hide().filter(":eq(" + current_step + ")").show();
			}
			$(".control-view-nav-display-mark").removeClass("control-view-nav-display-mark-active").filter(":eq(" + current_step + ")").addClass("control-view-nav-display-mark-active");
			goToByScroll($("#app-control"), 0);
		});
		for (i=0; i < $("#app-control>.app-control-step").length; i++) {
			//$("#control-view-nav-display").append("<div class='control-view-nav-display-mark'><span>" + (i + 1) + "</span></div>");
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
		var $appControl = $("#app-control");
		var $switchView = $("#switch-view");
		var $switchEdit = $("#switch-edit");
		var $appControl_h = $appControl.css("height");
		$("[id^='switch-']").on('click', function() {
			if($(this).attr("id").indexOf("view") > -1) {
				$switchView.hide();
				$switchEdit.show();
				$appControl.css({"height" : "2em"});
			} else {
				$switchView.show();
				$switchEdit.hide();
				$appControl.css({"height" : $appControl_h});
			}
		});
		/*EO APP SWITCH*/
	});
	/*APPLICATION FUNCTIONS*/
	function showAppCover() { $("#app-cover").show(); }
	function updateContent() {
		var iFrameDOM = $("#template");
		iFrameDOM.find("#hero-logotipo").css({
			"display" : "none"
		});
		if ($("[name^='inp-name']").val() != "") {
			iFrameDOM.find("#hero-content h1").html($("[name^='inp-name']").val());
		}
		/*Colores*/
		if (sample_colors_ready) {
			var $palette = $palettes.filter(":eq(" + $("[name='inp-palette']:checked").val() + ")");
			var c1 = $palette.find("top>back").html();
			var col_hero_content = ("rgba(" + parseInt(c1.substr(1, 2), 16) + "," + parseInt(c1.substr(3, 2), 16) + "," + parseInt(c1.substr(5, 2), 16) + ", .6)");
			var c2 = $palette.find("middle>back").html();
			var col_items = ("rgba(" + parseInt(c2.substr(1, 2), 16) + "," + parseInt(c2.substr(3, 2), 16) + "," + parseInt(c2.substr(5, 2), 16) + ", .6)");
			iFrameDOM.find("#hero").css({
				"background-color" : $palette.find("top>back").html(),
				"color" : $palette.find("top>fore").html()
			});
			iFrameDOM.find("#hero-content").css({
				"background-color" : col_hero_content,
				"color" : $palette.find("top>fore").html()
			});
			iFrameDOM.find("#hero-content h1, #hero-content h2").css({
				"color" : $palette.find("top>fore").html()
			});
			iFrameDOM.find("body").css({
				"background-color" : $palette.find("bg>back").html()
			});
			iFrameDOM.find("#items").css({
				"background-color" : $palette.find("middle>back").html(),
				"color" : $palette.find("middle>fore").html()
			});
			iFrameDOM.find("#items h2").css({
				"background-color" : col_items,
				"color" : $palette.find("middle>fore").html()
			});
			iFrameDOM.find("footer").css({
				"background-color" : $palette.find("bottom>back").html(),
				"color" : $palette.find("bottom>fore").html()
			});
		}
		/*Content & Contacto*/
		$("[id^='inp-contact-'], [id^='inp-content-']").each(function() {
			var $this = $(this);
			if ($this.val() != "") {
				var i_id = $this.attr("id");
				var v_id = i_id.replace("inp", "val");
				switch (i_id) {
					case "inp-contact-email" :
						iFrameDOM.find("#val-contact-email").html("<a href='mailto:" + $this.val() + "'>" + $this.val() + "</a>");
						break;
					case "inp-contact-map" :
						iFrameDOM.find("#val-contact-map").html($this.val());
						break;	
					case "inp-contact-facebook" :
						iFrameDOM.find("#val-contact-facebook").html('<span class="font-icon">g</span> <a href="' + $this.val() + '">' + $this.val() + '</a>');
						break;	
					case "inp-contact-twitter" :
						iFrameDOM.find("#val-contact-twitter").html('<span class="font-icon">t</span> <a href="' + $this.val() + '">' + $this.val() + '</a>');
						break;	
					default : 
						iFrameDOM.find("#" + v_id).html($this.val());
						break;
				}
			}
		});
		/*Images*/
		if (sample_images_ready) {
			$("[name^='inp-img-']:checked").each(function() {
				var $this = $(this);
				var img_src = $this.val();
				var img_name = $this.attr("name");
				var n_name = img_name.replace("inp-", "#");
				iFrameDOM.find(n_name).attr("class", ("img-cont img-MC img-L"));
				iFrameDOM.find(n_name).css({
					"background-image" : ("url(" + img_src + ")")
				});
			});
		}
	}
	function updateTemplate() {
		var $this = $("[name^='inp-design']:checked");
		var id = $this.val();
		if (template_id != id) {
			template_id = id;
			id = id.replace("inp-design-", "");
			$("#template").html("");
			var src = "Templates/Template-" + id + "/index.html"; 
			$("#template-cont").load("Templates/Template-" + id + "/index.html #template", function() {
				$("#template").find("link[href^='css/styles.css']").attr("href", ("Templates/Template-" + id + "/css/styles.css"));
				$("#template").find("script[src^='js/scripts.js']").attr("src", ("Templates/Template-" + id + "/js/scripts.js"));
				$("#template").find(".img-cont").removeAttr("style").attr("style", "background-image: url('Templates/Images/placeholder.png')");
				updateContent();
			});
		} else {
			updateContent();
		}
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
	function getWeb2bJson(){
		var jsonData = localStorage.getItem("web2b");
	
		if(jsonData == null)
			{
				jsonData = {};
				jsonData.respuestas = [];                
			}
		else{
			jsonData = JSON.parse(jsonData);
		}
		return jsonData;
	}	
	/*EO GENERAL FUNCTIONS*/
})();
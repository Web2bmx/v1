var image_types = [
				["slogan", "La imágen para tu eslógan"],
				["item-001", "La imágen para tu servicio o producto 1"],
				["item-002", "La imágen para tu servicio o producto 2"],
				["item-003", "La imágen para tu servicio o producto 3"]
			];
$(document).ready(function() {
	var template_id = "";
	var sample_images_ready = false;
	var $images = null;
	var sample_colors_ready = false;
	var $palettes = null;
	updateTemplate();
	$(document.body).on("change", "[name^='inp-'][type!='text']", function() { updateTemplate(); });
	$(document.body).on("keyup", "[name^='inp-'][type='text']", function() { updateTemplate(); });
	$(document.body).on("keyup", "textarea[name^='inp-']", function() { updateTemplate(); });
	function onMyFrameLoad() { setTimeout(updateContent, 700); }
	function updateContent() {
		var iFrameDOM = $("#app-preview>iframe").contents();
		iFrameDOM.find("#hero-logotipo").css({
			"display" : "none"
		});
		iFrameDOM.find("#hero-content h1").html($("[name^='inp-name']").val());
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
			$("[id^='inp-images-']:checked").each(function() {
				var $this = $(this);
				$img = $images.filter(":eq(" + $this.val() + ")");
				
				switch ($this.attr("name")) {
					case "inp-img-slogan" :
						iFrameDOM.find("#img-hero").attr("class", ("img-cont img-" + $img.find("focus").html() + " img-" + $img.find("orientation").html()));
						iFrameDOM.find("#img-hero").css({
								"background-image" : ("url(" + $img.find("src").html() + ")")
						});
						break;
					case "inp-img-item-001" :
						iFrameDOM.find("#img-item-1").attr("class", ("img-cont img-" + $img.find("focus").html() + " img-" + $img.find("orientation").html()));
						iFrameDOM.find("#img-item-1").css({
								"background-image" : ("url(" + $img.find("src").html() + ")")
						});
						break;
					case "inp-img-item-002" :
						iFrameDOM.find("#img-item-2").attr("class", ("img-cont img-" + $img.find("focus").html() + " img-" + $img.find("orientation").html()));
						iFrameDOM.find("#img-item-2").css({
								"background-image" : ("url(" + $img.find("src").html() + ")")
						});
						break;
					case "inp-img-item-003" :
						iFrameDOM.find("#img-item-3").attr("class", ("img-cont img-" + $img.find("focus").html() + " img-" + $img.find("orientation").html()));
						iFrameDOM.find("#img-item-3").css({
								"background-image" : ("url(" + $img.find("src").html() + ")")
						});
						break;
				}
				
			});
		}
	}
	function updateTemplate() {
		var $this = $("[name^='inp-design']:checked");
		var id = $this.val();
		if (template_id != id) {
			template_id = id;
			id = id.replace("inp-design-", "");
			$("#app-preview>iframe").remove();
			var iframe = document.createElement('iframe');
			iframe.onload = onMyFrameLoad();
			iframe.src = "Templates/Template-" + id + "/index.html"; 
			document.getElementById("app-preview").appendChild(iframe);
		} else {
			updateContent();
		}
		/**/
		/**/
	}
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
				$control_color.find(".control-color-thumb-bg:eq(0)").css({ "background-color" : $palette.find("top>back").html() });
				$control_color.find(".control-color-thumb-content:eq(0)").css({ "background-color" : $palette.find("top>fore").html() });
				$control_color.find(".control-color-thumb-bg:eq(1)").css({ "background-color" : $palette.find("middle>back").html() });
				$control_color.find(".control-color-thumb-content:eq(1)").css({ "background-color" : $palette.find("middle>fore").html() });
				$control_color.find(".control-color-thumb-bg:eq(2)").css({ "background-color" : $palette.find("bottom>back").html() });
				$control_color.find(".control-color-thumb-content:eq(2)").css({ "background-color" : $palette.find("bottom>fore").html() });
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
	/*COLORES*/
	/*IMAGENES*/
	$.ajax({
		url: "xml/sample_images.xml",
		dataType: "xml",
		success: function(data) {
			$xml = $(data);
			$images = $xml.find("image");
			var t = $images.length;
			for (i = 0; i < image_types.length; i++) {
				$("#app-control-images").append("<div id='app-control-images-" + image_types[i][0] + "'><h4>" + image_types[i][1] + "</h4></div>");
				for (k = 0; k < t; k++) {
					var img_checked = k == i ? " checked='checked'" : "";
					var img_class = k == i ? " thumb-selected'" : "";
					$img = $images.filter(":eq(" + k + ")");
					$("#app-control-images-" + image_types[i][0]).append("<div class='img-thumb " + img_class + " img-" + $img.find("orientation").html() + " img-" + $img.find("focus").html() + "' style='background-image: url(" + $img.find("src").html() + "&cs=tinysrgb&h=100);'></div>" +
																"<input type='radio' id='inp-images-" + image_types[i][2] + "-" + k + "' name='inp-img-" + image_types[i][0] + "' value='" + k + "'" + img_checked + " style='display: none;'/>");
				}
			}
			$(".img-thumb").on('click', function() {
				var $this = $(this);
				$this.closest("[id^='app-control-images']").find(".img-thumb").removeClass("thumb-selected");
				$this.next("input:first").trigger("click");
				$this.addClass("thumb-selected");
			});
			sample_images_ready = true;
		}
	});
	/*IMAGENES*/
	/*NAV BUTTONS*/
	var current_step = 0;
	$("#app-control>.app-control-step").filter(":gt(0)").hide();
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
	});
	for (i=0; i < $("#app-control>.app-control-step").length; i++) {
		//$("#control-view-nav-display").append("<div class='control-view-nav-display-mark'><span>" + (i + 1) + "</span></div>");
	}
	$(".control-view-nav-display-mark:eq(" + current_step + ")").addClass("control-view-nav-display-mark-active");
	function showAppCover() {
		$("#app-cover").show();
	}
	$("[name='start']").on("click", function() {
		$("#app-cover").hide();
		$("#app-cover-start").hide();
		$("#app-cover-finish").show();
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
	$("[id^='switch-']").on('click', function() {
		if($appControl.is(":visible")) { $switchView.hide(); $switchEdit.show(); $appControl.hide(); }
		else { $switchView.show(); $switchEdit.hide(); $appControl.show(); }
	});
	/*EO APP SWITCH*/
});
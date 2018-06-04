var palettes = [
				["Natural", [["#FFFFFF", "#444444"], ["#74db6b", "#FFFFFF"], ["#44963d", "#DDDDDD"], ["#FFFFFF"]]],
				["Calido", [["#e27b5f", "#995f21"], ["#ffe95b", "#995f21"], ["#726b39", "#444444"], ["#000000"] ]],
				["Colorido", [["#FF0000", "#FFFFFF"], ["#EE00FF", "#454545"], ["#6666FF", "#AA00AA"], ["#000000"]]],
				["Azules", [["#2D707F", "#FFFFFF"], ["#A7EFFF", "#222222"], ["#54777F", "#FFFFFF"], ["#ADADAD"]]],
				["Grises", [["#666666", "#FFFFFF"], ["#EFEFEF", "#222222"], ["#444444", "#FFFFFF"], ["#FFFFFF"]]],
				["Rojos", [["#820333", "#FFFFFF"], ["#540032", "#FFFFFF"], ["#C9283E", "#FFFFFF"], ["#000000"]]]
			];
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
		var c1 = palettes[$("[name='inp-palette']:checked").val()][1][0][0];
		var col_hero_content = ("rgba(" + parseInt(c1.substr(1, 2), 16) + "," + parseInt(c1.substr(3, 2), 16) + "," + parseInt(c1.substr(5, 2), 16) + ", .6)");
		var c2 = palettes[$("[name='inp-palette']:checked").val()][1][1][0];
		var col_items = ("rgba(" + parseInt(c2.substr(1, 2), 16) + "," + parseInt(c2.substr(3, 2), 16) + "," + parseInt(c2.substr(5, 2), 16) + ", .6)");
		iFrameDOM.find("#hero").css({
			"background-color" : palettes[$("[name='inp-palette']:checked").val()][1][0][0],
			"color" : palettes[$("[name='inp-palette']:checked").val()][1][0][1]
		});
		iFrameDOM.find("#hero-content").css({
			"background-color" : col_hero_content,
			"color" : palettes[$("[name='inp-palette']:checked").val()][1][0][1]
		});
		iFrameDOM.find("body").css({
			"background-color" : palettes[$("[name='inp-palette']:checked").val()][1][3][0]
		});
		iFrameDOM.find("#items").css({
			"background-color" : palettes[$("[name='inp-palette']:checked").val()][1][1][0],
			"color" : palettes[$("[name='inp-palette']:checked").val()][1][1][1]
		});
		iFrameDOM.find("#items h2").css({
			"background-color" : col_items,
			"color" : palettes[$("[name='inp-palette']:checked").val()][1][1][1]
		});
		iFrameDOM.find("footer").css({
			"background-color" : palettes[$("[name='inp-palette']:checked").val()][1][2][0],
			"color" : palettes[$("[name='inp-palette']:checked").val()][1][2][1]
		});
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
	for (i = 0; i < palettes.length; i++) {
		var $control_color = $(".template.control-color").clone();
		if (i == 0) {
			$control_color.find("input").attr("checked", "checked");
			$control_color.find(".control-color-thumb").addClass("thumb-selected");
		}
		$control_color.removeClass("template");
		$control_color.find("h4").html(palettes[i][0]);
		$control_color.find("input").attr("id", ("inp-palette-" + i));
		$control_color.find("input").attr("value", i);
		$control_color.find(".control-color-thumb").css({ "background-color" : palettes[i][1][3][0] });
		$control_color.find(".control-color-thumb-bg:eq(0)").css({ "background-color" : palettes[i][1][0][0] });
		$control_color.find(".control-color-thumb-content:eq(0)").css({ "background-color" : palettes[i][1][0][1] });
		$control_color.find(".control-color-thumb-bg:eq(1)").css({ "background-color" : palettes[i][1][1][0] });
		$control_color.find(".control-color-thumb-content:eq(1)").css({ "background-color" : palettes[i][1][1][1] });
		$control_color.find(".control-color-thumb-bg:eq(2)").css({ "background-color" : palettes[i][1][2][0] });
		$control_color.find(".control-color-thumb-content:eq(2)").css({ "background-color" : palettes[i][1][2][1] });
		$("#app-control-palettes").append($control_color);
	}
	$(".control-color-thumb").on('click', function() {
		var $this = $(this);
		$this.closest("#app-control-palettes").find(".control-color-thumb").removeClass("thumb-selected");
		$this.next("input").trigger("click");
		$this.addClass("thumb-selected");
	});				
	/*COLORES*/
	/*IMAGENES*/
	
/* 	for (i = 0; i < image_types.length; i++) {
		$("#app-control-images").append("<div id='app-control-images-" + image_types[i][0] + "'><h4>" + image_types[i][1] + "</h4></div>");
		for (k = 0; k < images.length; k++) {
			var img_checked = k == i ? " checked='checked'" : "";
			var img_class = k == i ? " thumb-selected'" : "";
			$("#app-control-images-" + image_types[i][0]).append("<div class='img-thumb'>" +
														"<img class='" + img_class + "' src='" + images[k] + "' />" +	
														"<input type='radio' id='inp-images-" + image_types[i][2] + "-" + k + "' name='inp-img-" + image_types[i][0] + "' value='" + images[k] + "'" + img_checked + " style='display: none;'/>" +	
														"</div>");
		}
	} */

	$.getJSON("https://api.unsplash.com/photos/search",{
		client_id: '2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64',
		query: 'pasta',
		page: 1,
		per_page: 20,
		orientation: 'landscape'
	}).done(function(data){
		console.log(data);
		var html = "";
		for(x=0; x<data.length ; x++){
			html += "<div class='img-thumb'>" +
			"<img data-url=" + data[x].urls.regular + " class='' src='" + data[x].urls.thumb + "' />" +
			"</div>";
		}
		for (i = 0; i < image_types.length; i++) {
			$("#app-control-images-" + image_types[i][0] + " .photo-container").append(html);
		}
		$(".img-thumb>img").on('click', function() {
			var $this = $(this);
			$this.closest("[id^='app-control-images']").find("img").removeClass("thumb-selected");
			$this.next("input").trigger("click");
			$this.addClass("thumb-selected");
		});		
	}).fail(function(){

	});

	$(".img-thumb>img").on('click', function() {
		var $this = $(this);
		$this.closest("[id^='app-control-images']").find("img").removeClass("thumb-selected");
		$this.next("input").trigger("click");
		$this.addClass("thumb-selected");
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
	$("#control-view-nav>a").on("click", function() {
		var inc = $(this).attr("href") == "#next" ? 1 : -1;
		current_step += inc;
		switch (current_step) {
			case 0 :
				$("#control-view-nav>a:eq(0)").hide();
				break;
			case 1 :
				$("#control-view-nav>a:eq(0)").show();
				break;
			case ($("#app-control>.app-control-step").length) :
				showAppCover();
			break;
		}
		if (current_step < ($("#app-control>.app-control-step").length)) {
			$("#app-control>.app-control-step").hide().filter(":eq(" + current_step + ")").show();
		}	
	});
	function showAppCover() {
		$("#app-cover").show();
	}
	$("[name='start']").on("click", function() {
		if($("#nombre").val().trim() == "" || $("#correo").val().trim() == ""){
			$(".empty-fields").css("display","block");
		} else {
			if(!isEmail($("#correo").val())){
				$(".not-email").css("display","block");
			}else {
				$("#app-cover").hide();
				$("#app-cover-start").hide();
				$("#app-cover-finish").show();
			}
		}

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

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

var windowObjectReference = null; // global variable

function openRequestedPopup(strUrl, strWindowName) {
  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(strUrl, strWindowName,
		   "resizable,scrollbars,status");
	windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  }
}
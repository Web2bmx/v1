var palettes = [
				["Natural", [["#FFFFFF", "#444444"], ["#74db6b", "#FFFFFF"], ["#44963d", "#DDDDDD"]]],
				["Calido", [["#e27b5f", "#995f21"], ["#ffe95b", "#995f21"], ["#726b39", "#444444"]]],
				["Colorido", [["#FF0000", "#FFFFFF"], ["#EE00FF", "#454545"], ["#6666FF", "#AA00AA"]]],
				["Azules", [["#2D707F", "#FFFFFF"], ["#A7EFFF", "#222222"], ["#54777F", "#FFFFFF"]]],
				["Grises", [["#666666", "#FFFFFF"], ["#EFEFEF", "#222222"], ["#444444", "#FFFFFF"]]],
				["Rojos", [["#820333", "#FFFFFF"], ["#540032", "#FFFFFF"], ["#C9283E", "#FFFFFF"]]]
			];
var images = [
				"Templates/Images/Thumbnails/pretty-woman-makeup-mirror-glamour-39250.jpg",
				"Templates/Images/Thumbnails/girl-dandelion-yellow-flowers-160699.jpg",
				"Templates/Images/Thumbnails/portrait-woman-girl-blond-157967.jpg",
				"Templates/Images/Thumbnails/pexels-photo-887352.jpg",
				"Templates/Images/Thumbnails/pexels-photo-221063.jpg",
				"Templates/Images/Thumbnails/pexels-photo-315704.jpg",
				"Templates/Images/Thumbnails/pexels-photo-315708.jpg",
				"Templates/Images/Thumbnails/pexels-photo-461217.jpg"
			];
var image_types = [
				["slogan", "La imágen para tu eslógan"],
				["item-001", "La imágen para tu servicio o producto 1"],
				["item-002", "La imágen para tu servicio o producto 2"],
				["item-003", "La imágen para tu servicio o producto 3"]
			];
$(document).ready(function() {
	var template_id = "";
	updateTemplate();
	$(document.body).on("change", "[name^='inp-'][type!='text']", function() { updateTemplate(); });
	$(document.body).on("keyup", "[name^='inp-'][type='text']", function() { updateTemplate(); });
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
			"background-color" : palettes[$("[name='inp-palette']:checked").val()][1][1][0]
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
		/*Contacto*/
		$("[id^='inp-contact-']").each(function() {
			var $this = $(this);
			if ($this.val() != "") {
				switch ($this.attr("id")) {
				case "inp-contact-email" :
					iFrameDOM.find("#contacto-correo").html("<a href='mailto:" + $this.val() + "'>" + $this.val() + "</a>");
					break;
				case "inp-contact-phone" :
					iFrameDOM.find("#contacto-telefono strong").html($this.val());
					break;
				case "inp-contact-address" :
					iFrameDOM.find("#contacto-direccion").html($this.val());
					break;	
				case "inp-contact-map" :
					iFrameDOM.find("#mapa").html($this.val());
					break;	
				case "inp-contact-facebook" :
					iFrameDOM.find("#contacto-facebook").html('<span class="font-icon">g</span> <a href="' + $this.val() + '">' + $this.val() + '</a>');
					break;	
				case "inp-contact-twitter" :
					iFrameDOM.find("#contacto-twitter").html('<span class="font-icon">t</span> <a href="' + $this.val() + '">' + $this.val() + '</a>');
					break;	
				}
			}
		});
		/*Content*/
		$("[id^='inp-content-']").each(function() {
			var $this = $(this);
			if ($this.val() != "") {
				switch ($this.attr("id")) {
				case "inp-content-slogan" :
					iFrameDOM.find("#hero h2").html($this.val());
					break;
				case "inp-content-item-001" :
					iFrameDOM.find(".item:eq(0) h2").html($this.val());
					break;
				case "inp-content-item-002" :
					iFrameDOM.find(".item:eq(1) h2").html($this.val());
					break;
				case "inp-content-item-003" :
					iFrameDOM.find(".item:eq(2) h2").html($this.val());
					break;
				}
			}
		});
		/*Images*/
		$("[id^='inp-images-']:checked").each(function() {
			var $this = $(this);
			var img_ori = $this.val();
			var img_src = img_ori.substr(img_ori.lastIndexOf("/"), (img_ori.length - img_ori.lastIndexOf("/")));
			var o_img_ori = "";
			var o_img_src = "";
			switch ($this.attr("name")) {
				case "inp-img-slogan" :
					o_img_ori = iFrameDOM.find("#hero-image").attr("src");
					o_img_src = o_img_ori.substr(3, (o_img_ori.lastIndexOf("/") - 3));
					n_src = "../" + o_img_src + img_src;
					if (n_src.indexOf("-circle/") > -1) { n_src = n_src.replace(".jpg", ".png"); }
					else { n_src = n_src.replace(".png", ".jpg"); }
					iFrameDOM.find("#hero-image").attr("src", n_src);
					break;
				case "inp-img-item-001" :
					o_img_ori = iFrameDOM.find(".item-image:eq(0)").attr("src");
					o_img_src = o_img_ori.substr(0, o_img_ori.lastIndexOf("/"));
					n_src = o_img_src + img_src;
					if (n_src.indexOf("-circle/") > -1) { n_src = n_src.replace(".jpg", ".png"); }
					else { n_src = n_src.replace(".png", ".jpg"); }
					iFrameDOM.find(".item-image:eq(0)").attr("src", n_src);
					break;
				case "inp-img-item-002" :
					o_img_ori = iFrameDOM.find(".item-image:eq(1)").attr("src");
					o_img_src = o_img_ori.substr(0, o_img_ori.lastIndexOf("/"));
					n_src = o_img_src + img_src;
					if (n_src.indexOf("-circle/") > -1) { n_src = n_src.replace(".jpg", ".png"); }
					else { n_src = n_src.replace(".png", ".jpg"); }
					iFrameDOM.find(".item-image:eq(1)").attr("src", n_src);
					break;
				case "inp-img-item-003" :
					o_img_ori = iFrameDOM.find(".item-image:eq(2)").attr("src");
					o_img_src = o_img_ori.substr(0, o_img_ori.lastIndexOf("/"));
					n_src = o_img_src + img_src;
					if (n_src.indexOf("-circle/") > -1) { n_src = n_src.replace(".jpg", ".png"); }
					else { n_src = n_src.replace(".png", ".jpg"); }
					iFrameDOM.find(".item-image:eq(2)").attr("src", n_src);
					break;
			}
		});
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
	/*DISEÑO*/
	
	/*COLORES*/
	
	for (i = 0; i < palettes.length; i++) {
		var color_checked = i == 0 ? " checked='checked'" : "";
		$("#app-control-palettes").append('<label>' + palettes[i][0] + '</label><input type="radio" id="inp-palette-' + i + '" name="inp-palette" value="' + i + '"' + color_checked + ' /><br />' + 
											'<div class="palette-colors">' +
											'<div class="palette-color" style="background-color: ' + palettes[i][1][0][0] + ';"></div>' +
											'<div class="palette-color" style="background-color: ' + palettes[i][1][1][0] + ';"></div>' +
											'<div class="palette-color" style="background-color: ' + palettes[i][1][2][0] + ';"></div>' +
											'</div><br />'
		);
	}				
	/*COLORES*/
	/*IMAGENES*/
	
	for (i = 0; i < image_types.length; i++) {
		$("#app-control-images").append("<div id='app-control-images-" + image_types[i][0] + "'><h4>" + image_types[i][1] + "</h4></div>");
		for (k = 0; k < images.length; k++) {
			var img_checked = k == i ? " checked='checked'" : "";
			$("#app-control-images-" + image_types[i][0]).append("<div class='img-thumb'>" +
														"<img src='" + images[k] + "' />" +	
														"<input type='radio' id='inp-images-" + image_types[i][2] + "-" + k + "' name='inp-img-" + image_types[i][0] + "' value='" + images[k] + "'" + img_checked + "/>" +	
														"</div>");
		}
	}
	/*IMAGENES*/
	/*NAV BUTTONS*/
	$("#app-control>div").append("<nav class='control-view-nav'><a href='#prev'>Anterior</a><a href='#next'>Siguiente</a></nav>").filter(":gt(0)").hide();
	$("[href='#prev']:lt(2)").remove();
	$("[href='#prev']:last").remove();
	$("[href='#next']:first").html("¡Comienza ya!");
	$("[href='#next']:last").remove();
	$(".control-view-nav>a").on("click", function() {
		var inc = $(this).attr("href") == "#next" ? 1 : -1;
		var id = $(".control-view-nav").index($(this).parent()) + inc;
		if (id == 1) {
			$("#app-switch").show();
		}
		$("#app-control>div").hide().filter(":eq(" + id + ")").show();
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
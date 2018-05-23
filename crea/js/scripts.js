$(document).ready(function() {
	$(document.body).on("change", "[name^='inp-']", function() {
		console.log("change");
		updateTemplate();
		
		var $this = $(this);
		var id = $this.attr("name");
		id = id.replace("inp", "val");
		$("#" + id + ">span").html($this.val());
	});
	/*DISEÑO*/
	updateTemplate();
	function onMyFrameLoad() {
		setTimeout(function(){
			var iFrameDOM = $("#app-iframe>iframe").contents();
			iFrameDOM.find("#hero-content h1").html($("[name^='inp-name']").val());
			/*Colores
			iFrameDOM.find("body").css({
				"background-color" : palettes[$("[name='inp-palette']:checked").val()][1][0],
				"color" : palettes[$("[name='inp-palette']:checked").val()][1][1]
			}).find(".item").css({
				"background-color" : palettes[$("[name='inp-palette']:checked").val()][1][2]
			});*/
			/*Contacto
			$("[id^='inp-contact-']").each(function() {
				var $this = $(this);
				if ($this.val() != "") {
					iFrameDOM.find("#contact>ul").append("<li><strong>" + $this.attr("placeholder") + ":</strong> " + $this.val() + "</li>");
				}
			});*/
			/*Content
			$("[id^='inp-content-']").each(function() {
				var $this = $(this);
				console.log($this.val());
				if ($this.val() != "") {
					switch ($this.attr("id")) {
						case "inp-content-slogan" :
							iFrameDOM.find("#hero>h1").html($this.val());
							break;
						case "inp-content-item-001" :
							iFrameDOM.find(".item:eq(0)>h2").html($this.val());
							break;
						case "inp-content-item-002" :
							iFrameDOM.find(".item:eq(1)>h2").html($this.val());
							break;
						case "inp-content-item-003" :
							iFrameDOM.find(".item:eq(2)>h2").html($this.val());
							break;
					}
				}
			});*/
			/*
			$("[id^='inp-images-']:checked").each(function() {
				var $this = $(this);
				switch ($this.attr("name")) {
					case "inp-img-slogan" :
						iFrameDOM.find("#hero").append("<img src='" + $this.val() + "' />");
						break;
					case "inp-img-item-001" :
						iFrameDOM.find(".item:eq(0)").append("<img src='" + $this.val() + "' />");
						break;
					case "inp-img-item-002" :
						iFrameDOM.find(".item:eq(1)").append("<img src='" + $this.val() + "' />");
						break;
					case "inp-img-item-003" :
						iFrameDOM.find(".item:eq(2)").append("<img src='" + $this.val() + "' />");
						break;
				}
			});*/
		}, 300);
	}
	function updateTemplate() {
		var $this = $("[name^='inp-design']:checked");
		var id = $this.val();
		id = id.replace("inp-design-", "");
		$("#app-iframe>iframe").remove();
		var iframe = document.createElement('iframe');
		iframe.onload = onMyFrameLoad();
		iframe.src = "Templates/Template-" + id + "/index.html"; 
		document.getElementById("app-iframe").appendChild(iframe);
		/**/
		/**/
	}
	/*DISEÑO*/
	/*COLORES*/
	var palettes = [
					["Neutro", ["#FFFFFF", "#000000", "#999999"]],
					["Oscruo", ["#000000", "#FFFFFF", "#999999"]],
					["Festivo", ["#0000FF", "#00FFFF", "#FFFF00"]]
					];
	for (i = 0; i < palettes.length; i++) {
		var color_checked = i == 0 ? " checked='checked'" : "";
		$("#app-control-palettes").append('<label>' + palettes[i][0] + '</label><input type="radio" id="inp-palette-' + i + '" name="inp-palette" value="' + i + '"' + color_checked + ' /><br />' + 
											'<div class="palette-colors">' +
											'<div class="palette-color" style="background-color: ' + palettes[i][1][0] + ';"></div>' +
											'<div class="palette-color" style="background-color: ' + palettes[i][1][1] + ';"></div>' +
											'<div class="palette-color" style="background-color: ' + palettes[i][1][2] + ';"></div>' +
											'</div><br />'
		);
	}				
	/*COLORES*/
	/*IMAGENES*/
	var images = [
				"Templates/Images/Thumbnails/girl-dandelion-yellow-flowers-160699.jpg",
				"Templates/Images/Thumbnails/pexels-photo-221063.jpg",
				"Templates/Images/Thumbnails/pexels-photo-315704.jpg",
				"Templates/Images/Thumbnails/pexels-photo-315708.jpg",
				"Templates/Images/Thumbnails/pexels-photo-461217.jpg",
				"Templates/Images/Thumbnails/pexels-photo-887352.jpg",
				"Templates/Images/Thumbnails/portrait-woman-girl-blond-157967.jpg",
				"Templates/Images/Thumbnails/pretty-woman-makeup-mirror-glamour-39250.jpg"
				];
	var image_types = [
							["slogan", "La imágen para tu eslógan"],
							["item-001", "La imágen para tu servicio o producto 1"],
							["item-002", "La imágen para tu servicio o producto 2"],
							["item-003", "La imágen para tu servicio o producto 3"]
						];
	for (i = 0; i < image_types.length; i++) {
		$("#app-control-images").append("<div id='app-control-images-" + image_types[i][0] + "'><h4>" + image_types[i][1] + "</h4></div>");
		for (k = 0; k < images.length; k++) {
			var img_checked = k == 0 ? " checked='checked'" : "";
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
	$("body").append("<div id='app-switch'><a href='#switch'>Mira tu sitio</a></div>");
	$("[href='#switch']").on('click', function() {
		if($("#app-control").is(":visible")) {
			$(this).html("Edita tu sitio");
			$("#app-control").hide();
		} else {
			$(this).html("Mira tu sitio");
			$("#app-control").show();
		}
	}).parent().hide();
	/*APP SWITCH*/
});
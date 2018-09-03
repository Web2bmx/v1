
export default function creator () {
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
	var jd = null;	
	var winWidth = $(window).width(),
	winHeigth = $(window).height(); 	
	
    var validation = function(){
		jd = getWeb2bJson();
        /* check data validation */
        //checkDataValidation();
    };

    var init = function() {
		/*SET UP TEMPLATE*/
		updateTemplate();
		/*EO SET UP TEMPLATE*/
		/*SET UP APP*/
		setAppNavigation();
		setAppSteps();
		/*EO SET UP APP*/
    };

	/*APPLICATION FUNCTIONS*/
	var checkDataValidation = function(){			
		if(jd.respuestas.length < 7){
			location.href = "/tour";
		}
	};

	var setAppSteps = function () {
		$(".dialog").dialog({
			autoOpen: false,
			modal: true,
			width: winWidth,
			show: {
				effect: "fade",
				duration: 1000
			},
			hide: {
				effect: "fade",
				duration: 1000
			},
			closeOnEscape: false
	  	}); 

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
				if($(this).attr("type") != "file" && $(this).attr("type") != "submit"){
					$(this).attr("name", ("inp-img-item-" + number_of_items));
				}
				if($(this).attr("type") == "file"){
					$(this).attr("name", ("item-" + number_of_items));
				}
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
				let $xml = $(data),
					$palettes = $xml.find("palette"),
					t = $palettes.length;
				for (let i = 0; i < $palettes.length; i++) {
					var $control_color = $(".template.control-color").clone();
					if (i == 0) {
						$control_color.find("input").attr("checked", "checked");
						$control_color.find(".control-color-thumb").addClass("thumb-selected");
					}
					var $palette = $palettes.filter(":eq(" + i + ")");
					$control_color.removeClass("template");
					$control_color.find("h4").html($palette.find("name").html()).remove();
					$control_color.find("input").attr("id", ("inp-palette-" + i));
					$control_color.find("input").attr("value", i);
					$control_color.find(".control-color-thumb").css({ "background-color" : $palette.find("bg>back").html() });
					var blocks = ["top", "middle", "bottom"];
					for (let k = 0; k < 3; k++) {
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
		
		/* Upload image*/
		var that = this;
		$('.file-upload').on('submit',uploadImage);

		/* manage dialog */
		$("#ok_btn").click(function(){
			$(".alert.dialog").dialog( "close" ); 
		});		
	};
	var setImageSelection = function (ide) {
		$(".photo-container").html("");
		//Check if there are already images upload from user
		var imagenes = jd.imagenes;
		if(imagenes){
			for(let k in imagenes){
				var arr = imagenes[k].split("#");
				for(let i = 0; i< arr.length; i++ ){
					var $img_thumb = $(".img-thumb.template").clone();
					$img_thumb.removeClass("template").find(".img-thumb-cont").css({
						"background-image" : ("url(/crea/client_images/" + arr[i] + ")")
					});
					$img_thumb.find("input").attr("value", "/crea/client_images/" + arr[i]);
					var $this_img_thumb = $img_thumb.clone();
					$this_img_thumb.find("input").attr("name", ("inp-img-" + k));
					$("#app-control-images-" + k + " .photo-container").append($this_img_thumb);				
				}
			}
		}
		$.getJSON("https://api.unsplash.com/photos/search",{
			client_id: '2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64',
			query: ide,
			page: 1,
			per_page: 20,
			orientation: 'landscape'
		}).done(function(data){
			for(let x=0; x<data.length ; x++){
				var $img_thumb = $(".img-thumb.template").clone();
				$img_thumb.removeClass("template").find(".img-thumb-cont").css({
					"background-image" : ("url(" + data[x]["urls"]["regular"] + ")")
				});
				$img_thumb.find("input").attr("value", data[x]["urls"]["regular"]);
				for (let i = 0; i < image_types.length; i++) {
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
			randomizeTemplate();	
		}).fail(function(){});
	};

	var randomizeTemplate = function() {
		var $color = $("[name^='inp-palette']");
		$color.removeAttr("checked").filter(":eq(" + (Math.floor(Math.random() * $color.length)) + ")").attr("checked", "checked");
		
		updateContent();
	};

	var setAppNavigation = function () {
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
		for (let i=0; i < $("#app-control>.app-control-step").length -1; i++) {
			$("#control-view-index").append(($(".control-view-index-item.current").clone().removeClass("current")));
		}
		$(".control-view-nav-display-mark:eq(" + current_step + ")").addClass("control-view-nav-display-mark-active");
		$("[name='start']").on("click", function() {
			// $("#app-cover").hide();
			// $("#app-cover-start").hide();
			// $("#app-cover-finish").show();
			if($("#nombre").val().trim() == "" || 
				$("#correo").val().trim() == "" || 
				$("#password").val().trim() == ""){
				$(".empty-fields").css("display","block");
			} else if(!isValidDomain($("#nombre").val().trim().toLowerCase())){
				$(".name-invalid").show();
			} else if(!isEmail($("#correo").val())){
					$(".not-email").css("display","block");
			}/*else if(!validPassword($("#password").val())){
					$(".password-invalid").css("display","block");
				}*/ else {
					$.post("scripts/crear_usuario.php",{
						nombre: $("#nombre").val().trim(),
						correo: $("#correo").val().trim(),
						password: $("#password").val(),
						info: JSON.stringify(jd)
					}).done(function(result){						
						if(result.exists){
							$(".alert.dialog p").html('Ya existe un usuario asociado a este correo. <br /> Se creara una página nueva asociada a este usuario y se ha actualizado la contraseña. <br/> Para seleccionar alguna de tus páginas asociadas a tu cuenta ingresa en la pagina e inicio dando click en &quot;Ingresar&quot;');
							$(".alert.dialog").dialog( "open" );
							$("#ok_btn").on("click.exists",function(){
								startTemplateProcess(result);
								$("#ok_btn").off("click.exists");
							});
						}else{
							startTemplateProcess(result);
						}				
						//translate data
						translateData(jd);
					}).fail(function(result){
						response = JSON.parse(result.responseText);
						$(".invalid-response").text("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + response.mensaje);
						$(".invalid-response").css("display","block");						
					});

			}
	
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
	};

	var startTemplateProcess = function(data){
		$("#app-cover").hide();
		$("#app-cover-start").hide();
		$("#app-cover-finish").show();
		//localStorage.removeItem("web2b");

		localStorage.setItem("web2b_templateId", data.idSitio);
		localStorage.setItem("web2b_userId", JSON.stringify(data.userId));			
		localStorage.setItem("web2b_template", JSON.stringify(jd));

		//load previous content
		var selections = jd.selections;
		if(selections){
			for(var key in selections){
				if(selections[key].type == "image"){
					$(key).attr("class", ("img-cont img-MC img-L")).css({
						"background-image" : ("url(" + selections[key].img + ")")
					});					
				}
			}
		}
	};

	var goToStep = function(step) {
		if (step < ($(".app-control-step").length)) {
			$(".app-control-step").hide().filter(":eq(" + step + ")").show();
			$(".control-view-index-item").removeClass("current").filter(":eq(" + step + ")").addClass("current");
		}
		goToByScroll($("#app-control"), 0);
	}; 
	var showAppCover = function () { $("#app-cover").show(); };
	var updateContent = function () {
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
				"background-color" : $palette.find("top>back").html(),
				"color" : $palette.find("top>fore").html()
			});
			$template.find("#hero-content h1, #hero-content h2").css({
				"color" : $palette.find("top>fore").html()
			});
			$template.find(".items").css({
				"background-color" : "transparent",
				"color" : $palette.find("middle>fore").html()
			});
			$template.find(".items .item-content").css({
				"background-color" : $palette.find("middle>back").html(),
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

			//Save selection to object
			var selections = jd.selections || {};
			selections[n_name] = selections[n_name] || {};
			selections[n_name].type = "image";
			selections[n_name].img = img_src;
			jd.selections = selections;
			saveWeb2bJson();			
		});
	};
	var updateTemplate = function () {
		var id = $("[name^='inp-design']:checked").val().replace("inp-design-", "");
		if (template_id != id) {
			template_id = id;
			$("#template").html("");
			var src = "Templates/Template-" + template_id + "/index.php?t=" + Math.floor(Math.random() * 4); 
			$("#template-cont").load(src + " #template", function() {
				var $template = $("#template");
				$template.find("link[href^='css/styles.css']").attr("href", ("Templates/Template-" + id + "/css/styles.css"));
				$template.find(".img-cont").removeAttr("style").attr("style", "background-image: url('Templates/Images/placeholder.png')");
				for (let i = 1; i < number_of_items; i ++) {
					addItems(i);		
				}
				updateContent();
				$.ajax({
					url: ("Templates/Template-" + id + "/js/scripts.js"),
					dataType: "script",
					success: function() {}
				});
			});
		} else { updateContent(); }
	};
	var addItems = function (i) {
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
	};
	/*EO APPLICATION FUNCTIONS*/
	/*GENERAL FUNCTIONS*/
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function isValidDomain(name) {
		var regex = /([a-z0-9])/;
		return regex.test(name);
	}	
	function validPassword(password) {
		var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
		return regex.test(password);
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

	var getWeb2bJson = function (){
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
	};	

	function HexColorToRGBA(c, a) {
		var s = ("rgba(" + parseInt(c.substr(1, 2), 16) + "," + parseInt(c.substr(3, 2), 16) + "," + parseInt(c.substr(5, 2), 16) + ", " + a + ")");
		return s;
	}

	var translateData = function(data){
		$.ajax({
			url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en",
			headers: {
				'Ocp-Apim-Subscription-Key': 'facf28fe7a39442883ab1970bc9348ac',
				'Content-Type': 'application/json'
			},
			data: JSON.stringify ([{'Text' : /*data.respuestas[0].respuesta*/"Abarrotes" }]),
			method: 'POST'
		  }).done(function(data) {
			if(data){
				setImageSelection(data[0].translations[0].text);	
			}
		  });	
	};

	var uploadImage = function (e){
		e.preventDefault();
		var f = $("input[type=file]",e.currentTarget),
			formData = new FormData(),
			ide = f.data("ide"),
			name = f.attr("name");

		formData.append(f.attr("name"), f[0].files[0]);		
		$.ajax({
			url: "scripts/uploadImage.php",
			type: "post",
			data: formData,
			cache: false,
			contentType: false,
			processData: false
		})
		.done(function(res){
			if(res.upload == 1){			
				var imagenes = jd.imagenes || {};
				imagenes[name] = (imagenes[name] ? imagenes[name] + "#" + res.texto : res.texto);

				var $img_thumb = $(".img-thumb.template").clone();
				$img_thumb.removeClass("template").find(".img-thumb-cont").css({
					"background-image" : ("url(/crea/client_images/" + res.texto + ")")
				});
				$img_thumb.find("input").attr("value", "/crea/client_images/" + res.texto);
				var $this_img_thumb = $img_thumb.clone();
				$this_img_thumb.find("input").attr("name", ("inp-img-" + name));
				$("#app-control-images-" + name + " .photo-container").prepend($this_img_thumb);
				jd.imagenes = imagenes;
				saveWeb2bJson();
			}
		});
	};
	var saveWeb2bJson = function(){
		localStorage.setItem("web2b_template", JSON.stringify(jd));
		//ONLY FOR TESTING PURPOSES
		localStorage.setItem("web2b", JSON.stringify(jd));
		// PENDIENTE ---> salvar en la BD
	};
    /*EO GENERAL FUNCTIONS*/
    
    return {
        validation: validation,
        init: init
    };
}
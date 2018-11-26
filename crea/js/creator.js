import validator from "./validator";

export default function creator () {
    /*GLOBAL VARIABLES*/
	let template_id = "", /* Stores the value of the current template id, needed to compare when it changes, used on updateTemplate*/
		current_step = 0, /* Stores the value of the current step in the app-control, used on many functions */
		number_of_items = 1, /*WORK, number of items should come from jd*/
		$palettes = null, /*Stores the color palettes from XML, used when loading colors and when updating template*/
		lastKeyPressed = 0, /*Used to compare last pressed key for updating values*/
		jd = null,	/*Used to store main data object, JasonData*/
		isNew = false; /*Used to flag whether is a new user */

	var new_validator = new validator(); /* adds validator helper object, contains string validation capabilities */

	var validation = function(){/*Public function, invoked before init by scripts*/
		jd = getObjFromLocalStorage("web2b");/*Retrieves Json Data from local Storage*/
		if(Object.keys(jd).length){/*If at least one question has been answered*/
			if(jd.respuestas && Object.keys(jd.respuestas).length < 3){/*Incomplete tour*/
				location.href = "/tour";/*takes user to the tour*/
			} else {
				isNew = true;/*it's a new user (?)*/
			}
		} else {/*jd has something on it, so it's a returning visitor*/
			let web2bTemplate = getObjFromLocalStorage("web2b_template");/*get template from local storage*/
			if(Object.keys(web2bTemplate).length){/*template has any key*/
				jd = web2bTemplate;/*why does jd gets replaced by webtemplate?*/
			} else {
				location.href = "/";/*takes User to root, why?*/
			}
		}
    };
	var init = function() {/*init is public function and is invoked after validate*/
		$(".dialog").dialog({/*Set .dialog from JQuery UI*/
			autoOpen: false,
			modal: true,
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
		if(isNew){/*If is a new User, open Dialog*/											
			$(".app-new-start.dialog").dialog("option", "width", 400);
			$(".app-new-start.dialog").dialog("open");
		}
		
		setAppNavigation();/*Sets up the navigation for App*/
		setAppControls();/*Set the controls of the app so they update the template values*/
		setAppSteps();/*Sets up the steps*/
		updateTemplate();/*Updates template*/
	};
	/*APPLICATION FUNCTIONS*/
	var setAppControls = function () {
		$(document.body).on("change", "[name^='inp-'][type!='text']", function() { 
			updateTemplate();
		});
		$(document.body).on("keyup", "[name^='inp-'][type='text'],textarea[name^='inp-']", function(e) {
			lastKeyPressed = e.keyCode || e.which;
			if(!$(e.currentTarget).attr('pattern') || new_validator.isValidinput($(e.currentTarget))){
				updateTemplate();
				$(".form-error",$(e.currentTarget).parent()).hide();
			} else {
				$(".form-error",$(e.currentTarget).parent()).show();
			}
		});
		/*ADD ITEMS*/
		$("#inp-content-item-add-y").on("click", function() {
			var $this = $(this);
			var index = $(".app-control-step").index($this.closest(".app-control-step"));
			$("#control-view-index").prepend(($(".control-view-index-item.current").clone().removeClass("current"))).append(($(".control-view-index-item.current").clone().removeClass("current")));
			addItems(number_of_items);
			number_of_items ++;
			var $i_t = $(".app-control-step:eq(" + (current_step - 1) + ")").clone();
			$i_t.find("h2:eq(0)").html("Tu producto o servicio");
			$i_t.find("input[type=text]").attr({
						"id" : ("inp-content-title-item-" + number_of_items),
						"name" : ("inp-content-title-item-" + number_of_items),
						"placeholder" : "Tu producto o servicio"
					}).val("");
			$i_t.find("textarea").attr({
						"id" : ("inp-content-item-" + number_of_items),
						"name" : ("inp-content-item-" + number_of_items),
						"placeholder" : "Tu producto o servicio"
					}).val("");
			$i_t.find("h2:eq(1)").html("Elige una imagen para tu producto o servicio");
			$i_t.find("#app-control-images-item-" + (number_of_items - 1)).attr("id", ("app-control-images-item-" + number_of_items));
			$i_t.find("input").each(function() {
				if($(this).attr("type") != "file" && $(this).attr("type") != "submit"){
					$(this).attr("name", ("inp-img-item-" + number_of_items));
				}
				if($(this).attr("type") == "file"){
					$(this).attr("name", ("item-" + number_of_items));
				}
			});
			$this.closest(".app-control-step").before($i_t);
			current_step = index;
			goToStep(current_step);
			$this.prop('checked', false);
			$("#inp-content-item-add-n").trigger("click");
			centerNav();
			$(window).resize(function(){ 
				centerNav();
			});
		});
	};
	var setAppSteps = function () {
		/*TOOLTIPS****/
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
		$("#single-modal i").on("click", function() {
			$("#single-modal").fadeOut();
		});
		/* LOAD COLORS */
		$.ajax({
			url: "xml/sample_colors.xml",
			dataType: "xml",
			success: (data) => {
				let $xml; 
				$xml =$(data);
				$palettes = $xml.find("palette");
				setColors();
			}
		});	
		/* TEMPLATE DESIGN*/
		$(".control-design-thumb").on('click', function() {
			$(".control-design-thumb aside.thumb-selected").removeClass("thumb-selected");
			$("aside",this).addClass("thumb-selected");
			$("[name^='inp-design']").removeAttr("checked");
			$("input",this).attr("checked","checked");
			updateTemplate();			
		});
		/* Upload image*/
		var that = this;
		$('.file-upload button').on("click", (e) =>{
			$(e.currentTarget).next("input").click();
		});
		$('.file-upload input[type=file]').on('change',(e) => {
			let file = $(e.currentTarget)[0].files[0].name;
			$("span",$(e.currentTarget).parent()).text(file);
			$("input[type=submit]",$(e.currentTarget).closest("form")).attr("disabled",false);
		});
		$('.file-upload').on('submit',uploadImage);

		/* manage dialog */
		$("#ok_btn").click(function(){
			$(".alert.dialog").dialog( "close" ); 
		});		
	};
	var setColors = function() {
		let t = $palettes.length;
		for (let i = 0; i < $palettes.length; i++) {
			var $control_color = $(".template.control-color").clone();
			var $palette = $palettes.filter(":eq(" + i + ")");
			$control_color.removeClass("template");
			$control_color.find("h4").html($palette.find("name").html());
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
			let $this = $(this);
			$this.closest("#app-control-palettes").find(".control-color-thumb").removeClass("thumb-selected");
			$this.next("input").trigger("click");
			$this.addClass("thumb-selected");
		});
	}
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
		/* LOAD IMAGES FROM UNSPLASH */
		$.getJSON("https://api.unsplash.com/photos/search",{
			client_id: '2aaa588b969353176886d12597d7ee7ee3860961c9ac468df4ccf5198ab20e64',
			query: ide,
			page: 1,
			per_page: 20,
			orientation: 'landscape'
		}).done(function(data){
			let image_types = ["hero", "item-1"];
			for(let x=0; x<data.length ; x++){
				var $img_thumb = $(".img-thumb.template").clone();
				$img_thumb.removeClass("template").find(".img-thumb-cont").css({
					"background-image" : ("url(" + data[x]["urls"]["regular"] + ")")
				}).attr("data-img-url", data[x]["urls"]["regular"]);
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
			$(document.body).on('click', '.img-thumb-cont-zoom', function() {
				let img_url = $(this).parent().find(".img-thumb-cont").attr("data-img-url");
				$("#single-modal>div").html("<img src='" + img_url + "' class='img-thumb-zoomed' />");
				$("#single-modal").fadeIn();
			});
			updateContent();	
		}).fail(function(){});
	};
	var setAppNavigation = function () {
		$(".app-control-step:gt(0)").hide();		
		$("#control-view-nav>a").on("click", function(e) {
			e.preventDefault();
			let totalItems = $("#app-control>.app-control-step").length;
			if (!$(this).hasClass("disabled")) {
				var inc = $(this).attr("href") == "#next" ? 1 : -1;
				current_step += inc;
				if(current_step >= totalItems) {
					current_step = totalItems;
				}
				if(current_step == 1) {
					$("#control-view-nav>a:eq(0)").removeClass("disabled");
				}
				goToStep(current_step);
				updateContent();
			}	
		});
		for (let i=0; i < $("#app-control>.app-control-step").length -1; i++) {
			$("#control-view-index").append(($(".control-view-index-item.current").clone().removeClass("current")));
		}
		$(document).on("click", ".control-view-index-item", function() {
			let $this = $(this);
			let index = $(".control-view-index-item").index($this);
			current_step = index;
			goToStep(current_step);
			updateContent();
		});
		$(".control-view-nav-display-mark:eq(" + current_step + ")").addClass("control-view-nav-display-mark-active");
		centerNav();

		/* ON NEW PAGE */
		$("[name='start']").on("click", function() {
			$(".form-error").hide();
			if($("#nombrePagina").val().trim() == "" || 
				$("#correo").val().trim() == "" || 
				$("#password").val().trim() == ""){
				$(".empty-fields").css("display","block");
			} else if(!new_validator.isValidDomain($("#nombrePagina").val().trim().toLowerCase())){
				$(".name-invalid").show();
			} else if(!new_validator.isEmail($("#correo").val())){
					$(".not-email").css("display","block");
			}else if(!new_validator.validPassword($("#password").val())){
					$(".password-invalid").css("display","block");
				} else {
					saveSelected('inp-content-name',$("#nombrePagina").val().trim(),'text');
					$.post("scripts/crear_usuario.php",{
						correo: $("#correo").val().trim(),
						password: $("#password").val(),
						info: JSON.stringify(jd)
					}).done(function(result){
						if(!result.ok){
							$(".otherMsgs").html(result.error);
							$(".otherMsgs").css("display","block");
						}else{
							$(".app-new-start.dialog").dialog('close');
							startTemplateProcess(result);
						}				
					}).fail(function(result){
						response = JSON.parse(result.responseText);
						$(".invalid-response").text("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + response.mensaje);
						$(".invalid-response").css("display","block");						
					});

			}
	
		});
		$(".finish").on("click", function() {
			current_step --;
			$("#app-cover").hide();
		});
		/*NAV BUTTONS*/
		$(".app-cover-start .next").click(function(){
			closeAppCover();
		});
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
				centerNav();
				topStepMargin();				
				$(window).resize(function(){
					topStepMargin();
				});
			}
			$("body").toggleClass("init");
		});
		/*EO APP SWITCH*/
	};
	var closeAppCover = function(){
		$("#app-cover").hide();
		$(".app-cover-start").hide();
		$(".app-cover-finish").show();
		current_step = 0;	
	};
	var openAppCover = function(pos){
		$("#app-cover").show();
		if(pos=='start'){
			$(".app-cover-start").show();
			$(".app-cover-finish").hide();			
		} else {
			$(".app-cover-start").hide();
			$(".app-cover-finish").show();					
		}
	};
	var startTemplateProcess = function(data){
		localStorage.removeItem("web2b");
		localStorage.setItem("web2b_templateId", data.idSitio);
		localStorage.setItem("web2b_userId", data.userId);		
		localStorage.setItem("web2b_template", JSON.stringify(jd));
	};
	var onTemplateLoaded = function(){

		let text = '', arr = Object.keys(jd.respuestas), originaltext = '';
		for(let i = 0; i < arr.length; i++){
			if(jd.respuestas[arr[i]].tipo == 6){
				text = jd.respuestas[arr[i]].localizacion_en;
				originaltext = jd.respuestas[arr[i]].respuesta;
			}
		}

		//check if translation already exists
		if(text != ''){
			setImageSelection(text);
		} else {
			translateData(originaltext);
		}
		
		//load previous content
		var selections = jd.selections;
		if(selections){
			for(var key in selections){
				switch(selections[key].type){
					case "image":
						$(key).attr("class", ("img-cont img-MC img-L")).css({
							"background-image" : ("url(" + selections[key].img + ")")
						});	
					break;
				}
			}
		}
	};
	var goToStep = function(step) {
		if(step == -1){
			openAppCover("start");
		} else if (step < ($(".app-control-step").length)) {
			$(".app-control-step").hide().filter(":eq(" + step + ")").show();
			$(".control-view-index-item").removeClass("current").filter(":eq(" + step + ")").addClass("current");
		} else {
			openAppCover("final");
		}
	};
	var showAppCover = function () { $("#app-cover").show(); };
	var updateContent = function () {
		let $this = $(this),
		$template = $("#template"),
		selections = jd.selections || {};
		topStepMargin();
		/*Colores*/
		let palette_id = 0;
		if ($("[name='inp-palette']:checked").length == 0) {
			if (selections["palette"]) {
				palette_id = selections["palette"].value;
			} else {
				selections["palette"] = { "name": "palette", "type": "id", "value":"0" };
				palette_id = selections["palette"].value;
			}
			$(".control-color-thumb:eq(" + palette_id + ")").addClass("thumb-selected");
			$("[name='inp-palette']:eq(" + palette_id + ")").attr("checked", "checked");
		} else {
			palette_id = $("[name='inp-palette']:checked").val();
			selections["palette"].value = palette_id;
		}
		saveSelected("palette",palette_id,'id');
		/**/
		var $palette = $palettes.filter(":eq(" + palette_id + ")");
		var c1 = $palette.find("top>back").html();
		var col_hero_content = HexColorToRGBA(c1, 0.6);
		var c2 = $palette.find("middle>back").html();
		var col_items = HexColorToRGBA(c2, 0.6);
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
		/*Content & Contacto*/
		$("[id^='inp-contact-'], [id^='inp-content-'], #siteName").each(function() {
			let $this = $(this),
				i_id = $this.attr("id"),
				v_id = i_id.replace("inp", "val");
				if (i_id == "inp-content-slogan") {
					if (!selections[i_id]) {
						selections[i_id] = {};
						let web2bTemplate = getObjFromLocalStorage("web2b");
						let slogan_from_tour = "";
						for (let key in web2bTemplate.respuestas) {
							if(web2bTemplate.respuestas[key].tipo == 3) {
								slogan_from_tour = web2bTemplate.respuestas[key].respuesta;
								break;
							}
						}
						saveSelected("inp-content-slogan",slogan_from_tour,'text');
					}
				} else {
					selections[i_id] = selections[i_id] || {};
				}
				
			if (($this.val() != "") || (selections[i_id].text != undefined)) {
				if (($this.val() != "")) {
					saveSelected(i_id,$this.val(),'text');
					$template.find("#" + v_id).show().closest(".footer-column").show();
				} else {
					$this.val(selections[i_id].text);

				}
				switch (i_id) {
					case "inp-contact-email" :
						$template.find("#val-contact-email").html("<a href='mailto:" + selections[i_id].text + "'>" + selections[i_id].text + "</a>");
						break;
					case "inp-contact-map" :
						$template.find("#val-contact-map").html(selections[i_id].text);
						break;	
					case "inp-contact-facebook" :
						$template.find("#val-contact-facebook").html('<span class="font-icon">g</span> <a href="' + selections[i_id].text + '">' + selections[i_id].text + '</a>');
						break;	
					case "inp-contact-twitter" :
						$template.find("#val-contact-twitter").html('<span class="font-icon">t</span> <a href="' + selections[i_id].text + '">' + selections[i_id].text + '</a>');
						break;	
					case "siteName":
						$(".siteName span").text(selections[i_id].text);
						$(".siteName").attr("href","http://" + selections[i_id].text + ".web2b.mx");
					/* falls through */
					default : 
						$template.find("#" + v_id).html(selections[i_id].text);
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
			saveSelected(n_name,img_src,'image');
		});
		saveWeb2bJson();				
	};
	var topStepMargin = function(){
		let actual = $(".app-control-step:visible > div"),
			remain = $("#app-control").height() - 
			$("#app-control-nav").height() -
			$("#app-switch").height() -
			actual.height();
		actual.css("margin-top",remain > 0 ? remain/2 + "px" : "0");
	};
	var updateTemplate = function () {		
		let primeraVez = false,	
			id = $("[name^='inp-design']:checked").val().replace("inp-design-", "");
		// si es la primera vez
		if(template_id == ""){		
			if(jd.selections  && jd.selections.templateTypeId){
				let newInp;
				primeraVez = true;
				template_id =jd.selections.templateTypeId.value;
				$("[name^='inp-design']").removeAttr("checked");
				newInp = $("input[value='inp-design-" + template_id + "']");
				newInp.attr("checked","checked");
				$("aside", newInp.parent()).addClass("thumb-selected");
				id = template_id;
			} else {
				$(".control-desing-cont .control-design-thumb:first-child aside").addClass("thumb-selected");
			}
		}
		if (primeraVez || template_id != id) {
			template_id = id;
			saveSelected("templateTypeId",id,"config");
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
					success: onTemplateLoaded
				});
			});
		} else {
			updateContent(); 
		}
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
	function openRequestedPopup(strUrl, strWindowName) {
		let windowObjectReference = null;
		if(windowObjectReference == null || windowObjectReference.closed) {
		windowObjectReference = window.open(strUrl, strWindowName,
				"resizable,scrollbars,status");
		windowObjectReference.focus();
		} else {
		windowObjectReference.focus();
		}
	}
	var getObjFromLocalStorage = function (key){
		var jsonData = localStorage.getItem(key);
		if(jsonData == null) {
			jsonData = {};           
		} else {
			try{
				jsonData = JSON.parse(jsonData);
			} catch(e){
				return jsonData;
			}
		}
		return jsonData;
	};	
	function HexColorToRGBA(c, a) {
		var s = ("rgba(" + parseInt(c.substr(1, 2), 16) + "," + parseInt(c.substr(3, 2), 16) + "," + parseInt(c.substr(5, 2), 16) + ", " + a + ")");
		return s;
	}
	var uploadImage = function (e){
		e.preventDefault();
		var f = $("input[type=file]",e.currentTarget),
			formData = new FormData(),
			ide = f.data("ide"),
			name = f.attr("name");
		$("input[type=submit],button",e.currentTarget).attr("disabled",true);
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
		}).always(function(){
			$("button",e.currentTarget).attr("disabled",false);
		});
	};
	var saveWeb2bJson = function(){
		let strJD = JSON.stringify(jd),
			userId = getObjFromLocalStorage("web2b_userId"),
			idSitio = getObjFromLocalStorage("web2b_templateId"),
			savedJD = localStorage.getItem("web2b_template");	
		if(strJD && savedJD != strJD && !(userId instanceof Object) && !(idSitio instanceof Object)){
			localStorage.setItem("web2b_template", strJD);
			$.post("scripts/salvar_datos.php",{
				userId: userId,
				idSitio: idSitio,
				info: strJD
			}).done(function(result){						
				if(!result.ok){
					console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + result.mensaje);					
				}
			}).fail(function(result){
				console.log("Algo salió mal. Por favor intentalo de nuevo mas tarde. " + result);					
			});		
		}
	};
	var saveSelected = function(name, value,type) {
		let selections = jd.selections || {};
		selections[name] = selections[name] || {};
		selections[name].type = type;
		switch(type){
			case 'image':				
				selections[name].img = value;
			break;
			case 'text':
				selections[name].text = value;
			break;
			case 'config':
				selections[name].value = value;
			break;
		}
		//Save selection to object
		jd.selections = selections;		
	};
	var centerNav= function() {
		let parentW = $("#control-view-index").parent().width();
		$("#control-view-index").css("padding-left",parentW/2 - $("#control-view-index").width()/2);
	};
	var translateData = function(text){
		$.get("https://translate.yandex.net/api/v1.5/tr.json/translate",
			{
				key: 'trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2',
				lang: 'es-en',
				text: text,
				format: 'plain'
			}
		  ).done(function(data) {
			if(data){
				setImageSelection(decodeURIComponent(data.text[0]));
			}
		  });	
	};	
	/*EO GENERAL FUNCTIONS*/
    return {
        validation: validation,
        init: init
    };
}
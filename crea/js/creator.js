import validator from "./validator";
import colorManager from "./colorManager";
import imageManager from "./imageManager";
import tooltipManager from "./tooltipManager";
import itemManager from "./itemManager";
import dataManager from "../../js/dataManager";
import pageManager from '../../js/pageManager';

export default function creator () {
    /*GLOBAL VARIABLES*/
	let template_id = "", /* Stores the value of the current template id, needed to compare when it changes, used on updateTemplate*/
		current_step = 0, /* Stores the value of the current step in the app-control, used on many functions */
		lastKeyPressed = 0, /*Used to compare last pressed key for updating values*/
		jd = null,	/*Used to store main data object, JasonData*/
		isNew = false; /*Used to flag whether is a new user */
		
	
	var new_validator = new validator(); /* adds validator helper object, contains string validation capabilities */
	var new_colorManager = new colorManager(); /* adds color manager object */
	var new_imageManager = new imageManager(); /* adds image manager object */
	var new_tooltipManager = new tooltipManager(); /* adds tooltip manager object */
	var new_itemManager = new itemManager(); /* adds item manager object */
	var new_dataManager = new dataManager();
	var new_PageManger = new pageManager();
	
	var validation = function(){/*Public function, invoked before init by scripts*/
		jd = new_dataManager.getObjFromLocalStorage("web2b");/*Retrieves Json Data from local Storage*/
		if(Object.keys(jd).length){/*If at least one question has been answered*/
			if(jd.respuestas && Object.keys(jd.respuestas).length < 3){/*Incomplete tour*/
				location.href = "/tour";/*takes user to the tour*/
			} else {
				isNew = true;/*it's a new user (?)*/
			}
		} else {/*jd has something on it, so it's a returning visitor*/
			let web2bTemplate = new_dataManager.getObjFromLocalStorage("web2b_template");/*get template from local storage*/
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
		} else {
			new_PageManger.getPaginasFromLS();
			if (new_PageManger.hasPages()) $(".change-page").show();
		}

		
		
		setAppNavigation();/*Sets up the navigation for App*/
		setAppControls();/*Set the controls of the app so they update the template values*/
		setAppSteps();/*Sets up the steps*/
		updateTemplate();/*Updates template*/
		$("#app-control").on("itemWasAdded", function() {
			current_step = new_itemManager.getIndex();
			goToStep(current_step);
			centerNav();
		});
		new_itemManager.setItems();
		new_tooltipManager.setTooltips();
		
		$("#single-modal i").on("click", function() {
			$("#single-modal").fadeOut();
		});
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
	};
	var setAppSteps = function () {
		
			
		/* TEMPLATE DESIGN*/
		$(".control-design-thumb").on('click', function() {
			$(".control-design-thumb aside.thumb-selected").removeClass("thumb-selected");
			$("aside",this).addClass("thumb-selected");
			$("[name^='inp-design']").removeAttr("checked");
			$("input",this).attr("checked","checked");
			updateTemplate();			
		});
		/* Upload image*/
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
		$(window).resize(function(){ 
			centerNav();
		});
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
					new_dataManager.saveSelected(jd,'inp-content-name',$("#nombrePagina").val().trim(),'text');
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
		/* SWITCH TEMPLATE */
		$(".change-page").click((e) => {
			e.preventDefault();
			let userId = new_dataManager.getObjFromLocalStorage("web2b_userId");
			new_PageManger.fillModal(userId, () => {
				location.reload();
			});
			$(".ventana-login").dialog( "option", "width", 400 );		
			$(".ventana-login").dialog( "open" );
		});		
		$(".cerrar-ventana").click(function(){
			$(".ventana-login").dialog( "close" ); 
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
		localStorage.setItem("web2b_pages", JSON.stringify(data.paginas));
		if(data.paginas.length > 1) $(".change-page").show();
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
			new_imageManager.setImageSelection(jd, text);
			updateContent();
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
		
		new_dataManager.saveSelected(jd,"palette",new_colorManager.changeColors(selections),'id');
		new_colorManager.updateColors($template);
		/*Content & Contacto*/
		$("[id^='inp-contact-'], [id^='inp-content-'], #siteName").each(function() {
			let $this = $(this),
				i_id = $this.attr("id"),
				v_id = i_id.replace("inp", "val");
				if (i_id == "inp-content-slogan") {
					if (!selections[i_id]) {
						selections[i_id] = {};
						let web2bTemplate = new_dataManager.getObjFromLocalStorage("web2b");
						let slogan_from_tour = "";
						for (let key in web2bTemplate.respuestas) {
							if(web2bTemplate.respuestas[key].tipo == 3) {
								slogan_from_tour = web2bTemplate.respuestas[key].respuesta;
								break;
							}
						}
						new_dataManager.saveSelected(jd,"inp-content-slogan",slogan_from_tour,'text');
					}
				} else {
					selections[i_id] = selections[i_id] || {};
				}
				
			if (($this.val() != "") || (selections[i_id].text != undefined)) {
				if (($this.val() != "")) {
					new_dataManager.saveSelected(jd,i_id,$this.val(),'text');
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
			new_dataManager.saveSelected(jd,n_name,img_src,'image');
		});
		new_dataManager.saveWeb2bJson(jd);				
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
			new_dataManager.saveSelected(jd,"templateTypeId",id,"config");
			$("#template").html("");
			var src = "Templates/Template-" + template_id + "/index.php?t=4"; 
			$("#template-cont").load(src + " #template", function() {
				var $template = $("#template");
				$template.find("link[href^='css/styles.css']").attr("href", ("Templates/Template-" + id + "/css/styles.css"));
				$template.find(".img-cont").removeAttr("style").attr("style", "background-image: url('Templates/Images/placeholder.png')");
				for (let i = 1; i < new_itemManager.getNumberOfItems(); i ++) {
					new_itemManager.addItems(i);		
				}
				new_colorManager.loadColors($template);
				updateContent();
				onTemplateLoaded();
				/*$.ajax({
					url: ("Templates/Template-" + id + "/js/scripts.js"),
					dataType: "script",
					success: onTemplateLoaded
				});*/
			});
		} else {
			updateContent(); 
		}
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
				new_dataManager.saveWeb2bJson(jd);
			}
		}).always(function(){
			$("button",e.currentTarget).attr("disabled",false);
		});
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
				new_imageManager.setImageSelection(jd,decodeURIComponent(data.text[0]));
				updateContent();
			}
		  });	
	};	
	/*EO GENERAL FUNCTIONS*/
    return {
        validation: validation,
		init: init,
		updateContent : updateContent
    };
}
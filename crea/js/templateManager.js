export default function templateManager () { 
    var _ctrl = null;
    var init = function(_that) {
        _ctrl = _that;
    }
    var startTemplateProcess = function(data){
        localStorage.removeItem("web2b");
		localStorage.setItem("web2b_templateId", data.idSitio);
		localStorage.setItem("web2b_userId", data.userId);		
		localStorage.setItem("web2b_template", JSON.stringify(_ctrl.jd));
		localStorage.setItem("web2b_pages", JSON.stringify(data.paginas));
		if(data.paginas.length > 1) $(".change-page").show();
	};
    var onTemplateLoaded = function(){
        let text = '', arr = Object.keys(_ctrl.jd.respuestas), originaltext = '';
		for(let i = 0; i < arr.length; i++){
			if(_ctrl.jd.respuestas[arr[i]].tipo == 6){
				text = _ctrl.jd.respuestas[arr[i]].localizacion_en;
				originaltext = _ctrl.jd.respuestas[arr[i]].respuesta;
			}
		}
        //check if translation already exists
		if(text != ''){
			_ctrl.new_imageManager.setImageSelection(_ctrl.jd, text);
			updateContent();
		} else {
			_ctrl.new_validator.translateData(originaltext);
		}
		//load previous content
		var selections = _ctrl.jd.selections;
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
    var updateTemplate = function () {		
        let primeraVez = false,	
			id = $("[name^='inp-design']:checked").val().replace("inp-design-", "");
		// si es la primera vez
		if(_ctrl.template_id == ""){		
			if(_ctrl.jd.selections  && _ctrl.jd.selections.templateTypeId){
				let newInp;
				primeraVez = true;
				_ctrl.template_id = _ctrl.jd.selections.templateTypeId.value;
				$("[name^='inp-design']").removeAttr("checked");
				newInp = $("input[value='inp-design-" + _ctrl.template_id + "']");
				newInp.attr("checked","checked");
				$("aside", newInp.parent()).addClass("thumb-selected");
				id = _ctrl.template_id;
			} else {
				$(".control-desing-cont .control-design-thumb:first-child aside").addClass("thumb-selected");
			}
        }
        if (primeraVez || _ctrl.template_id != id) {
            _ctrl.template_id = id;
			_ctrl.new_dataManager.saveSelected(_ctrl.jd,"templateTypeId",id,"config");
			$("#template").html("");
			var src = "Templates/Template-" + _ctrl.template_id + "/index.php?t=4"; 
			$("#template-cont").load(src + " #template", function() {
				var $template = $("#template");
				$template.find("link[href^='css/styles.css']").attr("href", ("Templates/Template-" + id + "/css/styles.css"));
				//$template.find(".img-cont").removeAttr("style").attr("style", "background-image: url('Templates/Images/placeholder.png')");
				for (let i = 1; i < _ctrl.new_itemManager.getNumberOfItems(); i ++) {
					_ctrl.new_itemManager.addItems(i);		
				}
				_ctrl.new_colorManager.loadColors($template);
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
    var updateContent = function () {
        let $this = $(this),
		$template = $("#template"),
		selections = _ctrl.jd.selections || {};
		_ctrl.new_appManager.topStepMargin();
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,"palette",_ctrl.new_colorManager.changeColors(selections),'id');
        _ctrl.new_colorManager.updateColors($template);
        /*Content & Contacto*/
        $("[id^='inp-contact-'], [id^='inp-content-'], #siteName").each(function() {
			let $this = $(this),
				i_id = $this.attr("id"),
				v_id = i_id.replace("inp", "val");
				if (i_id == "inp-content-slogan") {
					if (!selections[i_id]) {
						selections[i_id] = {};
						let web2bTemplate = _ctrl.new_dataManager.getObjFromLocalStorage("web2b");
						let slogan_from_tour = "";
						for (let key in web2bTemplate.respuestas) {
							if(web2bTemplate.respuestas[key].tipo == 3) {
								slogan_from_tour = web2bTemplate.respuestas[key].respuesta;
								break;
							}
						}
						_ctrl.new_dataManager.saveSelected(_ctrl.jd,"inp-content-slogan",slogan_from_tour,'text');
					}
				} else {
					selections[i_id] = selections[i_id] || {};
				}
				
			if (($this.val() != "") || (selections[i_id].text != undefined)) {
				if (($this.val() != "")) {
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,i_id,$this.val(),'text');
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
					default : 
						$template.find("#" + v_id).html(selections[i_id].text);
						break;
				}
			} else {
				if ($this.hasClass("optional")) {
					if ($(".app-control-step:eq(" + (_ctrl.current_step) + ")").has($this).length > 0) {
						if (_ctrl.lastKeyPressed == 8) {
							$template.find("#" + v_id).html($this.val());
						}
					}
					if ($(".app-control-step:eq(" + (_ctrl.current_step - 1) + ")").has($this).length > 0) {
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
			_ctrl.new_dataManager.saveSelected(_ctrl.jd,n_name,img_src,'image');
		});
        _ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
    };
    return {
        init : init,
        onTemplateLoaded: onTemplateLoaded,
        updateTemplate: updateTemplate,
        updateContent: updateContent,
        startTemplateProcess : startTemplateProcess
    };
}
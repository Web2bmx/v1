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
    var loadTemplate = function() {
		let id = $("[name^='inp-design']:checked").val();
		id = id.replace("inp-design-", "");
		if (_ctrl.sessionStatus == "START SESSION") {
			$("aside", $("input[value='inp-design-" + id + "']").parent()).addClass("thumb-selected");
		}
		if (_ctrl.sessionStatus == "RESUME SESSION") {
			id = _ctrl.jd.selections.templateTypeId.value;
			$("[name^='inp-design']").removeAttr("checked");
			let newInp = $("input[value='inp-design-" + id + "']");
			newInp.attr("checked","checked");
			$("aside", newInp.parent()).addClass("thumb-selected");
		}
		
		/* */
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,"templateTypeId",id,"config");
			$("#template").html("");
			var src = "Templates/Template-" + id + "/index.php?t=4"; 
			$("#template-cont").load(src + " #template", function() {
				var $template = $("#template");
				$template.find("link[href^='css/styles.css']").attr("href", ("Templates/Template-" + id + "/css/styles.css"));
				//$template.find(".img-cont").removeAttr("style").attr("style", "background-image: url('Templates/Images/placeholder.png')");
				for (let i = 1; i < _ctrl.new_itemManager.getNumberOfItems(); i ++) {
					_ctrl.new_itemManager.addItems(i);		
				}
				_ctrl.new_colorManager.loadColors($template);
				_ctrl.new_imageManager.setImageSelection(_ctrl.jd.respuestas[22].localizacion_en);
				updateContent();
                /*$.ajax({
					url: ("Templates/Template-" + id + "/js/scripts.js"),
					dataType: "script",
					success: onTemplateLoaded
				});*/
			});
	};
	var updateContent = function () {
        let $template = $("#template");
		let selections = _ctrl.jd.selections || {};
		/* */
		_ctrl.new_appManager.topStepMargin();
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,"palette",_ctrl.new_colorManager.changeColors(selections),'id');
        _ctrl.new_colorManager.updateColors($template);
		updateTexts($template, selections);
		updateRemoveControls($template, selections);
		updateImages($template, selections);
		_ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
		if (_ctrl.sessionStatus != "UPDATE SESSION") { _ctrl.sessionStatus = "UPDATE SESSION"; }
		
	};
	var updateTexts = function ($template, selections) {
		if (_ctrl.sessionStatus == "START SESSION") {
			$("[id^='inp-contact-'], [id^='inp-content-'], #siteName").each(function() {
				let $this = $(this);
				let i_id = $this.attr("id");
				let v_id = i_id.replace("inp", "val");
				selections[i_id] = {};	
				if (i_id == "inp-content-slogan") {
					let slogan_from_tour = "";
					for (let key in _ctrl.jd.respuestas) {
						if(_ctrl.jd.respuestas[key].tipo == 3) {
							slogan_from_tour = _ctrl.jd.respuestas[key].respuesta;
							break;
						}
					}
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,"inp-content-slogan",slogan_from_tour,'text');
					$this.val(selections[i_id].text);
					$template.find("#" + v_id).html(selections[i_id].text);
				}
			});	
		}
		if (_ctrl.sessionStatus == "RESUME SESSION") {
			$("[id^='inp-contact-'], [id^='inp-content-'], #siteName").each(function() {
				let $this = $(this);
				let i_id = $this.attr("id");
				let v_id = i_id.replace("inp", "val");
				$this.val(selections[i_id].text);
				console.log(i_id + " = " + selections[i_id].text);
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
			});
			$template.find(".footer-column:not(:has(li:visible))").hide();
		}
		if (_ctrl.sessionStatus == "UPDATE SESSION") {
			$("[id^='inp-contact-'], [id^='inp-content-'], #siteName").each(function() {
				let $this = $(this);
				let i_id = $this.attr("id");
				let v_id = i_id.replace("inp", "val");
				if ($this.val() != "") {
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,i_id,$this.val(),'text');
					$template.find("#" + v_id).show().closest(".footer-column").show();
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
		}
	}
	var updateRemoveControls = function ($template, selections) {
		if (_ctrl.sessionStatus == "START SESSION") {
			$("[id^='inp-rem-']").each(function() {
				let $this = $(this);
				let v = "Y";
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,$this.attr("id"),v,'text');
			});
		}
		if (_ctrl.sessionStatus == "RESUME SESSION") {
			$("[id^='inp-rem-']").each(function() {
				let $this = $(this);
				let v = selections[$this.attr("id")].text;
				let sec = "";
				switch ($this.attr("id")) {
					case "inp-rem-content-cta" :
						sec = ".cta-cont";
						break;
					case "inp-rem-content-aboutus" :
						sec = ".aboutus-cont";
						break;	 
				}
				if (v == "N") {
					$this.prop("checked", false);		
					$template.find(sec).hide();
				}
			});	
		}
		if (_ctrl.sessionStatus == "UPDATE SESSION") {
			$("[id^='inp-rem-']").each(function() {
				let $this = $(this);
				let v = "Y";
				let sec = "";
				switch ($this.attr("id")) {
					case "inp-rem-content-cta" :
						sec = ".cta-cont";
						break;
					case "inp-rem-content-aboutus" :
						sec = ".aboutus-cont";
						break;	 
				}
				if ($this.is(":checked")) { v = "Y"; } else { v = "N"; }
				selections[$this.attr("id")].text = v;
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,$this.attr("id"),v,'text');		
				if (v == "N") {
					$template.find(sec).hide();
				} else {
					$template.find(sec).show();
				}
			});	
		}
	}
	var updateImages = function ($template, selections) {
		if(_ctrl.sessionStatus == "START SESSION"){}
		if(_ctrl.sessionStatus == "RESUME SESSION"){
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
		if(_ctrl.sessionStatus == "UPDATE SESSION"){
			$("[name^='inp-img-']:checked").each(function() {
				let $this = $(this);
				let img_src = $this.val();
				let n_name = $this.attr("name").replace("inp-", "#");
				//
				let img = new Image();
				img.onload = function() {
					let o = "S";
					if(this.width > this.height) { o = "L"; }
					if(this.width < this.height) { o = "P"; }
					$template.find(n_name).attr("class", ("img-cont img-MC img-" + o)).css({
						"background-image" : ("url(" + img_src + ")")
					});
				}
				img.src = img_src;
				//Save selection to object
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,n_name,img_src,'image');
			});
		}
	}
	return {
		init : init,
		loadTemplate : loadTemplate,
        updateContent: updateContent,
        startTemplateProcess : startTemplateProcess
    };
}
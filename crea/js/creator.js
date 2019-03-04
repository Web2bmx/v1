import colorManager from "./colorManager";
import imageManager from "./imageManager";
import tooltipManager from "./tooltipManager";
import itemManager from "./itemManager";
import templateManager from "./templateManager";
import appManager from "./appManager";
import dataManager from "../../js/dataManager";
import pageManager from '../../js/pageManager';

export default function creator () {
	var _this = this;
	_this.template_id = 0;
	_this.current_step = 0;
	_this.lastKeyPressed = 0;
	_this.jd = null;
	_this.isNew = false;
	/*Objects*/	
	_this.new_colorManager = new colorManager();
	_this.new_colorManager.init(_this);
	_this.new_imageManager = new imageManager();
	_this.new_imageManager.init(_this);
	_this.new_itemManager = new itemManager();
	_this.new_itemManager.init(_this);
	_this.new_templateManager = new templateManager();
	_this.new_templateManager.init(_this);
	_this.new_appManager = new appManager();
	_this.new_appManager.init(_this);
	/* */
	var new_tooltipManager = new tooltipManager();
	/*External objects*/
	_this.new_dataManager = new dataManager();
	_this.new_PageManager = new pageManager();
	/*FUNCTIONS*/
	var validation = function(){
		_this.jd = _this.new_dataManager.getObjFromLocalStorage("web2b");
		if(Object.keys(_this.jd).length){
			if(_this.jd.respuestas && Object.keys(_this.jd.respuestas).length < 3){
				location.href = "/tour";
			} else {
				_this.isNew = true;
			}
		} else {
			let web2bTemplate = _this.new_dataManager.getObjFromLocalStorage("web2b_template");
			if(Object.keys(web2bTemplate).length){
				_this.jd = web2bTemplate;
			} else {
				location.href = "/";
			}
		}
    };
	var init = function() {
		$(".dialog").dialog({
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
		if(_this.isNew){									
			$(".app-new-start.dialog").dialog("option", "width", 400);
			$(".app-new-start.dialog").dialog("open");
		} else {
			_this.new_PageManager.getPaginas();
			if (_this.new_PageManager.hasPages()) $(".change-page").show();
		}
		$("#single-modal i").on("click", function() {
			$("#single-modal").fadeOut();
		});
		/**/
		_this.new_appManager.setAppNavigation();
		_this.new_appManager.setAppControls();
		_this.new_appManager.setAppSteps();
		_this.new_templateManager.updateTemplate();
		_this.new_itemManager.setItems();
		new_tooltipManager.setTooltips();
		
		
	};
	return {
        validation: validation,
		init: init
    };
}
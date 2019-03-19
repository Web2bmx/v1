import colorManager from "./colorManager";
import imageManager from "./imageManager";
import tooltipManager from "./tooltipManager";
import itemManager from "./itemManager";
import templateManager from "./templateManager";
import appManager from "./appManager";
import dataManager from "../../js/dataManager";
import pageManager from '../../js/pageManager';
import validator from "./validator";
import userValidator from "./userValidator";

export default function creator () {
	var _this = this;
	_this.sessionStatus = "START SESSION";/*START SESSION, RESUME SESSION, UPDATE SESSION*/
	_this.current_step = 0;
	_this.lastKeyPressed = 0;
	_this.jd = {};
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
	_this.new_userValidator = new userValidator();
	_this.new_userValidator.init(_this);
	/* */
	var new_tooltipManager = new tooltipManager();
	/*External objects*/
	_this.new_dataManager = new dataManager();
	_this.new_PageManager = new pageManager();
	_this.new_validator = new validator();
	/*FUNCTIONS*/
	var validation = function(){/*1*/
		/*This function does two things*/
		/* 1) Sets a value for _this.jd as either localstorage->web2bTemplate or Web2b*/
		let web2b = _this.new_dataManager.getObjFromLocalStorage("web2b");
		let web2bTemplate = _this.new_dataManager.getObjFromLocalStorage("web2b_template");
		if (web2bTemplate.respuestas && Object.keys(web2bTemplate.respuestas).length > 2) {
			_this.sessionStatus = "RESUME SESSION";
		}
		_this.jd = Object.keys(web2bTemplate).length ? web2bTemplate : web2b;
		/* 2) it checks if _this.jd has 'respuestas' and if it has 3 of them, if it doesn´t have them it sends the User to Root /, otherwise to start the Tour*/
		if(!_this.jd.respuestas) {
			location.href = "/";
		} else if (Object.keys(_this.jd.respuestas).length < 3) {
			location.href = "/tour";
		}
	};
	var init = function() {/*2*/
		_this.new_userValidator.setUserValidation();
		_this.new_appManager.setAppNavigation();//3
		_this.new_appManager.setAppControls();//4
		_this.new_appManager.setAppSteps();//5
		_this.new_templateManager.loadTemplate();//6
		_this.new_itemManager.setItems();//7
		new_tooltipManager.setTooltips();//8
		
	};
	return {
      validation: validation,
			init: init
    };
}
import colorManager from "./colorManager";
import imageManager from "./imageManager";
import tooltipManager from "./tooltipManager";
import itemManager from "./itemManager";
import templateManager from "./templateManager";
import appManager from "./appManager";
import menuManager from "./menuManager";
import paymentsManager from "./paymentsManager";
import utilsManager from "./utilsManager";
import dataManager from "../../js/dataManager";
import pageManager from '../../js/pageManager';
import validator from "./validator";
import userValidator from "./userValidator";
/**/
import mapsManager from "./mapsManager";
/**/

export default function creator() {
	var _this = this;
	_this.sessionStatus = "START SESSION";
	//Esta variable determina el estatus de la sesión y tiene tres valores:
	//START SESSION quiere decir que el objeto web2b_template no ha sido creado, por lo tanto es una sesión completamente nueva
	//RESUME SESSION quiere decir que el objeto web2b_template sí existe, por lo tanto se está retomando una sesión anterior
	//UPDATE SESSION se asigna al final de la función updateContent solo la primera vez que esta corre, esto quiere decir que al inicio de la sesión, 
	//una vez que el template se ha cargado y el contenido se ha actualizado por primera vez, el estatus siempre será UPDATE SESSION
	_this.current_step = 0;
	_this.lastKeyPressed = 0;
	_this.jd = {};
	_this.jd_templateId = null;
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
	_this.new_menuManager = new menuManager();
	_this.new_menuManager.init(_this);
	_this.new_paymentsManager = new paymentsManager();
	_this.new_paymentsManager.init(_this);
	_this.new_utilsManager = new utilsManager();
	_this.new_utilsManager.init(_this);
	_this.new_userValidator = new userValidator();
	_this.new_userValidator.init(_this);
	/**/
	_this.new_mapManager = new mapsManager();
	_this.new_mapManager.init(_this);
	/* */
	var new_tooltipManager = new tooltipManager();
	/*External objects*/
	_this.new_dataManager = new dataManager();
	_this.new_PageManager = new pageManager();
	_this.new_validator = new validator();

	/*FUNCTIONS*/
	var validation = function () {
		/*1*/
		/*This function does two things*/
		/* 1) Sets a value for _this.jd as either localstorage->web2bTemplate or Web2b*/
		let web2b = _this.new_dataManager.getObjFromLocalStorage("web2b");
		let web2bTemplate = _this.new_dataManager.getObjFromLocalStorage("web2b_template");
		if (web2bTemplate.respuestas && Object.keys(web2bTemplate.respuestas).length > 2) {
			_this.sessionStatus = "RESUME SESSION";
		}
		_this.jd = Object.keys(web2bTemplate).length ? web2bTemplate : web2b;
		_this.jd_templateId = _this.new_dataManager.getObjFromLocalStorage("web2b_templateId");
		/* 2) it checks if _this.jd has 'respuestas' and if it has 3 of them, if it doesn´t have them it sends the User to Root /, otherwise to start the Tour*/
		if (!_this.jd.respuestas) {
			location.href = "/";
		} else if (Object.keys(_this.jd.respuestas).length < 3) {
			location.href = "/tour";
		}
	};
	var init = function () {/*2*/
		_this.new_userValidator.setUserValidation();
		_this.new_appManager.setApp();//3
		_this.new_templateManager.loadTemplate(_this.new_appManager.afterTemplateLoad);//6
		new_tooltipManager.setTooltips();//7
		_this.new_paymentsManager.createPaypalButtons();
	};
	return {
		validation: validation,
		init: init
	};
}
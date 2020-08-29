/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tour/scripts/tour.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dataManager.js":
/*!***************************!*\
  !*** ./js/dataManager.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dataManager;\n\nfunction dataManager() {\n  var getObjFromLocalStorage = function getObjFromLocalStorage(key) {\n    var jsonData = localStorage.getItem(key);\n\n    if (jsonData == null) {\n      jsonData = {};\n\n      if (key == \"web2b\") {\n        jsonData.respuestas = {};\n      }\n    } else {\n      try {\n        jsonData = JSON.parse(jsonData);\n      } catch (e) {\n        return jsonData;\n      }\n    }\n\n    return jsonData;\n  };\n\n  var getPagesFromDB = function getPagesFromDB() {\n    var userId = getObjFromLocalStorage(\"web2b_userId\");\n    return $.get(\"scripts/getActualPages.php\", {\n      userId: userId\n    }).done(function (result) {\n      if (!result.ok) {\n        console.log(\"Algo salió mal. Por favor intentalo de nuevo mas tarde. \" + result.mensaje);\n      }\n\n      return result.paginas;\n    }).fail(function (result) {\n      console.log(\"Algo salió mal. Por favor intentalo de nuevo mas tarde. \" + result);\n      return {};\n    });\n  };\n\n  var saveWeb2bJson = function saveWeb2bJson(jd) {\n    var strJD = JSON.stringify(jd),\n        userId = getObjFromLocalStorage(\"web2b_userId\"),\n        idSitio = getObjFromLocalStorage(\"web2b_templateId\"),\n        savedJD = localStorage.getItem(\"web2b_template\");\n\n    if (strJD && savedJD != strJD && !(userId instanceof Object) && !(idSitio instanceof Object)) {\n      localStorage.setItem(\"web2b_template\", strJD);\n      $.post(\"scripts/salvar_datos.php\", {\n        userId: userId,\n        idSitio: idSitio,\n        info: encodeURIComponent(strJD)\n      }).done(function (result) {\n        if (!result.ok) {\n          console.log(\"Algo salió mal. Por favor intentalo de nuevo mas tarde. \" + result.mensaje);\n        }\n      }).fail(function (result) {\n        console.log(\"Algo salió mal. Por favor intentalo de nuevo mas tarde. \" + result);\n      });\n    }\n  };\n\n  var saveSelected = function saveSelected(jd, name, value, type) {\n    var selections = jd.selections || {};\n    var isSwitch = false;\n\n    if (name.includes(\"@switch\")) {\n      var arr = name.split(\"@\");\n      name = arr[0];\n      isSwitch = true;\n    }\n\n    selections[name] = selections[name] || {};\n\n    switch (type) {\n      case 'image':\n        if (isSwitch) {\n          selections[name].active = value;\n        } else {\n          selections[name].img = value;\n        }\n\n        selections[name].type = type;\n        break;\n\n      case 'text':\n        if (isSwitch) {\n          selections[name].active = value;\n        } else {\n          selections[name].text = value;\n        }\n\n        selections[name].type = type;\n        break;\n\n      case 'config':\n        selections[name].value = value;\n        selections[name].type = type;\n        break;\n    } //Save selection to object\n\n\n    jd.selections = selections;\n  };\n\n  var setDataObjects = function setDataObjects(data, jd) {\n    localStorage.removeItem(\"web2b\");\n    localStorage.setItem(\"web2b_templateId\", data.idSitio);\n    localStorage.setItem(\"web2b_userId\", data.userId);\n    localStorage.setItem(\"web2b_template\", JSON.stringify(jd));\n    localStorage.setItem(\"web2b_pages\", JSON.stringify(data.paginas));\n  };\n\n  var purgeTemplateData = function purgeTemplateData() {\n    localStorage.removeItem('web2b_actualPage');\n    localStorage.removeItem('web2b_template');\n    localStorage.removeItem('web2b_templateId');\n    localStorage.removeItem('web2b_template');\n    localStorage.removeItem(\"web2b\");\n  };\n\n  return {\n    getObjFromLocalStorage: getObjFromLocalStorage,\n    saveWeb2bJson: saveWeb2bJson,\n    saveSelected: saveSelected,\n    getPagesFromDB: getPagesFromDB,\n    setDataObjects: setDataObjects,\n    purgeTemplateData: purgeTemplateData\n  };\n}\n\n//# sourceURL=webpack:///./js/dataManager.js?");

/***/ }),

/***/ "./js/menuSingleSelection.js":
/*!***********************************!*\
  !*** ./js/menuSingleSelection.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = menuSingleSelection;\n\nfunction menuSingleSelection() {\n  var init = function init(container, menu) {\n    $(menu).hide();\n    $(container).find(\".toggle\").addClass(\"clickable\").attr(\"data-state\", \"off\");\n    $(container).find(\".show-less\").hide();\n    $(container).find(\".toggle\").on(\"click\", function () {\n      var $this = $(this);\n      var index = $this.closest(container).find(\".toggle\").index($this);\n\n      if ($this.attr(\"data-state\") == \"off\") {\n        $(container).find(\".toggle\").attr(\"data-state\", \"off\").filter(\":eq(\" + index + \")\").attr(\"data-state\", \"on\");\n        $(container).find(\".toggle .show-less\").hide();\n        $(container).find(\".toggle .show-more\").show();\n        $this.find(\".show-more\").hide();\n        $this.find(\".show-less\").show();\n        $this.closest(container).find(menu).hide().filter(menu + \":eq(\" + index + \")\").slideDown(\"fast\");\n        $this.closest(container).find(menu + \":eq(\" + index + \") input:first\").trigger(\"click\");\n      } else {\n        $this.attr(\"data-state\", \"off\");\n        $this.find(\".show-less\").hide();\n        $this.find(\".show-more\").show();\n        $this.closest(container).find(menu + \":eq(\" + index + \")\").slideUp(\"fast\");\n      }\n    });\n  };\n\n  return {\n    init: init\n  };\n}\n\n;\n\n//# sourceURL=webpack:///./js/menuSingleSelection.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = modal;\n\nfunction modal() {\n  var $modal = null;\n  var $close = null;\n  var $overlay = null;\n\n  var init = function init(ide) {\n    $modal = $(ide);\n\n    if ($modal.find(\"#modal-close\").length > 0) {\n      setCloseButton();\n    }\n\n    if ($modal.find(\"#modal-overlay\").length > 0) {\n      setOverlay();\n    }\n  };\n\n  var setCloseButton = function setCloseButton() {\n    $close = $(\"#modal-close\");\n    $(\"body\").on(\"click\", \"#modal-close\", function () {\n      hide();\n    });\n  };\n\n  var setOverlay = function setOverlay() {\n    $overlay = $(\"#modal-overlay\");\n    $modal.before($overlay);\n  };\n\n  var hide = function hide() {\n    $modal.fadeOut(500).find(\".dialog\").hide();\n\n    if ($overlay) {\n      $overlay.hide();\n    }\n  };\n\n  var show = function show(ide) {\n    $modal.hide().fadeIn(500).find(\".dialog\").hide().filter(ide).show();\n\n    if ($overlay) {\n      $overlay.fadeIn(500);\n    }\n  };\n\n  var hideErrorMessage = function hideErrorMessage() {\n    $(\".dialog-error:visible\").remove().detach();\n  };\n\n  var showErrorMessage = function showErrorMessage($target, cont, ide) {\n    var mssg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n\n    if ($target.find(ide).length == 0) {\n      $target.find(cont).after($(ide).clone());\n    }\n\n    if (mssg != undefined) {\n      $target.find(ide).html(mssg);\n    }\n\n    $target.find(ide).hide().fadeIn(\"fast\");\n  };\n\n  return {\n    init: init,\n    hide: hide,\n    hideErrorMessage: hideErrorMessage,\n    showErrorMessage: showErrorMessage,\n    show: show\n  };\n}\n\n;\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./tour/scripts/tour.js":
/*!******************************!*\
  !*** ./tour/scripts/tour.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Tour;\n\nvar _dataManager = __webpack_require__(/*! ../../js/dataManager */ \"./js/dataManager.js\");\n\nvar _dataManager2 = _interopRequireDefault(_dataManager);\n\nvar _menuSingleSelection = __webpack_require__(/*! ../../js/menuSingleSelection */ \"./js/menuSingleSelection.js\");\n\nvar _menuSingleSelection2 = _interopRequireDefault(_menuSingleSelection);\n\nvar _modal = __webpack_require__(/*! ../../js/modal */ \"./js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Tour() {\n  var new_dataManager = new _dataManager2.default();\n  var new_menuSingleSelection = new _menuSingleSelection2.default();\n  var new_modal = new _modal2.default();\n\n  var _tplData = new_dataManager.getObjFromLocalStorage(\"web2b\");\n\n  var current_step = 0;\n  var total_steps = $(\".stage\").length;\n  var key = 'AIzaSyBR5kBWFTVAecBoW4IKDSjttophb4BC6fg';\n\n  var init = function init() {\n    new_menuSingleSelection.init(\".options-container\", \".options-group\");\n    new_modal.init(\"#modal\");\n    setTourNavigation();\n    new_modal.hide();\n    /*\r\n    ESTATUS:\r\n    Tour nuevo\r\n    Tour en proceso\r\n    Proyecto en proceso\r\n    */\n\n    var status = Object.keys(_tplData.respuestas).length == 0 ? \"NEW\" : \"IN PROCESS\";\n    status = Object.keys(new_dataManager.getObjFromLocalStorage('web2b_template')).length > 0 ? \"WITH PROJECT\" : status;\n\n    if (status == \"IN PROCESS\") {\n      setDialogInProcess();\n    }\n\n    if (status == \"WITH PROJECT\") {\n      setDialogWithProject();\n    }\n  };\n\n  var setDialogInProcess = function setDialogInProcess() {\n    new_modal.show(\"#dialog-existing-session\");\n    $(\".iniciar\").on(\"click\", function () {\n      new_dataManager.purgeTemplateData();\n      _tplData = new_dataManager.getObjFromLocalStorage(\"web2b\");\n      new_modal.hide();\n    });\n    $(\".continuar\").on(\"click\", function () {\n      new_modal.hide();\n      current_step = Object.keys(_tplData.respuestas).length + 1;\n\n      if (current_step < 4) {\n        new_modal.hide();\n        showStep(current_step);\n      } else {\n        new_modal.show(\"#dialog-end\");\n      }\n    });\n  };\n\n  var setDialogWithProject = function setDialogWithProject() {\n    new_modal.show(\"#dialog-existing-project\");\n    $(\".continuar-proyecto\").click(function () {\n      location.href = \"/crea\";\n    });\n    $(\".iniciar-proyecto\").click(function () {\n      new_dataManager.purgeTemplateData();\n      new_modal.hide();\n    });\n  };\n\n  var setTourNavigation = function setTourNavigation() {\n    $(\"a[href*='#stage-']\").on(\"click\", function () {\n      var $this = $(this);\n\n      if (checkAnswer($this.closest(\".question\").attr(\"id\"))) {\n        current_step = $this.attr(\"href\").replace(\"#stage-\", \"\") * 1;\n\n        if (current_step < 4) {\n          showStep(current_step);\n        } else {\n          new_modal.show(\"#dialog-end\");\n        }\n      }\n\n      return false;\n    });\n  };\n\n  var showStep = function showStep(step) {\n    new_modal.hide();\n    var delay = 0;\n\n    if (step == 1) {\n      delay = 500;\n      $(\"#item-spaceman\").animate({\n        \"left\": \"50%\",\n        \"opacity\": \"0\",\n        \"width\": \"1rem\"\n      }, 300);\n      $(\"#item-rocket\").animate({\n        \"bottom\": \"1rem\"\n      }, 300);\n    }\n\n    $(\"#item-rocket>img:last\").animate({\n      \"opacity\": 1\n    }, 300);\n    setTimeout(function () {\n      $(\".stage:visible\").animate({\n        \"top\": \"100%\",\n        \"bottom\": \"-100%\"\n      }, 1000);\n      animateBackground();\n      setTimeout(function () {\n        $(\".stage\").hide().filter(\":eq(\" + step + \")\").show().css({\n          \"top\": \"-100%\",\n          \"bottom\": \"100%\"\n        }).animate({\n          \"top\": \"0\",\n          \"bottom\": 0\n        }, 1000);\n      }, 2000);\n      setTimeout(function () {\n        new_modal.show(\"#dialog-question-\" + current_step);\n        $(\"#item-rocket>img:last\").animate({\n          \"opacity\": 0\n        }, 300);\n      }, 3000);\n    }, delay);\n  };\n\n  var animateBackground = function animateBackground() {\n    var _loop = function _loop(i) {\n      $(\".stars\" + i).animate({\n        \"height\": i * 15 + \"px\",\n        \"opacity\": .8 - i * .2\n      }, 1000, function () {\n        setTimeout(function () {\n          $(\".stars\" + i).animate({\n            \"height\": i + \"px\",\n            \"opacity\": \"1\"\n          }, 1000);\n        }, 1000);\n      });\n    };\n\n    for (var i = 1; i < 4; i++) {\n      _loop(i);\n    }\n  };\n\n  var checkAnswer = function checkAnswer(s) {\n    if (s == 'undefined') {\n      return true;\n    } else {\n      var $question = $(\"#\" + s);\n      var answer_exists = $question.find(\"input:checked\").length > 0 || $question.find(\"input.otra\").val() != \"\";\n\n      if (answer_exists) {\n        new_modal.hideErrorMessage();\n        var id = $question.find(\"h3\").data(\"id\");\n        var q_type = $question.find(\"h3\").data(\"type\");\n        var resp = \"\";\n        var resp_id = \"\";\n        var loc_en = \"\";\n\n        if ($question.find(\"input:checked\").length > 0) {\n          resp = $question.find(\"input:checked\").val();\n          resp_id = $question.find(\"input:checked\").attr(\"data-id\");\n          loc_en = $question.find(\"input:checked\").attr(\"data-loc-en\");\n        }\n\n        if ($question.find(\"input.otra\").val() != \"\") {\n          resp = $question.find(\"input.otra\").val();\n        }\n\n        if (loc_en == '' && q_type == 6) {\n          translateAnswer(id, q_type, resp, loc_en, resp_id);\n        } else {\n          saveData(id, q_type, resp, loc_en, resp_id);\n        }\n\n        return true;\n      } else {\n        new_modal.showErrorMessage($question, \"h3\", \"#error-no-answer\");\n        return false;\n      }\n    }\n  };\n\n  var translateAnswer = function translateAnswer(id, q_type, resp, loc_en, resp_id) {\n    $.ajax({\n      url: 'https://translation.googleapis.com/language/translate/v2?key=' + key,\n      type: 'post',\n      data: {\n        q: resp,\n        source: \"es\",\n        target: \"en\",\n        format: \"text\"\n      },\n      dataType: 'json'\n    }).done(function (response) {\n      saveData(id, q_type, resp, response.data.translations[0].translatedText, resp_id);\n    }).fail(function () {\n      saveData(id, q_type, resp, resp, resp_id);\n    });\n  };\n\n  var saveData = function saveData(id, q_type, resp, loc_en, resp_id) {\n    _tplData.respuestas[id] = {\n      \"tipo\": q_type,\n      \"respuesta\": resp,\n      \"localizacion_en\": loc_en,\n      \"resp_id\": resp_id\n    };\n    localStorage.setItem(\"web2b\", JSON.stringify(_tplData));\n  };\n\n  return {\n    init: init\n  };\n}\n\n$(document).ready(function () {\n  var new_tour = new Tour();\n  new_tour.init();\n});\n\n//# sourceURL=webpack:///./tour/scripts/tour.js?");

/***/ })

/******/ });

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

/***/ "./tour/scripts/tour.js":
/*!******************************!*\
  !*** ./tour/scripts/tour.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Tour;\n\nvar _dataManager = __webpack_require__(/*! ../../js/dataManager */ \"./js/dataManager.js\");\n\nvar _dataManager2 = _interopRequireDefault(_dataManager);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Tour() {\n  var new_dataManager = new _dataManager2.default();\n\n  var _tplData = new_dataManager.getObjFromLocalStorage(\"web2b\");\n\n  var current_step = 0;\n  var total_steps = $(\".stage\").length;\n\n  var init = function init() {\n    $(\".stage:not(#stage-\" + current_step + \")\").hide();\n    $(\"#modal .dialog\").hide();\n    $(\"#modal\").hide();\n    setOptions();\n    /* */\n    // verify incomplete tour\n\n    if (Object.keys(_tplData).length == 0) {\n      var existingData = new_dataManager.getObjFromLocalStorage('web2b_template');\n\n      if (Object.keys(existingData).length > 0) {\n        console.log(\"Proyecto existe\");\n        $(\"#dialog-existing-project\").show();\n        $(\"#modal\").fadeIn(500);\n        $(\".continuar-proyecto\").click(function () {\n          location.href = \"/crea\";\n        });\n        $(\".iniciar-proyecto\").click(function () {\n          new_dataManager.purgeTemplateData();\n          $(\"#modal\").fadeOut(500);\n          $(\"#dialog-existing-project\").hide();\n        });\n      }\n    } else {\n      $(\"#dialog-existing-session\").show();\n      $(\"#modal\").fadeIn(500);\n      $(\".iniciar\").on(\"click\", function () {\n        new_dataManager.purgeTemplateData();\n        _tplData = new_dataManager.getObjFromLocalStorage(\"web2b\");\n        $(\"#modal\").fadeOut(500);\n        $(\"#dialog-existing-session\").hide();\n      });\n      $(\".continuar\").on(\"click\", function () {\n        $(\"#dialog-existing-session\").hide();\n        current_step = Object.keys(_tplData.respuestas).length + 1;\n        console.log(current_step);\n\n        if (current_step < 4) {\n          $(\"#modal\").fadeOut(500);\n          showStep(current_step);\n        } else {\n          $(\"#modal\").show();\n          $(\"#modal .dialog\").hide();\n          $(\"#dialog-end\").show();\n        }\n      });\n    }\n\n    $(\"a[href*='#stage-']\").on(\"click\", function () {\n      var $this = $(this);\n\n      if ($this.attr(\"href\") == \"#stage-1\") {\n        current_step = 1;\n        showStep(current_step);\n      }\n\n      if ($this.attr(\"href\") == \"#stage-2\") {\n        if (checkAnswer($this.closest(\".question\").attr(\"id\"))) {\n          current_step = 2;\n          showStep(current_step);\n        }\n      }\n\n      if ($this.attr(\"href\") == \"#stage-3\") {\n        if (checkAnswer($this.closest(\".question\").attr(\"id\"))) {\n          current_step = 3;\n          showStep(current_step);\n        }\n      }\n\n      if ($this.attr(\"href\") == \"#stage-end\") {\n        if (checkAnswer($this.closest(\".question\").attr(\"id\"))) {\n          $(\"#modal\").show();\n          $(\"#modal .dialog\").hide();\n          $(\"#dialog-end\").show();\n        }\n      }\n\n      return false;\n    });\n  };\n\n  var showStep = function showStep(step) {\n    var delay = 0;\n\n    if (step == 1) {\n      delay = 500;\n      $(\"#item-spaceman\").animate({\n        \"left\": \"50%\",\n        \"opacity\": \"0\",\n        \"width\": \"1rem\"\n      }, 300);\n      $(\"#item-rocket\").animate({\n        \"bottom\": \"1rem\"\n      }, 300);\n    }\n\n    $(\"#modal\").fadeOut(300);\n    $(\"#item-rocket>img:last\").animate({\n      \"opacity\": 1\n    }, 300);\n    setTimeout(function () {\n      $(\".stage:visible\").animate({\n        \"top\": \"100%\",\n        \"bottom\": \"-100%\"\n      }, 1000);\n      $(\".stars1\").animate({\n        \"height\": \"5px\"\n      }, 1000, function () {\n        setTimeout(function () {\n          $(\".stars1\").animate({\n            \"height\": \"1px\"\n          }, 1000);\n        }, 1000);\n      });\n      $(\".stars2\").animate({\n        \"height\": \"5px\"\n      }, 1000, function () {\n        setTimeout(function () {\n          $(\".stars2\").animate({\n            \"height\": \"2px\"\n          }, 1000);\n        }, 1000);\n      });\n      $(\".stars3\").animate({\n        \"height\": \"5px\"\n      }, 1000, function () {\n        setTimeout(function () {\n          $(\".stars3\").animate({\n            \"height\": \"3px\"\n          }, 1000);\n        }, 1000);\n      });\n      setTimeout(function () {\n        $(\".stage\").hide().filter(\":eq(\" + step + \")\").show().css({\n          \"top\": \"-100%\",\n          \"bottom\": \"100%\"\n        }).animate({\n          \"top\": \"0\",\n          \"bottom\": 0\n        }, 1000);\n      }, 2000);\n      setTimeout(function () {\n        $(\"#modal .dialog.question\").hide();\n        $(\"#modal .dialog.question:eq(\" + (current_step - 1) + \")\").show();\n        $(\"#modal\").fadeIn(500);\n        $(\"#item-rocket>img:last\").animate({\n          \"opacity\": 0\n        }, 300);\n      }, 3000);\n    }, delay);\n  };\n\n  var checkAnswer = function checkAnswer(s) {\n    var $question = $(\"#\" + s);\n    var answer_exists = $question.find(\"input:checked\").length > 0 || $question.find(\"input.otra\").val() != \"\";\n\n    if (answer_exists) {\n      $(\".dialog-error:visible\").remove().detach();\n      var id = $question.find(\"h3\").data(\"id\");\n      var q_type = $question.find(\"h3\").data(\"type\");\n      var resp = \"\";\n      var resp_id = \"\";\n      var loc_en = \"\";\n\n      if ($question.find(\"input:checked\").length > 0) {\n        resp = $question.find(\"input:checked\").val();\n        resp_id = $question.find(\"input:checked\").attr(\"data-id\");\n        loc_en = $question.find(\"input:checked\").attr(\"data-loc-en\");\n      }\n\n      if ($question.find(\"input.otra\").val() != \"\") {\n        resp = $question.find(\"input.otra\").val();\n      }\n\n      if (loc_en == '' && q_type == 6) {\n        translateAnswer(id, q_type, resp, loc_en, resp_id);\n      } else {\n        saveData(id, q_type, resp, loc_en, resp_id);\n      }\n\n      return true;\n    } else {\n      if ($question.find(\".dialog-error\").length == 0) {\n        $question.find(\"h3\").after($(\".dialog-error:last\").clone());\n      }\n\n      $question.find(\".dialog-error\").hide().fadeIn(\"fast\");\n      return false;\n    }\n  };\n\n  var translateAnswer = function translateAnswer(id, q_type, resp, loc_en, resp_id) {\n    $.get(\"https://translate.yandex.net/api/v1.5/tr.json/translate\", {\n      key: 'trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2',\n      lang: 'es-en',\n      text: resp,\n      format: 'plain'\n    }).done(function (data) {\n      if (data) {\n        saveData(id, q_type, resp, decodeURIComponent(data.text[0]), resp_id);\n      }\n    });\n  };\n\n  var saveData = function saveData(id, q_type, resp, loc_en, resp_id) {\n    _tplData.respuestas[id] = {\n      \"tipo\": q_type,\n      \"respuesta\": resp,\n      \"localizacion_en\": loc_en,\n      \"resp_id\": resp_id\n    };\n    localStorage.setItem(\"web2b\", JSON.stringify(_tplData));\n  };\n\n  var setOptions = function setOptions() {\n    $(\".options-group\").hide();\n    $(\".options h4\").addClass(\"clickable\").attr(\"data-state\", \"off\");\n    $(\".options i.fa-minus-circle\").hide();\n    $(\".options h4\").on(\"click\", function () {\n      var $this = $(this);\n      var index = $this.closest(\".options\").find(\"h4\").index($this);\n\n      if ($this.attr(\"data-state\") == \"off\") {\n        $(\".options h4\").attr(\"data-state\", \"off\").filter(\":eq(\" + index + \")\").attr(\"data-state\", \"on\");\n        $(\".options h4 i.fa-minus-circle\").hide();\n        $(\".options h4 i.fa-plus-circle\").show();\n        $this.find(\"i.fa-plus-circle\").hide();\n        $this.find(\"i.fa-minus-circle\").show();\n        $this.closest(\".options\").find(\".options-group\").hide().filter(\".options-group:eq(\" + index + \")\").show();\n        $this.closest(\".options\").find(\".options-group:eq(\" + index + \") input:first\").trigger(\"click\");\n      } else {\n        $this.attr(\"data-state\", \"off\");\n        $this.find(\"i.fa-minus-circle\").hide();\n        $this.find(\"i.fa-plus-circle\").show();\n        $this.closest(\".options\").find(\".options-group:eq(\" + index + \")\").hide();\n      }\n    });\n  };\n\n  return {\n    init: init\n  };\n}\n\n;\n$(document).ready(function () {\n  var new_tour = new Tour();\n  new_tour.init();\n});\n\n//# sourceURL=webpack:///./tour/scripts/tour.js?");

/***/ })

/******/ });
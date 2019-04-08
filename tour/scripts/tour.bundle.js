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

/***/ "./js/dialog.js":
/*!**********************!*\
  !*** ./js/dialog.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dialogHandler;\n\nfunction dialogHandler() {\n  var setHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var winWidth = $(window).width(),\n      winHeigth = $(window).height();\n  $(\".dialog\").dialog({\n    autoOpen: false,\n    modal: true,\n    width: winWidth,\n    height: setHeight ? winHeigth : 'auto',\n    fluid: true,\n    show: {\n      effect: \"fade\",\n      duration: 1000\n    },\n    hide: {\n      effect: \"fade\",\n      duration: 1000\n    },\n    closeOnEscape: false\n  }); // run function on all dialog opens\n\n  $(document).on(\"dialogopen\", \".ui-dialog\", function (event, ui) {\n    fluidDialog();\n  }); // remove window resize namespace\n\n  $(document).on(\"dialogclose\", \".ui-dialog\", function (event, ui) {\n    $(window).off(\"resize.responsive\");\n  });\n\n  function fluidDialog() {\n    var $visible = $(\".ui-dialog:visible\"); // each open dialog\n\n    $visible.each(function () {\n      var $this = $(this);\n      var dialog = $this.find(\".ui-dialog-content\").dialog(\"instance\");\n      console.log(dialog); // if fluid option == true\n\n      if (dialog.options.maxWidth && dialog.options.width) {\n        // fix maxWidth bug\n        $this.css(\"max-width\", dialog.options.maxWidth); //reposition dialog\n\n        dialog.option(\"position\", dialog.options.position);\n      }\n\n      if (dialog.options.fluid) {\n        // namespace window resize\n        $(window).on(\"resize.responsive\", function () {\n          var wWidth = $(window).width(); // check window width against dialog width\n\n          if (wWidth < dialog.options.maxWidth + 50) {\n            // keep dialog from filling entire screen\n            $this.css(\"width\", \"90%\");\n          } //reposition dialog\n\n\n          dialog.option(\"position\", dialog.options.position);\n        });\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack:///./js/dialog.js?");

/***/ }),

/***/ "./tour/scripts/tour.js":
/*!******************************!*\
  !*** ./tour/scripts/tour.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dialog = __webpack_require__(/*! ../../js/dialog */ \"./js/dialog.js\");\n\nvar _dialog2 = _interopRequireDefault(_dialog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* \r\n * To change this license header, choose License Headers in Project Properties.\r\n * To change this template file, choose Tools | Templates\r\n * and open the template in the editor.\r\n */\nvar winWidth;\nvar spanError = '<span class=\"error\">Aún no has respondida esta pregunta</span>';\nvar positionActual = '';\n\nfunction muestraPregunta(pregunta) {\n  $(\".rocket img + img\").animate({\n    opacity: 0\n  }, 100, function () {\n    $(\".\" + pregunta).dialog(\"open\");\n  });\n}\n\nfunction darSalto(selector, pregunta) {\n  var cb = function cb() {\n    muestraPregunta(pregunta);\n  };\n\n  positionActual = selector;\n  rePositionRocket(cb, true);\n  var selOffset = $(selector).offset();\n  var selWidth = $(selector).width();\n  var dif = $(document).height() - selWidth;\n  var containerBottom = $('.main-container > div').css(\"bottom\").replace(\"px\", \"\");\n  $('.main-container > div').animate({\n    'bottom': containerBottom * 1 + selOffset.top - (dif > 0 ? dif / 2 : 0)\n  }, 2000);\n}\n\nfunction rePositionRocket(callback, animate) {\n  if (callback == undefined) {\n    callback = function callback() {};\n  }\n\n  if (animate == undefined) {\n    animate = false;\n  }\n\n  var selHeight = $(positionActual).height();\n  var selWidth = $(positionActual).width();\n  var rocketHeight = $(\".rocket > img\").height();\n  var rocketWidth = $(\".rocket > img\").width();\n  var selPos = $(positionActual).position(); //obtener posicion actual\n\n  positionActual = positionActual;\n\n  if (animate) {\n    $(\".rocket\").animate({\n      top: selPos.top + (selHeight / 2 - rocketHeight / 2),\n      left: selPos.left + (selWidth / 2 - rocketWidth / 2),\n      margin: 0\n    }, 2000, callback);\n  } else {\n    $(\".rocket\").css({\n      \"top\": selPos.top + (selHeight / 2 - rocketHeight / 2) + \"px\",\n      \"left\": selPos.left + (selWidth / 2 - rocketWidth / 2) + \"px\",\n      \"margin\": 0\n    });\n  }\n}\n\nfunction preguntaValida(selector) {\n  var jsonData = localStorage.getItem(\"web2b\");\n  var resp = \"\";\n  var loc_en = \"\";\n\n  if ($(selector + \" textarea\").length != 0 && $.trim($(selector + \" textarea\").val()) == \"\" || $(selector + \" input\").length != 0 && $(selector + \" input:checked\").length == 0 && $(selector + \" input.otra\").val() == \"\") {\n    if ($(selector + \" p span\").length == 0) {\n      $(selector + \" p\").append(spanError);\n    }\n\n    return false;\n  } else {\n    var id = $(selector + \" p\").data(\"id\");\n\n    if (selector == \".primera-pregunta\") {\n      localStorage.removeItem(\"web2b\");\n    }\n\n    if (jsonData == null) {\n      jsonData = {};\n      jsonData.respuestas = {};\n    } else {\n      jsonData = JSON.parse(jsonData);\n    }\n\n    if ($(selector + \" textarea\").length != 0) {\n      resp = $(selector + \" textarea\").val();\n    } else {\n      resp = $(selector + \" input:checked\").val();\n      loc_en = $(selector + \" input:checked[data-loc-en!='']\").length > 0 ? $(selector + \" input:checked[data-loc-en!='']\").attr(\"data-loc-en\") : \"\";\n\n      if ($(selector + \" input.otra\").val() != \"\") {\n        resp = $(selector + \" input.otra\").val();\n        loc_en = \"\";\n      }\n    }\n\n    if (loc_en == '' && $(selector + \" p\").data(\"type\") == 6) {\n      $.get(\"https://translate.yandex.net/api/v1.5/tr.json/translate\", {\n        key: 'trnsl.1.1.20180912T220603Z.70993d2fcf04258e.5e48efdba36505f0de87ff86f3ed40548d14a2e2',\n        lang: 'es-en',\n        text: resp,\n        format: 'plain'\n      }).done(function (data) {\n        if (data) {\n          jsonData.respuestas[id] = {\n            \"tipo\": $(selector + \" p\").data(\"type\"),\n            \"respuesta\": resp,\n            \"localizacion_en\": decodeURIComponent(data.text[0])\n          };\n          localStorage.setItem(\"web2b\", JSON.stringify(jsonData));\n        }\n      });\n    } else {\n      jsonData.respuestas[id] = {\n        \"tipo\": $(selector + \" p\").data(\"type\"),\n        \"respuesta\": resp,\n        \"localizacion_en\": loc_en\n      };\n      localStorage.setItem(\"web2b\", JSON.stringify(jsonData));\n    }\n  }\n\n  return true;\n}\n\nfunction paso1() {\n  var marginLeft;\n  $(\".rocket img + img\").animate({\n    opacity: 1\n  }, 50);\n\n  if (winWidth < 660) {\n    marginLeft = '105px';\n  } else if (winWidth < 1040) {\n    marginLeft = '162px';\n  } else {\n    marginLeft = '122px';\n  }\n\n  $(\".rocket\").css(\"top\", \"auto\");\n  $(\".rocket\").animate({\n    left: '50%',\n    marginLeft: marginLeft\n  }, 0, function () {\n    paso2();\n  });\n  $('.main-container > div').animate({\n    'bottom': 0\n  }, 0);\n}\n\nfunction paso2() {\n  $(\".rocket img + img\").animate({\n    opacity: 1\n  }, 50);\n\n  if (winWidth < 660) {\n    $(\".space-man\").animate({\n      width: '35px',\n      bottom: '55px',\n      marginLeft: '-73px',\n      opacity: '0'\n    }, 2000, function () {\n      darSalto(\".sun > img\", \"primera-pregunta\");\n    });\n  } else if (winWidth < 1040) {\n    $(\".space-man\").animate({\n      width: '50px',\n      marginLeft: '-112px',\n      bottom: '111px',\n      opacity: '0'\n    }, 2000, function () {\n      darSalto(\".sun > img\", \"primera-pregunta\");\n    });\n  } else {\n    $(\".space-man\").animate({\n      width: '50px',\n      marginLeft: '172px',\n      opacity: '0'\n    }, 2000, function () {\n      darSalto(\".sun > img\", \"primera-pregunta\");\n    });\n  }\n}\n\nfunction paso3() {\n  $(\".rocket img + img\").animate({\n    opacity: 1\n  }, 50);\n  darSalto(\".planet-blue\", \"segunda-pregunta\");\n}\n\nfunction paso4() {\n  $(\".rocket img + img\").animate({\n    opacity: 1\n  }, 50);\n  darSalto(\".earth\", \"tercera-pregunta\");\n}\n\nfunction paso5() {\n  $(\".rocket img + img\").animate({\n    opacity: 1\n  }, 50);\n  darSalto(\".full_moon > img\", \"quinta-pregunta\");\n}\n\nfunction paso6() {\n  $(\".rocket img + img\").animate({\n    opacity: 1\n  }, 50);\n  darSalto(\".planet_ring > img\", \"sexta-pregunta\");\n}\n\nfunction paso7() {\n  $(\".rocket img + img\").animate({\n    opacity: 1\n  }, 50);\n  darSalto(\".planet_red > img\", \"septima-pregunta\");\n}\n\n$(document).ready(function () {\n  var winWidth = $(window).width(),\n      h = $(window).height();\n  (0, _dialog2.default)(true);\n  var jsonData = localStorage.getItem(\"web2b\");\n\n  if (jsonData == null) {\n    jsonData = {};\n    jsonData.respuestas = {};\n  } else {\n    jsonData = JSON.parse(jsonData);\n  }\n\n  if (Object.keys(jsonData.respuestas).length > 0) {\n    $(\".datos-existentes\").dialog(\"open\");\n  }\n\n  $(\".iniciar\").click(function () {\n    $(\".datos-existentes\").dialog(\"close\");\n    localStorage.removeItem(\"web2b\");\n    jsonData = {};\n  });\n  $(\".continuar\").click(function () {\n    $(\".init\").fadeOut(50);\n    $(\".datos-existentes\").dialog(\"close\");\n\n    switch (Object.keys(jsonData.respuestas).length + 1) {\n      case 2:\n        paso3();\n        break;\n\n      case 3:\n        paso4();\n        break;\n\n      case 4:\n        $(\".fin\").dialog(\"open\");\n        break;\n    }\n  });\n  $(window).resize(function () {\n    winWidth = $(window).width();\n\n    if (positionActual != '') {\n      rePositionRocket();\n    }\n  });\n  $(\".init\").click(function (e) {\n    $(e.target).fadeOut(50);\n    paso1(); //muestraPregunta(\"primera-pregunta\");\n  });\n  $(\".res_1\").click(function () {\n    if (preguntaValida(\".primera-pregunta\")) {\n      $(\".primera-pregunta\").dialog(\"close\");\n      $(\".primera-pregunta\").on(\"dialogclose\", function () {\n        paso3();\n      });\n    }\n  }); //segundo\n\n  $(\".res_2\").click(function () {\n    if (preguntaValida(\".segunda-pregunta\")) {\n      $(\".segunda-pregunta\").dialog(\"close\");\n      $(\".segunda-pregunta\").on(\"dialogclose\", function () {\n        paso4();\n      });\n    }\n  }); //segundo\n\n  $(\".res_3\").click(function () {\n    if (preguntaValida(\".tercera-pregunta\")) {\n      $(\".tercera-pregunta\").dialog(\"close\");\n      $(\".tercera-pregunta\").on(\"dialogclose\", function () {\n        //paso4();\n        $(\".fin\").dialog(\"open\");\n      });\n    }\n  }); //tercero\n\n  $(\".res_4\").click(function () {\n    if (preguntaValida(\".cuarta-pregunta\")) {\n      $(\".cuarta-pregunta\").dialog(\"close\");\n      $(\".cuarta-pregunta\").on(\"dialogclose\", function () {\n        paso5();\n      });\n    }\n  }); //cuarto\n\n  $(\".res_5\").click(function () {\n    if (preguntaValida(\".quinta-pregunta\")) {\n      $(\".quinta-pregunta\").dialog(\"close\");\n      $(\".quinta-pregunta\").on(\"dialogclose\", function () {\n        paso6();\n      });\n    }\n  }); //quinto\n\n  $(\".res_6\").click(function () {\n    if (preguntaValida(\".sexta-pregunta\")) {\n      $(\".sexta-pregunta\").dialog(\"close\");\n      $(\".sexta-pregunta\").on(\"dialogclose\", function () {\n        paso7();\n      });\n    }\n  });\n  $(\".res_7\").click(function () {\n    if (preguntaValida(\".septima-pregunta\")) {\n      $(\".septima-pregunta\").dialog(\"close\");\n      $(\".septima-pregunta\").on(\"dialogclose\", function () {\n        $(\".fin\").dialog(\"open\");\n      });\n    }\n  });\n  $(\".back\").click(function (e) {\n    $(\".dialog:visible\").dialog(\"close\");\n    var back = $(e.currentTarget).data(\"back\");\n\n    if (back == 0) {\n      paso1();\n    } else {\n      window['paso' + back]();\n    }\n  });\n  /*GRUPOS DE RESPUESTAS */\n\n  $(\".group_answers\").hide();\n  $(\".cont_answers>label>input[type='radio']\").change(function () {\n    var $this = $(this);\n    $this.parent().parent().parent().find(\".group_answers\").hide();\n    $this.parent().parent().parent().find(\".cont_answers>label\").show();\n    $this.parent().next(\".group_answers\").show().find(\"input:first\").trigger(\"click\");\n    $this.parent().hide();\n    return false;\n  });\n});\n\n//# sourceURL=webpack:///./tour/scripts/tour.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./landing/js/scripts.js");
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

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = modal;\n\nfunction modal() {\n  var $modal = null;\n  var $close = null;\n  var $overlay = null;\n\n  var init = function init(ide) {\n    $modal = $(ide);\n\n    if ($modal.find(\"#modal-close\").length > 0) {\n      setCloseButton();\n    }\n\n    if ($modal.find(\"#modal-overlay\").length > 0) {\n      setOverlay();\n    }\n  };\n\n  var setCloseButton = function setCloseButton() {\n    $close = $(\"#modal-close\");\n    $(\"body\").on(\"click\", \"#modal-close\", function () {\n      hide();\n    });\n  };\n\n  var setOverlay = function setOverlay() {\n    $overlay = $(\"#modal-overlay\");\n    $modal.before($overlay);\n  };\n\n  var hide = function hide() {\n    $modal.fadeOut(500).find(\".dialog\").hide();\n\n    if ($overlay) {\n      $overlay.hide();\n    }\n  };\n\n  var show = function show(ide) {\n    $modal.hide().fadeIn(500).find(\".dialog\").hide().filter(ide).show();\n\n    if ($overlay) {\n      $overlay.fadeIn(500);\n    }\n  };\n\n  var hideErrorMessage = function hideErrorMessage() {\n    $(\".dialog-error:visible\").remove().detach();\n  };\n\n  var showErrorMessage = function showErrorMessage($target, cont, ide) {\n    var mssg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n\n    if ($target.find(ide).length == 0) {\n      $target.find(cont).after($(ide).clone());\n    }\n\n    if (mssg != undefined) {\n      $target.find(ide).html(mssg);\n    }\n\n    $target.find(ide).hide().fadeIn(\"fast\");\n  };\n\n  return {\n    init: init,\n    hide: hide,\n    hideErrorMessage: hideErrorMessage,\n    showErrorMessage: showErrorMessage,\n    show: show\n  };\n}\n\n;\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/pageManager.js":
/*!***************************!*\
  !*** ./js/pageManager.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = pageManager;\n\nvar _dataManager = __webpack_require__(/*! ./dataManager */ \"./js/dataManager.js\");\n\nvar _dataManager2 = _interopRequireDefault(_dataManager);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction pageManager() {\n  var paginas = [],\n      new_Datamanager = new _dataManager2.default();\n\n  var setPaginasInfoFromExternal = function setPaginasInfoFromExternal(p) {\n    paginas = p;\n  };\n\n  var getPaginas = function getPaginas() {\n    return new_Datamanager.getPagesFromDB().then(function (p) {\n      var templateId = new_Datamanager.getObjFromLocalStorage(\"web2b_templateId\");\n      paginas = p.paginas;\n      localStorage.setItem(\"web2b_pages\", JSON.stringify(p.paginas));\n      p.paginas.forEach(function (value) {\n        if (Number(value.idSitio) === templateId) {\n          localStorage.setItem(\"web2b_actualPage\", JSON.stringify(value));\n        }\n      });\n    });\n  };\n\n  var fillModal = function fillModal(userId, callback) {\n    // manejar varias paginas de un solo usuario??\n    var html = \"\";\n    var actualPage = new_Datamanager.getObjFromLocalStorage(\"web2b_actualPage\");\n\n    for (var i = 0, jd; i < paginas.length; i++) {\n      // if(paginas[i].idSitio === actualPage.idSitio) continue;\n      jd = JSON.parse(decodeURIComponent(paginas[i].info));\n      var name = jd.nombre || jd.selections.siteName.text || \"no name\";\n      if (paginas[i].idSitio === actualPage.idSitio) name = name + '(Proyecto actual)';\n      html += \"<option class=\\\"inserted\\\" value=\\\"\" + i + \"\\\">\\n                \" + name + \"\\n            </option>\";\n    }\n\n    $(\".proyectos-disponibles .inserted\").remove();\n    $(\".proyectos-disponibles\").append(html);\n    $(\".ventana-login > form\").hide();\n    $(\".login-paginas\").show();\n    $(\".llevame\").click({\n      pags: paginas,\n      userId: userId\n    }, function (e) {\n      var pagina = $(\".proyectos-disponibles option:selected\").val(),\n          d = e.data;\n\n      if (pagina != \"\") {\n        localStorage.setItem(\"web2b_template\", decodeURIComponent(d.pags[pagina].info));\n        localStorage.setItem(\"web2b_templateId\", d.pags[pagina].idSitio);\n        localStorage.setItem(\"web2b_userId\", d.userId);\n        localStorage.setItem(\"web2b_pages\", JSON.stringify(d.pags));\n        localStorage.setItem(\"web2b_actualPage\", JSON.stringify(d.pags[pagina]));\n        callback();\n      } else {\n        $(\".login-paginas .form-error\").css(\"display\", \"block\");\n      }\n    });\n  };\n\n  var hasPages = function hasPages() {\n    return paginas.length > 1 ? true : false;\n  };\n\n  return {\n    setPaginasInfoFromExternal: setPaginasInfoFromExternal,\n    getPaginas: getPaginas,\n    fillModal: fillModal,\n    hasPages: hasPages\n  };\n}\n\n//# sourceURL=webpack:///./js/pageManager.js?");

/***/ }),

/***/ "./landing/js/scripts.js":
/*!*******************************!*\
  !*** ./landing/js/scripts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _pageManager = __webpack_require__(/*! ../../js/pageManager */ \"./js/pageManager.js\");\n\nvar _pageManager2 = _interopRequireDefault(_pageManager);\n\nvar _modal = __webpack_require__(/*! ../../js/modal */ \"./js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n$(document).ready(function () {\n  var new_modal = new _modal2.default();\n  new_modal.init(\"#modal\");\n  new_modal.hide();\n  /* */\n\n  $(\"a[href^='#']\").on(\"click\", function () {\n    var top = $($(this).attr(\"href\")).offset().top;\n    console.log(top);\n    $(\"html, body\").stop().animate({\n      scrollTop: top - 55\n    }, 500, 'swing');\n    return false;\n  });\n\n  function isEmail(email) {\n    var regex = /^([a-zA-Z0-9_.+-])+\\@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4})+$/;\n    return regex.test(email);\n  }\n\n  $(\".login-btn\").click(function (e) {\n    e.preventDefault();\n    $(\"#email\").val(\"contacto@web2b.mx\");\n    $(\"#password\").val(\"\");\n    new_modal.show(\"#dialog-login\");\n  });\n  $(\"#form-login\").submit(function (e) {\n    e.preventDefault();\n    new_modal.hideErrorMessage();\n\n    if ($(\"#email\").val().trim() == \"\" || !isEmail($(\"#email\").val())) {\n      new_modal.showErrorMessage($(\"#dialog-login\"), \"#inp-email\", \"#error-malformed-email\");\n    }\n\n    if (!$(\"#password\").val().trim()) {\n      new_modal.showErrorMessage($(\"#dialog-login\"), \"#inp-password\", \"#error-malformed-password\");\n    } else {\n      $.post(\"/landing/scripts/login.php\", {\n        correo: $(\"#email\").val().trim(),\n        password: $(\"#password\").val()\n      }).done(function (response) {\n        if (response.ok && response.paginas.length > 0) {\n          // si solo tiene una pagina\n          if (response.paginas.length == 1) {\n            //mostrar usuarios\n            localStorage.setItem(\"web2b_template\", decodeURIComponent(response.paginas[0].info));\n            localStorage.setItem(\"web2b_templateId\", response.paginas[0].idSitio);\n            localStorage.setItem(\"web2b_userId\", response.userId);\n            localStorage.setItem(\"web2b_actualPage\", response.paginas[0]);\n            window.location.href = \"/crea\";\n          } else {\n            console.log(\"Page Manager\");\n            /* */\n            // show pages and redirect on success\n\n            new_modal.show(\"#dialog-project-switcher\");\n            var new_PageManager = new _pageManager2.default();\n            new_PageManager.setPaginasInfoFromExternal(response.paginas);\n            new_PageManager.fillModal(response.userId, function () {\n              window.location.href = \"/crea\";\n            });\n            /**/\n          }\n        } else {\n          new_modal.showErrorMessage($(\"#dialog-login\"), \"#inp-password\", \"#error-login\", response.error);\n        }\n      }).fail(function (response) {\n        console.log(response);\n      }).always(function () {\n        $(\".login-content .form-error\").hide();\n      });\n    }\n  });\n  /*COMPLETE EMAIL SUBSCRIPTION*/\n\n  $(\".comingsoon\").click(function () {\n    var email = $(\"#input-email-subscribe\").val();\n\n    if (isEmail(email)) {\n      $.post(\"/landing/scripts/emailSubscriptions.php\", {\n        correo: email.trim()\n      }).done(function (response) {\n        console.log(response);\n      }).fail(function (response) {\n        console.log(response);\n      }).always(function () {});\n    } else {\n      console.log(\"error\");\n    }\n\n    return false;\n  });\n  /*COMPLETE EMAIL SUBSCRIPTION*/\n});\n\n//# sourceURL=webpack:///./landing/js/scripts.js?");

/***/ })

/******/ });
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

/***/ "./js/dialog.js":
/*!**********************!*\
  !*** ./js/dialog.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dialogHandler;\n\nfunction dialogHandler() {\n  var setHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var winWidth = $(window).width(),\n      winHeigth = $(window).height();\n  $(\".dialog\").dialog({\n    autoOpen: false,\n    modal: true,\n    width: winWidth,\n    height: setHeight ? winHeigth : 'auto',\n    fluid: true,\n    show: {\n      effect: \"fade\",\n      duration: 1000\n    },\n    hide: {\n      effect: \"fade\",\n      duration: 1000\n    },\n    closeOnEscape: false\n  }); // run function on all dialog opens\n\n  $(document).on(\"dialogopen\", \".ui-dialog\", function (event, ui) {\n    fluidDialog();\n  }); // remove window resize namespace\n\n  $(document).on(\"dialogclose\", \".ui-dialog\", function (event, ui) {\n    $(window).off(\"resize.responsive\");\n  });\n\n  function fluidDialog() {\n    var $visible = $(\".ui-dialog:visible\"); // each open dialog\n\n    $visible.each(function () {\n      var $this = $(this);\n      var dialog = $this.find(\".ui-dialog-content\").dialog(\"instance\");\n      console.log(dialog); // if fluid option == true\n\n      if (dialog.options.maxWidth && dialog.options.width) {\n        // fix maxWidth bug\n        $this.css(\"max-width\", dialog.options.maxWidth); //reposition dialog\n\n        dialog.option(\"position\", dialog.options.position);\n      }\n\n      if (dialog.options.fluid) {\n        // namespace window resize\n        $(window).on(\"resize.responsive\", function () {\n          var wWidth = $(window).width(); // check window width against dialog width\n\n          if (wWidth < dialog.options.maxWidth + 50) {\n            // keep dialog from filling entire screen\n            $this.css(\"width\", \"90%\");\n          } //reposition dialog\n\n\n          dialog.option(\"position\", dialog.options.position);\n        });\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack:///./js/dialog.js?");

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
eval("\n\nvar _dialog = __webpack_require__(/*! ../../js/dialog */ \"./js/dialog.js\");\n\nvar _dialog2 = _interopRequireDefault(_dialog);\n\nvar _pageManager = __webpack_require__(/*! ../../js/pageManager */ \"./js/pageManager.js\");\n\nvar _pageManager2 = _interopRequireDefault(_pageManager);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n$(document).ready(function () {\n  var new_PageManager = new _pageManager2.default();\n  $(\".comingsoon\").click(function () {\n    alert(\"Proximamente\");\n  });\n  $(\"a[href^='#']\").on(\"click\", function () {\n    var top = $($(this).attr(\"href\")).offset().top;\n    console.log(top);\n    $(\"html, body\").stop().animate({\n      scrollTop: top - 55\n    }, 500, 'swing');\n    return false;\n  });\n  (0, _dialog2.default)();\n  $(\".login-btn\").click(function (e) {\n    e.preventDefault();\n    $(\".login-content\").show();\n    $(\".login-error\").hide();\n    $(\".ventana-login\").dialog(\"option\", \"width\", 400);\n    $(\".ventana-login\").dialog(\"open\");\n    $(\"#email\").val(\"contacto@web2b.mx\");\n    $(\"#password\").val(\"\");\n    $(\".login-paginas\").hide();\n    $(\".form-error\").hide();\n  });\n  $(\".cerrar-ventana\").click(function () {\n    $(\".ventana-login\").dialog(\"close\");\n  });\n  $(\".ventana-login form\").submit(function (e) {\n    e.preventDefault();\n\n    if ($(\"#email\").val().trim() == \"\" || !isEmail($(\"#email\").val())) {\n      $(\".login-content .email.form-error\").css(\"display\", \"block\");\n    }\n\n    if (!$(\"#password\").val().trim()) {\n      $(\".login-content .password.form-error\").css(\"display\", \"block\");\n    } else {\n      $.post(\"/landing/scripts/login.php\", {\n        correo: $(\"#email\").val().trim(),\n        password: $(\"#password\").val()\n      }).done(function (response) {\n        if (response.ok && response.paginas.length > 0) {\n          // si solo tiene una pagina\n          if (response.paginas.length == 1) {\n            //mostrar usuarios\n            localStorage.setItem(\"web2b_template\", decodeURIComponent(response.paginas[0].info));\n            localStorage.setItem(\"web2b_templateId\", response.paginas[0].idSitio);\n            localStorage.setItem(\"web2b_userId\", response.userId);\n            localStorage.setItem(\"web2b_actualPage\", response.paginas[0]);\n            window.location.href = \"/crea\";\n          } else {\n            // show pages and redirect on success\n            new_PageManager.setPaginasInfoFromExternal(response.paginas);\n            new_PageManager.fillModal(response.userId, function () {\n              window.location.href = \"/crea\";\n            });\n          }\n        } else {\n          $(\".login-content\").fadeOut(100);\n          $(\".login-error p\").html(response.error);\n          $(\".login-error\").fadeIn(100);\n        }\n      }).fail(function (response) {}).always(function () {\n        $(\".login-content .form-error\").hide();\n      });\n    }\n  });\n  /*GENERAL FUNCTIONS*/\n\n  function isEmail(email) {\n    var regex = /^([a-zA-Z0-9_.+-])+\\@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4})+$/;\n    return regex.test(email);\n  }\n  /*\r\n  $(\"#list-steps li\").on(\"swipe\", function(e) {\r\n  \t\r\n  });\r\n  */\n\n});\n\n//# sourceURL=webpack:///./landing/js/scripts.js?");

/***/ })

/******/ });

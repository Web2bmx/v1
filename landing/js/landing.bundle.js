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

/***/ "./landing/js/scripts.js":
/*!*******************************!*\
  !*** ./landing/js/scripts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar winWidth = $(window).width(),\n    winHeigth = $(window).height();\n$(document).ready(function () {\n  $(\".comingsoon\").click(function () {\n    alert(\"Proximamente\");\n  });\n  $(\"a[href^='#']\").on(\"click\", function () {\n    var top = $($(this).attr(\"href\")).offset().top;\n    console.log(top);\n    $(\"html, body\").stop().animate({\n      scrollTop: top - 55\n    }, 500, 'swing');\n    return false;\n  });\n  $(\".dialog\").dialog({\n    autoOpen: false,\n    modal: true,\n    width: winWidth,\n    show: {\n      effect: \"fade\",\n      duration: 1000\n    },\n    hide: {\n      effect: \"fade\",\n      duration: 1000\n    },\n    closeOnEscape: false\n  });\n  $(\".login-btn\").click(function (e) {\n    e.preventDefault();\n    $(\".login-content\").show();\n    $(\".login-success\").hide();\n    $(\".login-error\").hide();\n    $(\".ventana-login\").dialog(\"open\");\n  });\n  $(\".cerrar-ventana\").click(function () {\n    $(\".ventana-login\").dialog(\"close\");\n  });\n  $(\".entrar\").click(function () {\n    if ($(\"#email\").val().trim() == \"\" || !isEmail($(\"#email\").val())) {\n      $(\".login-content .email.error\").show();\n    }\n\n    if (!$(\"#password\").val()) {\n      $(\".login-content .password.error\").show();\n    } else {\n      $.post(\"/landing/scripts/login.php\", {\n        correo: $(\"#email\").val().trim(),\n        password: $(\"#password\").val()\n      }).done(function (response) {\n        if (response.ok) {\n          $(\".login-content .error\").hide();\n          $(\".login-content\").fadeOut(100);\n          $(\".login-success\").fadeIn(100); // manejar varias paginas de un solo usuario??\n          //mostrar usuarios\n\n          localStorage.setItem(\"web2b_template\", JSON.stringify(response.paginas[0].info));\n          localStorage.setItem(\"web2b_templateId\", 1);\n          localStorage.setItem(\"web2b_userId\", JSON.stringify(response.userId));\n          window.location.href = \"/crea\";\n        } else {\n          $(\".login-content .error\").hide();\n          $(\".login-content\").fadeOut(100);\n          $(\".login-error\").fadeIn(100);\n        }\n      }).fail(function (response) {}).always(function () {\n        $(\".login-content .error\").hide();\n      });\n    }\n  });\n  /*GENERAL FUNCTIONS*/\n\n  function isEmail(email) {\n    var regex = /^([a-zA-Z0-9_.+-])+\\@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4})+$/;\n    return regex.test(email);\n  }\n});\n\n//# sourceURL=webpack:///./landing/js/scripts.js?");

/***/ })

/******/ });
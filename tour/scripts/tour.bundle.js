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

/***/ "./tour/scripts/tour.js":
/*!******************************!*\
  !*** ./tour/scripts/tour.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\tour\\\\scripts\\\\tour.js: Unexpected token (46:0)\\n\\n\\u001b[0m \\u001b[90m 44 | \\u001b[39m    }\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 45 | \\u001b[39m    \\u001b[36mvar\\u001b[39m setDialogWithProject \\u001b[33m=\\u001b[39m \\u001b[36mfunction\\u001b[39m() {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 46 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 47 | \\u001b[39m        new_modal\\u001b[33m.\\u001b[39mshow(\\u001b[32m\\\"#dialog-existing-project\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 48 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 49 | \\u001b[39m        new_modal\\u001b[33m.\\u001b[39mshow(\\u001b[32m\\\"#dialog-end\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3831:17)\\n    at Parser.unexpected (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5143:16)\\n    at Parser.parseExprAtom (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6283:20)\\n    at Parser.parseExprSubscripts (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5862:23)\\n    at Parser.parseMaybeUnary (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseExpression (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5595:23)\\n    at Parser.parseStatementContent (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7378:23)\\n    at Parser.parseStatement (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Parser.parseBlockBody (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Parser.parseBlock (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7786:10)\\n    at Parser.parseFunctionBody (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6876:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6860:10)\\n    at withTopicForbiddingContext (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7945:12)\\n    at Parser.withTopicForbiddingContext (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7150:14)\\n    at Parser.parseFunction (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7944:10)\\n    at Parser.parseFunctionExpression (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6326:17)\\n    at Parser.parseExprAtom (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6232:21)\\n    at Parser.parseExprSubscripts (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5862:23)\\n    at Parser.parseMaybeUnary (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseVar (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7880:26)\\n    at Parser.parseVarStatement (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7714:10)\\n    at Parser.parseStatementContent (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7310:21)\\n    at Parser.parseStatement (C:\\\\wamp64\\\\www\\\\web2b\\\\V1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\");\n\n//# sourceURL=webpack:///./tour/scripts/tour.js?");

/***/ })

/******/ });
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["delta"] = factory();
	else
		root["delta"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/convert.ts":
/*!************************!*\
  !*** ./src/convert.ts ***!
  \************************/
/*! exports provided: toDouble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDouble\", function() { return toDouble; });\nfunction toDouble(num) {\r\n    return +num;\r\n}\r\n\n\n//# sourceURL=webpack://delta/./src/convert.ts?");

/***/ }),

/***/ "./src/createFn.ts":
/*!*************************!*\
  !*** ./src/createFn.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./src/error.ts\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (fnEvaluate, opts) {\r\n    if (opts === void 0) { opts = {}; }\r\n    var fn = new FormulaFunction(fnEvaluate, opts);\r\n    return function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        return fn.call(args);\r\n    };\r\n});\r\nvar FormulaFunction = /** @class */ (function () {\r\n    function FormulaFunction(evaluate, _a) {\r\n        var _b = _a === void 0 ? {} : _a, _c = _b.minArgs, minArgs = _c === void 0 ? 0 : _c, _d = _b.maxArgs, maxArgs = _d === void 0 ? Infinity : _d;\r\n        this.evaluate = evaluate;\r\n        this.minArgs = minArgs;\r\n        this.maxArgs = maxArgs;\r\n    }\r\n    FormulaFunction.prototype.call = function (args) {\r\n        var argsLen = args.length;\r\n        if (argsLen < this.minArgs || argsLen > this.maxArgs)\r\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"ArgsError\"]();\r\n        return this.evaluate.apply(this, args);\r\n    };\r\n    return FormulaFunction;\r\n}());\r\n\n\n//# sourceURL=webpack://delta/./src/createFn.ts?");

/***/ }),

/***/ "./src/error.ts":
/*!**********************!*\
  !*** ./src/error.ts ***!
  \**********************/
/*! exports provided: ValueError, ArgsError, NumberError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValueError\", function() { return ValueError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArgsError\", function() { return ArgsError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NumberError\", function() { return NumberError; });\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar ValueError = /** @class */ (function (_super) {\r\n    __extends(ValueError, _super);\r\n    function ValueError() {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var _this = _super.apply(this, args) || this;\r\n        _this.message = 'value';\r\n        return _this;\r\n    }\r\n    return ValueError;\r\n}(Error));\r\n\r\nvar ArgsError = /** @class */ (function (_super) {\r\n    __extends(ArgsError, _super);\r\n    function ArgsError() {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var _this = _super.apply(this, args) || this;\r\n        _this.message = 'args';\r\n        return _this;\r\n    }\r\n    return ArgsError;\r\n}(Error));\r\n\r\nvar NumberError = /** @class */ (function (_super) {\r\n    __extends(NumberError, _super);\r\n    function NumberError() {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var _this = _super.apply(this, args) || this;\r\n        _this.message = 'number';\r\n        return _this;\r\n    }\r\n    return NumberError;\r\n}(Error));\r\n\r\n\n\n//# sourceURL=webpack://delta/./src/error.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: ABS, ACOS, ACOSH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABS\", function() { return ABS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACOS\", function() { return ACOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACOSH\", function() { return ACOSH; });\n/* harmony import */ var _math_trig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-trig */ \"./src/math-trig.ts\");\n\r\nvar ABS = _math_trig__WEBPACK_IMPORTED_MODULE_0__[\"ABS\"], ACOS = _math_trig__WEBPACK_IMPORTED_MODULE_0__[\"ACOS\"], ACOSH = _math_trig__WEBPACK_IMPORTED_MODULE_0__[\"ACOSH\"];\r\n\n\n//# sourceURL=webpack://delta/./src/index.ts?");

/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Built by eustia.\n(function(root, factory)\n{\n    if (true)\n    {\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function ()\n{\n    \"use strict\";\n\n    var _ = {};\n\n    if (typeof window === 'object' && window._) _ = window._;\n\n    /* ------------------------------ objToStr ------------------------------ */\n\n    var objToStr = _.objToStr = (function ()\n    {\n        /* Alias of Object.prototype.toString.\n         *\n         * |Name  |Type  |Desc                                |\n         * |------|------|------------------------------------|\n         * |value |*     |Source value                        |\n         * |return|string|String representation of given value|\n         * \n         * ```javascript\n         * objToStr(5); // -> '[object Number]'\n         * ```\n         */\n\n        /* module\n         * env: all\n         * test: all\n         */\n\n        var ObjToStr = Object.prototype.toString;\n\n        function exports(val)\n        {\n            return ObjToStr.call(val);\n        }\n\n        return exports;\n    })();\n\n    /* ------------------------------ isNum ------------------------------ */\n\n    var isNum = _.isNum = (function ()\n    {\n        /* Check if value is classified as a Number primitive or object.\n         *\n         * |Name  |Type   |Desc                                 |\n         * |------|-------|-------------------------------------|\n         * |val   |*      |Value to check                       |\n         * |return|boolean|True if value is correctly classified|\n         * \n         * ```javascript\n         * isNum(5); // -> true\n         * isNum(5.1); // -> true\n         * isNum({}); // -> false\n         * ```\n         */\n\n        /* module\n         * env: all\n         * test: all\n         */\n\n        /* dependencies\n         * objToStr \n         */\n\n        function exports(val)\n        {\n            return objToStr(val) === '[object Number]';\n        }\n\n        return exports;\n    })();\n\n    /* ------------------------------ isNaN ------------------------------ */\n\n    _.isNaN = (function ()\n    {\n        /* Check if value is an NaN.\n         *\n         * |Name  |Type   |Desc                   |\n         * |------|-------|-----------------------|\n         * |val   |*      |Value to check         |\n         * |return|boolean|True if value is an NaN|\n         *\n         * Undefined is not an NaN, different from global isNaN function.\n         *\n         * ```javascript\n         * isNaN(0); // -> false\n         * isNaN(NaN); // -> true\n         * ```\n         */\n\n        /* module\n         * env: all\n         * test: all\n         */\n\n        /* dependencies\n         * isNum \n         */\n\n        function exports(val)\n        {\n            return isNum(val) && val !== +val;\n        }\n\n        return exports;\n    })();\n\n    return _;\n}));\n\n//# sourceURL=webpack://delta/./src/lib/util.js?");

/***/ }),

/***/ "./src/math-trig.ts":
/*!**************************!*\
  !*** ./src/math-trig.ts ***!
  \**************************/
/*! exports provided: ABS, ACOS, ACOSH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABS\", function() { return ABS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACOS\", function() { return ACOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACOSH\", function() { return ACOSH; });\n/* harmony import */ var _createFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFn */ \"./src/createFn.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ \"./src/error.ts\");\n/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/util */ \"./src/lib/util.js\");\n/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_util__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convert */ \"./src/convert.ts\");\n\r\n\r\n\r\n\r\nvar abs = Math.abs, acos = Math.acos, log = Math.log, sqrt = Math.sqrt;\r\nvar ABS = Object(_createFn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (num) {\r\n    num = Object(_convert__WEBPACK_IMPORTED_MODULE_3__[\"toDouble\"])(num);\r\n    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_2__[\"isNaN\"])(num))\r\n        throw new _error__WEBPACK_IMPORTED_MODULE_1__[\"ValueError\"]();\r\n    return abs(num);\r\n}, {\r\n    minArgs: 1,\r\n    maxArgs: 1\r\n});\r\nvar ACOS = Object(_createFn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (num) {\r\n    num = Object(_convert__WEBPACK_IMPORTED_MODULE_3__[\"toDouble\"])(num);\r\n    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_2__[\"isNaN\"])(num))\r\n        throw new _error__WEBPACK_IMPORTED_MODULE_1__[\"ValueError\"]();\r\n    if (num < -1.0 || num > 1.0)\r\n        throw new _error__WEBPACK_IMPORTED_MODULE_1__[\"NumberError\"]();\r\n    return acos(num);\r\n}, {\r\n    minArgs: 1,\r\n    maxArgs: 1\r\n});\r\nvar ACOSH = Object(_createFn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (num) {\r\n    num = Object(_convert__WEBPACK_IMPORTED_MODULE_3__[\"toDouble\"])(num);\r\n    if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_2__[\"isNaN\"])(num))\r\n        throw new _error__WEBPACK_IMPORTED_MODULE_1__[\"ValueError\"]();\r\n    if (num < 1.0)\r\n        throw new _error__WEBPACK_IMPORTED_MODULE_1__[\"NumberError\"]();\r\n    return log(num + sqrt(num * num - 1.0));\r\n}, {\r\n    minArgs: 1,\r\n    maxArgs: 1\r\n});\r\n\n\n//# sourceURL=webpack://delta/./src/math-trig.ts?");

/***/ })

/******/ });
});
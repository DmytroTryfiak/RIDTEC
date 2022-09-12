/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--7-2!./node_modules/postcss-loader/src??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--7-4!./src/assets/scss/main.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zcmMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL21haW4uc2Nzcz9iZmNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss\n");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--8-2!./node_modules/postcss-loader/src??ref--8-3!./src/assets/css/main.css ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL3NyYy9hc3NldHMvY3NzL21haW4uY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jc3MvbWFpbi5jc3M/NDlmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css\n");

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--8-2!../../../node_modules/postcss-loader/src??ref--8-3!./main.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2Nzcy9tYWluLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3NldHMvY3NzL21haW4uY3NzPzY4MmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0zIS4vbWFpbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/css/main.css\n");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--7-2!../../../node_modules/postcss-loader/src??ref--7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--7-4!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL21haW4uc2Nzcz84MThjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy00IS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scss/main.scss\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/carousel.js */ \"./src/js/carousel.js\");\n/* harmony import */ var _js_carousel_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_carousel_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_slick_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/slick-slider.js */ \"./src/js/slick-slider.js\");\n/* harmony import */ var _js_services_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/services.js */ \"./src/js/services.js\");\n/* harmony import */ var _js_services_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_services_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_burger_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/burger-menu.js */ \"./src/js/burger-menu.js\");\n/* harmony import */ var _js_burger_menu_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_burger_menu_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_sticky_header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/sticky-header.js */ \"./src/js/sticky-header.js\");\n/* harmony import */ var _js_sticky_header_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_sticky_header_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/css/main.css */ \"./src/assets/css/main.css\");\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/scss/main.scss */ \"./src/assets/scss/main.scss\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_9__);\n// ============================================================================\n//                                      JS\n// ============================================================================\n\n\nwindow.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;\n\n\n\n\n\n // ============================================================================\n//                                 SCSS - CSS\n// ============================================================================\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xuXG5pbXBvcnQgJy4vanMvc2NyaXB0LmpzJztcbmltcG9ydCAnLi9qcy9jYXJvdXNlbC5qcyc7XG5pbXBvcnQgJy4vanMvc2xpY2stc2xpZGVyLmpzJztcbmltcG9ydCAnLi9qcy9zZXJ2aWNlcy5qcyc7XG5pbXBvcnQgJy4vanMvYnVyZ2VyLW1lbnUuanMnO1xuaW1wb3J0ICcuL2pzL3N0aWNreS1oZWFkZXIuanMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNDU1MgLSBDU1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0ICcuL2Fzc2V0cy9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL21haW4uc2Nzcyc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/burger-menu.js":
/*!*******************************!*\
  !*** ./src/js/burger-menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  const body = document.querySelector('#body');\n  const burgerMenu = document.querySelector('.js-burger-menu');\n  const menuList = document.querySelector('.js-nav');\n  const overlay = document.querySelector('.js-overlay');\n  burgerMenu.addEventListener('click', function () {\n    if (this.classList.contains('m-active')) {\n      this.classList.remove('m-active');\n      menuList.classList.remove('m-active');\n      body.classList.remove('m-fixed');\n      overlay.classList.remove('m-show');\n    } else {\n      this.classList.add(\"m-active\");\n      menuList.classList.add(\"m-active\");\n      body.classList.add('m-fixed');\n      overlay.classList.add('m-show');\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVyZ2VyLW1lbnUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVyZ2VyLW1lbnUuanM/MTY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZHknKTtcblxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnVyZ2VyLW1lbnUnKTtcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXYnKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW92ZXJsYXknKTtcblxuICAgIGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdtLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnbS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgbWVudUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtLWZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbS1zaG93JylcblxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcIm0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoXCJtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ20tZml4ZWQnKTtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ20tc2hvdycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/burger-menu.js\n");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  const heroCarousel = document.querySelector(\".js-hero-carousel\") || false;\n\n  if (heroCarousel) {\n    carouselRUN(heroCarousel);\n  }\n}, false);\n\nfunction carouselRUN(heroCarousel) {\n  const scene = document.querySelector(\".js-scene\");\n  const carousel_items_Arrey = document.querySelectorAll(\".js-hero-carousel-slide\");\n  const carouselBtn = document.querySelectorAll(\".js-hero-carousel-btn\");\n  const n = carousel_items_Arrey.length;\n  let curr_carousel_items_Arrey = 0;\n  const theta = Math.PI * 2 / n;\n  let interval = null;\n  const autoCarousel = heroCarousel.dataset.auto;\n  setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));\n  window.addEventListener('resize', function () {\n    clearInterval(interval);\n    setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));\n  }, false);\n  setupNavigation();\n\n  function setupCarousel(n, width) {\n    var apothem = width / (2 * Math.tan(Math.PI / n));\n    scene.style.transformOrigin = `50% 50% ${-apothem}px`;\n\n    for (i = 1; i < n; i++) {\n      carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${-apothem}px`;\n      carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;\n    }\n\n    if (autoCarousel === \"true\") {\n      setCarouselInterval();\n    }\n  }\n\n  function setCarouselInterval() {\n    interval = setInterval(function () {\n      curr_carousel_items_Arrey++;\n      scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;\n    }, 3000);\n  }\n\n  function setupNavigation() {\n    for (let i = 0; i < carouselBtn.length; i++) {\n      carouselBtn[i].addEventListener('click', function (e) {\n        e.stopPropagation();\n        var target = e.target;\n\n        if (target.classList.contains('next')) {\n          curr_carousel_items_Arrey++;\n        } else if (target.classList.contains('prev')) {\n          curr_carousel_items_Arrey--;\n        }\n\n        clearInterval(interval);\n        scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;\n\n        if (autoCarousel === \"true\") {\n          setTimeout(setCarouselInterval(), 3000);\n        }\n      }, true);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2Fyb3VzZWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2Fyb3VzZWwuanM/MmIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhlcm9DYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaGVyby1jYXJvdXNlbFwiKSB8fCBmYWxzZTtcbiAgICBpZiAoaGVyb0Nhcm91c2VsKSB7XG4gICAgICAgIGNhcm91c2VsUlVOKGhlcm9DYXJvdXNlbCk7XG4gICAgfVxuICAgIFxufSwgZmFsc2UpO1xuXG5mdW5jdGlvbiBjYXJvdXNlbFJVTihoZXJvQ2Fyb3VzZWwpIHtcbiAgICBcbiAgICBjb25zdCBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2NlbmVcIik7XG4gICAgY29uc3QgY2Fyb3VzZWxfaXRlbXNfQXJyZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWhlcm8tY2Fyb3VzZWwtc2xpZGVcIik7XG4gICAgY29uc3QgY2Fyb3VzZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWhlcm8tY2Fyb3VzZWwtYnRuXCIpO1xuICAgIGNvbnN0IG4gPSBjYXJvdXNlbF9pdGVtc19BcnJleS5sZW5ndGg7XG4gICAgbGV0IGN1cnJfY2Fyb3VzZWxfaXRlbXNfQXJyZXkgPSAwO1xuICAgIGNvbnN0IHRoZXRhID0gTWF0aC5QSSAqIDIgLyBuO1xuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XG4gICAgY29uc3QgYXV0b0Nhcm91c2VsID0gaGVyb0Nhcm91c2VsLmRhdGFzZXQuYXV0bztcblxuICAgIHNldHVwQ2Fyb3VzZWwobiwgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGNhcm91c2VsX2l0ZW1zX0FycmV5WzBdKS53aWR0aCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIHNldHVwQ2Fyb3VzZWwobiwgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGNhcm91c2VsX2l0ZW1zX0FycmV5WzBdKS53aWR0aCkpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBzZXR1cE5hdmlnYXRpb24oKTtcblxuXG4gICAgZnVuY3Rpb24gc2V0dXBDYXJvdXNlbChuLCB3aWR0aCkge1xuICAgICAgICB2YXIgYXBvdGhlbSA9IHdpZHRoIC8gKDIgKiBNYXRoLnRhbihNYXRoLlBJIC8gbikpO1xuICAgICAgICBzY2VuZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBgNTAlIDUwJSAkey0gYXBvdGhlbX1weGA7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY2Fyb3VzZWxfaXRlbXNfQXJyZXlbaV0uc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYDUwJSA1MCUgJHstIGFwb3RoZW19cHhgO1xuICAgICAgICAgICAgY2Fyb3VzZWxfaXRlbXNfQXJyZXlbaV0uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtpICogdGhldGF9cmFkKWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXV0b0Nhcm91c2VsID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgc2V0Q2Fyb3VzZWxJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q2Fyb3VzZWxJbnRlcnZhbCgpIHtcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGN1cnJfY2Fyb3VzZWxfaXRlbXNfQXJyZXkrKztcbiAgICAgICAgICAgIHNjZW5lLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7KGN1cnJfY2Fyb3VzZWxfaXRlbXNfQXJyZXkpICogLXRoZXRhfXJhZClgO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cE5hdmlnYXRpb24oKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbEJ0bi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjYXJvdXNlbEJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vycl9jYXJvdXNlbF9pdGVtc19BcnJleSsrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJldicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfY2Fyb3VzZWxfaXRlbXNfQXJyZXktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgc2NlbmUuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtjdXJyX2Nhcm91c2VsX2l0ZW1zX0FycmV5ICogLXRoZXRhfXJhZClgO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9DYXJvdXNlbCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChzZXRDYXJvdXNlbEludGVydmFsKCksIDMwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/carousel.js\n");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  const body = document.querySelector('body');\n\n  if (/iPhone|iPad/i.test(navigator.userAgent)) {\n    body.classList.add('ios');\n  } else {\n    body.classList.add('web');\n  }\n\n  ;\n  body.classList.remove('loaded');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcz80NGFkIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cdGlmKCAvaVBob25lfGlQYWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuXHRcdGJvZHkuY2xhc3NMaXN0LmFkZCgnaW9zJyk7XG5cdH0gZWxzZXtcblx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ3dlYicpO1xuXHR9O1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVkJyk7IFxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ }),

/***/ "./src/js/services.js":
/*!****************************!*\
  !*** ./src/js/services.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import jsonData from '../data.json';\n// fetch('https://jsonplaceholder.typicode.com/todos/1')\n//   .then(response => response.json())\n//   .then(json => console.log(json))\n// fetch(jsonData)\n//   .then(response => response.jsonData())\n//   .then(jsonData => console.log(jsonData))\n// // const data = JSON.parse(jsonData);\n// // const items = data.items;\n// array_data = [{\n//         \"item\": {\n//             \"id\": 1,\n//             \"title\": \"Some title1\",\n//             \"subtitle\": \"Some subtitle1\",\n//             \"description\": \"Some description1\",\n//             \"images\" : [\n//                 \"/img1/...\", \"/img1/...\"\n//             ]\n//         }\n//     },\n//     {\n//         \"item\": {\n//             \"id\": 2,\n//             \"title\": \"Some title2\",\n//             \"subtitle\": \"Some subtitle2\",\n//             \"description\": \"Some description2\",\n//             \"images\" : [\n//                 \"/img2/...\", \"/img2/...\"\n//             ]\n//         }\n//       }\n// ]\n// console.log(array_data);\n// items.forEach((item)=> {\n//   for(const key in item) {\n//     for(const prop in key) {\n//       console.log(prop);\n//     }\n//   }\n// })\nconst infoData = [{\n  id: 1,\n  title: {\n    $el: \"H2\",\n    value: \"Some title1\"\n  },\n  subtitle: {\n    $el: \"div\",\n    value: \"Some subtitle1\"\n  },\n  description: {\n    $el: \"p\",\n    value: \"Some description1\"\n  },\n  images: [{\n    $el: \"img\",\n    src: \"/img/img1.jpg\"\n  }, {\n    $el: \"img\",\n    src: \"/img1/img2.jpg\"\n  }]\n}, {\n  id: 2,\n  title: {\n    $el: \"H2\",\n    value: \"Some title2\"\n  },\n  subtitle: {\n    $el: \"div\",\n    value: \"Some subtitle2\"\n  },\n  description: {\n    $el: \"p\",\n    value: \"Some description2\"\n  },\n  images: [{\n    $el: \"img\",\n    src: \"/img/img1.jpg\"\n  }, {\n    $el: \"img\",\n    src: \"/img1/img2.jpg\"\n  }]\n}];\nconst info = document.querySelector('.js-info') || false;\n\nif (info) {\n  creatInfoList(infoData);\n}\n\nfunction creatEl(tag, className) {\n  const el = document.createElement(tag);\n  el.className = className;\n  return el;\n}\n\nfunction createInfoItem(item) {\n  const articleEl = creatEl('article', 'services__info-item');\n\n  for (const key in item) {\n    let prop = item[key];\n    let el = null;\n\n    if (prop.hasOwnProperty('$el')) {\n      el = creatEl(prop.$el, `services__info-${key}`);\n      el.innerHTML = prop.value;\n      articleEl.append(el);\n    }\n\n    if (key == 'images') {\n      const imageWrapper = creatEl('div', 'services__info-image-wrapper');\n      let imgs = item[key];\n      imgs.forEach(img => {\n        el = creatEl(img.$el, `services__info-img`);\n        el.src = img.src;\n        imageWrapper.append(el);\n        articleEl.append(imageWrapper);\n      });\n    }\n  }\n\n  return articleEl;\n}\n\nfunction creatInfoList(data) {\n  data.forEach((item, index) => {\n    const article = createInfoItem(item);\n\n    if (index == 0) {\n      article.classList.add('m-active');\n    }\n\n    info.append(article);\n  });\n}\n\nconst servicesList = document.querySelector('.js-services-list') || false;\n\nif (servicesList) {\n  const servicesItem = servicesList.querySelectorAll('li');\n  const infoItems = info.querySelectorAll('article') || false;\n  servicesList.addEventListener('click', function (e) {\n    const $clickedEl = e.target.closest('li');\n\n    if ($clickedEl.classList.contains('m-active')) {\n      return;\n    }\n\n    for (let i = 0; i < servicesItem.length; i++) {\n      servicesItem[i].classList.remove('m-active');\n    }\n\n    $clickedEl.classList.add('m-active');\n    const clickedElId = $clickedEl.dataset.id;\n    console.log(infoItems);\n    infoItems.forEach((item, index) => {\n      if (index + 1 == clickedElId) {\n        item.classList.add('m-active');\n      } else {\n        item.classList.remove('m-active');\n      }\n    });\n  });\n}\n\nconst servicesBtn = document.querySelector('.js-services-menu') || false;\nconst servicesContent = document.querySelector('.js-services-content');\n\nif (servicesBtn) {\n  servicesBtn.addEventListener('click', function () {\n    servicesContent.classList.toggle('m-active');\n\n    if (servicesContent.classList.contains('m-active')) {\n      this.innerHTML = \"Закрити меню\";\n    } else {\n      this.innerHTML = \"Вибрати послугу\";\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2VydmljZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMuanM/MzM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQganNvbkRhdGEgZnJvbSAnLi4vZGF0YS5qc29uJztcbi8vIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMScpXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSlcblxuXG5cbi8vIGZldGNoKGpzb25EYXRhKVxuLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uRGF0YSgpKVxuLy8gICAudGhlbihqc29uRGF0YSA9PiBjb25zb2xlLmxvZyhqc29uRGF0YSkpXG5cbi8vIC8vIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcbi8vIC8vIGNvbnN0IGl0ZW1zID0gZGF0YS5pdGVtcztcblxuLy8gYXJyYXlfZGF0YSA9IFt7XG4vLyAgICAgICAgIFwiaXRlbVwiOiB7XG4vLyAgICAgICAgICAgICBcImlkXCI6IDEsXG4vLyAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU29tZSB0aXRsZTFcIixcbi8vICAgICAgICAgICAgIFwic3VidGl0bGVcIjogXCJTb21lIHN1YnRpdGxlMVwiLFxuLy8gICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNvbWUgZGVzY3JpcHRpb24xXCIsXG4vLyAgICAgICAgICAgICBcImltYWdlc1wiIDogW1xuLy8gICAgICAgICAgICAgICAgIFwiL2ltZzEvLi4uXCIsIFwiL2ltZzEvLi4uXCJcbi8vICAgICAgICAgICAgIF1cbi8vICAgICAgICAgfVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgICBcIml0ZW1cIjoge1xuLy8gICAgICAgICAgICAgXCJpZFwiOiAyLFxuLy8gICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNvbWUgdGl0bGUyXCIsXG4vLyAgICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiU29tZSBzdWJ0aXRsZTJcIixcbi8vICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTb21lIGRlc2NyaXB0aW9uMlwiLFxuLy8gICAgICAgICAgICAgXCJpbWFnZXNcIiA6IFtcbi8vICAgICAgICAgICAgICAgICBcIi9pbWcyLy4uLlwiLCBcIi9pbWcyLy4uLlwiXG4vLyAgICAgICAgICAgICBdXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vIF1cbi8vIGNvbnNvbGUubG9nKGFycmF5X2RhdGEpO1xuXG4vLyBpdGVtcy5mb3JFYWNoKChpdGVtKT0+IHtcbi8vICAgZm9yKGNvbnN0IGtleSBpbiBpdGVtKSB7XG4vLyAgICAgZm9yKGNvbnN0IHByb3AgaW4ga2V5KSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhwcm9wKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pXG5cbmNvbnN0IGluZm9EYXRhID0gWyBcbiAge1xuICAgICAgIGlkOiAxLFxuICAgICAgIHRpdGxlIDoge1xuICAgICAgICAgICAgJGVsOiBcIkgyXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJTb21lIHRpdGxlMVwiXG4gICAgICAgfSxcbiAgICAgICBzdWJ0aXRsZToge1xuICAgICAgICAgICAgJGVsOiBcImRpdlwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiU29tZSBzdWJ0aXRsZTFcIlxuICAgICAgIH0sXG4gICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICRlbDogXCJwXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJTb21lIGRlc2NyaXB0aW9uMVwiXG4gICAgICAgfSxcbiAgICAgICBpbWFnZXMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJGVsOiBcImltZ1wiLFxuICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL2ltZzEuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJGVsOiBcImltZ1wiLFxuICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nMS9pbWcyLmpwZ1wiXG4gICAgICAgICAgICB9IFxuICAgICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlIDoge1xuICAgICAgICAgJGVsOiBcIkgyXCIsXG4gICAgICAgICB2YWx1ZTogXCJTb21lIHRpdGxlMlwiXG4gICAgfSxcbiAgICBzdWJ0aXRsZToge1xuICAgICAgICAgJGVsOiBcImRpdlwiLFxuICAgICAgICAgdmFsdWU6IFwiU29tZSBzdWJ0aXRsZTJcIlxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICRlbDogXCJwXCIsXG4gICAgICAgICB2YWx1ZTogXCJTb21lIGRlc2NyaXB0aW9uMlwiXG4gICAgfSxcbiAgICBpbWFnZXMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJGVsOiBcImltZ1wiLFxuICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL2ltZzEuanBnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJGVsOiBcImltZ1wiLFxuICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nMS9pbWcyLmpwZ1wiXG4gICAgICAgICAgICB9IFxuICAgICAgICBdXG4gICAgfVxuXTtcblxuY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbmZvJykgfHwgZmFsc2U7XG5cbmlmKGluZm8pIHtcbiAgICBjcmVhdEluZm9MaXN0KGluZm9EYXRhKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdEVsKHRhZywgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb0l0ZW0gKGl0ZW0pIHtcbiAgICBjb25zdCBhcnRpY2xlRWwgPSBjcmVhdEVsKCdhcnRpY2xlJywgJ3NlcnZpY2VzX19pbmZvLWl0ZW0nKTtcbiAgICBmb3IoY29uc3Qga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgbGV0IHByb3AgPSBpdGVtW2tleV07XG4gICAgICAgIGxldCBlbCA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wLmhhc093blByb3BlcnR5KCckZWwnKSkge1xuICAgICAgICAgICAgZWwgPSBjcmVhdEVsKHByb3AuJGVsLCBgc2VydmljZXNfX2luZm8tJHtrZXl9YCk7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBwcm9wLnZhbHVlO1xuICAgICAgICAgICAgYXJ0aWNsZUVsLmFwcGVuZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PSAnaW1hZ2VzJykge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VXcmFwcGVyID0gY3JlYXRFbCgnZGl2JywgJ3NlcnZpY2VzX19pbmZvLWltYWdlLXdyYXBwZXInKTtcbiAgICAgICAgICAgIGxldCBpbWdzID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgaW1ncy5mb3JFYWNoKChpbWcpPT4ge1xuICAgICAgICAgICAgICAgIGVsID0gY3JlYXRFbChpbWcuJGVsLCBgc2VydmljZXNfX2luZm8taW1nYCk7XG4gICAgICAgICAgICAgICAgZWwuc3JjID0gaW1nLnNyYztcbiAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXIuYXBwZW5kKGVsKTtcbiAgICAgICAgICAgICAgICBhcnRpY2xlRWwuYXBwZW5kKGltYWdlV3JhcHBlcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IFxuICAgIH1cbiAgICByZXR1cm4gYXJ0aWNsZUVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdEluZm9MaXN0KGRhdGEpIHtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGNyZWF0ZUluZm9JdGVtKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYXBwZW5kKGFydGljbGUpO1xuICAgIH0pXG59XG5cbmNvbnN0IHNlcnZpY2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZXJ2aWNlcy1saXN0JykgfHwgZmFsc2U7XG5pZihzZXJ2aWNlc0xpc3QpIHtcbiAgICBjb25zdCBzZXJ2aWNlc0l0ZW0gPSBzZXJ2aWNlc0xpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBjb25zdCBpbmZvSXRlbXMgPSBpbmZvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FydGljbGUnKSB8fCBmYWxzZTtcblxuICAgIHNlcnZpY2VzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG5cbiAgICAgICAgaWYoJGNsaWNrZWRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ20tYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNlcnZpY2VzSXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VydmljZXNJdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ20tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgJGNsaWNrZWRFbC5jbGFzc0xpc3QuYWRkKCdtLWFjdGl2ZScpO1xuXG4gICAgICAgIGNvbnN0IGNsaWNrZWRFbElkID0gJGNsaWNrZWRFbC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmZvSXRlbXMpO1xuICAgICAgICBpbmZvSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA9PSBjbGlja2VkRWxJZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5jb25zdCBzZXJ2aWNlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZXJ2aWNlcy1tZW51JykgfHwgZmFsc2U7XG5jb25zdCBzZXJ2aWNlc0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2VydmljZXMtY29udGVudCcpO1xuXG5pZihzZXJ2aWNlc0J0bikge1xuICAgIHNlcnZpY2VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlcnZpY2VzQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdtLWFjdGl2ZScpO1xuICAgICAgICBpZiAoc2VydmljZXNDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnbS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcItCX0LDQutGA0LjRgtC4INC80LXQvdGOXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwi0JLQuNCx0YDQsNGC0Lgg0L/QvtGB0LvRg9Cz0YNcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBbkJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFuQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/services.js\n");

/***/ }),

/***/ "./src/js/slick-slider.js":
/*!********************************!*\
  !*** ./src/js/slick-slider.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-slider */ \"./node_modules/slick-slider/slick/slick.js\");\n/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_1__);\n\nwindow.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n\nif (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-equipment-primary').length) {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-equipment-primary').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    prevArrow: '<button type=\"button\" class=\"slick-prev\"><img class=\"slick-prev-img\" src=\"img/icons/arrow-left.png\"></button>',\n    nextArrow: '<button type=\"button\" class=\"slick-next\"><img class=\"slick-next-img\" src=\"img/icons/arrow-right.png\"></button>',\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeed: 6000\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  });\n}\n\n;\n\nif (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-equipment-secondary').length) {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-equipment-secondary').slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    prevArrow: '<button type=\"button\" class=\"slick-prev\"><img class=\"slick-prev-img\" src=\"img/icons/arrow-left.png\"></button>',\n    nextArrow: '<button type=\"button\" class=\"slick-next\"><img class=\"slick-next-img\" src=\"img/icons/arrow-right.png\"></button>',\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeed: 6000\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n}\n\n;\n\nif (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-partners-slider').length) {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-partners-slider').slick({\n    slidesToShow: 5,\n    responsive: [{\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        infinite: true,\n        prevArrow: '<button type=\"button\" class=\"slick-prev\"><img class=\"slick-prev-img\" src=\"img/icons/arrow-left.png\"></button>',\n        nextArrow: '<button type=\"button\" class=\"slick-next\"><img class=\"slick-next-img\" src=\"img/icons/arrow-right.png\"></button>'\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        prevArrow: false,\n        nextArrow: false,\n        dots: true,\n        autoplay: false,\n        autoplaySpeed: 5000\n      }\n    }]\n  });\n}\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpY2stc2xpZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NsaWNrLXNsaWRlci5qcz80YmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xuXG5pbXBvcnQgJ3NsaWNrLXNsaWRlcic7XG5cbmlmKCQoJy5qcy1lcXVpcG1lbnQtcHJpbWFyeScpLmxlbmd0aCkge1xuICAgICQoJy5qcy1lcXVpcG1lbnQtcHJpbWFyeScpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjxpbWcgY2xhc3M9XCJzbGljay1wcmV2LWltZ1wiIHNyYz1cIi4uL2ltZy9pY29ucy9hcnJvdy1sZWZ0LnBuZ1wiPjwvYnV0dG9uPicsXG5cdFx0bmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGltZyBjbGFzcz1cInNsaWNrLW5leHQtaW1nXCIgc3JjPVwiLi4vaW1nL2ljb25zL2Fycm93LXJpZ2h0LnBuZ1wiPjwvYnV0dG9uPicsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA2MDAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgXVxuICAgIH0pO1xufTtcblxuaWYoJCgnLmpzLWVxdWlwbWVudC1zZWNvbmRhcnknKS5sZW5ndGgpIHtcbiAgICAkKCcuanMtZXF1aXBtZW50LXNlY29uZGFyeScpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjxpbWcgY2xhc3M9XCJzbGljay1wcmV2LWltZ1wiIHNyYz1cIi4uL2ltZy9pY29ucy9hcnJvdy1sZWZ0LnBuZ1wiPjwvYnV0dG9uPicsXG5cdFx0bmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGltZyBjbGFzcz1cInNsaWNrLW5leHQtaW1nXCIgc3JjPVwiLi4vaW1nL2ljb25zL2Fycm93LXJpZ2h0LnBuZ1wiPjwvYnV0dG9uPicsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA2MDAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICBdXG4gICAgfSk7XG59O1xuXG5pZigkKCcuanMtcGFydG5lcnMtc2xpZGVyJykubGVuZ3RoKSB7XG4gICAgJCgnLmpzLXBhcnRuZXJzLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48aW1nIGNsYXNzPVwic2xpY2stcHJldi1pbWdcIiBzcmM9XCIuLi9pbWcvaWNvbnMvYXJyb3ctbGVmdC5wbmdcIj48L2J1dHRvbj4nLFxuXHRcdCAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PGltZyBjbGFzcz1cInNsaWNrLW5leHQtaW1nXCIgc3JjPVwiLi4vaW1nL2ljb25zL2Fycm93LXJpZ2h0LnBuZ1wiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgcHJldkFycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgbmV4dEFycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICBdXG4gICAgfSk7XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFoQkE7QUF5QkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFoQkE7QUF3QkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBRkE7QUFiQTtBQTJCQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/slick-slider.js\n");

/***/ }),

/***/ "./src/js/sticky-header.js":
/*!*********************************!*\
  !*** ./src/js/sticky-header.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  const stickyHeader = document.querySelector('.js-sticky-header');\n  const burger = document.querySelector('.js-burger-menu');\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > 200) {\n      burger.classList.remove('m-static');\n    } else {\n      burger.classList.add('m-static');\n    }\n\n    if (window.scrollY > 500) {\n      stickyHeader.classList.add('m-sticky');\n      burger.classList.add('m-sticky');\n    } else {\n      stickyHeader.classList.remove('m-sticky');\n      burger.classList.remove('m-sticky');\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc3RpY2t5LWhlYWRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9zdGlja3ktaGVhZGVyLmpzP2ZmZTIiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc3RpY2t5SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN0aWNreS1oZWFkZXInKTtcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnVyZ2VyLW1lbnUnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwMCkge1xuICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ20tc3RhdGljJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnbS1zdGF0aWMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDUwMCkge1xuICAgICAgICAgICAgc3RpY2t5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ20tc3RpY2t5Jyk7XG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnbS1zdGlja3knKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RpY2t5SGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ20tc3RpY2t5Jyk7XG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnbS1zdGlja3knKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/sticky-header.js\n");

/***/ })

/******/ });
//# sourceMappingURL=app.dbf3ddb8208764601c0b.js.map
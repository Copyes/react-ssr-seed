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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/layout.js":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/index\"\n    }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/artice\"\n    }, \"\\u5217\\u8868\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.props.children));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

/***/ }),

/***/ "./src/client/pages/index/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//src/client/pages/index/index.js\n//index 组件\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  handlerClick() {\n    alert('一起来玩 react 服务端渲染..');\n  }\n\n  render() {\n    const str = 'hello,world.';\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      onClick: this.handlerClick\n    }, str);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/index/index.js?");

/***/ }),

/***/ "./src/client/pages/list/data.js":
/*!***************************************!*\
  !*** ./src/client/pages/list/data.js ***!
  \***************************************/
/*! exports provided: mockData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mockData\", function() { return mockData; });\nconst mockData = [{\n  \"title\": \"深入浅出TypeScript：从基础知识到类型编程\",\n  \"desc\": \"Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"SVG 动画开发实战手册\",\n  \"desc\": \"从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"预售JavaScript 设计模式核⼼原理与应⽤实践\",\n  \"desc\": \"通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}];\n\n//# sourceURL=webpack:///./src/client/pages/list/data.js?");

/***/ }),

/***/ "./src/client/pages/list/index.js":
/*!****************************************!*\
  !*** ./src/client/pages/list/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/client/pages/list/data.js\");\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  static async getIntialProps() {\n    const fetchData = () => {\n      return new Promise((resolve, reject) => {\n        setTimeout(() => {\n          resolve({\n            status: 200,\n            data: _data__WEBPACK_IMPORTED_MODULE_2__[\"mockData\"]\n          });\n        }, 300);\n      });\n    };\n\n    let result = await fetchData();\n    return result;\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dvi\", null, \"\\u6587\\u7AE0\\u9875\\u97621\");\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/list/index.js?");

/***/ }),

/***/ "./src/client/router/index.js":
/*!************************************!*\
  !*** ./src/client/router/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n //服务端也会用到所以通过参数的方式将配置传递进来\n\nfunction App({\n  routeList\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, \" //\\u516C\\u5171\\u7EC4\\u4EF6\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, routeList.map(item => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _extends({\n      key: item.path\n    }, item));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/router/index.js?");

/***/ }),

/***/ "./src/client/router/routes-config.js":
/*!********************************************!*\
  !*** ./src/client/router/routes-config.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index */ \"./src/client/pages/index/index.js\");\n/* harmony import */ var _pages_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/list */ \"./src/client/pages/list/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/index',\n  component: _pages_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true //是否精确匹配\n\n}, {\n  path: '/list',\n  component: _pages_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/routes-config.js?");

/***/ }),

/***/ "./src/server/app/index.js":
/*!*********************************!*\
  !*** ./src/server/app/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/react-ssr */ \"./src/server/middlewares/react-ssr.js\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2 */ \"koa2\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/pro-config.js */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config_js__WEBPACK_IMPORTED_MODULE_4__);\n//web 服务启动入口对象\n\n\n\n\n\nconst port = _share_pro_config_js__WEBPACK_IMPORTED_MODULE_4___default.a.nodeServerPort || process.env.PORT;\nconst app = new koa2__WEBPACK_IMPORTED_MODULE_1___default.a(); //设置可访问的静态资源\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist/static')); //ssr 中间件\n\napp.use(_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //启动服务\n\napp.listen(port);\nconsole.log('server is start .', `http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/app/index.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_router_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/router/index */ \"./src/client/router/index.js\");\n/* harmony import */ var _client_router_routes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/router/routes-config */ \"./src/client/router/routes-config.js\");\n// /src/server/middlewares/react-ssr.js\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((ctx, next) => {\n  console.log('ctx.request.path', ctx.request.path);\n  console.log('ctx.request.url', ctx.request.url);\n  const path = ctx.request.path;\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: path\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_router_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    routeList: _client_router_routes_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  })));\n  ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>my react ssr</title>\n</head>\n<body>\n    <div id=\"root\">\n       ${html} <span>测试内容</span>\n    </div>\n</body>\n</html>\n<script type=\"text/javascript\"  src=\"index.js\"></script>\n`;\n  return next();\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

/***/ }),

/***/ "./src/share/pro-config.js":
/*!*********************************!*\
  !*** ./src/share/pro-config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//双端公用的配置文件\nmodule.exports = {\n  wdsPort: 9002,\n  //wds 服务的运行端口\n  nodeServerPort: 9001,\n  //node server 的监听端口\n  asyncComponentKey: '__IS_ASYNC_COMP_FLAG__' //标志组件是否是按需加载 turn | false\n\n};\n\n//# sourceURL=webpack:///./src/share/pro-config.js?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "koa2":
/*!***********************!*\
  !*** external "koa2" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2\");\n\n//# sourceURL=webpack:///external_%22koa2%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });
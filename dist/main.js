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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./graphics/green-bubbles-background.jpg":
/*!***********************************************!*\
  !*** ./graphics/green-bubbles-background.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"graphics/green-bubbles-background.jpg\");\n\n//# sourceURL=webpack:///./graphics/green-bubbles-background.jpg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../graphics/green-bubbles-background.jpg */ \"./graphics/green-bubbles-background.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\n.wrap {\\n  max-width: 100vw;\\n  min-height: 100vh;\\n  text-transform: uppercase;\\n  background-color: rgba(0, 0, 0, 0.3); }\\n  .wrap::after {\\n    content: \\\"\\\";\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    top: 0;\\n    left: -20%;\\n    bottom: 0;\\n    right: 0;\\n    position: fixed;\\n    z-index: -1; }\\n\\nheader {\\n  text-align: center;\\n  height: 20vh;\\n  padding: 2%;\\n  margin: 0 22% 0 22%;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  border-radius: 2%;\\n  text-shadow: 7px -3px 3px #CE5937; }\\n  header > h1 {\\n    font-size: 3.5rem;\\n    font-weight: bold;\\n    font-style: italic;\\n    padding-bottom: 1%; }\\n  header > h2 {\\n    font-size: 2.4rem;\\n    padding-top: 1%; }\\n\\n.menuAndArea {\\n  display: grid;\\n  width: 100%;\\n  height: 100%;\\n  grid-template-areas: \\\"menu main\\\";\\n  grid-template-columns: 1fr 7fr;\\n  margin-top: 2%; }\\n\\nnav.menu {\\n  grid-area: menu;\\n  position: fixed;\\n  left: 0;\\n  top: 28vh;\\n  font-size: 1.8rem; }\\n\\nnav.menu li {\\n  list-style: none;\\n  cursor: pointer;\\n  text-align: center; }\\n  nav.menu li:nth-child(5) {\\n    font-size: 1.4rem; }\\n  nav.menu li.cart {\\n    position: relative; }\\n  nav.menu li.cart::after {\\n    position: absolute;\\n    color: #272757;\\n    font-weight: bold;\\n    display: block;\\n    top: 0;\\n    right: -8%;\\n    content: attr(beerAmount); }\\n\\nnav.menu li a {\\n  text-decoration: none;\\n  background-color: darkorange;\\n  text-align: center;\\n  color: black;\\n  display: block;\\n  width: 100%;\\n  height: 15%;\\n  border-radius: 13%;\\n  padding: 5%;\\n  margin: 12%;\\n  box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4); }\\n\\nnav.menu li a:hover {\\n  background-color: green;\\n  color: lawngreen;\\n  transition: 0.7s; }\\n\\nmain {\\n  grid-area: main;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly; }\\n\\n.beer-label {\\n  flex-basis: 22%;\\n  flex-wrap: wrap;\\n  display: flex;\\n  justify-content: center;\\n  text-align: center;\\n  min-height: 45vh;\\n  font-size: 1.3rem;\\n  font-weight: bold;\\n  margin: 2% 0 3% 0;\\n  padding-bottom: 1%;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  border: 2px solid green;\\n  border-radius: 5%; }\\n  .beer-label > span,\\n  .beer-label > p {\\n    flex-basis: 100%;\\n    padding: 15px; }\\n  .beer-label > span.beerTitle {\\n    max-height: 58px;\\n    overflow: hidden; }\\n  .beer-label > p.price {\\n    font-weight: normal; }\\n  .beer-label > a {\\n    flex-basis: 45%;\\n    border-radius: 10%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0;\\n    border-radius: 13%;\\n    border: 3px solid green; }\\n    .beer-label > a:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > button {\\n    flex-basis: 45%;\\n    border-radius: 10%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0;\\n    border-radius: 13%;\\n    border: 3px solid green; }\\n    .beer-label > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > img {\\n    width: 20%;\\n    height: 55%; }\\n\\n.beer-description {\\n  width: 95%;\\n  height: 70vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  padding-bottom: 10%;\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%; }\\n\\n.description-part {\\n  position: relative; }\\n  .description-part > a {\\n    display: block;\\n    position: relative;\\n    margin: 1% 0 0 76%;\\n    text-decoration: none;\\n    letter-spacing: 1px;\\n    font-size: 1.3rem;\\n    cursor: pointer;\\n    color: darkgreen; }\\n    .description-part > a:after {\\n      content: \\\"\\\";\\n      display: block;\\n      position: absolute;\\n      width: 30%;\\n      height: 2px;\\n      right: 11%;\\n      bottom: -10%;\\n      background-color: darkgreen; }\\n    .description-part > a:hover:after {\\n      background-color: lime;\\n      transition: 0.5s;\\n      right: 70%; }\\n    .description-part > a:hover {\\n      transition: 0.5s;\\n      color: lime; }\\n  .description-part > h3 {\\n    text-align: center;\\n    font-size: 2rem; }\\n  .description-part > img {\\n    width: 9vw;\\n    height: 55vh;\\n    margin: 0 2% 0 4%; }\\n  .description-part .description {\\n    position: absolute;\\n    text-align: right;\\n    text-transform: lowercase;\\n    font-size: 1.3rem;\\n    width: 70%;\\n    height: 40%;\\n    right: 3%;\\n    top: 25%; }\\n  .description-part > button {\\n    position: absolute;\\n    right: 1%;\\n    top: 65%;\\n    height: 15%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.6rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0.5%;\\n    border-radius: 13%;\\n    border: 2px solid green;\\n    border-radius: 7%;\\n    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4); }\\n    .description-part > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n    .description-part > button.cartBtn {\\n      top: 85%;\\n      width: 27%; }\\n    .description-part > button.favourBtn {\\n      width: 32%; }\\n\\n.description-params {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: absolute;\\n  justify-content: center;\\n  text-align: left;\\n  right: 28%;\\n  bottom: 13%;\\n  width: 45%;\\n  height: 25%;\\n  font-size: 1.2rem; }\\n  .description-params > p {\\n    flex-basis: 40%;\\n    margin-top: 1%; }\\n  .description-params > span {\\n    flex-basis: 40%;\\n    margin-top: 1%;\\n    text-transform: lowercase; }\\n\\n.previevModal {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n  background: rgba(0, 0, 0, 0); }\\n\\n.cart-previev {\\n  position: fixed;\\n  min-height: 50%;\\n  width: 50%;\\n  left: 50%;\\n  top: 10%;\\n  transform: translateX(-50%);\\n  background-color: #f3c17f;\\n  border: 4px solid darkgreen; }\\n\\n.cart-previev .statement {\\n  font-size: 2rem;\\n  letter-spacing: 2px;\\n  margin: 2%;\\n  text-align: center;\\n  font-weight: normal; }\\n\\n.previev-actualBeer {\\n  height: 45vh;\\n  width: 45vw;\\n  margin: 0 auto;\\n  border: 2px solid green;\\n  position: relative; }\\n  .previev-actualBeer > h3 {\\n    margin: 2%;\\n    margin-left: 30%;\\n    font-size: 2rem;\\n    font-weight: normal; }\\n  .previev-actualBeer > img {\\n    width: 14%;\\n    height: 87%;\\n    margin: 2%;\\n    position: absolute;\\n    left: 4%;\\n    top: 4%; }\\n  .previev-actualBeer > .price {\\n    font-weight: bold;\\n    font-size: 2.5rem;\\n    margin-left: 30%; }\\n  .previev-actualBeer > .description {\\n    display: block;\\n    font-size: 1rem;\\n    margin: 2%;\\n    margin-left: 30%;\\n    margin-right: 4%; }\\n  .previev-actualBeer > a,\\n  .previev-actualBeer > button {\\n    position: absolute;\\n    text-align: center;\\n    top: 80%;\\n    height: 12%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 1.5%;\\n    border-radius: 13%; }\\n    .previev-actualBeer > a:hover,\\n    .previev-actualBeer > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .previev-actualBeer > button {\\n    left: 28%;\\n    width: 37%; }\\n  .previev-actualBeer > a {\\n    background-color: green;\\n    color: #8b2222;\\n    left: 75%;\\n    width: 18%; }\\n    .previev-actualBeer > a:hover {\\n      background-color: brown; }\\n\\n.previev-cartContent {\\n  width: 90%;\\n  margin: 0 5%;\\n  color: green; }\\n  .previev-cartContent > h3 {\\n    font-weight: bold;\\n    color: brown;\\n    font-size: 2rem;\\n    margin: 4% 0 2% 0; }\\n  .previev-cartContent > .cartContent-details {\\n    font-weight: bold;\\n    text-transform: capitalize;\\n    background-color: #025002;\\n    color: #f1af59;\\n    text-align: center; }\\n    .previev-cartContent > .cartContent-details > p {\\n      margin: 1%;\\n      width: 15%;\\n      display: inline-block; }\\n    .previev-cartContent > .cartContent-details > :nth-child(1) {\\n      width: 40%; }\\n    .previev-cartContent > .cartContent-details > :nth-child(3) {\\n      width: 20%; }\\n  .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev {\\n    display: flex;\\n    width: 100%;\\n    height: 6vh;\\n    background-color: green;\\n    color: white;\\n    font-size: 1.2rem;\\n    border: 1px solid #025002;\\n    align-items: center;\\n    padding-left: 2%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(1) {\\n      flex-basis: 40%;\\n      overflow: hidden; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(2) {\\n      flex-basis: 10%;\\n      margin-left: 8%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(3) {\\n      margin-left: 2%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-last-child(1) {\\n      margin-left: 5%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > button {\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.5rem;\\n      color: #004700;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 0.5%;\\n      border-radius: 13%;\\n      flex-basis: 7%; }\\n      .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > button:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime;\\n        background-color: brown; }\\n  .previev-cartContent > .cartContent-recapCosts {\\n    margin: 3% 0;\\n    margin-left: 70%; }\\n    .previev-cartContent > .cartContent-recapCosts > p {\\n      text-transform: uppercase;\\n      color: brown;\\n      display: inline-block;\\n      font-size: 1.2rem; }\\n    .previev-cartContent > .cartContent-recapCosts > .sum {\\n      font-weight: bold;\\n      color: black;\\n      margin-left: 22%;\\n      font-size: 1.2rem; }\\n\\n.errorStatement {\\n  position: absolute;\\n  width: 50vw;\\n  height: 10vh;\\n  background-color: green;\\n  color: yellow;\\n  text-transform: lowercase;\\n  font-size: 2.2rem;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%); }\\n  .errorStatement::after {\\n    position: absolute;\\n    content: \\\"Brak połączenia z internetem!\\\";\\n    left: 50%;\\n    top: 50%;\\n    transform: translate(-50%, -50%); }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/OfferOnPage.js":
/*!***************************************!*\
  !*** ./src/components/OfferOnPage.js ***!
  \***************************************/
/*! exports provided: OfferOnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OfferOnPage\", function() { return OfferOnPage; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\n\n\n  const errorStatement = Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"errorStatement\");\n\n\nconst OfferOnPage = () => {\n\n    const area = document.querySelector(\"main\");\n    const beers = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToResponse.items;\n    const errorRes = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToResponse.error;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n\n    if(errorRes) area.appendChild(errorStatement);\n      \n      beers.map(beer => {\n\n        const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(            \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"beerTitle\")(beer.name),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createImgElem\"])(\"\")(beer.image_url),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"price\")(`${beer.abv} $`),\n                Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createBtnAddToCart\"])(\"cartBtn\")(\"koszyk\")(beer),\n                Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createLinkRedirectToDescription\"])(\"\")(beer),\n          )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"beer-label\"))\n                \n       area.appendChild(wrapperDiv);\n\n      });\n\n  };\n\n\n\n        \n        \n      \n       \n\n//# sourceURL=webpack:///./src/components/OfferOnPage.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js":
/*!***************************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js ***!
  \***************************************************************************/
/*! exports provided: addToCartAndOpenPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndOpenPreviev\", function() { return addToCartAndOpenPreviev; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _openCartStatement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openCartStatement */ \"./src/components/addToCartAndOpenPreviev/openCartStatement.js\");\n\n\n\n\n\n\n\n\n\n\nconst addToCartAndOpenPreviev = (beer) => {\n\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentBeerAction\"])(beer))\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_2__[\"addToCart\"])(beer);\n    Object(_openCartStatement__WEBPACK_IMPORTED_MODULE_3__[\"actualBeerAndCartPreviev\"])()\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/buttonsToChangeOrderQuantity.js":
/*!********************************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/buttonsToChangeOrderQuantity.js ***!
  \********************************************************************************/
/*! exports provided: createButtonToIncreaseOrder, createButtonToDecreaseOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToIncreaseOrder\", function() { return createButtonToIncreaseOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToDecreaseOrder\", function() { return createButtonToDecreaseOrder; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\nconst createButtonToIncreaseOrder = (cl) => (beer) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(\"+\"),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAndUpdatePreviev\"])(beer)\n        )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n  return element;\n}\n\n\n\n\nconst createButtonToDecreaseOrder = (cl) => (beer) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(\"-\"),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__[\"rmvFromCartAndUpdatePreviev\"])(beer)\n        )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/buttonsToChangeOrderQuantity.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/createButtonToCloseModal.js":
/*!****************************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/createButtonToCloseModal.js ***!
  \****************************************************************************/
/*! exports provided: createButtonToCloseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToCloseModal\", function() { return createButtonToCloseModal; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removePrevievCartModal */ \"./src/components/toManipulateDOM/removePrevievCartModal.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayCounterOfBeersInCart */ \"./src/components/addToCartAndOpenPreviev/displayCounterOfBeersInCart.js\");\n\n\n\n\n\n\n\n\nconst createButtonToCloseModal = (cl) => (txtContent) => (element) => {\n\n    Object(_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__[\"displayCounterOfBeersInCart\"])()\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(_toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__[\"removePrevievCartModal\"])()\n        )(document.createElement(\"button\"));\n  \n        element.appendChild(btn);\n    return element;\n  }\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/createButtonToCloseModal.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/displayCounterOfBeersInCart.js":
/*!*******************************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/displayCounterOfBeersInCart.js ***!
  \*******************************************************************************/
/*! exports provided: displayCounterOfBeersInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayCounterOfBeersInCart\", function() { return displayCounterOfBeersInCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n\n\n\n\nconst displayCounterOfBeersInCart = () => {\n\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCart;\n    const beerAmount = cartContent.length;\n    const linkToCart = document.querySelector(\"li.cart\");\n\n    linkToCart.setAttribute(\"beerAmount\", beerAmount.toString())\n}\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/displayCounterOfBeersInCart.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/groupBeersByLabels/groupBeersByLabels.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/groupBeersByLabels/groupBeersByLabels.js ***!
  \*****************************************************************************************/
/*! exports provided: groupBeersByLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupBeersByLabels\", function() { return groupBeersByLabels; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _morphisms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morphisms */ \"./src/components/addToCartAndOpenPreviev/groupBeersByLabels/morphisms.js\");\n\n\n\n\n\n\nconst groupBeersByLabels = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(\n                Object(_morphisms__WEBPACK_IMPORTED_MODULE_1__[\"groupObjectsBy\"])(\"name\"),\n                _morphisms__WEBPACK_IMPORTED_MODULE_1__[\"placeObjectValuesInArray\"]\n            )\n\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/groupBeersByLabels/groupBeersByLabels.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/groupBeersByLabels/morphisms.js":
/*!********************************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/groupBeersByLabels/morphisms.js ***!
  \********************************************************************************/
/*! exports provided: groupObjectsBy, placeObjectValuesInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupObjectsBy\", function() { return groupObjectsBy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"placeObjectValuesInArray\", function() { return placeObjectValuesInArray; });\n\nconst groupObjectsBy = (key) => (arr) => {\n          return arr.reduce(function(acc, obj) {\n                        acc[obj[key]] = (acc[obj[key]] || []).concat(obj);\n                        return acc; \n                    }, {})\n } \n\n\nconst placeObjectValuesInArray = (obj) => Object.values(obj);\n\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/groupBeersByLabels/morphisms.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/openCartStatement.js":
/*!*********************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/openCartStatement.js ***!
  \*********************************************************************/
/*! exports provided: actualBeerAndCartPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actualBeerAndCartPreviev\", function() { return actualBeerAndCartPreviev; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createButtonToCloseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createButtonToCloseModal */ \"./src/components/addToCartAndOpenPreviev/createButtonToCloseModal.js\");\n/* harmony import */ var _previevOfCartContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./previevOfCartContent */ \"./src/components/addToCartAndOpenPreviev/previevOfCartContent.js\");\n/* harmony import */ var _valueOfEntireCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./valueOfEntireCart */ \"./src/components/addToCartAndOpenPreviev/valueOfEntireCart.js\");\n\n\n\n\n\n\n\n\n\nconst actualBeerAndCartPreviev = () => {\n\n    const page = document.querySelector(\"body\");  \n    const cartPrevievModal = Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"previevModal\");\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_1__[\"store\"].getState().reducerToCart;\n    const beer = _manageState_store__WEBPACK_IMPORTED_MODULE_1__[\"store\"].getState().reducerToCurrentBeer;\n\n    const cartPreviev = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"statement\")(\"Dodałeś do koszyka!\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createWrapperDiv\"])(\"previev-actualBeer\")(Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createImgElem\"])(\"\")(beer.image_url),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"\")(beer.name),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"price\")(`${beer.abv} $`),         \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"description\")(beer.description),\n                Object(_createButtonToCloseModal__WEBPACK_IMPORTED_MODULE_3__[\"createButtonToCloseModal\"])(\"\")(\"kontynuuj zakupy\"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createLinkTo\"])(\"\")(\"do kasy\")(\"#/koszyk\"),\n            )),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createWrapperDiv\"])(\"previev-cartContent\")(Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"\")(\"Twój koszyk\"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createWrapperDiv\"])(\"cartContent-details\")(Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"produkt\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"cena\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"ilość\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"wartość\"),\n                )), \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createWrapperDiv\"])(\"cartContent-listWithOrders\")(Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n                    Object(_previevOfCartContent__WEBPACK_IMPORTED_MODULE_4__[\"createPrevievOfCartContent\"])(cartContent)\n                )),  \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createWrapperDiv\"])(\"cartContent-recapCosts\")(Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"razem\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"sum\")(`${Object(_valueOfEntireCart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(cartContent)} $`),  \n                )),                                                            \n            ))\n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"cart-previev\")); \n\n    cartPrevievModal.appendChild(cartPreviev);\n    page.appendChild(cartPrevievModal);\n}\n\n\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/openCartStatement.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/previevOfCartContent.js":
/*!************************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/previevOfCartContent.js ***!
  \************************************************************************/
/*! exports provided: createPrevievOfCartContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPrevievOfCartContent\", function() { return createPrevievOfCartContent; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonsToChangeOrderQuantity */ \"./src/components/addToCartAndOpenPreviev/buttonsToChangeOrderQuantity.js\");\n/* harmony import */ var _groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groupBeersByLabels/groupBeersByLabels */ \"./src/components/addToCartAndOpenPreviev/groupBeersByLabels/groupBeersByLabels.js\");\n/* harmony import */ var _sumOfGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sumOfGroup */ \"./src/components/addToCartAndOpenPreviev/sumOfGroup.js\");\n\n\n\n\n\n\n\n\n const createPrevievOfCartContent = (cartContent) => (element) => {\n      \n       Object(_groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__[\"groupBeersByLabels\"])(cartContent).map(group => {\n\n                const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"beerTitle\")(group[0].name),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${group[0].abv} $`),\n                        Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToIncreaseOrder\"])(\"\")(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(group.length),\n                        Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToDecreaseOrder\"])(\"\")(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"sum\")(`${Object(_sumOfGroup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(group[0].abv)(group.length)} $`)\n                  )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"beer-paramsPreviev\"))\n\n              element.appendChild(wrapperDiv);\n            })\n\n        return element;\n  }\n\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/previevOfCartContent.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/sumOfGroup.js":
/*!**************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/sumOfGroup.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sumOfGroup = (price) => (amount) => Math.round(price * amount * 1000) / 1000;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sumOfGroup);\n\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/sumOfGroup.js?");

/***/ }),

/***/ "./src/components/addToCartAndOpenPreviev/valueOfEntireCart.js":
/*!*********************************************************************!*\
  !*** ./src/components/addToCartAndOpenPreviev/valueOfEntireCart.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n const valueOfEntireCart = (arr) =>{ \n\n    let sum = arr.reduce((acc,poz) => acc + poz.abv, 0 );\n  return Math.round(sum * 100) / 100\n};\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (valueOfEntireCart);\n\n//# sourceURL=webpack:///./src/components/addToCartAndOpenPreviev/valueOfEntireCart.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/doFetch.js":
/*!***************************************************!*\
  !*** ./src/components/getBeersFromAPI/doFetch.js ***!
  \***************************************************/
/*! exports provided: doFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doFetch\", function() { return doFetch; });\n\nconst doFetch = async () => {\n\n    const res = await fetch(\"https://api.punkapi.com/v2/beers?per_page=60\");\n    const beers = await res.json();\n\n    return beers;\n    }\n\n   \n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/doFetch.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/loadPage.js":
/*!****************************************************!*\
  !*** ./src/components/getBeersFromAPI/loadPage.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _responseCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responseCreator */ \"./src/components/getBeersFromAPI/responseCreator.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/router */ \"./src/components/router/router.js\");\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\", () => { \n\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchBeginAction\"])());\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_responseCreator__WEBPACK_IMPORTED_MODULE_2__[\"createResponse\"])());\n\n    Object(_router_router__WEBPACK_IMPORTED_MODULE_3__[\"router\"])() \n  \n  });\n\n  \n\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/loadPage.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/responseCreator.js":
/*!***********************************************************!*\
  !*** ./src/components/getBeersFromAPI/responseCreator.js ***!
  \***********************************************************/
/*! exports provided: createResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createResponse\", function() { return createResponse; });\n/* harmony import */ var _doFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doFetch */ \"./src/components/getBeersFromAPI/doFetch.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n\n\n\n\n\n const createResponse = () => {\n\n    return async (dispatch) => {\n        \n        const beers = await Object(_doFetch__WEBPACK_IMPORTED_MODULE_0__[\"doFetch\"])().catch(err => dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchFailAction\"])(err)));\n         if(beers) dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchSuccessAction\"])(beers))\n    }\n }\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/responseCreator.js?");

/***/ }),

/***/ "./src/components/handlersToShopping/handlersToShopping.js":
/*!*****************************************************************!*\
  !*** ./src/components/handlersToShopping/handlersToShopping.js ***!
  \*****************************************************************/
/*! exports provided: addToCart, removeFromCart, addToFavour, addToCurrentBeer, addToCartAndUpdatePreviev, rmvFromCartAndUpdatePreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromCart\", function() { return removeFromCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToFavour\", function() { return addToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCurrentBeer\", function() { return addToCurrentBeer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndUpdatePreviev\", function() { return addToCartAndUpdatePreviev; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvFromCartAndUpdatePreviev\", function() { return rmvFromCartAndUpdatePreviev; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _addToCartAndOpenPreviev_openCartStatement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addToCartAndOpenPreviev/openCartStatement */ \"./src/components/addToCartAndOpenPreviev/openCartStatement.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toManipulateDOM/removePrevievCartModal */ \"./src/components/toManipulateDOM/removePrevievCartModal.js\");\n\n\n\n\n\n\nconst addToCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_2__[\"addToCartAction\"])(beer));\n\nconst removeFromCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_2__[\"removeFromCartAction\"])(beer));\n\nconst addToFavour = () => console.log(\"addToFavour\");\n\nconst addToCurrentBeer = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_2__[\"setCurrentBeerAction\"])(beer));\n\n\nconst addToCartAndUpdatePreviev = (beer) => {\n\n    Object(_toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_3__[\"removePrevievCartModal\"])();\n    addToCart(beer);\n    Object(_addToCartAndOpenPreviev_openCartStatement__WEBPACK_IMPORTED_MODULE_1__[\"actualBeerAndCartPreviev\"])()\n}\n\n\nconst rmvFromCartAndUpdatePreviev = (beer) => {\n    \n    Object(_toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_3__[\"removePrevievCartModal\"])();\n    removeFromCart(beer);\n    Object(_addToCartAndOpenPreviev_openCartStatement__WEBPACK_IMPORTED_MODULE_1__[\"actualBeerAndCartPreviev\"])()\n}\n\n\n//# sourceURL=webpack:///./src/components/handlersToShopping/handlersToShopping.js?");

/***/ }),

/***/ "./src/components/router/resolveRoute.js":
/*!***********************************************!*\
  !*** ./src/components/router/resolveRoute.js ***!
  \***********************************************/
/*! exports provided: resolveRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveRoute\", function() { return resolveRoute; });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/components/router/routes.js\");\n\n\n\n\nconst resolveRoute = (route) => { \n    \n    if(route.includes(\"opis\")){  \n         return Object(_routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"])()[\"/opis\"]\n     }\n     else if(Object(_routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"])()[route]){\n         return Object(_routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"])()[route]\n     }\n     \n };\n\n//# sourceURL=webpack:///./src/components/router/resolveRoute.js?");

/***/ }),

/***/ "./src/components/router/router.js":
/*!*****************************************!*\
  !*** ./src/components/router/router.js ***!
  \*****************************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"router\", function() { return router; });\n/* harmony import */ var _resolveRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveRoute */ \"./src/components/router/resolveRoute.js\");\n\n\n\nconst router = () => { \n\n    const url = window.location.hash.slice(1) || \"/\";\n    const routeResolved = Object(_resolveRoute__WEBPACK_IMPORTED_MODULE_0__[\"resolveRoute\"])(url);\n\n    routeResolved();\n}\n\n\nwindow.addEventListener(\"hashchange\",router);\n\n//# sourceURL=webpack:///./src/components/router/router.js?");

/***/ }),

/***/ "./src/components/router/routes.js":
/*!*****************************************!*\
  !*** ./src/components/router/routes.js ***!
  \*****************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _OfferOnPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OfferOnPage */ \"./src/components/OfferOnPage.js\");\n/* harmony import */ var _showDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../showDescription */ \"./src/components/showDescription.js\");\n\n\n\n\n\n\n\nconst routes = () => ({\n\n                \"/\" : () => Object(_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__[\"OfferOnPage\"])(), \n                \"/opis\" : () => Object(_showDescription__WEBPACK_IMPORTED_MODULE_1__[\"showDescription\"])()\n            \n            })\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/router/routes.js?");

/***/ }),

/***/ "./src/components/showDescription.js":
/*!*******************************************!*\
  !*** ./src/components/showDescription.js ***!
  \*******************************************/
/*! exports provided: showDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDescription\", function() { return showDescription; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\n\n\nconst showDescription = () => {\n\n  const area = document.querySelector(\"main\");\n\n  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n\n  const beer = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCurrentBeer;\n      \n      const mainWrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createWrapperDiv\"])(\"description-part\")(Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createLinkTo\"])(\"\")(\"powrót do głównej\")(\"#/\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"\")(beer.name),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createImgElem\"])(\"\")(beer.image_url),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"description\")(beer.description),\n                  Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createBtnAddToFavour\"])(\"favourBtn\")(\"dodaj do ulubionych\")(beer),\n                  Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createBtnAddToCart\"])(\"cartBtn\")(\"dodaj do koszyka\")(beer), \n               )),\n              Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createWrapperDiv\"])(\"description-params\")(Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(                    \n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"cena\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"price\")(beer.abv),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"tagi\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"tagline\")(beer.tagline),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"wyprodukowano\"),   \n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"date\")(beer.first_brewed),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"producent\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"produced\")(beer.contributed_by),            \n                ))\n          )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"beer-description\"));\n\n area.appendChild(mainWrapper);\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/showDescription.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js":
/*!************************************************************************!*\
  !*** ./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js ***!
  \************************************************************************/
/*! exports provided: clearContentOf, createDiv, createSpanElem, createTitle, createText, createImgElem, createLinkTo, createWrapperDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearContentOf\", function() { return clearContentOf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpanElem\", function() { return createSpanElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTitle\", function() { return createTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createText\", function() { return createText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImgElem\", function() { return createImgElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkTo\", function() { return createLinkTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWrapperDiv\", function() { return createWrapperDiv; });\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\nconst clearContentOf = (el) => { \n\n  while(el.firstChild && el.removeChild(el.firstChild));\n\n};\n\n\n\nconst createDiv = (cl) => { \n\n    const element = document.createElement(\"div\");\n        if(cl){ element.classList.add(cl) };\n\n   return element;\n } \n\n\n\nconst createSpanElem = (cl) => (txtContent) => (element) =>{ \n\n    const span = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"span\"));\n        \n      element.appendChild(span);\n    return element\n  }\n\n\nconst createTitle = (cl) => (txtContent) => (element) =>{ \n\n    const h3 = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"h3\"));\n        \n    element.appendChild(h3);\n  return element\n }\n\n\n  const createText = (cl) => (txtContent) => (element) =>{ \n\n    const p = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"p\"));\n    \n      element.appendChild(p);\n   return element;\n  } \n\n\n\nconst createImgElem = (cl) => (src) => (element) => {\n\n    const img = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setSrc\"])(src),\n      )(document.createElement(\"img\"));\n\n    element.appendChild(img);\n return element;\n}\n\n\n\nconst createLinkTo = (cl) => (txtContent) => (path) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setPath\"])(path),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"a\"));\n       \n    element.appendChild(link);\n  return element;\n}\n\n\nconst createWrapperDiv = (cl) => (elements) => (element) => {\n\n    const wrapper = elements(createDiv(cl));\n    element.appendChild(wrapper);\n\n  return element;\n} \n\n\n\n       \n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToCreateElements.js":
/*!********************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToCreateElements.js ***!
  \********************************************************************/
/*! exports provided: setClss, setTextContent, setSrc, setOnclickFn, setPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClss\", function() { return setClss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTextContent\", function() { return setTextContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSrc\", function() { return setSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOnclickFn\", function() { return setOnclickFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPath\", function() { return setPath; });\n\nconst setClss = (cl) => (element) => {\n     if(cl){ element.classList.add(cl) };\n   return element;\n}\n\nconst setTextContent = (txtContent) => (element) => {\n     element.textContent = txtContent;\n   return element;\n}\n\nconst setSrc = (src) => (element) => {\n    element.src = src;\n  return element;\n}\n\nconst setOnclickFn = (fn) => (arg = null) => (element) => {\n    element.addEventListener(\"click\", () =>{ arg ?  fn(arg) : fn() });\n return element;\n}\n\nconst setPath = (path) => (element) => {\n    element.href = path;\n return element;\n}\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToCreateElements.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToManipulateDOM.js":
/*!*******************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToManipulateDOM.js ***!
  \*******************************************************************/
/*! exports provided: insertDashesToPath, createBtnAddToFavour, createBtnAddToCart, createLinkRedirectToDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDashesToPath\", function() { return insertDashesToPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToFavour\", function() { return createBtnAddToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToCart\", function() { return createBtnAddToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkRedirectToDescription\", function() { return createLinkRedirectToDescription; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _addToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addToCartAndOpenPreviev/addToCartAndOpenPreviev */ \"./src/components/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js\");\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\nconst insertDashesToPath = (str) => str.replace(/ /g, \"-\");\n\n\n\nconst createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_3__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"addToFavour\"])(arg)\n       )(document.createElement(\"button\"));\n        \n    element.appendChild(btn);\n  return element;\n}\n\n\nconst createBtnAddToCart = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_3__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setOnclickFn\"])(_addToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAndOpenPreviev\"])(arg)\n      )(document.createElement(\"button\"));\n\n     element.appendChild(btn);\n  return element;\n}\n\n\n\n\n\nconst createLinkRedirectToDescription = (cl) => (beer) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_3__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setPath\"])(`#/opis/${insertDashesToPath(beer.name)}`),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setTextContent\"])(\"opis\"),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"addToCurrentBeer\"])(beer)\n     )(document.createElement(\"a\"));\n        \n    element.appendChild(link);\n  return element;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/removePrevievCartModal.js":
/*!******************************************************************!*\
  !*** ./src/components/toManipulateDOM/removePrevievCartModal.js ***!
  \******************************************************************/
/*! exports provided: removePrevievCartModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePrevievCartModal\", function() { return removePrevievCartModal; });\n\nconst removePrevievCartModal = () =>{ \n\n    const page = document.querySelector(\"body\"); \n    page.removeChild(page.lastChild)\n}\n   \n\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/removePrevievCartModal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_getBeersFromAPI_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/getBeersFromAPI/loadPage */ \"./src/components/getBeersFromAPI/loadPage.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/manageState/actionCreators.js":
/*!*******************************************!*\
  !*** ./src/manageState/actionCreators.js ***!
  \*******************************************/
/*! exports provided: fetchBeginAction, fetchSuccessAction, fetchFailAction, addToCartAction, setCurrentBeerAction, removeFromCartAction, incrOrderAction, decrOrderAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBeginAction\", function() { return fetchBeginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSuccessAction\", function() { return fetchSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFailAction\", function() { return fetchFailAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAction\", function() { return addToCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentBeerAction\", function() { return setCurrentBeerAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromCartAction\", function() { return removeFromCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrOrderAction\", function() { return incrOrderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrOrderAction\", function() { return decrOrderAction; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/manageState/actions.js\");\n\n\n\n\n        \nconst fetchBeginAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN\"]\n})\n\nconst fetchSuccessAction = (payload) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS\"],\n    payload\n})\n\nconst fetchFailAction = (error) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL\"],\n    error\n})\n\nconst addToCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_CART\"],\n    value  \n});\n\nconst setCurrentBeerAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_BEER\"],\n    value\n})\n\nconst removeFromCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_FROM_CART\"],\n    value\n})\n\nconst incrOrderAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"INCR_ORDER\"],\n})\n\nconst decrOrderAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"DECR_ORDER\"]\n})\n\n//# sourceURL=webpack:///./src/manageState/actionCreators.js?");

/***/ }),

/***/ "./src/manageState/actions.js":
/*!************************************!*\
  !*** ./src/manageState/actions.js ***!
  \************************************/
/*! exports provided: RMV_FROM_CART, RMV_FROM_FAVOUR, ADD_TO_CART, ADD_TO_FAVOUR, CLEAR_CART, CLEAR_FAVOUR, CURRENT_BEER, FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAIL, INCR_ORDER, DECR_ORDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_CART\", function() { return RMV_FROM_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_FAVOUR\", function() { return RMV_FROM_FAVOUR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_CART\", function() { return ADD_TO_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_FAVOUR\", function() { return ADD_TO_FAVOUR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_CART\", function() { return CLEAR_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_FAVOUR\", function() { return CLEAR_FAVOUR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_BEER\", function() { return CURRENT_BEER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BEGIN\", function() { return FETCH_BEGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUCCESS\", function() { return FETCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FAIL\", function() { return FETCH_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCR_ORDER\", function() { return INCR_ORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECR_ORDER\", function() { return DECR_ORDER; });\nconst RMV_FROM_CART = \"RMV_FROM_CART\";\nconst RMV_FROM_FAVOUR = \"RMV_FROM_FAVOUR\";\nconst ADD_TO_CART = \"ADD_TO_CART\";\nconst ADD_TO_FAVOUR = \"ADD_TO_FAVOUR\";\nconst CLEAR_CART = \"CLEAR_CART\";\nconst CLEAR_FAVOUR = \"CLEAR_FAVOUR\";\nconst CURRENT_BEER = \"CURRENT_BEER\";\nconst FETCH_BEGIN = \"FETCH_BEGIN\";\nconst FETCH_SUCCESS = \"FETCH_SUCCESS\";\nconst FETCH_FAIL = \"FETCH_FAIL\";\nconst INCR_ORDER = \"INCR_ORDER\";\nconst DECR_ORDER = \"DECR_ORDER\";\n\n//# sourceURL=webpack:///./src/manageState/actions.js?");

/***/ }),

/***/ "./src/manageState/applyMiddleware.js":
/*!********************************************!*\
  !*** ./src/manageState/applyMiddleware.js ***!
  \********************************************/
/*! exports provided: applyMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n\nconst applyMiddleware = (...middlewares) => store => {\n\n   \n    const boundMiddlewares = middlewares.map(middleware =>\n      middleware(store)\n    );\n\n    return boundMiddlewares.reduce((a, b) =>\n      next => a(b(next))\n    );\n  };\n\n\n//# sourceURL=webpack:///./src/manageState/applyMiddleware.js?");

/***/ }),

/***/ "./src/manageState/combineReducers.js":
/*!********************************************!*\
  !*** ./src/manageState/combineReducers.js ***!
  \********************************************/
/*! exports provided: combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n\nconst combineReducers = (reducers) => {\n\n    return (state = {}, action) =>{\n\n          return Object.keys(reducers).reduce((nextState,key) =>{\n              nextState[key] = reducers[key](state[key],action);  \n              return nextState\n          }, {})\n    }\n         \n      \n}\n\n//# sourceURL=webpack:///./src/manageState/combineReducers.js?");

/***/ }),

/***/ "./src/manageState/createStore.js":
/*!****************************************!*\
  !*** ./src/manageState/createStore.js ***!
  \****************************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony import */ var _reducers_reducerToCurrentBeer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/reducerToCurrentBeer */ \"./src/manageState/reducers/reducerToCurrentBeer.js\");\n\n\n\n\n\nconst validateAction = action => {\n\n  if (!action || typeof action !== \"object\" || Array.isArray(action)) {\n    throw new Error(\"Action must be an object!\");\n  }\n  if (typeof action.type === \"undefined\") {\n    throw new Error(\"Action must have a type!\");\n  }\n};\n\n\n\nconst createStore = (reducer, middleware) => {\n\n  let state;\n\n  const coreDispatch = (action) => {\n            validateAction(action);\n            state = reducer(state, action);\n  };\n\n  const getState = () => state;\n\n  const store = {\n    dispatch: coreDispatch,\n    getState,\n  };\n\n\n  if(middleware){\n    const dispatch = (action) => store.dispatch(action);\n    store.dispatch = middleware({\n      dispatch,\n      getState\n    })(coreDispatch)\n  }\n\n  return store;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/createStore.js?");

/***/ }),

/***/ "./src/manageState/middlewares.js":
/*!****************************************!*\
  !*** ./src/manageState/middlewares.js ***!
  \****************************************/
/*! exports provided: thunk, loggingMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thunk\", function() { return thunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loggingMiddleware\", function() { return loggingMiddleware; });\n\n\n\n\n\n\nconst thunk = ({dispatch, getState}) => next => action => {\n    \n    if (typeof action === 'function') {\n      return action(dispatch, getState);\n    }\n    return next(action);\n  };\n  \n  \n  \n  \nconst loggingMiddleware = ({getState}) => next => action => {\n\n  console.info('before', getState());\n  console.info('action', action);\n  console.info('after', getState());\n\n  return next(action);\n};\n\n\n\nconst delayMiddleware = ({dispatch, getState}) => next => action => {\n\n  console.info(\">>>>> getState\",getState());\n  console.info('\">>>>>\" action', action);\n\n  return next(action);\n};\n  \n\n//# sourceURL=webpack:///./src/manageState/middlewares.js?");

/***/ }),

/***/ "./src/manageState/reducers/mainReducer.js":
/*!*************************************************!*\
  !*** ./src/manageState/reducers/mainReducer.js ***!
  \*************************************************/
/*! exports provided: mainReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainReducer\", function() { return mainReducer; });\n/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combineReducers */ \"./src/manageState/combineReducers.js\");\n/* harmony import */ var _reducerToCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducerToCart */ \"./src/manageState/reducers/reducerToCart.js\");\n/* harmony import */ var _reducerToCurrentBeer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducerToCurrentBeer */ \"./src/manageState/reducers/reducerToCurrentBeer.js\");\n/* harmony import */ var _reducerToFavour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducerToFavour */ \"./src/manageState/reducers/reducerToFavour.js\");\n/* harmony import */ var _reducerToResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducerToResponse */ \"./src/manageState/reducers/reducerToResponse.js\");\n\n\n\n\n\n\n\n\nconst mainReducer = Object(_combineReducers__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    reducerToResponse: _reducerToResponse__WEBPACK_IMPORTED_MODULE_4__[\"reducerToResponse\"],\n    reducerToFavour: _reducerToFavour__WEBPACK_IMPORTED_MODULE_3__[\"reducerToFavour\"],\n    reducerToCart: _reducerToCart__WEBPACK_IMPORTED_MODULE_1__[\"reducerToCart\"],\n    reducerToCurrentBeer: _reducerToCurrentBeer__WEBPACK_IMPORTED_MODULE_2__[\"reducerToCurrentBeer\"],\n})\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/mainReducer.js?");

/***/ }),

/***/ "./src/manageState/reducers/reducerToCart.js":
/*!***************************************************!*\
  !*** ./src/manageState/reducers/reducerToCart.js ***!
  \***************************************************/
/*! exports provided: reducerToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToCart\", function() { return reducerToCart; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/manageState/actions.js\");\n\n\nconst initState= [];\n\nconst removeBeer = (cart, beer) => cart.reduce((acc,item) => item[0].name === beer.name ? [...acc,item.slice(1)] : [...acc,item] , [] );\n\n\n\nconst reducerToCart = (state = initState, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_CART\"]:\n            return [...state, action.value];\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_FROM_CART\"]: \n            return removeBeer(state, action.value);\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"CLEAR_CART\"]:\n             return [];\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/reducerToCart.js?");

/***/ }),

/***/ "./src/manageState/reducers/reducerToCurrentBeer.js":
/*!**********************************************************!*\
  !*** ./src/manageState/reducers/reducerToCurrentBeer.js ***!
  \**********************************************************/
/*! exports provided: reducerToCurrentBeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToCurrentBeer\", function() { return reducerToCurrentBeer; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/manageState/actions.js\");\n\n\n\n\n\nconst initState = null;\n\n\nconst reducerToCurrentBeer = (state = initState, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_BEER\"]:\n            return action.value;\n        default:\n            return state;\n    }\n}\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/reducerToCurrentBeer.js?");

/***/ }),

/***/ "./src/manageState/reducers/reducerToFavour.js":
/*!*****************************************************!*\
  !*** ./src/manageState/reducers/reducerToFavour.js ***!
  \*****************************************************/
/*! exports provided: reducerToFavour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToFavour\", function() { return reducerToFavour; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/manageState/actions.js\");\n\n\n\nconst initState = [];\n\n\nconst reducerToFavour = (state = initState, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_FAVOUR\"]:\n            return [...state, action.value];\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_FROM_FAVOUR\"]: \n            return state.filter((x) => x.id !== action.value.id ) ;\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"CLEAR_FAVOUR\"]:\n             return [];\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/manageState/reducers/reducerToFavour.js?");

/***/ }),

/***/ "./src/manageState/reducers/reducerToResponse.js":
/*!*******************************************************!*\
  !*** ./src/manageState/reducers/reducerToResponse.js ***!
  \*******************************************************/
/*! exports provided: reducerToResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToResponse\", function() { return reducerToResponse; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/manageState/actions.js\");\n\n\n\n    \nconst initState = {\n    items: [],\n    loading: false,\n    error: null\n}\n\n\n\nconst reducerToResponse = (state = initState, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN\"]:\n            return{\n                ...state,\n                loading: true,\n            };\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS\"]:\n            return{\n                ...state,\n                loading:false,\n                items: action.payload\n            };\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL\"]:\n            return{\n                ...state,\n                loading: false,\n                items: [],\n                error: action.error\n            }\n        default:\n            return state;\n    }\n}\n\n//# sourceURL=webpack:///./src/manageState/reducers/reducerToResponse.js?");

/***/ }),

/***/ "./src/manageState/store.js":
/*!**********************************!*\
  !*** ./src/manageState/store.js ***!
  \**********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ \"./src/manageState/createStore.js\");\n/* harmony import */ var _reducers_mainReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/mainReducer */ \"./src/manageState/reducers/mainReducer.js\");\n/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyMiddleware */ \"./src/manageState/applyMiddleware.js\");\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares */ \"./src/manageState/middlewares.js\");\n\n\n\n\n\n\n\n  const store = Object(_createStore__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_mainReducer__WEBPACK_IMPORTED_MODULE_1__[\"mainReducer\"], Object(_applyMiddleware__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(\n        _middlewares__WEBPACK_IMPORTED_MODULE_3__[\"thunk\"],\n        _middlewares__WEBPACK_IMPORTED_MODULE_3__[\"loggingMiddleware\"],\n    ))\n  \n    \n\n//# sourceURL=webpack:///./src/manageState/store.js?");

/***/ }),

/***/ "./src/pipeline.js":
/*!*************************!*\
  !*** ./src/pipeline.js ***!
  \*************************/
/*! exports provided: pipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pipeline\", function() { return pipeline; });\n\nconst pipeline = (...fns) => (x) => fns.reduce((acc,fn) => fn(acc), x);\n\n\n//# sourceURL=webpack:///./src/pipeline.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });
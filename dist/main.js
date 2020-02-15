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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\n.wrap {\\n  display: grid;\\n  max-width: 100vw;\\n  height: 100vh;\\n  grid-template-rows: 1fr 5fr;\\n  background-color: darkorange;\\n  text-transform: uppercase; }\\n  .wrap header {\\n    border: 2px solid green;\\n    text-align: center;\\n    padding: 2%; }\\n    .wrap header > h1 {\\n      font-size: 3rem;\\n      font-weight: bold;\\n      font-style: italic;\\n      padding-bottom: 1%; }\\n    .wrap header > h2 {\\n      font-size: 2rem; }\\n  .wrap .menuAndArea {\\n    display: grid;\\n    width: 100%;\\n    height: 100%;\\n    grid-template-areas: \\\"menu main\\\";\\n    grid-template-columns: 1fr 7fr;\\n    background-color: limegreen; }\\n    .wrap .menuAndArea nav.menu {\\n      grid-area: menu;\\n      background-color: limegreen;\\n      color: green;\\n      font-size: 1.8rem;\\n      border-right: 2px solid green; }\\n    .wrap .menuAndArea nav.menu li {\\n      padding-top: 10px;\\n      list-style: none;\\n      cursor: pointer;\\n      padding-right: 5px;\\n      margin: 5% 2% 5% 2%; }\\n    .wrap .menuAndArea nav.menu li a {\\n      text-decoration: none;\\n      color: brown; }\\n    .wrap .menuAndArea nav.menu li a:hover {\\n      background-color: green;\\n      color: lawngreen;\\n      transition: 0.7s; }\\n    .wrap .menuAndArea main {\\n      grid-area: main;\\n      display: flex;\\n      flex-wrap: wrap;\\n      justify-content: space-evenly; }\\n\\n.beer-label {\\n  flex-basis: 22%;\\n  flex-wrap: wrap;\\n  display: flex;\\n  justify-content: center;\\n  text-align: center;\\n  min-height: 45vh;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n  margin: 2% 0 3% 0; }\\n  .beer-label > span,\\n  .beer-label > p {\\n    flex-basis: 100%;\\n    padding: 15px; }\\n  .beer-label > span.beerTitle {\\n    max-height: 58px;\\n    overflow: hidden; }\\n  .beer-label > p.price {\\n    font-weight: normal; }\\n  .beer-label > a {\\n    flex-basis: 45%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: darkgreen;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0; }\\n    .beer-label > a:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > button {\\n    flex-basis: 45%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: darkgreen;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0; }\\n    .beer-label > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > img {\\n    width: 20%;\\n    height: 55%; }\\n\\n.beer-description {\\n  width: 100%;\\n  height: 100%;\\n  color: brown; }\\n  .beer-description .description-part {\\n    position: relative; }\\n    .beer-description .description-part > a {\\n      display: block;\\n      position: relative;\\n      margin: 1% 0 0 76%;\\n      text-decoration: none;\\n      letter-spacing: 1px;\\n      font-size: 1.3rem;\\n      cursor: pointer;\\n      color: darkgreen; }\\n      .beer-description .description-part > a:after {\\n        content: \\\"\\\";\\n        display: block;\\n        position: absolute;\\n        width: 30%;\\n        height: 2px;\\n        right: 13%;\\n        bottom: -10%;\\n        background-color: darkgreen; }\\n      .beer-description .description-part > a:hover:after {\\n        background-color: lime;\\n        transition: 0.5s;\\n        right: 70%; }\\n      .beer-description .description-part > a:hover {\\n        transition: 0.5s;\\n        color: lime; }\\n    .beer-description .description-part > h3 {\\n      text-align: center;\\n      font-size: 2rem;\\n      color: brown; }\\n    .beer-description .description-part > img {\\n      width: 9vw;\\n      height: 55vh;\\n      margin: 0 2% 0 4%; }\\n    .beer-description .description-part .description {\\n      position: absolute;\\n      text-align: right;\\n      text-transform: lowercase;\\n      font-size: 1.3rem;\\n      width: 70%;\\n      height: 40%;\\n      right: 3%;\\n      top: 25%; }\\n    .beer-description .description-part > button {\\n      position: absolute;\\n      right: 1%;\\n      top: 75%;\\n      height: 15%;\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.6rem;\\n      color: darkgreen;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 0.5%;\\n      border: 2px solid green; }\\n      .beer-description .description-part > button:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime; }\\n      .beer-description .description-part > button.cart-btn {\\n        top: 95%;\\n        width: 27%; }\\n      .beer-description .description-part > button.favour-btn {\\n        width: 32%; }\\n  .beer-description .description-params {\\n    display: flex;\\n    flex-wrap: wrap;\\n    position: absolute;\\n    justify-content: center;\\n    text-align: left;\\n    right: 28%;\\n    bottom: 13%;\\n    width: 45%;\\n    height: 25%;\\n    font-size: 1.2rem; }\\n    .beer-description .description-params > p {\\n      flex-basis: 40%;\\n      margin-top: 1%; }\\n    .beer-description .description-params > span {\\n      flex-basis: 40%;\\n      margin-top: 1%;\\n      text-transform: lowercase; }\\n\\n.previev-background {\\n  position: absolute;\\n  width: 100vw;\\n  height: 100vh;\\n  left: 0;\\n  top: 0;\\n  background: rgba(0, 0, 0, 0); }\\n\\n.cart-previev {\\n  position: fixed;\\n  min-height: 50%;\\n  width: 50%;\\n  left: 50%;\\n  top: 10%;\\n  transform: translateX(-50%);\\n  background-color: #f3c17f;\\n  border: 4px solid green; }\\n  .cart-previev > .statement {\\n    font-size: 2rem;\\n    letter-spacing: 2px;\\n    margin: 2%;\\n    text-align: center;\\n    font-weight: normal; }\\n  .cart-previev .previev-actualBeer {\\n    height: 45vh;\\n    width: 45vw;\\n    margin: 0 auto;\\n    border: 2px solid green;\\n    position: relative; }\\n    .cart-previev .previev-actualBeer > h3 {\\n      margin: 2%;\\n      margin-left: 30%;\\n      font-size: 2rem;\\n      font-weight: normal; }\\n    .cart-previev .previev-actualBeer > img {\\n      width: 14%;\\n      height: 70%;\\n      margin: 2%;\\n      position: absolute;\\n      left: 4%;\\n      top: 8%; }\\n    .cart-previev .previev-actualBeer > .price {\\n      font-weight: bold;\\n      font-size: 2.5rem;\\n      margin-left: 30%; }\\n    .cart-previev .previev-actualBeer > .description {\\n      display: block;\\n      height: 45%;\\n      font-size: 1rem;\\n      margin: 2%;\\n      margin-left: 30%;\\n      margin-right: 4%; }\\n    .cart-previev .previev-actualBeer > a,\\n    .cart-previev .previev-actualBeer > button {\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.1rem;\\n      color: darkgreen;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 1.5%; }\\n      .cart-previev .previev-actualBeer > a:hover,\\n      .cart-previev .previev-actualBeer > button:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime; }\\n    .cart-previev .previev-actualBeer > button {\\n      margin-left: 30%; }\\n    .cart-previev .previev-actualBeer > a {\\n      background-color: green;\\n      color: brown;\\n      margin-left: 10%; }\\n      .cart-previev .previev-actualBeer > a:hover {\\n        background-color: darkgreen; }\\n  .cart-previev .previev-cartContent {\\n    width: 90%;\\n    margin: 0 5%;\\n    color: green; }\\n    .cart-previev .previev-cartContent > h3 {\\n      font-weight: bold;\\n      color: brown;\\n      font-size: 2rem;\\n      margin: 4% 0 2% 0; }\\n    .cart-previev .previev-cartContent > .details {\\n      font-weight: bold;\\n      text-transform: capitalize;\\n      background-color: darkgreen;\\n      color: #f1af59;\\n      text-align: center; }\\n      .cart-previev .previev-cartContent > .details > p {\\n        margin: 1%;\\n        width: 15%;\\n        display: inline-block; }\\n      .cart-previev .previev-cartContent > .details > :nth-child(1) {\\n        width: 46%; }\\n    .cart-previev .previev-cartContent > .recapCosts {\\n      margin: 3% 0;\\n      margin-left: 75%; }\\n      .cart-previev .previev-cartContent > .recapCosts > p {\\n        text-transform: uppercase;\\n        color: brown;\\n        display: inline-block;\\n        font-size: 1.2rem; }\\n      .cart-previev .previev-cartContent > .recapCosts > .sum {\\n        font-weight: bold;\\n        color: black;\\n        margin-left: 25%; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OfferOnPage\", function() { return OfferOnPage; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toManipulateDOM/pipeline */ \"./src/components/toManipulateDOM/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\n\n\n\n\n\n  const OfferOnPage = () => {\n\n    const area = document.querySelector(\"main\");\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n\n      const beers = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToResponse.items;\n      \n      beers.map(beer => {\n\n        const wrapperDiv = Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(            \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"beerTitle\")(beer.name),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createImgElem\"])(\"\")(beer.image_url),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"price\")(`${beer.srm} $`),\n                Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createBtnAddToCart\"])(\"cartBtn\")(\"koszyk\")(beer),\n                Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createLinkRedirectToDescription\"])(beer),\n          )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"beer-label\"))\n                \n       area.appendChild(wrapperDiv);\n      });\n  };\n\n\n\n        \n        \n      \n       \n\n//# sourceURL=webpack:///./src/components/OfferOnPage.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/doFetch.js":
/*!***************************************************!*\
  !*** ./src/components/getBeersFromAPI/doFetch.js ***!
  \***************************************************/
/*! exports provided: doFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doFetch\", function() { return doFetch; });\n\nconst doFetch = async () => {\n\n    const res = await fetch(\"https://api.punkapi.com/v2/beers\");\n    const beers = await res.json();\n\n    return beers;\n    }\n\n   \n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/doFetch.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/loadPage.js":
/*!****************************************************!*\
  !*** ./src/components/getBeersFromAPI/loadPage.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _responseCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responseCreator */ \"./src/components/getBeersFromAPI/responseCreator.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\", () => {\n\n  _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchBegin\"])());\n  _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_responseCreator__WEBPACK_IMPORTED_MODULE_2__[\"createResponse\"])());\n\n  Object(_routes__WEBPACK_IMPORTED_MODULE_3__[\"router\"])()\n});\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/loadPage.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/responseCreator.js":
/*!***********************************************************!*\
  !*** ./src/components/getBeersFromAPI/responseCreator.js ***!
  \***********************************************************/
/*! exports provided: createResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createResponse\", function() { return createResponse; });\n/* harmony import */ var _doFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doFetch */ \"./src/components/getBeersFromAPI/doFetch.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n\n\n\n\n\n const createResponse = () => {\n\n    return async (dispatch) => {\n        \n        const beers = await Object(_doFetch__WEBPACK_IMPORTED_MODULE_0__[\"doFetch\"])().catch(err => dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchFail\"])(err)));\n         if(beers) dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchSuccess\"])(beers))\n    }\n }\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/responseCreator.js?");

/***/ }),

/***/ "./src/components/handlersToShopping/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/handlersToShopping/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js ***!
  \**********************************************************************************************/
/*! exports provided: addToCartAndOpenPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndOpenPreviev\", function() { return addToCartAndOpenPreviev; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _openCartPreviev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openCartPreviev */ \"./src/components/handlersToShopping/addToCartAndOpenPreviev/openCartPreviev.js\");\n\n\n\n\n\n\n\n\n\nconst addToCartAndOpenPreviev = (beer) => {\n\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAction\"])(beer));\n\n    Object(_openCartPreviev__WEBPACK_IMPORTED_MODULE_2__[\"openCartPreviev\"])(beer)\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/components/handlersToShopping/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js?");

/***/ }),

/***/ "./src/components/handlersToShopping/addToCartAndOpenPreviev/openCartPreviev.js":
/*!**************************************************************************************!*\
  !*** ./src/components/handlersToShopping/addToCartAndOpenPreviev/openCartPreviev.js ***!
  \**************************************************************************************/
/*! exports provided: openCartPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openCartPreviev\", function() { return openCartPreviev; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/pipeline */ \"./src/components/toManipulateDOM/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\n\n\nconst openCartPreviev = (beer) => {\n\n    const page = document.querySelector(\"body\");  \n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCart;\n    const cartPrevievModal = Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"previev-background\");\n\n    const cartPreviev = Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"statement\")(\"Dodałeś do koszyka!\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createInternalWrapperDiv\"])(\"previev-actualBeer\")(Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(  \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createImgElem\"])(\"\")(beer.image_url),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"\")(beer.name),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"price\")(`${beer.srm} $`),         \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"description\")(beer.description),\n                Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createButtonToCloseModal\"])(\"\")(\"kontynuuj zakupy\")(cartPrevievModal),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createLinkTo\"])(\"\")(\"do kasy\")(\"#/koszyk\"),\n            )),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createInternalWrapperDiv\"])(\"previev-cartContent\")(Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(  \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"\")(\"Twój koszyk\"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createInternalWrapperDiv\"])(\"details\")(Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(  \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"produkt\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"cena\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"ilość\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"wartość\"),\n                )), \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createInternalWrapperDiv\"])(\"recapCosts\")(Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(  \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"razem\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"sum\")(beer.srm),  \n                )),                                                            \n            ))\n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"cart-previev\")); \n\n    console.log(cartContent);   \n    cartPrevievModal.appendChild(cartPreviev);\n    page.appendChild(cartPrevievModal);\n}\n\n\n/*\ncreateSpanElem(\"price\")(beer.srm),\n                createText(\"\")(\"tagi\"),\n                createSpanElem(\"tagline\")(beer.tagline),\n                createText(\"\")(\"wyprodukowano\"),   \n                createSpanElem(\"date\")(beer.first_brewed),\n                createText(\"\")(\"producent\"),\n                createSpanElem(\"produced\")(beer.contributed_by),    \n*/    \n\n//# sourceURL=webpack:///./src/components/handlersToShopping/addToCartAndOpenPreviev/openCartPreviev.js?");

/***/ }),

/***/ "./src/components/handlersToShopping/closeModal.js":
/*!*********************************************************!*\
  !*** ./src/components/handlersToShopping/closeModal.js ***!
  \*********************************************************/
/*! exports provided: closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\n\nconst closeModal = (modal) => {\n    modal.classList.remove(\"open\");\n}\n\n//# sourceURL=webpack:///./src/components/handlersToShopping/closeModal.js?");

/***/ }),

/***/ "./src/components/handlersToShopping/handlersToShopping.js":
/*!*****************************************************************!*\
  !*** ./src/components/handlersToShopping/handlersToShopping.js ***!
  \*****************************************************************/
/*! exports provided: addToFavour, addToCurrentBeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToFavour\", function() { return addToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCurrentBeer\", function() { return addToCurrentBeer; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n\n;\n\n\n\n\n\n\nconst addToFavour = () => console.log(\"addToFavour\");\n\nconst addToCurrentBeer = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentBeerAction\"])(beer));\n\n\n//# sourceURL=webpack:///./src/components/handlersToShopping/handlersToShopping.js?");

/***/ }),

/***/ "./src/components/showDescription.js":
/*!*******************************************!*\
  !*** ./src/components/showDescription.js ***!
  \*******************************************/
/*! exports provided: showDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDescription\", function() { return showDescription; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toManipulateDOM/pipeline */ \"./src/components/toManipulateDOM/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\n\n\nconst showDescription = () => {\n\n  const area = document.querySelector(\"main\");\n\n  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n\n  const beer = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCurrentValues.beer;\n      \n      const mainWrapper = Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createInternalWrapperDiv\"])(\"description-part\")(Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createLinkTo\"])(\"\")(\"powrót do głównej\")(\"#/\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"\")(beer.name),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createImgElem\"])(\"\")(beer.image_url),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"description\")(beer.description),\n                  Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createBtnAddToFavour\"])(\"favour-btn\")(\"dodaj do ulubionych\")(beer),\n                  Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_3__[\"createBtnAddToCart\"])(\"cart-btn\")(\"dodaj do koszyka\")(beer), \n               )),\n              Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createInternalWrapperDiv\"])(\"description-params\")(Object(_toManipulateDOM_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(                    \n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"cena\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"price\")(beer.srm),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"tagi\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"tagline\")(beer.tagline),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"wyprodukowano\"),   \n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"date\")(beer.first_brewed),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createText\"])(\"\")(\"producent\"),\n                  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createSpanElem\"])(\"produced\")(beer.contributed_by),            \n                ))\n          )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"beer-description\"));\n\n area.appendChild(mainWrapper);\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/showDescription.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js":
/*!************************************************************************!*\
  !*** ./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js ***!
  \************************************************************************/
/*! exports provided: clearContentOf, createDiv, createSpanElem, createTitle, createText, createImgElem, createLinkTo, createInternalWrapperDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearContentOf\", function() { return clearContentOf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpanElem\", function() { return createSpanElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTitle\", function() { return createTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createText\", function() { return createText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImgElem\", function() { return createImgElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkTo\", function() { return createLinkTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInternalWrapperDiv\", function() { return createInternalWrapperDiv; });\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipeline */ \"./src/components/toManipulateDOM/pipeline.js\");\n\n\n\n\n\n\nconst clearContentOf = (el) => { \n\n  while(el.firstChild && el.removeChild(el.firstChild));\n\n};\n\n\n\nconst createDiv = (cl) => { \n\n    const element = document.createElement(\"div\");\n        if(cl){ element.classList.add(cl) };\n\n   return element;\n } \n\n\n\nconst createSpanElem = (cl) => (txtContent) => (element) =>{ \n\n    const span = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"span\"));\n        \n      element.appendChild(span);\n    return element\n  }\n\n\nconst createTitle = (cl) => (txtContent) => (element) =>{ \n\n    const h3 = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"h3\"));\n        \n    element.appendChild(h3);\n  return element\n }\n\n\n  const createText = (cl) => (txtContent) => (element) =>{ \n\n    const p = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"p\"));\n    \n      element.appendChild(p);\n   return element;\n  } \n\n\n\nconst createImgElem = (cl) => (src) => (element) => {\n\n    const img = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setSrc\"])(src),\n      )(document.createElement(\"img\"));\n\n    element.appendChild(img);\n return element;\n}\n\n\n\nconst createLinkTo = (cl) => (txtContent) => (path) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setPath\"])(path),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"a\"));\n       \n    element.appendChild(link);\n  return element;\n}\n\n\nconst createInternalWrapperDiv = (cl) => (elements) => (element) => {\n\n    const wrapper = elements(createDiv(cl));\n    element.appendChild(wrapper);\n\n  return element;\n} \n\n\n\n       \n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToCreateElements.js":
/*!********************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToCreateElements.js ***!
  \********************************************************************/
/*! exports provided: setClss, setTextContent, setSrc, setOnclickFn, setPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClss\", function() { return setClss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTextContent\", function() { return setTextContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSrc\", function() { return setSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOnclickFn\", function() { return setOnclickFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPath\", function() { return setPath; });\n\nconst setClss = (cl) => (element) => {\n     if(cl){ element.classList.add(cl) };\n   return element;\n}\n\nconst setTextContent = (txtContent) => (element) => {\n     element.textContent = txtContent;\n   return element;\n}\n\nconst setSrc = (src) => (element) => {\n    element.src = src;\n  return element;\n}\n\nconst setOnclickFn = (fn) => (arg) => (element) => {\n    element.addEventListener(\"click\", () =>{  fn(arg) });\n return element;\n}\n\nconst setPath = (path) => (element) => {\n    element.href = path;\n return element;\n}\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToCreateElements.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToManipulateDOM.js":
/*!*******************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToManipulateDOM.js ***!
  \*******************************************************************/
/*! exports provided: insertDashesToPath, createBtnAddToFavour, createBtnAddToCart, createButtonToCloseModal, createLinkRedirectToDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDashesToPath\", function() { return insertDashesToPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToFavour\", function() { return createBtnAddToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToCart\", function() { return createBtnAddToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToCloseModal\", function() { return createButtonToCloseModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkRedirectToDescription\", function() { return createLinkRedirectToDescription; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _handlersToShopping_addToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToShopping/addToCartAndOpenPreviev/addToCartAndOpenPreviev */ \"./src/components/handlersToShopping/addToCartAndOpenPreviev/addToCartAndOpenPreviev.js\");\n/* harmony import */ var _handlersToShopping_closeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlersToShopping/closeModal */ \"./src/components/handlersToShopping/closeModal.js\");\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipeline */ \"./src/components/toManipulateDOM/pipeline.js\");\n\n\n\n\n\n\n\n\nconst insertDashesToPath = (str) => str.replace(/ /g, \"-\");\n\n\n\nconst createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_4__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"addToFavour\"])(arg)\n       )(document.createElement(\"button\"));\n        \n    element.appendChild(btn);\n  return element;\n}\n\n\nconst createBtnAddToCart = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_4__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setOnclickFn\"])(_handlersToShopping_addToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAndOpenPreviev\"])(arg)\n      )(document.createElement(\"button\"));\n\n     element.appendChild(btn);\n  return element;\n}\n\n\nconst createButtonToCloseModal = (cl) => (txtContent) => (modal) => (element) => {\n\n  const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_4__[\"pipeline\"])(\n          Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setClss\"])(cl),\n          Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setTextContent\"])(txtContent),\n          Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setOnclickFn\"])(_handlersToShopping_closeModal__WEBPACK_IMPORTED_MODULE_2__[\"closeModal\"])(modal)\n      )(document.createElement(\"button\"));\n\n      element.appendChild(btn);\n  return element;\n}\n\n\n\nconst createLinkRedirectToDescription = (beer) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_4__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setPath\"])(`#/opis/${insertDashesToPath(beer.name)}`),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setTextContent\"])(\"opis\"),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"addToCurrentBeer\"])(beer)\n     )(document.createElement(\"a\"));\n        \n    element.appendChild(link);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/pipeline.js":
/*!****************************************************!*\
  !*** ./src/components/toManipulateDOM/pipeline.js ***!
  \****************************************************/
/*! exports provided: pipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pipeline\", function() { return pipeline; });\n\nconst pipeline = (...fns) => (x) => fns.reduce((acc,fn) => fn(acc), x);\n\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/pipeline.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_getBeersFromAPI_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/getBeersFromAPI/loadPage */ \"./src/components/getBeersFromAPI/loadPage.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/manageState/actionCreators.js":
/*!*******************************************!*\
  !*** ./src/manageState/actionCreators.js ***!
  \*******************************************/
/*! exports provided: fetchBegin, fetchSuccess, fetchFail, addToCartAction, setCurrentBeerAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBegin\", function() { return fetchBegin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSuccess\", function() { return fetchSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFail\", function() { return fetchFail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAction\", function() { return addToCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentBeerAction\", function() { return setCurrentBeerAction; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/manageState/actions.js\");\n\n\n\n\nconst fetchBegin = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN\"]\n})\n\nconst fetchSuccess = (payload) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS\"],\n    payload\n})\n\nconst fetchFail = (error) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL\"],\n    error\n})\n\nconst addToCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_CART\"],\n    value  \n});\n\nconst setCurrentBeerAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_BEER\"],\n    value\n})\n\n//# sourceURL=webpack:///./src/manageState/actionCreators.js?");

/***/ }),

/***/ "./src/manageState/actions.js":
/*!************************************!*\
  !*** ./src/manageState/actions.js ***!
  \************************************/
/*! exports provided: RMV_FROM_CART, RMV_FROM_FAVOUR, ADD_TO_CART, ADD_TO_FAVOUR, CLEAR_CART, CLEAR_FAVOUR, CURRENT_BEER, FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_CART\", function() { return RMV_FROM_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_FAVOUR\", function() { return RMV_FROM_FAVOUR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_CART\", function() { return ADD_TO_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_FAVOUR\", function() { return ADD_TO_FAVOUR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_CART\", function() { return CLEAR_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_FAVOUR\", function() { return CLEAR_FAVOUR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_BEER\", function() { return CURRENT_BEER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BEGIN\", function() { return FETCH_BEGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUCCESS\", function() { return FETCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FAIL\", function() { return FETCH_FAIL; });\nconst RMV_FROM_CART = \"RMV_FROM_CART\";\nconst RMV_FROM_FAVOUR = \"RMV_FROM_FAVOUR\";\nconst ADD_TO_CART = \"ADD_TO_CART\";\nconst ADD_TO_FAVOUR = \"ADD_TO_FAVOUR\";\nconst CLEAR_CART = \"CLEAR_CART\";\nconst CLEAR_FAVOUR = \"CLEAR_FAVOUR\";\nconst CURRENT_BEER = \"CURRENT_BEER\";\nconst FETCH_BEGIN = \"FETCH_BEGIN\";\nconst FETCH_SUCCESS = \"FETCH_SUCCESS\";\nconst FETCH_FAIL = \"FETCH_FAIL\";\n\n//# sourceURL=webpack:///./src/manageState/actions.js?");

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
/*! exports provided: createStore, applyMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ \"./src/manageState/reducers.js\");\n\n\n\n\n\nconst validateAction = action => {\n\n  if (!action || typeof action !== \"object\" || Array.isArray(action)) {\n    throw new Error(\"Action must be an object!\");\n  }\n  if (typeof action.type === \"undefined\") {\n    throw new Error(\"Action must have a type!\");\n  }\n};\n\n\n\nconst createStore = (reducer, middleware) => {\n\n  let state;\n\n  const coreDispatch = (action) => {\n            validateAction(action);\n            state = reducer(state, action);\n  };\n\n  const getState = () => state;\n\n  const store = {\n    dispatch: coreDispatch,\n    getState,\n  };\n\n\n  if(middleware){\n    const dispatch = (action) => store.dispatch(action);\n    store.dispatch = middleware({\n      dispatch,\n      getState\n    })(coreDispatch)\n  }\n\n  return store;\n};\n\n\n/*\n\n*/\n\n\n\n\n\n\n\nconst applyMiddleware = (...middlewares) => store => {\n\n   \n    const boundMiddlewares = middlewares.map(middleware =>\n      middleware(store)\n    );\n\n    return boundMiddlewares.reduce((a, b) =>\n      next => a(b(next))\n    );\n  };\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/createStore.js?");

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

/***/ "./src/manageState/reducers.js":
/*!*************************************!*\
  !*** ./src/manageState/reducers.js ***!
  \*************************************/
/*! exports provided: mainReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainReducer\", function() { return mainReducer; });\n/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineReducers */ \"./src/manageState/combineReducers.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/manageState/actions.js\");\n\n\n\n\n\nconst initStateArr = [];\nconst initStateObj = {\n    beer: null,\n};\n\nconst initStateToFetch = {\n    items: [],\n    loading: false,\n    error: null\n}\n\n\n\nconst reducerToResponse = (state = initStateToFetch, action) => {\n\n            switch (action.type){\n                case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_BEGIN\"]:\n                    return{\n                        ...state,\n                        loading: true,\n                    };\n                case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_SUCCESS\"]:\n                    return{\n                        ...state,\n                        loading:false,\n                        items: action.payload\n                    };\n                case _actions__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_FAIL\"]:\n                    return{\n                        ...state,\n                        loading: false,\n                        items: [],\n                        error: action.error\n                    }\n                default:\n                    return state;\n            }\n        }\n\n\n\n\n\n\nconst reducerToFavour = (state = initStateArr, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TO_FAVOUR\"]:\n            return [...state, action.value];\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_FROM_FAVOUR\"]: \n            return state.filter((x) => x.id !== action.value.id ) ;\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_FAVOUR\"]:\n             return [];\n        default:\n            return state;\n    }\n};\n\n\nconst reducerToCart = (state = initStateArr, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TO_CART\"]:\n            return [...state, action.value];\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_FROM_CART\"]: \n            return state.filter((x) => x.id !== action.value.id ) ;\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_CART\"]:\n             return [];\n        default:\n            return state;\n    }\n};\n\n\nconst reducerToCurrentValues = (state = initStateObj, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"CURRENT_BEER\"]:\n            return {\n                ...state,\n                beer: action.value\n            };\n        default:\n            return state;\n    }\n}\n\n\n\n\n\n\n\n \n\n\nconst mainReducer = Object(_combineReducers__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n                      reducerToResponse,\n                      reducerToFavour,\n                      reducerToCart,\n                      reducerToCurrentValues\n                  })\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/reducers.js?");

/***/ }),

/***/ "./src/manageState/store.js":
/*!**********************************!*\
  !*** ./src/manageState/store.js ***!
  \**********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ \"./src/manageState/createStore.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/manageState/reducers.js\");\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ \"./src/manageState/middlewares.js\");\n\n\n\n\n\n\n//export const store = createStore(mainReducer);\n\n\n\n/**/\n  const store = Object(_createStore__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"mainReducer\"], Object(_createStore__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(\n        _middlewares__WEBPACK_IMPORTED_MODULE_2__[\"thunk\"],\n        _middlewares__WEBPACK_IMPORTED_MODULE_2__[\"loggingMiddleware\"],\n    ))\n  \n    \n\n//# sourceURL=webpack:///./src/manageState/store.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"router\", function() { return router; });\n/* harmony import */ var _components_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OfferOnPage */ \"./src/components/OfferOnPage.js\");\n/* harmony import */ var _components_showDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/showDescription */ \"./src/components/showDescription.js\");\n\n\n\n\n\n\n\nconst routes = () => ({\n\n    \"/\" : () => Object(_components_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__[\"OfferOnPage\"])(), \n    \"/opis\" : () => Object(_components_showDescription__WEBPACK_IMPORTED_MODULE_1__[\"showDescription\"])()\n   \n})\n\n\n\n\n\nconst resolveRoute = (route) => { \n    \n\n   if(route.includes(\"opis\")){  \n        return routes()[\"/opis\"]\n    }\n    else if(routes()[route]){\n        return routes()[route]\n    }\n    \n};\n\n\n\nconst router = (e) => { \n\n            const url = window.location.hash.slice(1) || \"/\";\n            const routeResolved = resolveRoute(url);\n\n            routeResolved();\n        }\n\n\nwindow.addEventListener(\"hashchange\",router);\n\n\n\n//# sourceURL=webpack:///./src/routes.js?");

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
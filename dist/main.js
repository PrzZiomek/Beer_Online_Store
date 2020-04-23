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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../graphics/green-bubbles-background.jpg */ \"./graphics/green-bubbles-background.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\nhtml {\\n  font-size: 16px; }\\n\\n.wrap {\\n  max-width: 100vw;\\n  min-height: 100vh;\\n  text-transform: uppercase;\\n  background-color: rgba(0, 0, 0, 0.3); }\\n  .wrap::after {\\n    content: \\\"\\\";\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    top: 0;\\n    left: -20%;\\n    bottom: 0;\\n    right: 0;\\n    position: fixed;\\n    z-index: -1; }\\n\\nheader {\\n  text-align: center;\\n  height: 20vh;\\n  padding: 2%;\\n  margin: 0 22% 0 22%;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  border-radius: 2%;\\n  text-shadow: 7px -3px 3px #CE5937; }\\n  header > h1 {\\n    font-size: 3.5rem;\\n    font-weight: bold;\\n    font-style: italic;\\n    padding-bottom: 1%; }\\n  header > h2 {\\n    font-size: 2.4rem;\\n    padding-top: 1%; }\\n\\n.menuAndArea {\\n  display: grid;\\n  width: 100%;\\n  height: 100%;\\n  grid-template-areas: \\\"menu main\\\";\\n  grid-template-columns: 1fr 7fr;\\n  margin-top: 2%; }\\n\\nnav.menu {\\n  grid-area: menu;\\n  position: fixed;\\n  left: 0;\\n  top: 28vh;\\n  font-size: 1.8rem; }\\n\\nnav.menu li {\\n  list-style: none;\\n  cursor: pointer;\\n  text-align: center; }\\n  nav.menu li:nth-child(5) {\\n    font-size: 1.4rem; }\\n  nav.menu li.cart {\\n    position: relative; }\\n  nav.menu li.cart::after {\\n    position: absolute;\\n    color: white;\\n    font-weight: bold;\\n    display: block;\\n    top: 0;\\n    right: -9%;\\n    content: attr(beerAmount); }\\n  nav.menu li.favorite {\\n    position: relative; }\\n  nav.menu li.favorite::after {\\n    position: absolute;\\n    color: white;\\n    font-weight: bold;\\n    display: block;\\n    top: 0;\\n    right: -12%;\\n    content: attr(beerAmount); }\\n\\nnav.menu li a {\\n  text-decoration: none;\\n  background-color: darkorange;\\n  text-align: center;\\n  color: black;\\n  display: block;\\n  width: 100%;\\n  height: 15%;\\n  border-radius: 13%;\\n  padding: 5%;\\n  margin: 12%;\\n  box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4); }\\n\\nnav.menu li a:hover {\\n  background-color: green;\\n  color: lawngreen;\\n  transition: 0.7s; }\\n\\nmain {\\n  grid-area: main;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly; }\\n\\n.loader {\\n  position: absolute;\\n  display: block;\\n  top: 50vh;\\n  left: 50vw;\\n  width: 10vw;\\n  height: 10vh;\\n  color: white;\\n  font-size: 2.4rem;\\n  text-transform: capitalize;\\n  transform: translate(-50%, -50%); }\\n\\n.beer-label {\\n  flex-basis: 22%;\\n  flex-wrap: wrap;\\n  display: flex;\\n  justify-content: center;\\n  text-align: center;\\n  min-height: 45vh;\\n  font-size: 1.3rem;\\n  font-weight: bold;\\n  margin: 2% 0 3% 0;\\n  padding-bottom: 1%;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  border: 2px solid green;\\n  border-radius: 5%; }\\n  .beer-label > span,\\n  .beer-label > p {\\n    flex-basis: 100%;\\n    padding: 15px; }\\n  .beer-label > span.beerTitle {\\n    max-height: 58px;\\n    overflow: hidden; }\\n  .beer-label > p.price {\\n    font-weight: normal; }\\n  .beer-label > a {\\n    flex-basis: 45%;\\n    border-radius: 10%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0;\\n    border-radius: 13%;\\n    border: 3px solid green; }\\n    .beer-label > a:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > button {\\n    flex-basis: 45%;\\n    border-radius: 10%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0;\\n    border-radius: 13%;\\n    border: 3px solid green; }\\n    .beer-label > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > img {\\n    width: 20%;\\n    height: 55%; }\\n\\n.beer-description {\\n  width: 95%;\\n  height: 70vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  padding-bottom: 10%;\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%; }\\n\\n.description-part {\\n  position: relative; }\\n  .description-part > a {\\n    display: block;\\n    position: relative;\\n    margin: 1% 0 0 76%;\\n    text-decoration: none;\\n    letter-spacing: 1px;\\n    font-size: 1.3rem;\\n    cursor: pointer;\\n    color: darkgreen; }\\n    .description-part > a:after {\\n      content: \\\"\\\";\\n      display: block;\\n      position: absolute;\\n      width: 30%;\\n      height: 2px;\\n      right: 11%;\\n      bottom: -10%;\\n      background-color: darkgreen; }\\n    .description-part > a:hover:after {\\n      background-color: lime;\\n      transition: 0.5s;\\n      right: 70%; }\\n    .description-part > a:hover {\\n      transition: 0.5s;\\n      color: lime; }\\n  .description-part > h3 {\\n    text-align: center;\\n    font-size: 2rem; }\\n  .description-part > img {\\n    width: 9vw;\\n    height: 55vh;\\n    margin: 0 2% 0 4%; }\\n  .description-part .description {\\n    position: absolute;\\n    text-align: right;\\n    text-transform: lowercase;\\n    font-size: 1.3rem;\\n    width: 70%;\\n    height: 40%;\\n    right: 3%;\\n    top: 25%; }\\n  .description-part > button {\\n    position: absolute;\\n    right: 1%;\\n    top: 65%;\\n    height: 15%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.6rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0.5%;\\n    border-radius: 13%;\\n    border: 2px solid green;\\n    border-radius: 7%;\\n    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4); }\\n    .description-part > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n    .description-part > button.cartBtn {\\n      top: 85%;\\n      width: 27%; }\\n    .description-part > button.favourBtn {\\n      width: 32%; }\\n\\n.description-params {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: absolute;\\n  justify-content: center;\\n  text-align: left;\\n  right: 28%;\\n  bottom: 13%;\\n  width: 45%;\\n  height: 25%;\\n  font-size: 1.2rem; }\\n  .description-params > p {\\n    flex-basis: 40%;\\n    margin-top: 1%; }\\n  .description-params > span {\\n    flex-basis: 40%;\\n    margin-top: 1%;\\n    text-transform: lowercase; }\\n\\n.previevModal {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n  background: rgba(0, 0, 0, 0); }\\n\\n.cart-previev {\\n  position: fixed;\\n  min-height: 50%;\\n  width: 50%;\\n  left: 50%;\\n  top: 10%;\\n  transform: translateX(-50%);\\n  background-color: #f3c17f;\\n  border: 4px solid darkgreen; }\\n\\n.cart-previev .statement {\\n  font-size: 2rem;\\n  letter-spacing: 2px;\\n  margin: 2%;\\n  text-align: center;\\n  font-weight: normal; }\\n\\n.previev-actualBeer {\\n  height: 45vh;\\n  width: 45vw;\\n  margin: 0 auto;\\n  border: 2px solid green;\\n  position: relative; }\\n  .previev-actualBeer > h3 {\\n    margin: 2%;\\n    margin-left: 30%;\\n    font-size: 2rem;\\n    font-weight: normal; }\\n  .previev-actualBeer > img {\\n    width: 14%;\\n    height: 87%;\\n    margin: 2%;\\n    position: absolute;\\n    left: 4%;\\n    top: 4%; }\\n  .previev-actualBeer > .price {\\n    font-weight: bold;\\n    font-size: 2.5rem;\\n    margin-left: 30%; }\\n  .previev-actualBeer > .description {\\n    display: block;\\n    font-size: 1rem;\\n    margin: 2%;\\n    margin-left: 30%;\\n    margin-right: 4%; }\\n  .previev-actualBeer > a,\\n  .previev-actualBeer > button {\\n    position: absolute;\\n    text-align: center;\\n    top: 80%;\\n    height: 12%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 1.5%;\\n    border-radius: 13%; }\\n    .previev-actualBeer > a:hover,\\n    .previev-actualBeer > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .previev-actualBeer > button {\\n    left: 28%;\\n    width: 37%; }\\n  .previev-actualBeer > a {\\n    background-color: green;\\n    color: #8b2222;\\n    left: 75%;\\n    width: 18%; }\\n    .previev-actualBeer > a:hover {\\n      background-color: brown; }\\n\\n.previev-cartContent {\\n  width: 90%;\\n  margin: 0 5%;\\n  color: green; }\\n  .previev-cartContent > h3 {\\n    font-weight: bold;\\n    color: brown;\\n    font-size: 2rem;\\n    margin: 4% 0 2% 0; }\\n  .previev-cartContent > .cartContent-details {\\n    font-weight: bold;\\n    text-transform: capitalize;\\n    background-color: #025002;\\n    color: #f1af59;\\n    text-align: center; }\\n    .previev-cartContent > .cartContent-details > p {\\n      margin: 1%;\\n      width: 15%;\\n      display: inline-block; }\\n    .previev-cartContent > .cartContent-details > :nth-child(1) {\\n      width: 40%; }\\n    .previev-cartContent > .cartContent-details > :nth-child(3) {\\n      width: 20%; }\\n  .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev {\\n    display: flex;\\n    width: 100%;\\n    height: 6vh;\\n    background-color: green;\\n    color: white;\\n    font-size: 1.2rem;\\n    border: 1px solid #025002;\\n    align-items: center;\\n    padding-left: 2%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(1) {\\n      flex-basis: 40%;\\n      overflow: hidden; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(2) {\\n      flex-basis: 10%;\\n      margin-left: 8%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(3) {\\n      margin-left: 2%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > :nth-last-child(1) {\\n      margin-left: 5%; }\\n    .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > button {\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.5rem;\\n      color: #004700;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 0.5%;\\n      border-radius: 13%;\\n      flex-basis: 7%; }\\n      .previev-cartContent > .cartContent-listWithOrders > .beer-paramsPreviev > button:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime;\\n        background-color: brown; }\\n  .previev-cartContent > .cartContent-recapCosts {\\n    margin: 3% 0;\\n    margin-left: 70%; }\\n    .previev-cartContent > .cartContent-recapCosts > p {\\n      text-transform: uppercase;\\n      color: brown;\\n      display: inline-block;\\n      font-size: 1.2rem; }\\n    .previev-cartContent > .cartContent-recapCosts > .sum {\\n      font-weight: bold;\\n      color: black;\\n      margin-left: 22%;\\n      font-size: 1.2rem; }\\n\\n.errorStatement {\\n  position: absolute;\\n  width: 50vw;\\n  height: 20vh;\\n  background-color: green;\\n  color: yellow;\\n  font-size: 2.2rem;\\n  left: 50%;\\n  top: 50%;\\n  border: 2px double yellow;\\n  transform: translate(-50%, -50%); }\\n  .errorStatement::after {\\n    position: absolute;\\n    text-transform: none;\\n    content: \\\"Brak połączenia z internetem!\\\";\\n    left: 7%;\\n    top: 50%;\\n    transform: translateY(-50%); }\\n\\n.favorite-cart {\\n  width: 95%;\\n  min-height: 75vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%; }\\n  .favorite-cart > .amount {\\n    font-size: 2rem;\\n    font-weight: bold;\\n    display: inline-block; }\\n  .favorite-cart > p {\\n    font-size: 1.5rem;\\n    font-weight: normal;\\n    margin-left: 7%;\\n    text-transform: none; }\\n  .favorite-cart > .favoriteCart-columnTitles {\\n    font-weight: bold;\\n    text-transform: capitalize;\\n    background-color: #025002;\\n    color: #f1af59;\\n    width: 90%;\\n    margin: auto;\\n    margin-top: 2%; }\\n    .favorite-cart > .favoriteCart-columnTitles > :nth-child(1) {\\n      margin-left: 1%; }\\n    .favorite-cart > .favoriteCart-columnTitles > :nth-child(2) {\\n      margin-left: 25%; }\\n    .favorite-cart > .favoriteCart-columnTitles > :nth-child(3) {\\n      margin-left: 15%; }\\n    .favorite-cart > .favoriteCart-columnTitles > :nth-child(4) {\\n      margin-left: 8%; }\\n    .favorite-cart > .favoriteCart-columnTitles > :nth-child(5) {\\n      margin-left: 15%; }\\n    .favorite-cart > .favoriteCart-columnTitles > p {\\n      margin: 1%;\\n      display: inline-block;\\n      font-size: 1.2rem; }\\n  .favorite-cart > .favoriteCart-content {\\n    display: flex;\\n    width: 100%;\\n    min-height: 6vh;\\n    background-color: green;\\n    color: white;\\n    font-size: 1.4rem;\\n    border: 1px solid #025002;\\n    align-items: center; }\\n    .favorite-cart > .favoriteCart-content > img {\\n      width: 2.5vw;\\n      height: 13vh;\\n      margin: 1% 4%; }\\n    .favorite-cart > .favoriteCart-content > :nth-child(3) {\\n      flex-basis: 40%;\\n      overflow: hidden;\\n      margin-left: 6%;\\n      margin-right: 5%; }\\n    .favorite-cart > .favoriteCart-content > :nth-child(4) {\\n      flex-basis: 10%;\\n      margin-left: 8%;\\n      margin-right: 5%; }\\n    .favorite-cart > .favoriteCart-content > :nth-child(5) {\\n      margin-left: 2%; }\\n    .favorite-cart > .favoriteCart-content > :nth-last-child(1) {\\n      margin-left: 8%;\\n      margin-right: 4%;\\n      flex-basis: 15%; }\\n    .favorite-cart > .favoriteCart-content > button {\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.5rem;\\n      color: #004700;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 1%;\\n      border-radius: 13%;\\n      margin: 0 1%;\\n      flex-basis: 7%; }\\n      .favorite-cart > .favoriteCart-content > button:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime;\\n        background-color: brown; }\\n    .favorite-cart > .favoriteCart-content > .cart-recapCosts {\\n      margin: 3% 0 3% 0;\\n      margin-left: 77%; }\\n      .favorite-cart > .favoriteCart-content > .cart-recapCosts > p {\\n        text-transform: uppercase;\\n        color: brown;\\n        display: inline-block;\\n        font-size: 1.4rem; }\\n      .favorite-cart > .favoriteCart-content > .cart-recapCosts > .sum {\\n        font-weight: bold;\\n        color: black;\\n        margin-left: 7%;\\n        font-size: 1.2rem; }\\n\\n.shopping-cart {\\n  width: 95%;\\n  min-height: 75vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%; }\\n  .shopping-cart > .cart-progressBar {\\n    width: 60%;\\n    height: 2vh;\\n    background-color: #b6c98f;\\n    margin: 5% auto;\\n    position: relative; }\\n    .shopping-cart > .cart-progressBar > div {\\n      width: 6vh;\\n      height: 6vh;\\n      border-radius: 50%;\\n      position: absolute;\\n      background-color: #b6c98f;\\n      font-size: 1.4rem;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      top: 50%;\\n      transform: translate(-50%, -50%); }\\n      .shopping-cart > .cart-progressBar > div:nth-child(1) {\\n        left: 0;\\n        background-color: green;\\n        color: #b6c98f;\\n        border: 6px solid #b6c98f; }\\n      .shopping-cart > .cart-progressBar > div:nth-child(2) {\\n        left: 33%; }\\n      .shopping-cart > .cart-progressBar > div:nth-child(3) {\\n        left: 66%; }\\n      .shopping-cart > .cart-progressBar > div:nth-child(4) {\\n        left: 100%; }\\n  .shopping-cart > .cart-header {\\n    width: 90%;\\n    margin: 0 auto;\\n    font-size: 2rem;\\n    font-weight: bold; }\\n    .shopping-cart > .cart-header > .title {\\n      margin: 0 2% 0 7%;\\n      display: inline-block;\\n      position: relative; }\\n      .shopping-cart > .cart-header > .title::before {\\n        position: absolute;\\n        text-align: center;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        top: 8%;\\n        left: -25%;\\n        display: block;\\n        content: \\\"1\\\";\\n        height: 145%;\\n        width: 20%;\\n        background-color: green;\\n        margin-right: 1%; }\\n    .shopping-cart > .cart-header > .amount {\\n      font-size: 2rem;\\n      font-weight: bold;\\n      display: inline-block; }\\n    .shopping-cart > .cart-header > p {\\n      font-size: 1.5rem;\\n      font-weight: normal;\\n      margin-left: 7%;\\n      text-transform: none; }\\n  .shopping-cart > .shoppingCart-columnTitles {\\n    font-weight: bold;\\n    text-transform: capitalize;\\n    background-color: #025002;\\n    color: #f1af59;\\n    width: 90%;\\n    margin: auto;\\n    margin-top: 2%; }\\n    .shopping-cart > .shoppingCart-columnTitles > :nth-child(1) {\\n      margin-left: 1%; }\\n    .shopping-cart > .shoppingCart-columnTitles > :nth-child(2) {\\n      margin-left: 25%; }\\n    .shopping-cart > .shoppingCart-columnTitles > :nth-child(3) {\\n      margin-left: 15%; }\\n    .shopping-cart > .shoppingCart-columnTitles > :nth-child(4) {\\n      margin-left: 8%; }\\n    .shopping-cart > .shoppingCart-columnTitles > :nth-child(5) {\\n      margin-left: 15%; }\\n    .shopping-cart > .shoppingCart-columnTitles > p {\\n      margin: 1%;\\n      display: inline-block;\\n      font-size: 1.2rem; }\\n  .shopping-cart > .cart-listWithOrders {\\n    width: 90%;\\n    margin: 0 auto; }\\n    .shopping-cart > .cart-listWithOrders > .shoppingCart-content {\\n      display: flex;\\n      width: 100%;\\n      min-height: 6vh;\\n      background-color: green;\\n      color: white;\\n      font-size: 1.4rem;\\n      border: 1px solid #025002;\\n      align-items: center; }\\n      .shopping-cart > .cart-listWithOrders > .shoppingCart-content > img {\\n        width: 2.5vw;\\n        height: 13vh;\\n        margin: 1% 4%; }\\n      .shopping-cart > .cart-listWithOrders > .shoppingCart-content > :nth-child(3) {\\n        flex-basis: 40%;\\n        overflow: hidden;\\n        margin-left: 6%;\\n        margin-right: 5%; }\\n      .shopping-cart > .cart-listWithOrders > .shoppingCart-content > :nth-child(4) {\\n        flex-basis: 10%;\\n        margin-left: 8%;\\n        margin-right: 5%; }\\n      .shopping-cart > .cart-listWithOrders > .shoppingCart-content > :nth-child(5) {\\n        margin-left: 2%; }\\n      .shopping-cart > .cart-listWithOrders > .shoppingCart-content > :nth-last-child(1) {\\n        margin-left: 8%;\\n        margin-right: 4%;\\n        flex-basis: 15%; }\\n      .shopping-cart > .cart-listWithOrders > .shoppingCart-content > button {\\n        text-transform: uppercase;\\n        font-weight: normal;\\n        font-size: 1.5rem;\\n        color: #004700;\\n        letter-spacing: 2px;\\n        border: 1px solid green;\\n        background-color: limegreen;\\n        cursor: pointer;\\n        margin: 0 2% 0 2%;\\n        text-decoration: none;\\n        text-align: center;\\n        padding: 1%;\\n        border-radius: 13%;\\n        margin: 0 1%;\\n        flex-basis: 7%; }\\n        .shopping-cart > .cart-listWithOrders > .shoppingCart-content > button:hover {\\n          transition: 0.5s;\\n          background-color: green;\\n          color: lime;\\n          background-color: brown; }\\n  .shopping-cart > .cart-recapCosts {\\n    margin: 3% 0 3% 0;\\n    margin-left: 77%; }\\n    .shopping-cart > .cart-recapCosts > p {\\n      text-transform: uppercase;\\n      color: brown;\\n      display: inline-block;\\n      font-size: 1.4rem; }\\n    .shopping-cart > .cart-recapCosts > .sum {\\n      font-weight: bold;\\n      color: black;\\n      margin-left: 7%;\\n      font-size: 1.2rem; }\\n  .shopping-cart > .cart-buttons1 {\\n    margin: auto;\\n    text-align: center; }\\n    .shopping-cart > .cart-buttons1 > p {\\n      font-size: 1.5rem;\\n      text-transform: none;\\n      font-weight: bold;\\n      display: inline-block; }\\n    .shopping-cart > .cart-buttons1 > a {\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.2rem;\\n      color: #004700;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 0.5%;\\n      border-radius: 13%;\\n      padding: 1% 1.25%;\\n      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4);\\n      font-weight: bold;\\n      display: inline-block; }\\n      .shopping-cart > .cart-buttons1 > a:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime;\\n        background-color: brown; }\\n  .shopping-cart > .cart-buttons2 {\\n    width: 100%;\\n    margin: 4% 0 2% 4%; }\\n    .shopping-cart > .cart-buttons2 > a {\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.2rem;\\n      color: #004700;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 0.5%;\\n      border-radius: 13%;\\n      padding: 1%;\\n      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4);\\n      font-weight: bold; }\\n      .shopping-cart > .cart-buttons2 > a:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime;\\n        background-color: brown; }\\n      .shopping-cart > .cart-buttons2 > a:nth-child(2) {\\n        margin-left: 45%; }\\n\\n.registration-form {\\n  margin: auto;\\n  width: 95%;\\n  height: 70vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  padding-bottom: 10%;\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%;\\n  width: 75%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around; }\\n  .registration-form > button {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.2rem;\\n    color: #004700;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 2%;\\n    border-radius: 13%;\\n    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4);\\n    font-weight: bold;\\n    margin: 2% 0 0 20%;\\n    justify-self: center; }\\n    .registration-form > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .registration-form input {\\n    background-color: green;\\n    font-size: 1.2rem; }\\n\\n.form-header {\\n  display: flex;\\n  flex-basis: 100%;\\n  height: 15%;\\n  text-align: center; }\\n  .form-header > h3 {\\n    flex-basis: 40%;\\n    font-size: 1.8rem;\\n    margin: 4% 0 0 30%; }\\n  .form-header > a {\\n    display: block;\\n    position: relative;\\n    margin: 1% 0 0 76%;\\n    text-decoration: none;\\n    letter-spacing: 1px;\\n    font-size: 1.3rem;\\n    cursor: pointer;\\n    color: darkgreen;\\n    margin: 2%;\\n    height: 30%;\\n    margin-left: 18%; }\\n    .form-header > a:after {\\n      content: \\\"\\\";\\n      display: block;\\n      position: absolute;\\n      width: 30%;\\n      height: 2px;\\n      right: 11%;\\n      bottom: -10%;\\n      background-color: darkgreen; }\\n    .form-header > a:hover:after {\\n      background-color: lime;\\n      transition: 0.5s;\\n      right: 70%; }\\n    .form-header > a:hover {\\n      transition: 0.5s;\\n      color: lime; }\\n    .form-header > a::after {\\n      bottom: -15%;\\n      right: 0; }\\n\\n.form-textFields {\\n  height: 60%;\\n  flex-basis: 45%;\\n  margin: 2% auto;\\n  text-align: center;\\n  text-transform: capitalize; }\\n  .form-textFields > label {\\n    display: block;\\n    margin: 1% 0;\\n    width: 100%;\\n    font-size: 1.2rem;\\n    text-transform: capitalize;\\n    font-weight: bold;\\n    text-align: left; }\\n  .form-textFields > input {\\n    display: block;\\n    width: 60%;\\n    height: 5vh;\\n    margin-bottom: 3%;\\n    font-size: 1.3rem; }\\n  .form-textFields > .withInfo {\\n    display: none;\\n    text-transform: none;\\n    margin: 0;\\n    background-color: #088508;\\n    border: 2px solid #10b310; }\\n\\n.form-acceptFields {\\n  flex-basis: 45%;\\n  height: 60%;\\n  margin: 10% auto 0 auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  text-transform: none; }\\n  .form-acceptFields > input {\\n    flex-basis: 10%; }\\n  .form-acceptFields > :nth-child(even) {\\n    flex-basis: 90%;\\n    text-align: left;\\n    height: 30%; }\\n  .form-acceptFields > .agreementOnRules {\\n    display: inline; }\\n    .form-acceptFields > .agreementOnRules > p {\\n      display: inline; }\\n  .form-acceptFields a {\\n    text-transform: capitalize;\\n    color: black;\\n    font-weight: bold;\\n    text-decoration: none; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./src/components/AddToCartAndOpenPreviev/addToCartAndOpenPreviev.js":
/*!***************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/addToCartAndOpenPreviev.js ***!
  \***************************************************************************/
/*! exports provided: addToCartAndOpenPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndOpenPreviev\", function() { return addToCartAndOpenPreviev; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js\");\n\n\n\n\n\n\n\n\n\nconst addToCartAndOpenPreviev = (beer) => {\n\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchSetCurrentBeer\"])(beer);\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToCart\"])(beer);\n    Object(_previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_1__[\"actualBeerAndCartPreviev\"])()\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/addToCartAndOpenPreviev.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/addToCartAndRemoveWithUpdatePreviev.js":
/*!***************************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/addToCartAndRemoveWithUpdatePreviev.js ***!
  \***************************************************************************************/
/*! exports provided: addToCartAndUpdatePreviev, rmvFromCartAndUpdatePreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndUpdatePreviev\", function() { return addToCartAndUpdatePreviev; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvFromCartAndUpdatePreviev\", function() { return rmvFromCartAndUpdatePreviev; });\n/* harmony import */ var _AddToCartAndOpenPreviev_previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js\");\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/removePrevievCartModal */ \"./src/components/toManipulateDOM/removePrevievCartModal.js\");\n\n\n\n\n\n\nconst addToCartAndUpdatePreviev = (beer) => {\n\n    Object(_toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_2__[\"removePrevievCartModal\"])();\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__[\"dispatchAddToCart\"])(beer);\n    Object(_AddToCartAndOpenPreviev_previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_0__[\"actualBeerAndCartPreviev\"])()\n}\n\n\nconst rmvFromCartAndUpdatePreviev = (beer) => {\n    \n    Object(_toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_2__[\"removePrevievCartModal\"])();\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__[\"dispatchRemoveFromCart\"])(beer);\n    Object(_AddToCartAndOpenPreviev_previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_0__[\"actualBeerAndCartPreviev\"])()\n}\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/addToCartAndRemoveWithUpdatePreviev.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js":
/*!****************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js ***!
  \****************************************************************************/
/*! exports provided: createButtonToCloseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToCloseModal\", function() { return createButtonToCloseModal; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removePrevievCartModal */ \"./src/components/toManipulateDOM/removePrevievCartModal.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayCounterOfBeersInCart */ \"./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js\");\n\n\n\n\n\n\n\n\nconst createButtonToCloseModal = (cl) => (txtContent) => (element) => {\n\n    Object(_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__[\"displayCounterOfBeersInCart\"])()\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(_toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__[\"removePrevievCartModal\"])()\n        )(document.createElement(\"button\"));\n  \n        element.appendChild(btn);\n    return element;\n  }\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js":
/*!*******************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js ***!
  \*******************************************************************************/
/*! exports provided: displayCounterOfBeersInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayCounterOfBeersInCart\", function() { return displayCounterOfBeersInCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n\n\n\n\nconst displayCounterOfBeersInCart = () => {\n\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCart;\n    const beerAmount = cartContent.length;\n    const linkToCart = document.querySelector(\"li.cart\");\n\n    linkToCart.setAttribute(\"beerAmount\", beerAmount.toString())\n}\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js":
/*!**************************************************************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js ***!
  \**************************************************************************************************************************/
/*! exports provided: actualBeerAndCartPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actualBeerAndCartPreviev\", function() { return actualBeerAndCartPreviev; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _componentsOfCartPreviev_previevOfCartContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsOfCartPreviev/previevOfCartContent */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevOfCartContent.js\");\n/* harmony import */ var _componentsOfCartPreviev_previevActualBeer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentsOfCartPreviev/previevActualBeer */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevActualBeer.js\");\n\n\n\n\n\n\n\n\nconst actualBeerAndCartPreviev = () => {\n\n    const page = document.querySelector(\"body\");  \n    const cartPrevievModal = Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"previevModal\");\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_1__[\"store\"].getState().reducerToCart;\n    const beer = _manageState_store__WEBPACK_IMPORTED_MODULE_1__[\"store\"].getState().reducerToCurrentBeer;\n    \n    const cartPreviev = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"statement\")(\"Dodałeś do koszyka!\"),\n            Object(_componentsOfCartPreviev_previevActualBeer__WEBPACK_IMPORTED_MODULE_4__[\"previevOfActualBeer\"])(beer),\n            Object(_componentsOfCartPreviev_previevOfCartContent__WEBPACK_IMPORTED_MODULE_3__[\"createPrevievOfCartContent\"])(cartContent)\n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"cart-previev\")); \n\n    cartPrevievModal.appendChild(cartPreviev);\n  page.appendChild(cartPrevievModal);\n}\n\n\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/beerParamsPreviev.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/beerParamsPreviev.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: beerParamsPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"beerParamsPreviev\", function() { return beerParamsPreviev; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _showContentOf_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../showContentOf/buttonsToChangeOrderQuantity */ \"./src/components/showContentOf/buttonsToChangeOrderQuantity.js\");\n/* harmony import */ var _groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../groupBeersByLabels/groupBeersByLabels */ \"./src/components/groupBeersByLabels/groupBeersByLabels.js\");\n/* harmony import */ var _addToCartAndRemoveWithUpdatePreviev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../addToCartAndRemoveWithUpdatePreviev */ \"./src/components/AddToCartAndOpenPreviev/addToCartAndRemoveWithUpdatePreviev.js\");\n/* harmony import */ var _sumOfGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sumOfGroup */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js\");\n\n\n\n\n\n\n\n\n\n const beerParamsPreviev = (cartContent) => (element) => {\n      \n       Object(_groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__[\"groupBeersByLabels\"])(cartContent).map(group => {\n\n                const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"beerTitle\")(group[0].name),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${group[0].abv} $`),\n                        Object(_showContentOf_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToIncreaseOrder\"])(\"\")(_addToCartAndRemoveWithUpdatePreviev__WEBPACK_IMPORTED_MODULE_4__[\"addToCartAndUpdatePreviev\"])(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(group.length),\n                        Object(_showContentOf_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToDecreaseOrder\"])(\"\")(_addToCartAndRemoveWithUpdatePreviev__WEBPACK_IMPORTED_MODULE_4__[\"rmvFromCartAndUpdatePreviev\"])(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"sum\")(`${Object(_sumOfGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(group[0].abv, group.length)} $`)\n                  )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"beer-paramsPreviev\"))\n\n              element.appendChild(wrapperDiv);\n            })\n\n        return element;\n  }\n\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/beerParamsPreviev.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevActualBeer.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevActualBeer.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: previevOfActualBeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previevOfActualBeer\", function() { return previevOfActualBeer; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createButtonToCloseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../createButtonToCloseModal */ \"./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js\");\n\n\n\n\n\n\nconst previevOfActualBeer = (beer) => (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(    \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(beer.image_url),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"\")(beer.name),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"price\")(`${beer.abv} $`),         \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"description\")(beer.description),\n            Object(_createButtonToCloseModal__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToCloseModal\"])(\"\")(\"kontynuuj zakupy\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"do kasy\")(\"#/koszyk\"),\n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"previev-actualBeer\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n    \n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevActualBeer.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevOfCartContent.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevOfCartContent.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: createPrevievOfCartContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPrevievOfCartContent\", function() { return createPrevievOfCartContent; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _beerParamsPreviev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beerParamsPreviev */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/beerParamsPreviev.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _valueOfEntireCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../valueOfEntireCart */ \"./src/components/AddToCartAndOpenPreviev/valueOfEntireCart.js\");\n\n\n\n\n\n\nconst createPrevievOfCartContent = (cartContent) => (element) => {\n      \n        const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(            \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createTitle\"])(\"\")(\"Twój koszyk\"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createWrapperDiv\"])(\"cartContent-details\")( \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"produkt\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"cena\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"ilość\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"wartość\"),\n                ), \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createWrapperDiv\"])(\"cartContent-listWithOrders\")( \n                    Object(_beerParamsPreviev__WEBPACK_IMPORTED_MODULE_1__[\"beerParamsPreviev\"])(cartContent)\n                ),  \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createWrapperDiv\"])(\"cartContent-recapCosts\")( \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"razem\"),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createSpanElem\"])(\"sum\")(`${Object(_valueOfEntireCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cartContent)} $`),  \n                )                                                             \n            )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"previev-cartContent\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevOfCartContent.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js":
/*!***********************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sumOfGroup = (price, amount) => (Math.round(price * amount * 100) / 100).toFixed(2);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sumOfGroup);\n\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/valueOfEntireCart.js":
/*!*********************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/valueOfEntireCart.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n const valueOfEntireCart = (arr) =>{ \n\n    let sum = arr.reduce((acc,poz) => acc + poz.abv, 0 );\n  return (Math.round(sum * 100) / 100).toFixed(2);\n};\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (valueOfEntireCart);\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/valueOfEntireCart.js?");

/***/ }),

/***/ "./src/components/BeerDescription/BeerDescription.js":
/*!***********************************************************!*\
  !*** ./src/components/BeerDescription/BeerDescription.js ***!
  \***********************************************************/
/*! exports provided: BeerDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BeerDescription\", function() { return BeerDescription; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createBeerDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBeerDescription */ \"./src/components/BeerDescription/createBeerDescription.js\");\n\n\n\n\n\nconst BeerDescription = () => {\n\n  const area = document.querySelector(\"main\");\n  const beer = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCurrentBeer;\n\n  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"clearContentOf\"])(area);\n  \n  Object(_createBeerDescription__WEBPACK_IMPORTED_MODULE_2__[\"createBeerDescription\"])(beer)\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/BeerDescription/BeerDescription.js?");

/***/ }),

/***/ "./src/components/BeerDescription/componentsOfShowDescription.js/descriptionParams.js":
/*!********************************************************************************************!*\
  !*** ./src/components/BeerDescription/componentsOfShowDescription.js/descriptionParams.js ***!
  \********************************************************************************************/
/*! exports provided: descriptionParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"descriptionParams\", function() { return descriptionParams; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\nconst descriptionParams = (beer) => (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"cena\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"price\")(beer.abv),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"tagi\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"tagline\")(beer.tagline),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"wyprodukowano\"),   \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"date\")(beer.first_brewed),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"producent\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"produced\")(beer.contributed_by),            \n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"description-params\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n\n\n//# sourceURL=webpack:///./src/components/BeerDescription/componentsOfShowDescription.js/descriptionParams.js?");

/***/ }),

/***/ "./src/components/BeerDescription/componentsOfShowDescription.js/descriptionPart.js":
/*!******************************************************************************************!*\
  !*** ./src/components/BeerDescription/componentsOfShowDescription.js/descriptionPart.js ***!
  \******************************************************************************************/
/*! exports provided: descriptionPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"descriptionPart\", function() { return descriptionPart; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\nconst descriptionPart = (beer) => (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"powrót do głównej\")(\"#/\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"\")(beer.name),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(beer.image_url),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"description\")(beer.description),\n            Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createBtnAddToFavour\"])(\"favourBtn\")(\"dodaj do ulubionych\")(beer),\n            Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createBtnAddToCart\"])(\"cartBtn\")(\"dodaj do koszyka\")(beer),   \n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"description-part\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n\n//# sourceURL=webpack:///./src/components/BeerDescription/componentsOfShowDescription.js/descriptionPart.js?");

/***/ }),

/***/ "./src/components/BeerDescription/createBeerDescription.js":
/*!*****************************************************************!*\
  !*** ./src/components/BeerDescription/createBeerDescription.js ***!
  \*****************************************************************/
/*! exports provided: createBeerDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBeerDescription\", function() { return createBeerDescription; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _componentsOfShowDescription_js_descriptionPart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsOfShowDescription.js/descriptionPart */ \"./src/components/BeerDescription/componentsOfShowDescription.js/descriptionPart.js\");\n/* harmony import */ var _componentsOfShowDescription_js_descriptionParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsOfShowDescription.js/descriptionParams */ \"./src/components/BeerDescription/componentsOfShowDescription.js/descriptionParams.js\");\n\n\n\n\n\n\n\nconst createBeerDescription = (beer) => {\n\n  const area = document.querySelector(\"main\");\n      \n  const mainWrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(\n          Object(_componentsOfShowDescription_js_descriptionPart__WEBPACK_IMPORTED_MODULE_2__[\"descriptionPart\"])(beer),\n          Object(_componentsOfShowDescription_js_descriptionParams__WEBPACK_IMPORTED_MODULE_3__[\"descriptionParams\"])(beer),\n    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"beer-description\"));\n\n  area.appendChild(mainWrapper);\n};\n\n\n//# sourceURL=webpack:///./src/components/BeerDescription/createBeerDescription.js?");

/***/ }),

/***/ "./src/components/FavoriteCart/FavoriteCart.js":
/*!*****************************************************!*\
  !*** ./src/components/FavoriteCart/FavoriteCart.js ***!
  \*****************************************************/
/*! exports provided: FavoriteCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavoriteCart\", function() { return FavoriteCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removePrevievCartModal */ \"./src/components/toManipulateDOM/removePrevievCartModal.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createFavoriteCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createFavoriteCart */ \"./src/components/FavoriteCart/createFavoriteCart.js\");\n\n\n\n\n\n\n\nconst FavoriteCart = () => {\n\n    const area = document.querySelector(\"main\");\n    const favoriteContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToFavorite;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n  //  removePrevievCartModal();\n\n    Object(_createFavoriteCart__WEBPACK_IMPORTED_MODULE_3__[\"createFavoriteCart\"])(favoriteContent)\n}\n\n                \n\n\n\n//# sourceURL=webpack:///./src/components/FavoriteCart/FavoriteCart.js?");

/***/ }),

/***/ "./src/components/FavoriteCart/addToFavorite.js":
/*!******************************************************!*\
  !*** ./src/components/FavoriteCart/addToFavorite.js ***!
  \******************************************************/
/*! exports provided: addToFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToFavorite\", function() { return addToFavorite; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _displayCounterOfBeersInFavorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayCounterOfBeersInFavorite */ \"./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js\");\n\n\n\n\nconst addToFavorite = (beer) => {\n\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToFavour\"])(beer);\n    Object(_displayCounterOfBeersInFavorite__WEBPACK_IMPORTED_MODULE_1__[\"displayCounterOfBeersInCart\"])();\n   \n}\n\n//# sourceURL=webpack:///./src/components/FavoriteCart/addToFavorite.js?");

/***/ }),

/***/ "./src/components/FavoriteCart/createFavoriteCart.js":
/*!***********************************************************!*\
  !*** ./src/components/FavoriteCart/createFavoriteCart.js ***!
  \***********************************************************/
/*! exports provided: createFavoriteCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFavoriteCart\", function() { return createFavoriteCart; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _showContentOf_createElementWithCartContent_createElementWithFavoriteCartContent_createElementWithFavoriteCartContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js\");\n/* harmony import */ var _showContentOf_cartColumnTitles_favoriteCartColumnTitles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../showContentOf/cartColumnTitles/favoriteCartColumnTitles */ \"./src/components/showContentOf/cartColumnTitles/favoriteCartColumnTitles.js\");\n\n\n\n\n\n\n\nconst createFavoriteCart = (cartContent) => {\n\n    const area = document.querySelector(\"main\");\n      \n    const mainWrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"title\")(\"Twoja lista Życzeń\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(`(${cartContent.length})`),\n            _showContentOf_cartColumnTitles_favoriteCartColumnTitles__WEBPACK_IMPORTED_MODULE_3__[\"favoriteCartColumnTitles\"],\n            Object(_showContentOf_createElementWithCartContent_createElementWithFavoriteCartContent_createElementWithFavoriteCartContent__WEBPACK_IMPORTED_MODULE_2__[\"createElementWithFavoriteCartContent\"])(cartContent),\n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"favorite-cart\"))\n\n area.appendChild(mainWrapper);\n}\n\n//# sourceURL=webpack:///./src/components/FavoriteCart/createFavoriteCart.js?");

/***/ }),

/***/ "./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js":
/*!************************************************************************!*\
  !*** ./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js ***!
  \************************************************************************/
/*! exports provided: displayCounterOfBeersInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayCounterOfBeersInCart\", function() { return displayCounterOfBeersInCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n\n\n\n\nconst displayCounterOfBeersInCart = () => {\n\n    const FavoriteContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToFavorite;\n    const beerAmount = FavoriteContent.length;\n    const linkToFavorite = document.querySelector(\"li.favorite\");\n\n    linkToFavorite.setAttribute(\"beerAmount\", beerAmount.toString())\n}\n\n//# sourceURL=webpack:///./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/OfferOnPage.js":
/*!***************************************************!*\
  !*** ./src/components/OfferOnPage/OfferOnPage.js ***!
  \***************************************************/
/*! exports provided: OfferOnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OfferOnPage\", function() { return OfferOnPage; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createOfferOnPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createOfferOnPage */ \"./src/components/OfferOnPage/createOfferOnPage.js\");\n\n\n\n\n\nconst OfferOnPage = () => {\n\n    const area = document.querySelector(\"main\");\n    const beers = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToResponse.items;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"clearContentOf\"])(area);\n      \n    Object(_createOfferOnPage__WEBPACK_IMPORTED_MODULE_2__[\"createOfferOnPage\"])(beers);\n  };\n\n\n\n        \n        \n      \n       \n\n//# sourceURL=webpack:///./src/components/OfferOnPage/OfferOnPage.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/createLinkRedirectToDescription.js":
/*!***********************************************************************!*\
  !*** ./src/components/OfferOnPage/createLinkRedirectToDescription.js ***!
  \***********************************************************************/
/*! exports provided: createLinkRedirectToDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkRedirectToDescription\", function() { return createLinkRedirectToDescription; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _insertDashesToPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertDashesToPath */ \"./src/components/OfferOnPage/insertDashesToPath.js\");\n\n\n\n\n\n\n\n\nconst createLinkRedirectToDescription = (cl) => (beer) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setPath\"])(`#/opis/${Object(_insertDashesToPath__WEBPACK_IMPORTED_MODULE_3__[\"insertDashesToPath\"])(beer.name)}`),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setTextContent\"])(\"opis\"),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToCurrentBeer\"])(beer)\n     )(document.createElement(\"a\"));\n        \n    element.appendChild(link);\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/OfferOnPage/createLinkRedirectToDescription.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/createOfferOnPage.js":
/*!*********************************************************!*\
  !*** ./src/components/OfferOnPage/createOfferOnPage.js ***!
  \*********************************************************/
/*! exports provided: createOfferOnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createOfferOnPage\", function() { return createOfferOnPage; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n/* harmony import */ var _createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createLinkRedirectToDescription */ \"./src/components/OfferOnPage/createLinkRedirectToDescription.js\");\n\n\n\n\n\n\n\nconst createOfferOnPage = (beers) => {\n\n    const area = document.querySelector(\"main\");\n      \n      beers.map(beer => {\n\n            const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"beerTitle\")(beer.name),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(beer.image_url),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${beer.abv} $`),\n                    Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createBtnAddToCart\"])(\"cartBtn\")(\"koszyk\")(beer),\n                    Object(_createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_3__[\"createLinkRedirectToDescription\"])(\"\")(beer),\n            )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"beer-label\"))\n                \n       area.appendChild(wrapperDiv);\n   });\n\n};\n\n//# sourceURL=webpack:///./src/components/OfferOnPage/createOfferOnPage.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/insertDashesToPath.js":
/*!**********************************************************!*\
  !*** ./src/components/OfferOnPage/insertDashesToPath.js ***!
  \**********************************************************/
/*! exports provided: insertDashesToPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDashesToPath\", function() { return insertDashesToPath; });\nconst insertDashesToPath = (str) => str.replace(/ /g, \"-\");\n\n\n//# sourceURL=webpack:///./src/components/OfferOnPage/insertDashesToPath.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/RegistrationForm.js":
/*!*************************************************************!*\
  !*** ./src/components/RegistrationForm/RegistrationForm.js ***!
  \*************************************************************/
/*! exports provided: RegistrationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegistrationForm\", function() { return RegistrationForm; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _infoAboutPassword_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoAboutPassword.js */ \"./src/components/RegistrationForm/infoAboutPassword.js\");\n/* harmony import */ var _createRegistrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRegistrationForm */ \"./src/components/RegistrationForm/createRegistrationForm.js\");\n\n\n\n\n\n\nconst RegistrationForm = () => {\n\n    const area = document.querySelector(\"main\");\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"clearContentOf\"])(area);\n      \n    Object(_createRegistrationForm__WEBPACK_IMPORTED_MODULE_2__[\"createRegistrationForm\"])();\n\n    Object(_infoAboutPassword_js__WEBPACK_IMPORTED_MODULE_1__[\"infoAboutPassword\"])()\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/RegistrationForm.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js":
/*!******************************************************************************************!*\
  !*** ./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js ***!
  \******************************************************************************************/
/*! exports provided: formAcceptFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formAcceptFields\", function() { return formAcceptFields; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\nconst formAcceptFields = (element) => {\n\n  const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(           \n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createRadioInput\"])(\"\")(\"acceptRegulations\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createWrapperDiv\"])(\"agreementOnRules\")(\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"Akceptuję \"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createLinkTo\"])(\"\")(\"regulamin serwisu\")(\"#/regulamin-serwisu\"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\" i zapoznałem się z \"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createLinkTo\"])(\"\")(\"polityką prywatności\")(\"#/polityka-prywatnosci\")\n            ),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createRadioInput\"])(\"\")(\"acceptSendingNewsletter\"),    \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"Wyrażam zgodę na wysyłanie mi meilowo przez Beers S.A. z siedzibą w Poznaniu wiadomości marketingowych.\")      \n    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"form-acceptFields\"))\n        \n    element.appendChild(wrapper);\n return element\n} \n\n//# sourceURL=webpack:///./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/componentsOfRegistrationForm/formHeader.js":
/*!************************************************************************************!*\
  !*** ./src/components/RegistrationForm/componentsOfRegistrationForm/formHeader.js ***!
  \************************************************************************************/
/*! exports provided: formHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formHeader\", function() { return formHeader; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\nconst formHeader = (element) => {\n\n    const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(           \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createTitle\"])(\"\")(\"rejestracja\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createLinkTo\"])(\"\")(\"cofnij\")(\"#/koszyk\")     \n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"form-header\"))\n        \n    element.appendChild(wrapper);\n return element\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/componentsOfRegistrationForm/formHeader.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/componentsOfRegistrationForm/formTextFields.js":
/*!****************************************************************************************!*\
  !*** ./src/components/RegistrationForm/componentsOfRegistrationForm/formTextFields.js ***!
  \****************************************************************************************/
/*! exports provided: formTextFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formTextFields\", function() { return formTextFields; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\nconst formTextFields = (element) => {\n\n  const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(           \n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"imie\")(\"imię\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createTextInput\"])(\"\")(\"imie\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"nazwisko\")(\"nazwisko\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createTextInput\"])(\"\")(\"nazwisko\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"e-mail\")(\"e-mail\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createEmailInput\"])(\"\")(\"e-mail\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"haslo\")(\"hasło\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createPasswordInput\"])(\"password\")(\"haslo\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDivWithinElement\"])(\"withInfo\")(\"hasło musi mieć min. 6 znaków, moze składać się z duzych liter, znaków specjalnych i liczb\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"haslo2\")(\"powtórz hasło\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createPasswordInput\"])(\"\")(\"haslo2\")     \n    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"form-textFields\"))\n        \n    element.appendChild(wrapper);\n return element\n\n} \n\n//# sourceURL=webpack:///./src/components/RegistrationForm/componentsOfRegistrationForm/formTextFields.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/createRegistrationForm.js":
/*!*******************************************************************!*\
  !*** ./src/components/RegistrationForm/createRegistrationForm.js ***!
  \*******************************************************************/
/*! exports provided: createRegistrationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRegistrationForm\", function() { return createRegistrationForm; });\n/* harmony import */ var _handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _componentsOfRegistrationForm_formHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsOfRegistrationForm/formHeader */ \"./src/components/RegistrationForm/componentsOfRegistrationForm/formHeader.js\");\n/* harmony import */ var _componentsOfRegistrationForm_formTextFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsOfRegistrationForm/formTextFields */ \"./src/components/RegistrationForm/componentsOfRegistrationForm/formTextFields.js\");\n/* harmony import */ var _componentsOfRegistrationForm_formAcceptFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentsOfRegistrationForm/formAcceptFields */ \"./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js\");\n/* harmony import */ var _validation_registrationFormValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation/registrationFormValidator */ \"./src/components/RegistrationForm/validation/registrationFormValidator.js\");\n\n\n\n\n\n\n\n\n\nconst createRegistrationForm = () => {\n\n    const area = document.querySelector(\"main\");\n\n    const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(     \n            _componentsOfRegistrationForm_formHeader__WEBPACK_IMPORTED_MODULE_2__[\"formHeader\"],\n            _componentsOfRegistrationForm_formTextFields__WEBPACK_IMPORTED_MODULE_3__[\"formTextFields\"],\n            _componentsOfRegistrationForm_formAcceptFields__WEBPACK_IMPORTED_MODULE_4__[\"formAcceptFields\"],\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createBtn\"])(\"\")('dokończ rejestrację')             \n        )(Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createForm\"])(\"registration-form\"))\n            \n    area.appendChild(wrapper);\n    \n    wrapper.onsubmit = Object(_validation_registrationFormValidator__WEBPACK_IMPORTED_MODULE_5__[\"registrationFormValidator\"])();\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/createRegistrationForm.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/handlersToCreateForm.js":
/*!*****************************************************************!*\
  !*** ./src/components/RegistrationForm/handlersToCreateForm.js ***!
  \*****************************************************************/
/*! exports provided: createForm, createTextInput, createPasswordInput, createEmailInput, createRadioInput, createStrongWithAbbrAtr, createLabelWithRequired, createBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForm\", function() { return createForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTextInput\", function() { return createTextInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPasswordInput\", function() { return createPasswordInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEmailInput\", function() { return createEmailInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRadioInput\", function() { return createRadioInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStrongWithAbbrAtr\", function() { return createStrongWithAbbrAtr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLabelWithRequired\", function() { return createLabelWithRequired; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtn\", function() { return createBtn; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _validation_registrationFormValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/registrationFormValidator */ \"./src/components/RegistrationForm/validation/registrationFormValidator.js\");\n\n\n\n\n\nconst createForm = (cl) => { \n\n    const element = document.createElement(\"form\");\n    const elementWithClss =  Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl)(element);\n  return elementWithClss;\n};\n\n\nconst createTextInput = (cl) => (name) => (element) => {\n\n    const textInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"text\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(textInput);\n return element;\n}\n\nconst createPasswordInput = (cl) => (name) => (element) => {\n\n    const passwordInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"password\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(passwordInput);\n return element;\n}\n\nconst createEmailInput = (cl) => (name) => (element) => {\n\n  const passwordInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n          Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n          Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n          Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"email\")\n  )(document.createElement(\"input\"));\n\nelement.appendChild(passwordInput);\nreturn element;\n}\n\n\nconst createRadioInput = (cl) => (value) => (element) => {\n\n  const radioInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n          Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n          Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n          Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setValue\"])(value),\n          Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"radio\")\n  )(document.createElement(\"input\"));\n\nelement.appendChild(radioInput);\nreturn element;\n}\n\n\n\nconst createStrongWithAbbrAtr = (abbrTitle) => (element) => {\n\n    const strong = document.createElement(\"strong\");\n    const abbr = document.createElement(\"abbr\");\n    abbr.title = abbrTitle;\n    abbr.textContent = \"*\";\n    strong.appendChild(abbr);\n    element.appendChild(strong);\n\n  return element  \n}\n\n\n  const createLabelWithRequired = (cl) => (to) => (textContent) => (element) => {\n\n      const label = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setforAtr\"])(to),\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(textContent),\n              createStrongWithAbbrAtr(\"required\")\n        )(document.createElement(\"label\"));\n\n    element.appendChild(label);\n  return element;\n    \n  }\n\n\n  const createBtn = (cl) =>  (textContent) => (element) => {\n\n        const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n                Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(textContent),\n            )(document.createElement(\"button\"));\n      \n      element.appendChild(btn);\n    return element;\n  }\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/handlersToCreateForm.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/infoAboutPassword.js":
/*!**************************************************************!*\
  !*** ./src/components/RegistrationForm/infoAboutPassword.js ***!
  \**************************************************************/
/*! exports provided: infoAboutPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infoAboutPassword\", function() { return infoAboutPassword; });\n\n\nconst infoAboutPassword = () => { \n    \n    const passwordInput = document.querySelector(\".password\");\n    const info = document.querySelector(\".withInfo\")\n\n    passwordInput.addEventListener('focus', () => info.style.display = \"block\" );\n    passwordInput.addEventListener('change', () => info.style.display = \"none\" );\n\n  }\n\n \n\n//# sourceURL=webpack:///./src/components/RegistrationForm/infoAboutPassword.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/checkingFunctions.js":
/*!*************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/checkingFunctions.js ***!
  \*************************************************************************/
/*! exports provided: checkIfIncludesNumb, checkIfIsTooBrief, checkIfIsEmailCorrect, checkPasswordLength, checkIfPasswordIsIdentical, checkIfIsAgreement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIncludesNumb\", function() { return checkIfIncludesNumb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIsTooBrief\", function() { return checkIfIsTooBrief; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIsEmailCorrect\", function() { return checkIfIsEmailCorrect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkPasswordLength\", function() { return checkPasswordLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfPasswordIsIdentical\", function() { return checkIfPasswordIsIdentical; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIsAgreement\", function() { return checkIfIsAgreement; });\n\nconst includeNumber = (text) => [...text].some(x => x.match(/\\d+/g));\n\nconst checkIfIncludesNumb = (text) =>{ \n    if(includeNumber(text)){\n     throw \"nie moze zawierać cyfry\";\n    } else{\n        return text;\n    } \n};\n\nconst checkIfIsTooBrief = (text) => {\n    if(text.length < 3){\n        throw \"minimum 3 znaki\";\n    } else{\n        return text;\n    } \n};\n\nconst checkIfIsEmailCorrect = (text) => {\n    if(text.includes(\".\") && text.includes(\"@\")){\n        return text;\n    } else{\n        throw \"niepoprawny e-mail\";\n    } \n};\n\nconst checkPasswordLength = (text) => {\n    if(text.length < 6){\n        throw \"hasło musi mieć min. 6 znaków\";\n    } else{\n        return text;\n    } \n};\n\nconst checkIfPasswordIsIdentical = (prevText) => (text) => {\n    if(prevText !== text){\n        throw \"hasło nie jest identyczne\";\n    } else{\n        return text;\n    } \n};\n\n\nconst checkIfIsAgreement = (checked) => {\n    if(!checked){\n        throw \"musisz wyrazić zgodę\";\n    } \n};\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/checkingFunctions.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyAgreement.js":
/*!****************************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyAgreement.js ***!
  \****************************************************************************************************/
/*! exports provided: verifyAgreement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyAgreement\", function() { return verifyAgreement; });\n/* harmony import */ var _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkingFunctions */ \"./src/components/RegistrationForm/validation/checkingFunctions.js\");\n\n\n\nconst verifyAgreement = (value) => () => Object(_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"checkIfIsAgreement\"])(value);\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyAgreement.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyEmail.js":
/*!************************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyEmail.js ***!
  \************************************************************************************************/
/*! exports provided: verifyEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyEmail\", function() { return verifyEmail; });\n/* harmony import */ var _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkingFunctions */ \"./src/components/RegistrationForm/validation/checkingFunctions.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\nconst verifyEmail = (value) => () => Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                                             _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"checkIfIsTooBrief\"],\n                                             _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"checkIfIsEmailCorrect\"]\n                                           )(value)\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyEmail.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyName.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyName.js ***!
  \***********************************************************************************************/
/*! exports provided: verifyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyName\", function() { return verifyName; });\n/* harmony import */ var _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkingFunctions */ \"./src/components/RegistrationForm/validation/checkingFunctions.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\nconst verifyName = (value) => () => Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                                             _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"checkIfIsTooBrief\"],\n                                             _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"checkIfIncludesNumb\"]\n                                           )(value)\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyName.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyPassword.js":
/*!***************************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyPassword.js ***!
  \***************************************************************************************************/
/*! exports provided: verifyPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyPassword\", function() { return verifyPassword; });\n/* harmony import */ var _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkingFunctions */ \"./src/components/RegistrationForm/validation/checkingFunctions.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\nconst verifyPassword = (value) => () => Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(                                             \n                                               _checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"checkPasswordLength\"]\n                                            )(value)\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyPassword.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/helpersToValidation.js":
/*!***************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/helpersToValidation.js ***!
  \***************************************************************************/
/*! exports provided: dispatchValidationOK, dispatchNoValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchValidationOK\", function() { return dispatchValidationOK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchNoValidation\", function() { return dispatchNoValidation; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n\n\n\n\n//export const dispatchValidationOK = (v) => store.dispatch(validationOKaction(v));\n\n//export const dispatchNoValidation = (e) => store.dispatch(NoValidationAction(e));\n\nconst dispatchValidationOK = (v) => console.log(\"validOK\");\nconst dispatchNoValidation = (e) => console.log(\"noValid\");\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/helpersToValidation.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/matchInputs.js":
/*!*******************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/matchInputs.js ***!
  \*******************************************************************/
/*! exports provided: matchInputWithFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchInputWithFn\", function() { return matchInputWithFn; });\n/* harmony import */ var _composingOfCheckingFunctions_verifyName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyName */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyName.js\");\n/* harmony import */ var _composingOfCheckingFunctions_verifyEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyEmail */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyEmail.js\");\n/* harmony import */ var _composingOfCheckingFunctions_verifyAgreement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyAgreement */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyAgreement.js\");\n/* harmony import */ var _composingOfCheckingFunctions_verifyPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyPassword */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyPassword.js\");\n\n\n\n\n\n\n\nconst matchInputWithFn = (input) => ({\n\n                \"text\" : Object(_composingOfCheckingFunctions_verifyName__WEBPACK_IMPORTED_MODULE_0__[\"verifyName\"])(input.value),\n                \"email\" : Object(_composingOfCheckingFunctions_verifyEmail__WEBPACK_IMPORTED_MODULE_1__[\"verifyEmail\"])(input.value),\n                \"radio\" : Object(_composingOfCheckingFunctions_verifyAgreement__WEBPACK_IMPORTED_MODULE_2__[\"verifyAgreement\"])(input.checked),\n                \"password\" : Object(_composingOfCheckingFunctions_verifyPassword__WEBPACK_IMPORTED_MODULE_3__[\"verifyPassword\"])(input.value),\n            })\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/matchInputs.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/registrationFormValidator.js":
/*!*********************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/registrationFormValidator.js ***!
  \*********************************************************************************/
/*! exports provided: registrationFormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registrationFormValidator\", function() { return registrationFormValidator; });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./src/components/RegistrationForm/validation/validation.js\");\n\n\n\nconst registrationFormValidator = () => {\n\n    const form = document.querySelector(\".registration-form\");\n\n    form.addEventListener(\"submit\", (e) => {\n\n        e.preventDefault();     \n        Object(_validation__WEBPACK_IMPORTED_MODULE_0__[\"validation\"])(e.target) \n    })\n}\n    \n   \n\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/registrationFormValidator.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/toEither.js":
/*!****************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/toEither.js ***!
  \****************************************************************/
/*! exports provided: toEither */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toEither\", function() { return toEither; });\n/* harmony import */ var _validation_helpersToValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation/helpersToValidation */ \"./src/components/RegistrationForm/validation/helpersToValidation.js\");\n/* harmony import */ var _monads_Either_Either__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../monads/Either/Either */ \"./src/monads/Either/Either.js\");\n\n\n\n\nconst toEither = (checkFn) =>  _monads_Either_Either__WEBPACK_IMPORTED_MODULE_1__[\"default\"].of(checkFn)\n                                            .match({\n                                                Right: (v) => Object(_validation_helpersToValidation__WEBPACK_IMPORTED_MODULE_0__[\"dispatchValidationOK\"])(v),\n                                                Left: (e) => Object(_validation_helpersToValidation__WEBPACK_IMPORTED_MODULE_0__[\"dispatchNoValidation\"])(e)          \n                                             })\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/toEither.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/validation.js":
/*!******************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/validation.js ***!
  \******************************************************************/
/*! exports provided: validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validation\", function() { return validation; });\n/* harmony import */ var _matchInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchInputs */ \"./src/components/RegistrationForm/validation/matchInputs.js\");\n/* harmony import */ var _toEither__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toEither */ \"./src/components/RegistrationForm/validation/toEither.js\");\n\n\n\n\n\n\nconst validation = (form) => {\n\n    const formInputs = [...form.querySelectorAll(\"input\")];\n\n    formInputs.map(input => {\n        const checkFn = Object(_matchInputs__WEBPACK_IMPORTED_MODULE_0__[\"matchInputWithFn\"])(input)[input.type];\n        Object(_toEither__WEBPACK_IMPORTED_MODULE_1__[\"toEither\"])(checkFn)\n    })  \n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/validation.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/ShoppingCart.js":
/*!*****************************************************!*\
  !*** ./src/components/ShoppingCart/ShoppingCart.js ***!
  \*****************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShoppingCart\", function() { return ShoppingCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removePrevievCartModal */ \"./src/components/toManipulateDOM/removePrevievCartModal.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createShoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createShoppingCart */ \"./src/components/ShoppingCart/createShoppingCart.js\");\n\n\n\n\n\n\n\nconst ShoppingCart = () => {\n\n    const area = document.querySelector(\"main\");\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCart;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n    Object(_toManipulateDOM_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__[\"removePrevievCartModal\"])();\n\n    Object(_createShoppingCart__WEBPACK_IMPORTED_MODULE_3__[\"createShoppingCart\"])(cartContent)\n}\n\n                \n\n//# sourceURL=webpack:///./src/components/ShoppingCart/ShoppingCart.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons1.js":
/*!******************************************************************************!*\
  !*** ./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons1.js ***!
  \******************************************************************************/
/*! exports provided: cartButtons1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartButtons1\", function() { return cartButtons1; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst cartButtons1 = (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"zaloguj się\")(\"#/logowanie\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"lub\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"zarejestruj się\")(\"#/rejestracja\"),\n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-buttons1\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons1.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons2.js":
/*!******************************************************************************!*\
  !*** ./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons2.js ***!
  \******************************************************************************/
/*! exports provided: cartButtons2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartButtons2\", function() { return cartButtons2; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst cartButtons2 = (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"kontynuuj zakupy\")(\"#/\"),            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"następny krok\")(\"#/wybór metody\"),\n       )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-buttons2\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons2.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/componentsOfShoppingCart/cartHeader.js":
/*!****************************************************************************!*\
  !*** ./src/components/ShoppingCart/componentsOfShoppingCart/cartHeader.js ***!
  \****************************************************************************/
/*! exports provided: cartHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartHeader\", function() { return cartHeader; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst cartHeader = (cartContent) => (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"title\")(\"Twój Koszyk\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(`(${cartContent.length})`),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"Zarządzaj swoimi zakupami lub złóz zamówienie\")\n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-header\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/componentsOfShoppingCart/cartHeader.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/componentsOfShoppingCart/cartListWithOrders.js":
/*!************************************************************************************!*\
  !*** ./src/components/ShoppingCart/componentsOfShoppingCart/cartListWithOrders.js ***!
  \************************************************************************************/
/*! exports provided: cartListWithOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartListWithOrders\", function() { return cartListWithOrders; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _showContentOf_createElementWithCartContent_createElementWithShoppingCartContent_createElementWithShoppingCartContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent.js\");\n\n\n\n\n\n\nconst cartListWithOrders = (cartContent) => (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_showContentOf_createElementWithCartContent_createElementWithShoppingCartContent_createElementWithShoppingCartContent__WEBPACK_IMPORTED_MODULE_2__[\"createElementWithShoppingCartContent\"])(cartContent)\n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-listWithOrders\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/componentsOfShoppingCart/cartListWithOrders.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/componentsOfShoppingCart/cartProgressBar.js":
/*!*********************************************************************************!*\
  !*** ./src/components/ShoppingCart/componentsOfShoppingCart/cartProgressBar.js ***!
  \*********************************************************************************/
/*! exports provided: cartProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartProgressBar\", function() { return cartProgressBar; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst cartProgressBar = (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDivWithinElement\"])(\"\")(\"1\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDivWithinElement\"])(\"\")(\"2\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDivWithinElement\"])(\"\")(\"3\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDivWithinElement\"])(\"\")(\"4\"),\n     )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-progressBar\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/componentsOfShoppingCart/cartProgressBar.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/componentsOfShoppingCart/cartRecapCosts.js":
/*!********************************************************************************!*\
  !*** ./src/components/ShoppingCart/componentsOfShoppingCart/cartRecapCosts.js ***!
  \********************************************************************************/
/*! exports provided: cartRecapCosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartRecapCosts\", function() { return cartRecapCosts; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_valueOfEntireCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AddToCartAndOpenPreviev/valueOfEntireCart */ \"./src/components/AddToCartAndOpenPreviev/valueOfEntireCart.js\");\n\n\n\n\n\n\nconst cartRecapCosts = (cartContent) => (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"razem\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"sum\")(`${Object(_AddToCartAndOpenPreviev_valueOfEntireCart__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cartContent)} $`),  \n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-recapCosts\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/componentsOfShoppingCart/cartRecapCosts.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/createShoppingCart.js":
/*!***********************************************************!*\
  !*** ./src/components/ShoppingCart/createShoppingCart.js ***!
  \***********************************************************/
/*! exports provided: createShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createShoppingCart\", function() { return createShoppingCart; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _componentsOfShoppingCart_cartProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsOfShoppingCart/cartProgressBar */ \"./src/components/ShoppingCart/componentsOfShoppingCart/cartProgressBar.js\");\n/* harmony import */ var _componentsOfShoppingCart_cartHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsOfShoppingCart/cartHeader */ \"./src/components/ShoppingCart/componentsOfShoppingCart/cartHeader.js\");\n/* harmony import */ var _showContentOf_cartColumnTitles_shoppingCartColumnTitles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../showContentOf/cartColumnTitles/shoppingCartColumnTitles */ \"./src/components/showContentOf/cartColumnTitles/shoppingCartColumnTitles.js\");\n/* harmony import */ var _componentsOfShoppingCart_cartRecapCosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentsOfShoppingCart/cartRecapCosts */ \"./src/components/ShoppingCart/componentsOfShoppingCart/cartRecapCosts.js\");\n/* harmony import */ var _componentsOfShoppingCart_cartButtons1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentsOfShoppingCart/cartButtons1 */ \"./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons1.js\");\n/* harmony import */ var _componentsOfShoppingCart_cartButtons2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentsOfShoppingCart/cartButtons2 */ \"./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons2.js\");\n/* harmony import */ var _componentsOfShoppingCart_cartListWithOrders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentsOfShoppingCart/cartListWithOrders */ \"./src/components/ShoppingCart/componentsOfShoppingCart/cartListWithOrders.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst createShoppingCart = (cartContent) => {\n\n    const area = document.querySelector(\"main\");\n\n    const mainWrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(\n            _componentsOfShoppingCart_cartProgressBar__WEBPACK_IMPORTED_MODULE_2__[\"cartProgressBar\"],\n            Object(_componentsOfShoppingCart_cartHeader__WEBPACK_IMPORTED_MODULE_3__[\"cartHeader\"])(cartContent),\n            _showContentOf_cartColumnTitles_shoppingCartColumnTitles__WEBPACK_IMPORTED_MODULE_4__[\"shoppingCartColumnTitles\"], \n            Object(_componentsOfShoppingCart_cartListWithOrders__WEBPACK_IMPORTED_MODULE_8__[\"cartListWithOrders\"])(cartContent), \n            Object(_componentsOfShoppingCart_cartRecapCosts__WEBPACK_IMPORTED_MODULE_5__[\"cartRecapCosts\"])(cartContent),   \n            _componentsOfShoppingCart_cartButtons1__WEBPACK_IMPORTED_MODULE_6__[\"cartButtons1\"],              \n            _componentsOfShoppingCart_cartButtons2__WEBPACK_IMPORTED_MODULE_7__[\"cartButtons2\"]\n       )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"shopping-cart\"));\n\n  area.appendChild(mainWrapper);\n}\n\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/createShoppingCart.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _responseCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responseCreator */ \"./src/components/getBeersFromAPI/responseCreator.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/router */ \"./src/components/router/router.js\");\n/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/loader */ \"./src/components/getBeersFromAPI/loader/loader.js\");\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\", () => { \n\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchBeginAction\"])());\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_responseCreator__WEBPACK_IMPORTED_MODULE_2__[\"createResponse\"])());\n \n    Object(_router_router__WEBPACK_IMPORTED_MODULE_3__[\"router\"])() \n    Object(_loader_loader__WEBPACK_IMPORTED_MODULE_4__[\"insertLoader\"])()\n  });\n\n  \n\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/loadPage.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/loader/loader.js":
/*!*********************************************************!*\
  !*** ./src/components/getBeersFromAPI/loader/loader.js ***!
  \*********************************************************/
/*! exports provided: insertLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertLoader\", function() { return insertLoader; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\nconst insertLoader = () => {\n\n    const header = document.querySelector(\"header\");\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"loader\")(\"ładowanie...\")(header);\n}\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/loader/loader.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/loader/removeLoader.js":
/*!***************************************************************!*\
  !*** ./src/components/getBeersFromAPI/loader/removeLoader.js ***!
  \***************************************************************/
/*! exports provided: removeLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLoader\", function() { return removeLoader; });\n\n\nconst removeLoader = () => {\n\n    const header = document.querySelector(\"header\");\n\n    header.removeChild(header.lastChild);\n}\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/loader/removeLoader.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/responseCreator.js":
/*!***********************************************************!*\
  !*** ./src/components/getBeersFromAPI/responseCreator.js ***!
  \***********************************************************/
/*! exports provided: createResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createResponse\", function() { return createResponse; });\n/* harmony import */ var _doFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doFetch */ \"./src/components/getBeersFromAPI/doFetch.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OfferOnPage/OfferOnPage */ \"./src/components/OfferOnPage/OfferOnPage.js\");\n/* harmony import */ var _loader_removeLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/removeLoader */ \"./src/components/getBeersFromAPI/loader/removeLoader.js\");\n\n\n\n\n\n\n\n const createResponse = () => {\n\n    return async (dispatch) => {\n        \n        const beers = await Object(_doFetch__WEBPACK_IMPORTED_MODULE_0__[\"doFetch\"])().catch(err => dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchFailAction\"])(err)));\n        \n         if(beers){ \n            dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchSuccessAction\"])(beers));\n            Object(_loader_removeLoader__WEBPACK_IMPORTED_MODULE_3__[\"removeLoader\"])();\n            Object(_OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_2__[\"OfferOnPage\"])();\n         }\n    }\n }\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/responseCreator.js?");

/***/ }),

/***/ "./src/components/groupBeersByLabels/groupBeersByLabels.js":
/*!*****************************************************************!*\
  !*** ./src/components/groupBeersByLabels/groupBeersByLabels.js ***!
  \*****************************************************************/
/*! exports provided: groupBeersByLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupBeersByLabels\", function() { return groupBeersByLabels; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _morphisms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morphisms */ \"./src/components/groupBeersByLabels/morphisms.js\");\n\n\n\n\n\n\nconst groupBeersByLabels = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(\n                Object(_morphisms__WEBPACK_IMPORTED_MODULE_1__[\"groupObjectsBy\"])(\"name\"),\n                _morphisms__WEBPACK_IMPORTED_MODULE_1__[\"placeObjectValuesInArray\"]\n            )\n\n\n//# sourceURL=webpack:///./src/components/groupBeersByLabels/groupBeersByLabels.js?");

/***/ }),

/***/ "./src/components/groupBeersByLabels/morphisms.js":
/*!********************************************************!*\
  !*** ./src/components/groupBeersByLabels/morphisms.js ***!
  \********************************************************/
/*! exports provided: groupObjectsBy, placeObjectValuesInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groupObjectsBy\", function() { return groupObjectsBy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"placeObjectValuesInArray\", function() { return placeObjectValuesInArray; });\n\nconst groupObjectsBy = (key) => (arr) => {\n          return arr.reduce((acc, obj) =>{\n                        acc[obj[key]] = (acc[obj[key]] || []).concat(obj);\n                        return acc; \n                    }, {})\n } \n\n\nconst placeObjectValuesInArray = (obj) => Object.values(obj);\n\n\n//# sourceURL=webpack:///./src/components/groupBeersByLabels/morphisms.js?");

/***/ }),

/***/ "./src/components/handlersToShopping/handlersToShopping.js":
/*!*****************************************************************!*\
  !*** ./src/components/handlersToShopping/handlersToShopping.js ***!
  \*****************************************************************/
/*! exports provided: dispatchAddToCart, dispatchRemoveFromCart, dispatchAddToFavour, dispatchRemoveFromFavorite, dispatchAddToCurrentBeer, dispatchSetCurrentBeer, dispatchRmvWholeTypeFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchAddToCart\", function() { return dispatchAddToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchRemoveFromCart\", function() { return dispatchRemoveFromCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchAddToFavour\", function() { return dispatchAddToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchRemoveFromFavorite\", function() { return dispatchRemoveFromFavorite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchAddToCurrentBeer\", function() { return dispatchAddToCurrentBeer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchSetCurrentBeer\", function() { return dispatchSetCurrentBeer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchRmvWholeTypeFromCart\", function() { return dispatchRmvWholeTypeFromCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n\n\n\n\nconst dispatchAddToCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAction\"])(beer));\n\nconst dispatchRemoveFromCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"removeFromCartAction\"])(beer));\n\nconst dispatchAddToFavour = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"addToFavoriteAction\"])(beer));\n\nconst dispatchRemoveFromFavorite = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"removeFromFavoriteAction\"])(beer));\n\nconst dispatchAddToCurrentBeer = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentBeerAction\"])(beer));\n\nconst dispatchSetCurrentBeer = (beer) =>  _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentBeerAction\"])(beer))\n\nconst dispatchRmvWholeTypeFromCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"rmvWholeTypeFromCartAction\"])(beer));\n\n\n\n\n//# sourceURL=webpack:///./src/components/handlersToShopping/handlersToShopping.js?");

/***/ }),

/***/ "./src/components/router/resolveRoute.js":
/*!***********************************************!*\
  !*** ./src/components/router/resolveRoute.js ***!
  \***********************************************/
/*! exports provided: resolveRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveRoute\", function() { return resolveRoute; });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/components/router/routes.js\");\n\n\n\nconst resolveRoute = (route) => { \n   \n        if(route.includes(\"opis\")){  \n            return Object(_routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"])()[\"/opis\"]\n        }\n        else if(Object(_routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"])()[route]){\n            return Object(_routes__WEBPACK_IMPORTED_MODULE_0__[\"routes\"])()[route]\n        }    \n };\n\n//# sourceURL=webpack:///./src/components/router/resolveRoute.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OfferOnPage/OfferOnPage */ \"./src/components/OfferOnPage/OfferOnPage.js\");\n/* harmony import */ var _BeerDescription_BeerDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BeerDescription/BeerDescription */ \"./src/components/BeerDescription/BeerDescription.js\");\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n/* harmony import */ var _RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RegistrationForm/RegistrationForm */ \"./src/components/RegistrationForm/RegistrationForm.js\");\n/* harmony import */ var _FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FavoriteCart/FavoriteCart */ \"./src/components/FavoriteCart/FavoriteCart.js\");\n\n\n\n\n\n\n\n\n\nconst routes = () => ({\n\n                \"/\" : () => Object(_OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__[\"OfferOnPage\"])(), \n                \"/opis\" : () => Object(_BeerDescription_BeerDescription__WEBPACK_IMPORTED_MODULE_1__[\"BeerDescription\"])(),\n                \"/koszyk\" : () => Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__[\"ShoppingCart\"])(),\n                \"/rejestracja\": () => Object(_RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__[\"RegistrationForm\"])(),\n                \"/ulubione\" : () => Object(_FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_4__[\"FavoriteCart\"])()\n            });\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/router/routes.js?");

/***/ }),

/***/ "./src/components/showContentOf/buttonsToChangeOrderQuantity.js":
/*!**********************************************************************!*\
  !*** ./src/components/showContentOf/buttonsToChangeOrderQuantity.js ***!
  \**********************************************************************/
/*! exports provided: createButtonToIncreaseOrder, createButtonToDecreaseOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToIncreaseOrder\", function() { return createButtonToIncreaseOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToDecreaseOrder\", function() { return createButtonToDecreaseOrder; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\nconst createButtonToIncreaseOrder = (cl) => (fn) => (beer) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(\"+\"),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(fn)(beer)\n        )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n  return element;\n}\n\n\n\n\nconst createButtonToDecreaseOrder = (cl) => (fn) => (beer) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(\"-\"),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(fn)(beer)\n        )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/showContentOf/buttonsToChangeOrderQuantity.js?");

/***/ }),

/***/ "./src/components/showContentOf/cartColumnTitles/cartColumnTitles.js":
/*!***************************************************************************!*\
  !*** ./src/components/showContentOf/cartColumnTitles/cartColumnTitles.js ***!
  \***************************************************************************/
/*! exports provided: cartColumnTitles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartColumnTitles\", function() { return cartColumnTitles; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst cartColumnTitles = (clss) =>  (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"usuń\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"produkt\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"cena\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"ilość\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"wartość\"),\n     )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(clss))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n//# sourceURL=webpack:///./src/components/showContentOf/cartColumnTitles/cartColumnTitles.js?");

/***/ }),

/***/ "./src/components/showContentOf/cartColumnTitles/favoriteCartColumnTitles.js":
/*!***********************************************************************************!*\
  !*** ./src/components/showContentOf/cartColumnTitles/favoriteCartColumnTitles.js ***!
  \***********************************************************************************/
/*! exports provided: favoriteCartColumnTitles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favoriteCartColumnTitles\", function() { return favoriteCartColumnTitles; });\n/* harmony import */ var _cartColumnTitles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartColumnTitles */ \"./src/components/showContentOf/cartColumnTitles/cartColumnTitles.js\");\n\n\n\nconst favoriteCartColumnTitles = (element) => Object(_cartColumnTitles__WEBPACK_IMPORTED_MODULE_0__[\"cartColumnTitles\"])(\"favoriteCart-columnTitles\")(element);  \n\n//# sourceURL=webpack:///./src/components/showContentOf/cartColumnTitles/favoriteCartColumnTitles.js?");

/***/ }),

/***/ "./src/components/showContentOf/cartColumnTitles/shoppingCartColumnTitles.js":
/*!***********************************************************************************!*\
  !*** ./src/components/showContentOf/cartColumnTitles/shoppingCartColumnTitles.js ***!
  \***********************************************************************************/
/*! exports provided: shoppingCartColumnTitles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shoppingCartColumnTitles\", function() { return shoppingCartColumnTitles; });\n/* harmony import */ var _cartColumnTitles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartColumnTitles */ \"./src/components/showContentOf/cartColumnTitles/cartColumnTitles.js\");\n\n\n\nconst shoppingCartColumnTitles = (element) => Object(_cartColumnTitles__WEBPACK_IMPORTED_MODULE_0__[\"cartColumnTitles\"])(\"shoppingCart-columnTitles\")(element); \n\n\n\n//# sourceURL=webpack:///./src/components/showContentOf/cartColumnTitles/shoppingCartColumnTitles.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev.js":
/*!******************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: addToFavoriteAndUpdateCartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToFavoriteAndUpdateCartView\", function() { return addToFavoriteAndUpdateCartView; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../FavoriteCart/FavoriteCart */ \"./src/components/FavoriteCart/FavoriteCart.js\");\n\n\n\n\nconst addToFavoriteAndUpdateCartView = (beer) =>  {\n\n        Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToFavour\"])(beer);\n        Object(_FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_1__[\"FavoriteCart\"])()\n    }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js":
/*!************************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: createElementWithFavoriteCartContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementWithFavoriteCartContent\", function() { return createElementWithFavoriteCartContent; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttonsToChangeOrderQuantity */ \"./src/components/showContentOf/buttonsToChangeOrderQuantity.js\");\n/* harmony import */ var _groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../groupBeersByLabels/groupBeersByLabels */ \"./src/components/groupBeersByLabels/groupBeersByLabels.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js\");\n/* harmony import */ var _createElementWithFavoriteCartContent_addToFavoriteAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev.js\");\n/* harmony import */ var _createElementWithFavoriteCartContent_rmvFromFavoriteAndUpdateCartView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n const createElementWithFavoriteCartContent = (cartContent) => (element) => {\n       \n       Object(_groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__[\"groupBeersByLabels\"])(cartContent).map(group => {\n\n                const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(   \n                        Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_4__[\"createBtnToRemoveGroupOfBeers\"])(\"remove\")(\"X\")(group[0]),  \n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(group[0].image_url),       \n                        //createSpanElem(\"beerTitle\")(group[0].name),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${group[0].abv} $`),\n                        Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToIncreaseOrder\"])(\"\")(_createElementWithFavoriteCartContent_addToFavoriteAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_6__[\"addToFavoriteAndUpdateCartView\"])(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(group.length),\n                        Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToDecreaseOrder\"])(\"\")(_createElementWithFavoriteCartContent_rmvFromFavoriteAndUpdateCartView__WEBPACK_IMPORTED_MODULE_7__[\"rmvFromFavoriteAndUpdateCartView\"])(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"sum\")(`${Object(_AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(group[0].abv, group.length)} $`)\n                  )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"favoriteCart-content\"))\n\n              element.appendChild(wrapperDiv);\n            })\n\n        return element;\n  }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView.js":
/*!********************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: rmvFromFavoriteAndUpdateCartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvFromFavoriteAndUpdateCartView\", function() { return rmvFromFavoriteAndUpdateCartView; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../FavoriteCart/FavoriteCart */ \"./src/components/FavoriteCart/FavoriteCart.js\");\n\n\n\n\nconst rmvFromFavoriteAndUpdateCartView = (beer) =>  {\n\n        Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchRemoveFromFavorite\"])(beer);\n        Object(_FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_1__[\"FavoriteCart\"])()\n    }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/addToCartAndUpdateCartViev.js":
/*!**************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/addToCartAndUpdateCartViev.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: addToCartAndUpdateCartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndUpdateCartView\", function() { return addToCartAndUpdateCartView; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n\n\n\n\nconst addToCartAndUpdateCartView = (beer) =>  {\n\n        Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToCart\"])(beer);\n        Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__[\"ShoppingCart\"])()\n    }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/addToCartAndUpdateCartViev.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent.js":
/*!************************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: createElementWithShoppingCartContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementWithShoppingCartContent\", function() { return createElementWithShoppingCartContent; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttonsToChangeOrderQuantity */ \"./src/components/showContentOf/buttonsToChangeOrderQuantity.js\");\n/* harmony import */ var _groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../groupBeersByLabels/groupBeersByLabels */ \"./src/components/groupBeersByLabels/groupBeersByLabels.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js\");\n/* harmony import */ var _addToCartAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addToCartAndUpdateCartViev */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/addToCartAndUpdateCartViev.js\");\n/* harmony import */ var _rmvFromCartAndUpdateCartView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rmvFromCartAndUpdateCartView */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js\");\n\n\n\n\n\n\n\n\n\n\n\n const createElementWithShoppingCartContent = (cartContent) => (element) => {\n       \n       Object(_groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__[\"groupBeersByLabels\"])(cartContent).map(group => {\n\n                const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(   \n                        Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_4__[\"createBtnToRemoveGroupOfBeers\"])(\"remove\")(\"X\")(group[0]),  \n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(group[0].image_url),       \n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"beerTitle\")(group[0].name),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${group[0].abv} $`),\n                        Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToIncreaseOrder\"])(\"\")(_addToCartAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_6__[\"addToCartAndUpdateCartView\"])(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(group.length),\n                        Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToDecreaseOrder\"])(\"\")(_rmvFromCartAndUpdateCartView__WEBPACK_IMPORTED_MODULE_7__[\"rmvFromCartAndUpdateCartView\"])(group[0]),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"sum\")(`${Object(_AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(group[0].abv, group.length)} $`)\n                  )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"shoppingCart-content\"))\n\n              element.appendChild(wrapperDiv);\n            })\n\n        return element;\n  }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js":
/*!****************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: rmvFromCartAndUpdateCartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvFromCartAndUpdateCartView\", function() { return rmvFromCartAndUpdateCartView; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n\n\n\n\nconst rmvFromCartAndUpdateCartView = (beer) =>  {\n\n        Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchRemoveFromCart\"])(beer);\n        Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__[\"ShoppingCart\"])()\n    }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js?");

/***/ }),

/***/ "./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js":
/*!*********************************************************************!*\
  !*** ./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js ***!
  \*********************************************************************/
/*! exports provided: rmvGroupOfBeerAndUpdateViev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvGroupOfBeerAndUpdateViev\", function() { return rmvGroupOfBeerAndUpdateViev; });\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n\n\n\n\n\nconst rmvGroupOfBeerAndUpdateViev = (beer) => {\n \n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__[\"dispatchRmvWholeTypeFromCart\"])(beer);\n    Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_0__[\"ShoppingCart\"])();\n}\n\n//# sourceURL=webpack:///./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js":
/*!************************************************************************!*\
  !*** ./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js ***!
  \************************************************************************/
/*! exports provided: clearContentOf, createDiv, createSpanElem, createTitle, createText, createDivWithinElement, createImgElem, createLinkTo, createWrapperDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearContentOf\", function() { return clearContentOf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpanElem\", function() { return createSpanElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTitle\", function() { return createTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createText\", function() { return createText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDivWithinElement\", function() { return createDivWithinElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImgElem\", function() { return createImgElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkTo\", function() { return createLinkTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWrapperDiv\", function() { return createWrapperDiv; });\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\nconst clearContentOf = (el) => { \n\n  while(el.firstChild && el.removeChild(el.firstChild));\n\n};\n\n\n\nconst createDiv = (cl) => { \n\n    const element = document.createElement(\"div\");\n    const elementWithClss =  Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl)(element);\n  return elementWithClss\n } \n\n\n\n\n\nconst createSpanElem = (cl) => (txtContent) => (element) =>{ \n\n    const span = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"span\"));\n        \n      element.appendChild(span);\n    return element\n  }\n\n\nconst createTitle = (cl) => (txtContent) => (element) =>{ \n\n    const h3 = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"h3\"));\n        \n    element.appendChild(h3);\n  return element\n }\n\n\n  const createText = (cl) => (txtContent) => (element) =>{ \n\n    const p = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"p\"));\n    \n      element.appendChild(p);\n   return element;\n  } \n\n\n  const createDivWithinElement = (cl) => (txtContent) => (element) =>{ \n\n    const div = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n       )(createDiv(cl))\n       \n       element.appendChild(div);\n   return element;\n } \n\n\nconst createImgElem = (cl) => (src) => (element) => {\n\n    const img = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setSrc\"])(src),\n      )(document.createElement(\"img\"));\n\n    element.appendChild(img);\n return element;\n}\n\n\n\nconst createLinkTo = (cl) => (txtContent) => (path) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setPath\"])(path),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"a\"));\n\n      \n    element.appendChild(link);\n  return element;\n}\n\n\n\n\nconst createWrapperDiv = (cl) => (...elements) => (element) => {\n\n  const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            ...elements\n      )(createDiv(cl));\n\n    element.appendChild(wrapper);\n  return element;\n} \n\n\n\n       \n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToCreateElements.js":
/*!********************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToCreateElements.js ***!
  \********************************************************************/
/*! exports provided: setClss, setforAtr, setName, setTextContent, setSrc, setOnclickFn, setPath, setType, setValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClss\", function() { return setClss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setforAtr\", function() { return setforAtr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setName\", function() { return setName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTextContent\", function() { return setTextContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSrc\", function() { return setSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOnclickFn\", function() { return setOnclickFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPath\", function() { return setPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setType\", function() { return setType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValue\", function() { return setValue; });\n\nconst setClss = (cl) => (element) => {\n     if(cl){ element.classList.add(cl) };\n   return element;\n}\n\nconst setforAtr = (to) => (element) => {\n    element.for = to;\n  return element;\n}\n\nconst setName = (name) => (element) => {\n    element.name = name;\n  return element;\n}\n\nconst setTextContent = (textContent) => (element) => {\n     element.textContent = textContent;\n   return element;\n}\n\nconst setSrc = (src) => (element) => {\n    element.src = src;\n  return element;\n}\n\nconst setOnclickFn = (fn) => (arg = \"\") => (element) => {\n    element.addEventListener(\"click\", () =>{ arg ?  fn(arg) : fn() });\n return element;\n}\n\nconst setPath = (href) => (element) => {\n    element.href = href;\n return element;\n}\n\nconst setType = (type) => (element) => {\n  element.type = type;\nreturn element;\n}\n\nconst setValue = (value) => (element) => {\n  element.value = value;\nreturn element;\n}\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToCreateElements.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToManipulateDOM.js":
/*!*******************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToManipulateDOM.js ***!
  \*******************************************************************/
/*! exports provided: insertDashesToPath, createBtnAddToFavour, createBtnAddToCart, createBtnToRemoveGroupOfBeers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDashesToPath\", function() { return insertDashesToPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToFavour\", function() { return createBtnAddToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToCart\", function() { return createBtnAddToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnToRemoveGroupOfBeers\", function() { return createBtnToRemoveGroupOfBeers; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AddToCartAndOpenPreviev/addToCartAndOpenPreviev */ \"./src/components/AddToCartAndOpenPreviev/addToCartAndOpenPreviev.js\");\n/* harmony import */ var _showContentOf_rmvGroupOfBeerAndUpdateViev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showContentOf/rmvGroupOfBeerAndUpdateViev */ \"./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js\");\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _FavoriteCart_addToFavorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FavoriteCart/addToFavorite */ \"./src/components/FavoriteCart/addToFavorite.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n//import { clearContentOf } from \"./basisHandlersToManipulateDOM\"\n\n\n\nconst insertDashesToPath = (str) => str.replace(/ /g, \"-\");\n\n\n\nconst createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_5__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setOnclickFn\"])(_FavoriteCart_addToFavorite__WEBPACK_IMPORTED_MODULE_4__[\"addToFavorite\"])(arg)\n       )(document.createElement(\"button\"));\n        \n    element.appendChild(btn);\n  return element;\n}\n\n\nconst createBtnAddToCart = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_5__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setOnclickFn\"])(_AddToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAndOpenPreviev\"])(arg)\n      )(document.createElement(\"button\"));\n\n     element.appendChild(btn);\n  return element;\n}\n\n\n\nconst createBtnToRemoveGroupOfBeers = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_5__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_3__[\"setOnclickFn\"])(_showContentOf_rmvGroupOfBeerAndUpdateViev__WEBPACK_IMPORTED_MODULE_2__[\"rmvGroupOfBeerAndUpdateViev\"])(arg)\n      )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n  return element;\n}\n\n\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/removePrevievCartModal.js":
/*!******************************************************************!*\
  !*** ./src/components/toManipulateDOM/removePrevievCartModal.js ***!
  \******************************************************************/
/*! exports provided: removePrevievCartModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePrevievCartModal\", function() { return removePrevievCartModal; });\n\nconst removePrevievCartModal = () =>{ \n\n    const modal = document.querySelector(\".previevModal\");\n    const page = document.querySelector(\"body\");\n\n    if(modal) page.removeChild(page.lastChild) \n}\n   \n\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/removePrevievCartModal.js?");

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
/*! exports provided: fetchBeginAction, fetchSuccessAction, fetchFailAction, addToCartAction, setCurrentBeerAction, removeFromCartAction, incrOrderAction, decrOrderAction, validationOKaction, NoValidationAction, rmvWholeTypeFromCartAction, addToFavoriteAction, removeFromFavoriteAction, rmvWholeTypeFromFavoriteAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBeginAction\", function() { return fetchBeginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSuccessAction\", function() { return fetchSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFailAction\", function() { return fetchFailAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAction\", function() { return addToCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentBeerAction\", function() { return setCurrentBeerAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromCartAction\", function() { return removeFromCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrOrderAction\", function() { return incrOrderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrOrderAction\", function() { return decrOrderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validationOKaction\", function() { return validationOKaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoValidationAction\", function() { return NoValidationAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvWholeTypeFromCartAction\", function() { return rmvWholeTypeFromCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToFavoriteAction\", function() { return addToFavoriteAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromFavoriteAction\", function() { return removeFromFavoriteAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvWholeTypeFromFavoriteAction\", function() { return rmvWholeTypeFromFavoriteAction; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/manageState/actions.js\");\n\n\n\n\n        \nconst fetchBeginAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN\"]\n})\n\nconst fetchSuccessAction = (payload) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS\"],\n    payload\n})\n\nconst fetchFailAction = (error) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL\"],\n    error\n})\n\nconst addToCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_CART\"],\n    value  \n});\n\nconst setCurrentBeerAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_BEER\"],\n    value\n})\n\nconst removeFromCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_FROM_CART\"],\n    value\n})\n\nconst incrOrderAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"INCR_ORDER\"],\n})\n\nconst decrOrderAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"DECR_ORDER\"]\n})\n\nconst validationOKaction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"VALID\"],\n    value\n})\n\nconst NoValidationAction = (error) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"NOT_VALID\"],\n    error\n})\n\nconst rmvWholeTypeFromCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_TYPE_FROM_CART\"],\n    value\n})\n\nconst addToFavoriteAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_FAVORITE\"],\n    value  \n});\n\n\nconst removeFromFavoriteAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_FROM_FAVORITE\"],\n    value\n})\n\nconst rmvWholeTypeFromFavoriteAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_TYPE_FROM_FAVORITE\"],\n    value\n})\n\n//# sourceURL=webpack:///./src/manageState/actionCreators.js?");

/***/ }),

/***/ "./src/manageState/actions.js":
/*!************************************!*\
  !*** ./src/manageState/actions.js ***!
  \************************************/
/*! exports provided: RMV_FROM_CART, RMV_TYPE_FROM_CART, RMV_TYPE_FROM_FAVORITE, RMV_FROM_FAVORITE, ADD_TO_CART, ADD_TO_FAVORITE, CLEAR_CART, CLEAR_FAVORITE, CURRENT_BEER, FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAIL, INCR_ORDER, DECR_ORDER, VALID, NOT_VALID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_CART\", function() { return RMV_FROM_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_TYPE_FROM_CART\", function() { return RMV_TYPE_FROM_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_TYPE_FROM_FAVORITE\", function() { return RMV_TYPE_FROM_FAVORITE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_FAVORITE\", function() { return RMV_FROM_FAVORITE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_CART\", function() { return ADD_TO_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_FAVORITE\", function() { return ADD_TO_FAVORITE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_CART\", function() { return CLEAR_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_FAVORITE\", function() { return CLEAR_FAVORITE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_BEER\", function() { return CURRENT_BEER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BEGIN\", function() { return FETCH_BEGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUCCESS\", function() { return FETCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FAIL\", function() { return FETCH_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCR_ORDER\", function() { return INCR_ORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECR_ORDER\", function() { return DECR_ORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VALID\", function() { return VALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_VALID\", function() { return NOT_VALID; });\nconst RMV_FROM_CART = \"RMV_FROM_CART\";\nconst RMV_TYPE_FROM_CART = \"RMV_TYPE_FROM_CART\";\nconst RMV_TYPE_FROM_FAVORITE = \"RMV_TYPE_FROM_FAVORITE\";\nconst RMV_FROM_FAVORITE = \"RMV_FROM_FAVORITE\";\nconst ADD_TO_CART = \"ADD_TO_CART\";\nconst ADD_TO_FAVORITE = \"ADD_TO_FAVORITE\";\nconst CLEAR_CART = \"CLEAR_CART\";\nconst CLEAR_FAVORITE = \"CLEAR_FAVORITE\";\nconst CURRENT_BEER = \"CURRENT_BEER\";\nconst FETCH_BEGIN = \"FETCH_BEGIN\";\nconst FETCH_SUCCESS = \"FETCH_SUCCESS\";\nconst FETCH_FAIL = \"FETCH_FAIL\";\nconst INCR_ORDER = \"INCR_ORDER\";\nconst DECR_ORDER = \"DECR_ORDER\";\nconst VALID = \"VALID\";\nconst NOT_VALID = \"NOT_VALID\";\n\n\n\n//# sourceURL=webpack:///./src/manageState/actions.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thunk\", function() { return thunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loggingMiddleware\", function() { return loggingMiddleware; });\n\n\n\n\n\n\nconst thunk = ({dispatch, getState}) => next => action => {\n    \n    if (typeof action === 'function') {\n      return action(dispatch, getState);\n    }\n    return next(action);\n  };\n  \n  \n  \n  \nconst loggingMiddleware = ({getState}) => next => action => {\n\n  console.info('before', getState());\n  console.info('action', action);\n  console.info('after', getState());\n\n  return next(action);\n};\n\n\n\nconst delayMiddleware = ({dispatch, getState}) => next => action => {\n\n  console.info(\">>>>> getState\",getState());\n  console.info('>>>>> action', action);\n\n  return next(action);\n};\n  \n\n//# sourceURL=webpack:///./src/manageState/middlewares.js?");

/***/ }),

/***/ "./src/manageState/reducers/alghoritmsToUseInReducers.js":
/*!***************************************************************!*\
  !*** ./src/manageState/reducers/alghoritmsToUseInReducers.js ***!
  \***************************************************************/
/*! exports provided: removeBeerFromNested, removePos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeBeerFromNested\", function() { return removeBeerFromNested; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePos\", function() { return removePos; });\n\nconst removeBeerFromNested = (cart,beer) => cart.reduce((acc,item) => item[0].name === beer.name ? [...acc,item.slice(1)] : [...acc,item] , [] );\n\n\nconst removePos = (arr) => (beer) => {\n\n                let tab = []; \n                for(let i = 0; i < arr.length; i++ ){\n                if(arr[i].name === beer.name){\n                    arr.splice(i,1);\n                    tab = [...arr]\n                    return tab\n                }\n                }\n            }\n\n//# sourceURL=webpack:///./src/manageState/reducers/alghoritmsToUseInReducers.js?");

/***/ }),

/***/ "./src/manageState/reducers/mainReducer.js":
/*!*************************************************!*\
  !*** ./src/manageState/reducers/mainReducer.js ***!
  \*************************************************/
/*! exports provided: mainReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainReducer\", function() { return mainReducer; });\n/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combineReducers */ \"./src/manageState/combineReducers.js\");\n/* harmony import */ var _reducerToCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducerToCart */ \"./src/manageState/reducers/reducerToCart.js\");\n/* harmony import */ var _reducerToCurrentBeer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducerToCurrentBeer */ \"./src/manageState/reducers/reducerToCurrentBeer.js\");\n/* harmony import */ var _reducerToFavorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducerToFavorite */ \"./src/manageState/reducers/reducerToFavorite.js\");\n/* harmony import */ var _reducerToResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducerToResponse */ \"./src/manageState/reducers/reducerToResponse.js\");\n\n\n\n\n\n\n\n\nconst mainReducer = Object(_combineReducers__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    reducerToResponse: _reducerToResponse__WEBPACK_IMPORTED_MODULE_4__[\"reducerToResponse\"],\n    reducerToFavorite: _reducerToFavorite__WEBPACK_IMPORTED_MODULE_3__[\"reducerToFavorite\"],\n    reducerToCart: _reducerToCart__WEBPACK_IMPORTED_MODULE_1__[\"reducerToCart\"],\n    reducerToCurrentBeer: _reducerToCurrentBeer__WEBPACK_IMPORTED_MODULE_2__[\"reducerToCurrentBeer\"],\n})\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/mainReducer.js?");

/***/ }),

/***/ "./src/manageState/reducers/reducerToCart.js":
/*!***************************************************!*\
  !*** ./src/manageState/reducers/reducerToCart.js ***!
  \***************************************************/
/*! exports provided: reducerToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToCart\", function() { return reducerToCart; });\n/* harmony import */ var _alghoritmsToUseInReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alghoritmsToUseInReducers */ \"./src/manageState/reducers/alghoritmsToUseInReducers.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./src/manageState/actions.js\");\n\n\n\n\nconst initState= [];\n\n\n\n\n\nconst reducerToCart = (state = initState, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TO_CART\"]:\n            return [...state, action.value];\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_FROM_CART\"]: \n            return Object(_alghoritmsToUseInReducers__WEBPACK_IMPORTED_MODULE_0__[\"removePos\"])(state)(action.value)\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_CART\"]:\n             return [];\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_TYPE_FROM_CART\"]:\n             return state.filter((x) => x.name !==  action.value.name )\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/reducerToCart.js?");

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

/***/ "./src/manageState/reducers/reducerToFavorite.js":
/*!*******************************************************!*\
  !*** ./src/manageState/reducers/reducerToFavorite.js ***!
  \*******************************************************/
/*! exports provided: reducerToFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToFavorite\", function() { return reducerToFavorite; });\n/* harmony import */ var _alghoritmsToUseInReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alghoritmsToUseInReducers */ \"./src/manageState/reducers/alghoritmsToUseInReducers.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./src/manageState/actions.js\");\n\n\n\n\nconst initState = [];\n\n\nconst reducerToFavorite = (state = initState, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TO_FAVORITE\"]:\n            return [...state, action.value];\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_FROM_FAVORITE\"]: \n            return Object(_alghoritmsToUseInReducers__WEBPACK_IMPORTED_MODULE_0__[\"removePos\"])(state)(action.value);\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_TYPE_FROM_FAVORITE\"]:\n            return state.filter((x) => x.name !==  action.value.name )\n        case _actions__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_FAVORITE\"]:\n             return [];\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/manageState/reducers/reducerToFavorite.js?");

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

/***/ "./src/monads/Either/Either.js":
/*!*************************************!*\
  !*** ./src/monads/Either/Either.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right */ \"./src/monads/Either/Right.js\");\n/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left */ \"./src/monads/Either/Left.js\");\n\n\n\n\n\n const Either = (f) => {\n\n                try {\n                    let res = f();\n                    return Object(_Right__WEBPACK_IMPORTED_MODULE_0__[\"Right\"])(res);\n                } catch (e) {\n                    return Object(_Left__WEBPACK_IMPORTED_MODULE_1__[\"Left\"])(e);\n                }\n            }\n\n\n\nEither.of = Either;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Either);\n\n//# sourceURL=webpack:///./src/monads/Either/Either.js?");

/***/ }),

/***/ "./src/monads/Either/Left.js":
/*!***********************************!*\
  !*** ./src/monads/Either/Left.js ***!
  \***********************************/
/*! exports provided: Left */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Left\", function() { return Left; });\n\nconst Left = (v) => ({\n                map: () => Left(v),\n                match: (pattern) => pattern.Left(v),\n                chain: (_) => Left(),\n                valueOf: () => v,\n            });\n\n//# sourceURL=webpack:///./src/monads/Either/Left.js?");

/***/ }),

/***/ "./src/monads/Either/Right.js":
/*!************************************!*\
  !*** ./src/monads/Either/Right.js ***!
  \************************************/
/*! exports provided: Right */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return Right; });\n\nconst Right = (v) => ({\n    \n                map: (f) => Right(f(v)),\n                match: (pattern) => pattern.Right(v),\n                chain: (f) => f(v),\n                valueOf: () => v,\n            });\n\n//# sourceURL=webpack:///./src/monads/Either/Right.js?");

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
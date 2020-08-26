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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/font-awesome/css/font-awesome.min.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/font-awesome/css/font-awesome.min.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.eot?v=4.7.0 */ \"./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.eot */ \"./node_modules/font-awesome/fonts/fontawesome-webfont.eot\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.woff2?v=4.7.0 */ \"./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.woff?v=4.7.0 */ \"./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.ttf?v=4.7.0 */ \"./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../fonts/fontawesome-webfont.svg?v=4.7.0 */ \"./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___, { hash: \"?#iefix&v=4.7.0\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___, { hash: \"#fontawesomeregular\" });\n// Module\nexports.push([module.i, \"/*!\\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\\n */@font-face{font-family:'FontAwesome';src:url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");src:url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'),url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff2'),url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff'),url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('truetype'),url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\\\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\\\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\\\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\\\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\\\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\\\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\\\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\\\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\\\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\\\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\\\"\\\\f000\\\"}.fa-music:before{content:\\\"\\\\f001\\\"}.fa-search:before{content:\\\"\\\\f002\\\"}.fa-envelope-o:before{content:\\\"\\\\f003\\\"}.fa-heart:before{content:\\\"\\\\f004\\\"}.fa-star:before{content:\\\"\\\\f005\\\"}.fa-star-o:before{content:\\\"\\\\f006\\\"}.fa-user:before{content:\\\"\\\\f007\\\"}.fa-film:before{content:\\\"\\\\f008\\\"}.fa-th-large:before{content:\\\"\\\\f009\\\"}.fa-th:before{content:\\\"\\\\f00a\\\"}.fa-th-list:before{content:\\\"\\\\f00b\\\"}.fa-check:before{content:\\\"\\\\f00c\\\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\\\"\\\\f00d\\\"}.fa-search-plus:before{content:\\\"\\\\f00e\\\"}.fa-search-minus:before{content:\\\"\\\\f010\\\"}.fa-power-off:before{content:\\\"\\\\f011\\\"}.fa-signal:before{content:\\\"\\\\f012\\\"}.fa-gear:before,.fa-cog:before{content:\\\"\\\\f013\\\"}.fa-trash-o:before{content:\\\"\\\\f014\\\"}.fa-home:before{content:\\\"\\\\f015\\\"}.fa-file-o:before{content:\\\"\\\\f016\\\"}.fa-clock-o:before{content:\\\"\\\\f017\\\"}.fa-road:before{content:\\\"\\\\f018\\\"}.fa-download:before{content:\\\"\\\\f019\\\"}.fa-arrow-circle-o-down:before{content:\\\"\\\\f01a\\\"}.fa-arrow-circle-o-up:before{content:\\\"\\\\f01b\\\"}.fa-inbox:before{content:\\\"\\\\f01c\\\"}.fa-play-circle-o:before{content:\\\"\\\\f01d\\\"}.fa-rotate-right:before,.fa-repeat:before{content:\\\"\\\\f01e\\\"}.fa-refresh:before{content:\\\"\\\\f021\\\"}.fa-list-alt:before{content:\\\"\\\\f022\\\"}.fa-lock:before{content:\\\"\\\\f023\\\"}.fa-flag:before{content:\\\"\\\\f024\\\"}.fa-headphones:before{content:\\\"\\\\f025\\\"}.fa-volume-off:before{content:\\\"\\\\f026\\\"}.fa-volume-down:before{content:\\\"\\\\f027\\\"}.fa-volume-up:before{content:\\\"\\\\f028\\\"}.fa-qrcode:before{content:\\\"\\\\f029\\\"}.fa-barcode:before{content:\\\"\\\\f02a\\\"}.fa-tag:before{content:\\\"\\\\f02b\\\"}.fa-tags:before{content:\\\"\\\\f02c\\\"}.fa-book:before{content:\\\"\\\\f02d\\\"}.fa-bookmark:before{content:\\\"\\\\f02e\\\"}.fa-print:before{content:\\\"\\\\f02f\\\"}.fa-camera:before{content:\\\"\\\\f030\\\"}.fa-font:before{content:\\\"\\\\f031\\\"}.fa-bold:before{content:\\\"\\\\f032\\\"}.fa-italic:before{content:\\\"\\\\f033\\\"}.fa-text-height:before{content:\\\"\\\\f034\\\"}.fa-text-width:before{content:\\\"\\\\f035\\\"}.fa-align-left:before{content:\\\"\\\\f036\\\"}.fa-align-center:before{content:\\\"\\\\f037\\\"}.fa-align-right:before{content:\\\"\\\\f038\\\"}.fa-align-justify:before{content:\\\"\\\\f039\\\"}.fa-list:before{content:\\\"\\\\f03a\\\"}.fa-dedent:before,.fa-outdent:before{content:\\\"\\\\f03b\\\"}.fa-indent:before{content:\\\"\\\\f03c\\\"}.fa-video-camera:before{content:\\\"\\\\f03d\\\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\\\"\\\\f03e\\\"}.fa-pencil:before{content:\\\"\\\\f040\\\"}.fa-map-marker:before{content:\\\"\\\\f041\\\"}.fa-adjust:before{content:\\\"\\\\f042\\\"}.fa-tint:before{content:\\\"\\\\f043\\\"}.fa-edit:before,.fa-pencil-square-o:before{content:\\\"\\\\f044\\\"}.fa-share-square-o:before{content:\\\"\\\\f045\\\"}.fa-check-square-o:before{content:\\\"\\\\f046\\\"}.fa-arrows:before{content:\\\"\\\\f047\\\"}.fa-step-backward:before{content:\\\"\\\\f048\\\"}.fa-fast-backward:before{content:\\\"\\\\f049\\\"}.fa-backward:before{content:\\\"\\\\f04a\\\"}.fa-play:before{content:\\\"\\\\f04b\\\"}.fa-pause:before{content:\\\"\\\\f04c\\\"}.fa-stop:before{content:\\\"\\\\f04d\\\"}.fa-forward:before{content:\\\"\\\\f04e\\\"}.fa-fast-forward:before{content:\\\"\\\\f050\\\"}.fa-step-forward:before{content:\\\"\\\\f051\\\"}.fa-eject:before{content:\\\"\\\\f052\\\"}.fa-chevron-left:before{content:\\\"\\\\f053\\\"}.fa-chevron-right:before{content:\\\"\\\\f054\\\"}.fa-plus-circle:before{content:\\\"\\\\f055\\\"}.fa-minus-circle:before{content:\\\"\\\\f056\\\"}.fa-times-circle:before{content:\\\"\\\\f057\\\"}.fa-check-circle:before{content:\\\"\\\\f058\\\"}.fa-question-circle:before{content:\\\"\\\\f059\\\"}.fa-info-circle:before{content:\\\"\\\\f05a\\\"}.fa-crosshairs:before{content:\\\"\\\\f05b\\\"}.fa-times-circle-o:before{content:\\\"\\\\f05c\\\"}.fa-check-circle-o:before{content:\\\"\\\\f05d\\\"}.fa-ban:before{content:\\\"\\\\f05e\\\"}.fa-arrow-left:before{content:\\\"\\\\f060\\\"}.fa-arrow-right:before{content:\\\"\\\\f061\\\"}.fa-arrow-up:before{content:\\\"\\\\f062\\\"}.fa-arrow-down:before{content:\\\"\\\\f063\\\"}.fa-mail-forward:before,.fa-share:before{content:\\\"\\\\f064\\\"}.fa-expand:before{content:\\\"\\\\f065\\\"}.fa-compress:before{content:\\\"\\\\f066\\\"}.fa-plus:before{content:\\\"\\\\f067\\\"}.fa-minus:before{content:\\\"\\\\f068\\\"}.fa-asterisk:before{content:\\\"\\\\f069\\\"}.fa-exclamation-circle:before{content:\\\"\\\\f06a\\\"}.fa-gift:before{content:\\\"\\\\f06b\\\"}.fa-leaf:before{content:\\\"\\\\f06c\\\"}.fa-fire:before{content:\\\"\\\\f06d\\\"}.fa-eye:before{content:\\\"\\\\f06e\\\"}.fa-eye-slash:before{content:\\\"\\\\f070\\\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\\\"\\\\f071\\\"}.fa-plane:before{content:\\\"\\\\f072\\\"}.fa-calendar:before{content:\\\"\\\\f073\\\"}.fa-random:before{content:\\\"\\\\f074\\\"}.fa-comment:before{content:\\\"\\\\f075\\\"}.fa-magnet:before{content:\\\"\\\\f076\\\"}.fa-chevron-up:before{content:\\\"\\\\f077\\\"}.fa-chevron-down:before{content:\\\"\\\\f078\\\"}.fa-retweet:before{content:\\\"\\\\f079\\\"}.fa-shopping-cart:before{content:\\\"\\\\f07a\\\"}.fa-folder:before{content:\\\"\\\\f07b\\\"}.fa-folder-open:before{content:\\\"\\\\f07c\\\"}.fa-arrows-v:before{content:\\\"\\\\f07d\\\"}.fa-arrows-h:before{content:\\\"\\\\f07e\\\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\\\"\\\\f080\\\"}.fa-twitter-square:before{content:\\\"\\\\f081\\\"}.fa-facebook-square:before{content:\\\"\\\\f082\\\"}.fa-camera-retro:before{content:\\\"\\\\f083\\\"}.fa-key:before{content:\\\"\\\\f084\\\"}.fa-gears:before,.fa-cogs:before{content:\\\"\\\\f085\\\"}.fa-comments:before{content:\\\"\\\\f086\\\"}.fa-thumbs-o-up:before{content:\\\"\\\\f087\\\"}.fa-thumbs-o-down:before{content:\\\"\\\\f088\\\"}.fa-star-half:before{content:\\\"\\\\f089\\\"}.fa-heart-o:before{content:\\\"\\\\f08a\\\"}.fa-sign-out:before{content:\\\"\\\\f08b\\\"}.fa-linkedin-square:before{content:\\\"\\\\f08c\\\"}.fa-thumb-tack:before{content:\\\"\\\\f08d\\\"}.fa-external-link:before{content:\\\"\\\\f08e\\\"}.fa-sign-in:before{content:\\\"\\\\f090\\\"}.fa-trophy:before{content:\\\"\\\\f091\\\"}.fa-github-square:before{content:\\\"\\\\f092\\\"}.fa-upload:before{content:\\\"\\\\f093\\\"}.fa-lemon-o:before{content:\\\"\\\\f094\\\"}.fa-phone:before{content:\\\"\\\\f095\\\"}.fa-square-o:before{content:\\\"\\\\f096\\\"}.fa-bookmark-o:before{content:\\\"\\\\f097\\\"}.fa-phone-square:before{content:\\\"\\\\f098\\\"}.fa-twitter:before{content:\\\"\\\\f099\\\"}.fa-facebook-f:before,.fa-facebook:before{content:\\\"\\\\f09a\\\"}.fa-github:before{content:\\\"\\\\f09b\\\"}.fa-unlock:before{content:\\\"\\\\f09c\\\"}.fa-credit-card:before{content:\\\"\\\\f09d\\\"}.fa-feed:before,.fa-rss:before{content:\\\"\\\\f09e\\\"}.fa-hdd-o:before{content:\\\"\\\\f0a0\\\"}.fa-bullhorn:before{content:\\\"\\\\f0a1\\\"}.fa-bell:before{content:\\\"\\\\f0f3\\\"}.fa-certificate:before{content:\\\"\\\\f0a3\\\"}.fa-hand-o-right:before{content:\\\"\\\\f0a4\\\"}.fa-hand-o-left:before{content:\\\"\\\\f0a5\\\"}.fa-hand-o-up:before{content:\\\"\\\\f0a6\\\"}.fa-hand-o-down:before{content:\\\"\\\\f0a7\\\"}.fa-arrow-circle-left:before{content:\\\"\\\\f0a8\\\"}.fa-arrow-circle-right:before{content:\\\"\\\\f0a9\\\"}.fa-arrow-circle-up:before{content:\\\"\\\\f0aa\\\"}.fa-arrow-circle-down:before{content:\\\"\\\\f0ab\\\"}.fa-globe:before{content:\\\"\\\\f0ac\\\"}.fa-wrench:before{content:\\\"\\\\f0ad\\\"}.fa-tasks:before{content:\\\"\\\\f0ae\\\"}.fa-filter:before{content:\\\"\\\\f0b0\\\"}.fa-briefcase:before{content:\\\"\\\\f0b1\\\"}.fa-arrows-alt:before{content:\\\"\\\\f0b2\\\"}.fa-group:before,.fa-users:before{content:\\\"\\\\f0c0\\\"}.fa-chain:before,.fa-link:before{content:\\\"\\\\f0c1\\\"}.fa-cloud:before{content:\\\"\\\\f0c2\\\"}.fa-flask:before{content:\\\"\\\\f0c3\\\"}.fa-cut:before,.fa-scissors:before{content:\\\"\\\\f0c4\\\"}.fa-copy:before,.fa-files-o:before{content:\\\"\\\\f0c5\\\"}.fa-paperclip:before{content:\\\"\\\\f0c6\\\"}.fa-save:before,.fa-floppy-o:before{content:\\\"\\\\f0c7\\\"}.fa-square:before{content:\\\"\\\\f0c8\\\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\\\"\\\\f0c9\\\"}.fa-list-ul:before{content:\\\"\\\\f0ca\\\"}.fa-list-ol:before{content:\\\"\\\\f0cb\\\"}.fa-strikethrough:before{content:\\\"\\\\f0cc\\\"}.fa-underline:before{content:\\\"\\\\f0cd\\\"}.fa-table:before{content:\\\"\\\\f0ce\\\"}.fa-magic:before{content:\\\"\\\\f0d0\\\"}.fa-truck:before{content:\\\"\\\\f0d1\\\"}.fa-pinterest:before{content:\\\"\\\\f0d2\\\"}.fa-pinterest-square:before{content:\\\"\\\\f0d3\\\"}.fa-google-plus-square:before{content:\\\"\\\\f0d4\\\"}.fa-google-plus:before{content:\\\"\\\\f0d5\\\"}.fa-money:before{content:\\\"\\\\f0d6\\\"}.fa-caret-down:before{content:\\\"\\\\f0d7\\\"}.fa-caret-up:before{content:\\\"\\\\f0d8\\\"}.fa-caret-left:before{content:\\\"\\\\f0d9\\\"}.fa-caret-right:before{content:\\\"\\\\f0da\\\"}.fa-columns:before{content:\\\"\\\\f0db\\\"}.fa-unsorted:before,.fa-sort:before{content:\\\"\\\\f0dc\\\"}.fa-sort-down:before,.fa-sort-desc:before{content:\\\"\\\\f0dd\\\"}.fa-sort-up:before,.fa-sort-asc:before{content:\\\"\\\\f0de\\\"}.fa-envelope:before{content:\\\"\\\\f0e0\\\"}.fa-linkedin:before{content:\\\"\\\\f0e1\\\"}.fa-rotate-left:before,.fa-undo:before{content:\\\"\\\\f0e2\\\"}.fa-legal:before,.fa-gavel:before{content:\\\"\\\\f0e3\\\"}.fa-dashboard:before,.fa-tachometer:before{content:\\\"\\\\f0e4\\\"}.fa-comment-o:before{content:\\\"\\\\f0e5\\\"}.fa-comments-o:before{content:\\\"\\\\f0e6\\\"}.fa-flash:before,.fa-bolt:before{content:\\\"\\\\f0e7\\\"}.fa-sitemap:before{content:\\\"\\\\f0e8\\\"}.fa-umbrella:before{content:\\\"\\\\f0e9\\\"}.fa-paste:before,.fa-clipboard:before{content:\\\"\\\\f0ea\\\"}.fa-lightbulb-o:before{content:\\\"\\\\f0eb\\\"}.fa-exchange:before{content:\\\"\\\\f0ec\\\"}.fa-cloud-download:before{content:\\\"\\\\f0ed\\\"}.fa-cloud-upload:before{content:\\\"\\\\f0ee\\\"}.fa-user-md:before{content:\\\"\\\\f0f0\\\"}.fa-stethoscope:before{content:\\\"\\\\f0f1\\\"}.fa-suitcase:before{content:\\\"\\\\f0f2\\\"}.fa-bell-o:before{content:\\\"\\\\f0a2\\\"}.fa-coffee:before{content:\\\"\\\\f0f4\\\"}.fa-cutlery:before{content:\\\"\\\\f0f5\\\"}.fa-file-text-o:before{content:\\\"\\\\f0f6\\\"}.fa-building-o:before{content:\\\"\\\\f0f7\\\"}.fa-hospital-o:before{content:\\\"\\\\f0f8\\\"}.fa-ambulance:before{content:\\\"\\\\f0f9\\\"}.fa-medkit:before{content:\\\"\\\\f0fa\\\"}.fa-fighter-jet:before{content:\\\"\\\\f0fb\\\"}.fa-beer:before{content:\\\"\\\\f0fc\\\"}.fa-h-square:before{content:\\\"\\\\f0fd\\\"}.fa-plus-square:before{content:\\\"\\\\f0fe\\\"}.fa-angle-double-left:before{content:\\\"\\\\f100\\\"}.fa-angle-double-right:before{content:\\\"\\\\f101\\\"}.fa-angle-double-up:before{content:\\\"\\\\f102\\\"}.fa-angle-double-down:before{content:\\\"\\\\f103\\\"}.fa-angle-left:before{content:\\\"\\\\f104\\\"}.fa-angle-right:before{content:\\\"\\\\f105\\\"}.fa-angle-up:before{content:\\\"\\\\f106\\\"}.fa-angle-down:before{content:\\\"\\\\f107\\\"}.fa-desktop:before{content:\\\"\\\\f108\\\"}.fa-laptop:before{content:\\\"\\\\f109\\\"}.fa-tablet:before{content:\\\"\\\\f10a\\\"}.fa-mobile-phone:before,.fa-mobile:before{content:\\\"\\\\f10b\\\"}.fa-circle-o:before{content:\\\"\\\\f10c\\\"}.fa-quote-left:before{content:\\\"\\\\f10d\\\"}.fa-quote-right:before{content:\\\"\\\\f10e\\\"}.fa-spinner:before{content:\\\"\\\\f110\\\"}.fa-circle:before{content:\\\"\\\\f111\\\"}.fa-mail-reply:before,.fa-reply:before{content:\\\"\\\\f112\\\"}.fa-github-alt:before{content:\\\"\\\\f113\\\"}.fa-folder-o:before{content:\\\"\\\\f114\\\"}.fa-folder-open-o:before{content:\\\"\\\\f115\\\"}.fa-smile-o:before{content:\\\"\\\\f118\\\"}.fa-frown-o:before{content:\\\"\\\\f119\\\"}.fa-meh-o:before{content:\\\"\\\\f11a\\\"}.fa-gamepad:before{content:\\\"\\\\f11b\\\"}.fa-keyboard-o:before{content:\\\"\\\\f11c\\\"}.fa-flag-o:before{content:\\\"\\\\f11d\\\"}.fa-flag-checkered:before{content:\\\"\\\\f11e\\\"}.fa-terminal:before{content:\\\"\\\\f120\\\"}.fa-code:before{content:\\\"\\\\f121\\\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\\\"\\\\f122\\\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\\\"\\\\f123\\\"}.fa-location-arrow:before{content:\\\"\\\\f124\\\"}.fa-crop:before{content:\\\"\\\\f125\\\"}.fa-code-fork:before{content:\\\"\\\\f126\\\"}.fa-unlink:before,.fa-chain-broken:before{content:\\\"\\\\f127\\\"}.fa-question:before{content:\\\"\\\\f128\\\"}.fa-info:before{content:\\\"\\\\f129\\\"}.fa-exclamation:before{content:\\\"\\\\f12a\\\"}.fa-superscript:before{content:\\\"\\\\f12b\\\"}.fa-subscript:before{content:\\\"\\\\f12c\\\"}.fa-eraser:before{content:\\\"\\\\f12d\\\"}.fa-puzzle-piece:before{content:\\\"\\\\f12e\\\"}.fa-microphone:before{content:\\\"\\\\f130\\\"}.fa-microphone-slash:before{content:\\\"\\\\f131\\\"}.fa-shield:before{content:\\\"\\\\f132\\\"}.fa-calendar-o:before{content:\\\"\\\\f133\\\"}.fa-fire-extinguisher:before{content:\\\"\\\\f134\\\"}.fa-rocket:before{content:\\\"\\\\f135\\\"}.fa-maxcdn:before{content:\\\"\\\\f136\\\"}.fa-chevron-circle-left:before{content:\\\"\\\\f137\\\"}.fa-chevron-circle-right:before{content:\\\"\\\\f138\\\"}.fa-chevron-circle-up:before{content:\\\"\\\\f139\\\"}.fa-chevron-circle-down:before{content:\\\"\\\\f13a\\\"}.fa-html5:before{content:\\\"\\\\f13b\\\"}.fa-css3:before{content:\\\"\\\\f13c\\\"}.fa-anchor:before{content:\\\"\\\\f13d\\\"}.fa-unlock-alt:before{content:\\\"\\\\f13e\\\"}.fa-bullseye:before{content:\\\"\\\\f140\\\"}.fa-ellipsis-h:before{content:\\\"\\\\f141\\\"}.fa-ellipsis-v:before{content:\\\"\\\\f142\\\"}.fa-rss-square:before{content:\\\"\\\\f143\\\"}.fa-play-circle:before{content:\\\"\\\\f144\\\"}.fa-ticket:before{content:\\\"\\\\f145\\\"}.fa-minus-square:before{content:\\\"\\\\f146\\\"}.fa-minus-square-o:before{content:\\\"\\\\f147\\\"}.fa-level-up:before{content:\\\"\\\\f148\\\"}.fa-level-down:before{content:\\\"\\\\f149\\\"}.fa-check-square:before{content:\\\"\\\\f14a\\\"}.fa-pencil-square:before{content:\\\"\\\\f14b\\\"}.fa-external-link-square:before{content:\\\"\\\\f14c\\\"}.fa-share-square:before{content:\\\"\\\\f14d\\\"}.fa-compass:before{content:\\\"\\\\f14e\\\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\\\"\\\\f150\\\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\\\"\\\\f151\\\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\\\"\\\\f152\\\"}.fa-euro:before,.fa-eur:before{content:\\\"\\\\f153\\\"}.fa-gbp:before{content:\\\"\\\\f154\\\"}.fa-dollar:before,.fa-usd:before{content:\\\"\\\\f155\\\"}.fa-rupee:before,.fa-inr:before{content:\\\"\\\\f156\\\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\\\"\\\\f157\\\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\\\"\\\\f158\\\"}.fa-won:before,.fa-krw:before{content:\\\"\\\\f159\\\"}.fa-bitcoin:before,.fa-btc:before{content:\\\"\\\\f15a\\\"}.fa-file:before{content:\\\"\\\\f15b\\\"}.fa-file-text:before{content:\\\"\\\\f15c\\\"}.fa-sort-alpha-asc:before{content:\\\"\\\\f15d\\\"}.fa-sort-alpha-desc:before{content:\\\"\\\\f15e\\\"}.fa-sort-amount-asc:before{content:\\\"\\\\f160\\\"}.fa-sort-amount-desc:before{content:\\\"\\\\f161\\\"}.fa-sort-numeric-asc:before{content:\\\"\\\\f162\\\"}.fa-sort-numeric-desc:before{content:\\\"\\\\f163\\\"}.fa-thumbs-up:before{content:\\\"\\\\f164\\\"}.fa-thumbs-down:before{content:\\\"\\\\f165\\\"}.fa-youtube-square:before{content:\\\"\\\\f166\\\"}.fa-youtube:before{content:\\\"\\\\f167\\\"}.fa-xing:before{content:\\\"\\\\f168\\\"}.fa-xing-square:before{content:\\\"\\\\f169\\\"}.fa-youtube-play:before{content:\\\"\\\\f16a\\\"}.fa-dropbox:before{content:\\\"\\\\f16b\\\"}.fa-stack-overflow:before{content:\\\"\\\\f16c\\\"}.fa-instagram:before{content:\\\"\\\\f16d\\\"}.fa-flickr:before{content:\\\"\\\\f16e\\\"}.fa-adn:before{content:\\\"\\\\f170\\\"}.fa-bitbucket:before{content:\\\"\\\\f171\\\"}.fa-bitbucket-square:before{content:\\\"\\\\f172\\\"}.fa-tumblr:before{content:\\\"\\\\f173\\\"}.fa-tumblr-square:before{content:\\\"\\\\f174\\\"}.fa-long-arrow-down:before{content:\\\"\\\\f175\\\"}.fa-long-arrow-up:before{content:\\\"\\\\f176\\\"}.fa-long-arrow-left:before{content:\\\"\\\\f177\\\"}.fa-long-arrow-right:before{content:\\\"\\\\f178\\\"}.fa-apple:before{content:\\\"\\\\f179\\\"}.fa-windows:before{content:\\\"\\\\f17a\\\"}.fa-android:before{content:\\\"\\\\f17b\\\"}.fa-linux:before{content:\\\"\\\\f17c\\\"}.fa-dribbble:before{content:\\\"\\\\f17d\\\"}.fa-skype:before{content:\\\"\\\\f17e\\\"}.fa-foursquare:before{content:\\\"\\\\f180\\\"}.fa-trello:before{content:\\\"\\\\f181\\\"}.fa-female:before{content:\\\"\\\\f182\\\"}.fa-male:before{content:\\\"\\\\f183\\\"}.fa-gittip:before,.fa-gratipay:before{content:\\\"\\\\f184\\\"}.fa-sun-o:before{content:\\\"\\\\f185\\\"}.fa-moon-o:before{content:\\\"\\\\f186\\\"}.fa-archive:before{content:\\\"\\\\f187\\\"}.fa-bug:before{content:\\\"\\\\f188\\\"}.fa-vk:before{content:\\\"\\\\f189\\\"}.fa-weibo:before{content:\\\"\\\\f18a\\\"}.fa-renren:before{content:\\\"\\\\f18b\\\"}.fa-pagelines:before{content:\\\"\\\\f18c\\\"}.fa-stack-exchange:before{content:\\\"\\\\f18d\\\"}.fa-arrow-circle-o-right:before{content:\\\"\\\\f18e\\\"}.fa-arrow-circle-o-left:before{content:\\\"\\\\f190\\\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\\\"\\\\f191\\\"}.fa-dot-circle-o:before{content:\\\"\\\\f192\\\"}.fa-wheelchair:before{content:\\\"\\\\f193\\\"}.fa-vimeo-square:before{content:\\\"\\\\f194\\\"}.fa-turkish-lira:before,.fa-try:before{content:\\\"\\\\f195\\\"}.fa-plus-square-o:before{content:\\\"\\\\f196\\\"}.fa-space-shuttle:before{content:\\\"\\\\f197\\\"}.fa-slack:before{content:\\\"\\\\f198\\\"}.fa-envelope-square:before{content:\\\"\\\\f199\\\"}.fa-wordpress:before{content:\\\"\\\\f19a\\\"}.fa-openid:before{content:\\\"\\\\f19b\\\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\\\"\\\\f19c\\\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\\\"\\\\f19d\\\"}.fa-yahoo:before{content:\\\"\\\\f19e\\\"}.fa-google:before{content:\\\"\\\\f1a0\\\"}.fa-reddit:before{content:\\\"\\\\f1a1\\\"}.fa-reddit-square:before{content:\\\"\\\\f1a2\\\"}.fa-stumbleupon-circle:before{content:\\\"\\\\f1a3\\\"}.fa-stumbleupon:before{content:\\\"\\\\f1a4\\\"}.fa-delicious:before{content:\\\"\\\\f1a5\\\"}.fa-digg:before{content:\\\"\\\\f1a6\\\"}.fa-pied-piper-pp:before{content:\\\"\\\\f1a7\\\"}.fa-pied-piper-alt:before{content:\\\"\\\\f1a8\\\"}.fa-drupal:before{content:\\\"\\\\f1a9\\\"}.fa-joomla:before{content:\\\"\\\\f1aa\\\"}.fa-language:before{content:\\\"\\\\f1ab\\\"}.fa-fax:before{content:\\\"\\\\f1ac\\\"}.fa-building:before{content:\\\"\\\\f1ad\\\"}.fa-child:before{content:\\\"\\\\f1ae\\\"}.fa-paw:before{content:\\\"\\\\f1b0\\\"}.fa-spoon:before{content:\\\"\\\\f1b1\\\"}.fa-cube:before{content:\\\"\\\\f1b2\\\"}.fa-cubes:before{content:\\\"\\\\f1b3\\\"}.fa-behance:before{content:\\\"\\\\f1b4\\\"}.fa-behance-square:before{content:\\\"\\\\f1b5\\\"}.fa-steam:before{content:\\\"\\\\f1b6\\\"}.fa-steam-square:before{content:\\\"\\\\f1b7\\\"}.fa-recycle:before{content:\\\"\\\\f1b8\\\"}.fa-automobile:before,.fa-car:before{content:\\\"\\\\f1b9\\\"}.fa-cab:before,.fa-taxi:before{content:\\\"\\\\f1ba\\\"}.fa-tree:before{content:\\\"\\\\f1bb\\\"}.fa-spotify:before{content:\\\"\\\\f1bc\\\"}.fa-deviantart:before{content:\\\"\\\\f1bd\\\"}.fa-soundcloud:before{content:\\\"\\\\f1be\\\"}.fa-database:before{content:\\\"\\\\f1c0\\\"}.fa-file-pdf-o:before{content:\\\"\\\\f1c1\\\"}.fa-file-word-o:before{content:\\\"\\\\f1c2\\\"}.fa-file-excel-o:before{content:\\\"\\\\f1c3\\\"}.fa-file-powerpoint-o:before{content:\\\"\\\\f1c4\\\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\\\"\\\\f1c5\\\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\\\"\\\\f1c6\\\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\\\"\\\\f1c7\\\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\\\"\\\\f1c8\\\"}.fa-file-code-o:before{content:\\\"\\\\f1c9\\\"}.fa-vine:before{content:\\\"\\\\f1ca\\\"}.fa-codepen:before{content:\\\"\\\\f1cb\\\"}.fa-jsfiddle:before{content:\\\"\\\\f1cc\\\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\\\"\\\\f1cd\\\"}.fa-circle-o-notch:before{content:\\\"\\\\f1ce\\\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\\\"\\\\f1d0\\\"}.fa-ge:before,.fa-empire:before{content:\\\"\\\\f1d1\\\"}.fa-git-square:before{content:\\\"\\\\f1d2\\\"}.fa-git:before{content:\\\"\\\\f1d3\\\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\\\"\\\\f1d4\\\"}.fa-tencent-weibo:before{content:\\\"\\\\f1d5\\\"}.fa-qq:before{content:\\\"\\\\f1d6\\\"}.fa-wechat:before,.fa-weixin:before{content:\\\"\\\\f1d7\\\"}.fa-send:before,.fa-paper-plane:before{content:\\\"\\\\f1d8\\\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\\\"\\\\f1d9\\\"}.fa-history:before{content:\\\"\\\\f1da\\\"}.fa-circle-thin:before{content:\\\"\\\\f1db\\\"}.fa-header:before{content:\\\"\\\\f1dc\\\"}.fa-paragraph:before{content:\\\"\\\\f1dd\\\"}.fa-sliders:before{content:\\\"\\\\f1de\\\"}.fa-share-alt:before{content:\\\"\\\\f1e0\\\"}.fa-share-alt-square:before{content:\\\"\\\\f1e1\\\"}.fa-bomb:before{content:\\\"\\\\f1e2\\\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\\\"\\\\f1e3\\\"}.fa-tty:before{content:\\\"\\\\f1e4\\\"}.fa-binoculars:before{content:\\\"\\\\f1e5\\\"}.fa-plug:before{content:\\\"\\\\f1e6\\\"}.fa-slideshare:before{content:\\\"\\\\f1e7\\\"}.fa-twitch:before{content:\\\"\\\\f1e8\\\"}.fa-yelp:before{content:\\\"\\\\f1e9\\\"}.fa-newspaper-o:before{content:\\\"\\\\f1ea\\\"}.fa-wifi:before{content:\\\"\\\\f1eb\\\"}.fa-calculator:before{content:\\\"\\\\f1ec\\\"}.fa-paypal:before{content:\\\"\\\\f1ed\\\"}.fa-google-wallet:before{content:\\\"\\\\f1ee\\\"}.fa-cc-visa:before{content:\\\"\\\\f1f0\\\"}.fa-cc-mastercard:before{content:\\\"\\\\f1f1\\\"}.fa-cc-discover:before{content:\\\"\\\\f1f2\\\"}.fa-cc-amex:before{content:\\\"\\\\f1f3\\\"}.fa-cc-paypal:before{content:\\\"\\\\f1f4\\\"}.fa-cc-stripe:before{content:\\\"\\\\f1f5\\\"}.fa-bell-slash:before{content:\\\"\\\\f1f6\\\"}.fa-bell-slash-o:before{content:\\\"\\\\f1f7\\\"}.fa-trash:before{content:\\\"\\\\f1f8\\\"}.fa-copyright:before{content:\\\"\\\\f1f9\\\"}.fa-at:before{content:\\\"\\\\f1fa\\\"}.fa-eyedropper:before{content:\\\"\\\\f1fb\\\"}.fa-paint-brush:before{content:\\\"\\\\f1fc\\\"}.fa-birthday-cake:before{content:\\\"\\\\f1fd\\\"}.fa-area-chart:before{content:\\\"\\\\f1fe\\\"}.fa-pie-chart:before{content:\\\"\\\\f200\\\"}.fa-line-chart:before{content:\\\"\\\\f201\\\"}.fa-lastfm:before{content:\\\"\\\\f202\\\"}.fa-lastfm-square:before{content:\\\"\\\\f203\\\"}.fa-toggle-off:before{content:\\\"\\\\f204\\\"}.fa-toggle-on:before{content:\\\"\\\\f205\\\"}.fa-bicycle:before{content:\\\"\\\\f206\\\"}.fa-bus:before{content:\\\"\\\\f207\\\"}.fa-ioxhost:before{content:\\\"\\\\f208\\\"}.fa-angellist:before{content:\\\"\\\\f209\\\"}.fa-cc:before{content:\\\"\\\\f20a\\\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\\\"\\\\f20b\\\"}.fa-meanpath:before{content:\\\"\\\\f20c\\\"}.fa-buysellads:before{content:\\\"\\\\f20d\\\"}.fa-connectdevelop:before{content:\\\"\\\\f20e\\\"}.fa-dashcube:before{content:\\\"\\\\f210\\\"}.fa-forumbee:before{content:\\\"\\\\f211\\\"}.fa-leanpub:before{content:\\\"\\\\f212\\\"}.fa-sellsy:before{content:\\\"\\\\f213\\\"}.fa-shirtsinbulk:before{content:\\\"\\\\f214\\\"}.fa-simplybuilt:before{content:\\\"\\\\f215\\\"}.fa-skyatlas:before{content:\\\"\\\\f216\\\"}.fa-cart-plus:before{content:\\\"\\\\f217\\\"}.fa-cart-arrow-down:before{content:\\\"\\\\f218\\\"}.fa-diamond:before{content:\\\"\\\\f219\\\"}.fa-ship:before{content:\\\"\\\\f21a\\\"}.fa-user-secret:before{content:\\\"\\\\f21b\\\"}.fa-motorcycle:before{content:\\\"\\\\f21c\\\"}.fa-street-view:before{content:\\\"\\\\f21d\\\"}.fa-heartbeat:before{content:\\\"\\\\f21e\\\"}.fa-venus:before{content:\\\"\\\\f221\\\"}.fa-mars:before{content:\\\"\\\\f222\\\"}.fa-mercury:before{content:\\\"\\\\f223\\\"}.fa-intersex:before,.fa-transgender:before{content:\\\"\\\\f224\\\"}.fa-transgender-alt:before{content:\\\"\\\\f225\\\"}.fa-venus-double:before{content:\\\"\\\\f226\\\"}.fa-mars-double:before{content:\\\"\\\\f227\\\"}.fa-venus-mars:before{content:\\\"\\\\f228\\\"}.fa-mars-stroke:before{content:\\\"\\\\f229\\\"}.fa-mars-stroke-v:before{content:\\\"\\\\f22a\\\"}.fa-mars-stroke-h:before{content:\\\"\\\\f22b\\\"}.fa-neuter:before{content:\\\"\\\\f22c\\\"}.fa-genderless:before{content:\\\"\\\\f22d\\\"}.fa-facebook-official:before{content:\\\"\\\\f230\\\"}.fa-pinterest-p:before{content:\\\"\\\\f231\\\"}.fa-whatsapp:before{content:\\\"\\\\f232\\\"}.fa-server:before{content:\\\"\\\\f233\\\"}.fa-user-plus:before{content:\\\"\\\\f234\\\"}.fa-user-times:before{content:\\\"\\\\f235\\\"}.fa-hotel:before,.fa-bed:before{content:\\\"\\\\f236\\\"}.fa-viacoin:before{content:\\\"\\\\f237\\\"}.fa-train:before{content:\\\"\\\\f238\\\"}.fa-subway:before{content:\\\"\\\\f239\\\"}.fa-medium:before{content:\\\"\\\\f23a\\\"}.fa-yc:before,.fa-y-combinator:before{content:\\\"\\\\f23b\\\"}.fa-optin-monster:before{content:\\\"\\\\f23c\\\"}.fa-opencart:before{content:\\\"\\\\f23d\\\"}.fa-expeditedssl:before{content:\\\"\\\\f23e\\\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\\\"\\\\f240\\\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\\\"\\\\f241\\\"}.fa-battery-2:before,.fa-battery-half:before{content:\\\"\\\\f242\\\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\\\"\\\\f243\\\"}.fa-battery-0:before,.fa-battery-empty:before{content:\\\"\\\\f244\\\"}.fa-mouse-pointer:before{content:\\\"\\\\f245\\\"}.fa-i-cursor:before{content:\\\"\\\\f246\\\"}.fa-object-group:before{content:\\\"\\\\f247\\\"}.fa-object-ungroup:before{content:\\\"\\\\f248\\\"}.fa-sticky-note:before{content:\\\"\\\\f249\\\"}.fa-sticky-note-o:before{content:\\\"\\\\f24a\\\"}.fa-cc-jcb:before{content:\\\"\\\\f24b\\\"}.fa-cc-diners-club:before{content:\\\"\\\\f24c\\\"}.fa-clone:before{content:\\\"\\\\f24d\\\"}.fa-balance-scale:before{content:\\\"\\\\f24e\\\"}.fa-hourglass-o:before{content:\\\"\\\\f250\\\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\\\"\\\\f251\\\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\\\"\\\\f252\\\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\\\"\\\\f253\\\"}.fa-hourglass:before{content:\\\"\\\\f254\\\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\\\"\\\\f255\\\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\\\"\\\\f256\\\"}.fa-hand-scissors-o:before{content:\\\"\\\\f257\\\"}.fa-hand-lizard-o:before{content:\\\"\\\\f258\\\"}.fa-hand-spock-o:before{content:\\\"\\\\f259\\\"}.fa-hand-pointer-o:before{content:\\\"\\\\f25a\\\"}.fa-hand-peace-o:before{content:\\\"\\\\f25b\\\"}.fa-trademark:before{content:\\\"\\\\f25c\\\"}.fa-registered:before{content:\\\"\\\\f25d\\\"}.fa-creative-commons:before{content:\\\"\\\\f25e\\\"}.fa-gg:before{content:\\\"\\\\f260\\\"}.fa-gg-circle:before{content:\\\"\\\\f261\\\"}.fa-tripadvisor:before{content:\\\"\\\\f262\\\"}.fa-odnoklassniki:before{content:\\\"\\\\f263\\\"}.fa-odnoklassniki-square:before{content:\\\"\\\\f264\\\"}.fa-get-pocket:before{content:\\\"\\\\f265\\\"}.fa-wikipedia-w:before{content:\\\"\\\\f266\\\"}.fa-safari:before{content:\\\"\\\\f267\\\"}.fa-chrome:before{content:\\\"\\\\f268\\\"}.fa-firefox:before{content:\\\"\\\\f269\\\"}.fa-opera:before{content:\\\"\\\\f26a\\\"}.fa-internet-explorer:before{content:\\\"\\\\f26b\\\"}.fa-tv:before,.fa-television:before{content:\\\"\\\\f26c\\\"}.fa-contao:before{content:\\\"\\\\f26d\\\"}.fa-500px:before{content:\\\"\\\\f26e\\\"}.fa-amazon:before{content:\\\"\\\\f270\\\"}.fa-calendar-plus-o:before{content:\\\"\\\\f271\\\"}.fa-calendar-minus-o:before{content:\\\"\\\\f272\\\"}.fa-calendar-times-o:before{content:\\\"\\\\f273\\\"}.fa-calendar-check-o:before{content:\\\"\\\\f274\\\"}.fa-industry:before{content:\\\"\\\\f275\\\"}.fa-map-pin:before{content:\\\"\\\\f276\\\"}.fa-map-signs:before{content:\\\"\\\\f277\\\"}.fa-map-o:before{content:\\\"\\\\f278\\\"}.fa-map:before{content:\\\"\\\\f279\\\"}.fa-commenting:before{content:\\\"\\\\f27a\\\"}.fa-commenting-o:before{content:\\\"\\\\f27b\\\"}.fa-houzz:before{content:\\\"\\\\f27c\\\"}.fa-vimeo:before{content:\\\"\\\\f27d\\\"}.fa-black-tie:before{content:\\\"\\\\f27e\\\"}.fa-fonticons:before{content:\\\"\\\\f280\\\"}.fa-reddit-alien:before{content:\\\"\\\\f281\\\"}.fa-edge:before{content:\\\"\\\\f282\\\"}.fa-credit-card-alt:before{content:\\\"\\\\f283\\\"}.fa-codiepie:before{content:\\\"\\\\f284\\\"}.fa-modx:before{content:\\\"\\\\f285\\\"}.fa-fort-awesome:before{content:\\\"\\\\f286\\\"}.fa-usb:before{content:\\\"\\\\f287\\\"}.fa-product-hunt:before{content:\\\"\\\\f288\\\"}.fa-mixcloud:before{content:\\\"\\\\f289\\\"}.fa-scribd:before{content:\\\"\\\\f28a\\\"}.fa-pause-circle:before{content:\\\"\\\\f28b\\\"}.fa-pause-circle-o:before{content:\\\"\\\\f28c\\\"}.fa-stop-circle:before{content:\\\"\\\\f28d\\\"}.fa-stop-circle-o:before{content:\\\"\\\\f28e\\\"}.fa-shopping-bag:before{content:\\\"\\\\f290\\\"}.fa-shopping-basket:before{content:\\\"\\\\f291\\\"}.fa-hashtag:before{content:\\\"\\\\f292\\\"}.fa-bluetooth:before{content:\\\"\\\\f293\\\"}.fa-bluetooth-b:before{content:\\\"\\\\f294\\\"}.fa-percent:before{content:\\\"\\\\f295\\\"}.fa-gitlab:before{content:\\\"\\\\f296\\\"}.fa-wpbeginner:before{content:\\\"\\\\f297\\\"}.fa-wpforms:before{content:\\\"\\\\f298\\\"}.fa-envira:before{content:\\\"\\\\f299\\\"}.fa-universal-access:before{content:\\\"\\\\f29a\\\"}.fa-wheelchair-alt:before{content:\\\"\\\\f29b\\\"}.fa-question-circle-o:before{content:\\\"\\\\f29c\\\"}.fa-blind:before{content:\\\"\\\\f29d\\\"}.fa-audio-description:before{content:\\\"\\\\f29e\\\"}.fa-volume-control-phone:before{content:\\\"\\\\f2a0\\\"}.fa-braille:before{content:\\\"\\\\f2a1\\\"}.fa-assistive-listening-systems:before{content:\\\"\\\\f2a2\\\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\\\"\\\\f2a3\\\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\\\"\\\\f2a4\\\"}.fa-glide:before{content:\\\"\\\\f2a5\\\"}.fa-glide-g:before{content:\\\"\\\\f2a6\\\"}.fa-signing:before,.fa-sign-language:before{content:\\\"\\\\f2a7\\\"}.fa-low-vision:before{content:\\\"\\\\f2a8\\\"}.fa-viadeo:before{content:\\\"\\\\f2a9\\\"}.fa-viadeo-square:before{content:\\\"\\\\f2aa\\\"}.fa-snapchat:before{content:\\\"\\\\f2ab\\\"}.fa-snapchat-ghost:before{content:\\\"\\\\f2ac\\\"}.fa-snapchat-square:before{content:\\\"\\\\f2ad\\\"}.fa-pied-piper:before{content:\\\"\\\\f2ae\\\"}.fa-first-order:before{content:\\\"\\\\f2b0\\\"}.fa-yoast:before{content:\\\"\\\\f2b1\\\"}.fa-themeisle:before{content:\\\"\\\\f2b2\\\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\\\"\\\\f2b3\\\"}.fa-fa:before,.fa-font-awesome:before{content:\\\"\\\\f2b4\\\"}.fa-handshake-o:before{content:\\\"\\\\f2b5\\\"}.fa-envelope-open:before{content:\\\"\\\\f2b6\\\"}.fa-envelope-open-o:before{content:\\\"\\\\f2b7\\\"}.fa-linode:before{content:\\\"\\\\f2b8\\\"}.fa-address-book:before{content:\\\"\\\\f2b9\\\"}.fa-address-book-o:before{content:\\\"\\\\f2ba\\\"}.fa-vcard:before,.fa-address-card:before{content:\\\"\\\\f2bb\\\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\\\"\\\\f2bc\\\"}.fa-user-circle:before{content:\\\"\\\\f2bd\\\"}.fa-user-circle-o:before{content:\\\"\\\\f2be\\\"}.fa-user-o:before{content:\\\"\\\\f2c0\\\"}.fa-id-badge:before{content:\\\"\\\\f2c1\\\"}.fa-drivers-license:before,.fa-id-card:before{content:\\\"\\\\f2c2\\\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\\\"\\\\f2c3\\\"}.fa-quora:before{content:\\\"\\\\f2c4\\\"}.fa-free-code-camp:before{content:\\\"\\\\f2c5\\\"}.fa-telegram:before{content:\\\"\\\\f2c6\\\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\\\"\\\\f2c7\\\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\\\"\\\\f2c8\\\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\\\"\\\\f2c9\\\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\\\"\\\\f2ca\\\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\\\"\\\\f2cb\\\"}.fa-shower:before{content:\\\"\\\\f2cc\\\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\\\"\\\\f2cd\\\"}.fa-podcast:before{content:\\\"\\\\f2ce\\\"}.fa-window-maximize:before{content:\\\"\\\\f2d0\\\"}.fa-window-minimize:before{content:\\\"\\\\f2d1\\\"}.fa-window-restore:before{content:\\\"\\\\f2d2\\\"}.fa-times-rectangle:before,.fa-window-close:before{content:\\\"\\\\f2d3\\\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\\\"\\\\f2d4\\\"}.fa-bandcamp:before{content:\\\"\\\\f2d5\\\"}.fa-grav:before{content:\\\"\\\\f2d6\\\"}.fa-etsy:before{content:\\\"\\\\f2d7\\\"}.fa-imdb:before{content:\\\"\\\\f2d8\\\"}.fa-ravelry:before{content:\\\"\\\\f2d9\\\"}.fa-eercast:before{content:\\\"\\\\f2da\\\"}.fa-microchip:before{content:\\\"\\\\f2db\\\"}.fa-snowflake-o:before{content:\\\"\\\\f2dc\\\"}.fa-superpowers:before{content:\\\"\\\\f2dd\\\"}.fa-wpexplorer:before{content:\\\"\\\\f2de\\\"}.fa-meetup:before{content:\\\"\\\\f2e0\\\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/font-awesome/css/font-awesome.min.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/font-awesome/css/font-awesome.min.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/font-awesome/css/font-awesome.min.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../graphics/green-bubbles-background.jpg */ \"./graphics/green-bubbles-background.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n.wrap {\\n  max-width: 100vw;\\n  min-height: 100vh;\\n  text-transform: uppercase;\\n  background-color: rgba(0, 0, 0, 0.3); }\\n  .wrap::after {\\n    content: \\\"\\\";\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    top: 0;\\n    left: -20%;\\n    bottom: 0;\\n    right: 0;\\n    position: fixed;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    z-index: -1; }\\n\\n@media (min-width: 1920px) {\\n  .wrap::after {\\n    background-repeat: no-repeat;\\n    background-size: cover; } }\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif; }\\n\\nhtml {\\n  font-size: 16px; }\\n\\n@media (max-width: 1283px) {\\n  html {\\n    font-size: 15px; } }\\n\\n@media (min-width: 1920px) {\\n  html {\\n    font-size: 20px; } }\\n\\n/*\\n 1920 x 1080\\n 1366 x 768\\n 768 x 1024\\n 360 x 720\\n 375  x 667\\n 360 x 720\\n */\\n.filters {\\n  position: absolute;\\n  top: 3vh;\\n  right: 5vw;\\n  text-transform: uppercase;\\n  font-weight: normal;\\n  font-size: 1.5rem;\\n  color: #722121;\\n  letter-spacing: 2px;\\n  border: 1px solid green;\\n  background-color: limegreen;\\n  cursor: pointer;\\n  margin: 0 2% 0 2%;\\n  text-decoration: none;\\n  text-align: center;\\n  padding: 0.7%;\\n  border-radius: 13%;\\n  border: 2px solid brown;\\n  border-bottom: none; }\\n\\n@media (min-width: 1920px) {\\n  .filters {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.9rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 1%;\\n    border-radius: 13%; } }\\n\\nheader {\\n  text-align: center;\\n  min-height: 20vh;\\n  margin: 0 22% 2% 22%;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  border-radius: 2%;\\n  text-shadow: 7px -3px 3px #CE5937; }\\n  header > h1 {\\n    font-size: 3.5rem;\\n    font-weight: bold;\\n    font-style: italic;\\n    padding-bottom: 1%; }\\n  header > h2 {\\n    font-size: 2.4rem;\\n    padding-top: 1%; }\\n\\n@media (min-width: 1283px) {\\n  header > h2 {\\n    font-size: 2rem; } }\\n\\n@media (max-width: 1920px) {\\n  header {\\n    min-height: 18vh; } }\\n\\nnav.menu {\\n  grid-area: menu;\\n  position: fixed;\\n  left: 0;\\n  top: 28vh;\\n  font-size: 1.8rem; }\\n\\nnav.menu li {\\n  list-style: none;\\n  cursor: pointer;\\n  text-align: center; }\\n  nav.menu li:nth-child(5) {\\n    font-size: 1.4rem; }\\n  nav.menu li.cart {\\n    position: relative; }\\n  nav.menu li.cart::after {\\n    position: absolute;\\n    color: white;\\n    font-weight: bold;\\n    display: block;\\n    top: 0;\\n    right: -10%;\\n    font-size: 1.8rem;\\n    content: attr(beerAmount); }\\n  nav.menu li.favorite {\\n    position: relative; }\\n  nav.menu li.favorite::after {\\n    position: absolute;\\n    color: white;\\n    font-weight: bold;\\n    display: block;\\n    top: 0;\\n    right: -16%;\\n    font-size: 1.8rem;\\n    content: attr(beerAmount); }\\n\\nnav.menu li a {\\n  text-decoration: none;\\n  background-color: darkorange;\\n  text-align: center;\\n  color: black;\\n  display: block;\\n  width: 100%;\\n  height: 15%;\\n  border-radius: 13%;\\n  padding: 5%;\\n  margin: 12%;\\n  box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4); }\\n\\nnav.menu li a:hover {\\n  background-color: green;\\n  color: lawngreen;\\n  transition: 0.7s; }\\n\\n@media (min-width: 1920px) {\\n  nav.menu {\\n    left: 1.5%;\\n    top: 28vh; }\\n    nav.menu.li a {\\n      padding: 7%;\\n      margin: 20% 12%; } }\\n\\n.menuAndArea {\\n  display: grid;\\n  width: 100%;\\n  height: 100%;\\n  grid-template-areas: \\\"menu main\\\";\\n  grid-template-columns: 1fr 7fr;\\n  margin-top: 4%; }\\n\\nmain {\\n  grid-area: main;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  margin-bottom: 20px; }\\n\\n.sentinel {\\n  position: absolute;\\n  right: 10vw;\\n  top: 200vh;\\n  width: 1px;\\n  height: 1px; }\\n\\n.loginWindow-close {\\n  position: absolute;\\n  text-align: center;\\n  border-radius: 50%;\\n  font-size: 1.2rem;\\n  height: 6%;\\n  width: 6%;\\n  right: 0;\\n  top: 0;\\n  color: red;\\n  transform: translate(42%, -42%);\\n  border: 3px solid green;\\n  background-color: #c4975d;\\n  cursor: pointer; }\\n  .loginWindow-close:hover {\\n    transition: 0.5s;\\n    background-color: green;\\n    color: lime; }\\n\\n.loginWindow-header {\\n  border: 1px solid green;\\n  margin: 2%;\\n  text-align: center;\\n  text-transform: uppercase;\\n  font-weight: bold; }\\n  .loginWindow-header > h3 {\\n    font-size: 2.5rem;\\n    margin: 1% 0; }\\n  .loginWindow-header > p {\\n    display: block;\\n    margin: 1% 0;\\n    font-size: 1.5rem;\\n    font-weight: bold;\\n    color: darkgreen; }\\n\\n.login-form {\\n  margin: 0 2%;\\n  border: 1px solid green;\\n  height: 50%;\\n  width: 96%;\\n  padding: 2% 0; }\\n  .login-form > label {\\n    width: 20%;\\n    margin: 0 2.5% 5% 18%;\\n    font-size: 1.3rem; }\\n  .login-form :nth-child(3) {\\n    margin-right: 4%; }\\n  .login-form > input {\\n    width: 40%;\\n    height: 12%;\\n    margin: 2% 20% 5% 0;\\n    background-color: green; }\\n  .login-form > .check {\\n    width: unset;\\n    height: unset;\\n    margin: 2% 1% 2% 30%; }\\n  .login-form > label:nth-last-of-type(1) {\\n    width: 40%;\\n    margin: 5% 10% 5% 0;\\n    font-size: 0.8rem; }\\n  .login-form > button {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.2rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0.8%;\\n    border-radius: 13%;\\n    width: 30%;\\n    display: block;\\n    margin: 6% auto 0 auto; }\\n    .login-form > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n\\n.loginWindow {\\n  position: fixed;\\n  width: 35vw;\\n  min-height: 60vh;\\n  background-color: #f3c17f;\\n  border: 4px solid darkgreen;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  text-transform: none; }\\n\\n.loginWindow-questions {\\n  margin: 2%;\\n  border: 1px solid green;\\n  height: 20%;\\n  padding-bottom: 2%;\\n  text-align: center; }\\n  .loginWindow-questions > div {\\n    margin: 5% auto;\\n    width: 80%; }\\n    .loginWindow-questions > div > p {\\n      display: inline; }\\n  .loginWindow-questions a {\\n    font-weight: bold;\\n    margin: 1% 0;\\n    text-decoration: none;\\n    color: darkgreen; }\\n    .loginWindow-questions a:hover {\\n      color: darkred;\\n      text-decoration-line: underline; }\\n\\n.contact {\\n  position: relative; }\\n\\n.contactData {\\n  display: none;\\n  position: absolute;\\n  padding: 3%;\\n  right: -26.5vw;\\n  top: 0;\\n  min-height: 30vh;\\n  width: 0;\\n  font-size: 1.2rem;\\n  text-transform: none;\\n  background-color: #f3c17f;\\n  border: 4px solid darkgreen;\\n  z-index: 100; }\\n  .contactData > span {\\n    display: block;\\n    font-weight: bold;\\n    margin-bottom: 2%; }\\n  .contactData > :nth-child(1) {\\n    margin-bottom: 5%; }\\n  .contactData > :nth-last-child() {\\n    margin-bottom: 0; }\\n\\n.contact:hover > .contactData {\\n  display: block;\\n  width: 25vw;\\n  transition: 0.8s; }\\n\\n.beer-description {\\n  width: 95%;\\n  height: 70vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  padding-bottom: 10%;\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%; }\\n\\n.description-params {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: absolute;\\n  justify-content: center;\\n  text-align: left;\\n  right: 28%;\\n  bottom: 13%;\\n  width: 45%;\\n  height: 25%;\\n  font-size: 1.2rem; }\\n  .description-params > p {\\n    flex-basis: 40%;\\n    margin-top: 1%; }\\n  .description-params > span {\\n    flex-basis: 40%;\\n    margin-top: 1%;\\n    text-transform: lowercase; }\\n\\n.description-part {\\n  position: relative;\\n  min-height: 60vh; }\\n  .description-part > a {\\n    display: block;\\n    position: relative;\\n    margin: 1% 0 0 76%;\\n    text-decoration: none;\\n    letter-spacing: 1px;\\n    font-size: 1.3rem;\\n    cursor: pointer;\\n    color: #722121;\\n    font-weight: bold;\\n    font-size: 1.2rem; }\\n    .description-part > a:after {\\n      content: \\\"\\\";\\n      display: block;\\n      position: absolute;\\n      width: 30%;\\n      height: 3px;\\n      right: 11%;\\n      bottom: -10%;\\n      background-color: #722121; }\\n    .description-part > a:hover:after {\\n      background-color: lime;\\n      transition: 0.5s;\\n      right: 70%; }\\n    .description-part > a:hover {\\n      transition: 0.5s;\\n      color: lime; }\\n    .description-part > a::after {\\n      right: 17%; }\\n  .description-part > h3 {\\n    text-align: center;\\n    font-size: 2rem; }\\n  .description-part > img {\\n    width: 9vw;\\n    height: 55vh;\\n    margin: 0 2% 0 4%; }\\n  .description-part .description {\\n    position: absolute;\\n    text-align: right;\\n    text-transform: lowercase;\\n    font-size: 1.3rem;\\n    width: 70%;\\n    height: 40%;\\n    right: 3%;\\n    top: 25%; }\\n  .description-part > button {\\n    position: absolute;\\n    right: 1%;\\n    top: 65%;\\n    height: 15%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.6rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0.5%;\\n    border-radius: 13%;\\n    border: 2px solid green;\\n    border-radius: 7%;\\n    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4); }\\n    .description-part > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n    .description-part > button.cartBtn {\\n      top: 85%;\\n      width: 27%; }\\n    .description-part > button.favourBtn {\\n      width: 32%; }\\n\\n.loader {\\n  position: absolute;\\n  display: block;\\n  top: 50vh;\\n  left: 50vw;\\n  width: 10vw;\\n  height: 10vh;\\n  color: white;\\n  font-size: 2.5rem;\\n  text-transform: capitalize;\\n  transform: translate(-50%, -50%); }\\n\\n.beer-label {\\n  flex-basis: 22%;\\n  flex-wrap: wrap;\\n  display: flex;\\n  justify-content: center;\\n  text-align: center;\\n  min-height: 45vh;\\n  font-size: 1.3rem;\\n  font-weight: bold;\\n  margin: 2% 0 3% 0;\\n  padding-bottom: 1%;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  border: 2px solid green;\\n  border-radius: 5%; }\\n  @media screen and (max-width: 1920) and (max-height: 1080) {\\n    .beer-label {\\n      flex-basis: 28%; } }\\n  .beer-label > span,\\n  .beer-label > p {\\n    flex-basis: 100%;\\n    padding: 15px; }\\n  .beer-label > span.beerTitle {\\n    max-height: 58px;\\n    overflow: hidden; }\\n  .beer-label > p.price {\\n    font-weight: normal; }\\n  .beer-label > a {\\n    flex-basis: 45%;\\n    border-radius: 10%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0;\\n    border-radius: 13%;\\n    border: 3px solid green; }\\n    .beer-label > a:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > button {\\n    flex-basis: 45%;\\n    border-radius: 10%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0;\\n    border-radius: 13%;\\n    border: 3px solid green; }\\n    .beer-label > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .beer-label > img {\\n    width: 20%;\\n    height: 55%; }\\n    @media screen and (max-width: 1920) and (max-height: 1080) {\\n      .beer-label > img {\\n        width: 25%;\\n        height: 65%; } }\\n\\n.previevModal {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n  background: rgba(0, 0, 0, 0); }\\n\\n.cart-previev {\\n  position: fixed;\\n  height: 650px;\\n  width: 50%;\\n  left: 50%;\\n  top: 10%;\\n  transform: translateX(-50%);\\n  background-color: #f3c17f;\\n  border: 4px solid darkgreen;\\n  overflow-y: scroll; }\\n\\n.cart-previev .statement {\\n  font-size: 2rem;\\n  letter-spacing: 2px;\\n  margin: 2%;\\n  text-align: center;\\n  font-weight: normal; }\\n\\n.previev-actualBeer {\\n  height: 45vh;\\n  width: 45vw;\\n  margin: 0 auto;\\n  border: 2px solid green;\\n  position: relative; }\\n  .previev-actualBeer > h3 {\\n    margin: 2%;\\n    margin-left: 30%;\\n    font-size: 2rem;\\n    font-weight: normal; }\\n  .previev-actualBeer > img {\\n    width: 14%;\\n    height: 87%;\\n    margin: 2%;\\n    position: absolute;\\n    left: 4%;\\n    top: 4%; }\\n  .previev-actualBeer > .price {\\n    font-weight: bold;\\n    font-size: 2.5rem;\\n    margin-left: 30%; }\\n  .previev-actualBeer > .description {\\n    display: block;\\n    font-size: 1rem;\\n    margin: 2%;\\n    margin-left: 30%;\\n    margin-right: 4%; }\\n  .previev-actualBeer > a,\\n  .previev-actualBeer > button {\\n    position: absolute;\\n    text-align: center;\\n    top: 80%;\\n    height: 12%;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.1rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 1.5%;\\n    border-radius: 13%; }\\n    .previev-actualBeer > a:hover,\\n    .previev-actualBeer > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .previev-actualBeer > button {\\n    left: 28%;\\n    width: 37%; }\\n  .previev-actualBeer > a {\\n    background-color: green;\\n    color: #8b2222;\\n    left: 75%;\\n    width: 18%; }\\n    .previev-actualBeer > a:hover {\\n      background-color: brown; }\\n\\n.previev-cartContent {\\n  width: 90%;\\n  margin: 0 5%;\\n  color: green; }\\n  .previev-cartContent > h3 {\\n    font-weight: bold;\\n    color: brown;\\n    font-size: 2rem;\\n    margin: 4% 0 2% 0; }\\n\\n.cartContent-details {\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  background-color: #025002;\\n  color: #f1af59;\\n  text-align: center; }\\n  .cartContent-details > p {\\n    margin: 1%;\\n    width: 15%;\\n    display: inline-block; }\\n  .cartContent-details > :nth-child(1) {\\n    width: 40%; }\\n  .cartContent-details > :nth-child(3) {\\n    width: 20%; }\\n\\n.cartContent-listWithOrders > .beer-paramsPreviev {\\n  display: flex;\\n  width: 100%;\\n  height: 6vh;\\n  background-color: green;\\n  color: white;\\n  font-size: 1.2rem;\\n  border: 1px solid #025002;\\n  align-items: center;\\n  padding-left: 2%; }\\n  .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(1) {\\n    flex-basis: 40%;\\n    overflow: hidden; }\\n  .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(2) {\\n    flex-basis: 10%;\\n    margin-left: 8%; }\\n  .cartContent-listWithOrders > .beer-paramsPreviev > :nth-child(3) {\\n    margin-left: 2%; }\\n  .cartContent-listWithOrders > .beer-paramsPreviev > :nth-last-child(1) {\\n    margin-left: 5%; }\\n  .cartContent-listWithOrders > .beer-paramsPreviev > button {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.5rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0.5%;\\n    border-radius: 13%;\\n    flex-basis: 7%; }\\n    .cartContent-listWithOrders > .beer-paramsPreviev > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime;\\n      background-color: brown; }\\n\\n.cartContent-recapCosts {\\n  margin: 3% 0;\\n  margin-left: 70%; }\\n  .cartContent-recapCosts > p {\\n    text-transform: uppercase;\\n    color: brown;\\n    display: inline-block;\\n    font-size: 1.2rem; }\\n  .cartContent-recapCosts > .sum {\\n    font-weight: bold;\\n    color: black;\\n    margin-left: 22%;\\n    font-size: 1.2rem; }\\n\\n.errorStatement {\\n  position: absolute;\\n  width: 50vw;\\n  height: 20vh;\\n  background-color: green;\\n  color: yellow;\\n  font-size: 2.2rem;\\n  left: 50%;\\n  top: 50%;\\n  border: 2px double yellow;\\n  transform: translate(-50%, -50%); }\\n  .errorStatement::after {\\n    position: absolute;\\n    text-transform: none;\\n    content: \\\"Brak połączenia z internetem!\\\";\\n    left: 7%;\\n    top: 50%;\\n    transform: translateY(-50%); }\\n\\n.favorite-cart {\\n  width: 95%;\\n  min-height: 75vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%; }\\n  .favorite-cart > .title {\\n    width: 40%;\\n    margin: 4% auto;\\n    text-align: center;\\n    text-transform: none;\\n    font-size: 2.4rem;\\n    color: #722121; }\\n\\n.favoriteCart-columnTitles {\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  color: #722121;\\n  width: 90%;\\n  margin: 2% auto;\\n  border-bottom: 2px solid #722121; }\\n  .favoriteCart-columnTitles > :nth-child(1) {\\n    margin-left: 1%; }\\n  .favoriteCart-columnTitles > :nth-child(2) {\\n    margin-left: 20%; }\\n  .favoriteCart-columnTitles > :nth-child(3) {\\n    margin-left: 14%; }\\n    @media screen and (max-width: 1920) and (max-height: 1080) {\\n      .favoriteCart-columnTitles > :nth-child(3) {\\n        margin-left: 17%; } }\\n  .favoriteCart-columnTitles > :nth-child(4) {\\n    margin-left: 10%; }\\n  .favoriteCart-columnTitles > :nth-child(5) {\\n    margin-left: 5%; }\\n    @media screen and (max-width: 1920) and (max-height: 1080) {\\n      .favoriteCart-columnTitles > :nth-child(5) {\\n        margin-left: 8%; } }\\n  .favoriteCart-columnTitles > p {\\n    margin: 1%;\\n    display: inline-block;\\n    font-size: 1.2rem; }\\n\\n.favoriteCart-content {\\n  display: flex;\\n  width: 90%;\\n  height: 15vh;\\n  overflow: hidden;\\n  color: brown;\\n  border: 1px solid #025002;\\n  align-items: center;\\n  margin: auto; }\\n  .favoriteCart-content > img {\\n    width: 2.5vw;\\n    height: 13vh;\\n    margin: 1% 6% 1% 4%; }\\n  .favoriteCart-content > :nth-child(3) {\\n    flex-basis: 40%;\\n    overflow: hidden;\\n    margin-left: 6%;\\n    margin-right: 5%; }\\n  .favoriteCart-content > :nth-child(4) {\\n    flex-basis: 10%;\\n    margin-left: 6%;\\n    margin-right: 3%; }\\n  .favoriteCart-content > :nth-child(5) {\\n    margin-left: 2%; }\\n  .favoriteCart-content > :nth-child(6) {\\n    flex-basis: 5%;\\n    text-align: center; }\\n  .favoriteCart-content > :nth-last-child(2) {\\n    margin-left: 4%;\\n    flex-basis: 10%; }\\n  .favoriteCart-content > :nth-last-child(1) {\\n    margin-left: 4%;\\n    margin-right: 2%;\\n    flex-basis: 15%;\\n    text-transform: none;\\n    font-size: 1.3rem; }\\n  .favoriteCart-content > button {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.2rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 1%;\\n    border-radius: 13%;\\n    margin: 0 1%;\\n    flex-basis: 6%; }\\n    .favoriteCart-content > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime;\\n      background-color: brown; }\\n  .favoriteCart-content > .nameWithDescr {\\n    margin: 2% 0;\\n    height: 90%;\\n    text-transform: none; }\\n    .favoriteCart-content > .nameWithDescr > .beerTitle {\\n      font-weight: bold;\\n      font-size: 1.3rem;\\n      text-decoration: none;\\n      color: inherit; }\\n      .favoriteCart-content > .nameWithDescr > .beerTitle:hover {\\n        color: darkred;\\n        font-size: 1.4rem;\\n        text-decoration-line: underline; }\\n    .favoriteCart-content > .nameWithDescr > .description {\\n      margin-top: 3%;\\n      margin-bottom: 2%;\\n      overflow: hidden;\\n      font-size: 1rem;\\n      height: 70%; }\\n\\n.favoriteModal {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n  background: rgba(0, 0, 0, 0); }\\n\\n.actualFavoritePreviev {\\n  position: fixed;\\n  min-height: 450px;\\n  width: 50%;\\n  left: 50%;\\n  top: 10%;\\n  transform: translateX(-50%);\\n  background-color: #f3c17f;\\n  border: 4px solid darkgreen; }\\n  .actualFavoritePreviev > .statement {\\n    font-size: 2rem;\\n    letter-spacing: 2px;\\n    margin: 2%;\\n    text-align: center;\\n    font-weight: normal; }\\n  .actualFavoritePreviev > .previevActualFavorBeer {\\n    height: 45vh;\\n    width: 45vw;\\n    margin: 0 auto;\\n    margin-bottom: 2%;\\n    border: 2px solid green;\\n    position: relative; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > h3 {\\n      margin: 2%;\\n      margin-left: 30%;\\n      font-size: 2rem;\\n      font-weight: normal; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > img {\\n      width: 14%;\\n      height: 87%;\\n      margin: 2%;\\n      position: absolute;\\n      left: 4%;\\n      top: 4%; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > .price {\\n      font-weight: bold;\\n      font-size: 2.5rem;\\n      margin-left: 30%; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > .description {\\n      display: block;\\n      font-size: 1rem;\\n      margin: 2%;\\n      margin-left: 30%;\\n      margin-right: 4%; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > a,\\n    .actualFavoritePreviev > .previevActualFavorBeer > button {\\n      position: absolute;\\n      text-align: center;\\n      top: 80%;\\n      height: 12%;\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.1rem;\\n      color: #722121;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 1.5%;\\n      border-radius: 13%; }\\n      .actualFavoritePreviev > .previevActualFavorBeer > a:hover,\\n      .actualFavoritePreviev > .previevActualFavorBeer > button:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > .close {\\n      left: 28%;\\n      width: 20%; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > a {\\n      color: #8b2222;\\n      left: 55%;\\n      width: 40%; }\\n      .actualFavoritePreviev > .previevActualFavorBeer > a:hover {\\n        background-color: brown; }\\n    .actualFavoritePreviev > .previevActualFavorBeer > .close {\\n      text-transform: uppercase; }\\n\\n.shopping-cart {\\n  width: 95%;\\n  min-height: 75vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%; }\\n\\n.cart-progressBar {\\n  width: 60%;\\n  height: 2vh;\\n  background-color: #b6c98f;\\n  margin: 5% auto;\\n  position: relative; }\\n  .cart-progressBar > div {\\n    width: 6vh;\\n    height: 6vh;\\n    border-radius: 50%;\\n    position: absolute;\\n    background-color: #b6c98f;\\n    font-size: 1.4rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    top: 50%;\\n    transform: translate(-50%, -50%); }\\n    .cart-progressBar > div:nth-child(1) {\\n      left: 0;\\n      background-color: green;\\n      color: #b6c98f;\\n      border: 6px solid #b6c98f; }\\n    .cart-progressBar > div:nth-child(2) {\\n      left: 33%; }\\n    .cart-progressBar > div:nth-child(3) {\\n      left: 66%; }\\n    .cart-progressBar > div:nth-child(4) {\\n      left: 100%; }\\n\\n.cart-header {\\n  width: 90%;\\n  margin: 0 auto;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  color: #722121; }\\n  .cart-header > .title {\\n    margin: 0 2% 0 7%;\\n    display: inline-block;\\n    position: relative; }\\n    .cart-header > .title::before {\\n      position: absolute;\\n      text-align: center;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      top: 8%;\\n      left: -25%;\\n      display: block;\\n      content: \\\"1\\\";\\n      height: 145%;\\n      width: 20%;\\n      background-color: green;\\n      margin-right: 1%; }\\n  .cart-header > .amount {\\n    font-size: 2rem;\\n    font-weight: bold;\\n    display: inline-block; }\\n  .cart-header > p {\\n    font-size: 1.5rem;\\n    font-weight: normal;\\n    margin-left: 7%;\\n    text-transform: none; }\\n\\n.cart-listWithOrders {\\n  width: 90%;\\n  margin: 0 auto; }\\n  .cart-listWithOrders > .shoppingCart-content {\\n    display: flex;\\n    width: 100%;\\n    min-height: 6vh;\\n    background-color: green;\\n    color: white;\\n    font-size: 1.4rem;\\n    border: 1px solid #025002;\\n    align-items: center; }\\n    .cart-listWithOrders > .shoppingCart-content > img {\\n      width: 2.5vw;\\n      height: 13vh;\\n      margin: 1% 8% 1% 4%; }\\n    .cart-listWithOrders > .shoppingCart-content .beerTitle {\\n      color: white;\\n      text-decoration: none;\\n      flex-basis: 35%;\\n      overflow: hidden;\\n      margin-left: 4%;\\n      margin-right: 3%; }\\n      .cart-listWithOrders > .shoppingCart-content .beerTitle:hover {\\n        color: darkred;\\n        text-decoration-line: underline;\\n        font-size: 1.5rem; }\\n    .cart-listWithOrders > .shoppingCart-content > :nth-child(4) {\\n      flex-basis: 10%;\\n      margin-left: 6%;\\n      margin-right: 5%; }\\n    .cart-listWithOrders > .shoppingCart-content > :nth-child(5) {\\n      margin-left: 4%; }\\n    .cart-listWithOrders > .shoppingCart-content > :nth-last-child(1) {\\n      margin-left: 5%;\\n      margin-right: 4%;\\n      flex-basis: 15%; }\\n    .cart-listWithOrders > .shoppingCart-content > button {\\n      text-transform: uppercase;\\n      font-weight: normal;\\n      font-size: 1.5rem;\\n      color: #722121;\\n      letter-spacing: 2px;\\n      border: 1px solid green;\\n      background-color: limegreen;\\n      cursor: pointer;\\n      margin: 0 2% 0 2%;\\n      text-decoration: none;\\n      text-align: center;\\n      padding: 1%;\\n      border-radius: 13%;\\n      margin: 0 1%;\\n      flex-basis: 7%; }\\n      .cart-listWithOrders > .shoppingCart-content > button:hover {\\n        transition: 0.5s;\\n        background-color: green;\\n        color: lime;\\n        background-color: brown; }\\n\\n.shoppingCart-columnTitles {\\n  font-weight: bold;\\n  text-transform: capitalize;\\n  background-color: #025002;\\n  color: #f1af59;\\n  width: 90%;\\n  margin: auto;\\n  margin-top: 2%; }\\n  .shoppingCart-columnTitles > :nth-child(1) {\\n    margin-left: 1%; }\\n  .shoppingCart-columnTitles > :nth-child(2) {\\n    margin-left: 20%; }\\n  .shoppingCart-columnTitles > :nth-child(3) {\\n    margin-left: 25%; }\\n  .shoppingCart-columnTitles > :nth-child(4) {\\n    margin-left: 13%; }\\n  .shoppingCart-columnTitles > :nth-child(5) {\\n    margin-left: 8%; }\\n  .shoppingCart-columnTitles > p {\\n    margin: 1%;\\n    display: inline-block;\\n    font-size: 1.2rem; }\\n\\n.cart-recapCosts {\\n  margin: 3% 0 3% 0;\\n  margin-left: 77%; }\\n  .cart-recapCosts > p {\\n    text-transform: uppercase;\\n    color: brown;\\n    display: inline-block;\\n    font-size: 1.4rem; }\\n  .cart-recapCosts > .sum {\\n    font-weight: bold;\\n    color: black;\\n    margin-left: 7%;\\n    font-size: 1.3rem; }\\n\\n.cart-buttons1 {\\n  margin: auto;\\n  text-align: center; }\\n  .cart-buttons1 > p {\\n    font-size: 1.5rem;\\n    text-transform: none;\\n    font-weight: bold;\\n    display: inline-block; }\\n  .cart-buttons1 > a,\\n  .cart-buttons1 > button {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.2rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0.5%;\\n    border-radius: 13%;\\n    padding: 1% 1.25%;\\n    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4);\\n    font-weight: bold;\\n    display: inline-block; }\\n    .cart-buttons1 > a:hover,\\n    .cart-buttons1 > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime;\\n      background-color: brown; }\\n\\n.cart-buttons2 {\\n  width: 100%;\\n  margin: 4% 0 2% 4%; }\\n  .cart-buttons2 > a {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.2rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 0.5%;\\n    border-radius: 13%;\\n    padding: 1%;\\n    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4);\\n    font-weight: bold; }\\n    .cart-buttons2 > a:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime;\\n      background-color: brown; }\\n    .cart-buttons2 > a:nth-child(2) {\\n      margin-left: 45%; }\\n      @media screen and (max-width: 1920) and (max-height: 1080) {\\n        .cart-buttons2 > a:nth-child(2) {\\n          margin-left: 55%; } }\\n\\n.registration-form {\\n  margin: auto;\\n  width: 95%;\\n  height: 70vh;\\n  background-color: rgba(50, 205, 50, 0.9);\\n  padding-bottom: 10%;\\n  box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, 0.4);\\n  border-radius: 5%;\\n  position: relative;\\n  width: 75%;\\n  height: 590px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around; }\\n  .registration-form > button {\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    font-size: 1.2rem;\\n    color: #722121;\\n    letter-spacing: 2px;\\n    border: 1px solid green;\\n    background-color: limegreen;\\n    cursor: pointer;\\n    margin: 0 2% 0 2%;\\n    text-decoration: none;\\n    text-align: center;\\n    padding: 2%;\\n    border-radius: 13%;\\n    box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.4);\\n    font-weight: bold;\\n    margin: 4% 0 0 20%;\\n    justify-self: center; }\\n    .registration-form > button:hover {\\n      transition: 0.5s;\\n      background-color: green;\\n      color: lime; }\\n  .registration-form input {\\n    background-color: green;\\n    font-size: 1.2rem; }\\n  .registration-form input:focus {\\n    border: 1px solid yellow; }\\n\\n.form-header {\\n  display: flex;\\n  flex-basis: 100%;\\n  height: 15%;\\n  text-align: center; }\\n  .form-header > h3 {\\n    flex-basis: 40%;\\n    font-size: 1.8rem;\\n    margin: 4% 0 0 30%; }\\n  .form-header > a {\\n    display: block;\\n    position: relative;\\n    margin: 1% 0 0 76%;\\n    text-decoration: none;\\n    letter-spacing: 1px;\\n    font-size: 1.3rem;\\n    cursor: pointer;\\n    color: #722121;\\n    font-weight: bold;\\n    margin: 2%;\\n    height: 30%;\\n    margin-left: 18%;\\n    bottom: -13%; }\\n    .form-header > a:after {\\n      content: \\\"\\\";\\n      display: block;\\n      position: absolute;\\n      width: 30%;\\n      height: 3px;\\n      right: 11%;\\n      bottom: -10%;\\n      background-color: #722121; }\\n    .form-header > a:hover:after {\\n      background-color: lime;\\n      transition: 0.5s;\\n      right: 70%; }\\n    .form-header > a:hover {\\n      transition: 0.5s;\\n      color: lime; }\\n    .form-header > a::after {\\n      bottom: -15%;\\n      right: 0; }\\n\\n.form-textFields {\\n  height: 60%;\\n  flex-basis: 45%;\\n  margin: 2% auto;\\n  text-align: center;\\n  text-transform: capitalize; }\\n  .form-textFields > label {\\n    display: block;\\n    margin: 1% 0;\\n    width: 100%;\\n    font-size: 1.2rem;\\n    text-transform: capitalize;\\n    font-weight: bold;\\n    text-align: left; }\\n    @media screen and (max-width: 1920) and (max-height: 1080) {\\n      .form-textFields > label {\\n        margin: 2%; } }\\n  .form-textFields > input {\\n    position: relative;\\n    display: block;\\n    width: 60%;\\n    height: 5vh;\\n    margin-bottom: 3%;\\n    font-size: 1.3rem; }\\n  .form-textFields > .withInfo {\\n    display: none;\\n    text-transform: none;\\n    margin: 0;\\n    background-color: #088508;\\n    border: 2px solid #10b310; }\\n  .form-textFields > .infoAboutAsterix {\\n    position: absolute;\\n    bottom: 9%;\\n    left: 3%;\\n    font-size: 1.1rem;\\n    font-weight: normal;\\n    text-transform: none; }\\n\\n.form-acceptFields {\\n  flex-basis: 45%;\\n  height: 60%;\\n  margin: 10% auto 0 auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  text-transform: none; }\\n  .form-acceptFields > input {\\n    background-color: green;\\n    flex-basis: 10%; }\\n  .form-acceptFields > :nth-child(even) {\\n    flex-basis: 90%;\\n    text-align: left;\\n    height: 30%; }\\n  .form-acceptFields > .agreementOnRules {\\n    display: inline; }\\n    .form-acceptFields > .agreementOnRules > p {\\n      display: inline; }\\n  .form-acceptFields a {\\n    text-transform: capitalize;\\n    color: black;\\n    font-weight: bold;\\n    text-decoration: none; }\\n\\n.inlineValidation {\\n  position: absolute;\\n  top: 10%;\\n  left: 29%;\\n  height: 5vh;\\n  width: 16vw;\\n  background-color: red;\\n  color: yellowgreen;\\n  text-transform: none;\\n  text-align: center; }\\n\\n.inlineValidationForChecked {\\n  position: absolute;\\n  top: 30%;\\n  left: 54%;\\n  height: 5vh;\\n  width: 16vw;\\n  background-color: red;\\n  color: yellowgreen;\\n  text-transform: none; }\\n\\n.filterOptions-form {\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  background-color: inherit;\\n  font-size: unset;\\n  height: 300%;\\n  width: 260%;\\n  border: 2px solid brown;\\n  border-top: none; }\\n\\n.clearfix:after {\\n  content: \\\"\\\";\\n  visibility: hidden;\\n  display: block;\\n  height: 0;\\n  clear: both; }\\n\\n.send {\\n  clear: both;\\n  text-transform: uppercase;\\n  font-weight: normal;\\n  font-size: 1rem;\\n  color: #722121;\\n  letter-spacing: 2px;\\n  border: 1px solid green;\\n  background-color: limegreen;\\n  cursor: pointer;\\n  margin: 0 2% 0 2%;\\n  text-decoration: none;\\n  text-align: center;\\n  padding: 2%;\\n  border-radius: 13%;\\n  position: absolute;\\n  left: 50%;\\n  bottom: 5%;\\n  transform: translateX(-50%);\\n  border: 1px solid brown; }\\n  .send:hover {\\n    background-color: chocolate;\\n    color: #5bb61f; }\\n\\n.filtersForm-colors {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  height: 90%;\\n  width: 50%;\\n  float: left;\\n  margin: 2% 0;\\n  padding: 0 8% 15% 2%;\\n  text-transform: capitalize;\\n  font-size: 1rem; }\\n  .filtersForm-colors > label {\\n    height: 15%;\\n    margin-bottom: 5%; }\\n\\n.filtersForm-yeasts {\\n  position: relative;\\n  height: 20%;\\n  width: 48%;\\n  float: right;\\n  margin: 2% 0;\\n  margin-bottom: 50%;\\n  padding: 0 1% 0 2%;\\n  background-color: inherit;\\n  color: #722121;\\n  border: 1px solid brown; }\\n  .filtersForm-yeasts > options {\\n    background-color: inherit;\\n    color: inherit; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot":
/*!*****************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fontawesome-webfont.eot\");\n\n//# sourceURL=webpack:///./node_modules/font-awesome/fonts/fontawesome-webfont.eot?");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fontawesome-webfont.eot\");\n\n//# sourceURL=webpack:///./node_modules/font-awesome/fonts/fontawesome-webfont.eot?");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"node_modules/font-awesome/fonts/fontawesome-webfont.svg\");\n\n//# sourceURL=webpack:///./node_modules/font-awesome/fonts/fontawesome-webfont.svg?");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fontawesome-webfont.ttf\");\n\n//# sourceURL=webpack:///./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":
/*!***************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fontawesome-webfont.woff2\");\n\n//# sourceURL=webpack:///./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?");

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0":
/*!**************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fontawesome-webfont.woff\");\n\n//# sourceURL=webpack:///./node_modules/font-awesome/fonts/fontawesome-webfont.woff?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndUpdatePreviev\", function() { return addToCartAndUpdatePreviev; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvFromCartAndUpdatePreviev\", function() { return rmvFromCartAndUpdatePreviev; });\n/* harmony import */ var _AddToCartAndOpenPreviev_previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js\");\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _toManipulateDOM_removeModal_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/removeModal/removePrevievCartModal */ \"./src/components/toManipulateDOM/removeModal/removePrevievCartModal.js\");\n\n\n\n\n\n\nconst addToCartAndUpdatePreviev = (beer) => {\n\n    Object(_toManipulateDOM_removeModal_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_2__[\"removePrevievCartModal\"])();\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__[\"dispatchAddToCart\"])(beer);\n    Object(_AddToCartAndOpenPreviev_previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_0__[\"actualBeerAndCartPreviev\"])()\n}\n\n\nconst rmvFromCartAndUpdatePreviev = (beer) => {\n    \n    Object(_toManipulateDOM_removeModal_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_2__[\"removePrevievCartModal\"])();\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_1__[\"dispatchRemoveFromCart\"])(beer);\n    Object(_AddToCartAndOpenPreviev_previevOfCartContent_actualBeerAndCartPreviev_actualBeerAndCartPreviev__WEBPACK_IMPORTED_MODULE_0__[\"actualBeerAndCartPreviev\"])()\n}\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/addToCartAndRemoveWithUpdatePreviev.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js":
/*!****************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js ***!
  \****************************************************************************/
/*! exports provided: createButtonToCloseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToCloseModal\", function() { return createButtonToCloseModal; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _toManipulateDOM_removeModal_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removeModal/removePrevievCartModal */ \"./src/components/toManipulateDOM/removeModal/removePrevievCartModal.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayCounterOfBeersInCart */ \"./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js\");\n\n\n\n\n\n\n\n\nconst createButtonToCloseModal = (cl) => (txtContent) => (element) => {\n\n    Object(_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__[\"displayCounterOfBeersInCart\"])()\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(_toManipulateDOM_removeModal_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__[\"removePrevievCartModal\"])()\n        )(document.createElement(\"button\"));\n  \n        element.appendChild(btn);\n    return element;\n  }\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js":
/*!*******************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js ***!
  \*******************************************************************************/
/*! exports provided: displayCounterOfBeersInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayCounterOfBeersInCart\", function() { return displayCounterOfBeersInCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n\n\n\n\nconst displayCounterOfBeersInCart = () => {\n\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToShopping;\n    const beerAmount = cartContent.length;\n    const linkToCart = document.querySelector(\"li.cart\");\n\n    linkToCart.setAttribute(\"beerAmount\", beerAmount.toString())\n}\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js?");

/***/ }),

/***/ "./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js":
/*!**************************************************************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js ***!
  \**************************************************************************************************************************/
/*! exports provided: actualBeerAndCartPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actualBeerAndCartPreviev\", function() { return actualBeerAndCartPreviev; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _shoppingCartStatementAndPreviev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoppingCartStatementAndPreviev */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/shoppingCartStatementAndPreviev.js\");\n\n\n\n\n\nconst actualBeerAndCartPreviev = () => {\n\n    const page = document.querySelector(\"body\");  \n    const cartPrevievModal = Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"previevModal\");\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToShopping;\n    const currentBeer = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCurrentBeer;\n    const cartPreviev = Object(_shoppingCartStatementAndPreviev__WEBPACK_IMPORTED_MODULE_2__[\"shoppingCartStatementAndPreviev\"])(cartContent)(currentBeer);\n\n    cartPrevievModal.appendChild(cartPreviev);\n  page.appendChild(cartPrevievModal);\n}\n\n\n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/actualBeerAndCartPreviev.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previevOfActualBeer\", function() { return previevOfActualBeer; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createButtonToCloseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../createButtonToCloseModal */ \"./src/components/AddToCartAndOpenPreviev/createButtonToCloseModal.js\");\n\n\n\n\n\n\nconst previevOfActualBeer = (beer) => (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(    \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(\"piwo\")(beer.image_url),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"\")(beer.name),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"price\")(`${beer.abv} $`),         \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"description\")(beer.description),\n            Object(_createButtonToCloseModal__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToCloseModal\"])(\"\")(\"kontynuuj zakupy\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"do kasy\")(\"#/koszyk\"),\n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"previev-actualBeer\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n    \n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevActualBeer.js?");

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

/***/ "./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/shoppingCartStatementAndPreviev.js":
/*!*********************************************************************************************************************************!*\
  !*** ./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/shoppingCartStatementAndPreviev.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: shoppingCartStatementAndPreviev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shoppingCartStatementAndPreviev\", function() { return shoppingCartStatementAndPreviev; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _componentsOfCartPreviev_previevOfCartContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsOfCartPreviev/previevOfCartContent */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevOfCartContent.js\");\n/* harmony import */ var _componentsOfCartPreviev_previevActualBeer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsOfCartPreviev/previevActualBeer */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/componentsOfCartPreviev/previevActualBeer.js\");\n\n\n\n\n\n\n\n const shoppingCartStatementAndPreviev = (cartContent) => (beer) =>\n                    Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"statement\")(\"Dodałeś do koszyka!\"),\n                        Object(_componentsOfCartPreviev_previevActualBeer__WEBPACK_IMPORTED_MODULE_3__[\"previevOfActualBeer\"])(beer),\n                        Object(_componentsOfCartPreviev_previevOfCartContent__WEBPACK_IMPORTED_MODULE_2__[\"createPrevievOfCartContent\"])(cartContent)\n                    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-previev\")); \n\n//# sourceURL=webpack:///./src/components/AddToCartAndOpenPreviev/previevOfCartContent/actualBeerAndCartPreviev/shoppingCartStatementAndPreviev.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BeerDescription\", function() { return BeerDescription; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createBeerDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBeerDescription */ \"./src/components/BeerDescription/createBeerDescription.js\");\n\n\n\n\n\n\nconst BeerDescription = () => {\n\n  const area = document.querySelector(\"main\");\n  const beer = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToCurrentBeer;\n\n  Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"clearContentOf\"])(area); \n  Object(_createBeerDescription__WEBPACK_IMPORTED_MODULE_2__[\"createBeerDescription\"])(beer)\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/BeerDescription/BeerDescription.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"descriptionPart\", function() { return descriptionPart; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\nconst descriptionPart = (beer) => (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(  \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"powrót do głównej\")(\"#/\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"\")(beer.name),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(\"piwo\")(beer.image_url),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"description\")(beer.description),\n            Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createBtnAddToFavour\"])(\"favourBtn\")(\"dodaj do ulubionych\")(beer),\n            Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createBtnAddToCartAndOpenPreviev\"])(\"cartBtn\")(\"dodaj do koszyka\")(beer),   \n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"description-part\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n\n//# sourceURL=webpack:///./src/components/BeerDescription/componentsOfShowDescription.js/descriptionPart.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavoriteCart\", function() { return FavoriteCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_removeModal_removePrevievFavorModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removeModal/removePrevievFavorModal */ \"./src/components/toManipulateDOM/removeModal/removePrevievFavorModal.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createFavoriteCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createFavoriteCart */ \"./src/components/FavoriteCart/createFavoriteCart.js\");\n\n\n\n\n\n\n\nconst FavoriteCart = () => {\n\n    const area = document.querySelector(\"main\");\n    const favoriteContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToFavorite;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n    Object(_toManipulateDOM_removeModal_removePrevievFavorModal__WEBPACK_IMPORTED_MODULE_1__[\"removePrevievFavorModal\"])()\n    Object(_createFavoriteCart__WEBPACK_IMPORTED_MODULE_3__[\"createFavoriteCart\"])(favoriteContent)\n}\n\n                \n\n\n\n//# sourceURL=webpack:///./src/components/FavoriteCart/FavoriteCart.js?");

/***/ }),

/***/ "./src/components/FavoriteCart/createFavoriteCart.js":
/*!***********************************************************!*\
  !*** ./src/components/FavoriteCart/createFavoriteCart.js ***!
  \***********************************************************/
/*! exports provided: createFavoriteCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFavoriteCart\", function() { return createFavoriteCart; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _showContentOf_createElementWithCartContent_createElementWithFavoriteCartContent_createElementWithFavoriteCartContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js\");\n/* harmony import */ var _showContentOf_cartColumnTitles_favoriteCartColumnTitles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../showContentOf/cartColumnTitles/favoriteCartColumnTitles */ \"./src/components/showContentOf/cartColumnTitles/favoriteCartColumnTitles.js\");\n\n\n\n\n\n\n\nconst createFavoriteCart = (cartContent) => {\n\n    const area = document.querySelector(\"main\");\n      \n    const mainWrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"title\")(\"Twoja lista ulubionych\"),\n            _showContentOf_cartColumnTitles_favoriteCartColumnTitles__WEBPACK_IMPORTED_MODULE_3__[\"favoriteCartColumnTitles\"],\n            Object(_showContentOf_createElementWithCartContent_createElementWithFavoriteCartContent_createElementWithFavoriteCartContent__WEBPACK_IMPORTED_MODULE_2__[\"createElementWithFavoriteCartContent\"])(cartContent),\n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"favorite-cart\"))\n\n area.appendChild(mainWrapper);\n}\n\n//# sourceURL=webpack:///./src/components/FavoriteCart/createFavoriteCart.js?");

/***/ }),

/***/ "./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js":
/*!************************************************************************!*\
  !*** ./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js ***!
  \************************************************************************/
/*! exports provided: displayCounterOfBeersInFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayCounterOfBeersInFavorite\", function() { return displayCounterOfBeersInFavorite; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n\n\n\n\nconst displayCounterOfBeersInFavorite = () => {\n\n    const FavoriteContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToFavorite;\n    const beerAmount = FavoriteContent.length;\n    const linkToFavorite = document.querySelector(\"li.favorite\");\n\n    linkToFavorite.setAttribute(\"beerAmount\", beerAmount.toString())\n}\n\n//# sourceURL=webpack:///./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/onSubmitFiltersForm.js":
/*!****************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/onSubmitFiltersForm.js ***!
  \****************************************************************************/
/*! exports provided: onSubmitFiltersForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSubmitFiltersForm\", function() { return onSubmitFiltersForm; });\n/* harmony import */ var _searchFilteredBeers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchFilteredBeers */ \"./src/components/Filters/ searchFilteredBeers/searchFilteredBeers.js\");\n\n\n\n\nconst onSubmitFiltersForm = (form) => \n                form.addEventListener(\"submit\", (e) => {\n                    e.preventDefault();\n                    Object(_searchFilteredBeers__WEBPACK_IMPORTED_MODULE_0__[\"searchFilteredBeers\"])(e);\n                })\n\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/onSubmitFiltersForm.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/processingResponse/completePromises.js":
/*!********************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/processingResponse/completePromises.js ***!
  \********************************************************************************************/
/*! exports provided: completePromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completePromises\", function() { return completePromises; });\n/* harmony import */ var _handlersToProcessing_chosenFilterPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToProcessing/chosenFilterPromise */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/chosenFilterPromise.js\");\n\n\n\nconst completePromises = (filters) => \n         filters.reduce((acc,el) => ( acc = [...acc, Object(_handlersToProcessing_chosenFilterPromise__WEBPACK_IMPORTED_MODULE_0__[\"chosenFilterPromise\"])(el)], acc ), [])\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/processingResponse/completePromises.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/processingResponse/filterOutChoices.js":
/*!********************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/processingResponse/filterOutChoices.js ***!
  \********************************************************************************************/
/*! exports provided: filterOutChoices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterOutChoices\", function() { return filterOutChoices; });\n/* harmony import */ var _handlersToProcessing_checkIfInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToProcessing/checkIfInput */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/checkIfInput.js\");\n\n\n\nconst filterOutChoices = (elements) => \n            elements.filter(el => Object(_handlersToProcessing_checkIfInput__WEBPACK_IMPORTED_MODULE_0__[\"checkIfInput\"])(el) ? el.checked : el.selected );\n\n\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/processingResponse/filterOutChoices.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/processingResponse/filterOutSpecyfiedYeasts.js":
/*!****************************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/processingResponse/filterOutSpecyfiedYeasts.js ***!
  \****************************************************************************************************/
/*! exports provided: filterOutSpecyfiedYeasts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterOutSpecyfiedYeasts\", function() { return filterOutSpecyfiedYeasts; });\n\n\nconst filterOutSpecyfiedYeasts = (value) => (beers) => \n        value === \"dowolne\" ? beers : beers.filter(beer => beer.ingredients.yeast === value);\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/processingResponse/filterOutSpecyfiedYeasts.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/checkIfInput.js":
/*!*************************************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/checkIfInput.js ***!
  \*************************************************************************************************************/
/*! exports provided: checkIfInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfInput\", function() { return checkIfInput; });\n\nconst checkIfInput = (el) => el.nodeName && el.nodeName.toLowerCase() === 'input';\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/processingResponse/handlersToProcessing/checkIfInput.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/chosenFilterPromise.js":
/*!********************************************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/chosenFilterPromise.js ***!
  \********************************************************************************************************************/
/*! exports provided: chosenFilterPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chosenFilterPromise\", function() { return chosenFilterPromise; });\n/* harmony import */ var _urlsToApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../urlsToApi */ \"./src/components/Filters/ searchFilteredBeers/urlsToApi.js\");\n\n\n\nconst chosenFilterPromise = ({value}) => fetch(`https://api.punkapi.com/v2/beers?${Object(_urlsToApi__WEBPACK_IMPORTED_MODULE_0__[\"options\"])()[value]}`)\n                                                    .then(res => res.json());\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/processingResponse/handlersToProcessing/chosenFilterPromise.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/flattenArraysOneLevel.js":
/*!**********************************************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/flattenArraysOneLevel.js ***!
  \**********************************************************************************************************************/
/*! exports provided: flattenArraysOneLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flattenArraysOneLevel\", function() { return flattenArraysOneLevel; });\n\nconst flattenArraysOneLevel = (arr) => \n        arr.reduce((acc,item) => Array.isArray(item) ? ( acc = [...acc, ...item], acc ) : ( acc = [...acc, item], acc ), []);\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/processingResponse/handlersToProcessing/flattenArraysOneLevel.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/processingResponse/separateInputsAndOptions.js":
/*!****************************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/processingResponse/separateInputsAndOptions.js ***!
  \****************************************************************************************************/
/*! exports provided: separateInputsAndOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"separateInputsAndOptions\", function() { return separateInputsAndOptions; });\n/* harmony import */ var _handlersToProcessing_checkIfInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToProcessing/checkIfInput */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/checkIfInput.js\");\n\n\n\n const separateInputsAndOptions = (elements) => \n    elements.reduce((acc,el) => \n              Object(_handlersToProcessing_checkIfInput__WEBPACK_IMPORTED_MODULE_0__[\"checkIfInput\"])(el) ? \n            ( acc[0] = [...acc[0], el], acc ) : \n            ( acc[1] = [...acc[1], el], acc ), [[],[]])\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/processingResponse/separateInputsAndOptions.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/responseCreator.js":
/*!************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/responseCreator.js ***!
  \************************************************************************/
/*! exports provided: responseCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"responseCreator\", function() { return responseCreator; });\n/* harmony import */ var _getBeersFromAPI_coroutine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../getBeersFromAPI/coroutine */ \"./src/components/getBeersFromAPI/coroutine.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _ShowFilteredBeers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShowFilteredBeers */ \"./src/components/Filters/ShowFilteredBeers.js\");\n/* harmony import */ var _getBeersFromAPI_loader_removeLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getBeersFromAPI/loader/removeLoader */ \"./src/components/getBeersFromAPI/loader/removeLoader.js\");\n/* harmony import */ var _responsesFromAllRequests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsesFromAllRequests */ \"./src/components/Filters/ searchFilteredBeers/responsesFromAllRequests.js\");\n\n\n\n\n\n\n\n\nconst responseCreator = (promises, chosenYeast) => {\n\n    return (dispatch) => Object(_getBeersFromAPI_coroutine__WEBPACK_IMPORTED_MODULE_0__[\"coroutine\"])(function* (){\n\n        try{\n          const filteredBeers = yield * Object(_responsesFromAllRequests__WEBPACK_IMPORTED_MODULE_4__[\"responsesFromAllRequests\"])(promises, chosenYeast);\n           if(filteredBeers){\n             dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchSuccessActionToFilters\"])(filteredBeers))   \n             Object(_getBeersFromAPI_loader_removeLoader__WEBPACK_IMPORTED_MODULE_3__[\"removeLoader\"])();\n             Object(_ShowFilteredBeers__WEBPACK_IMPORTED_MODULE_2__[\"ShowFilteredBeers\"])();          \n            }\n        }catch(err){\n            dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchFailActionToFilters\"])(err)) \n        }\n    })\n}\n\n\n\n// Naive version with Promise and then\n\n/*\nexport const responseCreator = (promises, chosenYeast) => {   \n\n    return (dispatch) => {\n        \n        responsesFromAllRequests(promises, chosenYeast)\n            .then(filteredBeers => {\n                        dispatch(fetchSuccessAction(filteredBeers))   \n                        removeLoader();\n                        OfferOnPage();          \n            })\n            .catch(err => dispatch(fetchFailAction(err)) )  \n            \n    }       \n}\n*/\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/responseCreator.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/responsesFromAllRequests.js":
/*!*********************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/responsesFromAllRequests.js ***!
  \*********************************************************************************/
/*! exports provided: responsesFromAllRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"responsesFromAllRequests\", function() { return responsesFromAllRequests; });\n/* harmony import */ var _processingResponse_handlersToProcessing_flattenArraysOneLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processingResponse/handlersToProcessing/flattenArraysOneLevel */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/handlersToProcessing/flattenArraysOneLevel.js\");\n/* harmony import */ var _processingResponse_filterOutSpecyfiedYeasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processingResponse/filterOutSpecyfiedYeasts */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/filterOutSpecyfiedYeasts.js\");\n\n\n\n\n\n                \nfunction* responsesFromAllRequests(promises, chosenYeast){\n\n    let response = yield Promise.all(promises)\n    let result =   yield Object(_processingResponse_handlersToProcessing_flattenArraysOneLevel__WEBPACK_IMPORTED_MODULE_0__[\"flattenArraysOneLevel\"])(response);\n    let filteredBeers = yield Object(_processingResponse_filterOutSpecyfiedYeasts__WEBPACK_IMPORTED_MODULE_1__[\"filterOutSpecyfiedYeasts\"])(chosenYeast)(result); \n\n  return filteredBeers \n }\n\n \n \n//  Naive version with Promise and then\n\n /* \n\n export const responsesFromAllRequests = (promises, chosenYeast) => \n          Promise.all(promises)\n                  .then(results => flattenArraysOneLevel(results))\n                  .then(beers => filterOutSpecyfiedYeasts(chosenYeast)(beers))\n*/\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/responsesFromAllRequests.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/searchFilteredBeers.js":
/*!****************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/searchFilteredBeers.js ***!
  \****************************************************************************/
/*! exports provided: searchFilteredBeers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchFilteredBeers\", function() { return searchFilteredBeers; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _sendToApi_sendChosenFiltersAsRequestsToApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendToApi/sendChosenFiltersAsRequestsToApi */ \"./src/components/Filters/ searchFilteredBeers/sendToApi/sendChosenFiltersAsRequestsToApi.js\");\n\n\n\n \nconst searchFilteredBeers = (e) => {\n\n    const area = document.querySelector(\"main\");\n    const form = e.target;\n    const elements = [...form.querySelectorAll(\".filter\")];\n    \n    Object(_sendToApi_sendChosenFiltersAsRequestsToApi__WEBPACK_IMPORTED_MODULE_1__[\"sendChosenFiltersAsRequestsToApi\"])(elements)\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"clearContentOf\"])(area);\n}\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/searchFilteredBeers.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/sendToApi/sendChosenFiltersAsRequestsToApi.js":
/*!***************************************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/sendToApi/sendChosenFiltersAsRequestsToApi.js ***!
  \***************************************************************************************************/
/*! exports provided: sendChosenFiltersAsRequestsToApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendChosenFiltersAsRequestsToApi\", function() { return sendChosenFiltersAsRequestsToApi; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _getBeersFromAPI_loader_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../getBeersFromAPI/loader/loader */ \"./src/components/getBeersFromAPI/loader/loader.js\");\n/* harmony import */ var _processingResponse_filterOutChoices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../processingResponse/filterOutChoices */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/filterOutChoices.js\");\n/* harmony import */ var _processingResponse_separateInputsAndOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../processingResponse/separateInputsAndOptions */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/separateInputsAndOptions.js\");\n/* harmony import */ var _processingResponse_completePromises__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../processingResponse/completePromises */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/completePromises.js\");\n/* harmony import */ var _responseCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../responseCreator */ \"./src/components/Filters/ searchFilteredBeers/responseCreator.js\");\n\n\n\n\n\n\n\n\n\n\nconst sendChosenFiltersAsRequestsToApi = (elements) => {     \n   \n    const chosenFilters = Object(_processingResponse_filterOutChoices__WEBPACK_IMPORTED_MODULE_3__[\"filterOutChoices\"])(elements);\n    const [ inputs, option ] = Object(_processingResponse_separateInputsAndOptions__WEBPACK_IMPORTED_MODULE_4__[\"separateInputsAndOptions\"])(chosenFilters);\n    const promises = Object(_processingResponse_completePromises__WEBPACK_IMPORTED_MODULE_5__[\"completePromises\"])(inputs);\n    const chosenYeast = option[0].value; \n       \n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchBeginActionToFilters\"])());\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_responseCreator__WEBPACK_IMPORTED_MODULE_6__[\"responseCreator\"])(promises, chosenYeast));\n    \n    Object(_getBeersFromAPI_loader_loader__WEBPACK_IMPORTED_MODULE_2__[\"insertLoader\"])()\n}\n\n\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/sendToApi/sendChosenFiltersAsRequestsToApi.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/uncheckTheWszystkieInput.js":
/*!*********************************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/uncheckTheWszystkieInput.js ***!
  \*********************************************************************************/
/*! exports provided: uncheckTheWszystkieInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uncheckTheWszystkieInput\", function() { return uncheckTheWszystkieInput; });\n/* harmony import */ var _processingResponse_filterOutChoices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processingResponse/filterOutChoices */ \"./src/components/Filters/ searchFilteredBeers/processingResponse/filterOutChoices.js\");\n\n\n\nconst uncheckTheWszystkieInput = (form) => \n                form.addEventListener(\"change\", () => {\n                    \n                    const dowolneInput = form.querySelector(\"[value='wszystkie']\");\n                    const elements = [...form.querySelectorAll(\".filter\")];\n                    \n                    if(Object(_processingResponse_filterOutChoices__WEBPACK_IMPORTED_MODULE_0__[\"filterOutChoices\"])(elements)) dowolneInput.checked = false;\n                 })\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/uncheckTheWszystkieInput.js?");

/***/ }),

/***/ "./src/components/Filters/ searchFilteredBeers/urlsToApi.js":
/*!******************************************************************!*\
  !*** ./src/components/Filters/ searchFilteredBeers/urlsToApi.js ***!
  \******************************************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n\nconst options = () => ({\n    \n        wszystkie: \"per_page=70\",\n        jasne: \"ebc_lt=12&per_page=70\",\n        srednie: \"ebc_gt=12&ebc_lt=33&per_page=70\",\n        ciemne: \"ebc_gt=33&per_page=70\",\n    })\n\n//# sourceURL=webpack:///./src/components/Filters/_searchFilteredBeers/urlsToApi.js?");

/***/ }),

/***/ "./src/components/Filters/ShowFilteredBeers.js":
/*!*****************************************************!*\
  !*** ./src/components/Filters/ShowFilteredBeers.js ***!
  \*****************************************************/
/*! exports provided: ShowFilteredBeers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShowFilteredBeers\", function() { return ShowFilteredBeers; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _OfferOnPage_createOfferOnPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OfferOnPage/createOfferOnPage */ \"./src/components/OfferOnPage/createOfferOnPage.js\");\n\n\n\n\n\nconst ShowFilteredBeers = () => {\n\n    const area = document.querySelector(\"main\");\n    const beers = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToResponseForFilters.items;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"clearContentOf\"])(area);  \n    Object(_OfferOnPage_createOfferOnPage__WEBPACK_IMPORTED_MODULE_2__[\"createOfferOnPage\"])(beers);\n};\n\n\n//# sourceURL=webpack:///./src/components/Filters/ShowFilteredBeers.js?");

/***/ }),

/***/ "./src/components/Filters/componentsOfFilters/degreeOfColorOption.js":
/*!***************************************************************************!*\
  !*** ./src/components/Filters/componentsOfFilters/degreeOfColorOption.js ***!
  \***************************************************************************/
/*! exports provided: degreeOfColorOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"degreeOfColorOption\", function() { return degreeOfColorOption; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RegistrationForm/handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n\n\n\n\n\n\n\nconst degreeOfColorOption = (element) => {\n\n        const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])( \n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createLabel\"])(\"\")(\"wszystkie\")(\"wszystkie\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createCheckedCheckboxInput\"])(\"filter\")(\"wszystkie\")(\"wszystkie\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createLabel\"])(\"\")(\"jasne\")(\"jasne\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createCheckboxInput\"])(\"filter\")(\"colors\")(\"jasne\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createLabel\"])(\"\")(\"srednie\")(\"średnie\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createCheckboxInput\"])(\"filter\")(\"colors\")(\"srednie\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createLabel\"])(\"\")(\"ciemne\")(\"ciemne\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_2__[\"createCheckboxInput\"])(\"filter\")(\"colors\")(\"ciemne\"),\n            )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"filtersForm-colors\"))\n\n    element.appendChild(wrapperDiv);\n  return element;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/components/Filters/componentsOfFilters/degreeOfColorOption.js?");

/***/ }),

/***/ "./src/components/Filters/componentsOfFilters/typesOfYeast.js":
/*!********************************************************************!*\
  !*** ./src/components/Filters/componentsOfFilters/typesOfYeast.js ***!
  \********************************************************************/
/*! exports provided: typesOfYeast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typesOfYeast\", function() { return typesOfYeast; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RegistrationForm/handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n\n\n\n\nconst typesOfYeast = (element) => {\n     \n    const selectElement = Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createSelect\"])(\"filtersForm-yeasts\")(\"yeasts\");\n\n        const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])( \n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"dowolne\")(\"dowolne\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Wyeast 1056 - American Ale™\")(\"American Ale\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Wyeast 1272 - American Ale II™\")(\"American Ale II\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Wyeast 3522 - Belgian Ardennes™\")(\"Belgian Ardennes\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Wyeast 3711 - French Saison™\")(\"French Saison\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Wyeast 2007 - Pilsen Lager™\")(\"Pilsner Lager\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Wyeast 3333 - German Wheat™\")(\"German Wheat\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Saflager S189\")(\"Saflager\"),\n                    Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createOption\"])(\"filter\")(\"Wyeast 3638 - Bavarian Wheat™\")(\"Bavarian Wheat\"),\n            )(selectElement)\n\n    element.appendChild(wrapperDiv);\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/Filters/componentsOfFilters/typesOfYeast.js?");

/***/ }),

/***/ "./src/components/Filters/createFilterOptions.js":
/*!*******************************************************!*\
  !*** ./src/components/Filters/createFilterOptions.js ***!
  \*******************************************************/
/*! exports provided: createFilterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFilterOptions\", function() { return createFilterOptions; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RegistrationForm/handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _componentsOfFilters_degreeOfColorOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsOfFilters/degreeOfColorOption */ \"./src/components/Filters/componentsOfFilters/degreeOfColorOption.js\");\n/* harmony import */ var _componentsOfFilters_typesOfYeast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsOfFilters/typesOfYeast */ \"./src/components/Filters/componentsOfFilters/typesOfYeast.js\");\n\n\n\n\n\n\n\nconst createFilterOptions = () => Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])( \n                                              _componentsOfFilters_degreeOfColorOption__WEBPACK_IMPORTED_MODULE_2__[\"degreeOfColorOption\"],\n                                              _componentsOfFilters_typesOfYeast__WEBPACK_IMPORTED_MODULE_3__[\"typesOfYeast\"],\n                                              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createBtn\"])(\"send\")(\"szukaj\")\n                                          )(Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createForm\"])(\"filterOptions-form\"))\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/Filters/createFilterOptions.js?");

/***/ }),

/***/ "./src/components/Filters/filters.js":
/*!*******************************************!*\
  !*** ./src/components/Filters/filters.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showFilters */ \"./src/components/Filters/showFilters.js\");\n\n\n\nconst Filters = () => {\n\n    const filtersButton = document.querySelector(\"button.filters\");\n    filtersButton.addEventListener(\"click\", (e) => Object(_showFilters__WEBPACK_IMPORTED_MODULE_0__[\"showFilters\"])(e));\n};\n\n\nFilters();\n\n//# sourceURL=webpack:///./src/components/Filters/filters.js?");

/***/ }),

/***/ "./src/components/Filters/showFilters.js":
/*!***********************************************!*\
  !*** ./src/components/Filters/showFilters.js ***!
  \***********************************************/
/*! exports provided: showFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFilters\", function() { return showFilters; });\n/* harmony import */ var _createFilterOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFilterOptions */ \"./src/components/Filters/createFilterOptions.js\");\n/* harmony import */ var _searchFilteredBeers_onSubmitFiltersForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ searchFilteredBeers/onSubmitFiltersForm */ \"./src/components/Filters/ searchFilteredBeers/onSubmitFiltersForm.js\");\n/* harmony import */ var _searchFilteredBeers_uncheckTheWszystkieInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ searchFilteredBeers/uncheckTheWszystkieInput */ \"./src/components/Filters/ searchFilteredBeers/uncheckTheWszystkieInput.js\");\n\n\n\n\n\nconst showFilters = (e) => {\n\n    const button = e.target;\n    const filterForm = Object(_createFilterOptions__WEBPACK_IMPORTED_MODULE_0__[\"createFilterOptions\"])();   \n   \n    if(button !== e.currentTarget || button.childNodes.length > 1) return;\n   \n    button.appendChild(filterForm);\n    Object(_searchFilteredBeers_uncheckTheWszystkieInput__WEBPACK_IMPORTED_MODULE_2__[\"uncheckTheWszystkieInput\"])(filterForm);\n    Object(_searchFilteredBeers_onSubmitFiltersForm__WEBPACK_IMPORTED_MODULE_1__[\"onSubmitFiltersForm\"])(filterForm);\n}\n\n\n\n//# sourceURL=webpack:///./src/components/Filters/showFilters.js?");

/***/ }),

/***/ "./src/components/LoadPage.js":
/*!************************************!*\
  !*** ./src/components/LoadPage.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _getBeersFromAPI_responseCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getBeersFromAPI/responseCreator */ \"./src/components/getBeersFromAPI/responseCreator.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/router */ \"./src/components/router/router.js\");\n/* harmony import */ var _getBeersFromAPI_loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getBeersFromAPI/loader/loader */ \"./src/components/getBeersFromAPI/loader/loader.js\");\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\", () => { \n\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"fetchBeginAction\"])());\n    _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_getBeersFromAPI_responseCreator__WEBPACK_IMPORTED_MODULE_2__[\"createResponse\"])());\n \n    Object(_router_router__WEBPACK_IMPORTED_MODULE_3__[\"router\"])(); \n    Object(_getBeersFromAPI_loader_loader__WEBPACK_IMPORTED_MODULE_4__[\"insertLoader\"])();\n  });\n\n  \n\n\n\n//# sourceURL=webpack:///./src/components/LoadPage.js?");

/***/ }),

/***/ "./src/components/LoginWindow/LoginWindow.js":
/*!***************************************************!*\
  !*** ./src/components/LoginWindow/LoginWindow.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openLoginWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openLoginWindow */ \"./src/components/LoginWindow/openLoginWindow.js\");\n\n\n\n\nconst LoginWindow = () => {\n\n    const liElement = document.querySelector(\"li.account\");\n\n    liElement.addEventListener(\"click\", _openLoginWindow__WEBPACK_IMPORTED_MODULE_0__[\"openLoginWindow\"] )\n};\n\n\n\nLoginWindow();\n\n//# sourceURL=webpack:///./src/components/LoginWindow/LoginWindow.js?");

/***/ }),

/***/ "./src/components/LoginWindow/componentsOfCreateLoginWindow/createLoginForm.js":
/*!*************************************************************************************!*\
  !*** ./src/components/LoginWindow/componentsOfCreateLoginWindow/createLoginForm.js ***!
  \*************************************************************************************/
/*! exports provided: createLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLoginForm\", function() { return createLoginForm; });\n/* harmony import */ var _RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RegistrationForm/handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\nconst createLoginForm = (element) => {\n\n    const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(  \n              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createLabelWithRequired\"])(\"\")(\"e-mail\")(\"e-mail\"),\n              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createEmailInput\"])(\"\")(\"e-mail\"),\n              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createLabelWithRequired\"])(\"\")(\"password\")(\"hasło\"),\n              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createPasswordInput\"])(\"\")(\"password\"),\n              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createCheckboxInput\"])(\"check\")(\"check\")(\"check\"),\n              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createLabel\"])(\"\")(\"check\")(\"zapamiętaj mnie\"),\n              Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createBtn\"])(\"\")('zaloguj')             \n        )(Object(_RegistrationForm_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createForm\"])(\"login-form\"))\n            \n //   wrapper.onsubmit = registrationFormValidator();\n\n    element.appendChild(wrapper);\n  return element;    \n}\n\n//# sourceURL=webpack:///./src/components/LoginWindow/componentsOfCreateLoginWindow/createLoginForm.js?");

/***/ }),

/***/ "./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowHeader.js":
/*!***************************************************************************************!*\
  !*** ./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowHeader.js ***!
  \***************************************************************************************/
/*! exports provided: loginWindowHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginWindowHeader\", function() { return loginWindowHeader; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst loginWindowHeader = (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(    \n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"\")(\"beers\"),\n                        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"zaloguj się\"),\n                    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"loginWindow-header\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n\n//# sourceURL=webpack:///./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowHeader.js?");

/***/ }),

/***/ "./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowQuestions.js":
/*!******************************************************************************************!*\
  !*** ./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowQuestions.js ***!
  \******************************************************************************************/
/*! exports provided: loginWindowQuestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginWindowQuestions\", function() { return loginWindowQuestions; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst loginWindowQuestions = (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(    \n                          Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createWrapperDiv\"])(\"\")(\n                                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"Nie posiadasz jeszcze konta? \"),\n                                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"zarejestruj się\")(\"#/rejestracja\"),\n                          ),             \n                          Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"nie pamiętasz hasła?\")(\"#/przypomnij-haslo\"),                  \n                    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"loginWindow-questions\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n\n\n\n//# sourceURL=webpack:///./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowQuestions.js?");

/***/ }),

/***/ "./src/components/LoginWindow/createBtnToCloseLoginWindow.js":
/*!*******************************************************************!*\
  !*** ./src/components/LoginWindow/createBtnToCloseLoginWindow.js ***!
  \*******************************************************************/
/*! exports provided: buttonToCloseLoginWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonToCloseLoginWindow\", function() { return buttonToCloseLoginWindow; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _toManipulateDOM_removeModal_removeLoginWindowModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removeModal/removeLoginWindowModal */ \"./src/components/toManipulateDOM/removeModal/removeLoginWindowModal.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\nconst createButtonToCloseLoginWindow = (cl) => (txtContent) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(_toManipulateDOM_removeModal_removeLoginWindowModal__WEBPACK_IMPORTED_MODULE_1__[\"removeLoginWindowModal\"])()\n        )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n return element;\n}\n\n\n\nconst buttonToCloseLoginWindow = (element) => createButtonToCloseLoginWindow(\"loginWindow-close\")(\"x\")(element);  \n\n//# sourceURL=webpack:///./src/components/LoginWindow/createBtnToCloseLoginWindow.js?");

/***/ }),

/***/ "./src/components/LoginWindow/createLoginWindow.js":
/*!*********************************************************!*\
  !*** ./src/components/LoginWindow/createLoginWindow.js ***!
  \*********************************************************/
/*! exports provided: createLoginWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLoginWindow\", function() { return createLoginWindow; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _componentsOfCreateLoginWindow_createLoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsOfCreateLoginWindow/createLoginForm */ \"./src/components/LoginWindow/componentsOfCreateLoginWindow/createLoginForm.js\");\n/* harmony import */ var _createBtnToCloseLoginWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBtnToCloseLoginWindow */ \"./src/components/LoginWindow/createBtnToCloseLoginWindow.js\");\n/* harmony import */ var _componentsOfCreateLoginWindow_loginWindowHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentsOfCreateLoginWindow/loginWindowHeader */ \"./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowHeader.js\");\n/* harmony import */ var _componentsOfCreateLoginWindow_loginWindowQuestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentsOfCreateLoginWindow/loginWindowQuestions */ \"./src/components/LoginWindow/componentsOfCreateLoginWindow/loginWindowQuestions.js\");\n\n\n\n\n\n\n\n\n\n\nconst createLoginWindow = () => \n                  Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(    \n                        _createBtnToCloseLoginWindow__WEBPACK_IMPORTED_MODULE_3__[\"buttonToCloseLoginWindow\"],    \n                        _componentsOfCreateLoginWindow_loginWindowHeader__WEBPACK_IMPORTED_MODULE_4__[\"loginWindowHeader\"],\n                        _componentsOfCreateLoginWindow_createLoginForm__WEBPACK_IMPORTED_MODULE_2__[\"createLoginForm\"],\n                        _componentsOfCreateLoginWindow_loginWindowQuestions__WEBPACK_IMPORTED_MODULE_5__[\"loginWindowQuestions\"],\n                    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"loginWindow\"));\n\n                   \n                \n \n\n//# sourceURL=webpack:///./src/components/LoginWindow/createLoginWindow.js?");

/***/ }),

/***/ "./src/components/LoginWindow/openLoginWindow.js":
/*!*******************************************************!*\
  !*** ./src/components/LoginWindow/openLoginWindow.js ***!
  \*******************************************************/
/*! exports provided: openLoginWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openLoginWindow\", function() { return openLoginWindow; });\n/* harmony import */ var _createLoginWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLoginWindow */ \"./src/components/LoginWindow/createLoginWindow.js\");\n\n\n\n\nconst openLoginWindow = () => {\n\n    const body = document.querySelector(\"body\"); \n    const loginWindow = Object(_createLoginWindow__WEBPACK_IMPORTED_MODULE_0__[\"createLoginWindow\"])();\n    \n    body.appendChild(loginWindow);\n}\n  \n\n\n//# sourceURL=webpack:///./src/components/LoginWindow/openLoginWindow.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/OfferOnPage.js":
/*!***************************************************!*\
  !*** ./src/components/OfferOnPage/OfferOnPage.js ***!
  \***************************************************/
/*! exports provided: OfferOnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OfferOnPage\", function() { return OfferOnPage; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createOfferOnPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createOfferOnPage */ \"./src/components/OfferOnPage/createOfferOnPage.js\");\n\n\n\n\n\n\nconst OfferOnPage = () => {\n\n    const area = document.querySelector(\"main\");\n    const beers = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToResponseForOffer.items;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"clearContentOf\"])(area);  \n    Object(_createOfferOnPage__WEBPACK_IMPORTED_MODULE_2__[\"createOfferOnPage\"])(beers);\n\n};\n\n\n\n        \n      \n       \n\n//# sourceURL=webpack:///./src/components/OfferOnPage/OfferOnPage.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/createAndAddSentinel.js":
/*!************************************************************!*\
  !*** ./src/components/OfferOnPage/createAndAddSentinel.js ***!
  \************************************************************/
/*! exports provided: createAndAddSentinel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAndAddSentinel\", function() { return createAndAddSentinel; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\nconst createAndAddSentinel = (area) => {\n\n   const sentinel = Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"sentinel\");\n   area.appendChild(sentinel)\n}\n\n//# sourceURL=webpack:///./src/components/OfferOnPage/createAndAddSentinel.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/createBeerLabel.js":
/*!*******************************************************!*\
  !*** ./src/components/OfferOnPage/createBeerLabel.js ***!
  \*******************************************************/
/*! exports provided: createBeerLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBeerLabel\", function() { return createBeerLabel; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n/* harmony import */ var _createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createLinkRedirectToDescription */ \"./src/components/OfferOnPage/createLinkRedirectToDescription.js\");\n\n\n\n\n\n\n\nconst createBeerLabel = (beer) => Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n                                            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"beerTitle\")(beer.name),\n                                            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(\"piwo\")(beer.image_url),\n                                            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${beer.abv} $`),\n                                            Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createBtnAddToCartAndOpenPreviev\"])(\"cartBtn\")(\"koszyk\")(beer),\n                                            Object(_createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_3__[\"createLinkRedirectToDescription\"])(\"\")(\"opis\")(beer),\n                                         )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"beer-label\"))\n              \n\n\n//# sourceURL=webpack:///./src/components/OfferOnPage/createBeerLabel.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/createLinkRedirectToDescription.js":
/*!***********************************************************************!*\
  !*** ./src/components/OfferOnPage/createLinkRedirectToDescription.js ***!
  \***********************************************************************/
/*! exports provided: createLinkRedirectToDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkRedirectToDescription\", function() { return createLinkRedirectToDescription; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _insertDashesToPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertDashesToPath */ \"./src/components/OfferOnPage/insertDashesToPath.js\");\n\n\n\n\n\n\n\n\nconst createLinkRedirectToDescription = (cl) => (text) => (beer) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setPath\"])(`#/opis/${Object(_insertDashesToPath__WEBPACK_IMPORTED_MODULE_3__[\"insertDashesToPath\"])(beer.name)}`),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setTextContent\"])(text),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setOnclickFn\"])(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchSetCurrentBeer\"])(beer)\n     )(document.createElement(\"a\"));\n        \n    element.appendChild(link);\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/OfferOnPage/createLinkRedirectToDescription.js?");

/***/ }),

/***/ "./src/components/OfferOnPage/createOfferOnPage.js":
/*!*********************************************************!*\
  !*** ./src/components/OfferOnPage/createOfferOnPage.js ***!
  \*********************************************************/
/*! exports provided: createOfferOnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createOfferOnPage\", function() { return createOfferOnPage; });\n/* harmony import */ var _createBeerLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBeerLabel */ \"./src/components/OfferOnPage/createBeerLabel.js\");\n/* harmony import */ var _createAndAddSentinel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAndAddSentinel */ \"./src/components/OfferOnPage/createAndAddSentinel.js\");\n\n\n\n\n\nconst createOfferOnPage = (beers) => {\n\n    const area = document.querySelector(\"main\");\n      \n      beers.map(beer => {\n        const beerWrapper = Object(_createBeerLabel__WEBPACK_IMPORTED_MODULE_0__[\"createBeerLabel\"])(beer)\n          area.appendChild(beerWrapper);\n    });\n\n    Object(_createAndAddSentinel__WEBPACK_IMPORTED_MODULE_1__[\"createAndAddSentinel\"])(area);\n};\n\n//# sourceURL=webpack:///./src/components/OfferOnPage/createOfferOnPage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegistrationForm\", function() { return RegistrationForm; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _infoAboutPassword_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoAboutPassword.js */ \"./src/components/RegistrationForm/infoAboutPassword.js\");\n/* harmony import */ var _createRegistrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRegistrationForm */ \"./src/components/RegistrationForm/createRegistrationForm.js\");\n/* harmony import */ var _toManipulateDOM_removeModal_removeLoginWindowModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toManipulateDOM/removeModal/removeLoginWindowModal */ \"./src/components/toManipulateDOM/removeModal/removeLoginWindowModal.js\");\n\n\n\n\n\n\n\nconst RegistrationForm = () => {\n\n    const area = document.querySelector(\"main\");\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"clearContentOf\"])(area);  \n    Object(_toManipulateDOM_removeModal_removeLoginWindowModal__WEBPACK_IMPORTED_MODULE_3__[\"removeLoginWindowModal\"])();\n    Object(_createRegistrationForm__WEBPACK_IMPORTED_MODULE_2__[\"createRegistrationForm\"])();\n    Object(_infoAboutPassword_js__WEBPACK_IMPORTED_MODULE_1__[\"infoAboutPassword\"])()\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/RegistrationForm.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js":
/*!******************************************************************************************!*\
  !*** ./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js ***!
  \******************************************************************************************/
/*! exports provided: formAcceptFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formAcceptFields\", function() { return formAcceptFields; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\nconst formAcceptFields = (element) => {\n\n  const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(           \n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createCheckboxInput\"])(\"acceptRegulations\")(\"regulamin\")(\"acceptRegulations\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createWrapperDiv\"])(\"agreementOnRules\")(\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"Akceptuję \"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createLinkTo\"])(\"\")(\"regulamin serwisu\")(\"#/regulamin-serwisu\"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\" i zapoznałem się z \"),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createLinkTo\"])(\"\")(\"polityką prywatności *\")(\"#/polityka-prywatnosci\")\n            ),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createCheckboxInput\"])(\"acceptSendingNewsletter\")(\"newsletter\")(\"acceptSendingNewsletter\"),    \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"Wyrażam zgodę na wysyłanie mi meilowo przez Beers S.A. z siedzibą w Poznaniu wiadomości marketingowych.\")      \n    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"form-acceptFields\"))\n        \n    element.appendChild(wrapper);\n return element\n} \n\n//# sourceURL=webpack:///./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formTextFields\", function() { return formTextFields; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\nconst formTextFields = (element) => {\n\n  const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(           \n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"imie\")(\"imię\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createTextInput\"])(\"name\")(\"imie\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"nazwisko\")(\"nazwisko\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createTextInput\"])(\"surname\")(\"nazwisko\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"e-mail\")(\"e-mail\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createEmailInput\"])(\"email\")(\"e-mail\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"haslo\")(\"hasło\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createPasswordInput\"])(\"password\")(\"haslo\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDivWithinElement\"])(\"withInfo\")(\"hasło musi mieć min. 6 znaków, moze składać się z duzych liter, znaków specjalnych i liczb\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createLabelWithRequired\"])(\"\")(\"haslo2\")(\"powtórz hasło\"),\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_1__[\"createPasswordInput\"])(\"passwordRepeated\")(\"haslo2\"), \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"infoAboutAsterix\")(\"* - pola obowiązkowe\")\n    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"form-textFields\"))\n        \n    element.appendChild(wrapper);\n return element\n\n} \n\n//# sourceURL=webpack:///./src/components/RegistrationForm/componentsOfRegistrationForm/formTextFields.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/createRegistrationForm.js":
/*!*******************************************************************!*\
  !*** ./src/components/RegistrationForm/createRegistrationForm.js ***!
  \*******************************************************************/
/*! exports provided: createRegistrationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRegistrationForm\", function() { return createRegistrationForm; });\n/* harmony import */ var _handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToCreateForm */ \"./src/components/RegistrationForm/handlersToCreateForm.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _componentsOfRegistrationForm_formHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsOfRegistrationForm/formHeader */ \"./src/components/RegistrationForm/componentsOfRegistrationForm/formHeader.js\");\n/* harmony import */ var _componentsOfRegistrationForm_formTextFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentsOfRegistrationForm/formTextFields */ \"./src/components/RegistrationForm/componentsOfRegistrationForm/formTextFields.js\");\n/* harmony import */ var _componentsOfRegistrationForm_formAcceptFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentsOfRegistrationForm/formAcceptFields */ \"./src/components/RegistrationForm/componentsOfRegistrationForm/formAcceptFields.js\");\n/* harmony import */ var _validation_registrationFormValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation/registrationFormValidator */ \"./src/components/RegistrationForm/validation/registrationFormValidator.js\");\n/* harmony import */ var _validationBeforeSubmit_validationBeforeSubmit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validationBeforeSubmit/validationBeforeSubmit */ \"./src/components/RegistrationForm/validationBeforeSubmit/validationBeforeSubmit.js\");\n\n\n\n\n\n\n\n\n\n\nconst createRegistrationForm = () => {\n\n    const area = document.querySelector(\"main\");\n\n    const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(     \n            _componentsOfRegistrationForm_formHeader__WEBPACK_IMPORTED_MODULE_2__[\"formHeader\"],\n            _componentsOfRegistrationForm_formTextFields__WEBPACK_IMPORTED_MODULE_3__[\"formTextFields\"],\n            _componentsOfRegistrationForm_formAcceptFields__WEBPACK_IMPORTED_MODULE_4__[\"formAcceptFields\"],\n            Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createBtn\"])(\"\")('dokończ rejestrację'),         \n        )(Object(_handlersToCreateForm__WEBPACK_IMPORTED_MODULE_0__[\"createForm\"])(\"registration-form\"))\n            \n    area.appendChild(wrapper);\n\n    Object(_validationBeforeSubmit_validationBeforeSubmit__WEBPACK_IMPORTED_MODULE_6__[\"validationBeforeSubmit\"])(wrapper);\n    wrapper.onsubmit = Object(_validation_registrationFormValidator__WEBPACK_IMPORTED_MODULE_5__[\"registrationFormValidator\"])();\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/createRegistrationForm.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/handlersToCreateForm.js":
/*!*****************************************************************!*\
  !*** ./src/components/RegistrationForm/handlersToCreateForm.js ***!
  \*****************************************************************/
/*! exports provided: createForm, createSelect, createOption, createTextInput, createPasswordInput, createCheckboxInput, createCheckedCheckboxInput, createEmailInput, createRadioInput, createStrongWithAbbrAtr, createLabelWithRequired, createLabel, createBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForm\", function() { return createForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSelect\", function() { return createSelect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createOption\", function() { return createOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTextInput\", function() { return createTextInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPasswordInput\", function() { return createPasswordInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCheckboxInput\", function() { return createCheckboxInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCheckedCheckboxInput\", function() { return createCheckedCheckboxInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEmailInput\", function() { return createEmailInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRadioInput\", function() { return createRadioInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStrongWithAbbrAtr\", function() { return createStrongWithAbbrAtr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLabelWithRequired\", function() { return createLabelWithRequired; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLabel\", function() { return createLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtn\", function() { return createBtn; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\nconst createForm = (cl) => { \n\n    const element = document.createElement(\"form\");\n    const elementWithClss =  Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl)(element);\n  return elementWithClss;\n};\n\n\nconst createSelect = (cl) => (name) => { \n\n    const select = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n          )(document.createElement(\"select\"));\n\n return select;\n};\n\n\nconst createOption = (cl) => (value) => (textContent) => (element) => {\n\n    const textInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setValue\"])(value),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(textContent)\n    )(document.createElement(\"option\"));\n\n  element.appendChild(textInput);\n return element;\n}\n\n\nconst createTextInput = (cl) => (name) => (element) => {\n\n    const textInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"text\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(textInput);\n return element;\n}\n\n\nconst createPasswordInput = (cl) => (name) => (element) => {\n\n    const passwordInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"password\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(passwordInput);\n return element;\n}\n\n\nconst createCheckboxInput = (cl) => (name) => (value) => (element) => {\n\n    const checkboxInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setValue\"])(value),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"checkbox\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(checkboxInput);\nreturn element;\n}\n\n\nconst createCheckedCheckboxInput = (cl) => (name) => (value) => (element) => {\n\n    const checkboxInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setValue\"])(value),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setChecked\"])(\"true\"),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"checkbox\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(checkboxInput);\nreturn element;\n}\n\n\nconst createEmailInput = (cl) => (name) => (element) => {\n\n    const passwordInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"email\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(passwordInput);\nreturn element;\n}\n\n\nconst createRadioInput = (cl) => (value) => (element) => {\n\n    const radioInput = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setName\"])(name),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setValue\"])(value),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setType\"])(\"radio\")\n    )(document.createElement(\"input\"));\n\n  element.appendChild(radioInput);\nreturn element;\n}\n\n\n\nconst createStrongWithAbbrAtr = (abbrTitle) => (element) => {\n\n    const strong = document.createElement(\"strong\");\n    const abbr = document.createElement(\"abbr\");\n    abbr.title = abbrTitle;\n    abbr.textContent = \"*\";\n    strong.appendChild(abbr);\n    element.appendChild(strong);\n\n  return element  \n}\n\n\n  const createLabelWithRequired = (cl) => (to) => (textContent) => (element) => {\n\n      const label = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setforAtr\"])(to),\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(textContent),\n              createStrongWithAbbrAtr(\"required\")\n        )(document.createElement(\"label\"));\n\n    element.appendChild(label);\n  return element;\n    \n  }\n\n\n  const createLabel = (cl) => (to) => (textContent) => (element) => {\n\n      const label = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setforAtr\"])(to),\n              Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(textContent),\n        )(document.createElement(\"label\"));\n\n    element.appendChild(label);\n  return element;\n  \n}\n\n\n  const createBtn = (cl) =>  (textContent) => (element) => {\n\n        const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n                Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(textContent),\n            )(document.createElement(\"button\"));\n      \n      element.appendChild(btn);\n    return element;\n  }\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/handlersToCreateForm.js?");

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
/*! exports provided: includeNumber, checkIfIncludesNumb, checkIfIsTooBrief, checkIfIsEmailCorrect, checkPasswordLength, checkIfPasswordIsIdentical, checkIfIsAgreement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"includeNumber\", function() { return includeNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIncludesNumb\", function() { return checkIfIncludesNumb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIsTooBrief\", function() { return checkIfIsTooBrief; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIsEmailCorrect\", function() { return checkIfIsEmailCorrect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkPasswordLength\", function() { return checkPasswordLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfPasswordIsIdentical\", function() { return checkIfPasswordIsIdentical; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfIsAgreement\", function() { return checkIfIsAgreement; });\n\nconst includeNumber = (text) => [...text].some(x => x.match(/\\d+/g));\n\nconst checkIfIncludesNumb = (text) =>{ \n    if(includeNumber(text)){\n     throw \"nie moze zawierać cyfry\";\n    } else{\n        return text;\n    } \n};\n\nconst checkIfIsTooBrief = (text) => {\n    if(text.length < 3){\n        throw \"minimum 3 znaki\";\n    } else{\n        return text;\n    } \n};\n\nconst checkIfIsEmailCorrect = (text) => {\n    if(text.includes(\".\") && text.includes(\"@\")){\n        return text;\n    } else{\n        throw \"niepoprawny e-mail\";\n    } \n};\n\nconst checkPasswordLength = (text) => {\n    if(text.length < 6){\n        throw \"hasło musi mieć min. 6 znaków\";\n    } else{\n        return text;\n    } \n};\n\nconst checkIfPasswordIsIdentical = (prevText) => (text) => {\n    if(prevText !== text){\n        throw \"hasło nie jest identyczne\";\n    } else{\n        return text;\n    } \n};\n\n\nconst checkIfIsAgreement = (checked) => {\n    if(!checked){\n        throw \"musisz wyrazić zgodę\";\n    } \n};\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/checkingFunctions.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchValidationOK\", function() { return dispatchValidationOK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchNoValidation\", function() { return dispatchNoValidation; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n\n\n\n\n//export const dispatchValidationOK = (v) => store.dispatch(validationOKaction(v));\n\n//export const dispatchNoValidation = (e) => store.dispatch(NoValidationAction(e));\n\nconst dispatchValidationOK = (v) => console.log(\"validOK\");\nconst dispatchNoValidation = (e) => console.log(e.toString());\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/helpersToValidation.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/matchInputs.js":
/*!*******************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/matchInputs.js ***!
  \*******************************************************************/
/*! exports provided: matchInputWithFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchInputWithFn\", function() { return matchInputWithFn; });\n/* harmony import */ var _composingOfCheckingFunctions_verifyName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyName */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyName.js\");\n/* harmony import */ var _composingOfCheckingFunctions_verifyEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyEmail */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyEmail.js\");\n/* harmony import */ var _composingOfCheckingFunctions_verifyAgreement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyAgreement */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyAgreement.js\");\n/* harmony import */ var _composingOfCheckingFunctions_verifyPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./composingOfCheckingFunctions/verifyPassword */ \"./src/components/RegistrationForm/validation/composingOfCheckingFunctions/verifyPassword.js\");\n\n\n\n\n\n\n\nconst matchInputWithFn = (input) => ({\n\n                \"text\" : Object(_composingOfCheckingFunctions_verifyName__WEBPACK_IMPORTED_MODULE_0__[\"verifyName\"])(input.value),\n                \"email\" : Object(_composingOfCheckingFunctions_verifyEmail__WEBPACK_IMPORTED_MODULE_1__[\"verifyEmail\"])(input.value),\n                \"radio\" : Object(_composingOfCheckingFunctions_verifyAgreement__WEBPACK_IMPORTED_MODULE_2__[\"verifyAgreement\"])(input.checked),\n                \"password\" : Object(_composingOfCheckingFunctions_verifyPassword__WEBPACK_IMPORTED_MODULE_3__[\"verifyPassword\"])(input.value),\n                \n            })[input.type]\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/matchInputs.js?");

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

/***/ "./src/components/RegistrationForm/validation/toEitherToValidateForm.js":
/*!******************************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/toEitherToValidateForm.js ***!
  \******************************************************************************/
/*! exports provided: toEitherForValidateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toEitherForValidateForm\", function() { return toEitherForValidateForm; });\n/* harmony import */ var _helpersToValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpersToValidation */ \"./src/components/RegistrationForm/validation/helpersToValidation.js\");\n/* harmony import */ var _monads_Either_Either__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../monads/Either/Either */ \"./src/monads/Either/Either.js\");\n\n\n\n\nconst toEitherForValidateForm = (checkFn) =>   _monads_Either_Either__WEBPACK_IMPORTED_MODULE_1__[\"default\"].of(checkFn)\n                                                            .match({\n                                                                Right: (v) => Object(_helpersToValidation__WEBPACK_IMPORTED_MODULE_0__[\"dispatchValidationOK\"])(v),\n                                                                Left: (e) => Object(_helpersToValidation__WEBPACK_IMPORTED_MODULE_0__[\"dispatchNoValidation\"])(e)          \n                                                                }) \n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/toEitherToValidateForm.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validation/validation.js":
/*!******************************************************************!*\
  !*** ./src/components/RegistrationForm/validation/validation.js ***!
  \******************************************************************/
/*! exports provided: validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validation\", function() { return validation; });\n/* harmony import */ var _matchInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchInputs */ \"./src/components/RegistrationForm/validation/matchInputs.js\");\n/* harmony import */ var _toEitherToValidateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toEitherToValidateForm */ \"./src/components/RegistrationForm/validation/toEitherToValidateForm.js\");\n\n\n\n\n\n\nconst validation = (form) => {\n\n    const formInputs = [...form.querySelectorAll(\"input\")];\n\n    formInputs.map(input => {\n        const checkFn = Object(_matchInputs__WEBPACK_IMPORTED_MODULE_0__[\"matchInputWithFn\"])(input);\n        Object(_toEitherToValidateForm__WEBPACK_IMPORTED_MODULE_1__[\"toEitherForValidateForm\"])(checkFn)\n    })  \n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validation/validation.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/helpers/checkingFunctions.js":
/*!*********************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/helpers/checkingFunctions.js ***!
  \*********************************************************************************************/
/*! exports provided: ifIncorrectNameFormat, ifIncorrectEmailFormat, ifNoAgreement, ifIncorrectPasswordLength, ifNoIdenticalPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifIncorrectNameFormat\", function() { return ifIncorrectNameFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifIncorrectEmailFormat\", function() { return ifIncorrectEmailFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifNoAgreement\", function() { return ifNoAgreement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifIncorrectPasswordLength\", function() { return ifIncorrectPasswordLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifNoIdenticalPassword\", function() { return ifNoIdenticalPassword; });\n/* harmony import */ var _validation_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validation/checkingFunctions */ \"./src/components/RegistrationForm/validation/checkingFunctions.js\");\n\n\n\nconst ifIncorrectNameFormat = (name) => Object(_validation_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"includeNumber\"])(name) || name.length < 2;\n\nconst ifIncorrectEmailFormat = (email) => !(/(^\\w.*@\\w+\\.\\w)/.test(email));\n\nconst ifNoAgreement = (checked) => !checked; \n\nconst ifIncorrectPasswordLength = (password) => password.length < 5;\n\nconst ifNoIdenticalPassword = (password) => (prevPassword) => password !== prevPassword;\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/helpers/checkingFunctions.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/helpers/objWithInputsByClassName.js":
/*!****************************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/helpers/objWithInputsByClassName.js ***!
  \****************************************************************************************************/
/*! exports provided: objWithInputsByClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objWithInputsByClassName\", function() { return objWithInputsByClassName; });\nconst objWithInputsByClassName = (inputs) => inputs.reduce((acc,item) => (acc[item.className] = item, acc), {});\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/helpers/objWithInputsByClassName.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/managingOfValidationAlerts.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/managingOfValidationAlerts.js ***!
  \**********************************************************************************************/
/*! exports provided: managingOfValidationAlerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"managingOfValidationAlerts\", function() { return managingOfValidationAlerts; });\n/* harmony import */ var _validationAlerts_createAlertIfNoValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationAlerts/createAlertIfNoValid */ \"./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/createAlertIfNoValid.js\");\n/* harmony import */ var _validationAlerts_inlineValidationElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validationAlerts/inlineValidationElement */ \"./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/inlineValidationElement.js\");\n/* harmony import */ var _reValidationInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reValidationInputs */ \"./src/components/RegistrationForm/validationBeforeSubmit/reValidationInputs.js\");\n\n\n\n\n\n\n\nconst managingOfValidationAlerts = (form) => (currentInput) => {\n    \n    const inputs = [...form.querySelectorAll(\"input\")]; \n    const validateMessage = Object(_validationAlerts_createAlertIfNoValid__WEBPACK_IMPORTED_MODULE_0__[\"createAlertIfNoValid\"])(inputs)(currentInput.className);\n    const inlineValidation = Object(_validationAlerts_inlineValidationElement__WEBPACK_IMPORTED_MODULE_1__[\"inlineValidationElement\"])(validateMessage)(currentInput);\n    const textFields = form.querySelector(\".form-textFields\"); \n    const inlineWalidationAlreadyIs = textFields.getElementsByClassName(`inlineValidation ${currentInput.className}`).length;                                                                                             \n\n    if(validateMessage){ \n        if(currentInput.type === 'checkbox'){\n            inlineValidation.className = \"inlineValidationForChecked\";\n            inlineValidation.style.top = \"32%\";\n        } \n        currentInput.style.backgroundColor = \"orangered\";\n        textFields.appendChild(inlineValidation);\n        Object(_reValidationInputs__WEBPACK_IMPORTED_MODULE_2__[\"reValidationInputs\"])(currentInput)(inputs)(inlineValidation);\n    }\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/managingOfValidationAlerts.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/matchValidationMessage.js":
/*!******************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/matchValidationMessage.js ***!
  \******************************************************************************************/
/*! exports provided: matchValidationMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchValidationMessage\", function() { return matchValidationMessage; });\n/* harmony import */ var _helpers_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/checkingFunctions */ \"./src/components/RegistrationForm/validationBeforeSubmit/helpers/checkingFunctions.js\");\n\n\n\nconst matchValidationMessage = ({ \n    name,\n    surname,\n    email,\n    password,\n    passwordRepeated,\n    acceptRegulations  \n  }) => ({\n\n    name: Object(_helpers_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"ifIncorrectNameFormat\"])(name.value) && \"imie musi mieć min. 2 litery\",\n    surname: Object(_helpers_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"ifIncorrectNameFormat\"])(surname.value) && \"nazwisko musi mieć min. 2 litery\",\n    email : Object(_helpers_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"ifIncorrectEmailFormat\"])(email.value) && \"nieprawidłowy format adresu e-mail\",\n    password: Object(_helpers_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"ifIncorrectPasswordLength\"])(password.value) && \"hasło musi zawierac wiecej niz 6 znaków\",\n    passwordRepeated: Object(_helpers_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"ifNoIdenticalPassword\"])(passwordRepeated.value)(password.value) && 'musi być identyczne',\n    acceptRegulations: Object(_helpers_checkingFunctions__WEBPACK_IMPORTED_MODULE_0__[\"ifNoAgreement\"])(acceptRegulations.checked) && 'akceptacja regulaminu jest wymagana',\n\n})\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/matchValidationMessage.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/reValidationInputs.js":
/*!**************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/reValidationInputs.js ***!
  \**************************************************************************************/
/*! exports provided: reValidationInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reValidationInputs\", function() { return reValidationInputs; });\n/* harmony import */ var _validationAlerts_createAlertIfNoValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationAlerts/createAlertIfNoValid */ \"./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/createAlertIfNoValid.js\");\n\n\n\n\nconst reValidationInputs = (currentInput) => (inputs) => (inlineValidation) =>\n    currentInput.addEventListener(\"input\", () => {\n       const validateMessage = Object(_validationAlerts_createAlertIfNoValid__WEBPACK_IMPORTED_MODULE_0__[\"createAlertIfNoValid\"])(inputs)(currentInput.className);\n        if(!validateMessage){\n            inlineValidation.parentNode.removeChild(inlineValidation);\n            currentInput.style.backgroundColor = \"green\";\n        }\n    })\n\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/reValidationInputs.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/createAlertIfNoValid.js":
/*!*********************************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/createAlertIfNoValid.js ***!
  \*********************************************************************************************************/
/*! exports provided: createAlertIfNoValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAlertIfNoValid\", function() { return createAlertIfNoValid; });\n/* harmony import */ var _helpers_objWithInputsByClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/objWithInputsByClassName */ \"./src/components/RegistrationForm/validationBeforeSubmit/helpers/objWithInputsByClassName.js\");\n/* harmony import */ var _matchValidationMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matchValidationMessage */ \"./src/components/RegistrationForm/validationBeforeSubmit/matchValidationMessage.js\");\n\n\n\n\n\n\nconst createAlertIfNoValid = (inputs) => (targetInputClassName) => {\n\n    const inputsByClassName = Object(_helpers_objWithInputsByClassName__WEBPACK_IMPORTED_MODULE_0__[\"objWithInputsByClassName\"])(inputs);\n    const matchedMessage = Object(_matchValidationMessage__WEBPACK_IMPORTED_MODULE_1__[\"matchValidationMessage\"])(inputsByClassName)[targetInputClassName];      \n    const alertMessage = matchedMessage ? matchedMessage : \"\";\n    \n    return alertMessage;\n}\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/createAlertIfNoValid.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/inlineValidationElement.js":
/*!************************************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/inlineValidationElement.js ***!
  \************************************************************************************************************/
/*! exports provided: inlineValidationElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inlineValidationElement\", function() { return inlineValidationElement; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\nconst inlineValidationElement = (text) => (currentInput) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(    \n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(text),\n    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"inlineValidation\"));\n    \n    wrapperDiv.style.top = currentInput.offsetTop + \"px\";\n    wrapperDiv.classList.add(currentInput.className);\n\n return wrapperDiv;\n\n}\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/validationAlerts/inlineValidationElement.js?");

/***/ }),

/***/ "./src/components/RegistrationForm/validationBeforeSubmit/validationBeforeSubmit.js":
/*!******************************************************************************************!*\
  !*** ./src/components/RegistrationForm/validationBeforeSubmit/validationBeforeSubmit.js ***!
  \******************************************************************************************/
/*! exports provided: validationBeforeSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validationBeforeSubmit\", function() { return validationBeforeSubmit; });\n/* harmony import */ var _managingOfValidationAlerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managingOfValidationAlerts */ \"./src/components/RegistrationForm/validationBeforeSubmit/managingOfValidationAlerts.js\");\n\n\n\nconst validationBeforeSubmit = (form) => {\n\n        form.addEventListener(\"focusout\", (e) =>{   \n          const currentInput = e.target;\n          Object(_managingOfValidationAlerts__WEBPACK_IMPORTED_MODULE_0__[\"managingOfValidationAlerts\"])(form)(currentInput)\n      })\n}\n\n\n\n  /*\n            const emailInput = form.querySelector(\"input.email\");\n            const passwordInput = form.querySelector(\"input.password\");\n            const passwordRepaetedInput = form.querySelector(\"input.passwordRepeated\");\n            const nameInput = form.querySelector(\"input.name\");\n            const surnameInput = form.querySelector(\"input.surname\");\n            const checkInput = form.querySelector(\"input.acceptRegulations\");\n*/\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/RegistrationForm/validationBeforeSubmit/validationBeforeSubmit.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/ShoppingCart.js":
/*!*****************************************************!*\
  !*** ./src/components/ShoppingCart/ShoppingCart.js ***!
  \*****************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShoppingCart\", function() { return ShoppingCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _toManipulateDOM_removeModal_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removeModal/removePrevievCartModal */ \"./src/components/toManipulateDOM/removeModal/removePrevievCartModal.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createShoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createShoppingCart */ \"./src/components/ShoppingCart/createShoppingCart.js\");\n\n\n\n\n\n\n\nconst ShoppingCart = () => {\n\n    const area = document.querySelector(\"main\");\n    const cartContent = _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState().reducerToShopping;\n\n    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"clearContentOf\"])(area);\n    Object(_toManipulateDOM_removeModal_removePrevievCartModal__WEBPACK_IMPORTED_MODULE_1__[\"removePrevievCartModal\"])();\n\n    Object(_createShoppingCart__WEBPACK_IMPORTED_MODULE_3__[\"createShoppingCart\"])(cartContent)\n}\n\n                \n\n//# sourceURL=webpack:///./src/components/ShoppingCart/ShoppingCart.js?");

/***/ }),

/***/ "./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons1.js":
/*!******************************************************************************!*\
  !*** ./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons1.js ***!
  \******************************************************************************/
/*! exports provided: cartButtons1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartButtons1\", function() { return cartButtons1; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createBtnToOpenLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createBtnToOpenLogin */ \"./src/components/ShoppingCart/createBtnToOpenLogin.js\");\n\n\n\n\n\nconst cartButtons1 = (element) => {\n      \n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n            Object(_createBtnToOpenLogin__WEBPACK_IMPORTED_MODULE_2__[\"createBtnToOpenLogin\"])(\"\")(\"zaloguj się\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"\")(\"lub\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"zarejestruj się\")(\"#/rejestracja\"),\n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"cart-buttons1\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/componentsOfShoppingCart/cartButtons1.js?");

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

/***/ "./src/components/ShoppingCart/createBtnToOpenLogin.js":
/*!*************************************************************!*\
  !*** ./src/components/ShoppingCart/createBtnToOpenLogin.js ***!
  \*************************************************************/
/*! exports provided: createBtnToOpenLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnToOpenLogin\", function() { return createBtnToOpenLogin; });\n/* harmony import */ var _LoginWindow_openLoginWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LoginWindow/openLoginWindow */ \"./src/components/LoginWindow/openLoginWindow.js\");\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\nconst createBtnToOpenLogin = (cl) => (txtContent) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setOnclickFn\"])(_LoginWindow_openLoginWindow__WEBPACK_IMPORTED_MODULE_0__[\"openLoginWindow\"])()\n       )(document.createElement(\"button\"));\n        \n    element.appendChild(btn);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/ShoppingCart/createBtnToOpenLogin.js?");

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

/***/ "./src/components/addToFavoriteAndOpenStatement/addToFavoriteAndOpenStatement.js":
/*!***************************************************************************************!*\
  !*** ./src/components/addToFavoriteAndOpenStatement/addToFavoriteAndOpenStatement.js ***!
  \***************************************************************************************/
/*! exports provided: addToFavoriteAndOpenStatement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToFavoriteAndOpenStatement\", function() { return addToFavoriteAndOpenStatement; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _FavoriteCart_displayCounterOfBeersInFavorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FavoriteCart/displayCounterOfBeersInFavorite */ \"./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js\");\n/* harmony import */ var _openFavoriteStatement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openFavoriteStatement */ \"./src/components/addToFavoriteAndOpenStatement/openFavoriteStatement.js\");\n\n\n\n\n\nconst addToFavoriteAndOpenStatement = (beer) => {\n\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToFavour\"])(beer);\n    Object(_FavoriteCart_displayCounterOfBeersInFavorite__WEBPACK_IMPORTED_MODULE_1__[\"displayCounterOfBeersInFavorite\"])();\n    Object(_openFavoriteStatement__WEBPACK_IMPORTED_MODULE_2__[\"openFavoriteStatement\"])(beer);\n}\n\n//# sourceURL=webpack:///./src/components/addToFavoriteAndOpenStatement/addToFavoriteAndOpenStatement.js?");

/***/ }),

/***/ "./src/components/addToFavoriteAndOpenStatement/createButtonToCloseFavorModal.js":
/*!***************************************************************************************!*\
  !*** ./src/components/addToFavoriteAndOpenStatement/createButtonToCloseFavorModal.js ***!
  \***************************************************************************************/
/*! exports provided: createButtonToCloseFavorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButtonToCloseFavorModal\", function() { return createButtonToCloseFavorModal; });\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _toManipulateDOM_removeModal_removePrevievFavorModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/removeModal/removePrevievFavorModal */ \"./src/components/toManipulateDOM/removeModal/removePrevievFavorModal.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\nconst createButtonToCloseFavorModal = (cl) => (txtContent) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setOnclickFn\"])(_toManipulateDOM_removeModal_removePrevievFavorModal__WEBPACK_IMPORTED_MODULE_1__[\"removePrevievFavorModal\"])()\n        )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n return element;\n}\n\n//# sourceURL=webpack:///./src/components/addToFavoriteAndOpenStatement/createButtonToCloseFavorModal.js?");

/***/ }),

/***/ "./src/components/addToFavoriteAndOpenStatement/favoriteStatement.js":
/*!***************************************************************************!*\
  !*** ./src/components/addToFavoriteAndOpenStatement/favoriteStatement.js ***!
  \***************************************************************************/
/*! exports provided: favoriteStatement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favoriteStatement\", function() { return favoriteStatement; });\n/* harmony import */ var _previevOfActualFavorBeer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previevOfActualFavorBeer */ \"./src/components/addToFavoriteAndOpenStatement/previevOfActualFavorBeer.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n\n\n\n\n\n\n\nconst favoriteStatement = (beer) => \n                Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createTitle\"])(\"statement\")(\"Dodałeś do ulubionych!\"),\n                    Object(_previevOfActualFavorBeer__WEBPACK_IMPORTED_MODULE_0__[\"previevOfActualFavorBeer\"])(beer),\n                )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_2__[\"createDiv\"])(\"actualFavoritePreviev\")); \n\n\n//# sourceURL=webpack:///./src/components/addToFavoriteAndOpenStatement/favoriteStatement.js?");

/***/ }),

/***/ "./src/components/addToFavoriteAndOpenStatement/openFavoriteStatement.js":
/*!*******************************************************************************!*\
  !*** ./src/components/addToFavoriteAndOpenStatement/openFavoriteStatement.js ***!
  \*******************************************************************************/
/*! exports provided: openFavoriteStatement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openFavoriteStatement\", function() { return openFavoriteStatement; });\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _favoriteStatement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoriteStatement */ \"./src/components/addToFavoriteAndOpenStatement/favoriteStatement.js\");\n\n\n\n\n\nconst openFavoriteStatement = (beer) => {\n\n    const page = document.querySelector(\"body\");  \n    const favorStatementModal = Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"favoriteModal\");\n    const cartPreviev = Object(_favoriteStatement__WEBPACK_IMPORTED_MODULE_1__[\"favoriteStatement\"])(beer);\n    \n    favorStatementModal.appendChild(cartPreviev);\n  page.appendChild(favorStatementModal);\n}\n\n//# sourceURL=webpack:///./src/components/addToFavoriteAndOpenStatement/openFavoriteStatement.js?");

/***/ }),

/***/ "./src/components/addToFavoriteAndOpenStatement/previevOfActualFavorBeer.js":
/*!**********************************************************************************!*\
  !*** ./src/components/addToFavoriteAndOpenStatement/previevOfActualFavorBeer.js ***!
  \**********************************************************************************/
/*! exports provided: previevOfActualFavorBeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"previevOfActualFavorBeer\", function() { return previevOfActualFavorBeer; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _createButtonToCloseFavorModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createButtonToCloseFavorModal */ \"./src/components/addToFavoriteAndOpenStatement/createButtonToCloseFavorModal.js\");\n\n\n\n\n\n\nconst previevOfActualFavorBeer = (beer) => (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(    \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(\"piwo\")(beer.image_url),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createTitle\"])(\"\")(beer.name),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"price\")(`${beer.abv} $`),         \n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"description\")(beer.description),\n            Object(_createButtonToCloseFavorModal__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToCloseFavorModal\"])(\"close\")(\"ok\"),\n            Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createLinkTo\"])(\"\")(\"zobacz wszystkie\")(\"#/ulubione\"),\n        )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"previevActualFavorBeer\"));\n\n    element.appendChild(wrapperDiv);\n  return element\n}\n\n\n//# sourceURL=webpack:///./src/components/addToFavoriteAndOpenStatement/previevOfActualFavorBeer.js?");

/***/ }),

/***/ "./src/components/comebackToOffer/refreshOffer.js":
/*!********************************************************!*\
  !*** ./src/components/comebackToOffer/refreshOffer.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OfferOnPage/OfferOnPage */ \"./src/components/OfferOnPage/OfferOnPage.js\");\n\n\n\nconst refreshOffer = () => {\n\n    const liElement = document.querySelector(\"li.offer\");\n\n    liElement.addEventListener(\"click\", _OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__[\"OfferOnPage\"] )\n};\n\n\nrefreshOffer();\n\n//# sourceURL=webpack:///./src/components/comebackToOffer/refreshOffer.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipeline */ \"./src/pipeline.js\");\n\n\n\n  \n\nconst contact = () => {\n\n    const contactLink = document.querySelector(\"li.contact\");\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(  \n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"Jesteśmy do dyspozycji od poniedziałku do piątku od 8 do 18.\"),\n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"Zadzwoń do nas!\"),\n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createSpanElem\"])(\"\")(\"667 565 200\"),\n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"albo napisz\"),\n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createSpanElem\"])(\"\")(\"biuro@beers.pl\"),\n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createText\"])(\"\")(\"odwiedz nasz sklep\"),   \n        Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createSpanElem\"])(\"\")(\"Poznań, ul. Browarna 24\"),     \n    )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_0__[\"createDiv\"])(\"contactData\"));\n\n  contactLink.appendChild(wrapperDiv);\n}\n\n\n\ncontact()\n\n//# sourceURL=webpack:///./src/components/contact.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/coroutine.js":
/*!*****************************************************!*\
  !*** ./src/components/getBeersFromAPI/coroutine.js ***!
  \*****************************************************/
/*! exports provided: coroutine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coroutine\", function() { return coroutine; });\nconst coroutine = (gen) => {\n\n  const genObj = gen();\n\n  const contin = ({ done, value }) => done ? value : Promise.resolve(value)\n                                                        .then(res => contin(genObj.next(res)))\n                                                        .catch(err => contin(genObj.throw(err)))\n                                                            \n                                                            \n return contin(genObj.next())\n}\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/coroutine.js?");

/***/ }),

/***/ "./src/components/getBeersFromAPI/getBeersFromApi.js":
/*!***********************************************************!*\
  !*** ./src/components/getBeersFromAPI/getBeersFromApi.js ***!
  \***********************************************************/
/*! exports provided: getBeersFromApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBeersFromApi\", function() { return getBeersFromApi; });\n/* \n\nexport const getBeersFromApi = async () => {\n\n    const res = await fetch(\"https://api.punkapi.com/v2/beers?per_page=12\");\n    const beers = await res.json();\n\n    return beers;\n    }\n\n*/\n\n \nfunction* getBeersFromApi(){\n    \n    const res = yield fetch(\"https://api.punkapi.com/v2/beers?per_page=12\");   \n    const beers = yield res.json();\n\n    return beers;\n}\n\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/getBeersFromApi.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createResponse\", function() { return createResponse; });\n/* harmony import */ var _getBeersFromApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBeersFromApi */ \"./src/components/getBeersFromAPI/getBeersFromApi.js\");\n/* harmony import */ var _coroutine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coroutine */ \"./src/components/getBeersFromAPI/coroutine.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n/* harmony import */ var _OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OfferOnPage/OfferOnPage */ \"./src/components/OfferOnPage/OfferOnPage.js\");\n/* harmony import */ var _loader_removeLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/removeLoader */ \"./src/components/getBeersFromAPI/loader/removeLoader.js\");\n/* harmony import */ var _infiniteScroll_IntersectionObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../infiniteScroll/IntersectionObserver */ \"./src/infiniteScroll/IntersectionObserver.js\");\n\n\n\n\n\n\n\n/* \n// Simplest way - using async and await keyword\n\n export const createResponse = () => {\n\n    return async (dispatch) => {    \n        const beers = await getBeersFromApi().catch(err => dispatch(fetchFailAction(err)));    \n         if(beers){ \n            dispatch(fetchSuccessAction(beers));\n            removeLoader();\n            OfferOnPage();\n         }\n    }\n }\n */\n\nconst createResponse = () => {\n\n   return (dispatch) => Object(_coroutine__WEBPACK_IMPORTED_MODULE_1__[\"coroutine\"])(function* (){\n\n      try{\n         const beers = yield * Object(_getBeersFromApi__WEBPACK_IMPORTED_MODULE_0__[\"getBeersFromApi\"])()       \n         if(beers){ \n               dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_2__[\"fetchSuccessAction\"])(beers));\n               Object(_loader_removeLoader__WEBPACK_IMPORTED_MODULE_4__[\"removeLoader\"])();\n               Object(_OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_3__[\"OfferOnPage\"])();\n               Object(_infiniteScroll_IntersectionObserver__WEBPACK_IMPORTED_MODULE_5__[\"infiniteScroll\"])();\n         }\n       }catch(err){\n               dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_2__[\"fetchFailAction\"])(err))\n     }     \n   })\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/getBeersFromAPI/responseCreator.js?");

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
/*! exports provided: dispatchAddToCart, dispatchRemoveFromCart, dispatchAddToFavour, dispatchRemoveFromFavorite, dispatchAddToCurrentBeer, dispatchSetCurrentBeer, dispatchRmvWholeTypeFromCart, dispatchRmvWholeTypeFromFavoriteCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchAddToCart\", function() { return dispatchAddToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchRemoveFromCart\", function() { return dispatchRemoveFromCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchAddToFavour\", function() { return dispatchAddToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchRemoveFromFavorite\", function() { return dispatchRemoveFromFavorite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchAddToCurrentBeer\", function() { return dispatchAddToCurrentBeer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchSetCurrentBeer\", function() { return dispatchSetCurrentBeer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchRmvWholeTypeFromCart\", function() { return dispatchRmvWholeTypeFromCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatchRmvWholeTypeFromFavoriteCart\", function() { return dispatchRmvWholeTypeFromFavoriteCart; });\n/* harmony import */ var _manageState_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../manageState/store */ \"./src/manageState/store.js\");\n/* harmony import */ var _manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manageState/actionCreators */ \"./src/manageState/actionCreators.js\");\n\n\n\n\nconst dispatchAddToCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAction\"])(beer));\n\nconst dispatchRemoveFromCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"removeFromCartAction\"])(beer));\n\nconst dispatchAddToFavour = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"addToFavoriteAction\"])(beer));\n\nconst dispatchRemoveFromFavorite = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"removeFromFavoriteAction\"])(beer));\n\nconst dispatchAddToCurrentBeer = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentBeerAction\"])(beer));\n\nconst dispatchSetCurrentBeer = (beer) =>  _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"setCurrentBeerAction\"])(beer))\n\nconst dispatchRmvWholeTypeFromCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"rmvWholeTypeFromCartAction\"])(beer));\n\nconst dispatchRmvWholeTypeFromFavoriteCart = (beer) => _manageState_store__WEBPACK_IMPORTED_MODULE_0__[\"store\"].dispatch(Object(_manageState_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"rmvWholeTypeFromFavoriteAction\"])(beer));\n\n\n\n\n//# sourceURL=webpack:///./src/components/handlersToShopping/handlersToShopping.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OfferOnPage/OfferOnPage */ \"./src/components/OfferOnPage/OfferOnPage.js\");\n/* harmony import */ var _BeerDescription_BeerDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BeerDescription/BeerDescription */ \"./src/components/BeerDescription/BeerDescription.js\");\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n/* harmony import */ var _RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RegistrationForm/RegistrationForm */ \"./src/components/RegistrationForm/RegistrationForm.js\");\n/* harmony import */ var _FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FavoriteCart/FavoriteCart */ \"./src/components/FavoriteCart/FavoriteCart.js\");\n\n\n\n\n\n\n\n\n\nconst routes = () => ({\n\n                \"/\" : () => Object(_OfferOnPage_OfferOnPage__WEBPACK_IMPORTED_MODULE_0__[\"OfferOnPage\"])(), \n                \"/opis\" : () => Object(_BeerDescription_BeerDescription__WEBPACK_IMPORTED_MODULE_1__[\"BeerDescription\"])(),\n                \"/koszyk\" : () => Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__[\"ShoppingCart\"])(),\n                \"/rejestracja\": () => Object(_RegistrationForm_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__[\"RegistrationForm\"])(),\n                \"/ulubione\" : () => Object(_FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_4__[\"FavoriteCart\"])(),\n            });\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/router/routes.js?");

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

/***/ "./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromCart.js":
/*!*************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromCart.js ***!
  \*************************************************************************************************************/
/*! exports provided: createBtnToRemoveGroupOfBeersFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnToRemoveGroupOfBeersFromCart\", function() { return createBtnToRemoveGroupOfBeersFromCart; });\n/* harmony import */ var _showContentOf_rmvGroupOfBeerAndUpdateViev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showContentOf/rmvGroupOfBeerAndUpdateViev */ \"./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js\");\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\nconst createBtnToRemoveGroupOfBeersFromCart = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setOnclickFn\"])(_showContentOf_rmvGroupOfBeerAndUpdateViev__WEBPACK_IMPORTED_MODULE_0__[\"rmvGroupFromShoppigCartAndUpdateViev\"])(arg)\n      )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromCart.js?");

/***/ }),

/***/ "./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromFavorite.js":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromFavorite.js ***!
  \*****************************************************************************************************************/
/*! exports provided: createBtnToRemoveGroupOfBeersFromFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnToRemoveGroupOfBeersFromFavorite\", function() { return createBtnToRemoveGroupOfBeersFromFavorite; });\n/* harmony import */ var _showContentOf_rmvGroupOfBeerAndUpdateViev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../showContentOf/rmvGroupOfBeerAndUpdateViev */ \"./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js\");\n/* harmony import */ var _toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toManipulateDOM/handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\nconst createBtnToRemoveGroupOfBeersFromFavorite = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_2__[\"pipeline\"])(\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setClss\"])(cl),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setTextContent\"])(txtContent),\n            Object(_toManipulateDOM_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_1__[\"setOnclickFn\"])(_showContentOf_rmvGroupOfBeerAndUpdateViev__WEBPACK_IMPORTED_MODULE_0__[\"rmvGroupFromFavoriteCartAndUpdateViev\"])(arg)\n      )(document.createElement(\"button\"));\n\n    element.appendChild(btn);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromFavorite.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToCart.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToCart.js ***!
  \*********************************************************************************************************************/
/*! exports provided: addToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../AddToCartAndOpenPreviev/displayCounterOfBeersInCart */ \"./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js\");\n\n\n\n\n\nconst addToCart = (beer) => {\n\n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToCart\"])(beer);\n    Object(_AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_1__[\"displayCounterOfBeersInCart\"])();\n}\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToCart.js?");

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

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createBeerNameWithDescription.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createBeerNameWithDescription.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: createBeerNameWithDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBeerNameWithDescription\", function() { return createBeerNameWithDescription; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _OfferOnPage_createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../OfferOnPage/createLinkRedirectToDescription */ \"./src/components/OfferOnPage/createLinkRedirectToDescription.js\");\n\n\n\n\n\n\nconst createBeerNameWithDescription = (beer) => (element) => {\n\n    const wrapperDiv = Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(            \n             Object(_OfferOnPage_createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_2__[\"createLinkRedirectToDescription\"])(\"beerTitle\")(beer.name)(beer),\n             Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"description\")(beer.description)\n      )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"nameWithDescr\"))\n\n    element.appendChild(wrapperDiv);\n return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createBeerNameWithDescription.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js":
/*!************************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: createElementWithFavoriteCartContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementWithFavoriteCartContent\", function() { return createElementWithFavoriteCartContent; });\n/* harmony import */ var _groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../groupBeersByLabels/groupBeersByLabels */ \"./src/components/groupBeersByLabels/groupBeersByLabels.js\");\n/* harmony import */ var _createPrevievOfBeerInFavor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPrevievOfBeerInFavor */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createPrevievOfBeerInFavor.js\");\n\n\n\n\n const createElementWithFavoriteCartContent = (cartContent) => (element) => {\n       \n       Object(_groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_0__[\"groupBeersByLabels\"])(cartContent).map(group => {  \n           \n            const wrapperDiv = Object(_createPrevievOfBeerInFavor__WEBPACK_IMPORTED_MODULE_1__[\"createPrevievOfBeerInFavor\"])(group)\n              element.appendChild(wrapperDiv);\n        })\n\n    return element;\n  }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createElementWithFavoriteCartContent.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createPrevievOfBeerInFavor.js":
/*!**************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createPrevievOfBeerInFavor.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: createPrevievOfBeerInFavor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPrevievOfBeerInFavor\", function() { return createPrevievOfBeerInFavor; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttonsToChangeOrderQuantity */ \"./src/components/showContentOf/buttonsToChangeOrderQuantity.js\");\n/* harmony import */ var _groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../groupBeersByLabels/groupBeersByLabels */ \"./src/components/groupBeersByLabels/groupBeersByLabels.js\");\n/* harmony import */ var _createBtnToRemoveGroupOfBeers_createBtnToRemoveGroupOfBeersFromFavorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromFavorite */ \"./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromFavorite.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js\");\n/* harmony import */ var _addToFavoriteAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addToFavoriteAndUpdateCartViev */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToFavoriteAndUpdateCartViev.js\");\n/* harmony import */ var _rmvFromFavoriteAndUpdateCartView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rmvFromFavoriteAndUpdateCartView */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/rmvFromFavoriteAndUpdateCartView.js\");\n/* harmony import */ var _createBeerNameWithDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createBeerNameWithDescription */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createBeerNameWithDescription.js\");\n/* harmony import */ var _toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../toManipulateDOM/handlersToManipulateDOM */ \"./src/components/toManipulateDOM/handlersToManipulateDOM.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst createPrevievOfBeerInFavor = (group) => \n            Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(   \n                Object(_createBtnToRemoveGroupOfBeers_createBtnToRemoveGroupOfBeersFromFavorite__WEBPACK_IMPORTED_MODULE_4__[\"createBtnToRemoveGroupOfBeersFromFavorite\"])(\"remove\")(\"X\")(group[0]),  \n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(\"piwo\")(group[0].image_url),       \n                Object(_createBeerNameWithDescription__WEBPACK_IMPORTED_MODULE_8__[\"createBeerNameWithDescription\"])(group[0]),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${group[0].abv} $`),\n                Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToIncreaseOrder\"])(\"\")(_addToFavoriteAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_6__[\"addToFavoriteAndUpdateCartView\"])(group[0]),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(group.length),\n                Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToDecreaseOrder\"])(\"\")(_rmvFromFavoriteAndUpdateCartView__WEBPACK_IMPORTED_MODULE_7__[\"rmvFromFavoriteAndUpdateCartView\"])(group[0]),\n                Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"sum\")(`${Object(_AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(group[0].abv, group.length)} $`),\n                Object(_toManipulateDOM_handlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_9__[\"createBtnAddToCart\"])(\"addToCart-btn\")(\"dodaj do koszyka\")(group[0])\n            )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"favoriteCart-content\"))\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/createPrevievOfBeerInFavor.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAndUpdateCartView\", function() { return addToCartAndUpdateCartView; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AddToCartAndOpenPreviev/displayCounterOfBeersInCart */ \"./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js\");\n\n\n\n\n\nconst addToCartAndUpdateCartView = (beer) =>  {\n\n        Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchAddToCart\"])(beer);\n        Object(_AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_2__[\"displayCounterOfBeersInCart\"])()\n        Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__[\"ShoppingCart\"])()\n    }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/addToCartAndUpdateCartViev.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent.js":
/*!************************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: createElementWithShoppingCartContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementWithShoppingCartContent\", function() { return createElementWithShoppingCartContent; });\n/* harmony import */ var _groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../groupBeersByLabels/groupBeersByLabels */ \"./src/components/groupBeersByLabels/groupBeersByLabels.js\");\n/* harmony import */ var _createPrevievOfBeerInCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPrevievOfBeerInCart */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createPrevievOfBeerInCart.js\");\n\n\n\n\n\n const createElementWithShoppingCartContent = (cartContent) => (element) => {\n       \n       Object(_groupBeersByLabels_groupBeersByLabels__WEBPACK_IMPORTED_MODULE_0__[\"groupBeersByLabels\"])(cartContent).map(group => {\n\n          const wrapperDiv = Object(_createPrevievOfBeerInCart__WEBPACK_IMPORTED_MODULE_1__[\"createPrevievOfBeerInCart\"])(group)\n             element.appendChild(wrapperDiv);\n        })\n\n    return element;\n  }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createElementWithShoppingCartContent.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createPrevievOfBeerInCart.js":
/*!*************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createPrevievOfBeerInCart.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: createPrevievOfBeerInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPrevievOfBeerInCart\", function() { return createPrevievOfBeerInCart; });\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipeline */ \"./src/pipeline.js\");\n/* harmony import */ var _toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../toManipulateDOM/basisHandlersToManipulateDOM */ \"./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js\");\n/* harmony import */ var _buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttonsToChangeOrderQuantity */ \"./src/components/showContentOf/buttonsToChangeOrderQuantity.js\");\n/* harmony import */ var _createBtnToRemoveGroupOfBeers_createBtnToRemoveGroupOfBeersFromCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromCart */ \"./src/components/showContentOf/createBtnToRemoveGroupOfBeers/createBtnToRemoveGroupOfBeersFromCart.js\");\n/* harmony import */ var _rmvFromCartAndUpdateCartView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rmvFromCartAndUpdateCartView */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js\");\n/* harmony import */ var _addToCartAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addToCartAndUpdateCartViev */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/addToCartAndUpdateCartViev.js\");\n/* harmony import */ var _OfferOnPage_createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../OfferOnPage/createLinkRedirectToDescription */ \"./src/components/OfferOnPage/createLinkRedirectToDescription.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup */ \"./src/components/AddToCartAndOpenPreviev/previevOfCartContent/sumOfGroup.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst createPrevievOfBeerInCart = (group) => \n                Object(_pipeline__WEBPACK_IMPORTED_MODULE_0__[\"pipeline\"])(   \n                    Object(_createBtnToRemoveGroupOfBeers_createBtnToRemoveGroupOfBeersFromCart__WEBPACK_IMPORTED_MODULE_3__[\"createBtnToRemoveGroupOfBeersFromCart\"])(\"remove\")(\"X\")(group[0]),  \n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createImgElem\"])(\"\")(\"piwo\")(group[0].image_url),       \n                    Object(_OfferOnPage_createLinkRedirectToDescription__WEBPACK_IMPORTED_MODULE_6__[\"createLinkRedirectToDescription\"])(\"beerTitle\")(group[0].name)(group[0]),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createText\"])(\"price\")(`${group[0].abv} $`),\n                    Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToIncreaseOrder\"])(\"\")(_addToCartAndUpdateCartViev__WEBPACK_IMPORTED_MODULE_5__[\"addToCartAndUpdateCartView\"])(group[0]),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"amount\")(group.length),\n                    Object(_buttonsToChangeOrderQuantity__WEBPACK_IMPORTED_MODULE_2__[\"createButtonToDecreaseOrder\"])(\"\")(_rmvFromCartAndUpdateCartView__WEBPACK_IMPORTED_MODULE_4__[\"rmvFromCartAndUpdateCartView\"])(group[0]),\n                    Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createSpanElem\"])(\"sum\")(`${Object(_AddToCartAndOpenPreviev_previevOfCartContent_sumOfGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(group[0].abv, group.length)} $`)\n                )(Object(_toManipulateDOM_basisHandlersToManipulateDOM__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"])(\"shoppingCart-content\"))\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/createPrevievOfBeerInCart.js?");

/***/ }),

/***/ "./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js":
/*!****************************************************************************************************************************************!*\
  !*** ./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: rmvFromCartAndUpdateCartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvFromCartAndUpdateCartView\", function() { return rmvFromCartAndUpdateCartView; });\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AddToCartAndOpenPreviev/displayCounterOfBeersInCart */ \"./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js\");\n\n\n\n\n\nconst rmvFromCartAndUpdateCartView = (beer) =>  {\n\n        Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_0__[\"dispatchRemoveFromCart\"])(beer);\n        Object(_AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_2__[\"displayCounterOfBeersInCart\"])();\n        Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_1__[\"ShoppingCart\"])()\n    }\n\n//# sourceURL=webpack:///./src/components/showContentOf/createElementWithCartContent/createElementWithShoppingCartContent/rmvFromCartAndUpdateCartView.js?");

/***/ }),

/***/ "./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js":
/*!*********************************************************************!*\
  !*** ./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js ***!
  \*********************************************************************/
/*! exports provided: rmvGroupFromShoppigCartAndUpdateViev, rmvGroupFromFavoriteCartAndUpdateViev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvGroupFromShoppigCartAndUpdateViev\", function() { return rmvGroupFromShoppigCartAndUpdateViev; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvGroupFromFavoriteCartAndUpdateViev\", function() { return rmvGroupFromFavoriteCartAndUpdateViev; });\n/* harmony import */ var _ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShoppingCart/ShoppingCart */ \"./src/components/ShoppingCart/ShoppingCart.js\");\n/* harmony import */ var _FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FavoriteCart/FavoriteCart */ \"./src/components/FavoriteCart/FavoriteCart.js\");\n/* harmony import */ var _handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlersToShopping/handlersToShopping */ \"./src/components/handlersToShopping/handlersToShopping.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AddToCartAndOpenPreviev/displayCounterOfBeersInCart */ \"./src/components/AddToCartAndOpenPreviev/displayCounterOfBeersInCart.js\");\n/* harmony import */ var _FavoriteCart_displayCounterOfBeersInFavorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FavoriteCart/displayCounterOfBeersInFavorite */ \"./src/components/FavoriteCart/displayCounterOfBeersInFavorite.js\");\n\n\n\n\n\n\n\n/*\nconst rmvFromShopOrFavAndUpdateView = (type) => type === \"SHOPPING\" ?  \n[dispatchRmvWholeTypeFromCart, displayCounterOfBeersInCart, ShoppingCart] : \n type === \"FAVORITE\" ?\n[dispatchRmvWholeTypeFromFavoriteCart, displayCounterOfBeersInFavorite, FavoriteCart] :\n \"invalid type\";\n\n\nconst removeFromCartAndUpdateView = (fnAsArray) => (beer) => {\n    const [dispatch, displayCount, Cart ] = fnAsArray;\n\n}\n*/\n\nconst rmvGroupFromShoppigCartAndUpdateViev = (beer) => {\n \n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_2__[\"dispatchRmvWholeTypeFromCart\"])(beer);\n    Object(_AddToCartAndOpenPreviev_displayCounterOfBeersInCart__WEBPACK_IMPORTED_MODULE_3__[\"displayCounterOfBeersInCart\"])();\n    Object(_ShoppingCart_ShoppingCart__WEBPACK_IMPORTED_MODULE_0__[\"ShoppingCart\"])();\n}\n\n\n\n\nconst rmvGroupFromFavoriteCartAndUpdateViev = (beer) => {\n \n    Object(_handlersToShopping_handlersToShopping__WEBPACK_IMPORTED_MODULE_2__[\"dispatchRmvWholeTypeFromFavoriteCart\"])(beer);\n    Object(_FavoriteCart_displayCounterOfBeersInFavorite__WEBPACK_IMPORTED_MODULE_4__[\"displayCounterOfBeersInFavorite\"])();\n    Object(_FavoriteCart_FavoriteCart__WEBPACK_IMPORTED_MODULE_1__[\"FavoriteCart\"])();\n}\n\n\n\n//# sourceURL=webpack:///./src/components/showContentOf/rmvGroupOfBeerAndUpdateViev.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js":
/*!************************************************************************!*\
  !*** ./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js ***!
  \************************************************************************/
/*! exports provided: clearContentOf, createDiv, createTitle, createText, createDivWithinElement, createImgElem, createLinkTo, createWrapperDiv, createSpanElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearContentOf\", function() { return clearContentOf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTitle\", function() { return createTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createText\", function() { return createText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDivWithinElement\", function() { return createDivWithinElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImgElem\", function() { return createImgElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkTo\", function() { return createLinkTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWrapperDiv\", function() { return createWrapperDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpanElem\", function() { return createSpanElem; });\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\nconst clearContentOf = (el) => { \n\n  while(el.firstChild && el.removeChild(el.firstChild));\n\n};\n\n\n\nconst createDiv = (cl = \"\") => { \n\n    const element = document.createElement(\"div\");\n    const elementWithClss =  Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl)(element);\n  return elementWithClss;\n } \n\n\n\nconst createTitle = (cl = \"\") => (txtContent) => (element) =>{ \n\n    const h3 = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"h3\"));\n        \n    element.appendChild(h3);\n  return element\n }\n\n\n  const createText = (cl = \"\") => (txtContent) => (element) =>{ \n\n    const p = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"p\"));\n    \n      element.appendChild(p);\n   return element;\n  } \n\n\n  const createDivWithinElement = (cl = \"\") => (txtContent) => (element) =>{ \n\n    const div = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n              Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n       )(createDiv(cl));\n       \n       element.appendChild(div);\n   return element;\n } \n\n\nconst createImgElem = (cl = \"\") => (alt = \"\") => (src) => (element) => {\n\n    const img = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setSrc\"])(src),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setAlt\"])(alt),\n      )(document.createElement(\"img\"));\n\n    element.appendChild(img);\n return element;\n}\n\n\n\nconst createLinkTo = (cl = \"\") => (txtContent) => (path) => (element) => {\n\n    const link = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setPath\"])(path),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n      )(document.createElement(\"a\"));\n\n      \n    element.appendChild(link);\n  return element;\n}\n\n\n\n\nconst createWrapperDiv = (cl = \"\") => (...elements) => (element) => {\n\n  const wrapper = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n            ...elements\n      )(createDiv(cl));\n\n    element.appendChild(wrapper);\n  return element;\n} \n\n\nconst createSpanElem = (cl = \"\") => (txtContent) => (element) =>{ \n   const span = Object(_pipeline__WEBPACK_IMPORTED_MODULE_1__[\"pipeline\"])(\n                  Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setClss\"])(cl),\n                  Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_0__[\"setTextContent\"])(txtContent)\n            )(document.createElement(\"span\"));      \n    element.appendChild(span);\n  return element\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/basisHandlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToCreateElements.js":
/*!********************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToCreateElements.js ***!
  \********************************************************************/
/*! exports provided: setClss, setforAtr, setAlt, setName, setTextContent, setSrc, setPath, setType, setValue, setChecked, setOnclickFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClss\", function() { return setClss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setforAtr\", function() { return setforAtr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAlt\", function() { return setAlt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setName\", function() { return setName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTextContent\", function() { return setTextContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSrc\", function() { return setSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPath\", function() { return setPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setType\", function() { return setType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValue\", function() { return setValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setChecked\", function() { return setChecked; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOnclickFn\", function() { return setOnclickFn; });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/components/toManipulateDOM/setAttributes.js\");\n\n\n\nconst setClss = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"className\")(v)(el);\n\nconst setforAtr = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"for\")(v)(el);\n\nconst setAlt = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"alt\")(v)(el);\n\nconst setName = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"name\")(v)(el);\n\nconst setTextContent = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"textContent\")(v)(el);\n\nconst setSrc = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"src\")(v)(el);\n\nconst setPath = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"href\")(v)(el);\n\nconst setType = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"type\")(v)(el);\n\nconst setValue = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"value\")(v)(el);\n\nconst setChecked = (v) => (el) => Object(_setAttributes__WEBPACK_IMPORTED_MODULE_0__[\"setAttr\"])(\"checked\")(v)(el);\n\n\n\nconst setOnclickFn = (fn) => (arg = \"\") => (element) => {\n  element.addEventListener(\"click\", () => fn(arg));\nreturn element;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\nexport const setClss = (cl = \"\") => (element) => {\n    element.className = cl;\n   return element;\n}\n\nexport const setforAtr = (to) => (element) => {\n    element.for = to;\n  return element;\n}\n\nexport const setAlt = (alt) => (element) => {\n  element.alt = alt;\nreturn element;\n}\n\nexport const setName = (name) => (element) => {\n    element.name = name;\n  return element;\n}\n\nexport const setTextContent = (textContent) => (element) => {\n     element.textContent = textContent;\n   return element;\n}\n\nexport const setSrc = (src) => (element) => {\n    element.src = src;\n  return element;\n}\n\nexport const setPath = (href) => (element) => {\n    element.href = href;\n return element;\n}\n\nexport const setType = (type) => (element) => {\n  element.type = type;\nreturn element;\n}\n\nexport const setValue = (value) => (element) => {\n  element.value = value;\nreturn element;\n}\n\n*/\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToCreateElements.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/handlersToManipulateDOM.js":
/*!*******************************************************************!*\
  !*** ./src/components/toManipulateDOM/handlersToManipulateDOM.js ***!
  \*******************************************************************/
/*! exports provided: insertDashesToPath, createBtnAddToFavour, createBtnAddToCartAndOpenPreviev, createBtnAddToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDashesToPath\", function() { return insertDashesToPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToFavour\", function() { return createBtnAddToFavour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToCartAndOpenPreviev\", function() { return createBtnAddToCartAndOpenPreviev; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBtnAddToCart\", function() { return createBtnAddToCart; });\n/* harmony import */ var _showContentOf_createElementWithCartContent_createElementWithFavoriteCartContent_addToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToCart */ \"./src/components/showContentOf/createElementWithCartContent/createElementWithFavoriteCartContent/addToCart.js\");\n/* harmony import */ var _AddToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AddToCartAndOpenPreviev/addToCartAndOpenPreviev */ \"./src/components/AddToCartAndOpenPreviev/addToCartAndOpenPreviev.js\");\n/* harmony import */ var _handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlersToCreateElements */ \"./src/components/toManipulateDOM/handlersToCreateElements.js\");\n/* harmony import */ var _addToFavoriteAndOpenStatement_addToFavoriteAndOpenStatement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addToFavoriteAndOpenStatement/addToFavoriteAndOpenStatement */ \"./src/components/addToFavoriteAndOpenStatement/addToFavoriteAndOpenStatement.js\");\n/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipeline */ \"./src/pipeline.js\");\n\n\n\n\n\n\n\n\n\nconst insertDashesToPath = (str) => str.replace(/ /g, \"-\");\n\n\n\nconst createBtnAddToFavour = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_4__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setOnclickFn\"])(_addToFavoriteAndOpenStatement_addToFavoriteAndOpenStatement__WEBPACK_IMPORTED_MODULE_3__[\"addToFavoriteAndOpenStatement\"])(arg)\n       )(document.createElement(\"button\"));\n        \n    element.appendChild(btn);\n  return element;\n}\n\n\nconst createBtnAddToCartAndOpenPreviev = (cl) => (txtContent) => (arg) => (element) => {\n\n    const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_4__[\"pipeline\"])(\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setClss\"])(cl),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setTextContent\"])(txtContent),\n            Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setOnclickFn\"])(_AddToCartAndOpenPreviev_addToCartAndOpenPreviev__WEBPACK_IMPORTED_MODULE_1__[\"addToCartAndOpenPreviev\"])(arg)\n      )(document.createElement(\"button\"));\n\n     element.appendChild(btn);\n  return element;\n}\n\n\n\nconst createBtnAddToCart = (cl) => (txtContent) => (arg) => (element) => {\n\n  const btn = Object(_pipeline__WEBPACK_IMPORTED_MODULE_4__[\"pipeline\"])(\n          Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setClss\"])(cl),\n          Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setTextContent\"])(txtContent),\n          Object(_handlersToCreateElements__WEBPACK_IMPORTED_MODULE_2__[\"setOnclickFn\"])(_showContentOf_createElementWithCartContent_createElementWithFavoriteCartContent_addToCart__WEBPACK_IMPORTED_MODULE_0__[\"addToCart\"])(arg)\n    )(document.createElement(\"button\"));\n\n   element.appendChild(btn);\nreturn element;\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/handlersToManipulateDOM.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/removeModal/removeLoginWindowModal.js":
/*!******************************************************************************!*\
  !*** ./src/components/toManipulateDOM/removeModal/removeLoginWindowModal.js ***!
  \******************************************************************************/
/*! exports provided: removeLoginWindowModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLoginWindowModal\", function() { return removeLoginWindowModal; });\n/* harmony import */ var _removeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeModal */ \"./src/components/toManipulateDOM/removeModal/removeModal.js\");\n\n\n\n\nconst removeLoginWindowModal = () => Object(_removeModal__WEBPACK_IMPORTED_MODULE_0__[\"removeModal\"])(\".loginWindow\");\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/removeModal/removeLoginWindowModal.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/removeModal/removeModal.js":
/*!*******************************************************************!*\
  !*** ./src/components/toManipulateDOM/removeModal/removeModal.js ***!
  \*******************************************************************/
/*! exports provided: removeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeModal\", function() { return removeModal; });\nconst removeModal = (modalClss) => { \n\n    const modal = document.querySelector(modalClss);\n    const page = document.querySelector(\"body\");\n\n    if(modal) page.removeChild(page.lastChild);\n}\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/removeModal/removeModal.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/removeModal/removePrevievCartModal.js":
/*!******************************************************************************!*\
  !*** ./src/components/toManipulateDOM/removeModal/removePrevievCartModal.js ***!
  \******************************************************************************/
/*! exports provided: removePrevievCartModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePrevievCartModal\", function() { return removePrevievCartModal; });\n/* harmony import */ var _removeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeModal */ \"./src/components/toManipulateDOM/removeModal/removeModal.js\");\n\n\n\n\nconst removePrevievCartModal = () => Object(_removeModal__WEBPACK_IMPORTED_MODULE_0__[\"removeModal\"])(\".previevModal\");\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/removeModal/removePrevievCartModal.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/removeModal/removePrevievFavorModal.js":
/*!*******************************************************************************!*\
  !*** ./src/components/toManipulateDOM/removeModal/removePrevievFavorModal.js ***!
  \*******************************************************************************/
/*! exports provided: removePrevievFavorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePrevievFavorModal\", function() { return removePrevievFavorModal; });\n/* harmony import */ var _removeModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeModal */ \"./src/components/toManipulateDOM/removeModal/removeModal.js\");\n\n\n\n\nconst removePrevievFavorModal = () => Object(_removeModal__WEBPACK_IMPORTED_MODULE_0__[\"removeModal\"])(\".favoriteModal\");\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/removeModal/removePrevievFavorModal.js?");

/***/ }),

/***/ "./src/components/toManipulateDOM/setAttributes.js":
/*!*********************************************************!*\
  !*** ./src/components/toManipulateDOM/setAttributes.js ***!
  \*********************************************************/
/*! exports provided: setAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAttr\", function() { return setAttr; });\n\nconst setAttr = (attr) => (val = \"\") => (element) => {\n     element[attr] = val;\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/toManipulateDOM/setAttributes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_LoadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/LoadPage */ \"./src/components/LoadPage.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n/* harmony import */ var _components_LoginWindow_LoginWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LoginWindow/LoginWindow */ \"./src/components/LoginWindow/LoginWindow.js\");\n/* harmony import */ var _components_Filters_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Filters/filters */ \"./src/components/Filters/filters.js\");\n/* harmony import */ var _components_comebackToOffer_refreshOffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/comebackToOffer/refreshOffer */ \"./src/components/comebackToOffer/refreshOffer.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/infiniteScroll/IntersectionObserver.js":
/*!****************************************************!*\
  !*** ./src/infiniteScroll/IntersectionObserver.js ***!
  \****************************************************/
/*! exports provided: infiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n/* harmony import */ var _moveSentinelAway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveSentinelAway */ \"./src/infiniteScroll/moveSentinelAway.js\");\n/* harmony import */ var _responseFromApi_responseCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responseFromApi/responseCreator */ \"./src/infiniteScroll/responseFromApi/responseCreator.js\");\n\n\n\n\n\n\n\n\nconst infiniteScroll = () => {\n\n  const sentinel = document.querySelector(\".sentinel\");   \n  let i = 0;\n  \n  const createObserver = new IntersectionObserver(entries => {\n          if(entries.some(entry => entry.intersectionRatio > 0)){       \n             i++;\n             Object(_moveSentinelAway__WEBPACK_IMPORTED_MODULE_0__[\"moveSentinelAway\"])(sentinel, i)\n             Object(_responseFromApi_responseCreator__WEBPACK_IMPORTED_MODULE_1__[\"createResponse\"])(i); \n          }\n\n  });\n\n  createObserver.observe(sentinel);\n}\n\n  \n      \n\n\n     \n\n//# sourceURL=webpack:///./src/infiniteScroll/IntersectionObserver.js?");

/***/ }),

/***/ "./src/infiniteScroll/moveSentinelAway.js":
/*!************************************************!*\
  !*** ./src/infiniteScroll/moveSentinelAway.js ***!
  \************************************************/
/*! exports provided: moveSentinelAway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSentinelAway\", function() { return moveSentinelAway; });\n\nconst moveSentinelAway = (sentry, ratio) =>  sentry.style.top = 240 * ratio + \"vh\";\n\n\n\n\n//# sourceURL=webpack:///./src/infiniteScroll/moveSentinelAway.js?");

/***/ }),

/***/ "./src/infiniteScroll/responseFromApi/getNextBeersFromApi.js":
/*!*******************************************************************!*\
  !*** ./src/infiniteScroll/responseFromApi/getNextBeersFromApi.js ***!
  \*******************************************************************/
/*! exports provided: getNextBeersFromApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextBeersFromApi\", function() { return getNextBeersFromApi; });\n\n\n\nfunction* getNextBeersFromApi(i){\n\n    const res = yield fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=12`);\n    const beers = yield res.json();\n\n return beers;\n}\n\n\n//# sourceURL=webpack:///./src/infiniteScroll/responseFromApi/getNextBeersFromApi.js?");

/***/ }),

/***/ "./src/infiniteScroll/responseFromApi/responseCreator.js":
/*!***************************************************************!*\
  !*** ./src/infiniteScroll/responseFromApi/responseCreator.js ***!
  \***************************************************************/
/*! exports provided: createResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createResponse\", function() { return createResponse; });\n/* harmony import */ var _components_OfferOnPage_createOfferOnPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/OfferOnPage/createOfferOnPage */ \"./src/components/OfferOnPage/createOfferOnPage.js\");\n/* harmony import */ var _components_getBeersFromAPI_coroutine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/getBeersFromAPI/coroutine */ \"./src/components/getBeersFromAPI/coroutine.js\");\n/* harmony import */ var _getNextBeersFromApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNextBeersFromApi */ \"./src/infiniteScroll/responseFromApi/getNextBeersFromApi.js\");\n\n\n\n\n\n\nconst createResponse = (i) => {\n\n    Object(_components_getBeersFromAPI_coroutine__WEBPACK_IMPORTED_MODULE_1__[\"coroutine\"])(function* (){\n       \n        try{\n          const beers = yield * Object(_getNextBeersFromApi__WEBPACK_IMPORTED_MODULE_2__[\"getNextBeersFromApi\"])(i);\n            Object(_components_OfferOnPage_createOfferOnPage__WEBPACK_IMPORTED_MODULE_0__[\"createOfferOnPage\"])(beers)\n        }catch(err){\n            console.log(err);            \n        }\n    })\n}\n\n//# sourceURL=webpack:///./src/infiniteScroll/responseFromApi/responseCreator.js?");

/***/ }),

/***/ "./src/manageState/actionCreators.js":
/*!*******************************************!*\
  !*** ./src/manageState/actionCreators.js ***!
  \*******************************************/
/*! exports provided: fetchBeginAction, fetchSuccessAction, fetchFailAction, fetchBeginActionToFilters, fetchSuccessActionToFilters, fetchFailActionToFilters, addToCartAction, removeFromCartAction, rmvWholeTypeFromCartAction, incrOrderAction, decrOrderAction, validationOKaction, NoValidationAction, addToFavoriteAction, removeFromFavoriteAction, rmvWholeTypeFromFavoriteAction, setCurrentBeerAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBeginAction\", function() { return fetchBeginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSuccessAction\", function() { return fetchSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFailAction\", function() { return fetchFailAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBeginActionToFilters\", function() { return fetchBeginActionToFilters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSuccessActionToFilters\", function() { return fetchSuccessActionToFilters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchFailActionToFilters\", function() { return fetchFailActionToFilters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCartAction\", function() { return addToCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromCartAction\", function() { return removeFromCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvWholeTypeFromCartAction\", function() { return rmvWholeTypeFromCartAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrOrderAction\", function() { return incrOrderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrOrderAction\", function() { return decrOrderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validationOKaction\", function() { return validationOKaction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoValidationAction\", function() { return NoValidationAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToFavoriteAction\", function() { return addToFavoriteAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromFavoriteAction\", function() { return removeFromFavoriteAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmvWholeTypeFromFavoriteAction\", function() { return rmvWholeTypeFromFavoriteAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentBeerAction\", function() { return setCurrentBeerAction; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/manageState/actions.js\");\n\n\n\n\n        \nconst fetchBeginAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN_OFFER\"]\n})\n\nconst fetchSuccessAction = (payload) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS_OFFER\"],\n    payload\n})\n\nconst fetchFailAction = (error) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL_OFFER\"],\n    error\n})\n\nconst fetchBeginActionToFilters = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN_FILTERS\"]\n})\n\nconst fetchSuccessActionToFilters = (payload) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS_FILTERS\"],\n    payload\n})\n\nconst fetchFailActionToFilters = (error) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL_FILTERS\"],\n    error\n\n})\n\n\n\nconst addToCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_SHOPPING_CART\"],\n    value  \n});\n\nconst removeFromCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_FROM_SHOPPING_CART\"],\n    value\n})\n\nconst rmvWholeTypeFromCartAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_TYPE_FROM_SHOPPING_CART\"],\n    value\n})\n\n\n\nconst incrOrderAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"INCR_ORDER\"],\n})\n\nconst decrOrderAction = () => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"DECR_ORDER\"]\n})\n\n\n\nconst validationOKaction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"VALID\"],\n    value\n})\n\nconst NoValidationAction = (error) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"NOT_VALID\"],\n    error\n})\n\n\n\nconst addToFavoriteAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TO_FAVORITE_CART\"],\n    value  \n});\n\nconst removeFromFavoriteAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_FROM_FAVORITE_CART\"],\n    value\n})\n\nconst rmvWholeTypeFromFavoriteAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"RMV_TYPE_FROM_FAVORITE_CART\"],\n    value\n})\n\n\n\nconst setCurrentBeerAction = (value) => ({\n    type: _actions__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_BEER\"],\n    value\n})\n\n//# sourceURL=webpack:///./src/manageState/actionCreators.js?");

/***/ }),

/***/ "./src/manageState/actions.js":
/*!************************************!*\
  !*** ./src/manageState/actions.js ***!
  \************************************/
/*! exports provided: RMV_FROM_SHOPPING_CART, RMV_TYPE_FROM_SHOPPING_CART, ADD_TO_SHOPPING_CART, CLEAR_SHOPPING_CART, RMV_TYPE_FROM_FAVORITE_CART, RMV_FROM_FAVORITE_CART, ADD_TO_FAVORITE_CART, CLEAR_FAVORITE_CART, CURRENT_BEER, FETCH_BEGIN_OFFER, FETCH_SUCCESS_OFFER, FETCH_FAIL_OFFER, FETCH_BEGIN_FILTERS, FETCH_SUCCESS_FILTERS, FETCH_FAIL_FILTERS, INCR_ORDER, DECR_ORDER, VALID, NOT_VALID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_SHOPPING_CART\", function() { return RMV_FROM_SHOPPING_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_TYPE_FROM_SHOPPING_CART\", function() { return RMV_TYPE_FROM_SHOPPING_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_SHOPPING_CART\", function() { return ADD_TO_SHOPPING_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_SHOPPING_CART\", function() { return CLEAR_SHOPPING_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_TYPE_FROM_FAVORITE_CART\", function() { return RMV_TYPE_FROM_FAVORITE_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RMV_FROM_FAVORITE_CART\", function() { return RMV_FROM_FAVORITE_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TO_FAVORITE_CART\", function() { return ADD_TO_FAVORITE_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_FAVORITE_CART\", function() { return CLEAR_FAVORITE_CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_BEER\", function() { return CURRENT_BEER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BEGIN_OFFER\", function() { return FETCH_BEGIN_OFFER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUCCESS_OFFER\", function() { return FETCH_SUCCESS_OFFER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FAIL_OFFER\", function() { return FETCH_FAIL_OFFER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_BEGIN_FILTERS\", function() { return FETCH_BEGIN_FILTERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SUCCESS_FILTERS\", function() { return FETCH_SUCCESS_FILTERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_FAIL_FILTERS\", function() { return FETCH_FAIL_FILTERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCR_ORDER\", function() { return INCR_ORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECR_ORDER\", function() { return DECR_ORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VALID\", function() { return VALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_VALID\", function() { return NOT_VALID; });\nconst RMV_FROM_SHOPPING_CART = \"RMV_FROM_SHOPPING_CART\";\nconst RMV_TYPE_FROM_SHOPPING_CART = \"RMV_TYPE_FROM_SHOPPING_CART\";\nconst ADD_TO_SHOPPING_CART = \"ADD_TO_SHOPPING_CART\";\nconst CLEAR_SHOPPING_CART = \"CLEAR_SHOPPING_CART\";\n\n\n\nconst RMV_TYPE_FROM_FAVORITE_CART = \"RMV_TYPE_FROM_FAVORITE_CART\";\nconst RMV_FROM_FAVORITE_CART = \"RMV_FROM_FAVORITE_CART\";\nconst ADD_TO_FAVORITE_CART = \"ADD_TO_FAVORITE_CART\";\nconst CLEAR_FAVORITE_CART = \"CLEAR_FAVORITE_CART\";\n\nconst CURRENT_BEER = \"CURRENT_BEER\";\n\nconst FETCH_BEGIN_OFFER = \"FETCH_BEGIN_OFFER\";\nconst FETCH_SUCCESS_OFFER = \"FETCH_SUCCESS_OFFER\";\nconst FETCH_FAIL_OFFER = \"FETCH_FAIL_OFFER\";\n\nconst FETCH_BEGIN_FILTERS = \"FETCH_BEGIN_FILTERS\";\nconst FETCH_SUCCESS_FILTERS = \"FETCH_SUCCESS_FILTERS\";\nconst FETCH_FAIL_FILTERS = \"FETCH_FAIL_FILTERS\";\n\nconst INCR_ORDER = \"INCR_ORDER\";\nconst DECR_ORDER = \"DECR_ORDER\";\n\nconst VALID = \"VALID\";\nconst NOT_VALID = \"NOT_VALID\";\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/actions.js?");

/***/ }),

/***/ "./src/manageState/applyMiddleware.js":
/*!********************************************!*\
  !*** ./src/manageState/applyMiddleware.js ***!
  \********************************************/
/*! exports provided: applyMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n\nconst applyMiddleware = (...middlewares) => (store) => {\n  \n  const boundMiddlewares = middlewares.map((middleware) => middleware(store));\n\n    return boundMiddlewares.reduce((a, b) => (next) => a(b(next)));\n  };\n\n\n//# sourceURL=webpack:///./src/manageState/applyMiddleware.js?");

/***/ }),

/***/ "./src/manageState/combineReducers.js":
/*!********************************************!*\
  !*** ./src/manageState/combineReducers.js ***!
  \********************************************/
/*! exports provided: combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n\nconst combineReducers = (reducers) => {\n\n    return (state = {}, action) => Object.keys(reducers).reduce((nextState,key) =>{\n                                        nextState[key] = reducers[key](state[key],action);  \n                                         return nextState\n                                        }, {})\n                                      \n}\n\n//# sourceURL=webpack:///./src/manageState/combineReducers.js?");

/***/ }),

/***/ "./src/manageState/createStore/createStore.js":
/*!****************************************************!*\
  !*** ./src/manageState/createStore/createStore.js ***!
  \****************************************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony import */ var _storeMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeMethods */ \"./src/manageState/createStore/storeMethods.js\");\n\n\n\n\nconst createStore = (reducer, middleware) => {\n\n  let state;\n  const store = Object(_storeMethods__WEBPACK_IMPORTED_MODULE_0__[\"storeMethods\"])(reducer,state);\n\n  if(middleware){\n      store.dispatch = middleware({\n          dispatch: (action) => store.dispatch(action),\n          getState: () => state,\n        })(store.dispatch)\n  };\n\n  return store;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/createStore/createStore.js?");

/***/ }),

/***/ "./src/manageState/createStore/storeMethods.js":
/*!*****************************************************!*\
  !*** ./src/manageState/createStore/storeMethods.js ***!
  \*****************************************************/
/*! exports provided: storeMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeMethods\", function() { return storeMethods; });\n/* harmony import */ var _validateAction_validateAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateAction/validateAction */ \"./src/manageState/createStore/validateAction/validateAction.js\");\n\n\n\n\n\nconst storeMethods = (reducer,state) => ({\n            \n            dispatch: (action) => {\n                        Object(_validateAction_validateAction__WEBPACK_IMPORTED_MODULE_0__[\"validateAction\"])(action);\n                        state = reducer(state, action);\n            },\n\n            getState: () => state,\n      });\n\n//# sourceURL=webpack:///./src/manageState/createStore/storeMethods.js?");

/***/ }),

/***/ "./src/manageState/createStore/validateAction/checkingIfErrFns.js":
/*!************************************************************************!*\
  !*** ./src/manageState/createStore/validateAction/checkingIfErrFns.js ***!
  \************************************************************************/
/*! exports provided: errIfIsNotObject, errIfIsHasNoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errIfIsNotObject\", function() { return errIfIsNotObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errIfIsHasNoType\", function() { return errIfIsHasNoType; });\nconst errIfIsNotObject = (action) =>{ \n        if (!action || typeof action !== \"object\" || Array.isArray(action)){\n        throw \"Action musi być obiektem!\";\n    }\n}\n\nconst errIfIsHasNoType = ({ type }) => {\n        if (typeof type === \"undefined\") {\n            throw \"Action musi mieć typ!\";\n        }\n}\n\n//# sourceURL=webpack:///./src/manageState/createStore/validateAction/checkingIfErrFns.js?");

/***/ }),

/***/ "./src/manageState/createStore/validateAction/validateAction.js":
/*!**********************************************************************!*\
  !*** ./src/manageState/createStore/validateAction/validateAction.js ***!
  \**********************************************************************/
/*! exports provided: validateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateAction\", function() { return validateAction; });\n/* harmony import */ var _checkingIfErrFns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkingIfErrFns */ \"./src/manageState/createStore/validateAction/checkingIfErrFns.js\");\n\n\n\n\n\n\nconst validateAction = (action) => {\n        Object(_checkingIfErrFns__WEBPACK_IMPORTED_MODULE_0__[\"errIfIsNotObject\"])(action);\n        Object(_checkingIfErrFns__WEBPACK_IMPORTED_MODULE_0__[\"errIfIsHasNoType\"])(action)\n};\n\n//# sourceURL=webpack:///./src/manageState/createStore/validateAction/validateAction.js?");

/***/ }),

/***/ "./src/manageState/middlewares.js":
/*!****************************************!*\
  !*** ./src/manageState/middlewares.js ***!
  \****************************************/
/*! exports provided: thunk, loggingMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thunk\", function() { return thunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loggingMiddleware\", function() { return loggingMiddleware; });\n\n\n\n\n\n\nconst thunk = ({dispatch, getState}) => next => action => {\n    \n    if (typeof action === 'function') {\n      return action(dispatch, getState);\n    }\n    return next(action);\n  };\n  \n  \n  \n  \nconst loggingMiddleware = ({getState}) => next => action => {\n\n  // PLACE FOR TRACKING METHODS THE STATE FLOW\n /* console.info('before', getState());\n  console.info('action', action);\n  console.info('after', getState());\n*/\n  return next(action);\n};\n\n\n/*\nconst delayMiddleware = ({dispatch, getState}) => next => action => {\n\n  console.info(\">>>>> getState\",getState());\n  console.info('>>>>> action', action);\n\n  return next(action);\n};\n  */\n\n//# sourceURL=webpack:///./src/manageState/middlewares.js?");

/***/ }),

/***/ "./src/manageState/reducers/alghoritmsToUseInReducers.js":
/*!***************************************************************!*\
  !*** ./src/manageState/reducers/alghoritmsToUseInReducers.js ***!
  \***************************************************************/
/*! exports provided: removeBeerFromNested, removePos, removeSpecifyBeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeBeerFromNested\", function() { return removeBeerFromNested; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePos\", function() { return removePos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeSpecifyBeer\", function() { return removeSpecifyBeer; });\n\nconst removeBeerFromNested = (cart,beer) => cart.reduce((acc,item) => item[0].name === beer.name ? [...acc,item.slice(1)] : [...acc,item] , [] );\n\n\nconst removePos = (arr) => (beer) => {\n\n                let tab = []; \n                for(let i = 0; i < arr.length; i++ ){\n                  if(arr[i].name === beer.name){\n                        arr.splice(i,1);\n                        tab = [...arr];\n                        return tab;\n                    }\n                }\n            }\n\n\nconst removeSpecifyBeer = (beers) => (givenName) =>  beers.filter((x) => x.name !==  givenName )\n\n//# sourceURL=webpack:///./src/manageState/reducers/alghoritmsToUseInReducers.js?");

/***/ }),

/***/ "./src/manageState/reducers/caseFunctions/reducerToCurrentBeer.js":
/*!************************************************************************!*\
  !*** ./src/manageState/reducers/caseFunctions/reducerToCurrentBeer.js ***!
  \************************************************************************/
/*! exports provided: reducerToCurrentBeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToCurrentBeer\", function() { return reducerToCurrentBeer; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ \"./src/manageState/actions.js\");\n\n\n\n\n\nconst initState = \"\";\n\n\nconst reducerToCurrentBeer = (state = initState, action) => {\n\n    switch (action.type){\n        case _actions__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_BEER\"]:\n            return action.value;\n        default:\n            return state;\n    }\n}\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/caseFunctions/reducerToCurrentBeer.js?");

/***/ }),

/***/ "./src/manageState/reducers/higherOrderReducers/reducerToCart.js":
/*!***********************************************************************!*\
  !*** ./src/manageState/reducers/higherOrderReducers/reducerToCart.js ***!
  \***********************************************************************/
/*! exports provided: reducerToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToCart\", function() { return reducerToCart; });\n/* harmony import */ var _alghoritmsToUseInReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../alghoritmsToUseInReducers */ \"./src/manageState/reducers/alghoritmsToUseInReducers.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions */ \"./src/manageState/actions.js\");\n\n\n\n\nconst initState = [];\n\n\nconst actionTypes = (type) => ({\n        ADD_TO_SHOPPING_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TO_SHOPPING_CART\"],\n        RMV_FROM_SHOPPING_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_FROM_SHOPPING_CART\"],\n        CLEAR_SHOPPING_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_SHOPPING_CART\"],\n        RMV_TYPE_FROM_SHOPPING_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_TYPE_FROM_SHOPPING_CART\"],\n        ADD_TO_FAVORITE_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TO_FAVORITE_CART\"],\n        RMV_FROM_FAVORITE_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_FROM_FAVORITE_CART\"],\n        CLEAR_FAVORITE_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_FAVORITE_CART\"],\n        RMV_TYPE_FROM_FAVORITE_CART: _actions__WEBPACK_IMPORTED_MODULE_1__[\"RMV_TYPE_FROM_FAVORITE_CART\"],  \n    })[type]\n\n\n\nconst reducerToCart = (reducerFor = \"\") => \n        (state = initState, action) => {\n            switch (action.type){\n                case actionTypes(`ADD_TO_${reducerFor}`):\n                    return [...state, action.value];\n                case actionTypes(`RMV_FROM_${reducerFor}`): \n                    return Object(_alghoritmsToUseInReducers__WEBPACK_IMPORTED_MODULE_0__[\"removePos\"])(state)(action.value);\n                case actionTypes(`CLEAR_${reducerFor}`):\n                        return [];\n                case actionTypes(`RMV_TYPE_FROM_${reducerFor}`):\n                        return Object(_alghoritmsToUseInReducers__WEBPACK_IMPORTED_MODULE_0__[\"removeSpecifyBeer\"])(state)(action.value.name);\n                default:\n                    return state;\n                }\n         };\n\n\n\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/higherOrderReducers/reducerToCart.js?");

/***/ }),

/***/ "./src/manageState/reducers/higherOrderReducers/reducerToResponse.js":
/*!***************************************************************************!*\
  !*** ./src/manageState/reducers/higherOrderReducers/reducerToResponse.js ***!
  \***************************************************************************/
/*! exports provided: reducerToResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerToResponse\", function() { return reducerToResponse; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ \"./src/manageState/actions.js\");\n\n\n\n    \nconst initState = {\n    items: [],\n    loading: false,\n    error: null\n}\n\nconst actionTypes = (type) => ({\n    FETCH_BEGIN_OFFER: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN_OFFER\"],\n    FETCH_SUCCESS_OFFER: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS_OFFER\"],\n    FETCH_FAIL_OFFER: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL_OFFER\"],\n    FETCH_BEGIN_FILTERS: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_BEGIN_FILTERS\"],\n    FETCH_FAIL_FILTERS: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_FAIL_FILTERS\"],\n    FETCH_SUCCESS_FILTERS: _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SUCCESS_FILTERS\"]   \n})[type]\n\n\n\nconst reducerToResponse = (reducerFor = \"\") => \n        (state = initState, action) => {\n            switch (action.type){\n                case actionTypes(`FETCH_BEGIN_${reducerFor}`):\n                    return{\n                        ...state,\n                        loading: true,\n                    };\n                case actionTypes(`FETCH_SUCCESS_${reducerFor}`):\n                    return{\n                        ...state,\n                        loading:false,\n                        items: action.payload\n                    };\n                case actionTypes(`FETCH_FAIL_${reducerFor}`):\n                    return{\n                        ...state,\n                        loading: false,\n                        items: [],\n                        error: action.error\n                    }\n                default:\n                    return state;\n            }\n         }\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/higherOrderReducers/reducerToResponse.js?");

/***/ }),

/***/ "./src/manageState/reducers/mainReducer.js":
/*!*************************************************!*\
  !*** ./src/manageState/reducers/mainReducer.js ***!
  \*************************************************/
/*! exports provided: mainReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainReducer\", function() { return mainReducer; });\n/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combineReducers */ \"./src/manageState/combineReducers.js\");\n/* harmony import */ var _higherOrderReducers_reducerToCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./higherOrderReducers/reducerToCart */ \"./src/manageState/reducers/higherOrderReducers/reducerToCart.js\");\n/* harmony import */ var _caseFunctions_reducerToCurrentBeer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caseFunctions/reducerToCurrentBeer */ \"./src/manageState/reducers/caseFunctions/reducerToCurrentBeer.js\");\n/* harmony import */ var _higherOrderReducers_reducerToResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./higherOrderReducers/reducerToResponse */ \"./src/manageState/reducers/higherOrderReducers/reducerToResponse.js\");\n\n\n\n\n\n\n\nconst mainReducer = Object(_combineReducers__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    reducerToResponseForOffer: Object(_higherOrderReducers_reducerToResponse__WEBPACK_IMPORTED_MODULE_3__[\"reducerToResponse\"])(\"OFFER\"),\n    reducerToResponseForFilters: Object(_higherOrderReducers_reducerToResponse__WEBPACK_IMPORTED_MODULE_3__[\"reducerToResponse\"])(\"FILTERS\"),\n    reducerToShopping: Object(_higherOrderReducers_reducerToCart__WEBPACK_IMPORTED_MODULE_1__[\"reducerToCart\"])(\"SHOPPING_CART\"),\n    reducerToFavorite: Object(_higherOrderReducers_reducerToCart__WEBPACK_IMPORTED_MODULE_1__[\"reducerToCart\"])(\"FAVORITE_CART\"),\n    reducerToCurrentBeer: _caseFunctions_reducerToCurrentBeer__WEBPACK_IMPORTED_MODULE_2__[\"reducerToCurrentBeer\"],\n})\n\n\n//# sourceURL=webpack:///./src/manageState/reducers/mainReducer.js?");

/***/ }),

/***/ "./src/manageState/store.js":
/*!**********************************!*\
  !*** ./src/manageState/store.js ***!
  \**********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _createStore_createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore/createStore */ \"./src/manageState/createStore/createStore.js\");\n/* harmony import */ var _reducers_mainReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/mainReducer */ \"./src/manageState/reducers/mainReducer.js\");\n/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyMiddleware */ \"./src/manageState/applyMiddleware.js\");\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares */ \"./src/manageState/middlewares.js\");\n\n\n\n\n\n\n\n  const store = Object(_createStore_createStore__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_mainReducer__WEBPACK_IMPORTED_MODULE_1__[\"mainReducer\"], Object(_applyMiddleware__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(\n        _middlewares__WEBPACK_IMPORTED_MODULE_3__[\"thunk\"],\n        _middlewares__WEBPACK_IMPORTED_MODULE_3__[\"loggingMiddleware\"],\n    ));\n  \n    \n\n//# sourceURL=webpack:///./src/manageState/store.js?");

/***/ }),

/***/ "./src/monads/Either/Either.js":
/*!*************************************!*\
  !*** ./src/monads/Either/Either.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right */ \"./src/monads/Either/Right.js\");\n/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left */ \"./src/monads/Either/Left.js\");\n\n\n\n\n\n const Either = (fn) => {\n\n                try {\n                    let res = fn();\n                    return Object(_Right__WEBPACK_IMPORTED_MODULE_0__[\"Right\"])(res);\n                } catch (e) {\n                    return Object(_Left__WEBPACK_IMPORTED_MODULE_1__[\"Left\"])(e);\n                }\n            }\n\n\n\nEither.of = Either;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Either);\n\n//# sourceURL=webpack:///./src/monads/Either/Either.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Right\", function() { return Right; });\n\nconst Right = (v) => ({\n    \n                map: (fn) => Right(fn(v)),\n                match: (pattern) => pattern.Right(v),\n                chain: (fn) => fn(v),\n                valueOfn: () => v,\n            });\n\n//# sourceURL=webpack:///./src/monads/Either/Right.js?");

/***/ }),

/***/ "./src/pipeline.js":
/*!*************************!*\
  !*** ./src/pipeline.js ***!
  \*************************/
/*! exports provided: pipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pipeline\", function() { return pipeline; });\n\n// export const pipeline = (...fns) => (x) => fns.reduce((acc,fn) => fn(acc), x);\n\n\n// replacement for functional pipeline to improve performance\n\nconst pipeline = (...fns) => (x) => {\n    let acc = x;\n\n    for(const fn of fns){\n        acc = fn(acc);     \n    }\n\n return acc;\n}\n\n\n//# sourceURL=webpack:///./src/pipeline.js?");

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
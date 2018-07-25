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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/js/App.js":
/*!**************************!*\
  !*** ./client/js/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facebook */ \"./client/js/Facebook.js\");\n/* harmony import */ var _CategoryView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryView */ \"./client/js/CategoryView.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ \"./client/js/const.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar SELECTOR = {\n    CATEGORY_CONTAINER: \".categories\",\n    LIST_CONTAINER: \".listWrapper\"\n};\n\nvar App = function () {\n    function App() {\n        _classCallCheck(this, App);\n\n        this.init();\n    }\n\n    _createClass(App, [{\n        key: 'init',\n        value: function init() {\n            this.fb = new _Facebook__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_const__WEBPACK_IMPORTED_MODULE_2__[\"APP_ID\"]);\n\n            // this.listView = new ListView(document.querySelector(SELECTOR.LIST_CONTAINER))\n            this.categoryView = new _CategoryView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector(SELECTOR.CATEGORY_CONTAINER));\n            this.categoryView.on(\"change\", function (categoryKey) {\n                console.log(\"Category Changed\", categoryKey);\n                // this.listView.startRenderWithCategory(categoryKey)\n            });\n\n            // $(window).on(\"scroll\", debounce(function() {\n            //     var scrollHeight = $(document).height();\n            //     var scrollPosition = $(window).height() + $(window).scrollTop();\n            //     if ((scrollHeight - scrollPosition) / scrollHeight === 0) {\n            //         // when scroll to bottom of the page\n            //         drawList(window.category, window.datalastKey);\n            //     }\n            // }, 1000));\n        }\n    }]);\n\n    return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9qcy9BcHAuanM/YTAxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFjZWJvb2sgZnJvbSAnLi9GYWNlYm9vaydcbmltcG9ydCBDYXRlZ29yeVZpZXcgZnJvbSAnLi9DYXRlZ29yeVZpZXcnXG5pbXBvcnQge0FQUF9JRH0gZnJvbSAnLi9jb25zdCdcblxuY29uc3QgU0VMRUNUT1IgPSB7XG4gICAgQ0FURUdPUllfQ09OVEFJTkVSOiBcIi5jYXRlZ29yaWVzXCIsXG4gICAgTElTVF9DT05UQUlORVI6IFwiLmxpc3RXcmFwcGVyXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5mYiA9IG5ldyBGYWNlYm9vayhBUFBfSUQpXG5cbiAgICAgICAgLy8gdGhpcy5saXN0VmlldyA9IG5ldyBMaXN0Vmlldyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SLkxJU1RfQ09OVEFJTkVSKSlcbiAgICAgICAgdGhpcy5jYXRlZ29yeVZpZXcgPSBuZXcgQ2F0ZWdvcnlWaWV3KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1IuQ0FURUdPUllfQ09OVEFJTkVSKSlcbiAgICAgICAgdGhpcy5jYXRlZ29yeVZpZXcub24oXCJjaGFuZ2VcIiwgY2F0ZWdvcnlLZXkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXRlZ29yeSBDaGFuZ2VkXCIsIGNhdGVnb3J5S2V5KVxuICAgICAgICAgICAgLy8gdGhpcy5saXN0Vmlldy5zdGFydFJlbmRlcldpdGhDYXRlZ29yeShjYXRlZ29yeUtleSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XG4gICAgICAgIC8vICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkKHdpbmRvdykuaGVpZ2h0KCkgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIC8vICAgICBpZiAoKHNjcm9sbEhlaWdodCAtIHNjcm9sbFBvc2l0aW9uKSAvIHNjcm9sbEhlaWdodCA9PT0gMCkge1xuICAgICAgICAvLyAgICAgICAgIC8vIHdoZW4gc2Nyb2xsIHRvIGJvdHRvbSBvZiB0aGUgcGFnZVxuICAgICAgICAvLyAgICAgICAgIGRyYXdMaXN0KHdpbmRvdy5jYXRlZ29yeSwgd2luZG93LmRhdGFsYXN0S2V5KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwgMTAwMCkpO1xuICAgIH1cbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/js/App.js\n");

/***/ }),

/***/ "./client/js/CategoryView.js":
/*!***********************************!*\
  !*** ./client/js/CategoryView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./client/js/const.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar SELECTOR = {\n    ITEM: \".category\"\n};\nvar EVENT = {\n    CHANGE: \"change\"\n};\n\nvar CategoryView = function (_EventEmitter) {\n    _inherits(CategoryView, _EventEmitter);\n\n    function CategoryView(container) {\n        _classCallCheck(this, CategoryView);\n\n        var _this = _possibleConstructorReturn(this, (CategoryView.__proto__ || Object.getPrototypeOf(CategoryView)).call(this));\n\n        _this.container = container;\n        _this.init();\n        return _this;\n    }\n\n    _createClass(CategoryView, [{\n        key: \"init\",\n        value: function init() {\n            var that = this;\n            var container = this.container;\n\n            this.container.innerHTML = Object.keys(_const__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"]).map(function (categoryKey) {\n                var category = _const__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORIES\"][categoryKey];\n                var emoji = category.EMOJI === null ? \"\" : category.EMOJI;\n                return \"<li class=\\\"category\\\" data-key=\\\"\" + category.INDEX + \"\\\">\" + emoji + \" \" + category.VALUE + \"</li>\";\n            }).join(\"\");\n            $(this.container).slick({ dots: true,\n                infinite: false,\n                speed: 300,\n                slidesToShow: 1,\n                centerMode: true,\n                variableWidth: true });\n            // On before slide change\n            $(this.container).on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n                var nextItem = $(container).find(\"[data-key=\" + nextSlide + \"]\").get(0);\n                nextItem.click();\n            });\n            $(this.container).delegate(SELECTOR.ITEM, \"click\", function () {\n                var currentCategoryKey = $(container).find(\".selected\").data(\"key\");\n                $(container).find(SELECTOR.ITEM).removeClass(\"selected\");\n                $(this).addClass(\"selected\");\n                this.classList.add(\"selected\");\n\n                var newCategoryKey = $(this).data(\"key\");\n                console.log(this);\n                console.log(currentCategoryKey, newCategoryKey);\n                $(container).slick('slickGoTo', newCategoryKey);\n\n                // 이벤트 Emit\n                if (currentCategoryKey !== newCategoryKey) {\n                    console.log(EVENT.CHANGE, newCategoryKey);\n                    that.emit(EVENT.CHANGE, newCategoryKey);\n                }\n            });\n\n            // 첫번째 카테고리 선택\n            $(container).find(\"[data-key=0]\").get(0).click();\n        }\n    }]);\n\n    return CategoryView;\n}(EventEmitter);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvQ2F0ZWdvcnlWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9qcy9DYXRlZ29yeVZpZXcuanM/MmY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q0FURUdPUklFU30gZnJvbSAnLi9jb25zdCdcblxuY29uc3QgU0VMRUNUT1IgPSB7XG4gICAgSVRFTTogXCIuY2F0ZWdvcnlcIlxufVxuY29uc3QgRVZFTlQgPSB7XG4gICAgQ0hBTkdFOiBcImNoYW5nZVwiXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeVZpZXcgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gT2JqZWN0LmtleXMoQ0FURUdPUklFUykubWFwKGNhdGVnb3J5S2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gQ0FURUdPUklFU1tjYXRlZ29yeUtleV1cbiAgICAgICAgICAgIGNvbnN0IGVtb2ppID0gY2F0ZWdvcnkuRU1PSkkgPT09IG51bGwgPyBcIlwiIDogY2F0ZWdvcnkuRU1PSklcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwiY2F0ZWdvcnlcIiBkYXRhLWtleT1cIiR7Y2F0ZWdvcnkuSU5ERVh9XCI+JHtlbW9qaX0gJHtjYXRlZ29yeS5WQUxVRX08L2xpPmBcbiAgICAgICAgfSkuam9pbihcIlwiKVxuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5zbGljaygge2RvdHM6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWV9KVxuLy8gT24gYmVmb3JlIHNsaWRlIGNoYW5nZVxuJCh0aGlzLmNvbnRhaW5lcikub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgIGNvbnN0IG5leHRJdGVtID0gJChjb250YWluZXIpLmZpbmQoYFtkYXRhLWtleT0ke25leHRTbGlkZX1dYCkuZ2V0KDApXG4gICAgbmV4dEl0ZW0uY2xpY2soKVxuICB9KTtcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuZGVsZWdhdGUoU0VMRUNUT1IuSVRFTSwgXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeUtleSA9ICQoY29udGFpbmVyKS5maW5kKFwiLnNlbGVjdGVkXCIpLmRhdGEoXCJrZXlcIilcbiAgICAgICAgICAgICQoY29udGFpbmVyKS5maW5kKFNFTEVDVE9SLklURU0pLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIilcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKVxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIilcblxuICAgICAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnlLZXkgPSAkKHRoaXMpLmRhdGEoXCJrZXlcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50Q2F0ZWdvcnlLZXksIG5ld0NhdGVnb3J5S2V5KSAgICAgICAgICAgIFxuICAgICAgICAgICAgJChjb250YWluZXIpLnNsaWNrKCdzbGlja0dvVG8nLCBuZXdDYXRlZ29yeUtleSk7XG5cbiAgICAgICAgICAgIC8vIOydtOuypO2KuCBFbWl0XG4gICAgICAgICAgICBpZiAoY3VycmVudENhdGVnb3J5S2V5ICE9PSBuZXdDYXRlZ29yeUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEVWRU5ULkNIQU5HRSwgbmV3Q2F0ZWdvcnlLZXkpXG4gICAgICAgICAgICAgICAgdGhhdC5lbWl0KEVWRU5ULkNIQU5HRSwgbmV3Q2F0ZWdvcnlLZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g7LKr67KI7Ke4IOy5tO2FjOqzoOumrCDshKDtg51cbiAgICAgICAgJChjb250YWluZXIpLmZpbmQoYFtkYXRhLWtleT0wXWApLmdldCgwKS5jbGljaygpXG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBOUNBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/js/CategoryView.js\n");

/***/ }),

/***/ "./client/js/Facebook.js":
/*!*******************************!*\
  !*** ./client/js/Facebook.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FB = window.FB;\n\nvar FBLoginStatus = {\n    CONNECTED: 'connected', //사용자가 Facebook에 로그인하고 앱에 로그인\n    NOT_AUTHORIZED: 'not_authorized', //Facebook에는 로그인했지만 앱에 로그인하지 않음\n    UNKNOWN: 'unknown' // Facebook에 로그인 하지 않음. 또는 이전에 FB.logout()이 호출되어 Fackebook에 연결 불가\n};\n\nvar Facebook = function () {\n    function Facebook(appId) {\n        _classCallCheck(this, Facebook);\n\n        this.userID = null;\n        FB.init({\n            appId: appId,\n            status: true,\n            cookie: true,\n            xfbml: true,\n            version: \"v3.0\"\n        });\n        FB.Event.subscribe('auth.login', function (response) {\n            console.log('logged in');\n        });\n        FB.Event.subscribe('auth.logout', function (response) {\n            console.log('logged out');\n        });\n        FB.Event.subscribe('auth.authResponseChange', function (response) {\n            console.log(\"auth_response_change_callback\", response);\n        });\n        FB.Event.subscribe('auth.statusChange', function (response) {\n            console.log(\"auth_status_change_callback: \" + response.status);\n        });\n    }\n\n    _createClass(Facebook, [{\n        key: 'getLoginStatus',\n        value: function getLoginStatus() {\n            var _this = this;\n\n            console.log(\"getLoginStatus\");\n            return new Promise(function (res) {\n                FB.getLoginStatus(function (response) {\n                    var userID = response.authResponse.userID;\n                    _this.userID = userID;\n                    var loginStatus = response.status;\n                    switch (loginStatus) {\n                        case FBLoginStatus.CONNECTED:\n                            break;\n                        case FBLoginStatus.NOT_AUTHORIZED:\n                        case FBLoginStatus.UNKNOWN:\n                            break;\n                        default:\n                            break;\n                    }\n                    console.log(\"getLoginStatus result\", { userID: userID, loginStatus: loginStatus });\n                    res({ userID: userID, loginStatus: loginStatus });\n                });\n            });\n        }\n    }]);\n\n    return Facebook;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Facebook);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvRmFjZWJvb2suanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L2pzL0ZhY2Vib29rLmpzP2U3OTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRkIgPSB3aW5kb3cuRkJcblxuY29uc3QgRkJMb2dpblN0YXR1cyA9IHtcbiAgICBDT05ORUNURUQ6ICdjb25uZWN0ZWQnLCAvL+yCrOyaqeyekOqwgCBGYWNlYm9va+yXkCDroZzqt7jsnbjtlZjqs6Ag7JWx7JeQIOuhnOq3uOyduFxuICAgIE5PVF9BVVRIT1JJWkVEOiAnbm90X2F1dGhvcml6ZWQnLCAvL0ZhY2Vib29r7JeQ64qUIOuhnOq3uOyduO2WiOyngOunjCDslbHsl5Ag66Gc6re47J247ZWY7KeAIOyViuydjFxuICAgIFVOS05PV046ICd1bmtub3duJyAvLyBGYWNlYm9va+yXkCDroZzqt7jsnbgg7ZWY7KeAIOyViuydjC4g65iQ64qUIOydtOyghOyXkCBGQi5sb2dvdXQoKeydtCDtmLjstpzrkJjslrQgRmFja2Vib29r7JeQIOyXsOqysCDrtojqsIBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2Vib29rIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBJZCkge1xuICAgICAgICB0aGlzLnVzZXJJRCA9IG51bGxcbiAgICAgICAgRkIuaW5pdCh7XG4gICAgICAgICAgICBhcHBJZCxcbiAgICAgICAgICAgIHN0YXR1cyA6IHRydWUsXG4gICAgICAgICAgICBjb29raWUgOiB0cnVlLFxuICAgICAgICAgICAgeGZibWwgIDogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnNpb246IFwidjMuMFwiXG4gICAgICAgIH0pO1xuICAgICAgICBGQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGgubG9naW4nLCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBpbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLmxvZ291dCcsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIG91dCcpO1xuICAgICAgICB9KTsgXG4gICAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5hdXRoUmVzcG9uc2VDaGFuZ2UnLCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRoX3Jlc3BvbnNlX2NoYW5nZV9jYWxsYmFja1wiLCByZXNwb25zZSk7XG4gICAgICAgIH0pOyBcbiAgICAgICAgRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dGhfc3RhdHVzX2NoYW5nZV9jYWxsYmFjazogXCIgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICB9KTsgXG4gICAgfVxuICAgIGdldExvZ2luU3RhdHVzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldExvZ2luU3RhdHVzXCIpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXMgPT4ge1xuICAgICAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklEID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlLnVzZXJJRFxuICAgICAgICAgICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEXG4gICAgICAgICAgICAgICAgY29uc3QgbG9naW5TdGF0dXMgPSByZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGxvZ2luU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRkJMb2dpblN0YXR1cy5DT05ORUNURUQ6ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGQkxvZ2luU3RhdHVzLk5PVF9BVVRIT1JJWkVEOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZCTG9naW5TdGF0dXMuVU5LTk9XTjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0TG9naW5TdGF0dXMgcmVzdWx0XCIsIHt1c2VySUQsIGxvZ2luU3RhdHVzfSlcbiAgICAgICAgICAgICAgICByZXMoe3VzZXJJRCwgbG9naW5TdGF0dXN9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBM0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/js/Facebook.js\n");

/***/ }),

/***/ "./client/js/const.js":
/*!****************************!*\
  !*** ./client/js/const.js ***!
  \****************************/
/*! exports provided: APP_ID, CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APP_ID\", function() { return APP_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORIES\", function() { return CATEGORIES; });\n\nvar APP_ID = \"213943862599966\";\nvar CATEGORIES = {\n    ALL: { VALUE: \"all\", INDEX: 0, EMOJI: null },\n    LOCAL: { VALUE: \"Local\", INDEX: 1, EMOJI: \"🏘️\" },\n    FRIENDS: { VALUE: \"Friends\", INDEX: 2, EMOJI: \"👥\" },\n    PARENTING: { VALUE: \"Parenting\", INDEX: 3, EMOJI: \"👶\" },\n    SCHOOL_AND_EDUCATION: { VALUE: \"School and Education\", INDEX: 4, EMOJI: \"📚\" },\n    SPORTS: { VALUE: \"Sports\", INDEX: 5, EMOJI: \"⚽\" },\n    FOOD: { VALUE: \"Food\", INDEX: 6, EMOJI: \"🍔\" },\n    PHOTOGRAPHY: { VALUE: \"Photography\", INDEX: 7, EMOJI: \"📷\" },\n    BUY_AND_SELL: { VALUE: \"Buy and Sell\", INDEX: 8, EMOJI: \"💸\" },\n    PROFESSIONAL_NETWORKING: { VALUE: \"Professional Networking\", INDEX: 9, EMOJI: \"🤝\" },\n    ANIMALS_AND_PETS: { VALUE: \"Animals and Pets\", INDEX: 10, EMOJI: \"🐱\" },\n    OUTDOOR_ACTIVITIES: { VALUE: \"Outdoor Activities\", INDEX: 11, EMOJI: \"🏄\" }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvY29uc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L2pzL2NvbnN0LmpzPzMxMjgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgQVBQX0lEID0gXCIyMTM5NDM4NjI1OTk5NjZcIlxuZXhwb3J0IGNvbnN0IENBVEVHT1JJRVMgPSB7XG4gICAgQUxMOiB7VkFMVUU6IFwiYWxsXCIsIElOREVYOiAwLCBFTU9KSTogbnVsbH0sXG4gICAgTE9DQUw6IHtWQUxVRTogXCJMb2NhbFwiLCBJTkRFWDogMSwgRU1PSkk6IFwi8J+PmO+4j1wifSxcbiAgICBGUklFTkRTOiB7VkFMVUU6IFwiRnJpZW5kc1wiLCBJTkRFWDogMiwgRU1PSkk6IFwi8J+RpVwifSxcbiAgICBQQVJFTlRJTkc6IHtWQUxVRTogXCJQYXJlbnRpbmdcIiwgSU5ERVg6IDMsIEVNT0pJOiBcIvCfkbZcIn0sXG4gICAgU0NIT09MX0FORF9FRFVDQVRJT046IHtWQUxVRTogXCJTY2hvb2wgYW5kIEVkdWNhdGlvblwiLCBJTkRFWDogNCwgRU1PSkk6IFwi8J+TmlwiIH0sXG4gICAgU1BPUlRTOiB7VkFMVUU6IFwiU3BvcnRzXCIsIElOREVYOiA1LCBFTU9KSTogXCLimr1cIn0sXG4gICAgRk9PRDoge1ZBTFVFOiBcIkZvb2RcIiwgSU5ERVg6IDYsIEVNT0pJOiBcIvCfjZRcIn0sXG4gICAgUEhPVE9HUkFQSFk6IHtWQUxVRTogXCJQaG90b2dyYXBoeVwiLCBJTkRFWDogNywgRU1PSkk6IFwi8J+Tt1wifSxcbiAgICBCVVlfQU5EX1NFTEw6IHtWQUxVRTogXCJCdXkgYW5kIFNlbGxcIiwgSU5ERVg6IDgsIEVNT0pJOiBcIvCfkrhcIn0sXG4gICAgUFJPRkVTU0lPTkFMX05FVFdPUktJTkc6IHtWQUxVRTogXCJQcm9mZXNzaW9uYWwgTmV0d29ya2luZ1wiLCBJTkRFWDogOSwgRU1PSkk6IFwi8J+knVwifSxcbiAgICBBTklNQUxTX0FORF9QRVRTOiB7VkFMVUU6IFwiQW5pbWFscyBhbmQgUGV0c1wiLCBJTkRFWDogMTAsIEVNT0pJOiBcIvCfkLFcIn0sXG4gICAgT1VURE9PUl9BQ1RJVklUSUVTOiB7VkFMVUU6IFwiT3V0ZG9vciBBY3Rpdml0aWVzXCIsIElOREVYOiAxMSwgRU1PSkk6IFwi8J+PhFwifVxufSJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/js/const.js\n");

/***/ }),

/***/ "./client/js/index.js":
/*!****************************!*\
  !*** ./client/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./client/js/App.js\");\n\n\n$(document).ready(function () {\n    var app = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L2pzL2luZGV4LmpzPzU0YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoKVxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/js/index.js\n");

/***/ })

/******/ });
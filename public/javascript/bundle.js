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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar App = function App() {\n    _classCallCheck(this, App);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9qcy9BcHAuanM/YTAxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/js/App.js\n");

/***/ }),

/***/ "./client/js/index.js":
/*!****************************!*\
  !*** ./client/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./client/js/App.js\");\n\n\nvar app = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar FBLoginStatus = {\n    CONNECTED: 'connected', //사용자가 Facebook에 로그인하고 앱에 로그인\n    NOT_AUTHORIZED: 'not_authorized', //Facebook에는 로그인했지만 앱에 로그인하지 않음\n    UNKNOWN: 'unknown' // Facebook에 로그인 하지 않음. 또는 이전에 FB.logout()이 호출되어 Fackebook에 연결 불가\n};\nvar url = void 0;\n\n$(document).ready(function () {\n    loginCheck();\n    $('.category').on('click', function (e) {\n        var key = $(e.currentTarget).data('key');\n        drawList(key, null);\n    });\n});\n\nwindow.checkFBLogin = function () {\n    loginCheck();\n};\n\nfunction loginCheck() {\n    FB.getLoginStatus(function (response) {\n        switch (response.status) {\n            case FBLoginStatus.CONNECTED:\n                toggleWelcome(false);\n                showList(true);\n                drawList();\n                break;\n            case FBLoginStatus.NOT_AUTHORIZED:\n            case FBLoginStatus.UNKNOWN:\n                toggleWelcome(true);\n                showList(false);\n                break;\n            default:\n                break;\n        }\n    });\n}\n\nfunction toggleWelcome(isShow) {\n    $('.welcome').toggle(isShow);\n}\n\nfunction showList(isShow) {\n    $('.listWrapper').toggle(isShow);\n}\n\nfunction drawList(category, lastKey) {\n    category = category || 0;\n    lastKey = lastKey || null;\n    var url = 'posts?category=' + category + (lastKey ? 'lastKey=' + lastKey : '');\n    $.ajax({\n        url: url,\n        dataType: 'json'\n    }).done(function (json) {\n        var lastKey = json.lastKey;\n        var lists = json.list;\n        var listHtml = '';\n        var postTemplate = _.template('<div class=\"list\" data-category=<%= category %>><span class=\"url\"> <%= url %> </span><img class=\"img\" src=<%= image %>>' + '<div class=\"domain\"><%= domain %></div><div class=\"title\"><%= title %></div><div class=\"desc\"><%= description %></div></div>');\n\n        $.each(lists, function (key, item) {\n            var meta = item.metadata;\n            meta.category = item.category;\n            meta.domain = item.url.split('://')[1].split('/')[0];\n            listHtml += postTemplate(meta);\n        });\n        if (lastKey) {\n            $('.lists').append(listHtml);\n            debugger;\n        } else {\n            window.mint = listHtml;\n            $('.lists').html(listHtml);\n        }\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L2pzL2luZGV4LmpzPzU0YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpXG5jb25zdCBGQkxvZ2luU3RhdHVzID0ge1xuICBDT05ORUNURUQ6ICdjb25uZWN0ZWQnLCAvL+yCrOyaqeyekOqwgCBGYWNlYm9va+yXkCDroZzqt7jsnbjtlZjqs6Ag7JWx7JeQIOuhnOq3uOyduFxuICBOT1RfQVVUSE9SSVpFRDogJ25vdF9hdXRob3JpemVkJywgLy9GYWNlYm9va+yXkOuKlCDroZzqt7jsnbjtlojsp4Drp4wg7JWx7JeQIOuhnOq3uOyduO2VmOyngCDslYrsnYxcbiAgVU5LTk9XTjogJ3Vua25vd24nIC8vIEZhY2Vib29r7JeQIOuhnOq3uOyduCDtlZjsp4Ag7JWK7J2MLiDrmJDripQg7J207KCE7JeQIEZCLmxvZ291dCgp7J20IO2YuOy2nOuQmOyWtCBGYWNrZWJvb2vsl5Ag7Jew6rKwIOu2iOqwgFxufTtcbmxldCB1cmw7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICBsb2dpbkNoZWNrKCk7XG4gICAgJCgnLmNhdGVnb3J5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGtleSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCdrZXknKTtcbiAgICAgICAgZHJhd0xpc3Qoa2V5LCBudWxsKTtcbiAgICB9KTtcbn0pO1xuXG53aW5kb3cuY2hlY2tGQkxvZ2luID0gKCkgPT4ge1xuICAgIGxvZ2luQ2hlY2soKTtcbn1cblxuZnVuY3Rpb24gbG9naW5DaGVjayAoKSB7XG4gICAgRkIuZ2V0TG9naW5TdGF0dXMoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIEZCTG9naW5TdGF0dXMuQ09OTkVDVEVEOlxuICAgICAgICAgICAgICAgIHRvZ2dsZVdlbGNvbWUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNob3dMaXN0KHRydWUpO1xuICAgICAgICAgICAgICAgIGRyYXdMaXN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZCTG9naW5TdGF0dXMuTk9UX0FVVEhPUklaRUQ6XG4gICAgICAgICAgICBjYXNlIEZCTG9naW5TdGF0dXMuVU5LTk9XTjpcbiAgICAgICAgICAgICAgICB0b2dnbGVXZWxjb21lKHRydWUpO1xuICAgICAgICAgICAgICAgIHNob3dMaXN0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlV2VsY29tZShpc1Nob3cpIHtcbiAgICAkKCcud2VsY29tZScpLnRvZ2dsZShpc1Nob3cpO1xufVxuXG5mdW5jdGlvbiBzaG93TGlzdChpc1Nob3cpIHtcbiAgICAkKCcubGlzdFdyYXBwZXInKS50b2dnbGUoaXNTaG93KTtcbn1cblxuZnVuY3Rpb24gZHJhd0xpc3QoY2F0ZWdvcnksIGxhc3RLZXkpIHtcbiAgICBjYXRlZ29yeSA9IGNhdGVnb3J5IHx8IDA7XG4gICAgbGFzdEtleSA9IGxhc3RLZXkgfHwgbnVsbDtcbiAgICBsZXQgdXJsID0gJ3Bvc3RzP2NhdGVnb3J5PScgKyBjYXRlZ29yeSArIChsYXN0S2V5ID8gJ2xhc3RLZXk9JyArIGxhc3RLZXk6ICcnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgIH0pLmRvbmUoKGpzb24pID0+IHtcbiAgICAgICAgbGV0IGxhc3RLZXkgPSBqc29uLmxhc3RLZXk7XG4gICAgICAgIGxldCBsaXN0cyA9IGpzb24ubGlzdDtcbiAgICAgICAgbGV0IGxpc3RIdG1sID0gJyc7XG4gICAgICAgIGxldCBwb3N0VGVtcGxhdGUgPSBfLnRlbXBsYXRlKCc8ZGl2IGNsYXNzPVwibGlzdFwiIGRhdGEtY2F0ZWdvcnk9PCU9IGNhdGVnb3J5ICU+PjxzcGFuIGNsYXNzPVwidXJsXCI+IDwlPSB1cmwgJT4gPC9zcGFuPjxpbWcgY2xhc3M9XCJpbWdcIiBzcmM9PCU9IGltYWdlICU+PicgK1xuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZG9tYWluXCI+PCU9IGRvbWFpbiAlPjwvZGl2PjxkaXYgY2xhc3M9XCJ0aXRsZVwiPjwlPSB0aXRsZSAlPjwvZGl2PjxkaXYgY2xhc3M9XCJkZXNjXCI+PCU9IGRlc2NyaXB0aW9uICU+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgJC5lYWNoKGxpc3RzLCAoa2V5LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgbWV0YSA9IGl0ZW0ubWV0YWRhdGE7XG4gICAgICAgICAgICBtZXRhLmNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcbiAgICAgICAgICAgIG1ldGEuZG9tYWluID0gaXRlbS51cmwuc3BsaXQoJzovLycpWzFdLnNwbGl0KCcvJylbMF07XG4gICAgICAgICAgICBsaXN0SHRtbCArPSBwb3N0VGVtcGxhdGUobWV0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGFzdEtleSkge1xuICAgICAgICAgICAgJCgnLmxpc3RzJykuYXBwZW5kKGxpc3RIdG1sKTtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lm1pbnQgPSBsaXN0SHRtbDtcbiAgICAgICAgICAgICQoJy5saXN0cycpLmh0bWwobGlzdEh0bWwpO1xuICAgICAgICB9XG4gICAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/js/index.js\n");

/***/ })

/******/ });
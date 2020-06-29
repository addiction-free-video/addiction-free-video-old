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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/youtube.raw.css":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/youtube.raw.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".afv-settings-button {\\r\\n    width: 100%;\\r\\n    padding: 17px;\\r\\n    box-sizing: border-box;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.afv-start-page-content {\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n    display: block;\\r\\n    padding: 15px;\\r\\n    box-sizing: border-box;\\r\\n    text-decoration: underline;\\r\\n}\\r\\n\");\n\n//# sourceURL=webpack:///./src/youtube.raw.css?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/youtube.raw.js":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/youtube.raw.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"try {\\r\\n    ////////////////////\\r\\n    // Elements\\r\\n    //////////////////\\r\\n    var startTabButtonChild = document.querySelector('.pivot-w2w');\\r\\n    var startTabButton;\\r\\n    if (startTabButtonChild) {\\r\\n        startTabButton = startTabButtonChild.parentElement;\\r\\n    }\\r\\n    var youtubeLogo = document.querySelector('.mobile-topbar-header-endpoint');\\r\\n    var AFV_videoElement;\\r\\n\\r\\n    ////////////////////\\r\\n    // Variables\\r\\n    //////////////////\\r\\n    var currentYoutubeUrl = location.href;\\r\\n\\r\\n    ////////////////////\\r\\n    // Functions\\r\\n    //////////////////\\r\\n\\r\\n    if (typeof AFV_sendPostMessage === 'undefined') {\\r\\n        // Send post messages to cordova\\r\\n        function AFV_sendPostMessage(messageToSend) {\\r\\n            var message = { action: messageToSend };\\r\\n            if (!webkit.messageHandlers.cordova_iab) {\\r\\n                console.warn('Cordova IAB postMessage API not found!');\\r\\n                throw 'Cordova IAB postMessage API not found!';\\r\\n            } else {\\r\\n                webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message));\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    if (typeof AFV_videoChangeEvent === 'undefined') {\\r\\n        // Send message to cordova when video play/pauses for media controls\\r\\n        function AFV_videoChangeEvent(e) {\\r\\n            AFV_sendPostMessage(e.type);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    if (typeof AFV_doYoutubeManipulations === 'undefined') {\\r\\n        // Inset DOM Elements into Youtube and manipulate the player\\r\\n\\r\\n        function AFV_doYoutubeManipulations() {\\r\\n            // Make sure no one seraches for \\\"youtube\\\"\\r\\n            if (window.location.href.toLowerCase() === 'https://m.youtube.com/results?search_query=youtube') {\\r\\n                window.location.href = 'https://m.youtube.com/';\\r\\n            }\\r\\n\\r\\n            //Insert Setings Icon Button on settings page\\r\\n            var afvSettingsButton = document.querySelector('.afv-settings-button');\\r\\n            if (!afvSettingsButton) {\\r\\n                var youtubeSettingsButton = document.querySelector('ytm-settings ytm-setting-generic-category');\\r\\n                if (youtubeSettingsButton) {\\r\\n                    youtubeSettingsButton.insertAdjacentHTML(\\r\\n                        'beforebegin',\\r\\n                        '<a href=\\\"https://gotosettings.local\\\" class=\\\"afv-settings-button\\\"><svg enable-background=\\\"new 0 0 48 48\\\" height=\\\"24px\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 48 48\\\" width=\\\"24px\\\" xml:space=\\\"preserve\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\"><g id=\\\"Expanded\\\"><g><g><path d=\\\"M26,48h-4c-1.654,0-3-1.346-3-3v-3.724c-1.28-0.37-2.512-0.881-3.681-1.527l-2.634,2.635     c-1.134,1.134-3.109,1.132-4.243,0l-2.829-2.828c-0.567-0.566-0.879-1.32-0.879-2.121s0.312-1.555,0.879-2.121l2.635-2.636     c-0.645-1.166-1.156-2.398-1.525-3.679H3c-1.654,0-3-1.346-3-3v-4c0-0.802,0.312-1.555,0.878-2.121     c0.567-0.566,1.32-0.879,2.122-0.879h3.724c0.37-1.278,0.88-2.511,1.526-3.679l-2.634-2.635c-1.17-1.17-1.17-3.072,0-4.242     l2.828-2.829c1.133-1.132,3.109-1.134,4.243,0l2.635,2.635C16.49,7.604,17.722,7.093,19,6.724V3c0-1.654,1.346-3,3-3h4     c1.654,0,3,1.346,3,3v3.724c1.28,0.37,2.512,0.881,3.678,1.525l2.635-2.635c1.134-1.132,3.109-1.134,4.243,0l2.829,2.828     c0.567,0.566,0.879,1.32,0.879,2.121s-0.312,1.555-0.879,2.121l-2.634,2.635c0.646,1.168,1.157,2.4,1.526,3.68H45     c1.654,0,3,1.346,3,3v4c0,0.802-0.312,1.555-0.878,2.121s-1.32,0.879-2.122,0.879h-3.724c-0.37,1.28-0.881,2.513-1.526,3.68     l2.634,2.635c1.17,1.17,1.17,3.072,0,4.242l-2.828,2.829c-1.134,1.133-3.109,1.133-4.243,0L32.68,39.75     c-1.168,0.646-2.401,1.156-3.679,1.526V45C29,46.654,27.655,48,26,48z M15.157,37.498c0.179,0,0.36,0.048,0.521,0.146     c1.416,0.866,2.949,1.502,4.557,1.891C20.684,39.644,21,40.045,21,40.507V45c0,0.552,0.449,1,1,1h4c0.551,0,1-0.448,1-1v-4.493     c0-0.462,0.316-0.863,0.765-0.972c1.606-0.389,3.139-1.023,4.556-1.89c0.396-0.241,0.902-0.18,1.229,0.146l3.178,3.179     c0.375,0.374,1.039,0.376,1.415,0l2.828-2.829c0.39-0.39,0.39-1.024,0-1.414l-3.179-3.179c-0.327-0.326-0.387-0.835-0.146-1.229     c0.865-1.414,1.5-2.947,1.889-4.556c0.108-0.449,0.51-0.766,0.972-0.766H45c0.267,0,0.519-0.104,0.708-0.293     C45.896,26.518,46,26.267,46,25.999v-4c0-0.552-0.449-1-1-1h-4.493c-0.462,0-0.864-0.316-0.972-0.766     c-0.388-1.607-1.023-3.14-1.889-4.556c-0.241-0.394-0.181-0.901,0.146-1.229l3.179-3.179c0.186-0.187,0.293-0.444,0.293-0.707     s-0.107-0.521-0.293-0.707l-2.829-2.828c-0.378-0.377-1.037-0.377-1.415,0l-3.179,3.179c-0.326,0.328-0.833,0.389-1.229,0.146     c-1.413-0.864-2.945-1.5-4.554-1.889C27.317,8.356,27,7.955,27,7.493V3c0-0.552-0.449-1-1-1h-4c-0.551,0-1,0.448-1,1v4.493     c0,0.462-0.316,0.863-0.765,0.972c-1.606,0.388-3.139,1.023-4.556,1.889c-0.395,0.241-0.902,0.181-1.228-0.146l-3.179-3.179     c-0.378-0.377-1.037-0.377-1.415,0L7.03,9.857c-0.39,0.39-0.39,1.024,0,1.414l3.179,3.179c0.327,0.326,0.387,0.835,0.146,1.229     c-0.866,1.416-1.501,2.949-1.889,4.555c-0.108,0.449-0.51,0.766-0.972,0.766H3c-0.267,0-0.519,0.104-0.708,0.293     C2.104,21.48,2,21.731,2,21.999v4c0,0.552,0.449,1,1,1h4.493c0.462,0,0.864,0.316,0.972,0.766     c0.389,1.608,1.024,3.141,1.889,4.555c0.241,0.394,0.181,0.901-0.146,1.229l-3.179,3.18c-0.186,0.187-0.293,0.444-0.293,0.707     s0.107,0.521,0.293,0.707l2.829,2.828c0.377,0.377,1.037,0.377,1.415,0l3.178-3.179C14.643,37.598,14.898,37.498,15.157,37.498z\\\"/></g><g><path d=\\\"M24,34c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S29.515,34,24,34z M24,16c-4.411,0-8,3.589-8,8     s3.589,8,8,8s8-3.589,8-8S28.412,16,24,16z\\\"/></g></g></g></svg> Addiction Free Video Settings</a>'\\r\\n                    );\\r\\n                }\\r\\n            }\\r\\n\\r\\n            //Insert Start Page Custom Content (Donation Button)\\r\\n            var afvStartPageContent = document.querySelector('.afv-start-page-content');\\r\\n            if (!afvStartPageContent) {\\r\\n                var startPageContent = document.querySelector('div[tab-identifier=\\\"FEwhat_to_watch\\\"]');\\r\\n                if (startPageContent) {\\r\\n                    startPageContent.insertAdjacentHTML('beforebegin', '<a href=\\\"https://www.addiction-free-video.github.com/donate.html\\\" class=\\\"afv-start-page-content\\\">Support the creator by donating</a>');\\r\\n                }\\r\\n            }\\r\\n\\r\\n            //Disable Autoplay\\r\\n            var autoplayButton = document.querySelector('.ytm-autonav-toggle button');\\r\\n            if (autoplayButton && AFV_disableAutoplay) {\\r\\n                if (autoplayButton.getAttribute('aria-pressed') == 'true') {\\r\\n                    autoplayButton.click();\\r\\n                }\\r\\n            }\\r\\n\\r\\n            //Find Video Element and add event listners for media controls\\r\\n            newVideoElement = document.querySelector('video');\\r\\n            if (newVideoElement && AFV_videoElement !== newVideoElement) {\\r\\n                try {\\r\\n                    AFV_videoElement.removeEventListener('pause', AFV_videoChangeEvent);\\r\\n                    AFV_videoElement.removeEventListener('play', AFV_videoChangeEvent);\\r\\n                } catch (error) {\\r\\n                    //DoNothing\\r\\n                }\\r\\n\\r\\n                AFV_videoElement = newVideoElement;\\r\\n\\r\\n                AFV_videoElement.addEventListener('pause', AFV_videoChangeEvent);\\r\\n                AFV_videoElement.addEventListener('play', AFV_videoChangeEvent);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    if (typeof AFV_sheduleYoutubeManipulations === 'undefined') {\\r\\n        // Shedule Youtube Manipulations multiple times, so even on slower phones everything gets displayed\\r\\n        function AFV_sheduleYoutubeManipulations() {\\r\\n            AFV_doYoutubeManipulations();\\r\\n\\r\\n            setTimeout(() => {\\r\\n                AFV_doYoutubeManipulations();\\r\\n            }, 1000);\\r\\n\\r\\n            setTimeout(() => {\\r\\n                AFV_doYoutubeManipulations();\\r\\n            }, 3000);\\r\\n\\r\\n            setTimeout(() => {\\r\\n                AFV_doYoutubeManipulations();\\r\\n            }, 6000);\\r\\n\\r\\n            setTimeout(() => {\\r\\n                AFV_doYoutubeManipulations();\\r\\n            }, 10000);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    if (typeof AFV_onPageChanged === 'undefined') {\\r\\n        // Trigger Manipulations only when URL changes\\r\\n        function AFV_onPageChanged() {\\r\\n            if (currentYoutubeUrl !== location.href) {\\r\\n                AFV_sheduleYoutubeManipulations();\\r\\n            }\\r\\n            currentYoutubeUrl = location.href;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    if (typeof AFV_openYoutubeWindow === 'undefined') {\\r\\n        function AFV_openYoutubeWindow() {\\r\\n            // Tell cordova that javascript was laodad successfully and to show the inAppBrwoser (hidden by default)\\r\\n            AFV_sendPostMessage('open');\\r\\n        }\\r\\n    }\\r\\n\\r\\n    if (typeof AFV_toggleVideo === 'undefined') {\\r\\n        // Function that will be called later when user clicks on play/pause in media controls in notifications\\r\\n        function AFV_toggleVideo(methode) {\\r\\n            var videoElement = document.querySelector('video');\\r\\n            if (videoElement) {\\r\\n                switch (methode) {\\r\\n                    case 'play':\\r\\n                        videoElement.play();\\r\\n                        break;\\r\\n\\r\\n                    default:\\r\\n                        videoElement.pause();\\r\\n                        break;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    ////////////////////\\r\\n    // Event Listners\\r\\n    //////////////////\\r\\n    if (startTabButton) {\\r\\n        startTabButton.addEventListener('click', AFV_sheduleYoutubeManipulations);\\r\\n    }\\r\\n\\r\\n    if (youtubeLogo) {\\r\\n        youtubeLogo.addEventListener('click', AFV_sheduleYoutubeManipulations);\\r\\n    }\\r\\n\\r\\n    window.addEventListener('popstate', AFV_onPageChanged);\\r\\n\\r\\n    window.addEventListener('hashchange', AFV_onPageChanged);\\r\\n\\r\\n    document.body.addEventListener(\\r\\n        'click',\\r\\n        () => {\\r\\n            requestAnimationFrame(() => {\\r\\n                AFV_onPageChanged();\\r\\n            });\\r\\n        },\\r\\n        true\\r\\n    );\\r\\n\\r\\n    ////////////////////\\r\\n    // Initial Funciton Execution\\r\\n    //////////////////\\r\\n    AFV_sheduleYoutubeManipulations();\\r\\n    AFV_openYoutubeWindow();\\r\\n} catch (error) {\\r\\n    alert(error);\\r\\n    //do nothing\\r\\n}\\r\\n\");\n\n//# sourceURL=webpack:///./src/youtube.raw.js?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openYoutube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openYoutube */ \"./src/openYoutube.js\");\n/*\r\n * Licensed to the Apache Software Foundation (ASF) under one\r\n * or more contributor license agreements.  See the NOTICE file\r\n * distributed with this work for additional information\r\n * regarding copyright ownership.  The ASF licenses this file\r\n * to you under the Apache License, Version 2.0 (the\r\n * \"License\"); you may not use this file except in compliance\r\n * with the License.  You may obtain a copy of the License at\r\n *\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing,\r\n * software distributed under the License is distributed on an\r\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\n * KIND, either express or implied.  See the License for the\r\n * specific language governing permissions and limitations\r\n * under the License.\r\n */\n\nvar app = {\n  currentRef: undefined,\n  // Application Constructor\n  initialize: function initialize() {\n    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);\n    this.onYoutubeLinkOpended.bind(this);\n  },\n  // deviceready Event Handler\n  //\n  // Bind any cordova events here. Common events are:\n  // 'pause', 'resume', etc.\n  onDeviceReady: function onDeviceReady() {\n    this.receivedEvent('deviceready'); // Set inital settings values if no settings are stored yet\n\n    if (!window.localStorage.getItem('settings')) {\n      var settings = {\n        hideStartPage: true,\n        hideTrendingTab: true,\n        hideViedoRecommendations: true,\n        hideLikeCount: true,\n        hideViews: true,\n        hideCommentCount: true,\n        hideSubscriberCount: true,\n        saveCountdown: 30,\n        disableAutoplay: true\n      };\n      window.localStorage.setItem('settings', JSON.stringify(settings));\n    } // Open Youtube\n\n\n    this.currentRef = Object(_openYoutube__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Allow user to click on the laoding screen to open youtube if it doesn't automatically\n\n    var appElement = document.querySelector('.app');\n\n    if (appElement) {\n      appElement.addEventListener('click', function () {\n        this.currentRef = Object(_openYoutube__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      });\n    } // Init Universial Links\n\n\n    universalLinks.subscribe(null, this.onYoutubeLinkOpended);\n  },\n  onYoutubeLinkOpended: function onYoutubeLinkOpended(eventData) {\n    this.currentRef = Object(_openYoutube__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(eventData.url);\n  },\n  // Update DOM on a Received Event\n  receivedEvent: function receivedEvent(id) {\n    var parentElement = document.getElementById(id);\n    var listeningElement = parentElement.querySelector('.listening');\n    var receivedElement = parentElement.querySelector('.received');\n    listeningElement.setAttribute('style', 'display:none;');\n    receivedElement.setAttribute('style', 'display:block;');\n    console.log('Received Event: ' + id);\n  }\n};\napp.initialize();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/musicControls.js":
/*!******************************!*\
  !*** ./src/musicControls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  MusicControls.create({\n    track: 'Addiction Free Video',\n    // optional, default : ''\n    // hide previous/next/close buttons:\n    hasPrev: false,\n    // show previous button, optional, default: true\n    hasNext: false,\n    // show next button, optional, default: true\n    hasClose: true,\n    // show close button, optional, default: false\n    //All icons default to their built-in android equivalents\n    //The supplied drawable name, e.g. 'media_play', is the name of a drawable found under android/res/drawable* folders\n    playIcon: 'media_play',\n    pauseIcon: 'media_pause',\n    prevIcon: 'media_prev',\n    nextIcon: 'media_next',\n    closeIcon: 'media_close',\n    notificationIcon: 'notification'\n  });\n});\n\n//# sourceURL=webpack:///./src/musicControls.js?");

/***/ }),

/***/ "./src/openYoutube.js":
/*!****************************!*\
  !*** ./src/openYoutube.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raw_loader_youtube_raw_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./youtube.raw.css */ \"./node_modules/raw-loader/dist/cjs.js!./src/youtube.raw.css\");\n/* harmony import */ var _raw_loader_youtube_raw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./youtube.raw.js */ \"./node_modules/raw-loader/dist/cjs.js!./src/youtube.raw.js\");\n/* harmony import */ var _settingsCss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsCss */ \"./src/settingsCss.js\");\n/* harmony import */ var _settingsJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingsJS */ \"./src/settingsJS.js\");\n/* harmony import */ var _musicControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./musicControls */ \"./src/musicControls.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var urlToOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://m.youtube.com/?app=m';\n\n  try {\n    // Check if policy has been cofirmed, if not redirect to policy page\n    var confirmedPolicy = JSON.parse(window.localStorage.getItem('confirmedPolicy'));\n\n    if (!confirmedPolicy) {\n      window.location = 'policy.html';\n      return;\n    } // Open youtube or the requestet url\n\n\n    var ref = cordova.InAppBrowser.open(urlToOpen, '_blank', 'location=no,hidden=yes,beforeload=get,shouldPauseOnSuspend=no'); // Wait for Inappbrowser to be ready\n\n    ref.addEventListener('loadstop', function () {\n      ref.insertCSS({\n        code: _raw_loader_youtube_raw_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + Object(_settingsCss__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n      });\n      ref.executeScript({\n        code: Object(_settingsJS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])() + _raw_loader_youtube_raw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n      });\n    }); // Check url before navigating to different Page\n\n    var beforeloadCallBack = function beforeloadCallBack(params, callback) {\n      if (params.url.includes('youtube.com/') || params.url.includes('accounts.google.com/')) {\n        // If Url is Youtube or Login URL than continue in inappbrowser _blank\n        callback(params.url);\n      } else if (params.url.includes('https://gotosettings.local')) {\n        // If requested URL is settings Url close inappbrwoser and navigate to settings page\n        ref.close();\n        window.location = 'settings.html';\n      } else if (params.url.includes('https://gotodonation.local')) {\n        // If requested URL is donation Url close inappbrwoser and navigate to settings page with query string for donation section\n        ref.close();\n        window.location = 'settings.html?section=section-donate';\n      } else {\n        // If requested URL is non of above open URL in native system Browser\n        var systemRef = cordova.InAppBrowser.open(encodeURI(params.url), '_system'); // Add Event listner again because it gets removed when calling inAppBrowser\n\n        systemRef.addEventListener('beforeload', beforeloadCallBack);\n        systemRef.insertCSS({\n          code: _raw_loader_youtube_raw_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + Object(_settingsCss__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        });\n        systemRef.executeScript({\n          code: Object(_settingsJS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])() + _raw_loader_youtube_raw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        });\n      }\n    };\n\n    var messageCallBack = function messageCallBack(params) {\n      var message = params.data.action; // Recive messages from the InAppBrowser\n\n      switch (message) {\n        case 'open':\n          // Open after everything is loadad\n          ref.show();\n          break;\n\n        case 'play':\n          // Play event when video starts palying to control Music Controls\n          if (typeof MusicControls !== 'undefined') {\n            MusicControls.updateIsPlaying(true);\n          }\n\n          break;\n\n        case 'pause':\n          // Pause event when video pauses to control Music Controls\n          if (typeof MusicControls !== 'undefined') {\n            MusicControls.updateIsPlaying(false);\n          }\n\n          break;\n\n        default:\n          break;\n      }\n    }; ///////////////////////////\n    // Music Controls\n    /////////////////////////////\n\n\n    var userSettings = JSON.parse(window.localStorage.getItem('settings'));\n\n    if ((userSettings === null || userSettings === void 0 ? void 0 : userSettings.showMediaControls) === true) {\n      var musicControlsEvents = function musicControlsEvents(action) {\n        var message = JSON.parse(action).message;\n\n        switch (message) {\n          case 'music-controls-pause':\n            ref.executeScript({\n              code: \"\\n                            if(typeof AFV_toggleVideo === 'function'){\\n                                AFV_toggleVideo('pause');\\n                            }\\n                        \"\n            });\n            break;\n\n          case 'music-controls-play':\n            ref.executeScript({\n              code: \"\\n                            if(typeof AFV_toggleVideo === 'function'){\\n                                AFV_toggleVideo('play');\\n                            }\\n                        \"\n            });\n            break;\n\n          default:\n            break;\n        }\n      }; // Register callback\n\n\n      // Init Media Controls if User has enabled them\n      Object(_musicControls__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n      MusicControls.subscribe(musicControlsEvents); // Start listening for events\n      // The plugin will run the events function each time an event is fired\n\n      MusicControls.listen();\n    } ///////////////////////////\n    // Event Listners\n    //////////////////////////\n\n\n    ref.addEventListener('message', messageCallBack);\n    ref.addEventListener('beforeload', beforeloadCallBack);\n    return ref;\n  } catch (error) {\n    alert(error);\n  }\n});\n\n//# sourceURL=webpack:///./src/openYoutube.js?");

/***/ }),

/***/ "./src/settingsCss.js":
/*!****************************!*\
  !*** ./src/settingsCss.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var settings = JSON.parse(window.localStorage.getItem('settings'));\n  var css = '';\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideStartPage) {\n    css += \"\\n            div[tab-identifier='FEwhat_to_watch'] {\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideTrendingTab) {\n    css += \"\\n            ytm-pivot-bar-renderer[role=\\\"tablist\\\"] ytm-pivot-bar-item-renderer:nth-child(2){\\n                display: none;\\n            }\\n        \\n            div[tab-identifier=\\\"FEtrending\\\"] {\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideViedoRecommendations) {\n    css += \"\\n            ytm-item-section-renderer[data-content-type='related'] {\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideLikeButtons) {\n    css += \"\\n            .slim-video-metadata-actions c3-material-button:nth-child(1),\\n            .slim-video-metadata-actions c3-material-button:nth-child(2){\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideLikeCount) {\n    css += \"\\n            .slim-video-metadata-actions c3-material-button:nth-child(1) div.button-renderer-text,\\n            .slim-video-metadata-actions c3-material-button:nth-child(2) div.button-renderer-text {\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideViews) {\n    css += \"\\n            .slim-video-metadata-title-and-badges div {\\n                display: none;\\n            }\\n\\n            ytm-compact-video-renderer a.compact-media-item-metadata-content div.subhead div:nth-last-child(2){\\n                display: none;\\n            }\\n\\n            ytm-video-with-context-renderer div.details ytm-badge-and-byline-renderer span.ytm-badge-and-byline-item-byline.small-text:nth-child(3),\\n            ytm-video-with-context-renderer div.details ytm-badge-and-byline-renderer span.ytm-badge-and-byline-separator:nth-child(2)\\n            {\\n                display: none;\\n            }\\n\\n            ytm-channel-about-metadata-renderer div p:nth-child(3){\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideComments) {\n    css += \"\\n            ytm-comment-section-renderer {\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideCommentCount) {\n    css += \"\\n            ytm-comment-section-renderer .comment-section-header-text {\\n                color: white;\\n                margin-bottom: -15px;\\n            }\\n\\n            ytm-comment-section-renderer .comment-section-header-text strong::before {\\n                content: \\\"Comments\\\";\\n                display: block;\\n                position: relative;\\n                color: black;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideSubscriberCount) {\n    css += \"\\n            .slim-owner-bylines div.subhead {\\n                display: none;\\n            }\\n\\n            .c4-tabbed-header-subscibe.cbox span.c4-tabbed-header-subscriber-count.secondary-text {\\n                display: none;\\n            }\\n\\n            ytm-compact-channel-renderer a.compact-media-item-metadata-content div.subhead div:nth-child(2){\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.hideSubscriptionFeed) {\n    css += \"\\n            div[tab-identifier=\\\"FEsubscriptions\\\"] {\\n                display: none;\\n            }\\n\\n            div.pivot-bar-item-tab.pivot-subs {\\n                display: none;\\n            }\\n        \";\n  }\n\n  if (settings === null || settings === void 0 ? void 0 : settings.customCSS) {\n    css += settings === null || settings === void 0 ? void 0 : settings.customCSS;\n  } //Css Without Condition\n\n\n  css += \"\\n    \";\n  return css;\n});\n\n//# sourceURL=webpack:///./src/settingsCss.js?");

/***/ }),

/***/ "./src/settingsJS.js":
/*!***************************!*\
  !*** ./src/settingsJS.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var settings = JSON.parse(window.localStorage.getItem('settings'));\n  var js = '';\n\n  if (settings === null || settings === void 0 ? void 0 : settings.customJS) {\n    js += ' ' + (settings === null || settings === void 0 ? void 0 : settings.customJS);\n  } //Disable Autoplay\n\n\n  if (settings === null || settings === void 0 ? void 0 : settings.disableAutoplay) {\n    js += ' var AFV_disableAutoplay = true;';\n  } //js Without Condition\n\n\n  js += \"\\n    \";\n  return js;\n});\n\n//# sourceURL=webpack:///./src/settingsJS.js?");

/***/ })

/******/ });
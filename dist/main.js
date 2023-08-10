/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CoolveticaRg-Regular.woff2 */ "./src/fonts/CoolveticaRg-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CoolveticaRg-Regular.woff */ "./src/fonts/CoolveticaRg-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Coolvetica Rg';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


:root {
    width: 100vw;
    height: 100vh;
    --light-color: #f2f2f2;
    --orange-color: #f96d00;
    --gray-color: #393e46;
    --dark-color: #222831;
    background-color: var(--gray-color);
    margin: 0;
    overflow-x: hidden;
}

* {
    padding: 0;
    margin: 0;
}

#content {
    display: grid;
    grid-template-rows: 130px auto 30px;
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
}

.burger-image {
    height: 150px;
    border-radius: 10px;
}

.home-heading-text {
    font-family: "Coolvetica Rg", sans-serif;
    letter-spacing: 4px;
    font-size: 4rem;
    color: var(--light-color);
    margin: 0;
}

.heading {
    background-color: var(--orange-color);
    display: flex;
    width: 100vw;
    height: 110px;
    justify-content: space-evenly;
    flex-direction: row;
    position: sticky;
    padding: 20px;
    align-items: center;
    box-shadow: 0px 0px 7px var(--dark-color);
}

.heading button {
    width: min(14vw,180px);
    height: 80px;
    appearance: none;
    font-family: "Coolvetica Rg", sans-serif;
    background-color: var(--orange-color);
    color: var(--light-color);
    border: none;
    border-radius: 10px;
    font-size: min(2.5vw,1.5rem);
}

.heading button:hover {
    background-color: var(--dark-color);
    cursor: pointer;
    color: var(--orange-color);
}

.heading-center-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0;
    padding: 10px;
    border-radius: 10px;
    max-width: 500px;
}

.home-heading-subtext {
    font-size: 1.5rem;
    margin: 0;
    font-family: "Coolvetica Rg";
    color: var(--light-color);
    text-align: center;
    width: 400px;
}

.main-body-container {
    padding: 40px;
    gap: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    width: 100vw;
    overflow-x: hidden;
}

.burger-hero-container {
    width: max(300px, min(70vw,700px));
    background: var(--orange-color);
    display: flex;
    padding: 15px;
    border-radius: 10px;
    gap: 10px;
    align-items: center;
}

.burger-hero-text {
    font-size: max(0.7rem, min(3vw, 2rem));
    font-family: "Coolvetica Rg", sans-serif;
    color: var(--light-color);
}

.address-section {
    width: max(300px, min(70vw,700px));
    background: var(--orange-color);
    display: flex;
    padding: 15px;
    padding-bottom: 20px;
    border-radius: 10px;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.address-section h2 {
    font-family: "Coolvetica Rg";
    letter-spacing: 1px;
    font-size: max(0.7rem, min(4vw, 2.5rem));
    color: var(--light-color);
}

.address-section div{
    font-family: "Coolvetica Rg";
    text-align: center;
    font-size: min(3vw, 1.5rem);
    color: var(--light-color);
}

.hours-section {
    width: max(300px, min(70vw,700px));
    background: var(--orange-color);
    display: flex;
    padding: 15px;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 300px;
}

.hours-section h2{
    font-family: "Coolvetica Rg";
    letter-spacing: 1px;
    margin: 0;
    font-size: max(0.7rem, min(4vw, 2rem));
    color: var(--light-color);
}

.hours-section h3 {
    font-family: "Coolvetica Rg";
    letter-spacing: 1px;
    margin: 0;
    font-size: max(0.6rem, min(3.5vw, 1.7rem));
    color: var(--light-color);
}

.hours-section div {
    margin: 0;
    font-family: "Coolvetica Rg";
    letter-spacing: 1px;
    font-size: max(0.7rem, min(12vw, 6rem));
    color: var(--light-color);
}

.heading-center-text:hover {
    background-color: var(--dark-color);
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
}

.menu-item img{
    width: 250px;
    border-radius: 10px;
}

.menu-item {
    display: flex;
    width: 500px;
    background-color: var(--orange-color);
    padding: 15px;
    border-radius: 10px;
    justify-content: space-around;
    gap: 15px;
    height: 207px;
}

.item-description-container {
    font-family: "Coolvetica Rg", sans-serif;
    color: var(--light-color);
}

.item-description-container h3 {
    font-size: 1.5rem;
}

.item-description-container div>em {
    font-size: 0.8rem;
    margin-top: 20px;
    display: block;
}

.menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    width: 100vw;
    gap: 20px;
    justify-items: center;
}

.menu-disclaimer {
    text-align: center;
    color: var(--light-color);
}

.copyright-footer {
    background-color: var(--orange-color);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.copyright-text {
    font-family: "Coolvetica Rg", sans-serif;
    color: var(--dark-color);
    text-decoration: none;
}

.copyright-footer a img {
    height: 25px;
}

.copyright-footer a {
    display: flex;
    align-items: center;
    justify-content: center;
}


@media (max-width: 600px) {
    .heading button {
        display: none;
    }
    .home-heading-text {
        font-size: 2rem;
    }
    .home-heading-subtext {
        font-size: 1rem;
    }
    .heading {
        height: 60px;
    }
    #content {
        grid-template-rows: 80px auto;
    }
    .menu-container {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .menu-item {
        width: 300px;
        height: 140px;
        padding: 7px;
        border-radius: 5px;
        gap: 8px;
    }
    .item-description-container h3 {
        font-size: 1.2rem;
    }
    .item-description-container div {
        font-size: 1rem;
    }
    .item-description-container div>em {
        font-size: 0.5rem;
        margin-top: 5px;
    }
    .menu-item img{
        width: 125px;
        border-radius: 10px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Coolvetica Rg';\n    src: url('./fonts/CoolveticaRg-Regular.woff2') format('woff2'),\n        url('./fonts/CoolveticaRg-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n\n:root {\n    width: 100vw;\n    height: 100vh;\n    --light-color: #f2f2f2;\n    --orange-color: #f96d00;\n    --gray-color: #393e46;\n    --dark-color: #222831;\n    background-color: var(--gray-color);\n    margin: 0;\n    overflow-x: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 130px auto 30px;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    justify-items: center;\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n.burger-image {\n    height: 150px;\n    border-radius: 10px;\n}\n\n.home-heading-text {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    letter-spacing: 4px;\n    font-size: 4rem;\n    color: var(--light-color);\n    margin: 0;\n}\n\n.heading {\n    background-color: var(--orange-color);\n    display: flex;\n    width: 100vw;\n    height: 110px;\n    justify-content: space-evenly;\n    flex-direction: row;\n    position: sticky;\n    padding: 20px;\n    align-items: center;\n    box-shadow: 0px 0px 7px var(--dark-color);\n}\n\n.heading button {\n    width: min(14vw,180px);\n    height: 80px;\n    appearance: none;\n    font-family: \"Coolvetica Rg\", sans-serif;\n    background-color: var(--orange-color);\n    color: var(--light-color);\n    border: none;\n    border-radius: 10px;\n    font-size: min(2.5vw,1.5rem);\n}\n\n.heading button:hover {\n    background-color: var(--dark-color);\n    cursor: pointer;\n    color: var(--orange-color);\n}\n\n.heading-center-text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex: 0;\n    padding: 10px;\n    border-radius: 10px;\n    max-width: 500px;\n}\n\n.home-heading-subtext {\n    font-size: 1.5rem;\n    margin: 0;\n    font-family: \"Coolvetica Rg\";\n    color: var(--light-color);\n    text-align: center;\n    width: 400px;\n}\n\n.main-body-container {\n    padding: 40px;\n    gap: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\n.burger-hero-container {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n}\n\n.burger-hero-text {\n    font-size: max(0.7rem, min(3vw, 2rem));\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n}\n\n.address-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    padding-bottom: 20px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.address-section h2 {\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(4vw, 2.5rem));\n    color: var(--light-color);\n}\n\n.address-section div{\n    font-family: \"Coolvetica Rg\";\n    text-align: center;\n    font-size: min(3vw, 1.5rem);\n    color: var(--light-color);\n}\n\n.hours-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 300px;\n}\n\n.hours-section h2{\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.7rem, min(4vw, 2rem));\n    color: var(--light-color);\n}\n\n.hours-section h3 {\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.6rem, min(3.5vw, 1.7rem));\n    color: var(--light-color);\n}\n\n.hours-section div {\n    margin: 0;\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(12vw, 6rem));\n    color: var(--light-color);\n}\n\n.heading-center-text:hover {\n    background-color: var(--dark-color);\n    border-radius: 20px;\n    padding: 10px;\n    cursor: pointer;\n}\n\n.menu-item img{\n    width: 250px;\n    border-radius: 10px;\n}\n\n.menu-item {\n    display: flex;\n    width: 500px;\n    background-color: var(--orange-color);\n    padding: 15px;\n    border-radius: 10px;\n    justify-content: space-around;\n    gap: 15px;\n    height: 207px;\n}\n\n.item-description-container {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n}\n\n.item-description-container h3 {\n    font-size: 1.5rem;\n}\n\n.item-description-container div>em {\n    font-size: 0.8rem;\n    margin-top: 20px;\n    display: block;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    width: 100vw;\n    gap: 20px;\n    justify-items: center;\n}\n\n.menu-disclaimer {\n    text-align: center;\n    color: var(--light-color);\n}\n\n.copyright-footer {\n    background-color: var(--orange-color);\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.copyright-text {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--dark-color);\n    text-decoration: none;\n}\n\n.copyright-footer a img {\n    height: 25px;\n}\n\n.copyright-footer a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n@media (max-width: 600px) {\n    .heading button {\n        display: none;\n    }\n    .home-heading-text {\n        font-size: 2rem;\n    }\n    .home-heading-subtext {\n        font-size: 1rem;\n    }\n    .heading {\n        height: 60px;\n    }\n    #content {\n        grid-template-rows: 80px auto;\n    }\n    .menu-container {\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n    .menu-item {\n        width: 300px;\n        height: 140px;\n        padding: 7px;\n        border-radius: 5px;\n        gap: 8px;\n    }\n    .item-description-container h3 {\n        font-size: 1.2rem;\n    }\n    .item-description-container div {\n        font-size: 1rem;\n    }\n    .item-description-container div>em {\n        font-size: 0.5rem;\n        margin-top: 5px;\n    }\n    .menu-item img{\n        width: 125px;\n        border-radius: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _images_burger_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/burger-image.jpg */ "./src/images/burger-image.jpg");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");



function createHomePage() {
    //Create burger hero (1st hero)
    const burgerHero = document.createElement("div");
    burgerHero.classList.add("burger-hero-container");
    const burgerHeroText = document.createElement("div");
    burgerHeroText.classList.add("burger-hero-text");
    burgerHeroText.textContent = "We have the worlds number one bussiest buss, and we can prove it.";

    //Add burger image to hero
    const homeBurgerImage = new Image();
    homeBurgerImage.src = _images_burger_image_jpg__WEBPACK_IMPORTED_MODULE_0__;
    homeBurgerImage.classList.add("burger-image");
    _page__WEBPACK_IMPORTED_MODULE_1__["default"].mainBody.appendChild(burgerHero);
    burgerHero.appendChild(homeBurgerImage);
    burgerHero.appendChild(burgerHeroText);

    //Create address section
    const addressSection = document.createElement("div");
    _page__WEBPACK_IMPORTED_MODULE_1__["default"].mainBody.appendChild(addressSection);

    const addressHeader = document.createElement("h2");
    addressSection.appendChild(addressHeader);
    addressHeader.textContent = "Come visit us!"

    const addressText = document.createElement("div");
    addressSection.appendChild(addressText);
    addressText.innerHTML = "945 Oakmont Street<br>Los Angeles, CA<br>90009";

    addressSection.classList.add("address-section");

    //Create hours section
    const hoursSection = document.createElement("div");
    _page__WEBPACK_IMPORTED_MODULE_1__["default"].mainBody.appendChild(hoursSection);
    hoursSection.classList.add("hours-section");

    const hoursHeading = document.createElement("h2");
    const hoursText = document.createElement("div");
    const hoursFooter = document.createElement("h3");

    hoursHeading.textContent = "We are open";
    hoursText.textContent = "24/7/365";
    hoursFooter.textContent = "Because you just couldn't get enough.";

    hoursSection.appendChild(hoursHeading);
    hoursSection.appendChild(hoursText);
    hoursSection.appendChild(hoursFooter);
}



/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _images_burger_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/burger-image.jpg */ "./src/images/burger-image.jpg");
/* harmony import */ var _images_lauranger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/lauranger.jpg */ "./src/images/lauranger.jpg");
/* harmony import */ var _images_mushroom_delight_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/mushroom-delight.jpg */ "./src/images/mushroom-delight.jpg");
/* harmony import */ var _images_chicken_burger_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/chicken-burger.jpg */ "./src/images/chicken-burger.jpg");
/* harmony import */ var _images_slide_into_yo_dm_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/slide-into-yo-dm.jpg */ "./src/images/slide-into-yo-dm.jpg");
/* harmony import */ var _images_mega_egg_burger_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/mega-egg-burger.jpg */ "./src/images/mega-egg-burger.jpg");
/* harmony import */ var _images_amburger_fries_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/amburger-fries.jpg */ "./src/images/amburger-fries.jpg");
/* harmony import */ var _images_house_tenders_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/house-tenders.jpg */ "./src/images/house-tenders.jpg");
/* harmony import */ var _images_soda_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/soda.jpg */ "./src/images/soda.jpg");












function createMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.appendChild(menuContainer);

    const bussyBurger = new MenuItem(_images_burger_image_jpg__WEBPACK_IMPORTED_MODULE_1__, "Bussy Burger", "$15.65", 
    "The bussiest buss you'll ever see. Our award winner.",
    "Classic double smashburger with cheddar cheese, tomatoes, chilies, bacon, and our award winning house sauce.");
    createNewMenuElement(bussyBurger);
    
    const lauranger = new MenuItem(_images_lauranger_jpg__WEBPACK_IMPORTED_MODULE_2__, 
        "The Lauranger",
        "$14.35",
        "Your new favorite kind of cheeseburger. The sexiest you can get.",
        "Single cheeseburger with double cheese, lettuce, tomato, and our award winning house sauce all on a tasty brioche bun")
    createNewMenuElement(lauranger);

    const mushroomDelight = new MenuItem(_images_mushroom_delight_jpg__WEBPACK_IMPORTED_MODULE_3__,
        "Mushroom Delight",
        "$16.55",
        "I hope theres mush-room in your mouth for me.",
        "Single cheeseburger with cheese sauce, roasted chilis, lettuce, and of course, mushrooms.")
    createNewMenuElement(mushroomDelight);

    const chickenBurger = new MenuItem(_images_chicken_burger_jpg__WEBPACK_IMPORTED_MODULE_4__,
        "Chicken Burger",
        "$15.65",
        "Don't I sound great?",
        "Fried chicken breast topped with jalapenos, lettuce, tomato, cucumber, cheese, and our award winning house sauce.")
    createNewMenuElement(chickenBurger);

    const slideIntoYoSliders = new MenuItem(_images_slide_into_yo_dm_jpg__WEBPACK_IMPORTED_MODULE_5__,
        "Slide Into Yo DM Sliders",
        "$12.45",
        "Heyyyy ;)",
        "Two beautiful mini burgers with guacamole, lettuce, radish, and our award winning house sauce.")
    createNewMenuElement(slideIntoYoSliders);

    const megaEggBurger = new MenuItem(_images_mega_egg_burger_jpg__WEBPACK_IMPORTED_MODULE_6__,
        "Mega Egg Burger",
        "$18.20",
        "Don't we all love eggs?",
        "Burger topped with cheese, bacon, over-easy egg (Chef's favorite), lettuce, tomato, and our award winning house sauce.")
    createNewMenuElement(megaEggBurger);

    const houseTenders = new MenuItem(_images_house_tenders_jpg__WEBPACK_IMPORTED_MODULE_8__,
        "House Tenders",
        "$9.25",
        "For the kids, or adults who never grew up.",
        "Five piece chicken tender, served with AMBURGER fries.")
    createNewMenuElement(houseTenders);

    const amburgerFries = new MenuItem(_images_amburger_fries_jpg__WEBPACK_IMPORTED_MODULE_7__,
        "AMBURGER Fries",
        "$5.25",
        "I'm necessary.",
        "House fries served with himalayan ketchup and fry sauce. Truffle or garlic options free of charge.")
    createNewMenuElement(amburgerFries);

    const soda = new MenuItem(_images_soda_jpg__WEBPACK_IMPORTED_MODULE_9__,
        "Soda",
        "$3.25",
        "We know you want some.",
        "We only serve Coke or Diet Coke, if you wanted something else get water.")
    createNewMenuElement(soda);

    const disclaimer = document.createElement("div");
    disclaimer.innerHTML = "<em>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.<br>If you have a food allergy, please notify your server.</em>";
    disclaimer.classList.add("menu-disclaimer");
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.appendChild(disclaimer);
}

function MenuItem (image, title, price, description, ingredients) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.description = description;
    this.ingredients = ingredients;
}

function createNewMenuElement(menuItem) {
    const menuItemsContainer  = document.querySelector(".menu-container");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("menu-item");
    menuItemsContainer.appendChild(itemContainer);
    const burgerImage = new Image();
    burgerImage.src = menuItem.image;
    itemContainer.appendChild(burgerImage);
    const itemTextContainer = document.createElement("div");
    itemTextContainer.classList.add("item-description-container");
    itemContainer.appendChild(itemTextContainer);
    const itemHeading = document.createElement("h3");
    const itemDescription = document.createElement("div");
    itemHeading.textContent = `${menuItem.title} (${menuItem.price})`;
    itemTextContainer.appendChild(itemHeading);
    itemDescription.innerHTML = `${menuItem.description}<br><em>${menuItem.ingredients}</em>`;
    itemTextContainer.appendChild(itemDescription);
}



/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github.png */ "./src/images/github.png");


const webPage = () => {
    const contentContainer = document.getElementById("content");
    const items = [];

    //Create heading section
    const heading = document.createElement("div");
    heading.classList.add("heading");
    items.push(heading);

    //Create heading text
    const headingSection = document.createElement("div");
    heading.appendChild(headingSection);
    const homeHeading = document.createElement("h1");
    homeHeading.textContent = "AMBURGERS";
    homeHeading.classList.add("home-heading-text");
    headingSection.appendChild(homeHeading);
    headingSection.classList.add("heading-center-text");

    const homeHeadingSubText = document.createElement("h2");
    homeHeadingSubText.textContent = "You like the burgers, we just make them.";
    homeHeadingSubText.classList.add("home-heading-subtext");
    headingSection.appendChild(homeHeadingSubText);

    //Create heading buttons
    const menuButton = document.createElement("button");
    heading.appendChild(menuButton);
    menuButton.textContent = "MENU";
    headingSection.before(menuButton);
    menuButton.classList.add("menu-button");

    const contactButton = document.createElement("button");
    heading.appendChild(contactButton);
    contactButton.textContent = "CONTACT US";
    contactButton.classList.add("contact-button");

    //Create body section
    const mainBody = document.createElement("div");
    mainBody.classList.add("main-body-container");
    items.push(mainBody);

    //Create footer section
    const footer = document.createElement("div");
    footer.classList.add("copyright-footer");
    const redirect = document.createElement("a");
    redirect.setAttribute("href", "https://github.com/lucas-amberg");
    redirect.setAttribute("target", "_blank");
    const githubImage = new Image();
    githubImage.src = _images_github_png__WEBPACK_IMPORTED_MODULE_0__;
    footer.appendChild(redirect);
    redirect.appendChild(githubImage);
    const copyrightText = document.createElement("a");
    copyrightText.setAttribute("href", "https://github.com/lucas-amberg");
    copyrightText.setAttribute("target", "_blank");
    copyrightText.textContent = "© Lucas Amberg 2023";
    copyrightText.classList.add("copyright-text");
    footer.appendChild(copyrightText);
    items.push(footer);

    for (let i = 0; i < items.length; i++) {
        contentContainer.appendChild(items[i]);
    }
    return {
        contentContainer,
        heading,
        mainBody,
        contactButton,
        menuButton,
        headingSection
    };
};

const page = webPage();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);

/***/ }),

/***/ "./src/fonts/CoolveticaRg-Regular.woff":
/*!*********************************************!*\
  !*** ./src/fonts/CoolveticaRg-Regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2d3c94ff83f47202d7b.woff";

/***/ }),

/***/ "./src/fonts/CoolveticaRg-Regular.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/CoolveticaRg-Regular.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25ab6b3031cd39649525.woff2";

/***/ }),

/***/ "./src/images/amburger-fries.jpg":
/*!***************************************!*\
  !*** ./src/images/amburger-fries.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30e8e1b355c5e9025240.jpg";

/***/ }),

/***/ "./src/images/burger-image.jpg":
/*!*************************************!*\
  !*** ./src/images/burger-image.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f63dacb67f490f358641.jpg";

/***/ }),

/***/ "./src/images/chicken-burger.jpg":
/*!***************************************!*\
  !*** ./src/images/chicken-burger.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c49a0aa91211e8b91a3.jpg";

/***/ }),

/***/ "./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "feea7951c91120bd69b3.png";

/***/ }),

/***/ "./src/images/house-tenders.jpg":
/*!**************************************!*\
  !*** ./src/images/house-tenders.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f8c712f1798e4d49086.jpg";

/***/ }),

/***/ "./src/images/lauranger.jpg":
/*!**********************************!*\
  !*** ./src/images/lauranger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "876d8047b3bf424ce15a.jpg";

/***/ }),

/***/ "./src/images/mega-egg-burger.jpg":
/*!****************************************!*\
  !*** ./src/images/mega-egg-burger.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b3d6d5cfe781f542c78.jpg";

/***/ }),

/***/ "./src/images/mushroom-delight.jpg":
/*!*****************************************!*\
  !*** ./src/images/mushroom-delight.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91570d7de4cc979bcd41.jpg";

/***/ }),

/***/ "./src/images/slide-into-yo-dm.jpg":
/*!*****************************************!*\
  !*** ./src/images/slide-into-yo-dm.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d35262a4b521ee4476a.jpg";

/***/ }),

/***/ "./src/images/soda.jpg":
/*!*****************************!*\
  !*** ./src/images/soda.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28a60217258aac90b5d5.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





let homePage = false;
let menuPage = true;
let contactPage = false;

//createHomePage();

(0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();

_page__WEBPACK_IMPORTED_MODULE_0__["default"].menuButton.addEventListener("click", ()=> {
    if (menuPage !== true) {
        if (homePage === true) {
            homePage = false;
            menuPage = true;
            _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.innerHTML = "";
            (0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();
        }
        else if (contactPage === true) {
            contactPage = false;
            menuPage = true;
            _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.innerHTML = "";
            (0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();
        }
    }
    else {
        return;
    }
})

_page__WEBPACK_IMPORTED_MODULE_0__["default"].headingSection.addEventListener("click", ()=> {
    if (homePage !== true) {
        if (menuPage === true) {
            menuPage = false;
            homePage = true;
            _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.innerHTML = "";
            (0,_home_page__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
        }
        else if (contactPage === true) {
            contactPage = false;
            homePage = true;
            _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.innerHTML = "";
            (0,_home_page__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
        }
    }
    else {
        return;
    }
})

_page__WEBPACK_IMPORTED_MODULE_0__["default"].contactButton.addEventListener("click", ()=> {
    if (contactPage !== true) {
        if (homePage === true) {
            homePage = false;
            contactPage = true;
            _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.innerHTML = "";
            //createContactPage();
        }
        else if (menuPage === true) {
            menuPage = false;
            contactPage = true;
            _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.innerHTML = "";
            //createContactPage();
        }
    }
    else {
        return;
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUFxRDtBQUNqRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcs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Y2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ29vbHZldGljYVJnLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0Nvb2x2ZXRpY2FSZy1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EgUmcnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG46cm9vdCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLS1saWdodC1jb2xvcjogI2YyZjJmMjtcbiAgICAtLW9yYW5nZS1jb2xvcjogI2Y5NmQwMDtcbiAgICAtLWdyYXktY29sb3I6ICMzOTNlNDY7XG4gICAgLS1kYXJrLWNvbG9yOiAjMjIyODMxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gMzBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmJ1cmdlci1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaG9tZS1oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmhlYWRpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHZhcigtLWRhcmstY29sb3IpO1xufVxuXG4uaGVhZGluZyBidXR0b24ge1xuICAgIHdpZHRoOiBtaW4oMTR2dywxODBweCk7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IG1pbigyLjV2dywxLjVyZW0pO1xufVxuXG4uaGVhZGluZyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbn1cblxuLmhlYWRpbmctY2VudGVyLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5ob21lLWhlYWRpbmctc3VidGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5tYWluLWJvZHktY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGdhcDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmJ1cmdlci1oZXJvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnVyZ2VyLWhlcm8tdGV4dCB7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oM3Z3LCAycmVtKSk7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5hZGRyZXNzLXNlY3Rpb24ge1xuICAgIHdpZHRoOiBtYXgoMzAwcHgsIG1pbig3MHZ3LDcwMHB4KSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkcmVzcy1zZWN0aW9uIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbig0dncsIDIuNXJlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5hZGRyZXNzLXNlY3Rpb24gZGl2e1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBtaW4oM3Z3LCAxLjVyZW0pO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5ob3Vycy1zZWN0aW9uIHtcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaG91cnMtc2VjdGlvbiBoMntcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oNHZ3LCAycmVtKSk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbn1cblxuLmhvdXJzLXNlY3Rpb24gaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IG1heCgwLjZyZW0sIG1pbigzLjV2dywgMS43cmVtKSk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbn1cblxuLmhvdXJzLXNlY3Rpb24gZGl2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oMTJ2dywgNnJlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5oZWFkaW5nLWNlbnRlci10ZXh0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1pdGVtIGltZ3tcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGhlaWdodDogMjA3cHg7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXY+ZW0ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtZGlzY2xhaW1lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5jb3B5cmlnaHQtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5jb3B5cmlnaHQtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb3B5cmlnaHQtZm9vdGVyIGEgaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jb3B5cmlnaHQtZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaGVhZGluZyBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaG9tZS1oZWFkaW5nLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5ob21lLWhlYWRpbmctc3VidGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmhlYWRpbmcge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICAgICNjb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XG4gICAgfVxuICAgIC5tZW51LWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIH1cbiAgICAubWVudS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2PmVtIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgLm1lbnUtaXRlbSBpbWd7XG4gICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCOzhEQUMyRDtJQUMzRCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMs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QUEyRDtJQUMvRDtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7SUFDWjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EgUmcnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Db29sdmV0aWNhUmctUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnLi9mb250cy9Db29sdmV0aWNhUmctUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5cXG46cm9vdCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLS1saWdodC1jb2xvcjogI2YyZjJmMjtcXG4gICAgLS1vcmFuZ2UtY29sb3I6ICNmOTZkMDA7XFxuICAgIC0tZ3JheS1jb2xvcjogIzM5M2U0NjtcXG4gICAgLS1kYXJrLWNvbG9yOiAjMjIyODMxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCBhdXRvIDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uYnVyZ2VyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhvbWUtaGVhZGluZy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDExMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggdmFyKC0tZGFyay1jb2xvcik7XFxufVxcblxcbi5oZWFkaW5nIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBtaW4oMTR2dywxODBweCk7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IG1pbigyLjV2dywxLjVyZW0pO1xcbn1cXG5cXG4uaGVhZGluZyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRpbmctY2VudGVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmhvbWUtaGVhZGluZy1zdWJ0ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5tYWluLWJvZHktY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uYnVyZ2VyLWhlcm8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnVyZ2VyLWhlcm8tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDN2dywgMnJlbSkpO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uYWRkcmVzcy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGRyZXNzLXNlY3Rpb24gaDIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbig0dncsIDIuNXJlbSkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uYWRkcmVzcy1zZWN0aW9uIGRpdntcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IG1pbigzdncsIDEuNXJlbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24gaDJ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oNHZ3LCAycmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIGgzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IG1heCgwLjZyZW0sIG1pbigzLjV2dywgMS43cmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIGRpdiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oMTJ2dywgNnJlbSkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uaGVhZGluZy1jZW50ZXItdGV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1ne1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogMjA3cHg7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2PmVtIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtZGlzY2xhaW1lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmNvcHlyaWdodC1mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNvcHlyaWdodC10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb3B5cmlnaHQtZm9vdGVyIGEgaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY29weXJpZ2h0LWZvb3RlciBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuaGVhZGluZyBidXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuaG9tZS1oZWFkaW5nLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIC5ob21lLWhlYWRpbmctc3VidGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgLmhlYWRpbmcge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB9XFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xcbiAgICB9XFxuICAgIC5tZW51LWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgfVxcbiAgICAubWVudS1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMTQwcHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBnYXA6IDhweDtcXG4gICAgfVxcbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGRpdj5lbSB7XFxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgfVxcbiAgICAubWVudS1pdGVtIGltZ3tcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVyZ2VySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2J1cmdlci1pbWFnZS5qcGdcIlxuaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgICAvL0NyZWF0ZSBidXJnZXIgaGVybyAoMXN0IGhlcm8pXG4gICAgY29uc3QgYnVyZ2VySGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnVyZ2VySGVyby5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWhlcm8tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJ1cmdlckhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJnZXJIZXJvVGV4dC5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWhlcm8tdGV4dFwiKTtcbiAgICBidXJnZXJIZXJvVGV4dC50ZXh0Q29udGVudCA9IFwiV2UgaGF2ZSB0aGUgd29ybGRzIG51bWJlciBvbmUgYnVzc2llc3QgYnVzcywgYW5kIHdlIGNhbiBwcm92ZSBpdC5cIjtcblxuICAgIC8vQWRkIGJ1cmdlciBpbWFnZSB0byBoZXJvXG4gICAgY29uc3QgaG9tZUJ1cmdlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaG9tZUJ1cmdlckltYWdlLnNyYyA9IGJ1cmdlckltYWdlO1xuICAgIGhvbWVCdXJnZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWltYWdlXCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoYnVyZ2VySGVybyk7XG4gICAgYnVyZ2VySGVyby5hcHBlbmRDaGlsZChob21lQnVyZ2VySW1hZ2UpO1xuICAgIGJ1cmdlckhlcm8uYXBwZW5kQ2hpbGQoYnVyZ2VySGVyb1RleHQpO1xuXG4gICAgLy9DcmVhdGUgYWRkcmVzcyBzZWN0aW9uXG4gICAgY29uc3QgYWRkcmVzc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkcmVzc1NlY3Rpb24pO1xuXG4gICAgY29uc3QgYWRkcmVzc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhZGRyZXNzU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGVyKTtcbiAgICBhZGRyZXNzSGVhZGVyLnRleHRDb250ZW50ID0gXCJDb21lIHZpc2l0IHVzIVwiXG5cbiAgICBjb25zdCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkcmVzc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xuICAgIGFkZHJlc3NUZXh0LmlubmVySFRNTCA9IFwiOTQ1IE9ha21vbnQgU3RyZWV0PGJyPkxvcyBBbmdlbGVzLCBDQTxicj45MDAwOVwiO1xuXG4gICAgYWRkcmVzc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFkZHJlc3Mtc2VjdGlvblwiKTtcblxuICAgIC8vQ3JlYXRlIGhvdXJzIHNlY3Rpb25cbiAgICBjb25zdCBob3Vyc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoaG91cnNTZWN0aW9uKTtcbiAgICBob3Vyc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvdXJzLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgaG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3Vyc0Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblxuICAgIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2UgYXJlIG9wZW5cIjtcbiAgICBob3Vyc1RleHQudGV4dENvbnRlbnQgPSBcIjI0LzcvMzY1XCI7XG4gICAgaG91cnNGb290ZXIudGV4dENvbnRlbnQgPSBcIkJlY2F1c2UgeW91IGp1c3QgY291bGRuJ3QgZ2V0IGVub3VnaC5cIjtcblxuICAgIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICAgIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc1RleHQpO1xuICAgIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc0Zvb3Rlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH07IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuXG5pbXBvcnQgYnVzc3lCdXJnZXJJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYnVyZ2VyLWltYWdlLmpwZ1wiO1xuaW1wb3J0IGxhdXJhbmdlckltYWdlIGZyb20gXCIuL2ltYWdlcy9sYXVyYW5nZXIuanBnXCI7XG5pbXBvcnQgbXVzaHJvb21EZWxpZ2h0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL211c2hyb29tLWRlbGlnaHQuanBnXCI7XG5pbXBvcnQgY2hpY2tlbkJ1cmdlckltYWdlIGZyb20gXCIuL2ltYWdlcy9jaGlja2VuLWJ1cmdlci5qcGdcIlxuaW1wb3J0IHNsaWRlSW50b0ltYWdlIGZyb20gXCIuL2ltYWdlcy9zbGlkZS1pbnRvLXlvLWRtLmpwZ1wiXG5pbXBvcnQgbWVnYUVnZ0ltYWdlIGZyb20gXCIuL2ltYWdlcy9tZWdhLWVnZy1idXJnZXIuanBnXCJcbmltcG9ydCBhbWJ1cmdlckZyaWVzSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2FtYnVyZ2VyLWZyaWVzLmpwZ1wiXG5pbXBvcnQgaG91c2VUZW5kZXJzSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2hvdXNlLXRlbmRlcnMuanBnXCJcbmltcG9ydCBzb2RhSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3NvZGEuanBnXCJcblxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ1c3N5QnVyZ2VyID0gbmV3IE1lbnVJdGVtKGJ1c3N5QnVyZ2VySW1hZ2UsIFwiQnVzc3kgQnVyZ2VyXCIsIFwiJDE1LjY1XCIsIFxuICAgIFwiVGhlIGJ1c3NpZXN0IGJ1c3MgeW91J2xsIGV2ZXIgc2VlLiBPdXIgYXdhcmQgd2lubmVyLlwiLFxuICAgIFwiQ2xhc3NpYyBkb3VibGUgc21hc2hidXJnZXIgd2l0aCBjaGVkZGFyIGNoZWVzZSwgdG9tYXRvZXMsIGNoaWxpZXMsIGJhY29uLCBhbmQgb3VyIGF3YXJkIHdpbm5pbmcgaG91c2Ugc2F1Y2UuXCIpO1xuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KGJ1c3N5QnVyZ2VyKTtcbiAgICBcbiAgICBjb25zdCBsYXVyYW5nZXIgPSBuZXcgTWVudUl0ZW0obGF1cmFuZ2VySW1hZ2UsIFxuICAgICAgICBcIlRoZSBMYXVyYW5nZXJcIixcbiAgICAgICAgXCIkMTQuMzVcIixcbiAgICAgICAgXCJZb3VyIG5ldyBmYXZvcml0ZSBraW5kIG9mIGNoZWVzZWJ1cmdlci4gVGhlIHNleGllc3QgeW91IGNhbiBnZXQuXCIsXG4gICAgICAgIFwiU2luZ2xlIGNoZWVzZWJ1cmdlciB3aXRoIGRvdWJsZSBjaGVlc2UsIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBhd2FyZCB3aW5uaW5nIGhvdXNlIHNhdWNlIGFsbCBvbiBhIHRhc3R5IGJyaW9jaGUgYnVuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQobGF1cmFuZ2VyKTtcblxuICAgIGNvbnN0IG11c2hyb29tRGVsaWdodCA9IG5ldyBNZW51SXRlbShtdXNocm9vbURlbGlnaHRJbWFnZSxcbiAgICAgICAgXCJNdXNocm9vbSBEZWxpZ2h0XCIsXG4gICAgICAgIFwiJDE2LjU1XCIsXG4gICAgICAgIFwiSSBob3BlIHRoZXJlcyBtdXNoLXJvb20gaW4geW91ciBtb3V0aCBmb3IgbWUuXCIsXG4gICAgICAgIFwiU2luZ2xlIGNoZWVzZWJ1cmdlciB3aXRoIGNoZWVzZSBzYXVjZSwgcm9hc3RlZCBjaGlsaXMsIGxldHR1Y2UsIGFuZCBvZiBjb3Vyc2UsIG11c2hyb29tcy5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChtdXNocm9vbURlbGlnaHQpO1xuXG4gICAgY29uc3QgY2hpY2tlbkJ1cmdlciA9IG5ldyBNZW51SXRlbShjaGlja2VuQnVyZ2VySW1hZ2UsXG4gICAgICAgIFwiQ2hpY2tlbiBCdXJnZXJcIixcbiAgICAgICAgXCIkMTUuNjVcIixcbiAgICAgICAgXCJEb24ndCBJIHNvdW5kIGdyZWF0P1wiLFxuICAgICAgICBcIkZyaWVkIGNoaWNrZW4gYnJlYXN0IHRvcHBlZCB3aXRoIGphbGFwZW5vcywgbGV0dHVjZSwgdG9tYXRvLCBjdWN1bWJlciwgY2hlZXNlLCBhbmQgb3VyIGF3YXJkIHdpbm5pbmcgaG91c2Ugc2F1Y2UuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQoY2hpY2tlbkJ1cmdlcik7XG5cbiAgICBjb25zdCBzbGlkZUludG9Zb1NsaWRlcnMgPSBuZXcgTWVudUl0ZW0oc2xpZGVJbnRvSW1hZ2UsXG4gICAgICAgIFwiU2xpZGUgSW50byBZbyBETSBTbGlkZXJzXCIsXG4gICAgICAgIFwiJDEyLjQ1XCIsXG4gICAgICAgIFwiSGV5eXl5IDspXCIsXG4gICAgICAgIFwiVHdvIGJlYXV0aWZ1bCBtaW5pIGJ1cmdlcnMgd2l0aCBndWFjYW1vbGUsIGxldHR1Y2UsIHJhZGlzaCwgYW5kIG91ciBhd2FyZCB3aW5uaW5nIGhvdXNlIHNhdWNlLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KHNsaWRlSW50b1lvU2xpZGVycyk7XG5cbiAgICBjb25zdCBtZWdhRWdnQnVyZ2VyID0gbmV3IE1lbnVJdGVtKG1lZ2FFZ2dJbWFnZSxcbiAgICAgICAgXCJNZWdhIEVnZyBCdXJnZXJcIixcbiAgICAgICAgXCIkMTguMjBcIixcbiAgICAgICAgXCJEb24ndCB3ZSBhbGwgbG92ZSBlZ2dzP1wiLFxuICAgICAgICBcIkJ1cmdlciB0b3BwZWQgd2l0aCBjaGVlc2UsIGJhY29uLCBvdmVyLWVhc3kgZWdnIChDaGVmJ3MgZmF2b3JpdGUpLCBsZXR0dWNlLCB0b21hdG8sIGFuZCBvdXIgYXdhcmQgd2lubmluZyBob3VzZSBzYXVjZS5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChtZWdhRWdnQnVyZ2VyKTtcblxuICAgIGNvbnN0IGhvdXNlVGVuZGVycyA9IG5ldyBNZW51SXRlbShob3VzZVRlbmRlcnNJbWFnZSxcbiAgICAgICAgXCJIb3VzZSBUZW5kZXJzXCIsXG4gICAgICAgIFwiJDkuMjVcIixcbiAgICAgICAgXCJGb3IgdGhlIGtpZHMsIG9yIGFkdWx0cyB3aG8gbmV2ZXIgZ3JldyB1cC5cIixcbiAgICAgICAgXCJGaXZlIHBpZWNlIGNoaWNrZW4gdGVuZGVyLCBzZXJ2ZWQgd2l0aCBBTUJVUkdFUiBmcmllcy5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChob3VzZVRlbmRlcnMpO1xuXG4gICAgY29uc3QgYW1idXJnZXJGcmllcyA9IG5ldyBNZW51SXRlbShhbWJ1cmdlckZyaWVzSW1hZ2UsXG4gICAgICAgIFwiQU1CVVJHRVIgRnJpZXNcIixcbiAgICAgICAgXCIkNS4yNVwiLFxuICAgICAgICBcIkknbSBuZWNlc3NhcnkuXCIsXG4gICAgICAgIFwiSG91c2UgZnJpZXMgc2VydmVkIHdpdGggaGltYWxheWFuIGtldGNodXAgYW5kIGZyeSBzYXVjZS4gVHJ1ZmZsZSBvciBnYXJsaWMgb3B0aW9ucyBmcmVlIG9mIGNoYXJnZS5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChhbWJ1cmdlckZyaWVzKTtcblxuICAgIGNvbnN0IHNvZGEgPSBuZXcgTWVudUl0ZW0oc29kYUltYWdlLFxuICAgICAgICBcIlNvZGFcIixcbiAgICAgICAgXCIkMy4yNVwiLFxuICAgICAgICBcIldlIGtub3cgeW91IHdhbnQgc29tZS5cIixcbiAgICAgICAgXCJXZSBvbmx5IHNlcnZlIENva2Ugb3IgRGlldCBDb2tlLCBpZiB5b3Ugd2FudGVkIHNvbWV0aGluZyBlbHNlIGdldCB3YXRlci5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChzb2RhKTtcblxuICAgIGNvbnN0IGRpc2NsYWltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpc2NsYWltZXIuaW5uZXJIVE1MID0gXCI8ZW0+Q29uc3VtaW5nIHJhdyBvciB1bmRlcmNvb2tlZCBtZWF0cywgcG91bHRyeSwgc2VhZm9vZCwgc2hlbGxmaXNoLCBvciBlZ2dzIG1heSBpbmNyZWFzZSB5b3VyIHJpc2sgb2YgZm9vZGJvcm5lIGlsbG5lc3MsIGVzcGVjaWFsbHkgaWYgeW91IGhhdmUgY2VydGFpbiBtZWRpY2FsIGNvbmRpdGlvbnMuPGJyPklmIHlvdSBoYXZlIGEgZm9vZCBhbGxlcmd5LCBwbGVhc2Ugbm90aWZ5IHlvdXIgc2VydmVyLjwvZW0+XCI7XG4gICAgZGlzY2xhaW1lci5jbGFzc0xpc3QuYWRkKFwibWVudS1kaXNjbGFpbWVyXCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoZGlzY2xhaW1lcik7XG59XG5cbmZ1bmN0aW9uIE1lbnVJdGVtIChpbWFnZSwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgaW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdNZW51RWxlbWVudChtZW51SXRlbSkge1xuICAgIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICBjb25zdCBidXJnZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmdlckltYWdlLnNyYyA9IG1lbnVJdGVtLmltYWdlO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VySW1hZ2UpO1xuICAgIGNvbnN0IGl0ZW1UZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXJcIik7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGV4dENvbnRhaW5lcik7XG4gICAgY29uc3QgaXRlbUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtSGVhZGluZy50ZXh0Q29udGVudCA9IGAke21lbnVJdGVtLnRpdGxlfSAoJHttZW51SXRlbS5wcmljZX0pYDtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSGVhZGluZyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke21lbnVJdGVtLmRlc2NyaXB0aW9ufTxicj48ZW0+JHttZW51SXRlbS5pbmdyZWRpZW50c308L2VtPmA7XG4gICAgaXRlbVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVNZW51UGFnZX07IiwiaW1wb3J0IGdpdGh1Ykljb24gZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi5wbmdcIjtcblxuY29uc3Qgd2ViUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAvL0NyZWF0ZSBoZWFkaW5nIHNlY3Rpb25cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICAgIGl0ZW1zLnB1c2goaGVhZGluZyk7XG5cbiAgICAvL0NyZWF0ZSBoZWFkaW5nIHRleHRcbiAgICBjb25zdCBoZWFkaW5nU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nU2VjdGlvbik7XG4gICAgY29uc3QgaG9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaG9tZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFNQlVSR0VSU1wiO1xuICAgIGhvbWVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRpbmctdGV4dFwiKTtcbiAgICBoZWFkaW5nU2VjdGlvbi5hcHBlbmRDaGlsZChob21lSGVhZGluZyk7XG4gICAgaGVhZGluZ1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhlYWRpbmctY2VudGVyLXRleHRcIik7XG5cbiAgICBjb25zdCBob21lSGVhZGluZ1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaG9tZUhlYWRpbmdTdWJUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgbGlrZSB0aGUgYnVyZ2Vycywgd2UganVzdCBtYWtlIHRoZW0uXCI7XG4gICAgaG9tZUhlYWRpbmdTdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRpbmctc3VidGV4dFwiKTtcbiAgICBoZWFkaW5nU2VjdGlvbi5hcHBlbmRDaGlsZChob21lSGVhZGluZ1N1YlRleHQpO1xuXG4gICAgLy9DcmVhdGUgaGVhZGluZyBidXR0b25zXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgaGVhZGluZ1NlY3Rpb24uYmVmb3JlKG1lbnVCdXR0b24pO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDT05UQUNUIFVTXCI7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1idXR0b25cIik7XG5cbiAgICAvL0NyZWF0ZSBib2R5IHNlY3Rpb25cbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkJvZHkuY2xhc3NMaXN0LmFkZChcIm1haW4tYm9keS1jb250YWluZXJcIik7XG4gICAgaXRlbXMucHVzaChtYWluQm9keSk7XG5cbiAgICAvL0NyZWF0ZSBmb290ZXIgc2VjdGlvblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJjb3B5cmlnaHQtZm9vdGVyXCIpO1xuICAgIGNvbnN0IHJlZGlyZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgcmVkaXJlY3Quc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNhcy1hbWJlcmdcIik7XG4gICAgcmVkaXJlY3Quc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgIGNvbnN0IGdpdGh1YkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZ2l0aHViSW1hZ2Uuc3JjID0gZ2l0aHViSWNvbjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmVkaXJlY3QpO1xuICAgIHJlZGlyZWN0LmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgICBjb25zdCBjb3B5cmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29weXJpZ2h0VGV4dC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2x1Y2FzLWFtYmVyZ1wiKTtcbiAgICBjb3B5cmlnaHRUZXh0LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICBjb3B5cmlnaHRUZXh0LnRleHRDb250ZW50ID0gXCLCqSBMdWNhcyBBbWJlcmcgMjAyM1wiO1xuICAgIGNvcHlyaWdodFRleHQuY2xhc3NMaXN0LmFkZChcImNvcHlyaWdodC10ZXh0XCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0KTtcbiAgICBpdGVtcy5wdXNoKGZvb3Rlcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLFxuICAgICAgICBoZWFkaW5nLFxuICAgICAgICBtYWluQm9keSxcbiAgICAgICAgY29udGFjdEJ1dHRvbixcbiAgICAgICAgbWVudUJ1dHRvbixcbiAgICAgICAgaGVhZGluZ1NlY3Rpb25cbiAgICB9O1xufTtcblxuY29uc3QgcGFnZSA9IHdlYlBhZ2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIlxuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgaG9tZVBhZ2UgPSBmYWxzZTtcbmxldCBtZW51UGFnZSA9IHRydWU7XG5sZXQgY29udGFjdFBhZ2UgPSBmYWxzZTtcblxuLy9jcmVhdGVIb21lUGFnZSgpO1xuXG5jcmVhdGVNZW51UGFnZSgpO1xuXG5wYWdlLm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmIChtZW51UGFnZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaG9tZVBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGhvbWVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBtZW51UGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVNZW51UGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhY3RQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250YWN0UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgbWVudVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pXG5cbnBhZ2UuaGVhZGluZ1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmIChob21lUGFnZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAobWVudVBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lbnVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBob21lUGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhY3RQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250YWN0UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgaG9tZVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlSG9tZVBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pXG5cbnBhZ2UuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKGNvbnRhY3RQYWdlICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChob21lUGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaG9tZVBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIC8vY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZW51UGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWVudVBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIC8vY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
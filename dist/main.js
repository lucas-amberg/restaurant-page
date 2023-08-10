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
    font-size: calc(1.1*min(2.5vw,1.5rem));
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

.contact-container {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-bubble {
    width: 560px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    border-radius: 20px;
    background-color: var(--orange-color);
    padding: 20px;
    gap: 20px;
}

.contact-form {
    width: 400px;
    background-color: var(--gray-color);
    height: 500px;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-form label {
    font-family: "Coolvetica Rg", sans-serif;
    color: var(--light-color);
    font-size: 1.5rem;
    text-align: left;
    width: 300px;
    margin-top: 15px;
}
.contact-form input,
.contact-form textarea,
.contact-form button {
    appearance: none;
}

.contact-form input {
    width: 300px;
    height: 2rem;
    border: 0;
    border-radius: 5px;
    background-color: var(--light-color);
    color: var(--dark-color);
    font-family: sans-serif;
    padding-left: 4px;
}

.contact-form textarea {
    resize: none;
    width: 300px;
    border: 0;
    border-radius: 5px;
    height: 200px;
    font-family: sans-serif;
    padding-left: 4px;
    padding-top: 3px;
}

.contact-form button {
    margin-top: 20px;
    width: 200px;
    height: 50px;
    font-family: "Coolvetica Rg", sans-serif;
    font-size: 1.5rem;
    border:0;
    color: var(--light-color);
    background-color: var(--orange-color);
    border-radius: 10px;
}

.contact-form button:hover {
    cursor: pointer;
    background-color: var(--dark-color);
    color: var(--orange-color);
    font-size: 1.6rem;
}

.info-bubble {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    align-items: center;
    background-color: var(--gray-color);
    color: var(--light-color);
    font-family: "Coolvetica Rg";
    border-radius: 20px;
    gap:10px;
}

.info-bubble h3 {
    font-size: 1.7rem;
}

.info-bubble div {
    font-size: 1.2rem;
}

.info-bubble :nth-child(4) {
    text-align: center;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Coolvetica Rg';\n    src: url('./fonts/CoolveticaRg-Regular.woff2') format('woff2'),\n        url('./fonts/CoolveticaRg-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n\n:root {\n    width: 100vw;\n    height: 100vh;\n    --light-color: #f2f2f2;\n    --orange-color: #f96d00;\n    --gray-color: #393e46;\n    --dark-color: #222831;\n    background-color: var(--gray-color);\n    margin: 0;\n    overflow-x: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 130px auto 30px;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    justify-items: center;\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n.burger-image {\n    height: 150px;\n    border-radius: 10px;\n}\n\n.home-heading-text {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    letter-spacing: 4px;\n    font-size: 4rem;\n    color: var(--light-color);\n    margin: 0;\n}\n\n.heading {\n    background-color: var(--orange-color);\n    display: flex;\n    width: 100vw;\n    height: 110px;\n    justify-content: space-evenly;\n    flex-direction: row;\n    position: sticky;\n    padding: 20px;\n    align-items: center;\n    box-shadow: 0px 0px 7px var(--dark-color);\n}\n\n.heading button {\n    width: min(14vw,180px);\n    height: 80px;\n    appearance: none;\n    font-family: \"Coolvetica Rg\", sans-serif;\n    background-color: var(--orange-color);\n    color: var(--light-color);\n    border: none;\n    border-radius: 10px;\n    font-size: min(2.5vw,1.5rem);\n}\n\n.heading button:hover {\n    background-color: var(--dark-color);\n    cursor: pointer;\n    color: var(--orange-color);\n    font-size: calc(1.1*min(2.5vw,1.5rem));\n}\n\n.heading-center-text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex: 0;\n    padding: 10px;\n    border-radius: 10px;\n    max-width: 500px;\n}\n\n.home-heading-subtext {\n    font-size: 1.5rem;\n    margin: 0;\n    font-family: \"Coolvetica Rg\";\n    color: var(--light-color);\n    text-align: center;\n    width: 400px;\n}\n\n.main-body-container {\n    padding: 40px;\n    gap: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\n.burger-hero-container {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n}\n\n.burger-hero-text {\n    font-size: max(0.7rem, min(3vw, 2rem));\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n}\n\n.address-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    padding-bottom: 20px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.address-section h2 {\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(4vw, 2.5rem));\n    color: var(--light-color);\n}\n\n.address-section div{\n    font-family: \"Coolvetica Rg\";\n    text-align: center;\n    font-size: min(3vw, 1.5rem);\n    color: var(--light-color);\n}\n\n.hours-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 300px;\n}\n\n.hours-section h2{\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.7rem, min(4vw, 2rem));\n    color: var(--light-color);\n}\n\n.hours-section h3 {\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.6rem, min(3.5vw, 1.7rem));\n    color: var(--light-color);\n}\n\n.hours-section div {\n    margin: 0;\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(12vw, 6rem));\n    color: var(--light-color);\n}\n\n.heading-center-text:hover {\n    background-color: var(--dark-color);\n    border-radius: 20px;\n    padding: 10px;\n    cursor: pointer;\n}\n\n.menu-item img{\n    width: 250px;\n    border-radius: 10px;\n}\n\n.menu-item {\n    display: flex;\n    width: 500px;\n    background-color: var(--orange-color);\n    padding: 15px;\n    border-radius: 10px;\n    justify-content: space-around;\n    gap: 15px;\n    height: 207px;\n}\n\n.item-description-container {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n}\n\n.item-description-container h3 {\n    font-size: 1.5rem;\n}\n\n.item-description-container div>em {\n    font-size: 0.8rem;\n    margin-top: 20px;\n    display: block;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    width: 100vw;\n    gap: 20px;\n    justify-items: center;\n}\n\n.menu-disclaimer {\n    text-align: center;\n    color: var(--light-color);\n}\n\n.copyright-footer {\n    background-color: var(--orange-color);\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.copyright-text {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--dark-color);\n    text-decoration: none;\n}\n\n.copyright-footer a img {\n    height: 25px;\n}\n\n.copyright-footer a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-container {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-bubble {\n    width: 560px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    height: 80vh;\n    border-radius: 20px;\n    background-color: var(--orange-color);\n    padding: 20px;\n    gap: 20px;\n}\n\n.contact-form {\n    width: 400px;\n    background-color: var(--gray-color);\n    height: 500px;\n    padding: 20px;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-form label {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n    font-size: 1.5rem;\n    text-align: left;\n    width: 300px;\n    margin-top: 15px;\n}\n.contact-form input,\n.contact-form textarea,\n.contact-form button {\n    appearance: none;\n}\n\n.contact-form input {\n    width: 300px;\n    height: 2rem;\n    border: 0;\n    border-radius: 5px;\n    background-color: var(--light-color);\n    color: var(--dark-color);\n    font-family: sans-serif;\n    padding-left: 4px;\n}\n\n.contact-form textarea {\n    resize: none;\n    width: 300px;\n    border: 0;\n    border-radius: 5px;\n    height: 200px;\n    font-family: sans-serif;\n    padding-left: 4px;\n    padding-top: 3px;\n}\n\n.contact-form button {\n    margin-top: 20px;\n    width: 200px;\n    height: 50px;\n    font-family: \"Coolvetica Rg\", sans-serif;\n    font-size: 1.5rem;\n    border:0;\n    color: var(--light-color);\n    background-color: var(--orange-color);\n    border-radius: 10px;\n}\n\n.contact-form button:hover {\n    cursor: pointer;\n    background-color: var(--dark-color);\n    color: var(--orange-color);\n    font-size: 1.6rem;\n}\n\n.info-bubble {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    padding: 20px;\n    align-items: center;\n    background-color: var(--gray-color);\n    color: var(--light-color);\n    font-family: \"Coolvetica Rg\";\n    border-radius: 20px;\n    gap:10px;\n}\n\n.info-bubble h3 {\n    font-size: 1.7rem;\n}\n\n.info-bubble div {\n    font-size: 1.2rem;\n}\n\n.info-bubble :nth-child(4) {\n    text-align: center;\n}\n\n\n@media (max-width: 600px) {\n    .heading button {\n        display: none;\n    }\n    .home-heading-text {\n        font-size: 2rem;\n    }\n    .home-heading-subtext {\n        font-size: 1rem;\n    }\n    .heading {\n        height: 60px;\n    }\n    #content {\n        grid-template-rows: 80px auto;\n    }\n    .menu-container {\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n    .menu-item {\n        width: 300px;\n        height: 140px;\n        padding: 7px;\n        border-radius: 5px;\n        gap: 8px;\n    }\n    .item-description-container h3 {\n        font-size: 1.2rem;\n    }\n    .item-description-container div {\n        font-size: 1rem;\n    }\n    .item-description-container div>em {\n        font-size: 0.5rem;\n        margin-top: 5px;\n    }\n    .menu-item img{\n        width: 125px;\n        border-radius: 10px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");


function createContactPage() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.appendChild(contactContainer);

    const contactBubble = document.createElement("div");
    contactBubble.classList.add("contact-bubble");
    contactContainer.appendChild(contactBubble);

    //Create form
    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");
    contactBubble.appendChild(contactForm);

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.setAttribute("for", "name");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.setAttribute("for", "email");
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";

    const contactLabel = document.createElement("label");
    contactLabel.textContent = "Reason for contacting:";
    contactLabel.setAttribute("for", "contact");
    const contactInput = document.createElement("textarea");
    contactInput.id = "contact";
    contactInput.name = "contact";

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "SUBMIT FORM";

    submitButton.addEventListener("click", () => {
        nameInput.value = "";
        emailInput.value = "";
        contactInput.value = "";
    })

    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(contactLabel);
    contactForm.appendChild(contactInput);
    contactForm.appendChild(submitButton);
    //End of form

    //Create phone number, email, address section
    const infoBubble = document.createElement("div");
    const infoTitle = document.createElement("h3");
    const phoneNumber = document.createElement("div");
    const emailAddress = document.createElement("div");
    const address = document.createElement("div");

    infoBubble.classList.add("info-bubble");
    infoTitle.textContent = "You can also reach us at:";
    phoneNumber.innerHTML = "Phone: <em>+1 (526) AMB-URGR</em>";
    emailAddress.innerHTML = "Email: <em>contactus@amburgers.com</em>";
    address.innerHTML = "Mail all packages to:<br>945 Oakmont St<br>Los Angeles, CA<br>90009";

    contactBubble.appendChild(infoBubble);
    infoBubble.appendChild(infoTitle);
    infoBubble.appendChild(phoneNumber);
    infoBubble.appendChild(emailAddress);
    infoBubble.appendChild(address);

}



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
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






let homePage = false;
let menuPage = false;
let contactPage = true;

//createHomePage();

//createMenuPage();

(0,_contact_page__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();

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
            (0,_contact_page__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();
        }
        else if (menuPage === true) {
            menuPage = false;
            contactPage = true;
            _page__WEBPACK_IMPORTED_MODULE_0__["default"].mainBody.innerHTML = "";
            (0,_contact_page__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();
        }
    }
    else {
        return;
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUFxRDtBQUNqRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFB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QUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEIsWUFBWSwwREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2Q0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBSTtBQUNoQixZQUFZLGdFQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEIsWUFBWSxnRUFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0Nvb2x2ZXRpY2FSZy1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Db29sdmV0aWNhUmctUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhIFJnJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuOnJvb3Qge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC0tbGlnaHQtY29sb3I6ICNmMmYyZjI7XG4gICAgLS1vcmFuZ2UtY29sb3I6ICNmOTZkMDA7XG4gICAgLS1ncmF5LWNvbG9yOiAjMzkzZTQ2O1xuICAgIC0tZGFyay1jb2xvcjogIzIyMjgzMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCBhdXRvIDMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5idXJnZXItaW1hZ2Uge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmhvbWUtaGVhZGluZy10ZXh0IHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCIsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCB2YXIoLS1kYXJrLWNvbG9yKTtcbn1cblxuLmhlYWRpbmcgYnV0dG9uIHtcbiAgICB3aWR0aDogbWluKDE0dncsMTgwcHgpO1xuICAgIGhlaWdodDogODBweDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiBtaW4oMi41dncsMS41cmVtKTtcbn1cblxuLmhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuMSptaW4oMi41dncsMS41cmVtKSk7XG59XG5cbi5oZWFkaW5nLWNlbnRlci10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uaG9tZS1oZWFkaW5nLXN1YnRleHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubWFpbi1ib2R5LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBnYXA6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5idXJnZXItaGVyby1jb250YWluZXIge1xuICAgIHdpZHRoOiBtYXgoMzAwcHgsIG1pbig3MHZ3LDcwMHB4KSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1cmdlci1oZXJvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDN2dywgMnJlbSkpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uYWRkcmVzcy1zZWN0aW9uIHtcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZHJlc3Mtc2VjdGlvbiBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oNHZ3LCAyLjVyZW0pKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uYWRkcmVzcy1zZWN0aW9uIGRpdntcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogbWluKDN2dywgMS41cmVtKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uaG91cnMtc2VjdGlvbiB7XG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmhvdXJzLXNlY3Rpb24gaDJ7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDR2dywgMnJlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5ob3Vycy1zZWN0aW9uIGgzIHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBtYXgoMC42cmVtLCBtaW4oMy41dncsIDEuN3JlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5ob3Vycy1zZWN0aW9uIGRpdiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDEydncsIDZyZW0pKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uaGVhZGluZy1jZW50ZXItdGV4dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtaXRlbSBpbWd7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGdhcDogMTVweDtcbiAgICBoZWlnaHQ6IDIwN3B4O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2PmVtIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MDBweCwgMWZyKSk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWRpc2NsYWltZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uY29weXJpZ2h0LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uY29weXJpZ2h0LXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29weXJpZ2h0LWZvb3RlciBhIGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uY29weXJpZ2h0LWZvb3RlciBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtYnViYmxlIHtcbiAgICB3aWR0aDogNTYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1mb3JtIGxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhY3QtZm9ybSBpbnB1dCxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEsXG4uY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNvbnRhY3QtZm9ybSBpbnB1dCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlcjowO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uaW5mby1idWJibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZ2FwOjEwcHg7XG59XG5cbi5pbmZvLWJ1YmJsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5pbmZvLWJ1YmJsZSBkaXYge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaW5mby1idWJibGUgOm50aC1jaGlsZCg0KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkaW5nIGJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5ob21lLWhlYWRpbmctdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgLmhvbWUtaGVhZGluZy1zdWJ0ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG4gICAgI2NvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0bztcbiAgICB9XG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgfVxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXYge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXY+ZW0ge1xuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICAubWVudS1pdGVtIGltZ3tcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3Nc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QUNsQixRQUFRO0lBQ1o7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhIFJnJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ29vbHZldGljYVJnLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJy4vZm9udHMvQ29vbHZldGljYVJnLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuXFxuOnJvb3Qge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIC0tbGlnaHQtY29sb3I6ICNmMmYyZjI7XFxuICAgIC0tb3JhbmdlLWNvbG9yOiAjZjk2ZDAwO1xcbiAgICAtLWdyYXktY29sb3I6ICMzOTNlNDY7XFxuICAgIC0tZGFyay1jb2xvcjogIzIyMjgzMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTMwcHggYXV0byAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmJ1cmdlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5ob21lLWhlYWRpbmctdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHZhcigtLWRhcmstY29sb3IpO1xcbn1cXG5cXG4uaGVhZGluZyBidXR0b24ge1xcbiAgICB3aWR0aDogbWluKDE0dncsMTgwcHgpO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBtaW4oMi41dncsMS41cmVtKTtcXG59XFxuXFxuLmhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjEqbWluKDIuNXZ3LDEuNXJlbSkpO1xcbn1cXG5cXG4uaGVhZGluZy1jZW50ZXItdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uaG9tZS1oZWFkaW5nLXN1YnRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLm1haW4tYm9keS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5idXJnZXItaGVyby1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXJnZXItaGVyby10ZXh0IHtcXG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oM3Z3LCAycmVtKSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5hZGRyZXNzLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZHJlc3Mtc2VjdGlvbiBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDR2dywgMi41cmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5hZGRyZXNzLXNlY3Rpb24gZGl2e1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbWluKDN2dywgMS41cmVtKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uaG91cnMtc2VjdGlvbiBoMntcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbig0dncsIDJyZW0pKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24gaDMge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDAuNnJlbSwgbWluKDMuNXZ3LCAxLjdyZW0pKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24gZGl2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbigxMnZ3LCA2cmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5oZWFkaW5nLWNlbnRlci10ZXh0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWd7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiAyMDdweDtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXY+ZW0ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTAwcHgsIDFmcikpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1kaXNjbGFpbWVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uY29weXJpZ2h0LWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY29weXJpZ2h0LXRleHQge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvcHlyaWdodC1mb290ZXIgYSBpbWcge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5jb3B5cmlnaHQtZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtYnViYmxlIHtcXG4gICAgd2lkdGg6IDU2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWZvcm0gbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uY29udGFjdC1mb3JtIGlucHV0LFxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEsXFxuLmNvbnRhY3QtZm9ybSBidXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbi5jb250YWN0LWZvcm0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5pbmZvLWJ1YmJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4uaW5mby1idWJibGUgaDMge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmluZm8tYnViYmxlIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaW5mby1idWJibGUgOm50aC1jaGlsZCg0KSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5oZWFkaW5nIGJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5ob21lLWhlYWRpbmctdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLmhvbWUtaGVhZGluZy1zdWJ0ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAuaGVhZGluZyB7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIH1cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XFxuICAgIH1cXG4gICAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICB9XFxuICAgIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGdhcDogOHB4O1xcbiAgICB9XFxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2PmVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICB9XFxuICAgIC5tZW51LWl0ZW0gaW1ne1xcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RCdWJibGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnViYmxlXCIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1YmJsZSk7XG5cbiAgICAvL0NyZWF0ZSBmb3JtXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1mb3JtXCIpO1xuICAgIGNvbnRhY3RCdWJibGUuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gXCJFbWFpbDpcIjtcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsXCIpO1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZW1haWxJbnB1dC50eXBlID0gXCJlbWFpbFwiO1xuICAgIGVtYWlsSW5wdXQuaWQgPSBcImVtYWlsXCI7XG4gICAgZW1haWxJbnB1dC5uYW1lID0gXCJlbWFpbFwiO1xuXG4gICAgY29uc3QgY29udGFjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnRhY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUmVhc29uIGZvciBjb250YWN0aW5nOlwiO1xuICAgIGNvbnRhY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBjb250YWN0SW5wdXQuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBjb250YWN0SW5wdXQubmFtZSA9IFwiY29udGFjdFwiO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTVUJNSVQgRk9STVwiO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVtYWlsSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBjb250YWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0pXG5cbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdExhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChjb250YWN0SW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgLy9FbmQgb2YgZm9ybVxuXG4gICAgLy9DcmVhdGUgcGhvbmUgbnVtYmVyLCBlbWFpbCwgYWRkcmVzcyBzZWN0aW9uXG4gICAgY29uc3QgaW5mb0J1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaW5mb0J1YmJsZS5jbGFzc0xpc3QuYWRkKFwiaW5mby1idWJibGVcIik7XG4gICAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJZb3UgY2FuIGFsc28gcmVhY2ggdXMgYXQ6XCI7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJIVE1MID0gXCJQaG9uZTogPGVtPisxICg1MjYpIEFNQi1VUkdSPC9lbT5cIjtcbiAgICBlbWFpbEFkZHJlc3MuaW5uZXJIVE1MID0gXCJFbWFpbDogPGVtPmNvbnRhY3R1c0BhbWJ1cmdlcnMuY29tPC9lbT5cIjtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IFwiTWFpbCBhbGwgcGFja2FnZXMgdG86PGJyPjk0NSBPYWttb250IFN0PGJyPkxvcyBBbmdlbGVzLCBDQTxicj45MDAwOVwiO1xuXG4gICAgY29udGFjdEJ1YmJsZS5hcHBlbmRDaGlsZChpbmZvQnViYmxlKTtcbiAgICBpbmZvQnViYmxlLmFwcGVuZENoaWxkKGluZm9UaXRsZSk7XG4gICAgaW5mb0J1YmJsZS5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgaW5mb0J1YmJsZS5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpO1xuICAgIGluZm9CdWJibGUuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbn1cblxuZXhwb3J0IHtjcmVhdGVDb250YWN0UGFnZX07IiwiaW1wb3J0IGJ1cmdlckltYWdlIGZyb20gXCIuL2ltYWdlcy9idXJnZXItaW1hZ2UuanBnXCJcbmltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gICAgLy9DcmVhdGUgYnVyZ2VyIGhlcm8gKDFzdCBoZXJvKVxuICAgIGNvbnN0IGJ1cmdlckhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cmdlckhlcm8uY2xhc3NMaXN0LmFkZChcImJ1cmdlci1oZXJvLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBidXJnZXJIZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnVyZ2VySGVyb1RleHQuY2xhc3NMaXN0LmFkZChcImJ1cmdlci1oZXJvLXRleHRcIik7XG4gICAgYnVyZ2VySGVyb1RleHQudGV4dENvbnRlbnQgPSBcIldlIGhhdmUgdGhlIHdvcmxkcyBudW1iZXIgb25lIGJ1c3NpZXN0IGJ1c3MsIGFuZCB3ZSBjYW4gcHJvdmUgaXQuXCI7XG5cbiAgICAvL0FkZCBidXJnZXIgaW1hZ2UgdG8gaGVyb1xuICAgIGNvbnN0IGhvbWVCdXJnZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGhvbWVCdXJnZXJJbWFnZS5zcmMgPSBidXJnZXJJbWFnZTtcbiAgICBob21lQnVyZ2VySW1hZ2UuY2xhc3NMaXN0LmFkZChcImJ1cmdlci1pbWFnZVwiKTtcbiAgICBwYWdlLm1haW5Cb2R5LmFwcGVuZENoaWxkKGJ1cmdlckhlcm8pO1xuICAgIGJ1cmdlckhlcm8uYXBwZW5kQ2hpbGQoaG9tZUJ1cmdlckltYWdlKTtcbiAgICBidXJnZXJIZXJvLmFwcGVuZENoaWxkKGJ1cmdlckhlcm9UZXh0KTtcblxuICAgIC8vQ3JlYXRlIGFkZHJlc3Mgc2VjdGlvblxuICAgIGNvbnN0IGFkZHJlc3NTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlLm1haW5Cb2R5LmFwcGVuZENoaWxkKGFkZHJlc3NTZWN0aW9uKTtcblxuICAgIGNvbnN0IGFkZHJlc3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYWRkcmVzc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc0hlYWRlcik7XG4gICAgYWRkcmVzc0hlYWRlci50ZXh0Q29udGVudCA9IFwiQ29tZSB2aXNpdCB1cyFcIlxuXG4gICAgY29uc3QgYWRkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZHJlc3NTZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NUZXh0KTtcbiAgICBhZGRyZXNzVGV4dC5pbm5lckhUTUwgPSBcIjk0NSBPYWttb250IFN0cmVldDxicj5Mb3MgQW5nZWxlcywgQ0E8YnI+OTAwMDlcIjtcblxuICAgIGFkZHJlc3NTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzLXNlY3Rpb25cIik7XG5cbiAgICAvL0NyZWF0ZSBob3VycyBzZWN0aW9uXG4gICAgY29uc3QgaG91cnNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlLm1haW5Cb2R5LmFwcGVuZENoaWxkKGhvdXJzU2VjdGlvbik7XG4gICAgaG91cnNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJob3Vycy1zZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG91cnNGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cbiAgICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlIGFyZSBvcGVuXCI7XG4gICAgaG91cnNUZXh0LnRleHRDb250ZW50ID0gXCIyNC83LzM2NVwiO1xuICAgIGhvdXJzRm9vdGVyLnRleHRDb250ZW50ID0gXCJCZWNhdXNlIHlvdSBqdXN0IGNvdWxkbid0IGdldCBlbm91Z2guXCI7XG5cbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cnNIZWFkaW5nKTtcbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cnNUZXh0KTtcbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cnNGb290ZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIb21lUGFnZSB9OyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcblxuaW1wb3J0IGJ1c3N5QnVyZ2VySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2J1cmdlci1pbWFnZS5qcGdcIjtcbmltcG9ydCBsYXVyYW5nZXJJbWFnZSBmcm9tIFwiLi9pbWFnZXMvbGF1cmFuZ2VyLmpwZ1wiO1xuaW1wb3J0IG11c2hyb29tRGVsaWdodEltYWdlIGZyb20gXCIuL2ltYWdlcy9tdXNocm9vbS1kZWxpZ2h0LmpwZ1wiO1xuaW1wb3J0IGNoaWNrZW5CdXJnZXJJbWFnZSBmcm9tIFwiLi9pbWFnZXMvY2hpY2tlbi1idXJnZXIuanBnXCJcbmltcG9ydCBzbGlkZUludG9JbWFnZSBmcm9tIFwiLi9pbWFnZXMvc2xpZGUtaW50by15by1kbS5qcGdcIlxuaW1wb3J0IG1lZ2FFZ2dJbWFnZSBmcm9tIFwiLi9pbWFnZXMvbWVnYS1lZ2ctYnVyZ2VyLmpwZ1wiXG5pbXBvcnQgYW1idXJnZXJGcmllc0ltYWdlIGZyb20gXCIuL2ltYWdlcy9hbWJ1cmdlci1mcmllcy5qcGdcIlxuaW1wb3J0IGhvdXNlVGVuZGVyc0ltYWdlIGZyb20gXCIuL2ltYWdlcy9ob3VzZS10ZW5kZXJzLmpwZ1wiXG5pbXBvcnQgc29kYUltYWdlIGZyb20gXCIuL2ltYWdlcy9zb2RhLmpwZ1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidXNzeUJ1cmdlciA9IG5ldyBNZW51SXRlbShidXNzeUJ1cmdlckltYWdlLCBcIkJ1c3N5IEJ1cmdlclwiLCBcIiQxNS42NVwiLCBcbiAgICBcIlRoZSBidXNzaWVzdCBidXNzIHlvdSdsbCBldmVyIHNlZS4gT3VyIGF3YXJkIHdpbm5lci5cIixcbiAgICBcIkNsYXNzaWMgZG91YmxlIHNtYXNoYnVyZ2VyIHdpdGggY2hlZGRhciBjaGVlc2UsIHRvbWF0b2VzLCBjaGlsaWVzLCBiYWNvbiwgYW5kIG91ciBhd2FyZCB3aW5uaW5nIGhvdXNlIHNhdWNlLlwiKTtcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChidXNzeUJ1cmdlcik7XG4gICAgXG4gICAgY29uc3QgbGF1cmFuZ2VyID0gbmV3IE1lbnVJdGVtKGxhdXJhbmdlckltYWdlLCBcbiAgICAgICAgXCJUaGUgTGF1cmFuZ2VyXCIsXG4gICAgICAgIFwiJDE0LjM1XCIsXG4gICAgICAgIFwiWW91ciBuZXcgZmF2b3JpdGUga2luZCBvZiBjaGVlc2VidXJnZXIuIFRoZSBzZXhpZXN0IHlvdSBjYW4gZ2V0LlwiLFxuICAgICAgICBcIlNpbmdsZSBjaGVlc2VidXJnZXIgd2l0aCBkb3VibGUgY2hlZXNlLCBsZXR0dWNlLCB0b21hdG8sIGFuZCBvdXIgYXdhcmQgd2lubmluZyBob3VzZSBzYXVjZSBhbGwgb24gYSB0YXN0eSBicmlvY2hlIGJ1blwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KGxhdXJhbmdlcik7XG5cbiAgICBjb25zdCBtdXNocm9vbURlbGlnaHQgPSBuZXcgTWVudUl0ZW0obXVzaHJvb21EZWxpZ2h0SW1hZ2UsXG4gICAgICAgIFwiTXVzaHJvb20gRGVsaWdodFwiLFxuICAgICAgICBcIiQxNi41NVwiLFxuICAgICAgICBcIkkgaG9wZSB0aGVyZXMgbXVzaC1yb29tIGluIHlvdXIgbW91dGggZm9yIG1lLlwiLFxuICAgICAgICBcIlNpbmdsZSBjaGVlc2VidXJnZXIgd2l0aCBjaGVlc2Ugc2F1Y2UsIHJvYXN0ZWQgY2hpbGlzLCBsZXR0dWNlLCBhbmQgb2YgY291cnNlLCBtdXNocm9vbXMuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQobXVzaHJvb21EZWxpZ2h0KTtcblxuICAgIGNvbnN0IGNoaWNrZW5CdXJnZXIgPSBuZXcgTWVudUl0ZW0oY2hpY2tlbkJ1cmdlckltYWdlLFxuICAgICAgICBcIkNoaWNrZW4gQnVyZ2VyXCIsXG4gICAgICAgIFwiJDE1LjY1XCIsXG4gICAgICAgIFwiRG9uJ3QgSSBzb3VuZCBncmVhdD9cIixcbiAgICAgICAgXCJGcmllZCBjaGlja2VuIGJyZWFzdCB0b3BwZWQgd2l0aCBqYWxhcGVub3MsIGxldHR1Y2UsIHRvbWF0bywgY3VjdW1iZXIsIGNoZWVzZSwgYW5kIG91ciBhd2FyZCB3aW5uaW5nIGhvdXNlIHNhdWNlLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KGNoaWNrZW5CdXJnZXIpO1xuXG4gICAgY29uc3Qgc2xpZGVJbnRvWW9TbGlkZXJzID0gbmV3IE1lbnVJdGVtKHNsaWRlSW50b0ltYWdlLFxuICAgICAgICBcIlNsaWRlIEludG8gWW8gRE0gU2xpZGVyc1wiLFxuICAgICAgICBcIiQxMi40NVwiLFxuICAgICAgICBcIkhleXl5eSA7KVwiLFxuICAgICAgICBcIlR3byBiZWF1dGlmdWwgbWluaSBidXJnZXJzIHdpdGggZ3VhY2Ftb2xlLCBsZXR0dWNlLCByYWRpc2gsIGFuZCBvdXIgYXdhcmQgd2lubmluZyBob3VzZSBzYXVjZS5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChzbGlkZUludG9Zb1NsaWRlcnMpO1xuXG4gICAgY29uc3QgbWVnYUVnZ0J1cmdlciA9IG5ldyBNZW51SXRlbShtZWdhRWdnSW1hZ2UsXG4gICAgICAgIFwiTWVnYSBFZ2cgQnVyZ2VyXCIsXG4gICAgICAgIFwiJDE4LjIwXCIsXG4gICAgICAgIFwiRG9uJ3Qgd2UgYWxsIGxvdmUgZWdncz9cIixcbiAgICAgICAgXCJCdXJnZXIgdG9wcGVkIHdpdGggY2hlZXNlLCBiYWNvbiwgb3Zlci1lYXN5IGVnZyAoQ2hlZidzIGZhdm9yaXRlKSwgbGV0dHVjZSwgdG9tYXRvLCBhbmQgb3VyIGF3YXJkIHdpbm5pbmcgaG91c2Ugc2F1Y2UuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQobWVnYUVnZ0J1cmdlcik7XG5cbiAgICBjb25zdCBob3VzZVRlbmRlcnMgPSBuZXcgTWVudUl0ZW0oaG91c2VUZW5kZXJzSW1hZ2UsXG4gICAgICAgIFwiSG91c2UgVGVuZGVyc1wiLFxuICAgICAgICBcIiQ5LjI1XCIsXG4gICAgICAgIFwiRm9yIHRoZSBraWRzLCBvciBhZHVsdHMgd2hvIG5ldmVyIGdyZXcgdXAuXCIsXG4gICAgICAgIFwiRml2ZSBwaWVjZSBjaGlja2VuIHRlbmRlciwgc2VydmVkIHdpdGggQU1CVVJHRVIgZnJpZXMuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQoaG91c2VUZW5kZXJzKTtcblxuICAgIGNvbnN0IGFtYnVyZ2VyRnJpZXMgPSBuZXcgTWVudUl0ZW0oYW1idXJnZXJGcmllc0ltYWdlLFxuICAgICAgICBcIkFNQlVSR0VSIEZyaWVzXCIsXG4gICAgICAgIFwiJDUuMjVcIixcbiAgICAgICAgXCJJJ20gbmVjZXNzYXJ5LlwiLFxuICAgICAgICBcIkhvdXNlIGZyaWVzIHNlcnZlZCB3aXRoIGhpbWFsYXlhbiBrZXRjaHVwIGFuZCBmcnkgc2F1Y2UuIFRydWZmbGUgb3IgZ2FybGljIG9wdGlvbnMgZnJlZSBvZiBjaGFyZ2UuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQoYW1idXJnZXJGcmllcyk7XG5cbiAgICBjb25zdCBzb2RhID0gbmV3IE1lbnVJdGVtKHNvZGFJbWFnZSxcbiAgICAgICAgXCJTb2RhXCIsXG4gICAgICAgIFwiJDMuMjVcIixcbiAgICAgICAgXCJXZSBrbm93IHlvdSB3YW50IHNvbWUuXCIsXG4gICAgICAgIFwiV2Ugb25seSBzZXJ2ZSBDb2tlIG9yIERpZXQgQ29rZSwgaWYgeW91IHdhbnRlZCBzb21ldGhpbmcgZWxzZSBnZXQgd2F0ZXIuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQoc29kYSk7XG5cbiAgICBjb25zdCBkaXNjbGFpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXNjbGFpbWVyLmlubmVySFRNTCA9IFwiPGVtPkNvbnN1bWluZyByYXcgb3IgdW5kZXJjb29rZWQgbWVhdHMsIHBvdWx0cnksIHNlYWZvb2QsIHNoZWxsZmlzaCwgb3IgZWdncyBtYXkgaW5jcmVhc2UgeW91ciByaXNrIG9mIGZvb2Rib3JuZSBpbGxuZXNzLCBlc3BlY2lhbGx5IGlmIHlvdSBoYXZlIGNlcnRhaW4gbWVkaWNhbCBjb25kaXRpb25zLjxicj5JZiB5b3UgaGF2ZSBhIGZvb2QgYWxsZXJneSwgcGxlYXNlIG5vdGlmeSB5b3VyIHNlcnZlci48L2VtPlwiO1xuICAgIGRpc2NsYWltZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtZGlzY2xhaW1lclwiKTtcbiAgICBwYWdlLm1haW5Cb2R5LmFwcGVuZENoaWxkKGRpc2NsYWltZXIpO1xufVxuXG5mdW5jdGlvbiBNZW51SXRlbSAoaW1hZ2UsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGluZ3JlZGllbnRzKSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3TWVudUVsZW1lbnQobWVudUl0ZW0pIHtcbiAgICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgY29uc3QgYnVyZ2VySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBidXJnZXJJbWFnZS5zcmMgPSBtZW51SXRlbS5pbWFnZTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlckltYWdlKTtcbiAgICBjb25zdCBpdGVtVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyXCIpO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRleHRDb250YWluZXIpO1xuICAgIGNvbnN0IGl0ZW1IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHttZW51SXRlbS50aXRsZX0gKCR7bWVudUl0ZW0ucHJpY2V9KWA7XG4gICAgaXRlbVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUhlYWRpbmcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgJHttZW51SXRlbS5kZXNjcmlwdGlvbn08YnI+PGVtPiR7bWVudUl0ZW0uaW5ncmVkaWVudHN9PC9lbT5gO1xuICAgIGl0ZW1UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTWVudVBhZ2V9OyIsImltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuL2ltYWdlcy9naXRodWIucG5nXCI7XG5cbmNvbnN0IHdlYlBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgLy9DcmVhdGUgaGVhZGluZyBzZWN0aW9uXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgICBpdGVtcy5wdXNoKGhlYWRpbmcpO1xuXG4gICAgLy9DcmVhdGUgaGVhZGluZyB0ZXh0XG4gICAgY29uc3QgaGVhZGluZ1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZ1NlY3Rpb24pO1xuICAgIGNvbnN0IGhvbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhvbWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJBTUJVUkdFUlNcIjtcbiAgICBob21lSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkaW5nLXRleHRcIik7XG4gICAgaGVhZGluZ1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZUhlYWRpbmcpO1xuICAgIGhlYWRpbmdTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nLWNlbnRlci10ZXh0XCIpO1xuXG4gICAgY29uc3QgaG9tZUhlYWRpbmdTdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhvbWVIZWFkaW5nU3ViVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IGxpa2UgdGhlIGJ1cmdlcnMsIHdlIGp1c3QgbWFrZSB0aGVtLlwiO1xuICAgIGhvbWVIZWFkaW5nU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkaW5nLXN1YnRleHRcIik7XG4gICAgaGVhZGluZ1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZUhlYWRpbmdTdWJUZXh0KTtcblxuICAgIC8vQ3JlYXRlIGhlYWRpbmcgYnV0dG9uc1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICAgIGhlYWRpbmdTZWN0aW9uLmJlZm9yZShtZW51QnV0dG9uKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvblwiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ09OVEFDVCBVU1wiO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnV0dG9uXCIpO1xuXG4gICAgLy9DcmVhdGUgYm9keSBzZWN0aW9uXG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5hZGQoXCJtYWluLWJvZHktY29udGFpbmVyXCIpO1xuICAgIGl0ZW1zLnB1c2gobWFpbkJvZHkpO1xuXG4gICAgLy9DcmVhdGUgZm9vdGVyIHNlY3Rpb25cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiY29weXJpZ2h0LWZvb3RlclwiKTtcbiAgICBjb25zdCByZWRpcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHJlZGlyZWN0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbHVjYXMtYW1iZXJnXCIpO1xuICAgIHJlZGlyZWN0LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICBjb25zdCBnaXRodWJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdGh1YkltYWdlLnNyYyA9IGdpdGh1Ykljb247XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJlZGlyZWN0KTtcbiAgICByZWRpcmVjdC5hcHBlbmRDaGlsZChnaXRodWJJbWFnZSk7XG4gICAgY29uc3QgY29weXJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvcHlyaWdodFRleHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNhcy1hbWJlcmdcIik7XG4gICAgY29weXJpZ2h0VGV4dC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgY29weXJpZ2h0VGV4dC50ZXh0Q29udGVudCA9IFwiwqkgTHVjYXMgQW1iZXJnIDIwMjNcIjtcbiAgICBjb3B5cmlnaHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb3B5cmlnaHQtdGV4dFwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0VGV4dCk7XG4gICAgaXRlbXMucHVzaChmb290ZXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1zW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lcixcbiAgICAgICAgaGVhZGluZyxcbiAgICAgICAgbWFpbkJvZHksXG4gICAgICAgIGNvbnRhY3RCdXR0b24sXG4gICAgICAgIG1lbnVCdXR0b24sXG4gICAgICAgIGhlYWRpbmdTZWN0aW9uXG4gICAgfTtcbn07XG5cbmNvbnN0IHBhZ2UgPSB3ZWJQYWdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCJcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnUtcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0LXBhZ2VcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBob21lUGFnZSA9IGZhbHNlO1xubGV0IG1lbnVQYWdlID0gZmFsc2U7XG5sZXQgY29udGFjdFBhZ2UgPSB0cnVlO1xuXG4vL2NyZWF0ZUhvbWVQYWdlKCk7XG5cbi8vY3JlYXRlTWVudVBhZ2UoKTtcblxuY3JlYXRlQ29udGFjdFBhZ2UoKTtcblxucGFnZS5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBpZiAobWVudVBhZ2UgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGhvbWVQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBob21lUGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgbWVudVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250YWN0UGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGFjdFBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lbnVQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KVxuXG5wYWdlLmhlYWRpbmdTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBpZiAoaG9tZVBhZ2UgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKG1lbnVQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBtZW51UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgaG9tZVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlSG9tZVBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250YWN0UGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGFjdFBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGhvbWVQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNyZWF0ZUhvbWVQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KVxuXG5wYWdlLmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmIChjb250YWN0UGFnZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaG9tZVBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGhvbWVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBjb250YWN0UGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1lbnVQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBtZW51UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29udGFjdFBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
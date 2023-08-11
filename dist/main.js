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
    box-shadow: 0px 0px 0px -10px black;
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
    justify-content: center;
    height: 90vh;
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

.menu-button-mobile {
    display: none;
}


@media (max-width: 600px) {
    .heading {
        flex-direction: column;
        height: 80px;
    }
    .heading button {
        font-size: 0.9rem;
        height: 30px;
        width: 90px;
    }
    .heading button:hover {
        font-size: 0.9rem;
    }
    .menu-button {
        display: none;
    }
    .menu-button-mobile {
        display: block;
    }
    .heading-center-text {
        width: 300px;
    }
    .home-heading-text {
        font-size: 2rem;
    }
    .home-heading-subtext {
        font-size: 1rem;
    }
    #content {
        grid-template-rows: 100px auto;
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
    .contact-bubble {
        width: 300px;
        height: 800px;
    }
    .contact-form {
        width: 260px;
    }
    .info-bubble {
        width: 260px;
        text-align: center;
    }
    .info-bubble div {
        font-size: 1rem;
    }
    .info-bubble h3 {
        font-size: 1.4rem;
    }
    .contact-form label,
    .contact-form input,
    .contact-form textarea {
        width: 240px;
    }
    .menu-and-contact {
        display: flex;
        flex-direction: row;
        height: 40px;
        width: 100vw;
        align-items: center;
        justify-content: space-evenly;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Coolvetica Rg';\n    src: url('./fonts/CoolveticaRg-Regular.woff2') format('woff2'),\n        url('./fonts/CoolveticaRg-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n\n:root {\n    width: 100vw;\n    height: 100vh;\n    --light-color: #f2f2f2;\n    --orange-color: #f96d00;\n    --gray-color: #393e46;\n    --dark-color: #222831;\n    background-color: var(--gray-color);\n    margin: 0;\n    overflow-x: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 130px auto 30px;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    justify-items: center;\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n.burger-image {\n    height: 150px;\n    border-radius: 10px;\n}\n\n.home-heading-text {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    letter-spacing: 4px;\n    font-size: 4rem;\n    color: var(--light-color);\n    margin: 0;\n}\n\n.heading {\n    background-color: var(--orange-color);\n    display: flex;\n    width: 100vw;\n    height: 110px;\n    justify-content: space-evenly;\n    flex-direction: row;\n    position: sticky;\n    padding: 20px;\n    align-items: center;\n    box-shadow: 0px 0px 7px var(--dark-color);\n}\n\n.heading button {\n    width: min(14vw,180px);\n    height: 80px;\n    appearance: none;\n    font-family: \"Coolvetica Rg\", sans-serif;\n    background-color: var(--orange-color);\n    color: var(--light-color);\n    border: none;\n    border-radius: 10px;\n    font-size: min(2.5vw,1.5rem);\n}\n\n.heading button:hover {\n    background-color: var(--dark-color);\n    cursor: pointer;\n    color: var(--orange-color);\n    font-size: calc(1.1*min(2.5vw,1.5rem));\n}\n\n.heading-center-text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex: 0;\n    padding: 10px;\n    border-radius: 10px;\n    max-width: 500px;\n}\n\n.home-heading-subtext {\n    font-size: 1.5rem;\n    margin: 0;\n    font-family: \"Coolvetica Rg\";\n    color: var(--light-color);\n    text-align: center;\n    width: 400px;\n}\n\n.main-body-container {\n    padding: 40px;\n    gap: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\n.burger-hero-container {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n}\n\n.burger-hero-text {\n    font-size: max(0.7rem, min(3vw, 2rem));\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n}\n\n.address-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    padding-bottom: 20px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.address-section h2 {\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(4vw, 2.5rem));\n    color: var(--light-color);\n}\n\n.address-section div{\n    font-family: \"Coolvetica Rg\";\n    text-align: center;\n    font-size: min(3vw, 1.5rem);\n    color: var(--light-color);\n}\n\n.hours-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 300px;\n}\n\n.hours-section h2{\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.7rem, min(4vw, 2rem));\n    color: var(--light-color);\n}\n\n.hours-section h3 {\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.6rem, min(3.5vw, 1.7rem));\n    color: var(--light-color);\n}\n\n.hours-section div {\n    margin: 0;\n    font-family: \"Coolvetica Rg\";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(12vw, 6rem));\n    color: var(--light-color);\n}\n\n.heading-center-text:hover {\n    background-color: var(--dark-color);\n    border-radius: 20px;\n    padding: 10px;\n    cursor: pointer;\n}\n\n.menu-item img{\n    width: 250px;\n    border-radius: 10px;\n}\n\n.menu-item {\n    display: flex;\n    width: 500px;\n    background-color: var(--orange-color);\n    padding: 15px;\n    border-radius: 10px;\n    justify-content: space-around;\n    gap: 15px;\n    height: 207px;\n}\n\n.item-description-container {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n}\n\n.item-description-container h3 {\n    font-size: 1.5rem;\n}\n\n.item-description-container div>em {\n    font-size: 0.8rem;\n    margin-top: 20px;\n    display: block;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    width: 100vw;\n    gap: 20px;\n    justify-items: center;\n}\n\n.menu-disclaimer {\n    text-align: center;\n    color: var(--light-color);\n}\n\n.copyright-footer {\n    background-color: var(--orange-color);\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    box-shadow: 0px 0px 0px -10px black;\n}\n\n.copyright-text {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--dark-color);\n    text-decoration: none;\n}\n\n.copyright-footer a img {\n    height: 25px;\n}\n\n.copyright-footer a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-container {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-bubble {\n    width: 560px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    height: 90vh;\n    border-radius: 20px;\n    background-color: var(--orange-color);\n    padding: 20px;\n    gap: 20px;\n}\n\n.contact-form {\n    width: 400px;\n    background-color: var(--gray-color);\n    height: 500px;\n    padding: 20px;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-form label {\n    font-family: \"Coolvetica Rg\", sans-serif;\n    color: var(--light-color);\n    font-size: 1.5rem;\n    text-align: left;\n    width: 300px;\n    margin-top: 15px;\n}\n.contact-form input,\n.contact-form textarea,\n.contact-form button {\n    appearance: none;\n}\n\n.contact-form input {\n    width: 300px;\n    height: 2rem;\n    border: 0;\n    border-radius: 5px;\n    background-color: var(--light-color);\n    color: var(--dark-color);\n    font-family: sans-serif;\n    padding-left: 4px;\n}\n\n.contact-form textarea {\n    resize: none;\n    width: 300px;\n    border: 0;\n    border-radius: 5px;\n    height: 200px;\n    font-family: sans-serif;\n    padding-left: 4px;\n    padding-top: 3px;\n}\n\n.contact-form button {\n    margin-top: 20px;\n    width: 200px;\n    height: 50px;\n    font-family: \"Coolvetica Rg\", sans-serif;\n    font-size: 1.5rem;\n    border:0;\n    color: var(--light-color);\n    background-color: var(--orange-color);\n    border-radius: 10px;\n}\n\n.contact-form button:hover {\n    cursor: pointer;\n    background-color: var(--dark-color);\n    color: var(--orange-color);\n    font-size: 1.6rem;\n}\n\n.info-bubble {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    padding: 20px;\n    align-items: center;\n    background-color: var(--gray-color);\n    color: var(--light-color);\n    font-family: \"Coolvetica Rg\";\n    border-radius: 20px;\n    gap:10px;\n}\n\n.info-bubble h3 {\n    font-size: 1.7rem;\n}\n\n.info-bubble div {\n    font-size: 1.2rem;\n}\n\n.info-bubble :nth-child(4) {\n    text-align: center;\n}\n\n.menu-button-mobile {\n    display: none;\n}\n\n\n@media (max-width: 600px) {\n    .heading {\n        flex-direction: column;\n        height: 80px;\n    }\n    .heading button {\n        font-size: 0.9rem;\n        height: 30px;\n        width: 90px;\n    }\n    .heading button:hover {\n        font-size: 0.9rem;\n    }\n    .menu-button {\n        display: none;\n    }\n    .menu-button-mobile {\n        display: block;\n    }\n    .heading-center-text {\n        width: 300px;\n    }\n    .home-heading-text {\n        font-size: 2rem;\n    }\n    .home-heading-subtext {\n        font-size: 1rem;\n    }\n    #content {\n        grid-template-rows: 100px auto;\n    }\n    .menu-container {\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n    .menu-item {\n        width: 300px;\n        height: 140px;\n        padding: 7px;\n        border-radius: 5px;\n        gap: 8px;\n    }\n    .item-description-container h3 {\n        font-size: 1.2rem;\n    }\n    .item-description-container div {\n        font-size: 1rem;\n    }\n    .item-description-container div>em {\n        font-size: 0.5rem;\n        margin-top: 5px;\n    }\n    .menu-item img{\n        width: 125px;\n        border-radius: 10px;\n    }\n    .contact-bubble {\n        width: 300px;\n        height: 800px;\n    }\n    .contact-form {\n        width: 260px;\n    }\n    .info-bubble {\n        width: 260px;\n        text-align: center;\n    }\n    .info-bubble div {\n        font-size: 1rem;\n    }\n    .info-bubble h3 {\n        font-size: 1.4rem;\n    }\n    .contact-form label,\n    .contact-form input,\n    .contact-form textarea {\n        width: 240px;\n    }\n    .menu-and-contact {\n        display: flex;\n        flex-direction: row;\n        height: 40px;\n        width: 100vw;\n        align-items: center;\n        justify-content: space-evenly;\n    }\n}"],"sourceRoot":""}]);
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
    address.innerHTML = "Mail all packages to:<br>AMBURGERS Los Angeles<br>945 Oakmont St<br>Los Angeles, CA<br>90009";

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
        "Five piece chicken tender, served with pickles and AMBURGER fries.")
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

    const menuAndContactContainer = document.createElement("div");
    menuAndContactContainer.classList.add("menu-and-contact");
    heading.appendChild(menuAndContactContainer);

    const contactButton = document.createElement("button");
    menuAndContactContainer.appendChild(contactButton);
    contactButton.textContent = "CONTACT US";

    //Create mobile menu button
    const menuButtonMobile = document.createElement("button");
    menuAndContactContainer.appendChild(menuButtonMobile);
    heading.appendChild(menuButtonMobile);
    menuButtonMobile.textContent = "MENU";
    contactButton.before(menuButtonMobile);
    menuButtonMobile.classList.add("menu-button-mobile");

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
        headingSection,
        menuButtonMobile
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

/***/ "./src/images/char_broiled-cheeseburger.svg":
/*!**************************************************!*\
  !*** ./src/images/char_broiled-cheeseburger.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "078cc32d30bf9b20a54d.svg";

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
/* harmony import */ var _images_char_broiled_cheeseburger_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/char_broiled-cheeseburger.svg */ "./src/images/char_broiled-cheeseburger.svg");








//Create favicon
const favicon = document.createElement("link");
favicon.setAttribute("href", _images_char_broiled_cheeseburger_svg__WEBPACK_IMPORTED_MODULE_5__);
favicon.setAttribute("rel", "shortcut icon");
document.getElementsByTagName("head")[0].appendChild(favicon);


let homePage = true;
let menuPage = false;
let contactPage = false;

(0,_home_page__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();

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

_page__WEBPACK_IMPORTED_MODULE_0__["default"].menuButtonMobile.addEventListener("click", ()=> {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUFxRDtBQUNqRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdB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QUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEIsWUFBWSwwREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2Q0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBSTtBQUNoQixZQUFZLDBEQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBSTtBQUNoQixZQUFZLDBEQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDZDQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZDQUFJO0FBQ2hCLFlBQVksZ0VBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBSTtBQUNoQixZQUFZLGdFQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ29vbHZldGljYVJnLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0Nvb2x2ZXRpY2FSZy1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EgUmcnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuXG46cm9vdCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLS1saWdodC1jb2xvcjogI2YyZjJmMjtcbiAgICAtLW9yYW5nZS1jb2xvcjogI2Y5NmQwMDtcbiAgICAtLWdyYXktY29sb3I6ICMzOTNlNDY7XG4gICAgLS1kYXJrLWNvbG9yOiAjMjIyODMxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gMzBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmJ1cmdlci1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaG9tZS1oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmhlYWRpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHZhcigtLWRhcmstY29sb3IpO1xufVxuXG4uaGVhZGluZyBidXR0b24ge1xuICAgIHdpZHRoOiBtaW4oMTR2dywxODBweCk7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IG1pbigyLjV2dywxLjVyZW0pO1xufVxuXG4uaGVhZGluZyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IGNhbGMoMS4xKm1pbigyLjV2dywxLjVyZW0pKTtcbn1cblxuLmhlYWRpbmctY2VudGVyLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5ob21lLWhlYWRpbmctc3VidGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5tYWluLWJvZHktY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGdhcDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmJ1cmdlci1oZXJvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnVyZ2VyLWhlcm8tdGV4dCB7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oM3Z3LCAycmVtKSk7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5hZGRyZXNzLXNlY3Rpb24ge1xuICAgIHdpZHRoOiBtYXgoMzAwcHgsIG1pbig3MHZ3LDcwMHB4KSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkcmVzcy1zZWN0aW9uIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbig0dncsIDIuNXJlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5hZGRyZXNzLXNlY3Rpb24gZGl2e1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBtaW4oM3Z3LCAxLjVyZW0pO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5ob3Vycy1zZWN0aW9uIHtcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaG91cnMtc2VjdGlvbiBoMntcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oNHZ3LCAycmVtKSk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbn1cblxuLmhvdXJzLXNlY3Rpb24gaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IG1heCgwLjZyZW0sIG1pbigzLjV2dywgMS43cmVtKSk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbn1cblxuLmhvdXJzLXNlY3Rpb24gZGl2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oMTJ2dywgNnJlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5oZWFkaW5nLWNlbnRlci10ZXh0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1pdGVtIGltZ3tcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGhlaWdodDogMjA3cHg7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXY+ZW0ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtZGlzY2xhaW1lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5jb3B5cmlnaHQtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggLTEwcHggYmxhY2s7XG59XG5cbi5jb3B5cmlnaHQtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb3B5cmlnaHQtZm9vdGVyIGEgaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jb3B5cmlnaHQtZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC1idWJibGUge1xuICAgIHdpZHRoOiA1NjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWZvcm0gbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY29udGFjdC1mb3JtIGlucHV0LFxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSxcbi5jb250YWN0LWZvcm0gYnV0dG9uIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4uY29udGFjdC1mb3JtIGlucHV0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOjA7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5pbmZvLWJ1YmJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBnYXA6MTBweDtcbn1cblxuLmluZm8tYnViYmxlIGgzIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLmluZm8tYnViYmxlIGRpdiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5pbmZvLWJ1YmJsZSA6bnRoLWNoaWxkKDQpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51LWJ1dHRvbi1tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmhlYWRpbmcge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgfVxuICAgIC5oZWFkaW5nIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cbiAgICAuaGVhZGluZyBidXR0b246aG92ZXIge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gICAgLm1lbnUtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1lbnUtYnV0dG9uLW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGluZy1jZW50ZXItdGV4dCB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG4gICAgLmhvbWUtaGVhZGluZy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAuaG9tZS1oZWFkaW5nLXN1YnRleHQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgICNjb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvO1xuICAgIH1cbiAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICB9XG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGRpdj5lbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICAgIC5tZW51LWl0ZW0gaW1ne1xuICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIC5jb250YWN0LWJ1YmJsZSB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICB9XG4gICAgLmNvbnRhY3QtZm9ybSB7XG4gICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICB9XG4gICAgLmluZm8tYnViYmxlIHtcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbmZvLWJ1YmJsZSBkaXYge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5pbmZvLWJ1YmJsZSBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIH1cbiAgICAuY29udGFjdC1mb3JtIGxhYmVsLFxuICAgIC5jb250YWN0LWZvcm0gaW5wdXQsXG4gICAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICB9XG4gICAgLm1lbnUtYW5kLWNvbnRhY3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1Qjs4REFDMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixh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Zm9udC1mYW1pbHk6ICdDb29sdmV0aWNhIFJnJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ29vbHZldGljYVJnLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJy4vZm9udHMvQ29vbHZldGljYVJnLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuXFxuOnJvb3Qge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIC0tbGlnaHQtY29sb3I6ICNmMmYyZjI7XFxuICAgIC0tb3JhbmdlLWNvbG9yOiAjZjk2ZDAwO1xcbiAgICAtLWdyYXktY29sb3I6ICMzOTNlNDY7XFxuICAgIC0tZGFyay1jb2xvcjogIzIyMjgzMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTMwcHggYXV0byAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmJ1cmdlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5ob21lLWhlYWRpbmctdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHZhcigtLWRhcmstY29sb3IpO1xcbn1cXG5cXG4uaGVhZGluZyBidXR0b24ge1xcbiAgICB3aWR0aDogbWluKDE0dncsMTgwcHgpO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBtaW4oMi41dncsMS41cmVtKTtcXG59XFxuXFxuLmhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjEqbWluKDIuNXZ3LDEuNXJlbSkpO1xcbn1cXG5cXG4uaGVhZGluZy1jZW50ZXItdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uaG9tZS1oZWFkaW5nLXN1YnRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLm1haW4tYm9keS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5idXJnZXItaGVyby1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXJnZXItaGVyby10ZXh0IHtcXG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oM3Z3LCAycmVtKSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5hZGRyZXNzLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZHJlc3Mtc2VjdGlvbiBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDR2dywgMi41cmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5hZGRyZXNzLXNlY3Rpb24gZGl2e1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbWluKDN2dywgMS41cmVtKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uaG91cnMtc2VjdGlvbiBoMntcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbig0dncsIDJyZW0pKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24gaDMge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDAuNnJlbSwgbWluKDMuNXZ3LCAxLjdyZW0pKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24gZGl2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbigxMnZ3LCA2cmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5oZWFkaW5nLWNlbnRlci10ZXh0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWd7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiAyMDdweDtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXY+ZW0ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTAwcHgsIDFmcikpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1kaXNjbGFpbWVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uY29weXJpZ2h0LWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAtMTBweCBibGFjaztcXG59XFxuXFxuLmNvcHlyaWdodC10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb3B5cmlnaHQtZm9vdGVyIGEgaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uY29weXJpZ2h0LWZvb3RlciBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWJ1YmJsZSB7XFxuICAgIHdpZHRoOiA1NjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5jb250YWN0LWZvcm0gaW5wdXQsXFxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSxcXG4uY29udGFjdC1mb3JtIGJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5jb250YWN0LWZvcm0gaW5wdXQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjowO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmluZm8tYnViYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZ2FwOjEwcHg7XFxufVxcblxcbi5pbmZvLWJ1YmJsZSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uaW5mby1idWJibGUgZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5pbmZvLWJ1YmJsZSA6bnRoLWNoaWxkKDQpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1idXR0b24tbW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5oZWFkaW5nIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIH1cXG4gICAgLmhlYWRpbmcgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgIH1cXG4gICAgLmhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB9XFxuICAgIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5tZW51LWJ1dHRvbi1tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLmhlYWRpbmctY2VudGVyLXRleHQge1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuICAgIC5ob21lLWhlYWRpbmctdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLmhvbWUtaGVhZGluZy1zdWJ0ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAjY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XFxuICAgIH1cXG4gICAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICB9XFxuICAgIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGdhcDogOHB4O1xcbiAgICB9XFxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2PmVtIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICB9XFxuICAgIC5tZW51LWl0ZW0gaW1ne1xcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1idWJibGUge1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgfVxcbiAgICAuY29udGFjdC1mb3JtIHtcXG4gICAgICAgIHdpZHRoOiAyNjBweDtcXG4gICAgfVxcbiAgICAuaW5mby1idWJibGUge1xcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5pbmZvLWJ1YmJsZSBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuICAgIC5pbmZvLWJ1YmJsZSBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgfVxcbiAgICAuY29udGFjdC1mb3JtIGxhYmVsLFxcbiAgICAuY29udGFjdC1mb3JtIGlucHV0LFxcbiAgICAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgfVxcbiAgICAubWVudS1hbmQtY29udGFjdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RCdWJibGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnViYmxlXCIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1YmJsZSk7XG5cbiAgICAvL0NyZWF0ZSBmb3JtXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1mb3JtXCIpO1xuICAgIGNvbnRhY3RCdWJibGUuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gXCJFbWFpbDpcIjtcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsXCIpO1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZW1haWxJbnB1dC50eXBlID0gXCJlbWFpbFwiO1xuICAgIGVtYWlsSW5wdXQuaWQgPSBcImVtYWlsXCI7XG4gICAgZW1haWxJbnB1dC5uYW1lID0gXCJlbWFpbFwiO1xuXG4gICAgY29uc3QgY29udGFjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnRhY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUmVhc29uIGZvciBjb250YWN0aW5nOlwiO1xuICAgIGNvbnRhY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBjb250YWN0SW5wdXQuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBjb250YWN0SW5wdXQubmFtZSA9IFwiY29udGFjdFwiO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTVUJNSVQgRk9STVwiO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGVtYWlsSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBjb250YWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH0pXG5cbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdExhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChjb250YWN0SW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgLy9FbmQgb2YgZm9ybVxuXG4gICAgLy9DcmVhdGUgcGhvbmUgbnVtYmVyLCBlbWFpbCwgYWRkcmVzcyBzZWN0aW9uXG4gICAgY29uc3QgaW5mb0J1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaW5mb0J1YmJsZS5jbGFzc0xpc3QuYWRkKFwiaW5mby1idWJibGVcIik7XG4gICAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJZb3UgY2FuIGFsc28gcmVhY2ggdXMgYXQ6XCI7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJIVE1MID0gXCJQaG9uZTogPGVtPisxICg1MjYpIEFNQi1VUkdSPC9lbT5cIjtcbiAgICBlbWFpbEFkZHJlc3MuaW5uZXJIVE1MID0gXCJFbWFpbDogPGVtPmNvbnRhY3R1c0BhbWJ1cmdlcnMuY29tPC9lbT5cIjtcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IFwiTWFpbCBhbGwgcGFja2FnZXMgdG86PGJyPkFNQlVSR0VSUyBMb3MgQW5nZWxlczxicj45NDUgT2FrbW9udCBTdDxicj5Mb3MgQW5nZWxlcywgQ0E8YnI+OTAwMDlcIjtcblxuICAgIGNvbnRhY3RCdWJibGUuYXBwZW5kQ2hpbGQoaW5mb0J1YmJsZSk7XG4gICAgaW5mb0J1YmJsZS5hcHBlbmRDaGlsZChpbmZvVGl0bGUpO1xuICAgIGluZm9CdWJibGUuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICAgIGluZm9CdWJibGUuYXBwZW5kQ2hpbGQoZW1haWxBZGRyZXNzKTtcbiAgICBpbmZvQnViYmxlLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG59XG5cbmV4cG9ydCB7Y3JlYXRlQ29udGFjdFBhZ2V9OyIsImltcG9ydCBidXJnZXJJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYnVyZ2VyLWltYWdlLmpwZ1wiXG5pbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICAgIC8vQ3JlYXRlIGJ1cmdlciBoZXJvICgxc3QgaGVybylcbiAgICBjb25zdCBidXJnZXJIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJnZXJIZXJvLmNsYXNzTGlzdC5hZGQoXCJidXJnZXItaGVyby1jb250YWluZXJcIik7XG4gICAgY29uc3QgYnVyZ2VySGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cmdlckhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJidXJnZXItaGVyby10ZXh0XCIpO1xuICAgIGJ1cmdlckhlcm9UZXh0LnRleHRDb250ZW50ID0gXCJXZSBoYXZlIHRoZSB3b3JsZHMgbnVtYmVyIG9uZSBidXNzaWVzdCBidXNzLCBhbmQgd2UgY2FuIHByb3ZlIGl0LlwiO1xuXG4gICAgLy9BZGQgYnVyZ2VyIGltYWdlIHRvIGhlcm9cbiAgICBjb25zdCBob21lQnVyZ2VySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBob21lQnVyZ2VySW1hZ2Uuc3JjID0gYnVyZ2VySW1hZ2U7XG4gICAgaG9tZUJ1cmdlckltYWdlLmNsYXNzTGlzdC5hZGQoXCJidXJnZXItaW1hZ2VcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChidXJnZXJIZXJvKTtcbiAgICBidXJnZXJIZXJvLmFwcGVuZENoaWxkKGhvbWVCdXJnZXJJbWFnZSk7XG4gICAgYnVyZ2VySGVyby5hcHBlbmRDaGlsZChidXJnZXJIZXJvVGV4dCk7XG5cbiAgICAvL0NyZWF0ZSBhZGRyZXNzIHNlY3Rpb25cbiAgICBjb25zdCBhZGRyZXNzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChhZGRyZXNzU2VjdGlvbik7XG5cbiAgICBjb25zdCBhZGRyZXNzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGFkZHJlc3NTZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkZXIpO1xuICAgIGFkZHJlc3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbWUgdmlzaXQgdXMhXCJcblxuICAgIGNvbnN0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRyZXNzU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzVGV4dCk7XG4gICAgYWRkcmVzc1RleHQuaW5uZXJIVE1MID0gXCI5NDUgT2FrbW9udCBTdHJlZXQ8YnI+TG9zIEFuZ2VsZXMsIENBPGJyPjkwMDA5XCI7XG5cbiAgICBhZGRyZXNzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzcy1zZWN0aW9uXCIpO1xuXG4gICAgLy9DcmVhdGUgaG91cnMgc2VjdGlvblxuICAgIGNvbnN0IGhvdXJzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChob3Vyc1NlY3Rpb24pO1xuICAgIGhvdXJzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG91cnMtc2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhvdXJzRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXG4gICAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJXZSBhcmUgb3BlblwiO1xuICAgIGhvdXJzVGV4dC50ZXh0Q29udGVudCA9IFwiMjQvNy8zNjVcIjtcbiAgICBob3Vyc0Zvb3Rlci50ZXh0Q29udGVudCA9IFwiQmVjYXVzZSB5b3UganVzdCBjb3VsZG4ndCBnZXQgZW5vdWdoLlwiO1xuXG4gICAgaG91cnNTZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG4gICAgaG91cnNTZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJzVGV4dCk7XG4gICAgaG91cnNTZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJzRm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfTsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5cbmltcG9ydCBidXNzeUJ1cmdlckltYWdlIGZyb20gXCIuL2ltYWdlcy9idXJnZXItaW1hZ2UuanBnXCI7XG5pbXBvcnQgbGF1cmFuZ2VySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2xhdXJhbmdlci5qcGdcIjtcbmltcG9ydCBtdXNocm9vbURlbGlnaHRJbWFnZSBmcm9tIFwiLi9pbWFnZXMvbXVzaHJvb20tZGVsaWdodC5qcGdcIjtcbmltcG9ydCBjaGlja2VuQnVyZ2VySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2NoaWNrZW4tYnVyZ2VyLmpwZ1wiXG5pbXBvcnQgc2xpZGVJbnRvSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3NsaWRlLWludG8teW8tZG0uanBnXCJcbmltcG9ydCBtZWdhRWdnSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL21lZ2EtZWdnLWJ1cmdlci5qcGdcIlxuaW1wb3J0IGFtYnVyZ2VyRnJpZXNJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYW1idXJnZXItZnJpZXMuanBnXCJcbmltcG9ydCBob3VzZVRlbmRlcnNJbWFnZSBmcm9tIFwiLi9pbWFnZXMvaG91c2UtdGVuZGVycy5qcGdcIlxuaW1wb3J0IHNvZGFJbWFnZSBmcm9tIFwiLi9pbWFnZXMvc29kYS5qcGdcIlxuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgICBwYWdlLm1haW5Cb2R5LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgY29uc3QgYnVzc3lCdXJnZXIgPSBuZXcgTWVudUl0ZW0oYnVzc3lCdXJnZXJJbWFnZSwgXCJCdXNzeSBCdXJnZXJcIiwgXCIkMTUuNjVcIiwgXG4gICAgXCJUaGUgYnVzc2llc3QgYnVzcyB5b3UnbGwgZXZlciBzZWUuIE91ciBhd2FyZCB3aW5uZXIuXCIsXG4gICAgXCJDbGFzc2ljIGRvdWJsZSBzbWFzaGJ1cmdlciB3aXRoIGNoZWRkYXIgY2hlZXNlLCB0b21hdG9lcywgY2hpbGllcywgYmFjb24sIGFuZCBvdXIgYXdhcmQgd2lubmluZyBob3VzZSBzYXVjZS5cIik7XG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQoYnVzc3lCdXJnZXIpO1xuICAgIFxuICAgIGNvbnN0IGxhdXJhbmdlciA9IG5ldyBNZW51SXRlbShsYXVyYW5nZXJJbWFnZSwgXG4gICAgICAgIFwiVGhlIExhdXJhbmdlclwiLFxuICAgICAgICBcIiQxNC4zNVwiLFxuICAgICAgICBcIllvdXIgbmV3IGZhdm9yaXRlIGtpbmQgb2YgY2hlZXNlYnVyZ2VyLiBUaGUgc2V4aWVzdCB5b3UgY2FuIGdldC5cIixcbiAgICAgICAgXCJTaW5nbGUgY2hlZXNlYnVyZ2VyIHdpdGggZG91YmxlIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvLCBhbmQgb3VyIGF3YXJkIHdpbm5pbmcgaG91c2Ugc2F1Y2UgYWxsIG9uIGEgdGFzdHkgYnJpb2NoZSBidW5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChsYXVyYW5nZXIpO1xuXG4gICAgY29uc3QgbXVzaHJvb21EZWxpZ2h0ID0gbmV3IE1lbnVJdGVtKG11c2hyb29tRGVsaWdodEltYWdlLFxuICAgICAgICBcIk11c2hyb29tIERlbGlnaHRcIixcbiAgICAgICAgXCIkMTYuNTVcIixcbiAgICAgICAgXCJJIGhvcGUgdGhlcmVzIG11c2gtcm9vbSBpbiB5b3VyIG1vdXRoIGZvciBtZS5cIixcbiAgICAgICAgXCJTaW5nbGUgY2hlZXNlYnVyZ2VyIHdpdGggY2hlZXNlIHNhdWNlLCByb2FzdGVkIGNoaWxpcywgbGV0dHVjZSwgYW5kIG9mIGNvdXJzZSwgbXVzaHJvb21zLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KG11c2hyb29tRGVsaWdodCk7XG5cbiAgICBjb25zdCBjaGlja2VuQnVyZ2VyID0gbmV3IE1lbnVJdGVtKGNoaWNrZW5CdXJnZXJJbWFnZSxcbiAgICAgICAgXCJDaGlja2VuIEJ1cmdlclwiLFxuICAgICAgICBcIiQxNS42NVwiLFxuICAgICAgICBcIkRvbid0IEkgc291bmQgZ3JlYXQ/XCIsXG4gICAgICAgIFwiRnJpZWQgY2hpY2tlbiBicmVhc3QgdG9wcGVkIHdpdGggamFsYXBlbm9zLCBsZXR0dWNlLCB0b21hdG8sIGN1Y3VtYmVyLCBjaGVlc2UsIGFuZCBvdXIgYXdhcmQgd2lubmluZyBob3VzZSBzYXVjZS5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChjaGlja2VuQnVyZ2VyKTtcblxuICAgIGNvbnN0IHNsaWRlSW50b1lvU2xpZGVycyA9IG5ldyBNZW51SXRlbShzbGlkZUludG9JbWFnZSxcbiAgICAgICAgXCJTbGlkZSBJbnRvIFlvIERNIFNsaWRlcnNcIixcbiAgICAgICAgXCIkMTIuNDVcIixcbiAgICAgICAgXCJIZXl5eXkgOylcIixcbiAgICAgICAgXCJUd28gYmVhdXRpZnVsIG1pbmkgYnVyZ2VycyB3aXRoIGd1YWNhbW9sZSwgbGV0dHVjZSwgcmFkaXNoLCBhbmQgb3VyIGF3YXJkIHdpbm5pbmcgaG91c2Ugc2F1Y2UuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQoc2xpZGVJbnRvWW9TbGlkZXJzKTtcblxuICAgIGNvbnN0IG1lZ2FFZ2dCdXJnZXIgPSBuZXcgTWVudUl0ZW0obWVnYUVnZ0ltYWdlLFxuICAgICAgICBcIk1lZ2EgRWdnIEJ1cmdlclwiLFxuICAgICAgICBcIiQxOC4yMFwiLFxuICAgICAgICBcIkRvbid0IHdlIGFsbCBsb3ZlIGVnZ3M/XCIsXG4gICAgICAgIFwiQnVyZ2VyIHRvcHBlZCB3aXRoIGNoZWVzZSwgYmFjb24sIG92ZXItZWFzeSBlZ2cgKENoZWYncyBmYXZvcml0ZSksIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBhd2FyZCB3aW5uaW5nIGhvdXNlIHNhdWNlLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KG1lZ2FFZ2dCdXJnZXIpO1xuXG4gICAgY29uc3QgaG91c2VUZW5kZXJzID0gbmV3IE1lbnVJdGVtKGhvdXNlVGVuZGVyc0ltYWdlLFxuICAgICAgICBcIkhvdXNlIFRlbmRlcnNcIixcbiAgICAgICAgXCIkOS4yNVwiLFxuICAgICAgICBcIkZvciB0aGUga2lkcywgb3IgYWR1bHRzIHdobyBuZXZlciBncmV3IHVwLlwiLFxuICAgICAgICBcIkZpdmUgcGllY2UgY2hpY2tlbiB0ZW5kZXIsIHNlcnZlZCB3aXRoIHBpY2tsZXMgYW5kIEFNQlVSR0VSIGZyaWVzLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KGhvdXNlVGVuZGVycyk7XG5cbiAgICBjb25zdCBhbWJ1cmdlckZyaWVzID0gbmV3IE1lbnVJdGVtKGFtYnVyZ2VyRnJpZXNJbWFnZSxcbiAgICAgICAgXCJBTUJVUkdFUiBGcmllc1wiLFxuICAgICAgICBcIiQ1LjI1XCIsXG4gICAgICAgIFwiSSdtIG5lY2Vzc2FyeS5cIixcbiAgICAgICAgXCJIb3VzZSBmcmllcyBzZXJ2ZWQgd2l0aCBoaW1hbGF5YW4ga2V0Y2h1cCBhbmQgZnJ5IHNhdWNlLiBUcnVmZmxlIG9yIGdhcmxpYyBvcHRpb25zIGZyZWUgb2YgY2hhcmdlLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KGFtYnVyZ2VyRnJpZXMpO1xuXG4gICAgY29uc3Qgc29kYSA9IG5ldyBNZW51SXRlbShzb2RhSW1hZ2UsXG4gICAgICAgIFwiU29kYVwiLFxuICAgICAgICBcIiQzLjI1XCIsXG4gICAgICAgIFwiV2Uga25vdyB5b3Ugd2FudCBzb21lLlwiLFxuICAgICAgICBcIldlIG9ubHkgc2VydmUgQ29rZSBvciBEaWV0IENva2UsIGlmIHlvdSB3YW50ZWQgc29tZXRoaW5nIGVsc2UgZ2V0IHdhdGVyLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KHNvZGEpO1xuXG4gICAgY29uc3QgZGlzY2xhaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzY2xhaW1lci5pbm5lckhUTUwgPSBcIjxlbT5Db25zdW1pbmcgcmF3IG9yIHVuZGVyY29va2VkIG1lYXRzLCBwb3VsdHJ5LCBzZWFmb29kLCBzaGVsbGZpc2gsIG9yIGVnZ3MgbWF5IGluY3JlYXNlIHlvdXIgcmlzayBvZiBmb29kYm9ybmUgaWxsbmVzcywgZXNwZWNpYWxseSBpZiB5b3UgaGF2ZSBjZXJ0YWluIG1lZGljYWwgY29uZGl0aW9ucy48YnI+SWYgeW91IGhhdmUgYSBmb29kIGFsbGVyZ3ksIHBsZWFzZSBub3RpZnkgeW91ciBzZXJ2ZXIuPC9lbT5cIjtcbiAgICBkaXNjbGFpbWVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWRpc2NsYWltZXJcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChkaXNjbGFpbWVyKTtcbn1cblxuZnVuY3Rpb24gTWVudUl0ZW0gKGltYWdlLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbmdyZWRpZW50cykge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld01lbnVFbGVtZW50KG1lbnVJdGVtKSB7XG4gICAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIGNvbnN0IGJ1cmdlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgYnVyZ2VySW1hZ2Uuc3JjID0gbWVudUl0ZW0uaW1hZ2U7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJJbWFnZSk7XG4gICAgY29uc3QgaXRlbVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1UZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0Q29udGFpbmVyKTtcbiAgICBjb25zdCBpdGVtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1IZWFkaW5nLnRleHRDb250ZW50ID0gYCR7bWVudUl0ZW0udGl0bGV9ICgke21lbnVJdGVtLnByaWNlfSlgO1xuICAgIGl0ZW1UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1IZWFkaW5nKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYCR7bWVudUl0ZW0uZGVzY3JpcHRpb259PGJyPjxlbT4ke21lbnVJdGVtLmluZ3JlZGllbnRzfTwvZW0+YDtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQge2NyZWF0ZU1lbnVQYWdlfTsiLCJpbXBvcnQgZ2l0aHViSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnBuZ1wiO1xuXG5jb25zdCB3ZWJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgIC8vQ3JlYXRlIGhlYWRpbmcgc2VjdGlvblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gICAgaXRlbXMucHVzaChoZWFkaW5nKTtcblxuICAgIC8vQ3JlYXRlIGhlYWRpbmcgdGV4dFxuICAgIGNvbnN0IGhlYWRpbmdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmdTZWN0aW9uKTtcbiAgICBjb25zdCBob21lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBob21lSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQU1CVVJHRVJTXCI7XG4gICAgaG9tZUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVhZGluZy10ZXh0XCIpO1xuICAgIGhlYWRpbmdTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVIZWFkaW5nKTtcbiAgICBoZWFkaW5nU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZy1jZW50ZXItdGV4dFwiKTtcblxuICAgIGNvbnN0IGhvbWVIZWFkaW5nU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBob21lSGVhZGluZ1N1YlRleHQudGV4dENvbnRlbnQgPSBcIllvdSBsaWtlIHRoZSBidXJnZXJzLCB3ZSBqdXN0IG1ha2UgdGhlbS5cIjtcbiAgICBob21lSGVhZGluZ1N1YlRleHQuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVhZGluZy1zdWJ0ZXh0XCIpO1xuICAgIGhlYWRpbmdTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVIZWFkaW5nU3ViVGV4dCk7XG5cbiAgICAvL0NyZWF0ZSBoZWFkaW5nIGJ1dHRvbnNcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBoZWFkaW5nU2VjdGlvbi5iZWZvcmUobWVudUJ1dHRvbik7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XG5cbiAgICBjb25zdCBtZW51QW5kQ29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUFuZENvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtYW5kLWNvbnRhY3RcIik7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChtZW51QW5kQ29udGFjdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QW5kQ29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDT05UQUNUIFVTXCI7XG5cbiAgICAvL0NyZWF0ZSBtb2JpbGUgbWVudSBidXR0b25cbiAgICBjb25zdCBtZW51QnV0dG9uTW9iaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QW5kQ29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uTW9iaWxlKTtcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKG1lbnVCdXR0b25Nb2JpbGUpO1xuICAgIG1lbnVCdXR0b25Nb2JpbGUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBjb250YWN0QnV0dG9uLmJlZm9yZShtZW51QnV0dG9uTW9iaWxlKTtcbiAgICBtZW51QnV0dG9uTW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvbi1tb2JpbGVcIik7XG5cbiAgICAvL0NyZWF0ZSBib2R5IHNlY3Rpb25cbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkJvZHkuY2xhc3NMaXN0LmFkZChcIm1haW4tYm9keS1jb250YWluZXJcIik7XG4gICAgaXRlbXMucHVzaChtYWluQm9keSk7XG5cbiAgICAvL0NyZWF0ZSBmb290ZXIgc2VjdGlvblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJjb3B5cmlnaHQtZm9vdGVyXCIpO1xuICAgIGNvbnN0IHJlZGlyZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgcmVkaXJlY3Quc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNhcy1hbWJlcmdcIik7XG4gICAgcmVkaXJlY3Quc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgIGNvbnN0IGdpdGh1YkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZ2l0aHViSW1hZ2Uuc3JjID0gZ2l0aHViSWNvbjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocmVkaXJlY3QpO1xuICAgIHJlZGlyZWN0LmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgICBjb25zdCBjb3B5cmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29weXJpZ2h0VGV4dC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2x1Y2FzLWFtYmVyZ1wiKTtcbiAgICBjb3B5cmlnaHRUZXh0LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICBjb3B5cmlnaHRUZXh0LnRleHRDb250ZW50ID0gXCLCqSBMdWNhcyBBbWJlcmcgMjAyM1wiO1xuICAgIGNvcHlyaWdodFRleHQuY2xhc3NMaXN0LmFkZChcImNvcHlyaWdodC10ZXh0XCIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0KTtcbiAgICBpdGVtcy5wdXNoKGZvb3Rlcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLFxuICAgICAgICBoZWFkaW5nLFxuICAgICAgICBtYWluQm9keSxcbiAgICAgICAgY29udGFjdEJ1dHRvbixcbiAgICAgICAgbWVudUJ1dHRvbixcbiAgICAgICAgaGVhZGluZ1NlY3Rpb24sXG4gICAgICAgIG1lbnVCdXR0b25Nb2JpbGVcbiAgICB9O1xufTtcblxuY29uc3QgcGFnZSA9IHdlYlBhZ2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlIGZyb20gXCIuL3BhZ2VcIlxuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3QtcGFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGJ1cmdlckZhdmljb24gZnJvbSBcIi4vaW1hZ2VzL2NoYXJfYnJvaWxlZC1jaGVlc2VidXJnZXIuc3ZnXCI7XG5cbi8vQ3JlYXRlIGZhdmljb25cbmNvbnN0IGZhdmljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbmZhdmljb24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBidXJnZXJGYXZpY29uKTtcbmZhdmljb24uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic2hvcnRjdXQgaWNvblwiKTtcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChmYXZpY29uKTtcblxuXG5sZXQgaG9tZVBhZ2UgPSB0cnVlO1xubGV0IG1lbnVQYWdlID0gZmFsc2U7XG5sZXQgY29udGFjdFBhZ2UgPSBmYWxzZTtcblxuY3JlYXRlSG9tZVBhZ2UoKTtcblxucGFnZS5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBpZiAobWVudVBhZ2UgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGhvbWVQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBob21lUGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgbWVudVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250YWN0UGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGFjdFBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lbnVQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KVxuXG5wYWdlLm1lbnVCdXR0b25Nb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmIChtZW51UGFnZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaG9tZVBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGhvbWVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBtZW51UGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVNZW51UGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhY3RQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250YWN0UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgbWVudVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pXG5cbnBhZ2UuaGVhZGluZ1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmIChob21lUGFnZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAobWVudVBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lbnVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBob21lUGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhY3RQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250YWN0UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgaG9tZVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlSG9tZVBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pXG5cbnBhZ2UuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKGNvbnRhY3RQYWdlICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChob21lUGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaG9tZVBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVudVBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lbnVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBjb250YWN0UGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUFxRDtBQUNqRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsNkNBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEIsWUFBWSwwREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEIsWUFBWSwwREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2Q0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBSTtBQUNoQixZQUFZLGdFQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEIsWUFBWSxnRUFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0Nvb2x2ZXRpY2FSZy1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Db29sdmV0aWNhUmctUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhIFJnJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cblxuOnJvb3Qge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC0tbGlnaHQtY29sb3I6ICNmMmYyZjI7XG4gICAgLS1vcmFuZ2UtY29sb3I6ICNmOTZkMDA7XG4gICAgLS1ncmF5LWNvbG9yOiAjMzkzZTQ2O1xuICAgIC0tZGFyay1jb2xvcjogIzIyMjgzMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yKTtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCBhdXRvIDMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5idXJnZXItaW1hZ2Uge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmhvbWUtaGVhZGluZy10ZXh0IHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCIsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCB2YXIoLS1kYXJrLWNvbG9yKTtcbn1cblxuLmhlYWRpbmcgYnV0dG9uIHtcbiAgICB3aWR0aDogbWluKDE0dncsMTgwcHgpO1xuICAgIGhlaWdodDogODBweDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiBtaW4oMi41dncsMS41cmVtKTtcbn1cblxuLmhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuMSptaW4oMi41dncsMS41cmVtKSk7XG59XG5cbi5oZWFkaW5nLWNlbnRlci10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uaG9tZS1oZWFkaW5nLXN1YnRleHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubWFpbi1ib2R5LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBnYXA6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5idXJnZXItaGVyby1jb250YWluZXIge1xuICAgIHdpZHRoOiBtYXgoMzAwcHgsIG1pbig3MHZ3LDcwMHB4KSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1cmdlci1oZXJvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDN2dywgMnJlbSkpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uYWRkcmVzcy1zZWN0aW9uIHtcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oNzB2dyw3MDBweCkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZHJlc3Mtc2VjdGlvbiBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oNHZ3LCAyLjVyZW0pKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uYWRkcmVzcy1zZWN0aW9uIGRpdntcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogbWluKDN2dywgMS41cmVtKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uaG91cnMtc2VjdGlvbiB7XG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmhvdXJzLXNlY3Rpb24gaDJ7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDR2dywgMnJlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5ob3Vycy1zZWN0aW9uIGgzIHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBtYXgoMC42cmVtLCBtaW4oMy41dncsIDEuN3JlbSkpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5ob3Vycy1zZWN0aW9uIGRpdiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDEydncsIDZyZW0pKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uaGVhZGluZy1jZW50ZXItdGV4dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtaXRlbSBpbWd7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGdhcDogMTVweDtcbiAgICBoZWlnaHQ6IDIwN3B4O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2PmVtIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MDBweCwgMWZyKSk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWRpc2NsYWltZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uY29weXJpZ2h0LWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IC0xMHB4IGJsYWNrO1xufVxuXG4uY29weXJpZ2h0LXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvb2x2ZXRpY2EgUmdcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29weXJpZ2h0LWZvb3RlciBhIGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uY29weXJpZ2h0LWZvb3RlciBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtYnViYmxlIHtcbiAgICB3aWR0aDogNTYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1mb3JtIGxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJDb29sdmV0aWNhIFJnXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhY3QtZm9ybSBpbnB1dCxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEsXG4uY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNvbnRhY3QtZm9ybSBpbnB1dCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlcjowO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uaW5mby1idWJibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29vbHZldGljYSBSZ1wiO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZ2FwOjEwcHg7XG59XG5cbi5pbmZvLWJ1YmJsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5pbmZvLWJ1YmJsZSBkaXYge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaW5mby1idWJibGUgOm50aC1jaGlsZCg0KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVudS1idXR0b24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgICAuaGVhZGluZyBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gICAgLmhlYWRpbmcgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIC5tZW51LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tZW51LWJ1dHRvbi1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmhlYWRpbmctY2VudGVyLXRleHQge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIC5ob21lLWhlYWRpbmctdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgLmhvbWUtaGVhZGluZy1zdWJ0ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAjY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0bztcbiAgICB9XG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgfVxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXYge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXY+ZW0ge1xuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICAubWVudS1pdGVtIGltZ3tcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAuY29udGFjdC1idWJibGUge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgfVxuICAgIC5jb250YWN0LWZvcm0ge1xuICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgfVxuICAgIC5pbmZvLWJ1YmJsZSB7XG4gICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaW5mby1idWJibGUgZGl2IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaW5mby1idWJibGUgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gICAgLmNvbnRhY3QtZm9ybSBsYWJlbCxcbiAgICAuY29udGFjdC1mb3JtIGlucHV0LFxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgfVxuICAgIC5tZW51LWFuZC1jb250YWN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUI7OERBQzJEO0lBQzNELG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIs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NEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksMkRBQTJEO0lBQy9EO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsUUFBUTtJQUNaO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7OztRQUdJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsNkJBQTZCO0lBQ2pDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSBSZyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0Nvb2x2ZXRpY2FSZy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCcuL2ZvbnRzL0Nvb2x2ZXRpY2FSZy1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcblxcbjpyb290IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAtLWxpZ2h0LWNvbG9yOiAjZjJmMmYyO1xcbiAgICAtLW9yYW5nZS1jb2xvcjogI2Y5NmQwMDtcXG4gICAgLS1ncmF5LWNvbG9yOiAjMzkzZTQ2O1xcbiAgICAtLWRhcmstY29sb3I6ICMyMjI4MzE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3IpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5idXJnZXItaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaG9tZS1oZWFkaW5nLXRleHQge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCB2YXIoLS1kYXJrLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRpbmcgYnV0dG9uIHtcXG4gICAgd2lkdGg6IG1pbigxNHZ3LDE4MHB4KTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZ3LDEuNXJlbSk7XFxufVxcblxcbi5oZWFkaW5nIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICBmb250LXNpemU6IGNhbGMoMS4xKm1pbigyLjV2dywxLjVyZW0pKTtcXG59XFxuXFxuLmhlYWRpbmctY2VudGVyLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmhvbWUtaGVhZGluZy1zdWJ0ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5tYWluLWJvZHktY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uYnVyZ2VyLWhlcm8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnVyZ2VyLWhlcm8tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDAuN3JlbSwgbWluKDN2dywgMnJlbSkpO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uYWRkcmVzcy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGRyZXNzLXNlY3Rpb24gaDIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IG1heCgwLjdyZW0sIG1pbig0dncsIDIuNXJlbSkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uYWRkcmVzcy1zZWN0aW9uIGRpdntcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IG1pbigzdncsIDEuNXJlbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKDcwdncsNzAwcHgpKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmhvdXJzLXNlY3Rpb24gaDJ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oNHZ3LCAycmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIGgzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IG1heCgwLjZyZW0sIG1pbigzLjV2dywgMS43cmVtKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIGRpdiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb29sdmV0aWNhIFJnXFxcIjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiBtYXgoMC43cmVtLCBtaW4oMTJ2dywgNnJlbSkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uaGVhZGluZy1jZW50ZXItdGV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1ne1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogMjA3cHg7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgZGl2PmVtIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtZGlzY2xhaW1lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuLmNvcHlyaWdodC1mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sb3IpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggLTEwcHggYmxhY2s7XFxufVxcblxcbi5jb3B5cmlnaHQtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29weXJpZ2h0LWZvb3RlciBhIGltZyB7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNvcHlyaWdodC1mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1idWJibGUge1xcbiAgICB3aWR0aDogNTYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWZvcm0gbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvb2x2ZXRpY2EgUmdcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uY29udGFjdC1mb3JtIGlucHV0LFxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEsXFxuLmNvbnRhY3QtZm9ybSBidXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbi5jb250YWN0LWZvcm0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5pbmZvLWJ1YmJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ29vbHZldGljYSBSZ1xcXCI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4uaW5mby1idWJibGUgaDMge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmluZm8tYnViYmxlIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaW5mby1idWJibGUgOm50aC1jaGlsZCg0KSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtYnV0dG9uLW1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuaGVhZGluZyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB9XFxuICAgIC5oZWFkaW5nIGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICB9XFxuICAgIC5oZWFkaW5nIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcbiAgICAubWVudS1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAubWVudS1idXR0b24tbW9iaWxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5oZWFkaW5nLWNlbnRlci10ZXh0IHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcbiAgICAuaG9tZS1oZWFkaW5nLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIC5ob21lLWhlYWRpbmctc3VidGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBhdXRvO1xcbiAgICB9XFxuICAgIC5tZW51LWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgfVxcbiAgICAubWVudS1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMTQwcHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBnYXA6IDhweDtcXG4gICAgfVxcbiAgICAuaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgLml0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIGRpdj5lbSB7XFxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgfVxcbiAgICAubWVudS1pdGVtIGltZ3tcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtYnViYmxlIHtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogODAwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtZm9ybSB7XFxuICAgICAgICB3aWR0aDogMjYwcHg7XFxuICAgIH1cXG4gICAgLmluZm8tYnViYmxlIHtcXG4gICAgICAgIHdpZHRoOiAyNjBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuaW5mby1idWJibGUgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAuaW5mby1idWJibGUgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIH1cXG4gICAgLmNvbnRhY3QtZm9ybSBsYWJlbCxcXG4gICAgLmNvbnRhY3QtZm9ybSBpbnB1dCxcXG4gICAgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgIH1cXG4gICAgLm1lbnUtYW5kLWNvbnRhY3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb250YWN0QnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0QnViYmxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ1YmJsZVwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdWJibGUpO1xuXG4gICAgLy9DcmVhdGUgZm9ybVxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZm9ybVwiKTtcbiAgICBjb250YWN0QnViYmxlLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcblxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSBcIm5hbWVcIjtcblxuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWw6XCI7XG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVtYWlsSW5wdXQudHlwZSA9IFwiZW1haWxcIjtcbiAgICBlbWFpbElucHV0LmlkID0gXCJlbWFpbFwiO1xuICAgIGVtYWlsSW5wdXQubmFtZSA9IFwiZW1haWxcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb250YWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlJlYXNvbiBmb3IgY29udGFjdGluZzpcIjtcbiAgICBjb250YWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29udGFjdFwiKTtcbiAgICBjb25zdCBjb250YWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgY29udGFjdElucHV0LmlkID0gXCJjb250YWN0XCI7XG4gICAgY29udGFjdElucHV0Lm5hbWUgPSBcImNvbnRhY3RcIjtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU1VCTUlUIEZPUk1cIjtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBlbWFpbElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgY29udGFjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KVxuXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdElucHV0KTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgIC8vRW5kIG9mIGZvcm1cblxuICAgIC8vQ3JlYXRlIHBob25lIG51bWJlciwgZW1haWwsIGFkZHJlc3Mgc2VjdGlvblxuICAgIGNvbnN0IGluZm9CdWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGluZm9CdWJibGUuY2xhc3NMaXN0LmFkZChcImluZm8tYnViYmxlXCIpO1xuICAgIGluZm9UaXRsZS50ZXh0Q29udGVudCA9IFwiWW91IGNhbiBhbHNvIHJlYWNoIHVzIGF0OlwiO1xuICAgIHBob25lTnVtYmVyLmlubmVySFRNTCA9IFwiUGhvbmU6IDxlbT4rMSAoNTI2KSBBTUItVVJHUjwvZW0+XCI7XG4gICAgZW1haWxBZGRyZXNzLmlubmVySFRNTCA9IFwiRW1haWw6IDxlbT5jb250YWN0dXNAYW1idXJnZXJzLmNvbTwvZW0+XCI7XG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIk1haWwgYWxsIHBhY2thZ2VzIHRvOjxicj5BTUJVUkdFUlMgTG9zIEFuZ2VsZXM8YnI+OTQ1IE9ha21vbnQgU3Q8YnI+TG9zIEFuZ2VsZXMsIENBPGJyPjkwMDA5XCI7XG5cbiAgICBjb250YWN0QnViYmxlLmFwcGVuZENoaWxkKGluZm9CdWJibGUpO1xuICAgIGluZm9CdWJibGUuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlKTtcbiAgICBpbmZvQnViYmxlLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICBpbmZvQnViYmxlLmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzcyk7XG4gICAgaW5mb0J1YmJsZS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxufVxuXG5leHBvcnQge2NyZWF0ZUNvbnRhY3RQYWdlfTsiLCJpbXBvcnQgYnVyZ2VySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2J1cmdlci1pbWFnZS5qcGdcIlxuaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgICAvL0NyZWF0ZSBidXJnZXIgaGVybyAoMXN0IGhlcm8pXG4gICAgY29uc3QgYnVyZ2VySGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnVyZ2VySGVyby5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWhlcm8tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJ1cmdlckhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJnZXJIZXJvVGV4dC5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWhlcm8tdGV4dFwiKTtcbiAgICBidXJnZXJIZXJvVGV4dC50ZXh0Q29udGVudCA9IFwiV2UgaGF2ZSB0aGUgd29ybGRzIG51bWJlciBvbmUgYnVzc2llc3QgYnVzcywgYW5kIHdlIGNhbiBwcm92ZSBpdC5cIjtcblxuICAgIC8vQWRkIGJ1cmdlciBpbWFnZSB0byBoZXJvXG4gICAgY29uc3QgaG9tZUJ1cmdlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaG9tZUJ1cmdlckltYWdlLnNyYyA9IGJ1cmdlckltYWdlO1xuICAgIGhvbWVCdXJnZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWltYWdlXCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoYnVyZ2VySGVybyk7XG4gICAgYnVyZ2VySGVyby5hcHBlbmRDaGlsZChob21lQnVyZ2VySW1hZ2UpO1xuICAgIGJ1cmdlckhlcm8uYXBwZW5kQ2hpbGQoYnVyZ2VySGVyb1RleHQpO1xuXG4gICAgLy9DcmVhdGUgYWRkcmVzcyBzZWN0aW9uXG4gICAgY29uc3QgYWRkcmVzc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkcmVzc1NlY3Rpb24pO1xuXG4gICAgY29uc3QgYWRkcmVzc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhZGRyZXNzU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGVyKTtcbiAgICBhZGRyZXNzSGVhZGVyLnRleHRDb250ZW50ID0gXCJDb21lIHZpc2l0IHVzIVwiXG5cbiAgICBjb25zdCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkcmVzc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xuICAgIGFkZHJlc3NUZXh0LmlubmVySFRNTCA9IFwiOTQ1IE9ha21vbnQgU3RyZWV0PGJyPkxvcyBBbmdlbGVzLCBDQTxicj45MDAwOVwiO1xuXG4gICAgYWRkcmVzc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFkZHJlc3Mtc2VjdGlvblwiKTtcblxuICAgIC8vQ3JlYXRlIGhvdXJzIHNlY3Rpb25cbiAgICBjb25zdCBob3Vyc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoaG91cnNTZWN0aW9uKTtcbiAgICBob3Vyc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvdXJzLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgaG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3Vyc0Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblxuICAgIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2UgYXJlIG9wZW5cIjtcbiAgICBob3Vyc1RleHQudGV4dENvbnRlbnQgPSBcIjI0LzcvMzY1XCI7XG4gICAgaG91cnNGb290ZXIudGV4dENvbnRlbnQgPSBcIkJlY2F1c2UgeW91IGp1c3QgY291bGRuJ3QgZ2V0IGVub3VnaC5cIjtcblxuICAgIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICAgIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc1RleHQpO1xuICAgIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc0Zvb3Rlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH07IiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuXG5pbXBvcnQgYnVzc3lCdXJnZXJJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYnVyZ2VyLWltYWdlLmpwZ1wiO1xuaW1wb3J0IGxhdXJhbmdlckltYWdlIGZyb20gXCIuL2ltYWdlcy9sYXVyYW5nZXIuanBnXCI7XG5pbXBvcnQgbXVzaHJvb21EZWxpZ2h0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL211c2hyb29tLWRlbGlnaHQuanBnXCI7XG5pbXBvcnQgY2hpY2tlbkJ1cmdlckltYWdlIGZyb20gXCIuL2ltYWdlcy9jaGlja2VuLWJ1cmdlci5qcGdcIlxuaW1wb3J0IHNsaWRlSW50b0ltYWdlIGZyb20gXCIuL2ltYWdlcy9zbGlkZS1pbnRvLXlvLWRtLmpwZ1wiXG5pbXBvcnQgbWVnYUVnZ0ltYWdlIGZyb20gXCIuL2ltYWdlcy9tZWdhLWVnZy1idXJnZXIuanBnXCJcbmltcG9ydCBhbWJ1cmdlckZyaWVzSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2FtYnVyZ2VyLWZyaWVzLmpwZ1wiXG5pbXBvcnQgaG91c2VUZW5kZXJzSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2hvdXNlLXRlbmRlcnMuanBnXCJcbmltcG9ydCBzb2RhSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3NvZGEuanBnXCJcblxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG4gICAgcGFnZS5tYWluQm9keS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ1c3N5QnVyZ2VyID0gbmV3IE1lbnVJdGVtKGJ1c3N5QnVyZ2VySW1hZ2UsIFwiQnVzc3kgQnVyZ2VyXCIsIFwiJDE1LjY1XCIsIFxuICAgIFwiVGhlIGJ1c3NpZXN0IGJ1c3MgeW91J2xsIGV2ZXIgc2VlLiBPdXIgYXdhcmQgd2lubmVyLlwiLFxuICAgIFwiQ2xhc3NpYyBkb3VibGUgc21hc2hidXJnZXIgd2l0aCBjaGVkZGFyIGNoZWVzZSwgdG9tYXRvZXMsIGNoaWxpZXMsIGJhY29uLCBhbmQgb3VyIGF3YXJkIHdpbm5pbmcgaG91c2Ugc2F1Y2UuXCIpO1xuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KGJ1c3N5QnVyZ2VyKTtcbiAgICBcbiAgICBjb25zdCBsYXVyYW5nZXIgPSBuZXcgTWVudUl0ZW0obGF1cmFuZ2VySW1hZ2UsIFxuICAgICAgICBcIlRoZSBMYXVyYW5nZXJcIixcbiAgICAgICAgXCIkMTQuMzVcIixcbiAgICAgICAgXCJZb3VyIG5ldyBmYXZvcml0ZSBraW5kIG9mIGNoZWVzZWJ1cmdlci4gVGhlIHNleGllc3QgeW91IGNhbiBnZXQuXCIsXG4gICAgICAgIFwiU2luZ2xlIGNoZWVzZWJ1cmdlciB3aXRoIGRvdWJsZSBjaGVlc2UsIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBhd2FyZCB3aW5uaW5nIGhvdXNlIHNhdWNlIGFsbCBvbiBhIHRhc3R5IGJyaW9jaGUgYnVuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQobGF1cmFuZ2VyKTtcblxuICAgIGNvbnN0IG11c2hyb29tRGVsaWdodCA9IG5ldyBNZW51SXRlbShtdXNocm9vbURlbGlnaHRJbWFnZSxcbiAgICAgICAgXCJNdXNocm9vbSBEZWxpZ2h0XCIsXG4gICAgICAgIFwiJDE2LjU1XCIsXG4gICAgICAgIFwiSSBob3BlIHRoZXJlcyBtdXNoLXJvb20gaW4geW91ciBtb3V0aCBmb3IgbWUuXCIsXG4gICAgICAgIFwiU2luZ2xlIGNoZWVzZWJ1cmdlciB3aXRoIGNoZWVzZSBzYXVjZSwgcm9hc3RlZCBjaGlsaXMsIGxldHR1Y2UsIGFuZCBvZiBjb3Vyc2UsIG11c2hyb29tcy5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChtdXNocm9vbURlbGlnaHQpO1xuXG4gICAgY29uc3QgY2hpY2tlbkJ1cmdlciA9IG5ldyBNZW51SXRlbShjaGlja2VuQnVyZ2VySW1hZ2UsXG4gICAgICAgIFwiQ2hpY2tlbiBCdXJnZXJcIixcbiAgICAgICAgXCIkMTUuNjVcIixcbiAgICAgICAgXCJEb24ndCBJIHNvdW5kIGdyZWF0P1wiLFxuICAgICAgICBcIkZyaWVkIGNoaWNrZW4gYnJlYXN0IHRvcHBlZCB3aXRoIGphbGFwZW5vcywgbGV0dHVjZSwgdG9tYXRvLCBjdWN1bWJlciwgY2hlZXNlLCBhbmQgb3VyIGF3YXJkIHdpbm5pbmcgaG91c2Ugc2F1Y2UuXCIpXG4gICAgY3JlYXRlTmV3TWVudUVsZW1lbnQoY2hpY2tlbkJ1cmdlcik7XG5cbiAgICBjb25zdCBzbGlkZUludG9Zb1NsaWRlcnMgPSBuZXcgTWVudUl0ZW0oc2xpZGVJbnRvSW1hZ2UsXG4gICAgICAgIFwiU2xpZGUgSW50byBZbyBETSBTbGlkZXJzXCIsXG4gICAgICAgIFwiJDEyLjQ1XCIsXG4gICAgICAgIFwiSGV5eXl5IDspXCIsXG4gICAgICAgIFwiVHdvIGJlYXV0aWZ1bCBtaW5pIGJ1cmdlcnMgd2l0aCBndWFjYW1vbGUsIGxldHR1Y2UsIHJhZGlzaCwgYW5kIG91ciBhd2FyZCB3aW5uaW5nIGhvdXNlIHNhdWNlLlwiKVxuICAgIGNyZWF0ZU5ld01lbnVFbGVtZW50KHNsaWRlSW50b1lvU2xpZGVycyk7XG5cbiAgICBjb25zdCBtZWdhRWdnQnVyZ2VyID0gbmV3IE1lbnVJdGVtKG1lZ2FFZ2dJbWFnZSxcbiAgICAgICAgXCJNZWdhIEVnZyBCdXJnZXJcIixcbiAgICAgICAgXCIkMTguMjBcIixcbiAgICAgICAgXCJEb24ndCB3ZSBhbGwgbG92ZSBlZ2dzP1wiLFxuICAgICAgICBcIkJ1cmdlciB0b3BwZWQgd2l0aCBjaGVlc2UsIGJhY29uLCBvdmVyLWVhc3kgZWdnIChDaGVmJ3MgZmF2b3JpdGUpLCBsZXR0dWNlLCB0b21hdG8sIGFuZCBvdXIgYXdhcmQgd2lubmluZyBob3VzZSBzYXVjZS5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChtZWdhRWdnQnVyZ2VyKTtcblxuICAgIGNvbnN0IGhvdXNlVGVuZGVycyA9IG5ldyBNZW51SXRlbShob3VzZVRlbmRlcnNJbWFnZSxcbiAgICAgICAgXCJIb3VzZSBUZW5kZXJzXCIsXG4gICAgICAgIFwiJDkuMjVcIixcbiAgICAgICAgXCJGb3IgdGhlIGtpZHMsIG9yIGFkdWx0cyB3aG8gbmV2ZXIgZ3JldyB1cC5cIixcbiAgICAgICAgXCJGaXZlIHBpZWNlIGNoaWNrZW4gdGVuZGVyLCBzZXJ2ZWQgd2l0aCBwaWNrbGVzIGFuZCBBTUJVUkdFUiBmcmllcy5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChob3VzZVRlbmRlcnMpO1xuXG4gICAgY29uc3QgYW1idXJnZXJGcmllcyA9IG5ldyBNZW51SXRlbShhbWJ1cmdlckZyaWVzSW1hZ2UsXG4gICAgICAgIFwiQU1CVVJHRVIgRnJpZXNcIixcbiAgICAgICAgXCIkNS4yNVwiLFxuICAgICAgICBcIkknbSBuZWNlc3NhcnkuXCIsXG4gICAgICAgIFwiSG91c2UgZnJpZXMgc2VydmVkIHdpdGggaGltYWxheWFuIGtldGNodXAgYW5kIGZyeSBzYXVjZS4gVHJ1ZmZsZSBvciBnYXJsaWMgb3B0aW9ucyBmcmVlIG9mIGNoYXJnZS5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChhbWJ1cmdlckZyaWVzKTtcblxuICAgIGNvbnN0IHNvZGEgPSBuZXcgTWVudUl0ZW0oc29kYUltYWdlLFxuICAgICAgICBcIlNvZGFcIixcbiAgICAgICAgXCIkMy4yNVwiLFxuICAgICAgICBcIldlIGtub3cgeW91IHdhbnQgc29tZS5cIixcbiAgICAgICAgXCJXZSBvbmx5IHNlcnZlIENva2Ugb3IgRGlldCBDb2tlLCBpZiB5b3Ugd2FudGVkIHNvbWV0aGluZyBlbHNlIGdldCB3YXRlci5cIilcbiAgICBjcmVhdGVOZXdNZW51RWxlbWVudChzb2RhKTtcblxuICAgIGNvbnN0IGRpc2NsYWltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpc2NsYWltZXIuaW5uZXJIVE1MID0gXCI8ZW0+Q29uc3VtaW5nIHJhdyBvciB1bmRlcmNvb2tlZCBtZWF0cywgcG91bHRyeSwgc2VhZm9vZCwgc2hlbGxmaXNoLCBvciBlZ2dzIG1heSBpbmNyZWFzZSB5b3VyIHJpc2sgb2YgZm9vZGJvcm5lIGlsbG5lc3MsIGVzcGVjaWFsbHkgaWYgeW91IGhhdmUgY2VydGFpbiBtZWRpY2FsIGNvbmRpdGlvbnMuPGJyPklmIHlvdSBoYXZlIGEgZm9vZCBhbGxlcmd5LCBwbGVhc2Ugbm90aWZ5IHlvdXIgc2VydmVyLjwvZW0+XCI7XG4gICAgZGlzY2xhaW1lci5jbGFzc0xpc3QuYWRkKFwibWVudS1kaXNjbGFpbWVyXCIpO1xuICAgIHBhZ2UubWFpbkJvZHkuYXBwZW5kQ2hpbGQoZGlzY2xhaW1lcik7XG59XG5cbmZ1bmN0aW9uIE1lbnVJdGVtIChpbWFnZSwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgaW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdNZW51RWxlbWVudChtZW51SXRlbSkge1xuICAgIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICBjb25zdCBidXJnZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmdlckltYWdlLnNyYyA9IG1lbnVJdGVtLmltYWdlO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VySW1hZ2UpO1xuICAgIGNvbnN0IGl0ZW1UZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXJcIik7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGV4dENvbnRhaW5lcik7XG4gICAgY29uc3QgaXRlbUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtSGVhZGluZy50ZXh0Q29udGVudCA9IGAke21lbnVJdGVtLnRpdGxlfSAoJHttZW51SXRlbS5wcmljZX0pYDtcbiAgICBpdGVtVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSGVhZGluZyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke21lbnVJdGVtLmRlc2NyaXB0aW9ufTxicj48ZW0+JHttZW51SXRlbS5pbmdyZWRpZW50c308L2VtPmA7XG4gICAgaXRlbVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVNZW51UGFnZX07IiwiaW1wb3J0IGdpdGh1Ykljb24gZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi5wbmdcIjtcblxuY29uc3Qgd2ViUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAvL0NyZWF0ZSBoZWFkaW5nIHNlY3Rpb25cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICAgIGl0ZW1zLnB1c2goaGVhZGluZyk7XG5cbiAgICAvL0NyZWF0ZSBoZWFkaW5nIHRleHRcbiAgICBjb25zdCBoZWFkaW5nU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nU2VjdGlvbik7XG4gICAgY29uc3QgaG9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaG9tZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFNQlVSR0VSU1wiO1xuICAgIGhvbWVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRpbmctdGV4dFwiKTtcbiAgICBoZWFkaW5nU2VjdGlvbi5hcHBlbmRDaGlsZChob21lSGVhZGluZyk7XG4gICAgaGVhZGluZ1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhlYWRpbmctY2VudGVyLXRleHRcIik7XG5cbiAgICBjb25zdCBob21lSGVhZGluZ1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaG9tZUhlYWRpbmdTdWJUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgbGlrZSB0aGUgYnVyZ2Vycywgd2UganVzdCBtYWtlIHRoZW0uXCI7XG4gICAgaG9tZUhlYWRpbmdTdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRpbmctc3VidGV4dFwiKTtcbiAgICBoZWFkaW5nU2VjdGlvbi5hcHBlbmRDaGlsZChob21lSGVhZGluZ1N1YlRleHQpO1xuXG4gICAgLy9DcmVhdGUgaGVhZGluZyBidXR0b25zXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgaGVhZGluZ1NlY3Rpb24uYmVmb3JlKG1lbnVCdXR0b24pO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgbWVudUFuZENvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVBbmRDb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWFuZC1jb250YWN0XCIpO1xuICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQobWVudUFuZENvbnRhY3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUFuZENvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ09OVEFDVCBVU1wiO1xuXG4gICAgLy9DcmVhdGUgbW9iaWxlIG1lbnUgYnV0dG9uXG4gICAgY29uc3QgbWVudUJ1dHRvbk1vYmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUFuZENvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbk1vYmlsZSk7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChtZW51QnV0dG9uTW9iaWxlKTtcbiAgICBtZW51QnV0dG9uTW9iaWxlLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgY29udGFjdEJ1dHRvbi5iZWZvcmUobWVudUJ1dHRvbk1vYmlsZSk7XG4gICAgbWVudUJ1dHRvbk1vYmlsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b24tbW9iaWxlXCIpO1xuXG4gICAgLy9DcmVhdGUgYm9keSBzZWN0aW9uXG4gICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Cb2R5LmNsYXNzTGlzdC5hZGQoXCJtYWluLWJvZHktY29udGFpbmVyXCIpO1xuICAgIGl0ZW1zLnB1c2gobWFpbkJvZHkpO1xuXG4gICAgLy9DcmVhdGUgZm9vdGVyIHNlY3Rpb25cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiY29weXJpZ2h0LWZvb3RlclwiKTtcbiAgICBjb25zdCByZWRpcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHJlZGlyZWN0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbHVjYXMtYW1iZXJnXCIpO1xuICAgIHJlZGlyZWN0LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICBjb25zdCBnaXRodWJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdGh1YkltYWdlLnNyYyA9IGdpdGh1Ykljb247XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJlZGlyZWN0KTtcbiAgICByZWRpcmVjdC5hcHBlbmRDaGlsZChnaXRodWJJbWFnZSk7XG4gICAgY29uc3QgY29weXJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvcHlyaWdodFRleHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNhcy1hbWJlcmdcIik7XG4gICAgY29weXJpZ2h0VGV4dC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgY29weXJpZ2h0VGV4dC50ZXh0Q29udGVudCA9IFwiwqkgTHVjYXMgQW1iZXJnIDIwMjNcIjtcbiAgICBjb3B5cmlnaHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb3B5cmlnaHQtdGV4dFwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0VGV4dCk7XG4gICAgaXRlbXMucHVzaChmb290ZXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1zW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lcixcbiAgICAgICAgaGVhZGluZyxcbiAgICAgICAgbWFpbkJvZHksXG4gICAgICAgIGNvbnRhY3RCdXR0b24sXG4gICAgICAgIG1lbnVCdXR0b24sXG4gICAgICAgIGhlYWRpbmdTZWN0aW9uLFxuICAgICAgICBtZW51QnV0dG9uTW9iaWxlXG4gICAgfTtcbn07XG5cbmNvbnN0IHBhZ2UgPSB3ZWJQYWdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZSBmcm9tIFwiLi9wYWdlXCJcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnUtcGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0LXBhZ2VcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBob21lUGFnZSA9IHRydWU7XG5sZXQgbWVudVBhZ2UgPSBmYWxzZTtcbmxldCBjb250YWN0UGFnZSA9IGZhbHNlO1xuXG5jcmVhdGVIb21lUGFnZSgpO1xuXG5wYWdlLm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmIChtZW51UGFnZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaG9tZVBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGhvbWVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBtZW51UGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVNZW51UGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRhY3RQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250YWN0UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgbWVudVBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pXG5cbnBhZ2UubWVudUJ1dHRvbk1vYmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKG1lbnVQYWdlICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChob21lUGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaG9tZVBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lbnVQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGFjdFBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBtZW51UGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVNZW51UGFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSlcblxucGFnZS5oZWFkaW5nU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKGhvbWVQYWdlICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChtZW51UGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWVudVBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGhvbWVQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNyZWF0ZUhvbWVQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGFjdFBhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBob21lUGFnZSA9IHRydWU7XG4gICAgICAgICAgICBwYWdlLm1haW5Cb2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSlcblxucGFnZS5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBpZiAoY29udGFjdFBhZ2UgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGhvbWVQYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBob21lUGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29udGFjdFBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgcGFnZS5tYWluQm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZW51UGFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWVudVBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhZ2UubWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
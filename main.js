(()=>{"use strict";var t={"./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var n=t(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=t.n(n),o=t(/*! ../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=t.n(o),r=t(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */"./node_modules/css-loader/dist/runtime/getUrl.js"),r=t.n(r),a=new URL(t(/*! ./fonts/CoolveticaRg-Regular.woff2 */"./src/fonts/CoolveticaRg-Regular.woff2"),t.b),t=new URL(t(/*! ./fonts/CoolveticaRg-Regular.woff */"./src/fonts/CoolveticaRg-Regular.woff"),t.b),o=o()(n()),n=r()(a),a=r()(t);o.push([e.id,`@font-face {
    font-family: 'Coolvetica Rg';
    src: url(${n}) format('woff2'),
        url(${a}) format('woff');
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
}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:['@font-face {\n    font-family: \'Coolvetica Rg\';\n    src: url(\'./fonts/CoolveticaRg-Regular.woff2\') format(\'woff2\'),\n        url(\'./fonts/CoolveticaRg-Regular.woff\') format(\'woff\');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n\n:root {\n    width: 100vw;\n    height: 100vh;\n    --light-color: #f2f2f2;\n    --orange-color: #f96d00;\n    --gray-color: #393e46;\n    --dark-color: #222831;\n    background-color: var(--gray-color);\n    margin: 0;\n    overflow-x: hidden;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 130px auto 30px;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    justify-items: center;\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n.burger-image {\n    height: 150px;\n    border-radius: 10px;\n}\n\n.home-heading-text {\n    font-family: "Coolvetica Rg", sans-serif;\n    letter-spacing: 4px;\n    font-size: 4rem;\n    color: var(--light-color);\n    margin: 0;\n}\n\n.heading {\n    background-color: var(--orange-color);\n    display: flex;\n    width: 100vw;\n    height: 110px;\n    justify-content: space-evenly;\n    flex-direction: row;\n    position: sticky;\n    padding: 20px;\n    align-items: center;\n    box-shadow: 0px 0px 7px var(--dark-color);\n}\n\n.heading button {\n    width: min(14vw,180px);\n    height: 80px;\n    appearance: none;\n    font-family: "Coolvetica Rg", sans-serif;\n    background-color: var(--orange-color);\n    color: var(--light-color);\n    border: none;\n    border-radius: 10px;\n    font-size: min(2.5vw,1.5rem);\n}\n\n.heading button:hover {\n    background-color: var(--dark-color);\n    cursor: pointer;\n    color: var(--orange-color);\n    font-size: calc(1.1*min(2.5vw,1.5rem));\n}\n\n.heading-center-text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex: 0;\n    padding: 10px;\n    border-radius: 10px;\n    max-width: 500px;\n}\n\n.home-heading-subtext {\n    font-size: 1.5rem;\n    margin: 0;\n    font-family: "Coolvetica Rg";\n    color: var(--light-color);\n    text-align: center;\n    width: 400px;\n}\n\n.main-body-container {\n    padding: 40px;\n    gap: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\n.burger-hero-container {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n}\n\n.burger-hero-text {\n    font-size: max(0.7rem, min(3vw, 2rem));\n    font-family: "Coolvetica Rg", sans-serif;\n    color: var(--light-color);\n}\n\n.address-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    padding-bottom: 20px;\n    border-radius: 10px;\n    gap: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.address-section h2 {\n    font-family: "Coolvetica Rg";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(4vw, 2.5rem));\n    color: var(--light-color);\n}\n\n.address-section div{\n    font-family: "Coolvetica Rg";\n    text-align: center;\n    font-size: min(3vw, 1.5rem);\n    color: var(--light-color);\n}\n\n.hours-section {\n    width: max(300px, min(70vw,700px));\n    background: var(--orange-color);\n    display: flex;\n    padding: 15px;\n    border-radius: 10px;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 300px;\n}\n\n.hours-section h2{\n    font-family: "Coolvetica Rg";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.7rem, min(4vw, 2rem));\n    color: var(--light-color);\n}\n\n.hours-section h3 {\n    font-family: "Coolvetica Rg";\n    letter-spacing: 1px;\n    margin: 0;\n    font-size: max(0.6rem, min(3.5vw, 1.7rem));\n    color: var(--light-color);\n}\n\n.hours-section div {\n    margin: 0;\n    font-family: "Coolvetica Rg";\n    letter-spacing: 1px;\n    font-size: max(0.7rem, min(12vw, 6rem));\n    color: var(--light-color);\n}\n\n.heading-center-text:hover {\n    background-color: var(--dark-color);\n    border-radius: 20px;\n    padding: 10px;\n    cursor: pointer;\n}\n\n.menu-item img{\n    width: 250px;\n    border-radius: 10px;\n}\n\n.menu-item {\n    display: flex;\n    width: 500px;\n    background-color: var(--orange-color);\n    padding: 15px;\n    border-radius: 10px;\n    justify-content: space-around;\n    gap: 15px;\n    height: 207px;\n}\n\n.item-description-container {\n    font-family: "Coolvetica Rg", sans-serif;\n    color: var(--light-color);\n}\n\n.item-description-container h3 {\n    font-size: 1.5rem;\n}\n\n.item-description-container div>em {\n    font-size: 0.8rem;\n    margin-top: 20px;\n    display: block;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    width: 100vw;\n    gap: 20px;\n    justify-items: center;\n}\n\n.menu-disclaimer {\n    text-align: center;\n    color: var(--light-color);\n}\n\n.copyright-footer {\n    background-color: var(--orange-color);\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    box-shadow: 0px 0px 0px -10px black;\n}\n\n.copyright-text {\n    font-family: "Coolvetica Rg", sans-serif;\n    color: var(--dark-color);\n    text-decoration: none;\n}\n\n.copyright-footer a img {\n    height: 25px;\n}\n\n.copyright-footer a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-container {\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-bubble {\n    width: 560px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    height: 90vh;\n    border-radius: 20px;\n    background-color: var(--orange-color);\n    padding: 20px;\n    gap: 20px;\n}\n\n.contact-form {\n    width: 400px;\n    background-color: var(--gray-color);\n    height: 500px;\n    padding: 20px;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-form label {\n    font-family: "Coolvetica Rg", sans-serif;\n    color: var(--light-color);\n    font-size: 1.5rem;\n    text-align: left;\n    width: 300px;\n    margin-top: 15px;\n}\n.contact-form input,\n.contact-form textarea,\n.contact-form button {\n    appearance: none;\n}\n\n.contact-form input {\n    width: 300px;\n    height: 2rem;\n    border: 0;\n    border-radius: 5px;\n    background-color: var(--light-color);\n    color: var(--dark-color);\n    font-family: sans-serif;\n    padding-left: 4px;\n}\n\n.contact-form textarea {\n    resize: none;\n    width: 300px;\n    border: 0;\n    border-radius: 5px;\n    height: 200px;\n    font-family: sans-serif;\n    padding-left: 4px;\n    padding-top: 3px;\n}\n\n.contact-form button {\n    margin-top: 20px;\n    width: 200px;\n    height: 50px;\n    font-family: "Coolvetica Rg", sans-serif;\n    font-size: 1.5rem;\n    border:0;\n    color: var(--light-color);\n    background-color: var(--orange-color);\n    border-radius: 10px;\n}\n\n.contact-form button:hover {\n    cursor: pointer;\n    background-color: var(--dark-color);\n    color: var(--orange-color);\n    font-size: 1.6rem;\n}\n\n.info-bubble {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    padding: 20px;\n    align-items: center;\n    background-color: var(--gray-color);\n    color: var(--light-color);\n    font-family: "Coolvetica Rg";\n    border-radius: 20px;\n    gap:10px;\n}\n\n.info-bubble h3 {\n    font-size: 1.7rem;\n}\n\n.info-bubble div {\n    font-size: 1.2rem;\n}\n\n.info-bubble :nth-child(4) {\n    text-align: center;\n}\n\n.menu-button-mobile {\n    display: none;\n}\n\n\n@media (max-width: 600px) {\n    .heading {\n        flex-direction: column;\n        height: 80px;\n    }\n    .heading button {\n        font-size: 0.9rem;\n        height: 30px;\n        width: 90px;\n    }\n    .heading button:hover {\n        font-size: 0.9rem;\n    }\n    .menu-button {\n        display: none;\n    }\n    .menu-button-mobile {\n        display: block;\n    }\n    .heading-center-text {\n        width: 300px;\n    }\n    .home-heading-text {\n        font-size: 2rem;\n    }\n    .home-heading-subtext {\n        font-size: 1rem;\n    }\n    #content {\n        grid-template-rows: 100px auto;\n    }\n    .menu-container {\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n    .menu-item {\n        width: 300px;\n        height: 140px;\n        padding: 7px;\n        border-radius: 5px;\n        gap: 8px;\n    }\n    .item-description-container h3 {\n        font-size: 1.2rem;\n    }\n    .item-description-container div {\n        font-size: 1rem;\n    }\n    .item-description-container div>em {\n        font-size: 0.5rem;\n        margin-top: 5px;\n    }\n    .menu-item img{\n        width: 125px;\n        border-radius: 10px;\n    }\n    .contact-bubble {\n        width: 300px;\n        height: 800px;\n    }\n    .contact-form {\n        width: 260px;\n    }\n    .info-bubble {\n        width: 260px;\n        text-align: center;\n    }\n    .info-bubble div {\n        font-size: 1rem;\n    }\n    .info-bubble h3 {\n        font-size: 1.4rem;\n    }\n    .contact-form label,\n    .contact-form input,\n    .contact-form textarea {\n        width: 240px;\n    }\n    .menu-and-contact {\n        display: flex;\n        flex-direction: row;\n        height: 40px;\n        width: 100vw;\n        align-items: center;\n        justify-content: space-evenly;\n    }\n}'],sourceRoot:""}]);const i=o},"./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/e=>{e.exports=function(o){var d=[];return d.toString=function(){return this.map(function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(0<e[5].length?" ".concat(e[5]):""," {")),n+=o(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n}).join("")},d.i=function(e,n,t,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(a[A]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&a[s[0]]||(void 0!==r&&(void 0!==s[5]&&(s[1]="@layer".concat(0<s[5].length?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]&&(s[1]="@media ".concat(s[2]," {").concat(s[1],"}")),s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),d.push(s))}},d}},"./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/e=>{e.exports=function(e,n){return n=n||{},e&&(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/e=>{e.exports=function(e){var n=e[1],e=e[3];return e?("function"==typeof btoa?(e=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),e="/*# ".concat(e," */"),[n].concat([e])):[n]).join("\n"):n}},"./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var n=t(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(n),o=t(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=t.n(o),r=t(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),r=t.n(r),a=t(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=t.n(a),i=t(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),i=t.n(i),A=t(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=t.n(A),t=t(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */"./node_modules/css-loader/dist/cjs.js!./src/style.css"),c={};c.styleTagTransform=A(),c.setAttributes=a(),c.insert=r().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=i(),n()(t.default,c);const s=t.default&&t.default.locals?t.default.locals:void 0},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/e=>{var s=[];function d(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function A(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],i=n.base?a[0]+n.base:a[0],A=t[i]||0,c="".concat(i," ").concat(A),i=(t[i]=A+1,d(c)),A={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};-1!==i?(s[i].references++,s[i].updater(A)):(a=function(n,e){var t=e.domAPI(e);return t.update(n),function(e){e?e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer||t.update(n=e):t.remove()}}(A,n),n.byIndex=r,s.splice(r,0,{identifier:c,updater:a,references:1})),o.push(c)}return o}e.exports=function(e,a){var i=A(e=e||[],a=a||{});return function(e){e=e||[];for(var n=0;n<i.length;n++){var t=d(i[n]);s[t].references--}for(var e=A(e,a),o=0;o<i.length;o++){var r=d(i[o]);0===s[r].references&&(s[r].updater(),s.splice(r,1))}i=e}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/e=>{var t={};e.exports=function(e,n){if(!(e=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e)))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/e=>{e.exports=function(a){var i;return"undefined"==typeof document?{update:function(){},remove:function(){}}:(i=a.insertStyleElement(a),{update:function(e){var n,t,o,r;n=i,t=a,o="",(e=e).supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {")),(r=void 0!==e.layer)&&(o+="@layer".concat(0<e.layer.length?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}"),(r=e.sourceMap)&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n,t.options)},remove:function(){var e;null!==(e=i).parentNode&&e.parentNode.removeChild(e)}})}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},"./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/(e,n,t)=>{t.r(n),t.d(n,{createContactPage:()=>function(){const e=document.createElement("div"),n=(e.classList.add("contact-container"),g.default.mainBody.appendChild(e),document.createElement("div")),t=(n.classList.add("contact-bubble"),e.appendChild(n),document.createElement("form")),o=(t.classList.add("contact-form"),n.appendChild(t),document.createElement("label")),r=(o.textContent="Name:",o.setAttribute("for","name"),document.createElement("input")),a=(r.type="text",r.id="name",r.name="name",document.createElement("label")),i=(a.textContent="Email:",a.setAttribute("for","email"),document.createElement("input")),A=(i.type="email",i.id="email",i.name="email",document.createElement("label")),c=(A.textContent="Reason for contacting:",A.setAttribute("for","contact"),document.createElement("textarea")),s=(c.id="contact",c.name="contact",document.createElement("button")),d=(s.type="button",s.textContent="SUBMIT FORM",s.addEventListener("click",()=>{r.value="",i.value="",c.value=""}),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(A),t.appendChild(c),t.appendChild(s),document.createElement("div")),l=document.createElement("h3"),m=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div");d.classList.add("info-bubble"),l.textContent="You can also reach us at:",m.innerHTML="Phone: <em>+1 (526) AMB-URGR</em>",p.innerHTML="Email: <em>contactus@amburgers.com</em>",u.innerHTML="Mail all packages to:<br>AMBURGERS Los Angeles<br>945 Oakmont St<br>Los Angeles, CA<br>90009",n.appendChild(d),d.appendChild(l),d.appendChild(m),d.appendChild(p),d.appendChild(u)}});var g=t(/*! ./page */"./src/page.js")},"./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/(e,n,t)=>{t.r(n),t.d(n,{createHomePage:()=>function(){var e=document.createElement("div"),n=(e.classList.add("burger-hero-container"),document.createElement("div")),t=(n.classList.add("burger-hero-text"),n.textContent="We have the worlds number one bussiest buss, and we can prove it.",new Image),t=(t.src=r,t.classList.add("burger-image"),a.default.mainBody.appendChild(e),e.appendChild(t),e.appendChild(n),document.createElement("div")),e=(a.default.mainBody.appendChild(t),document.createElement("h2")),n=(t.appendChild(e),e.textContent="Come visit us!",document.createElement("div")),e=(t.appendChild(n),n.innerHTML="945 Oakmont Street<br>Los Angeles, CA<br>90009",t.classList.add("address-section"),document.createElement("div")),n=(a.default.mainBody.appendChild(e),e.classList.add("hours-section"),document.createElement("h2")),t=document.createElement("div"),o=document.createElement("h3");n.textContent="We are open",t.textContent="24/7/365",o.textContent="Because you just couldn't get enough.",e.appendChild(n),e.appendChild(t),e.appendChild(o)}});var r=t(/*! ./images/burger-image.jpg */"./src/images/burger-image.jpg"),a=t(/*! ./page */"./src/page.js")},"./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/(e,n,t)=>{t.r(n),t.d(n,{createMenuPage:()=>function(){var e=document.createElement("div"),e=(e.classList.add("menu-container"),o.default.mainBody.appendChild(e),new p(r,"Bussy Burger","$15.65","The bussiest buss you'll ever see. Our award winner.","Classic double smashburger with cheddar cheese, tomatoes, chilies, bacon, and our award winning house sauce.")),e=(u(e),new p(a,"The Lauranger","$14.35","Your new favorite kind of cheeseburger. The sexiest you can get.","Single cheeseburger with double cheese, lettuce, tomato, and our award winning house sauce all on a tasty brioche bun")),e=(u(e),new p(i,"Mushroom Delight","$16.55","I hope theres mush-room in your mouth for me.","Single cheeseburger with cheese sauce, roasted chilis, lettuce, and of course, mushrooms.")),e=(u(e),new p(A,"Chicken Burger","$15.65","Don't I sound great?","Fried chicken breast topped with jalapenos, lettuce, tomato, cucumber, cheese, and our award winning house sauce.")),e=(u(e),new p(c,"Slide Into Yo DM Sliders","$12.45","Heyyyy ;)","Two beautiful mini burgers with guacamole, lettuce, radish, and our award winning house sauce.")),e=(u(e),new p(s,"Mega Egg Burger","$18.20","Don't we all love eggs?","Burger topped with cheese, bacon, over-easy egg (Chef's favorite), lettuce, tomato, and our award winning house sauce.")),e=(u(e),new p(l,"House Tenders","$9.25","For the kids, or adults who never grew up.","Five piece chicken tender, served with pickles and AMBURGER fries.")),e=(u(e),new p(d,"AMBURGER Fries","$5.25","I'm necessary.","House fries served with himalayan ketchup and fry sauce. Truffle or garlic options free of charge.")),e=(u(e),new p(m,"Soda","$3.25","We know you want some.","We only serve Coke or Diet Coke, if you wanted something else get water.")),e=(u(e),document.createElement("div"));e.innerHTML="<em>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.<br>If you have a food allergy, please notify your server.</em>",e.classList.add("menu-disclaimer"),o.default.mainBody.appendChild(e)}});var o=t(/*! ./page */"./src/page.js"),r=t(/*! ./images/burger-image.jpg */"./src/images/burger-image.jpg"),a=t(/*! ./images/lauranger.jpg */"./src/images/lauranger.jpg"),i=t(/*! ./images/mushroom-delight.jpg */"./src/images/mushroom-delight.jpg"),A=t(/*! ./images/chicken-burger.jpg */"./src/images/chicken-burger.jpg"),c=t(/*! ./images/slide-into-yo-dm.jpg */"./src/images/slide-into-yo-dm.jpg"),s=t(/*! ./images/mega-egg-burger.jpg */"./src/images/mega-egg-burger.jpg"),d=t(/*! ./images/amburger-fries.jpg */"./src/images/amburger-fries.jpg"),l=t(/*! ./images/house-tenders.jpg */"./src/images/house-tenders.jpg"),m=t(/*! ./images/soda.jpg */"./src/images/soda.jpg");function p(e,n,t,o,r){this.image=e,this.title=n,this.price=t,this.description=o,this.ingredients=r}function u(e){var n=document.querySelector(".menu-container"),t=document.createElement("div"),n=(t.classList.add("menu-item"),n.appendChild(t),new Image),n=(n.src=e.image,t.appendChild(n),document.createElement("div")),t=(n.classList.add("item-description-container"),t.appendChild(n),document.createElement("h3")),o=document.createElement("div");t.textContent=`${e.title} (${e.price})`,n.appendChild(t),o.innerHTML=`${e.description}<br><em>${e.ingredients}</em>`,n.appendChild(o)}},"./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var l=t(/*! ./images/github.png */"./src/images/github.png");const o=(()=>{var n=document.getElementById("content"),t=[],e=document.createElement("div"),o=(e.classList.add("heading"),t.push(e),document.createElement("div")),r=(e.appendChild(o),document.createElement("h1")),r=(r.textContent="AMBURGERS",r.classList.add("home-heading-text"),o.appendChild(r),o.classList.add("heading-center-text"),document.createElement("h2")),r=(r.textContent="You like the burgers, we just make them.",r.classList.add("home-heading-subtext"),o.appendChild(r),document.createElement("button")),a=(e.appendChild(r),r.textContent="MENU",o.before(r),r.classList.add("menu-button"),document.createElement("div")),i=(a.classList.add("menu-and-contact"),e.appendChild(a),document.createElement("button")),A=(a.appendChild(i),i.textContent="CONTACT US",document.createElement("button")),a=(a.appendChild(A),e.appendChild(A),A.textContent="MENU",i.before(A),A.classList.add("menu-button-mobile"),document.createElement("div")),c=(a.classList.add("main-body-container"),t.push(a),document.createElement("div")),s=(c.classList.add("copyright-footer"),document.createElement("a")),d=(s.setAttribute("href","https://github.com/lucas-amberg"),s.setAttribute("target","_blank"),new Image),s=(d.src=l,c.appendChild(s),s.appendChild(d),document.createElement("a"));s.setAttribute("href","https://github.com/lucas-amberg"),s.setAttribute("target","_blank"),s.textContent="© Lucas Amberg 2023",s.classList.add("copyright-text"),c.appendChild(s),t.push(c);for(let e=0;e<t.length;e++)n.appendChild(t[e]);return{contentContainer:n,heading:e,mainBody:a,contactButton:i,menuButton:r,headingSection:o,menuButtonMobile:A}})()},"./src/fonts/CoolveticaRg-Regular.woff":
/*!*********************************************!*\
  !*** ./src/fonts/CoolveticaRg-Regular.woff ***!
  \*********************************************/(e,n,t)=>{e.exports=t.p+"d2d3c94ff83f47202d7b.woff"},"./src/fonts/CoolveticaRg-Regular.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/CoolveticaRg-Regular.woff2 ***!
  \**********************************************/(e,n,t)=>{e.exports=t.p+"25ab6b3031cd39649525.woff2"},"./src/images/amburger-fries.jpg":
/*!***************************************!*\
  !*** ./src/images/amburger-fries.jpg ***!
  \***************************************/(e,n,t)=>{e.exports=t.p+"30e8e1b355c5e9025240.jpg"},"./src/images/burger-image.jpg":
/*!*************************************!*\
  !*** ./src/images/burger-image.jpg ***!
  \*************************************/(e,n,t)=>{e.exports=t.p+"f63dacb67f490f358641.jpg"},"./src/images/char_broiled-cheeseburger.svg":
/*!**************************************************!*\
  !*** ./src/images/char_broiled-cheeseburger.svg ***!
  \**************************************************/(e,n,t)=>{e.exports=t.p+"078cc32d30bf9b20a54d.svg"},"./src/images/chicken-burger.jpg":
/*!***************************************!*\
  !*** ./src/images/chicken-burger.jpg ***!
  \***************************************/(e,n,t)=>{e.exports=t.p+"3c49a0aa91211e8b91a3.jpg"},"./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/(e,n,t)=>{e.exports=t.p+"feea7951c91120bd69b3.png"},"./src/images/house-tenders.jpg":
/*!**************************************!*\
  !*** ./src/images/house-tenders.jpg ***!
  \**************************************/(e,n,t)=>{e.exports=t.p+"6f8c712f1798e4d49086.jpg"},"./src/images/lauranger.jpg":
/*!**********************************!*\
  !*** ./src/images/lauranger.jpg ***!
  \**********************************/(e,n,t)=>{e.exports=t.p+"876d8047b3bf424ce15a.jpg"},"./src/images/mega-egg-burger.jpg":
/*!****************************************!*\
  !*** ./src/images/mega-egg-burger.jpg ***!
  \****************************************/(e,n,t)=>{e.exports=t.p+"3b3d6d5cfe781f542c78.jpg"},"./src/images/mushroom-delight.jpg":
/*!*****************************************!*\
  !*** ./src/images/mushroom-delight.jpg ***!
  \*****************************************/(e,n,t)=>{e.exports=t.p+"91570d7de4cc979bcd41.jpg"},"./src/images/slide-into-yo-dm.jpg":
/*!*****************************************!*\
  !*** ./src/images/slide-into-yo-dm.jpg ***!
  \*****************************************/(e,n,t)=>{e.exports=t.p+"3d35262a4b521ee4476a.jpg"},"./src/images/soda.jpg":
/*!*****************************!*\
  !*** ./src/images/soda.jpg ***!
  \*****************************/(e,n,t)=>{e.exports=t.p+"28a60217258aac90b5d5.jpg"}},o={};function r(e){var n=o[e];return void 0!==n||(n=o[e]={id:e,exports:{}},t[e](n,n.exports,r)),n.exports}r.m=t,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.g.importScripts&&(e=r.g.location+"");var e,a=r.g.document;if(!e&&a&&!(e=a.currentScript?a.currentScript.src:e)){var n=a.getElementsByTagName("script");if(n.length)for(var i=n.length-1;-1<i&&!e;)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e,r.b=document.baseURI||self.location.href,r.nc=void 0;a={};{
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
r.r(a);var A=r(/*! ./page */"./src/page.js"),c=r(/*! ./home-page */"./src/home-page.js"),s=r(/*! ./menu-page */"./src/menu-page.js"),d=r(/*! ./contact-page */"./src/contact-page.js"),a=(r(/*! ./style.css */"./src/style.css"),r(/*! ./images/char_broiled-cheeseburger.svg */"./src/images/char_broiled-cheeseburger.svg")),l=document.createElement("link");l.setAttribute("href",a),l.setAttribute("rel","shortcut icon"),document.getElementsByTagName("head")[0].appendChild(l);let e=!0,n=!1,t=!1;(0,c.createHomePage)(),A.default.menuButton.addEventListener("click",()=>{!0!==n&&(!0===e?(e=!1,n=!0,(A.default.mainBody.innerHTML="",s.createMenuPage)()):!0===t&&(t=!1,n=!0,(A.default.mainBody.innerHTML="",s.createMenuPage)()))}),A.default.menuButtonMobile.addEventListener("click",()=>{!0!==n&&(!0===e?(e=!1,n=!0,(A.default.mainBody.innerHTML="",s.createMenuPage)()):!0===t&&(t=!1,n=!0,(A.default.mainBody.innerHTML="",s.createMenuPage)()))}),A.default.headingSection.addEventListener("click",()=>{!0!==e&&(!0===n?(n=!1,e=!0,(A.default.mainBody.innerHTML="",c.createHomePage)()):!0===t&&(t=!1,e=!0,(A.default.mainBody.innerHTML="",c.createHomePage)()))}),A.default.contactButton.addEventListener("click",()=>{!0!==t&&(!0===e?(e=!1,t=!0,(A.default.mainBody.innerHTML="",d.createContactPage)()):!0===n&&(n=!1,t=!0,(A.default.mainBody.innerHTML="",d.createContactPage)()))})}})();
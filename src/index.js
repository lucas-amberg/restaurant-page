import page from "./page"
import { createHomePage } from "./home-page";
import { createMenuPage } from "./menu-page";
import "./style.css";

let homePage = false;
let menuPage = true;
let contactPage = false;

//createHomePage();

createMenuPage();

page.menuButton.addEventListener("click", ()=> {
    if (menuPage !== true) {
        if (homePage === true) {
            homePage = false;
            menuPage = true;
            page.mainBody.innerHTML = "";
            createMenuPage();
        }
        else if (contactPage === true) {
            contactPage = false;
            menuPage = true;
            page.mainBody.innerHTML = "";
            createMenuPage();
        }
    }
    else {
        return;
    }
})

page.headingSection.addEventListener("click", ()=> {
    if (homePage !== true) {
        if (menuPage === true) {
            menuPage = false;
            homePage = true;
            page.mainBody.innerHTML = "";
            createHomePage();
        }
        else if (contactPage === true) {
            contactPage = false;
            homePage = true;
            page.mainBody.innerHTML = "";
            createHomePage();
        }
    }
    else {
        return;
    }
})

page.contactButton.addEventListener("click", ()=> {
    if (contactPage !== true) {
        if (homePage === true) {
            homePage = false;
            contactPage = true;
            page.mainBody.innerHTML = "";
            //createContactPage();
        }
        else if (menuPage === true) {
            menuPage = false;
            contactPage = true;
            page.mainBody.innerHTML = "";
            //createContactPage();
        }
    }
    else {
        return;
    }
})
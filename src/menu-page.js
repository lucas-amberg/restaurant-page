import page from "./page";

import bussyBurgerImage from "./images/burger-image.jpg";
import laurangerImage from "./images/lauranger.jpg";
import mushroomDelightImage from "./images/mushroom-delight.jpg";
import chickenBurgerImage from "./images/chicken-burger.jpg"
import slideIntoImage from "./images/slide-into-yo-dm.jpg"
import megaEggImage from "./images/mega-egg-burger.jpg"
import amburgerFriesImage from "./images/amburger-fries.jpg"
import houseTendersImage from "./images/house-tenders.jpg"
import sodaImage from "./images/soda.jpg"

function createMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    page.mainBody.appendChild(menuContainer);

    const bussyBurger = new MenuItem(bussyBurgerImage, "Bussy Burger", "$15.65", 
    "The bussiest buss you'll ever see. Our award winner.",
    "Classic double smashburger with cheddar cheese, tomatoes, chilies, bacon, and our award winning house sauce.");
    createNewMenuElement(bussyBurger);
    
    const lauranger = new MenuItem(laurangerImage, 
        "The Lauranger",
        "$14.35",
        "Your new favorite kind of cheeseburger. The sexiest you can get.",
        "Single cheeseburger with double cheese, lettuce, tomato, and our award winning house sauce all on a tasty brioche bun")
    createNewMenuElement(lauranger);

    const mushroomDelight = new MenuItem(mushroomDelightImage,
        "Mushroom Delight",
        "$16.55",
        "I hope theres mush-room in your mouth for me.",
        "Single cheeseburger with cheese sauce, roasted chilis, lettuce, and of course, mushrooms.")
    createNewMenuElement(mushroomDelight);

    const chickenBurger = new MenuItem(chickenBurgerImage,
        "Chicken Burger",
        "$15.65",
        "Don't I sound great?",
        "Fried chicken breast topped with jalapenos, lettuce, tomato, cucumber, cheese, and our award winning house sauce.")
    createNewMenuElement(chickenBurger);

    const slideIntoYoSliders = new MenuItem(slideIntoImage,
        "Slide Into Yo DM Sliders",
        "$12.45",
        "Heyyyy ;)",
        "Two beautiful mini burgers with guacamole, lettuce, radish, and our award winning house sauce.")
    createNewMenuElement(slideIntoYoSliders);

    const megaEggBurger = new MenuItem(megaEggImage,
        "Mega Egg Burger",
        "$18.20",
        "Don't we all love eggs?",
        "Burger topped with cheese, bacon, over-easy egg (Chef's favorite), lettuce, tomato, and our award winning house sauce.")
    createNewMenuElement(megaEggBurger);

    const houseTenders = new MenuItem(houseTendersImage,
        "House Tenders",
        "$9.25",
        "For the kids, or adults who never grew up.",
        "Five piece chicken tender, served with pickles and AMBURGER fries.")
    createNewMenuElement(houseTenders);

    const amburgerFries = new MenuItem(amburgerFriesImage,
        "AMBURGER Fries",
        "$5.25",
        "I'm necessary.",
        "House fries served with himalayan ketchup and fry sauce. Truffle or garlic options free of charge.")
    createNewMenuElement(amburgerFries);

    const soda = new MenuItem(sodaImage,
        "Soda",
        "$3.25",
        "We know you want some.",
        "We only serve Coke or Diet Coke, if you wanted something else get water.")
    createNewMenuElement(soda);

    const disclaimer = document.createElement("div");
    disclaimer.innerHTML = "<em>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.<br>If you have a food allergy, please notify your server.</em>";
    disclaimer.classList.add("menu-disclaimer");
    page.mainBody.appendChild(disclaimer);
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

export {createMenuPage};
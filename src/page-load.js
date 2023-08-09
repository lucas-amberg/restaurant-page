import burgerImage from "./images/burger-image.jpg"

function loadPage() {
    const contentContainer = document.getElementById("content");
    const items = [];

    const heading = document.createElement("div");
    heading.classList.add("heading");
    items.push(heading);

    const homeHeading = document.createElement("h1");
    homeHeading.textContent = "AMBURGERS";
    homeHeading.classList.add("home-heading-text");
    heading.appendChild(homeHeading);

    const homeHeadingSubText = document.createElement("h2");
    homeHeadingSubText.textContent = "You like the burgers, we just make them.";
    homeHeadingSubText.classList.add("home-heading-subtext");
    heading.appendChild(homeHeadingSubText);

    const homeBurgerImage = new Image();
    homeBurgerImage.src = burgerImage;
    homeBurgerImage.classList.add("burger-image");
    items.push(homeBurgerImage);

    for (let i = 0; i < items.length; i++) {
        contentContainer.appendChild(items[i]);
    }
}

export default loadPage;
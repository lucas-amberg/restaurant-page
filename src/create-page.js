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
    menuButton.classList.add(".menu-button");

    //Create body section
    const mainBody = document.createElement("div");
    mainBody.classList.add("main-body-container");
    items.push(mainBody);

    for (let i = 0; i < items.length; i++) {
        contentContainer.appendChild(items[i]);
    }
    return {
        contentContainer,
        heading,
        mainBody
    };
};

const page = webPage();

export default page;
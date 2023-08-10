const webPage = () => {
    const contentContainer = document.getElementById("content");
    const items = [];

    //Create heading section
    const heading = document.createElement("div");
    heading.classList.add("heading");
    items.push(heading);

    //Create heading text
    const homeHeading = document.createElement("h1");
    homeHeading.textContent = "AMBURGERS";
    homeHeading.classList.add("home-heading-text");
    heading.appendChild(homeHeading);

    const homeHeadingSubText = document.createElement("h2");
    homeHeadingSubText.textContent = "You like the burgers, we just make them.";
    homeHeadingSubText.classList.add("home-heading-subtext");
    heading.appendChild(homeHeadingSubText);

    //Create heading buttons
    

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
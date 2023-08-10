import page from "./page";

function createContactPage() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    page.mainBody.appendChild(contactContainer);

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

export {createContactPage};
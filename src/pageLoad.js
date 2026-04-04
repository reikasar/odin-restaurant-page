//imports pages
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

//get the elements
const content = document.getElementById("content");
const menuButton = document.getElementById("menu");
const homeButton = document.getElementById("home");
const contactButton = document.getElementById("contact");

//append pages to content
content.appendChild(menuPage);
content.appendChild(homePage);
content.appendChild(contactPage);

//hide initially menu and contact
menuPage.style.display = "none";
contactPage.style.display = "none";

//hide all but one page
function showOnly(pageToShow) {
    [homePage, menuPage, contactPage].forEach(page => {
        page.style.display = "none";
    }) 
    pageToShow.style.display = "";
}

//calls showOnly after event
menuButton.addEventListener("click", () => showOnly(menuPage));
homeButton.addEventListener("click", () => showOnly(homePage));
contactButton.addEventListener("click", () => showOnly(contactPage));
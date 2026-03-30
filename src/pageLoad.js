const menuButton = document.getElementById("menu");
const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const contactButton = document.getElementById("contact");

const menuPage = document.createElement("div");
const contactPage = document.createElement("div");
const homePage = document.createElement("div");

menuPage.innerHTML = '<div class="card">Menu Item 1</div>, <div class="card">Menu Item 2</div>,<div class="card">Menu Item 1</div>';

contactPage.innerHTML = '<div class="calling">Call Us at 55 555 555 for a reservation</div>';

homePage.innerHTML = `<div class="hero-image">
                         <img src="rest.jpg" alt="Picture of restaurant interior - table with chairs">
                      </div>
                      <div class="hero-text">
                         <p>Welcome to the best restaurant in this part of the equador!</p>
                      </div>`;

function clearPage() {
    content.innerHTML = "";
}

menuPage.classList.add("menupage");

menuButton.addEventListener("click", () => {
    clearPage();
    content.appendChild(menuPage);
});

homeButton.addEventListener("click", () => {
    clearPage();
    content.appendChild(homePage);
});

contactButton.addEventListener("click", () => {
    clearPage();
    content.appendChild(contactPage);
});
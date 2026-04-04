import "./home.css";
import restImage from "./rest.jpg";

const homePage = document.createElement("div");

homePage.innerHTML = `<div class="hero-image">
                         <img src="${restImage}" alt="Picture of restaurant interior - table with chairs">
                      </div>
                      <div class="hero-text">
                         <p>Welcome to our restaurant!</p>
                      </div>`;

homePage.classList.add("content");                      

export default homePage;
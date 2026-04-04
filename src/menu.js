import "./menu.css";

const menuPage = document.createElement("div");
menuPage.innerHTML = '<div class="card">Menu Item 1</div>, <div class="card">Menu Item 2</div>,<div class="card">Menu Item 3</div>';
menuPage.classList.add("menupage");

export default menuPage;
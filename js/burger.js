const body = document.querySelector("body");
const menu = document.querySelector(".header__menu");
const burgerBtn = document.querySelector(".burger-btn");

function toggleMenu() {
  const menuIsOpen = menu.classList.toggle("header__menu_active");
  body.style.overflowY = menuIsOpen ? "hidden" : "auto";
}

burgerBtn.addEventListener("click", toggleMenu);

var btn = document.querySelector(".header__dropdown-btn");
var menu = document.querySelector(".header__menu-list");
var menuToggle = document.querySelector(".header__menu-list--open");

menu.classList.remove("header__menu-list--open");

btn.addEventListener("click", function (event) {
  "use strict";
  event.preventDefault();
  if (menu.classList.contains("header__menu-list--open")) {
    menu.classList.remove("header__menu-list--open");
  } else {
    menu.classList.add("header__menu-list--open");
  }
});

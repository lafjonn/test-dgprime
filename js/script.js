var btn = document.querySelector(".header__dropdown-btn");
var menu = document.querySelector(".header__menu-list");
var wrapper = document.querySelector(".header__wrapper");

menu.classList.remove("header__menu-list--open");

btn.addEventListener("click", function (event) {
  "use strict";
  event.preventDefault();
  if (menu.classList.contains("header__menu-list--open")) {
    menu.classList.remove("header__menu-list--open");
    wrapper.classList.remove("header__wrapper--color");
  } else {
    menu.classList.add("header__menu-list--open");
    wrapper.classList.add("header__wrapper--color");
  }
});

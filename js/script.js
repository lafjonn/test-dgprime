var btn = document.querySelector(".header__dropdown-btn");
var menu = document.querySelector(".header__menu-list");
var wrapper = document.querySelector(".header__wrapper");
var menuAbsolute = document.querySelector(".header__menu");
var background = document.querySelector(".header__images");

menu.classList.remove("header__menu-list--open");

btn.addEventListener("click", function (event) {
  "use strict";
  event.preventDefault();
  if (menu.classList.contains("header__menu-list--open")) {
    menu.classList.remove("header__menu-list--open");
    wrapper.classList.remove("header__wrapper--color");
    btn.classList.remove("header__dropdown-btn--cross");
    wrapper.classList.add("absolute");
    menuAbsolute.classList.add("absolute");
    background.classList.remove("header__background-margin");
  } else {
    menu.classList.add("header__menu-list--open");
    wrapper.classList.add("header__wrapper--color");
    wrapper.classList.remove("absolute");
    btn.classList.add("header__dropdown-btn--cross");
    menuAbsolute.classList.remove("absolute");
    background.classList.add("header__background-margin");
  }
});

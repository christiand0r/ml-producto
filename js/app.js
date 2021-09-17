import buttonTrigger from "./hamburgerMenu.js";
import addFavorite from "./productFavorite.js";
import changeImage from "./productGallery.js";

document.addEventListener("DOMContentLoaded", (e) => {
  changeImage();
  addFavorite();
  buttonTrigger(".hamburger", ".nav-mobile");
});

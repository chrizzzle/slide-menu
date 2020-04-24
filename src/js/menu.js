const menuButtons = [...document.querySelectorAll(".menu__list-item-button")];
const backButton = document.querySelector(".slide__back");
const toggleButton = document.querySelector(".slide__toggle");
const toggleButtonIcon = document.querySelector(".slide__toggle-icon");
const offCanvas = document.querySelector(".slide");
const rootMenuLevel = document.querySelector(".menu__list--root");
const title = document.querySelector(".slide__title");
let level = 0;

const handleButtonClick = () => {
  const childMenu = event.currentTarget.parentElement
    .closest(".menu__list-item")
    .querySelector(".menu__list");

  [...document.querySelectorAll(".menu__list--shown")].forEach((element) => {
    element.classList.remove("menu__list--shown");
  });

  level++;

  childMenu.classList.remove("menu__list--hidden");
  childMenu.classList.add("menu__list--shown");
  
  backButton.classList.remove("slide__back--hidden");

  rootMenuLevel.style.transform = "translate(" + (level * (-100)) + "%, 0)";
};

const handleBackClick = () => {
  const currentMenu = document.querySelector(".menu__list--shown");
  const parentMenu = currentMenu.parentElement.closest(".menu__list");
  const hideAfterTransition = () => {
    if (level === 0) { backButton.classList.add("slide__back--hidden"); }
    currentMenu.classList.add("menu__list--hidden");
    currentMenu.classList.remove("menu__list--shown");
    
    rootMenuLevel.removeEventListener("transitionend", hideAfterTransition);
  };

  level = level > 0 ? level - 1 : level;

  rootMenuLevel.addEventListener("transitionend", hideAfterTransition);

  parentMenu.classList.remove("menu__list--hidden");
  parentMenu.classList.add("menu__list--shown");

  rootMenuLevel.style.transform = "translate(" + (level * (-100)) + "%, 0)";
};

const handleToggleClick = () => {
  if (offCanvas.classList.contains("slide--open")) {
    offCanvas.classList.remove("slide--open");
    toggleButtonIcon.innerHTML = "menu";
    return;
  }
  offCanvas.classList.add("slide--open");
  toggleButtonIcon.innerHTML = "menu_open";
};

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener("click", handleButtonClick);
});
backButton.addEventListener("click", handleBackClick);
toggleButton.addEventListener("click", handleToggleClick);

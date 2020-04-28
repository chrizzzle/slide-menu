"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var shownMenu,menuButtons=_toConsumableArray(document.querySelectorAll(".menu__list-item-button")),backButton=document.querySelector(".slide__back"),toggleButton=document.querySelector(".slide__toggle"),toggleButtonIcon=document.querySelector(".slide__toggle-icon"),offCanvas=document.querySelector(".slide"),rootMenuLevel=document.querySelector(".menu__list--root"),title=document.querySelector(".slide__title"),body=document.querySelector(".body"),level=0,handleButtonClick=function(e){var t=e.currentTarget.parentElement.closest(".menu__list-item").querySelector(".menu__list");t?(level++,t.classList.remove("menu__list--hidden"),backButton.classList.remove("slide__back--hidden"),rootMenuLevel.style.transform="translate(".concat(-100*level,"%, 0)"),shownMenu=t):handleToggleClick()},handleBackClick=function(){var t=shownMenu.parentElement.closest(".menu__list");level=0<level?level-1:level,rootMenuLevel.addEventListener("transitionend",function e(){level<=0&&backButton.classList.add("slide__back--hidden"),shownMenu.classList.add("menu__list--hidden"),rootMenuLevel.removeEventListener("transitionend",e),shownMenu=t}),t.classList.remove("menu__list--hidden"),rootMenuLevel.style.transform="translate(".concat(-100*level,"%, 0)")},handleToggleClick=function(){if(offCanvas.classList.contains("slide--open"))return offCanvas.classList.remove("slide--open"),toggleButtonIcon.innerHTML="menu",toggleButton.setAttribute("aria-expanded",!1),void body.classList.remove("body--fixed");offCanvas.classList.add("slide--open"),toggleButtonIcon.innerHTML="menu_open",toggleButton.setAttribute("aria-expanded",!0),body.classList.add("body--fixed")};menuButtons.forEach(function(e){e.addEventListener("click",handleButtonClick)}),backButton.addEventListener("click",handleBackClick),toggleButton.addEventListener("click",handleToggleClick);
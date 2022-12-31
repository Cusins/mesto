import { config, initialCards } from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const elementsList = document.querySelector(".elements__list");

// константы попапов
const profilePopup = document.querySelector(".popup_type_edit-profile");
const profileForm = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const professionInput = document.querySelector(".popup__input_type_profession");
const profileName = document.querySelector(".profile__name");
const profileProfesseion = document.querySelector(".profile__profession");
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");

const elementPopup = document.querySelector(".popup_type_add-element");
const elementForm = document.querySelector(".popup__form-element");
const cityInput = document.querySelector(".popup__input_type_city");
const urlInput = document.querySelector(".popup__input_type_url");

export const picturePopup = document.querySelector(".popup_type_image");
export const pictureImage = document.querySelector(".popup__image");
export const pictureName = document.querySelector(".popup__description");

export function popupOpen(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseEsc);
}

function popupClose(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupCloseEsc);
}

function popupCloseEsc(evt) {
  if (evt.code === "Escape") {
    const esc = document.querySelector(".popup_opened");
    popupClose(esc);
  }
}

//форма профиля
function submitFormHandlerProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfesseion.textContent = professionInput.value;
  popupClose(profilePopup);
}

//форма elements
function submitFormHandlerElement(evt) {
  evt.preventDefault();

  const cardElement = createCard(urlInput.value, cityInput.value);
  elementsList.prepend(cardElement);
  popupClose(elementPopup);
}

function createCard(link, name) {
  const card = new Card(link, name, "#template");
  return card.generate();
}

// Изменить профайл
profileButtonEdit.addEventListener("click", () => {
  profileFormValidator.enableValidation();
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfesseion.textContent;

  popupOpen(profilePopup);
});

//добавить element
profileButtonAdd.addEventListener("click", () => {
  elementFormValidator.enableValidation();
  cityInput.value = "";
  urlInput.value = "";

  popupOpen(elementPopup);
});

const setEventListenersPopup = () => {
  const popupList = Array.from(document.querySelectorAll(".popup"));

  popupList.forEach((popupElement) => {
    popupElement.addEventListener("mousedown", function (evt) {
      if (evt.target === evt.currentTarget) {
        popupClose(popupElement);
      }
    });

    //закрыть
    popupElement
      .querySelector(".popup__button-close")
      .addEventListener("click", function () {
        popupClose(popupElement);
      });
  });
};

setEventListenersPopup();

profileForm.addEventListener("submit", submitFormHandlerProfile);
elementForm.addEventListener("submit", submitFormHandlerElement);

const elementFormValidator = new FormValidator(config, elementForm);
const profileFormValidator = new FormValidator(config, profileForm);

initialCards.forEach((item) => {
  const cardElement = createCard(item.link, item.name);
  elementsList.append(cardElement);
});

import { picturePopup, pictureImage, pictureName, popupOpen } from "./index.js";

export class Card {
  constructor(link, name, templateSelector) {
    this._link = link;
    this._name = name;
    this._templateSelector = templateSelector;
  }

  _getElement() {
    const messageElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);

    this._element = messageElement;
    this._image = this._element.querySelector(".elements__image");
  }

  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._handleClickImage();
    });

    this._element
      .querySelector(".elements__button-like")
      .addEventListener("click", (evt) => {
        this._handleClickLike(evt);
      });

    this._element
      .querySelector(".elements__button-delete")
      .addEventListener("click", (evt) => {
        this._handleClickDelete(evt);
      });
  }

  _handleClickImage() {
    pictureImage.src = this._link;
    pictureImage.alt = this._name;
    pictureName.textContent = this._name;
    popupOpen(picturePopup);
  }

  _handleClickLike(evt) {
    evt.target.classList.toggle("elements__button-like-active");
  }

  _handleClickDelete(evt) {
    evt.target.closest(".elements__card").remove();
    this._element = null;
  }

  generate() {
    this._getElement();
    this._setEventListeners();
    this._element.querySelector(".elements__title").textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    return this._element;
  }
}

const pictureImage = document.querySelector(".popup__image");
const pictureName = document.querySelector(".popup__description");
import { picturePopup, popupOpen } from "./index.js";

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
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleClickImage();
      });

    // newElement.querySelector('.elements__button-like').addEventListener('click', function(evt) {
    //   evt.target.classList.toggle('elements__button-like-active');
    // });
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

    //     newElement
    //     .querySelector(".elements__button-delete")
    //     .addEventListener("click", function (evt) {
    //       evt.target.closest(".elements__card").remove();
    //     });
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
  }

  generate() {
    this._getElement();
    this._setEventListeners();
    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(".elements__image").src = this._link;
    return this._element;
  }
}

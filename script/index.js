// константы для работы с массивом initialCards
const elementsCard = document.querySelector('#template').content;
const elementsList = document.querySelector('.elements__list');

// константы попапов
const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = document.querySelector('.popup__form-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfesseion = document.querySelector('.profile__profession');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const profileButtonClose = document.querySelector('.popup__button-close_type_profile');
const profileButtonAdd = document.querySelector('.profile__button-add');
const elementButtonClose = document.querySelector('.popup__button-close_type_element');
const elementPopup = document.querySelector('.popup_type_add-element');
const elementForm = document.querySelector('.popup__form-element');
const cityInput = document.querySelector('.popup__input_type_city');
const urlInput = document.querySelector('.popup__input_type_url');
const elementName = document.querySelector('.elements__title');
const elementLink = document.querySelector('.elements__image');

const picturePopup = document.querySelector('.popup_type_image');
const pictureImage = document.querySelector('.popup__image');
const pictureName = document.querySelector('.popup__description');
const pictureButtonClose = picturePopup.querySelector('.popup__button-close_type_image');

//добавим элементы из массивов
initialCards.forEach(function (item) {
  elementsList.append(createElement(item.name, item.link));
});

//функция создания карточек
function createElement(pictureTitle, pictureLink) {
  const newElement = elementsCard.querySelector('.elements__card').cloneNode(true);
  const newElementImage = newElement.querySelector('.elements__image');

  newElementImage.src = pictureLink;
  newElementImage.alt = pictureTitle;
  newElement.querySelector('.elements__title').textContent = pictureTitle;

  newElement.querySelector('.elements__button-delete').addEventListener('click', function(evt) {
    evt.target.closest('.elements__card').remove();
  });

  newElement.querySelector('.elements__button-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__button-like-active');
  });

  newElement.querySelector('.elements__image').addEventListener('click', function() {
    pictureImage.src = pictureLink;
    pictureImage.alt = pictureTitle;
    pictureName.textContent = pictureTitle;
    popupOpen(picturePopup)
  })

  return newElement;
}

function popupOpen(allPopups) {
  allPopups.classList.add('popup_opened');
  document.addEventListener('keydown', popupCloseEsc);
}

function popupClose(allPopups) {
  allPopups.classList.remove('popup_opened');
  document.removeEventListener('keydown', popupCloseEsc);
}

//форма профиля
function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfesseion.textContent = professionInput.value;
  popupClose(profilePopup);
}

//форма elements
function formSubmitHandlerElement(evt) {
  evt.preventDefault();
  elementsList.prepend(createElement(cityInput.value, urlInput.value));
  popupClose(elementPopup);
}

// Изменить профайл
profileButtonEdit.addEventListener('click', function () {

  profilePopup.querySelector('.popup__form').reset();

  nameInput.value = profileName.textContent;
  professionInput.value = profileProfesseion.textContent;
  updateSaveButtonStatus(profilePopup);
  updateInputErrorStatus(profilePopup);

  popupOpen(profilePopup)
});


//добавить element
profileButtonAdd.addEventListener('click', function () {

  elementPopup.querySelector('.popup__form').reset();
  updateSaveButtonStatus(elementPopup);
  updateInputErrorStatus(elementPopup);

  popupOpen(elementPopup);
});

// закрыть на esc
const popupCloseEsc = (evt) => {
  allPopups = document.querySelector('.popup_opened');
  if (evt.code === "Escape") {
    popupClose(allPopups);
  }
}

const setEventListenersPopup = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));

  popupList.forEach((popupElement) => {

    popupElement.addEventListener('mousedown', function (evt) {
      if (evt.target === evt.currentTarget) {
        popupClose(popupElement);
      }
    });

    //закрыть
    popupElement.querySelector('.popup__button-close').addEventListener('click', function () {
      popupClose(popupElement);
    });
  });
}

const updateInputErrorStatus = (allPopups) => {
  const formElement = allPopups.querySelector(config.formSelector);
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  });
}

const updateSaveButtonStatus = (allPopups) => {
  const buttonElement = allPopups.querySelector(config.submitButtonSelector);
  const inputList = Array.from(allPopups.querySelectorAll(config.inputSelector));
  toggleButtonState(inputList, buttonElement);
}



setEventListenersPopup();
enableValidation(config);
profileForm.addEventListener('submit', formSubmitHandlerProfile);
elementForm.addEventListener('submit', formSubmitHandlerElement);

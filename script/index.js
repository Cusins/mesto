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

function popupOpen(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', popupCloseEsc);
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', popupCloseEsc);
}

function popupCloseEsc(evt) {
  if (evt.code === 'Escape') {
    const esc = document.querySelector('.popup_opened');
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
  elementsList.prepend(createElement(cityInput.value, urlInput.value));
  popupClose(elementPopup);
}

// Изменить профайл
profileButtonEdit.addEventListener('click', function () {

  nameInput.value = profileName.textContent;
  professionInput.value = profileProfesseion.textContent;
  updateSaveButtonStatus(profilePopup);
  updateInputErrorStatus(profilePopup);

  popupOpen(profilePopup)
});


//добавить element
profileButtonAdd.addEventListener('click', function () {

  cityInput.value = '';
  urlInput.value = '';
  updateSaveButtonStatus(elementPopup);
  updateInputErrorStatus(elementPopup);

  popupOpen(elementPopup);
});

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

setEventListenersPopup();
enableValidation(config);
profileForm.addEventListener('submit', submitFormHandlerProfile);
elementForm.addEventListener('submit', submitFormHandlerElement);

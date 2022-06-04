const buttonEdit = document.querySelector('.button__edit');
const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__button-close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const saveButton = document.querySelector('.popup__button-save');
const profileName = document.querySelector('.profile__name');
const profileProfesseion = document.querySelector('.profile__profession');

function popupOpen () {
  popup.classList.add('popup_opened');
}

function popupClose () {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', function () {
  popupOpen ()
});

popupButtonClose.addEventListener('click', function () {
  popupClose ()
});

function formSubmitHandler (evt) {
  evt.preventDefault();
};

saveButton.addEventListener('click', function () {
  profileName.textContent = nameInput.value;
  profileProfesseion.textContent = jobInput.value;
  popupClose ()
});

formElement.addEventListener('submit', formSubmitHandler);






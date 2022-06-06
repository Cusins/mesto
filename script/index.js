const popup = document.querySelector('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = document.querySelector('.popup__button-close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfesseion = document.querySelector('.profile__profession');


function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfesseion.textContent;
};

function popupClose() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfesseion.textContent = professionInput.value;
  popupClose();
};


profileButtonEdit.addEventListener('click', popupOpen);
popupButtonClose.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);





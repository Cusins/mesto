//объявил все переменные
const popup = document.querySelector('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = document.querySelector('.popup__button-close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfesseion = document.querySelector('.profile__profession');

//Описал функции
function popupOpen () {
  popup.classList.add('popup_opened');
};

function popupClose () {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler (e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfesseion.textContent = professionInput.value;
  /**  Получил значения полей по их свойству value и выбрал элементы,
  куда нужно вставить эти значения с помощью свойства textContent */
  popupClose ();
};

//Установил события
profileButtonEdit.addEventListener('click', popupOpen);
popupButtonClose.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);






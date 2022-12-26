export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    if (errorElement) {
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = "";
    }
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _updateInputErrorStatus() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _updateSaveButtonStatus() {
    const buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._toggleButtonState(inputList, buttonElement);
  }

  enableValidation() {
    this._formElement.reset();
    this._updateInputErrorStatus();
    this._updateSaveButtonStatus();
    const formList = Array.from(
      document.querySelectorAll(this._config.formSelector)
    );
    formList.forEach(() => {
      this._setEventListeners();
    });
  }
}

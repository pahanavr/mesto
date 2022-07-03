export default class FormValidator {
  constructor(parameters, formType) {
    this._parameters = parameters;
    this._formType = formType;
    this._inputList = Array.from(
      formType.querySelectorAll(this._parameters.inputSelector)
    );
  }

  //function of show input error
  _showInputError(inputElement) {
    const errorElement = this._formType.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._parameters.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._parameters.errorClass);
  }

  //function of hide input error
  _hideInputError(inputElement) {
    const errorElement = this._formType.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._parameters.inputErrorClass);
    errorElement.classList.remove(this._parameters.errorClass);
    errorElement.textContent = "";
  }

  //function of check input validity
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //function of disable submit button
  buttonSubmitDisabled() {
    this._submitButton = this._formType.querySelector(
      this._parameters.submitButtonSelector
    );
    this._submitButton.classList.add(this._parameters.inactiveButtonClass);
    this._submitButton.setAttribute("disabled", true);
  }

  //function of enable submit button
  _buttonSubmitEnabled() {
    this._submitButton.classList.remove(this._parameters.inactiveButtonClass);
    this._submitButton.removeAttribute("disabled", true);
  }

  //function of toggle sumbit button
  _buttonToggle() {
    if (this._hasInvalidInput()) {
      this.buttonSubmitDisabled(this._submitButton);
    } else {
      this._buttonSubmitEnabled(this._submitButton);
    }
  }

  //function of set event listeners
  _setEventListeners() {
    this._buttonToggle();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._buttonToggle();
      });
    });
  }

  //function of valid input
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //Validation function
  enableValidation() {
    this._formType.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}



export class FormValidator {
  constructor(parameters, formType) {
    this._parameters = parameters;
    this._formType = formType;
  }


//Validation function
enableValidation (parameters) {
  const formList = Array.from(
    document.querySelectorAll(parameters.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  });
};

//function of show input error
  _showInputError (
  inputErrorClass,
  errorClass,
  inputElement
) {
  const errorElement = this._formType.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

//function of hide input error
  _hideInputError (
  inputErrorClass,
  errorClass,
  inputElement
) {
  const errorElement = this._formType.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

//function of check up validity
  _checkInputValidity (parameters, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    _showInputError(
      parameters.inputErrorClass,
      parameters.errorClass,
      formElement,
      inputElement
    );
  } else {
    _hideInputError(
      parameters.inputErrorClass,
      parameters.errorClass,
      formElement,
      inputElement
    );
  }
};

//function of disable submit button
  _buttonCardSubmitDisabled (submitButton) {
  submitButton.classList.add(this._inactiveButtonClass);
  submitButton.setAttribute("disabled", true);
};

//function of enable submit button
  _buttonCardSubmitEnabled (submitButton) {
  submitButton.classList.remove(this._inactiveButtonClass);
  submitButton.removeAttribute("disabled", true);
};

//function of toggle sumbit button
  _buttonToggle (inputList, submitButton) {
  if (_hasInvalidInput(inputList)) {
    _buttonCardSubmitDisabled(submitButton);
  } else {
    _buttonCardSubmitEnabled(submitButton);
  }
};

//function of set event listeners
  _setEventListeners (parameters, formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(parameters.inputSelector)
  );
  const submitButton = formElement.querySelector(
    parameters.submitButtonSelector
  );

  buttonToggle(inputList, parameters.inactiveButtonClass, submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      _checkInputValidity(parameters, formElement, inputElement);

      _buttonToggle(inputList, parameters.inactiveButtonClass, submitButton);
    });
  });
};

//function of valid input
  _hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

}
// enableValidation(parameters)
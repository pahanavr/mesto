//object parameters
const parameters = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__error_visible",
};

//Validation function
const enableValidation = (parameters) => {
  const formList = Array.from(
    document.querySelectorAll(parameters.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(parameters, formElement);
  });
};

//function of show input error
const showInputError = (
  inputErrorClass,
  errorClass,
  formElement,
  inputElement
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

//function of hide input error
const hideInputError = (
  inputErrorClass,
  errorClass,
  formElement,
  inputElement
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

//function of check up validity
const checkInputValidity = (parameters, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      parameters.inputErrorClass,
      parameters.errorClass,
      formElement,
      inputElement
    );
  } else {
    hideInputError(
      parameters.inputErrorClass,
      parameters.errorClass,
      formElement,
      inputElement
    );
  }
};

//function of disable submit button
const buttonCardSubmitDisabled = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.setAttribute("disabled", true);
};

//function of enable submit button
const buttonCardSubmitEnabled = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.removeAttribute("disabled", true);
};

//function of toggle sumbit button
const buttonToggle = (inputList, inactiveButtonClass, submitButton) => {
  if (hasInvalidInput(inputList)) {
    buttonCardSubmitDisabled(submitButton, inactiveButtonClass);
  } else {
    buttonCardSubmitEnabled(submitButton, inactiveButtonClass);
  }
};

//function of set event listeners
const setEventListeners = (parameters, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(parameters.inputSelector)
  );
  const submitButton = formElement.querySelector(
    parameters.submitButtonSelector
  );

  buttonToggle(inputList, parameters.inactiveButtonClass, submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(parameters, formElement, inputElement);

      buttonToggle(inputList, parameters.inactiveButtonClass, submitButton);
    });
  });
};

//function of valid input
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation(parameters);

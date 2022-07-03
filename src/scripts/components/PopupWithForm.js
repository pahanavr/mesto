import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { formCardSubmitHandler }) {
    super(popupSelector);
    this._formCardSubmitHandler = formCardSubmitHandler;
    this._inputList = this._popup.querySelectorAll(".popup__field");
    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._popup.querySelector(".popup__submit-button");
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formCardSubmitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  loading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = "Сохранить";
    }
  }
}

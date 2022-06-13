import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, {formCardSubmitHandler}) {
    super(popup);
    this._formCardSubmitHandler = formCardSubmitHandler;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputValues = {};

    this._inputList = this._popup.querySelectorAll(".popup__field");
    this._inputList.forEach((input) => {this._inputValues[input.name] = input.value});

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
}

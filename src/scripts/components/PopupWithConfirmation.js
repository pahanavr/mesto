import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formCardDelete = this._popup.querySelector(".popup__form");
  }

  deleteSubmitCard(del) {
    this._handleDeleteCard = del;
  }

  setEventListeners() {
    this._formCardDelete.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleDeleteCard();
    });
    super.setEventListeners();
  }
}

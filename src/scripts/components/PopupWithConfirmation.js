import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, { formCardDeleteHandler }) {
        super(popupSelector);
        this._formCardDeleteHandler = formCardDeleteHandler;
        this._avatar = document.querySelector(".profile__avatar");
    }

    setEventListeners() {
        super.setEventListeners();
    }

    close() {
        super.close();
    }
}
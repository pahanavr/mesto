export default class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }
  //function of the open popup's
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => {this._handleEscClose(evt)});
  }
  //function of the close popup's
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => {this._handleEscClose(evt)});
  }
  //function of the close popup's
  _handleEscClose(evt) {
    if (evt.key == "Escape") {
      this._popup.classList.remove("popup_opened");
    }
  }

  setEventListeners() {
    //close popup's by click on the close button
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    //close popup's by over click

    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}

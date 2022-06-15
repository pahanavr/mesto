import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    open(name, link) {
        this._imageView = this._popup.querySelector(".popup__image");
        this._imageCaption = this._popup.querySelector(".popup__image-caption");

        this._imageView.src = link;
        this._imageView.alt = name;
        this._imageCaption.textContent = name;
        super.open();
    }
}
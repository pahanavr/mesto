import Popup from "./Popup.js";
import { imageView, imageCaption } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    open(name, link) {
        imageView.src = link;
        imageView.alt = name;
        imageCaption.textContent = name;
        super.open();
    }
}
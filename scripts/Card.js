import { openPopup, imageCaption, imageView, popupImage } from "./index.js";

export class Card {
  constructor(cardInfo, cardTemplate) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    const itemTemplate = document.querySelector(this._cardTemplate).content;
    const cardTemplate = itemTemplate
      .querySelector(".elements__item")
      .cloneNode(true);

    return cardTemplate;
  }

  //generating item
  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".elements__item-image");
    this._cardImage.src = this._link;
    this._element.querySelector(".elements__item-name").textContent =
      this._name;
    this._likeButton = this._element.querySelector(".elements__like-button");
    this._deleteButton = this._element.querySelector(
      ".elements__delete-button"
    );

    this._imageCaption = this._name;

    this._setEventListeners();

    return this._element;
  }

  //function of like elements
  _likeButtonToggle() {
    this._likeButton.classList.toggle("elements__like-button_active");
  }

  //function of deleting element
  _handleDeleteItem() {
    this._element.remove();
    this._element = null;
  }

  //function of opening
  _openImageViewPopup() {
    imageView.src = this._link;
    imageView.alt = this._name;
    imageCaption.textContent = this._name;
    openPopup(popupImage);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) => {
      this._likeButtonToggle(evt);
    });

    this._deleteButton.addEventListener("click", (evt) => {
      this._handleDeleteItem(evt);
    });

    this._cardImage.addEventListener("click", () => {
      this._openImageViewPopup();
    });
  }
}

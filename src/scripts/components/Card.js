export default class Card {
  constructor(cardInfo, cardTemplate, handleCardClick) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const itemTemplate = document.querySelector(this._cardTemplate).content;
    const cardElement = itemTemplate
      .querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  //generating item
  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".elements__item-image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
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

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) => {
      this._likeButtonToggle(evt);
    });

    this._deleteButton.addEventListener("click", (evt) => {
      this._handleDeleteItem(evt);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

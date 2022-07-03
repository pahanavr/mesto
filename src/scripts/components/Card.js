export default class Card {
  constructor(
    cardInfo,
    cardTemplate,
    {
      profileId,
      handleCardClick,
      handleSetLike,
      handleDeleteLike,
      handleAcceptDelete,
    }
  ) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._profileId = profileId;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleSetLike = handleSetLike;
    this._handleDeleteLike = handleDeleteLike;
    this._handleAcceptDelete = handleAcceptDelete;

    this._id = cardInfo._id;
    this._likes = cardInfo.likes;
    this._owner = cardInfo.owner._id;
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
    this._likeCounter = this._element.querySelector(".elements__like-counter");
    this._likeCounter.textContent = this._likes.length;

    this._liked();

    this._setEventListeners();

    return this._element;
  }

  getId() {
    return this._id;
  }

  _isOwner() {
    if (this._owner !== this._profileId) {
      this._deleteButton.remove();
    }
  }

  _likeSet() {
    if (this._likeButton.classList.contains("elements__like-button_active")) {
      this._handleDeleteLike(this._id);
    } else {
      this._handleSetLike(this._id);
    }
  }

  _liked() {
    if (
      this._likes.some((profile) => {
        return this._profileId === profile._id;
      })
    ) {
      this._likeButton.classList.add("elements__like-button_active");
    }
  }

  toggleLike(data) {
    this._likes = data.likes;
    this._likeButton.classList.toggle("elements__like-button_active");
    this._likeCounter.textContent = this._likes.length;
  }

  //function of deleting element
  handleDeleteItem() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", (evt) => {
      this._likeSet(evt);
    });

    this._deleteButton.addEventListener("click", (evt) => {
      this._handleAcceptDelete(evt);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

const popups = document.querySelectorAll(".popup");
const profileEditOpenButton = document.querySelector(".profile__edit-button"); //button of opening edit-popup
const popupEdit = document.querySelector(".popup_edit_type"); //edit-popup
const profileEditCloseButton = popupEdit.querySelector(".popup__close-button"); //button of closing edit-popup
const popupAdd = document.querySelector(".popup_add_type"); //add-popup
const elementsAddOpenButton = document.querySelector(".profile__add-button"); //add-button
const elementsAddCloseButton = popupAdd.querySelector(".popup__close-button"); //close-button
const popupImage = document.querySelector(".popup_image_type"); //image-popup
const imageViewCloseButton = popupImage.querySelector(".popup__close-button"); //button of closing image-popup

const profile = document.querySelector(".profile"); //block profile
const textName = profile.querySelector(".profile__name"); //profile name
const textPosition = profile.querySelector(".profile__position"); //profile position
const formEdit = popupEdit.querySelector(".popup__form_edit_type"); //form edit
const formAdd = document.querySelector(".popup__form_add_type");
const nameProfile = formEdit.querySelector("#name"); //input name
const positionProfile = formEdit.querySelector("#position"); //input position
const titleElement = formAdd.querySelector("#title"); //input title
const imageElement = formAdd.querySelector("#image"); //input image link
const imageCaption = popupImage.querySelector(".popup__image-caption"); //image-popup caption

const itemsContainer = document.querySelector(".elements"); //section elements
const itemTemplate = itemsContainer
  .querySelector("#item")
  .content.querySelector(".elements__item"); //template of element

//functions

//function open popup's
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', popupCloseByEsc);
}
//function close popup's
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', popupCloseByEsc);
}
//function of givin values to the fields
function openedProfilePopup() {
  nameProfile.value = textName.textContent;
  positionProfile.value = textPosition.textContent;
  openPopup(popupEdit);
}

//function of saving profile info
function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  textName.textContent = nameProfile.value;
  textPosition.textContent = positionProfile.value;
  closePopup(popupEdit);
}

//function of like elements
function likeButtonToggle(evt) {
  evt.target
    .closest(".elements__like-button")
    .classList.toggle("elements__like-button_Opened");
}

//function of deleting element
function handleDeleteItem(evt) {
  evt.target.closest(".elements__item").remove();
}
const imageView = document.querySelector(".popup__image");
//function of opening
const openImageViewPopup = (item) => {
  imageView.src = item.target.src;
  imageView.alt = item.target.alt;
  imageCaption.textContent = item.target.alt;
  openPopup(popupImage);
};

//generating item
const generateItem = (item) => {
  const newItem = itemTemplate.cloneNode(true);
  const imageItem = newItem.querySelector(".elements__item-image");
  imageItem.src = item.link;
  imageItem.alt = item.name;
  const titleItem = newItem.querySelector(".elements__item-name");
  titleItem.textContent = item.name;
  const likeButton = newItem.querySelector(".elements__like-button");
  likeButton.addEventListener("click", likeButtonToggle);
  const deleteButton = newItem.querySelector(".elements__delete-button");
  deleteButton.addEventListener("click", handleDeleteItem);
  imageItem.addEventListener("click", openImageViewPopup);
  return newItem;
};

//creating item
const createItem = (item) => {
  itemsContainer.prepend(generateItem(item));
};

initialCards.forEach((item) => {
  createItem(item);
});

//function of submit new item
function formItemSubmitHandler(evt) {
  evt.preventDefault();
  createItem({
    name: titleElement.value,
    link: imageElement.value,
  });
  closePopup(popupAdd);
}

//function of popup over click
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

function popupCloseByEsc (evt) {
  if (evt.key == 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};


profileEditOpenButton.addEventListener("click", openedProfilePopup); //edit-popup open
profileEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
}); //edit-popup close
formEdit.addEventListener("submit", formProfileSubmitHandler); //submit profile info

elementsAddOpenButton.addEventListener("click", () => {
  openPopup(popupAdd);
}); //add-popup open
elementsAddCloseButton.addEventListener("click", () => {
  closePopup(popupAdd);
}); //add-popup close
formAdd.addEventListener("submit", formItemSubmitHandler); //submit create item

imageView.addEventListener("click", () => {
  openPopup(popupImage);
});//image-popup open
imageViewCloseButton.addEventListener("click", () => {
  closePopup(popupImage);
}); //image-popup close
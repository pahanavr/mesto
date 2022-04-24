const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const openEditPopupButton = document.querySelector(".profile__edit-button"); //button of opening edit-popup
const editPopup = document.querySelector(".popup_edit_type"); //edit-popup
const closeEditPopupButton = editPopup.querySelector(".popup__close-button"); //button of closing edit-popup
const addPopup = document.querySelector(".popup_add_type"); //add-popup
const openAddPopupButton = document.querySelector(".profile__add-button"); //add-button
const closeAddPopupButton = addPopup.querySelector(".popup__close-button"); //close-button
const imagePopup = document.querySelector(".popup_image_type"); //image-popup
const closeImagePopupButton = imagePopup.querySelector(".popup__close-button"); //button of closing image-popup

const profile = document.querySelector(".profile"); //block profile
const textName = profile.querySelector(".profile__name"); //profile name
const textPosition = profile.querySelector(".profile__position"); //profile position
const editFormElement = editPopup.querySelector(".popup__form_edit_type"); //form edit
const addFormElement = document.querySelector(".popup__form_add_type");
const nameProfile = editFormElement.querySelector("#name"); //input name
const positionProfile = editFormElement.querySelector("#position"); //input position
const titleElement = addFormElement.querySelector("#title"); //input title
const imageElement = addFormElement.querySelector("#image"); //input image link
const imageCaption = imagePopup.querySelector(".popup__image-caption"); //image-popup caption

const itemsContainer = document.querySelector(".elements"); //section elements
const itemTemplate = itemsContainer
  .querySelector("#item")
  .content.querySelector(".elements__item"); //template of element

//functions

//function of like elements
function likeButtonToggle(evt) {
  evt.target
    .closest(".elements__like-button")
    .classList.toggle("elements__like-button_active");
}

//function of deleting element
function handleDeleteItem(evt) {
  evt.target.closest(".elements__item").remove();
}

//function of opening
const openImageViewPopup = (item) => {
  imagePopup.classList.toggle("popup_opened");
  const viewImage = document.querySelector(".popup__image");
  viewImage.src = item.target.src;
  viewImage.alt = item.target.alt;

  imageCaption.textContent = item.target.alt;
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

//function of opening and closing edit-popup
function popupOpenToggle() {
  editPopup.classList.toggle("popup_opened");
  nameProfile.value = textName.textContent;
  positionProfile.value = textPosition.textContent;
}

//function of saving profile info
function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  textName.textContent = nameProfile.value;
  textPosition.textContent = positionProfile.value;
  popupOpenToggle();
}

//function of opening and closing add-popup
function addPopupOpenToggle() {
  addPopup.classList.toggle("popup_opened");
}

//function of submit new item
function formItemSubmitHandler(evt) {
  evt.preventDefault();
  createItem({
    name: titleElement.value,
    link: imageElement.value,
  });
  addPopupOpenToggle();
}

openEditPopupButton.addEventListener("click", popupOpenToggle); //edit-popup open
closeEditPopupButton.addEventListener("click", popupOpenToggle); //edit-popup close
editFormElement.addEventListener("submit", formProfileSubmitHandler); //submit profile info
openAddPopupButton.addEventListener("click", addPopupOpenToggle); //add-popup open
closeAddPopupButton.addEventListener("click", addPopupOpenToggle); //add-popup close
addFormElement.addEventListener("submit", formItemSubmitHandler); //submit create item
closeImagePopupButton.addEventListener("click", openImageViewPopup); //image-popup close

//openImageElementButton.addEventListener('click', popupImageToggle);//view-image-popup toggle

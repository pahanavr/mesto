export {initialCards, parameters, popups, profileEditOpenButton, popupEdit, profileEditCloseButton, 
elementsAddOpenButton, elementsAddCloseButton, imageView, imageCaption, imageViewCloseButton, profile, textName, textPosition, formEdit,
formAdd, nameProfile, positionProfile, titleElement, imageElement}

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

  const parameters = {
    formSelector: ".popup__form",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__error_visible",
  };
  
  const popups = Array.from(document.querySelectorAll(".popup"));
  const profileEditOpenButton = document.querySelector(".profile__edit-button"); //button of opening edit-popup
  const popupEdit = document.querySelector(".popup_edit_type"); //edit-popup
  const profileEditCloseButton = popupEdit.querySelector(".popup__close-button"); //button of closing edit-popup

  const elementsAddOpenButton = document.querySelector(".profile__add-button"); //add-button
  const elementsAddCloseButton = document.querySelector(".popup__close-button"); //close-button
  
  const imageView = document.querySelector(".popup__image");

  const imageCaption = document.querySelector(".popup__image-caption");
  const imageViewCloseButton = document.querySelector(".popup__close-button"); //button of closing image-popup
  
  const profile = document.querySelector(".profile"); //block profile
  const textName = profile.querySelector(".profile__name"); //profile name
  const textPosition = profile.querySelector(".profile__position"); //profile position
  const formEdit = popupEdit.querySelector(".popup__form_edit_type"); //form edit
  const formAdd = document.querySelector(".popup__form_add_type");
  const nameProfile = formEdit.querySelector("#name"); //input name
  const positionProfile = formEdit.querySelector("#position"); //input position
  const titleElement = formAdd.querySelector("#title"); //input title
  const imageElement = formAdd.querySelector("#image"); //input image link
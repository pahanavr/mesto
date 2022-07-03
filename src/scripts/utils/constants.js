export {
  parameters,
  popups,
  profileEditOpenButton,
  popupEdit,
  profileEditCloseButton,
  elementsAddOpenButton,
  elementsAddCloseButton,
  imageViewCloseButton,
  profile,
  textName,
  textabout,
  formEdit,
  formAdd,
  nameProfile,
  aboutProfile,
  titleElement,
  imageElement,
  avatarChangeButton,
  formAvatar,
};

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

const imageViewCloseButton = document.querySelector(".popup__close-button"); //button of closing image-popup

const profile = document.querySelector(".profile"); //block profile
const textName = profile.querySelector(".profile__name"); //profile name
const textabout = profile.querySelector(".profile__about"); //profile about
const formEdit = popupEdit.querySelector(".popup__form_edit_type"); //form edit
const formAdd = document.querySelector(".popup__form_add_type");
const nameProfile = formEdit.querySelector("#name"); //input name
const aboutProfile = formEdit.querySelector("#about"); //input about
const titleElement = formAdd.querySelector("#title"); //input title
const imageElement = formAdd.querySelector("#image"); //input image link

const avatarChangeButton = document.querySelector(".profile__avatar-box");//avatar button
const popupAvatar = document.querySelector(".popup_avatar_type");// popup avatar
const formAvatar = popupAvatar.querySelector(".popup__form_avatar_type");// form avatar

import { initialCards } from "./cards.js";
import { Card, popupImage, itemsContainer } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

export const parameters = {
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
const popupAdd = document.querySelector(".popup_add_type"); //add-popup
const elementsAddOpenButton = document.querySelector(".profile__add-button"); //add-button
const elementsAddCloseButton = popupAdd.querySelector(".popup__close-button"); //close-button

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

const profileValid = new FormValidator(parameters, formEdit);
const cardValid = new FormValidator(parameters, formAdd);

//functions

//function open popup's
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", popupCloseByEsc);
}

//function close popup's
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupCloseByEsc);
}

//function of close popup's by over click
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});

//function of close popup's by Escape button
function popupCloseByEsc(evt) {
  if (evt.key == "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
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

function createCard(cardInfo) {
  const card = new Card(cardInfo, "#item");
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  const newCard = createCard(item, "#item");
  createCard(newCard);
  itemsContainer.prepend(newCard);
});

//function of submit new item
function formCardSubmitHandler(evt) {
  evt.preventDefault();
  itemsContainer.prepend(
    createCard({
      name: titleElement.value,
      link: imageElement.value,
    })
  );
  closePopup(popupAdd);
  titleElement.value = "";
  imageElement.value = "";
}

//Validations form's
profileValid.enableValidation();
cardValid.enableValidation();

profileEditOpenButton.addEventListener("click", openedProfilePopup); //edit-popup open
profileEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
}); //edit-popup close
formEdit.addEventListener("submit", formProfileSubmitHandler); //submit profile info

elementsAddOpenButton.addEventListener("click", () => {
  openPopup(popupAdd);
  cardValid._buttonCardSubmitDisabled();
}); //add-popup open

elementsAddCloseButton.addEventListener("click", () => {
  closePopup(popupAdd);
}); //add-popup close
formAdd.addEventListener("submit", formCardSubmitHandler); //submit create item

imageViewCloseButton.addEventListener("click", () => {
  closePopup(popupImage);
}); //image-popup close

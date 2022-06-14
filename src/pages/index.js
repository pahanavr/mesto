import './index.css';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {
  parameters,
  formEdit,
  formAdd,
  initialCards,
  profileEditOpenButton,
  elementsAddOpenButton,
  nameProfile,
  positionProfile,
} from "../scripts/utils/constants.js";

//validation section
const profileValid = new FormValidator(parameters, formEdit);
const cardValid = new FormValidator(parameters, formAdd);

//create section
function createCard(item) {
  const card = new Card(item, "#item", (name, link) => {
    popupImage.open(name, link);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

//render section
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardSection.addItem(card);
    },
  },
  ".elements"
);

const popupImage = new PopupWithImage(".popup_image_type");

const popupAdd = new PopupWithForm(".popup_add_type", {
  formCardSubmitHandler: (item) => {
  const inputList = {name: item['title-field'], link: item['image-field']};
  const card = createCard(inputList);
  cardSection.addNewItem(card);
  popupAdd.close();
  }
});

const profileInfo = new UserInfo(".profile__name", ".profile__position");

const popupEdit = new PopupWithForm(".popup_edit_type", {
formCardSubmitHandler: (item) => {
  profileInfo.setUserInfo(item['name-field'], item['position-field']);
  popupEdit.close();
}
});

elementsAddOpenButton.addEventListener("click", () => {
  popupAdd.open();
  cardValid.buttonCardSubmitDisabled();
});

profileEditOpenButton.addEventListener("click", () => {
  const { name, position } = profileInfo.getUserInfo();
  nameProfile.value = name;
  positionProfile.value = position;
  popupEdit.open();
});

profileValid.enableValidation();
cardValid.enableValidation();
cardSection.renderItems();
popupImage.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation.js";
import Api from "../scripts/components/Api.js";
import {
  parameters,
  formEdit,
  formAdd,
  profileEditOpenButton,
  elementsAddOpenButton,
  nameProfile,
  aboutProfile,
  avatarChangeButton,
  formAvatar,
} from "../scripts/utils/constants.js";

// create api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-44",
  headers: {
    authorization: "8eed5c67-fa9a-4d29-83a2-8bfe636f87ce",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([userInfo, items]) => {
    profileInfo.setUserInfo(userInfo);
    cardSection.renderItems(items);
  })
  .catch((err) => console.log(err));

//validation section
const profileValid = new FormValidator(parameters, formEdit);
const cardValid = new FormValidator(parameters, formAdd);
const avatarValid = new FormValidator(parameters, formAvatar);

//profile info
const profileInfo = new UserInfo(
  ".profile__name",
  ".profile__about",
  ".profile__avatar"
);

//create section
function createCard(item) {
  const card = new Card(item, "#item", {
    profileId: profileInfo.getUserInfo(),
    handleCardClick: (name, link) => {
      popupImage.open(name, link);
    },
    handleSetLike: () => {
      api
        .likeCard(card.getId())
        .then((data) => {
          card.toggleLike(data);
        })
        .catch((err) => console.log(err));
    },
    handleDeleteLike: () => {
      api
        .deleteLikeCard(card.getId())
        .then((data) => {
          card.toggleLike(data);
        })
        .catch((err) => console.log(err));
    },
    handleAcceptDelete: () => {
      popupDelete.open();
      popupDelete
        .deleteSubmitCard(() => {
          popupDelete.loading(true);
          api
            .deleteCard(card.getId())
            .then(() => {
              card.handleDeleteItem();
              popupDelete.close();
            })
            .catch((err) => console.log(err));
        })
        .finally(() => {
          popupDelete.loading(false);
        });
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

//render section
const cardSection = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      cardSection.addNewItem(card);
    },
  },
  ".elements"
);

//image popup
const popupImage = new PopupWithImage(".popup_image_type");

const popupAdd = new PopupWithForm(".popup_add_type", {
  formCardSubmitHandler: (item) => {
    popupAdd.loading(true);
    api
      .addNewCard(item)
      .then((item) => {
        const card = createCard(item);
        cardSection.addNewItem(card);
        popupAdd.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAdd.loading(false);
      });
  },
});

//edit popup
const popupEdit = new PopupWithForm(".popup_edit_type", {
  formCardSubmitHandler: (data) => {
    popupEdit.loading(true);
    api
      .editProfileInfo(data)
      .then((data) => {
        profileInfo.setUserInfo(data);
        popupEdit.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEdit.loading(false);
      });
  },
});

//avatar popup
const popupAvatar = new PopupWithForm(".popup_avatar_type", {
  formCardSubmitHandler: (data) => {
    popupAvatar.loading(true);
    api
      .changeAvatar(data)
      .then((data) => {
        profileInfo.setUserInfo(data);
        popupAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAvatar.loading(false);
      });
  },
});

//open add popup button
elementsAddOpenButton.addEventListener("click", () => {
  popupAdd.open();
  cardValid.buttonSubmitDisabled();
});

//open edit popup button
profileEditOpenButton.addEventListener("click", () => {
  const { name, about } = profileInfo.getUserInfo();
  nameProfile.value = name;
  aboutProfile.value = about;
  popupEdit.open();
});

//open avatar popup button
avatarChangeButton.addEventListener("click", () => {
  popupAvatar.open();
  avatarValid.buttonSubmitDisabled();
});

//delete popup
const popupDelete = new PopupWithConfirmation(".popup_delete_type");

profileValid.enableValidation();
cardValid.enableValidation();
avatarValid.enableValidation();
popupImage.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupAvatar.setEventListeners();
popupDelete.setEventListeners();

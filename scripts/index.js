const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

const openEditPopupButton = document.querySelector('.profile__edit-button');//button of opening edit-popup
const editPopup = document.querySelector('.popup_edit_type');//popup block
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');//button of closing edit-popup
const addPopup = document.querySelector('.popup_add_type');
const openAddPopupButton = document.querySelector('.profile__add-button');
const closeAddPopupButton = addPopup.querySelector('.popup__close-button');


let profile = document.querySelector('.profile');//block profile
let textName = profile.querySelector('.profile__name');//profile name
let textPosition = profile.querySelector('.profile__position');//profile position
let editFormElement = editPopup.querySelector('.popup__edit-form');//form edit
let addFormElement = document.querySelector('.popup__add-form');
let nameProfile = editFormElement.querySelector('#name');//input name
let positionProfile = editFormElement.querySelector('#position');//input position
let titleElement = addFormElement.querySelector('#title');//input title
let imageElement = addFormElement.querySelector('#image');//input image link

const itemsContainer = document.querySelector('.elements');//section elements
const itemTemplate = document.querySelector('#item').content.querySelector('.elements__item');//template of element

//handlers

//function of like elements
function likeButtonToggle(evt) {
    evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_active');
}

//function of deleting element
const handleDeleteItem = (evt) => {
    evt.target.closest('.elements__item').remove();
}


//generating item
const generateItem = (item) => {
    const newItem = itemTemplate.cloneNode(true);

    const newImageItem = newItem.querySelector('.elements__item-image');
    newImageItem.src = item.link;

    const newTitleItem = newItem.querySelector('.elements__item-name');
    newTitleItem.textContent = item.name;

    const likeButton = newItem.querySelector('.elements__like-button');
    likeButton.addEventListener('click', likeButtonToggle);

    const deleteButton = newItem.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', handleDeleteItem);

    return newItem;
}

//rendering of creating element
const createItem = (item) => {
    itemsContainer.prepend(generateItem(item));
}

initialCards.forEach((item) => {
    createItem(item);
});


//function of opening and closing edit-popup
function popupOpenToggle() {
    editPopup.classList.toggle('popup_opened');
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
  addPopup.classList.toggle('popup_opened');
}

//function of submit new item
function formItemSubmitHandler(evt) {
    evt.preventDefault();
    createItem({ 
      name: titleElement.value, 
      link: imageElement.value });
}

// //function of opening image of element
// const openImageElementButton = document.querySelector('.elements__item-image');
// const popupImageView = document.querySelector('.popup__image-view');

// function popupImageToggle() {
//     popupImageView.classList.add('popup__image-view_opened');
// }


openEditPopupButton.addEventListener('click', popupOpenToggle);//edit-popup open
closeEditPopupButton.addEventListener('click', popupOpenToggle);//edit-popup close
editFormElement.addEventListener('submit', formProfileSubmitHandler); //submit profile info
openAddPopupButton.addEventListener('click', addPopupOpenToggle);
closeAddPopupButton.addEventListener('click', addPopupOpenToggle);
addFormElement.addEventListener('submit', formItemSubmitHandler);

//openImageElementButton.addEventListener('click', popupImageToggle);//view-image-popup toggle

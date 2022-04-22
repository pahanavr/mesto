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

const openPopupEditButton = document.querySelector('.profile__edit-button');//button of opening edit-popup
const popup = document.querySelector('.popup');//popup block
const closePopupsButton = document.querySelector('.popup__close-button');//button of closing edit-popup

let profile = document.querySelector('.profile');//block profile
let textName = profile.querySelector('.profile__name');//profile name
let textPosition = profile.querySelector('.profile__position');//profile position
let formElement = popup.querySelector('.popup__edit-form');//form edit
let nameProfile = formElement.querySelector('#name');//input name
let positionProfile = formElement.querySelector('#position');//input position

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



// //Dom elements

// const elementContainer = document.querySelector('.elements');
// const form = document.querySelector('.popup__add-form');
// const inputAdd = document.querySelector('.popup__field');

// //обработчики событий
// const handleSubmitAddItemForm = (evt) => {
//     evt.preventDefault(); 
//     renderItem({ name: inputAdd.value })

//     inputAdd.value = '';
// };

// const handleDeleteItem = (evt) => {
//     evt.traget.closest('.elements__item').remove();
// }


// //Generating item



// //Render item

// const itemTemplate = document.querySelector('#element').content;




// // const renderItem = (item) => {
// //     elementContainer.insertAdjacentHTML(
// //     "afterbegin", 
// //     `
// //     <div class="elements__item">
// //         <img class="elements__item-image" src="${item.link}" alt="Карачаевск">
// //         <div class="elements__item-description">
// //             <h2 class="elements__item-name">${item.name}</h2>
// //             <button class="elements__like-button" type="button"></button>
// //         </div>
// //         <button class="elements__delete-button" type="button"></button>
// //     </div>
// //     `
// //     );
// // }

// initialCards.forEach((item) => {
//     renderItem(item);
// });

// form.addEventListener('submit', handleSubmitAddItemForm);


//___________________________________________________________________________



//function of opening and closing edit-popup
function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
}

//function of saving profile info
function formSubmitHandler(evt) {
    evt.preventDefault(); 
    textName.textContent = nameProfile.value;
    textPosition.textContent = positionProfile.value;    
    popupOpenToggle();
}


//function of saving element info
const openPopupAddButton = document.querySelector('.profile__add-button');//button of opening add-popup
let addFormElement = popup.querySelector('.popup__add-form');
let titleElement = document.querySelector('#title');//input title
let imageElement = document.querySelector('#image');//input image




//function of opening image of element
const openImageElementButton = document.querySelector('.elements__item-image');
const popupImageView = document.querySelector('.popup__image-view');

function popupImageToggle() {
    popupImageView.classList.add('popup__image-view_opened');
}



//function of creating element
function formSubmitHandler(evt) {
    evt.preventDefault(); 
    //textName.textContent = nameProfile.value;
    //textPosition.textContent = positionProfile.value;    
    popupImageToggle();
}


openPopupEditButton.addEventListener('click', popupOpenToggle);//edit-popup open
closePopupsButton.addEventListener('click', popupOpenToggle);//edit-popup close
formElement.addEventListener('submit', formSubmitHandler); //submit profile info
openImageElementButton.addEventListener('click', popupImageToggle);//view-image-popup toggle

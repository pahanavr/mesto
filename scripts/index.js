const openPopupButton = document.querySelector('.profile__edit-button');//кнопка открытия эдит попапа
const popup = document.querySelector('.popup');//попап
const closePopupButton = document.querySelector('.popup__close-button');//кнопка закрытия попапа

let profile = document.querySelector('.profile');
let textName = profile.querySelector('.profile__name');//имя профиля
let textPosition = profile.querySelector('.profile__position');//занятие профиля
let formElement = popup.querySelector('.popup__form');//форма
let nameProfile = formElement.querySelector('#name');//инпут имени
let positionProfile = formElement.querySelector('#position');//инпут занятия

//функция открытия и закрытия попапа
function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
}
//функция закрытия попапа кликом по пространству вокруг поля редактирования
function popupOverClick(evt) {
    console.log(evt.target);
    console.log(evt.currentTarget);
    if (evt.target === evt.currentTarget) {
        popupOpenToggle();
    }
}
//открытие попапа
openPopupButton.addEventListener('click', popupOpenToggle);
//закрытие попапа
closePopupButton.addEventListener('click', popupOpenToggle);
//закрытие попапа вне
popup.addEventListener('click', popupOverClick);
//заполнение инпутов
nameProfile.value = textName.textContent;
positionProfile.value = textPosition.textContent;

//функция сабмита
function formSubmitHandler(evt) {
    evt.preventDefault(); 
    textName.textContent = nameProfile.value;
    textPosition.textContent = positionProfile.value;    
    popupOpenToggle();
}
//сабмит
formElement.addEventListener('submit', formSubmitHandler); 




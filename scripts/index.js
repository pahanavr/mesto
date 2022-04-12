const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');

//Открытие и закрытие попапа
function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
}
//Закрытие попапа кликом по пространству вокруг поля редактирования
function popupOverClick(evt) {
    console.log(evt.target);
    console.log(evt.currentTarget);
    if (evt.target === evt.currentTarget) {
        popupOpenToggle();
    }
}


openPopupButton.addEventListener('click', popupOpenToggle);

closePopupButton.addEventListener('click', popupOpenToggle);

popup.addEventListener('click', popupOverClick);









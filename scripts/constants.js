const profileEditButton = document.querySelector('.profile__edit-button') //кнопка редактирования профиля
const profileForm = document.querySelector('.popup__form_type_edit-profile') //форма редактирования профиля
const profileEnterName = document.querySelector('.popup__enter_type_name') //поле ввода имени профиля
const profileEnterAbout = document.querySelector('.popup__enter_type_about') //поле ввода "о себе" в профиле
const newProfileName = document.querySelector('.profile__title') //новое имя профиля
const newProfileAbout = document.querySelector('.profile__subtitle') //новое о себе профиля

const addPlaceButton = document.querySelector('.profile__add-button') //кнопка добавления места

const closeButtonProfile = document.querySelector('.popup__close-button_type_edit-profile') // кнопка закрытия попапа редактирования профиля
const closeButtonAddPlace = document.querySelector('.popup__close-button_type_add-place') // кнопка закрытия попапа добавления места
const closeButtonImageXl = document.querySelector('.popup__close-button_type_image-xl') // кнопка закрытия попапа с фотографией

const popupEditProfile = document.querySelector('.popup_type_edit-profile') // попап редактирования профиля
const popupAddPlace = document.querySelector('.popup_type_add-place') // попап добавления места
const popupImageXl = document.querySelector('.popup_type_image-xl') // попап разворота фотографии места на весь экран

const inputPlaceName = document.querySelector('.popup__enter_type_name-place') //инпут добавления ссылки на изображение места
const inputPlaceLink = document.querySelector('.popup__enter_type_link-image') //инпут добавления названия места
const addPlaceForm = document.querySelector('.popup__form_type_add-place') //форма добавления нового места

const imageXlLink = document.querySelector('.popup__image-xl') //ссылка на картинку
const imageXlName = document.querySelector('.popup__title_type_image-xl') //подпись к картинке

const allSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__enter',
  submitButton: '.popup__submit-button',
  submitButtonDisabled: 'popup__submit-button_disabled',
  errorText: 'popup__error-message_active',
  inputTypeError: 'popup__enter_error'
}


//Объект со всеми необходимыми классами для валидации форм.

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


export { profileEditButton, profileForm, profileEnterName, profileEnterAbout, newProfileName, newProfileAbout,
          addPlaceButton, closeButtonProfile, closeButtonAddPlace, closeButtonImageXl, popupEditProfile, popupAddPlace,
          popupImageXl, inputPlaceName, inputPlaceLink, addPlaceForm, imageXlLink, imageXlName, allSelectors, initialCards }


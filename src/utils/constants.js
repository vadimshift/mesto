import { FormValidator } from '../components/FormValidator.js'

const profileEditButton = document.querySelector('.profile__edit-button') //кнопка редактирования профиля
const profileForm = document.querySelector('.popup__form_type_edit-profile') //форма редактирования профиля
const profileEnterName = document.querySelector('.popup__enter_type_name') //поле ввода имени профиля
const profileEnterAbout = document.querySelector('.popup__enter_type_about') //поле ввода "о себе" в профиле
const newProfileName = document.querySelector('.profile__title') //новое имя профиля
const newProfileAbout = document.querySelector('.profile__subtitle') //новое о себе профиля
const profileImage = document.querySelector('.profile__avatar') //картинка профиля

const addPlaceButton = document.querySelector('.profile__add-button') //кнопка добавления места

const popupEditProfile = document.querySelector('.popup_type_edit-profile') // попап редактирования профиля
const popupAddPlace = document.querySelector('.popup_type_add-place') // попап добавления места
const popupImageXl = document.querySelector('.popup_type_image-xl') // попап разворота фотографии места на весь экран
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar') //попап замены аватара профиля

const inputPlaceName = document.querySelector('.popup__enter_type_name-place') //инпут добавления ссылки на изображение места
const inputPlaceLink = document.querySelector('.popup__enter_type_link-image') //инпут добавления названия места
const addPlaceForm = document.querySelector('.popup__form_type_add-place') //форма добавления нового места
const changeAvatarForm = document.querySelector('.popup__form_type_change-avatar') //форма редактирования аватара

const imageXlLink = document.querySelector('.popup__image-xl') //ссылка на картинку
const imageXlName = document.querySelector('.popup__title_type_image-xl') //подпись к картинке
const elements = document.querySelector('.elements') // контейнер с карточками
const popups = document.querySelectorAll('.popup')

//Объект со всеми необходимыми классами для валидации форм.
const allSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__enter',
  submitButton: '.popup__submit-button',
  submitButtonDisabled: 'popup__submit-button_disabled',
  errorText: 'popup__error-message_active',
  inputTypeError: 'popup__enter_error'
}
//создаем экземпляр валидации для форм и включаем валидацию этой формы
const validationAddPlaceForm = new FormValidator(allSelectors, addPlaceForm)
const enableValidationAddPlaceForm = validationAddPlaceForm.enableValidation(addPlaceForm)

const validationProfileForm = new FormValidator(allSelectors, profileForm)
const enableValidationProfileForm = validationProfileForm.enableValidation(profileForm)

const validationChangeAvatarForm = new FormValidator(allSelectors, changeAvatarForm)
const enableValidationChangeAvatarForm = validationChangeAvatarForm.enableValidation(changeAvatarForm)

const options = {
  userUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/users/me',
  userAvatar: 'https://mesto.nomoreparties.co/v1/cohort-21/users/me/avatar',
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/cards',
  cardsUrlLike: 'https://mesto.nomoreparties.co/v1/cohort-21/cards/likes',
  headers: {
    authorization: '35068309-e434-48d0-a214-95dc9b740ad7',
    'Content-Type': 'application/json; charset=UTF-8'
  }
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Долина гор'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Заснеженная река'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Спальный район'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Фото горы'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'железнодорожные рельсы в лесу'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Вид на озеро Байкал и остров Ольхон'
  }
];


export {
  profileEditButton, profileForm, profileEnterName, profileEnterAbout, newProfileName, newProfileAbout,
  addPlaceButton, popupEditProfile, popupAddPlace,
  popupImageXl, inputPlaceName, inputPlaceLink, addPlaceForm, imageXlLink, imageXlName, allSelectors, initialCards,
  elements, validationAddPlaceForm, enableValidationAddPlaceForm, validationProfileForm, enableValidationProfileForm,
  popups, options, profileImage, enableValidationChangeAvatarForm, popupChangeAvatar
}


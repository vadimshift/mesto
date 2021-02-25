import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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
export const popupImageXl = document.querySelector('.popup_type_image-xl') // попап разворота фотографии места на весь экран

const inputPlaceName = document.querySelector('.popup__enter_type_name-place') //инпут добавления ссылки на изображение места
const inputPlaceLink = document.querySelector('.popup__enter_type_link-image') //инпут добавления названия места
const addPlaceForm = document.querySelector('.popup__form_type_add-place') //форма добавления нового места

export const imageXlLink = document.querySelector('.popup__image-xl') //ссылка на картинку
export const imageXlName = document.querySelector('.popup__title_type_image-xl') //подпись к картинке

const placeElements = document.querySelector('.elements') //контейнер с карточками места
const placeTemplate = document.querySelector('.template-place').content; //темплейт тег карточки места

const allPopup = Array.from(document.querySelectorAll('.popup')) //находим все попапы
const allInputsProfile = Array.from(profileForm.querySelectorAll('.popup__enter')) //находим все инпуты формы профиля
const allInputsAddPlace = Array.from(addPlaceForm.querySelectorAll('.popup__enter')) //находим все инпуты формы добавления места

const submitButtonAddPlace = document.querySelector('.popup__submit-button_type_add-place')
const submitButtonProfile = document.querySelector('.popup__submit-button_type_edit-profile')

export const allSelectors = {
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
//Вставляем информацию со страницы в инпуты формы редактирования профиля
const openPopupEditProfile = () => {
  profileEnterName.value = newProfileName.textContent
  profileEnterAbout.value = newProfileAbout.textContent
}

//функция открытия попапа
export function openPopup(popupElement) {
  popupElement.classList.add('popup_active')
  document.addEventListener('keydown', closePopupKeybord)
}

//функция закрытия попапа
function closePopup(popupElement) {
  popupElement.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupKeybord);
};

//закрытие попапа по клику на оверлей
function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup_active')) {
    closePopup(evt.target)
  }
}

//функция закрытия попапа нажатием на клавишу Esc
function closePopupKeybord(evt) {
  if(evt.key === 'Escape') {
     closePopup(document.querySelector('.popup_active'));
  }
}

//функция редактирования профиля
function hendleFormSubmit(evt) {
  evt.preventDefault();
  // Получение значение полей из свойства value
  const editName = profileEnterName.value
  const editAbout = profileEnterAbout.value

  // Вставка новых значений с помощью textContent
  newProfileName.textContent = editName
  newProfileAbout.textContent = editAbout

  closePopup(popupEditProfile)
}

//функция рендер карточки
function renderCards(item) {
  const card = new Card(item, '.template-place');
	const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
}

//функция рендер карточки для массива
function render() {
  initialCards.forEach(renderCards);
}

function enableVal (allSelectors, form) {
  const formvalid = new FormValidator(allSelectors, form)
  formvalid.enableValidation(form)
}

//функция добавления новой карточки места
function hendleAddPlace(evt) {
  evt.preventDefault();
  const data = {}
  data.name = inputPlaceName.value
  data.link = inputPlaceLink.value
  renderCards(data)
  addPlaceForm.reset()
  closePopup(popupAddPlace)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', hendleFormSubmit)
addPlaceForm.addEventListener('submit', hendleAddPlace)

popupEditProfile.addEventListener('keydown', closePopupKeybord)
popupAddPlace.addEventListener('keydown', closePopupKeybord)
popupImageXl.addEventListener('keydown', closePopupKeybord)

popupEditProfile.addEventListener('click', closePopupOverlay)
popupAddPlace.addEventListener('click', closePopupOverlay)
popupImageXl.addEventListener('click', closePopupOverlay)



profileEditButton.addEventListener('click', () => {openPopup(popupEditProfile); openPopupEditProfile(); submitButtonStatus(allInputsProfile, submitButtonProfile, allSelectors);}) //открытие формы редактирования профиля
/*addPlaceButton.addEventListener('click', () => {openPopup(popupAddPlace); submitButtonStatus(allInputsAddPlace, submitButtonAddPlace, allSelectors);}) //открытие формы добавления места*/
addPlaceButton.addEventListener('click', () => {openPopup(popupAddPlace); enableVal(allSelectors, addPlaceForm);})

closeButtonProfile.addEventListener('click', () => closePopup(popupEditProfile)) // закрытие папапа редактирования профиля
closeButtonAddPlace.addEventListener('click', () => closePopup(popupAddPlace)) // закрытие попапа добавления места
closeButtonImageXl.addEventListener('click', () => closePopup(popupImageXl)) // закрытие попапа с фотографией на весь экран

render()

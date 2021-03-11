import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { Popup } from '../components/Popup.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import {
  profileEditButton, profileForm, profileEnterName, profileEnterAbout, newProfileName,
  newProfileAbout, addPlaceButton, popupEditProfile, popupAddPlace, popupImageXl, inputPlaceName, inputPlaceLink,
  addPlaceForm, allSelectors, initialCards, imageXlLink, imageXlName, elements, validationAddPlaceForm,
  enableValidationAddPlaceForm, validationProfileForm, enableValidationProfileForm, popups
} from '../utils/constants.js'


const renderCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template-place', handleCardClick);
    const cardElement = card.generateCard();
    renderCards.addItem(cardElement)
  }
},
  '.elements');

const formAddPlace = new PopupWithForm({
  handleFormSubmit: (formData) => {
    const card = new Card(formData, '.template-place', handleCardClick);
    const cardElement = card.generateCard();
    renderCards.addItem(cardElement);
  }
}, '.popup_type_add-place');

const formProfileEdit = new PopupWithForm({
  handleFormSubmit: () => {
    userInfo.setUserInfo();
  }
}, '.popup_type_edit-profile');


const userInfo = new UserInfo('.popup__enter_type_name', '.popup__enter_type_about',
  '.popup_type_edit-profile', '.profile__title', '.profile__subtitle')

const popupPlace = new Popup('.popup_type_add-place')
const popupProfile = new Popup('.popup_type_edit-profile')

const popupWithImageXl = new PopupWithImage('.popup_type_image-xl')


export function handleCardClick(name, link) {
  popupWithImageXl.open(name, link)
}

profileEditButton.addEventListener('click', () => { popupProfile.open(); userInfo.getUserInfo(); validationProfileForm.resetValidation(); }) //открытие формы редактирования профиля
addPlaceButton.addEventListener('click', () => { popupPlace.open(); addPlaceForm.reset(); validationAddPlaceForm.resetValidation(); }) //открытие формы добавления карточки с местом

renderCards.renderItems() //рендерим массив с карточками
formAddPlace.setEventListeners(); // сабмит формы добавления маста
formProfileEdit.setEventListeners(); //сабмит формы редактирования места


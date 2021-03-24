import '../pages/index.css'

import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { Popup } from '../components/Popup.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import { Api } from '../components/Api.js'
import {
  profileEditButton, profileForm, profileEnterName, profileEnterAbout, newProfileName,
  newProfileAbout, addPlaceButton, popupEditProfile, popupAddPlace, popupImageXl, inputPlaceName, inputPlaceLink,
  addPlaceForm, allSelectors, initialCards, imageXlLink, imageXlName, elements, validationAddPlaceForm,
  enableValidationAddPlaceForm, validationProfileForm, enableValidationProfileForm, popups, options, profileImage
} from '../utils/constants.js'

//создали экземпляр api
const api = new Api(options)

//вставляем значения со страницы в форму редактирования профиля
function getUserInfoForm() {
  const info = userInfo.getUserInfo()
  profileEnterName.value = info.name
  profileEnterAbout.value = info.about
}
//рендер карточки
api.getCards()
  .then(data => {
    data.forEach(item => {
      creationCard(item)
    });
  })
  .catch(err => {
    console.log('Ошибка', err.message);
  });
//загрузка информации о профиле
api.getProfileInfo()
  .then(data => {
    newProfileName.textContent = data.name
    newProfileAbout.textContent = data.about
    profileImage.src = data.avatar
  })
  .catch(err => {
    console.log('Ошибка', err.message);
  });


function creationCard(item) {
  const card = new Card(item, '.template-place', handleCardClick, api);
  const cardElement = card.generateCard();
  renderCards.addItem(cardElement)
  
}

const renderCards = new Section({
  items: initialCards,
  renderer: (item) => {
    creationCard(item)
  }
},
  '.elements');

//добавление карточки чрез форму
const formAddPlace = new PopupWithForm({
  handleFormSubmit: (formData) => {
    console.log(formData)
    api.setNewCard(formData)
    //creationCard(formData)

  }
}, '.popup_type_add-place');

//редактирование профиля через форму
const formProfileEdit = new PopupWithForm({
  handleFormSubmit: (data) => {
    console.log(data)
    //userInfo.setUserInfo(data);
    api.setNewProfileInfo(data)
  }
}, '.popup_type_edit-profile');

const userInfo = new UserInfo('.profile__title', '.profile__subtitle')

const popupWithImageXl = new PopupWithImage('.popup_type_image-xl')


export function handleCardClick(name, link) {
  popupWithImageXl.open(name, link)
}

//открытие формы редактирования профиля
profileEditButton.addEventListener('click', () => {
  formProfileEdit.open();
  getUserInfoForm();
  validationProfileForm.resetValidation();
})

//открытие формы добавления карточки с местом
addPlaceButton.addEventListener('click', () => {
  formAddPlace.open();
  addPlaceForm.reset();
  validationAddPlaceForm.resetValidation();
})

//renderCards.renderItems() //рендерим массив с карточками
formAddPlace.setEventListeners();
formProfileEdit.setEventListeners();
popupWithImageXl.setEventListeners();
//-------------------тестим
addPlaceButton.addEventListener('click', () => {
  console.log('hello')
})



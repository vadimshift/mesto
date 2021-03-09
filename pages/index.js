import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { Popup } from '../components/Popup.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import {
  profileEditButton, profileForm, profileEnterName, profileEnterAbout, newProfileName,
  newProfileAbout, addPlaceButton, popupEditProfile, popupAddPlace, popupImageXl, inputPlaceName, inputPlaceLink,
  addPlaceForm, allSelectors, initialCards, imageXlLink, imageXlName, elements, validationAddPlaceForm,
  enableValidationAddPlaceForm, validationProfileForm, enableValidationProfileForm, popups
} from '../utils/constants.js'

//Вставляем информацию со страницы в инпуты формы редактирования профиля
const openPopupEditProfile = () => {
  profileEnterName.value = newProfileName.textContent
  profileEnterAbout.value = newProfileAbout.textContent
}

//Создаем экземпляр класса Section
const renderCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template-place', handleCardClick);
    const cardElement = card.generateCard();
    renderCards.addItem(cardElement)
    //elements.prepend(cardElement);
  }
},
  '.elements');

const formAddPlace = new PopupWithForm({
  formSelector: '.popup__form_type_add-place',
  handleFormSubmit: (formData) => {
    const card = new Card(formData, '.template-place', handleCardClick);
    const cardElement = card.generateCard();
    renderCards.addItem(cardElement);
  }
}, '.popup_type_add-place');

const popupPlace = new Popup('.popup_type_add-place')
const popupProfile = new Popup('.popup_type_edit-profile')

const popupWithImageXl = new PopupWithImage(imageXlLink.src, imageXlName.textContent, '.popup_type_image-xl')


export function handleCardClick(name, link) {
  imageXlLink.src = link;
  imageXlName.textContent = name;
  popupWithImageXl.open(name, link)
}

/*
//открытие попапа с большой картинкой
export function handleCardClick(name, link) {
  imageXlLink.src = link
  imageXlName.textContent = name
  openPopup(popupImageXl)
}*/

/*
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
*/
/*
//закрытие попапа по клику на оверлей
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(evt.target)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})
*/

/*
//функция закрытия попапа нажатием на клавишу Esc
function closePopupKeybord(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_active'));
  }
}
*/

//функция редактирования профиля
export function hendleFormSubmit(evt) {
  evt.preventDefault();
  // Получение значение полей из свойства value
  const editName = profileEnterName.value
  const editAbout = profileEnterAbout.value

  // Вставка новых значений с помощью textContent
  newProfileName.textContent = editName
  newProfileAbout.textContent = editAbout

  popupProfile.close()
}

/*
//функция рендер карточки
function renderCards(item) {
  const card = new Card(item, '.template-place', handleCardClick);
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
}
*/
/*
//функция рендер карточки для массива
function render() {
  initialCards.forEach(renderCards);
}
*/
/*
//функция добавления новой карточки места
function hendleAddPlace(evt) {
  evt.preventDefault();
  const data = {}
  data.name = inputPlaceName.value
  data.link = inputPlaceLink.value
  //renderCards(data)
  renderCards.addItem(data)
  addPlaceForm.reset()
  popupPlace.close()
}*/

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//addPlaceForm.addEventListener('submit', () => {formAddPlace.setEventListeners();})
//addPlaceForm.addEventListener('submit', hendleAddPlace)

formAddPlace.setEventListeners();

profileEditButton.addEventListener('click', () => { popupProfile.open(); openPopupEditProfile(); validationProfileForm.resetValidation(); }) //открытие формы редактирования профиля
//addPlaceButton.addEventListener('click', () => { openPopup(popupAddPlace); addPlaceForm.reset(); validationAddPlaceForm.resetValidation(); }) //открытие формы добавления места
addPlaceButton.addEventListener('click', () => { popupPlace.open(); addPlaceForm.reset(); validationAddPlaceForm.resetValidation(); })



renderCards.renderItems()



import { Card } from '../components/Card.js'
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


//открытие попапа с большой картинкой
export function handleCardClick(name, link) {
  imageXlLink.src = link
  imageXlName.textContent = name
  openPopup(popupImageXl)
}

//функция закрытия попапа нажатием на клавишу Esc
function closePopupKeybord(evt) {
  if (evt.key === 'Escape') {
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
  const card = new Card(item, '.template-place', handleCardClick);
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
}

//функция рендер карточки для массива
function render() {
  initialCards.forEach(renderCards);
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

profileEditButton.addEventListener('click', () => { openPopup(popupEditProfile); openPopupEditProfile(); validationProfileForm.resetValidation(); }) //открытие формы редактирования профиля
addPlaceButton.addEventListener('click', () => { openPopup(popupAddPlace); addPlaceForm.reset(); validationAddPlaceForm.resetValidation(); }) //открытие формы добавления места

render()

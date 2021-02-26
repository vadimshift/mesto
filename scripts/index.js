import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { profileEditButton, profileForm, profileEnterName, profileEnterAbout, newProfileName,
         newProfileAbout, addPlaceButton, closeButtonProfile, closeButtonAddPlace,
        closeButtonImageXl, popupEditProfile, popupAddPlace, popupImageXl, inputPlaceName, inputPlaceLink,
        addPlaceForm, allSelectors, initialCards, imageXlLink, imageXlName } from './constants.js'

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
//открытие попапа с большой картинкой
export function handleCardClick(name, link) {
  imageXlLink.src = link
  imageXlName.textContent = name
  openPopup(popupImageXl)
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
  const card = new Card(item, '.template-place', handleCardClick);
	const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
}

//функция рендер карточки для массива
function render() {
  initialCards.forEach(renderCards);
}

//функция включения валидации формы
function enableValidationForm (allSelectors, form) {
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



profileEditButton.addEventListener('click', () => {openPopup(popupEditProfile); openPopupEditProfile(); enableValidationForm(allSelectors, profileForm);}) //открытие формы редактирования профиля
addPlaceButton.addEventListener('click', () => {openPopup(popupAddPlace); enableValidationForm(allSelectors, addPlaceForm);}) //открытие формы добавления места

closeButtonProfile.addEventListener('click', () => closePopup(popupEditProfile)) // закрытие папапа редактирования профиля
closeButtonAddPlace.addEventListener('click', () => closePopup(popupAddPlace)) // закрытие попапа добавления места
closeButtonImageXl.addEventListener('click', () => closePopup(popupImageXl)) // закрытие попапа с фотографией на весь экран

render()

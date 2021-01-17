const editButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')

const openPopup = document.querySelector('.popup')
const closePopup = document.querySelector('.popup__close-button')

const openPopupAdd = document.querySelector('.popup-add-place')
const closePopupAdd = document.querySelector('.popup-add-place__close-button')

const formElement = document.querySelector('.popup__edit-form')
const nameInput = document.querySelector('.popup__edit_input_name')
const jobInput = document.querySelector('.popup__edit_input_about')
const newNameInput = document.querySelector('.profile__title')
const newJobInput = document.querySelector('.profile__subtitle')

const addPlaceForm = document.querySelector('.popup-add-place__add-form')

const inputImagePlace = document.querySelector('.popup-add-place__add_input_link-place')
const inputNamePlace = document.querySelector('.popup-add-place__add_input_name-place')

const imagePlace = document.querySelector('.element__image')
const namePlace = document.querySelector('element__text-title')


const placeElements = document.querySelector('.elements')
const placeTemplate = document.querySelector('.template-place').content;

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

/*function addPlace() {
  initialCards.forEach(element => placeElement = placeTemplate.cloneNode(true))


  placeElement.querySelector('.element__text-title').textContent = element.name
  placeElement.querySelector('.element__image').src = element.link
  placeElement.querySelector('.element__delete-button').addEventListener('click', hendlerDelete)

  placeElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')})

  placeElements.append(placeElement)
}*/

initialCards.forEach(function (element) {
  const placeElement = placeTemplate.cloneNode(true);

  placeElement.querySelector('.element__text-title').textContent = element.name
  placeElement.querySelector('.element__image').src = element.link
  placeElement.querySelector('.element__delete-button').addEventListener('click', hendlerDelete)

  placeElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')})

  placeElements.append(placeElement)
})

function hendlerDelete (evt) {
evt.target.closest('.element').remove();
}
//эта функция добавления карточки, она не работает.
function hendlerAddPlace(evt) {
  evt.preventDefault();

  let addImagePlace = inputImagePlace.value
  let addNamePlace = inputNamePlace.value

  console.log(addImagePlace)
  console.log(addNamePlace)
/*
  imagePlace.textContent = addImagePlace
  namePlace.textContent = addNamePlace
*/
  disabledPopup();

}

function activatePopupAdd() {
  openPopupAdd.classList.add('popup-add-place_active')
}

function activatePopup() {
  openPopup.classList.add('popup_active')
  //присваиваем текстовое значение профайла инпутам
  nameInput.value = newNameInput.textContent
  jobInput.value = newJobInput.textContent
}

function disabledPopup() {
  openPopup.classList.remove('popup_active')
  openPopupAdd.classList.remove('popup-add-place_active')
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  // Получите значение полей из свойства value
  let editName = nameInput.value
  let editAbout = jobInput.value

  // Вставьте новые значения с помощью textContent
  newNameInput.textContent = editName
  newJobInput.textContent = editAbout
  disabledPopup()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
addPlaceForm.addEventListener('submit', hendlerAddPlace)
editButton.addEventListener('click', activatePopup)
addButton.addEventListener('click', activatePopupAdd)
closePopup.addEventListener('click', disabledPopup)
closePopupAdd.addEventListener('click', disabledPopup)

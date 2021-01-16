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

function activatePopupAdd() {
  openPopupAdd.classList.add('popup-add-place_active')
}

function activatePopup() {
  openPopup.classList.add('popup_active')
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
editButton.addEventListener('click', activatePopup)
addButton.addEventListener('click', activatePopupAdd)
closePopup.addEventListener('click', disabledPopup)
closePopupAdd.addEventListener('click', disabledPopup)

let editButton = document.querySelector('.profile__edit-button')
let openPopup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close-button')
let formElement = document.querySelector('.popup__edit-form')
let nameInput = document.querySelector('.popup__edit_input_name')
let jobInput = document.querySelector('.popup__edit_input_about')
let newNameInput = document.querySelector('.profile__title')
let newJobInput = document.querySelector('.profile__subtitle')


function activatePopup() {
  openPopup.classList.add('popup_active') 
  //присваиваем текстовое значение профайла инпутам
  nameInput.value = newNameInput.textContent
  jobInput.value = newJobInput.textContent

}

function disabledPopup() {
  openPopup.classList.remove('popup_active')
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
closePopup.addEventListener('click', disabledPopup)


let editButton = document.querySelector('.profile__edit-button')
let openPopup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close-button')
let submitBtn = document.querySelector('.popup__submit-button')

editButton.addEventListener('click', () => {
  openPopup.classList.add('popup_active')
})

closePopup.addEventListener('click', () => {
  openPopup.classList.remove('popup_active')
})

// Находим форму в DOM
let formElement = document.querySelector('.popup__edit-form')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  let nameInput = formElement.querySelector('.popup__edit-name')// Воспользуйтесь инструментом .querySelector()
  let jobInput = formElement.querySelector('.popup__edit-about-me')// Воспользуйтесь инструментом .querySelector()

  // Получите значение полей из свойства value
  let editName = nameInput.value
  let editAbout = jobInput.value

  // Выберите элементы, куда должны быть вставлены значения полей
  let newNameInput = document.querySelector('.profile-info__title')
  let newJobInput = document.querySelector('.profile-info__subtitle')

  // Вставьте новые значения с помощью textContent
  newNameInput.textContent = editName
  newJobInput.textContent = editAbout

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);




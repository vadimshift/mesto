let editButton = document.querySelector('.profile__edit-button')
let openPopup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close-button')

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
  nameInput.value
  jobInput.value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

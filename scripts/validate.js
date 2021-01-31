const formProfileEdit = document.forms.profile //форма редактирования профиля
const formAddPlace = document.forms.place //форма добавления места

const inputNameProfile = formProfileEdit.elements.enterNameProfile //инпут ввода имени
const inputAboutProfile = formProfileEdit.elements.enterAboutProfile //инпут ввода о себе
const inputNamePlace = formAddPlace.elements.enterNamePlace //инпут добавления названия места
const inputLinkPlace = formAddPlace.elements.enterLinkPlace //инпут добавления ссылки места

const submitButton = document.querySelector('.popup__submit-button')


//проверка инпутов на валидность
function inputValid(evt) {
  const isValid = inputNameProfile.value.length > 0 && inputAboutProfile.value.length > 0 || inputNamePlace.value.length > 0 && inputLinkPlace.value.lengthh > 0
  submitButtonState(isValid)
}

//меняет состояние кнопки (работает только с одним попапом)
function submitButtonState(isFormValid) {
  if (isFormValid) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('popup__submit-button_disabled');
  } else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('popup__submit-button_disabled');
  }
}


formProfileEdit.addEventListener('input', inputValid)
formAddPlace.addEventListener('input', inputValid)

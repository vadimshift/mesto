/*const formProfileEdit = document.forms.profile //форма редактирования профиля
const formAddPlace = document.forms.place //форма добавления места

const inputNameProfile = formProfileEdit.elements.enterNameProfile //инпут ввода имени
const inputAboutProfile = formProfileEdit.elements.enterAboutProfile //инпут ввода о себе
const inputNamePlace = formAddPlace.elements.enterNamePlace //инпут добавления названия места
const inputLinkPlace = formAddPlace.elements.enterLinkPlace //инпут добавления ссылки места

const submitButton = document.querySelector('.popup__submit-button')
const inputsProfile = Array.from(formProfileEdit.elements).filter(input => input.type !== 'submit');
const formError = formProfileEdit.querySelector('.popup__error-message')

//функция для всех иппутов профиля
inputsProfile.forEach(input => {
  input.addEventListener('input', function (evt) {
    console.log(evt.target.validity)
  })
})*/
/*
const showError = (input, errorMessage) => {
  input.classList.add('popup__error-message');
  formError.textContent = errorMessage;
}

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
*/
/*const allForms = Array.from(document.querySelectorAll('.popup__form'))
const inputs = Array.from(document.querySelectorAll('.popup__enter'))


const showErrorMessage = (input) => {
  input.classList.add('popup__error-message');
};

const hideErrorMessage = (input) => {
  input.classList.remove('popup__error-message');
};

const checkInputValidity = () => {
  if(!inputs.validity) {
    showErrorMessage(inputs)
  } else {
    hideErrorMessage(inputs)
  }
};

inputs.forEach(input => {
  input.addEventListener('input', function (evt) {
    console.log('hello')
  })
})*/

const formProfileEdit = document.forms.profile
const inputNameProfile = formProfileEdit.elements.enterNameProfile //инпут ввода имени
const formError = formProfileEdit.querySelector(`.${inputNameProfile.id}-error`);

// Функция, которая добавляет класс с ошибкой
const showInputError = (element, errorMessage) => {
  element.classList.add('popup__enter_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__error-message_active');
};

const hideInputError = (element) => {
  element.classList.remove('popup__enter_error');
  formError.classList.remove('popup__error-message_active');
  formError.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!inputNameProfile.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(inputNameProfile, inputNameProfile.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(inputNameProfile);
  }
};

inputNameProfile.addEventListener('input', isValid);





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
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('popup__enter_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error-message_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('popup__enter_error');
  errorElement.classList.remove('popup__error-message_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__enter'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement)
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Вызовем функцию
enableValidation();

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__submit-button_disabled');
    buttonElement.setAttribute('disabled', true)
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__submit-button_disabled');
    buttonElement.removeAttribute('disabled')
  }
};






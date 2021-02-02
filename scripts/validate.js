//Функция отображения сообщения об ошибке в инпутах
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('popup__enter_error')
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error-message_active')
}

//функция для скрытия сообщений об ошибке в инпутах
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('popup__enter_error')
  errorElement.classList.remove('popup__error-message_active')
  errorElement.textContent = ''
}

// Функция, которая проверяет валидность инпута
const isValidInput = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
}

//функция добавляет обработчики всем инпутам
const setEventListeners = (formElement) => {
  const allInputs = Array.from(formElement.querySelectorAll('.popup__enter')); //делаем массив из всех инпутов
  const submitButton = formElement.querySelector('.popup__submit-button');
  allInputs.forEach((inputElement) => {
    // каждому полю добавляем обработчик события input
    inputElement.addEventListener('input', () => {
      // Вызываем isValid, передаем форму и инпут
      isValidInput(formElement, inputElement)
      submitButtonStatus(allInputs, submitButton);
    })
  })
}

//функция для обработки всех форм
const enableValidation = () => {
  const allForms = Array.from(document.querySelectorAll('.popup__form')); //делаем массив из всех форм
  allForms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formElement); // Для каждой формы вызовем функцию setEventListeners
  })
}

//функция проверяет наличие невалидного инпута
const inputCheckValidity = (inputList) => {
    return inputList.some((inputElement) => {
    // Если поле не валидно, вернем true
    // Обход массива прекратится и вся фунцкция
    // inputCheckValidity вернёт true
    return !inputElement.validity.valid;
  })
}


// функция меняет статус кнопки в зависимости от валидности инпутов
const submitButtonStatus = (inputList, submitButton) => {
    if (inputCheckValidity(inputList)) {
    // делаем кнопку неактивной
    submitButton.classList.add('popup__submit-button_disabled');
    submitButton.setAttribute('disabled', true)
  } else {
    // иначе делаем кнопку активной
    submitButton.classList.remove('popup__submit-button_disabled');
    submitButton.removeAttribute('disabled')
  }
};

enableValidation()




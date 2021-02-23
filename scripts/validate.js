//Функция отображения сообщения об ошибке в инпутах
const showInputError = (formElement, inputElement, errorMessage, allSelectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(allSelectors.inputTypeError)
  errorElement.textContent = errorMessage;
  errorElement.classList.add(allSelectors.errorText)
}

//функция для скрытия сообщений об ошибке в инпутах
const hideInputError = (formElement, inputElement, allSelectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(allSelectors.inputTypeError)
  errorElement.classList.remove(allSelectors.errorText)
  errorElement.textContent = ''
}

// Функция, которая проверяет валидность инпута
const isValidInput = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage, allSelectors);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, allSelectors);
  }
}

//функция добавляет обработчики всем инпутам
const setEventListeners = (formElement, allSelectors) => {
  const allInputs = Array.from(formElement.querySelectorAll(allSelectors.inputSelector)) //делаем массив из всех инпутов
  const submitButton = formElement.querySelector(allSelectors.submitButton)
  allInputs.forEach((inputElement) => {
    // каждому полю добавляем обработчик события input
    inputElement.addEventListener('input', () => {
      // Вызываем isValid, передаем форму и инпут
      isValidInput(formElement, inputElement)
      submitButtonStatus(allInputs, submitButton, allSelectors);
    })
  })
}

//функция для обработки всех форм
const enableValidation = (allSelectors) => {
  const allForms = Array.from(document.querySelectorAll(allSelectors.formSelector)); //делаем массив из всех форм
  allForms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(formElement, allSelectors); // Для каждой формы вызовем функцию setEventListeners
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
const submitButtonStatus = (inputList, submitButton, allSelectors) => {
    if (inputCheckValidity(inputList)) {
    // делаем кнопку неактивной
    submitButton.classList.add(allSelectors.submitButtonDisabled);
    submitButton.setAttribute('disabled', true)
  } else {
    // иначе делаем кнопку активной
    submitButton.classList.remove(allSelectors.submitButtonDisabled);
    submitButton.removeAttribute('disabled')
  }
};

const allSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__enter',
  submitButton: '.popup__submit-button',
  submitButtonDisabled: 'popup__submit-button_disabled',
  errorText: 'popup__error-message_active',
  inputTypeError: 'popup__enter_error'
}

enableValidation(allSelectors)


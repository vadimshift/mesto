export class FormValidator {
  constructor(allSelectors, form) {
    this._allSelectors = allSelectors
    this._form = form
  }

  _showInputError (formElement, inputElement, errorMessage, allSelectors) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._allSelectors)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._allSelectors)
  }

  _hideInputError (formElement, inputElement, allSelectors) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._allSelectors)
    errorElement.classList.remove(this._allSelectors)
    errorElement.textContent = ''
  }

  _isValidInput (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(this._form, inputElement, inputElement.validationMessage, this._allSelectors);
    } else {
      // Если проходит, скроем
      hideInputError(this._form, inputElement, this._allSelectors);
    }
  }

  _setEventListeners(formElement, allSelectors) {
    const allInputs = Array.from(this._form.querySelectorAll(this._inputSelector)) //делаем массив из всех инпутов
    const submitButton = this._form.querySelector(this._submitButton)
    allInputs.forEach((inputElement) => {
      // каждому полю добавляем обработчик события input
      inputElement.addEventListener('input', () => {
        // Вызываем isValid, передаем форму и инпут
        isValidInput(this._form, inputElement)
        submitButtonStatus(allInputs, submitButton, allSelectors);
      })
    })
  }

  enableValidation(formElement) {
    const allForms = Array.from(document.querySelectorAll(this._formSelector)); //делаем массив из всех форм
    allForms.forEach((formElement) => {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      })
      setEventListeners(this._form, this._allSelectors); // Для каждой формы вызовем функцию setEventListeners
    })
  }

  _inputCheckValidity (inputList) {
    return inputList.some((inputElement) => {
      // Если поле не валидно, вернем true
      // Обход массива прекратится и вся фунцкция
      // inputCheckValidity вернёт true
      return !inputElement.validity.valid;
    })
  }

  _submitButtonStatus (inputList, submitButton, allSelectors) {
    if (inputCheckValidity(inputList)) {
      // делаем кнопку неактивной
      submitButton.classList.add(this._submitButtonDisabled);
      submitButton.setAttribute('disabled', true)
    } else {
      // иначе делаем кнопку активной
      submitButton.classList.remove(this._submitButtonDisabled);
      submitButton.removeAttribute('disabled')
    }
  }

}

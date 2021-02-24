import { allSelectors } from './index.js'
export class FormValidator {
  constructor(allSelectors, form) {
    this._allSelectors = allSelectors
    this._form = form
  }

  _showInputError() {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._allSelectors.inputTypeError)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._allSelectors.errorText)
  }

  _hideInputError() {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._allSelectors.inputTypeError)
    errorElement.classList.remove(this._allSelectors.errorText)
    errorElement.textContent = ''
  }

  _isValidInput() {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement, inputElement, inputElement.validationMessage, this._allSelectors);
    } else {
      // Если проходит, скроем
      hideInputError(formElement, inputElement, this._allSelectors);
    }
  }

  _setEventListeners() {
    const allInputs = Array.from(this._form.querySelectorAll(this._allSelectors.inputSelector)) //делаем массив из всех инпутов
    const submitButton = this._form.querySelector(this._allSelectors.submitButton)
    allInputs.forEach((inputElement) => {
      // каждому полю добавляем обработчик события input
      inputElement.addEventListener('input', () => {
        // Вызываем isValid, передаем форму и инпут
        isValidInput(formElement, inputElement)
        submitButtonStatus(allInputs, submitButton, this._allSelectors);
      })
    })

  }
  enableValidation() {
    const allForms = Array.from(document.querySelectorAll(this.allSelectors.formSelector)); //делаем массив из всех форм
    allForms.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      })
      setEventListeners(formElement, this.allSelectors); // Для каждой формы вызовем функцию setEventListeners
    })
  }

  _inputCheckValidity() {
    return inputList.some((inputElement) => {
      // Если поле не валидно, вернем true
      // Обход массива прекратится и вся фунцкция
      // inputCheckValidity вернёт true
      return !inputElement.validity.valid;
    })
  }

  _submitButtonStatus() {
    if (inputCheckValidity(inputList)) {
      // делаем кнопку неактивной
      submitButton.classList.add(this._allSelectors.submitButtonDisabled);
      submitButton.setAttribute('disabled', true)
    } else {
      // иначе делаем кнопку активной
      submitButton.classList.remove(this._allSelectors.submitButtonDisabled);
      submitButton.removeAttribute('disabled')
    }
  }

}


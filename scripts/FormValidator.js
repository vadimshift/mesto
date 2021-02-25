export class FormValidator {
  constructor(config, form) {
    this._config = config
    this._form = form
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._submitButton = config.submitButton
    this._submitButtonDisabled = config.submitButtonDisabled
    this._errorText = config.errorText
    this._inputTypeError = config.inputTypeError

  }
  enableValidation() {
    this._setEventListeners()

  }

  _setEventListeners() {

    this._allInputs = Array.from(this._form.querySelectorAll(this._inputSelector))
    this._submitButton = this._form.querySelector(this._submitButton)
    this._submitButtonStatus(this._allInputs)
    this._allInputs.forEach((inputElement) => {
      // каждому полю добавляем обработчик события input
      inputElement.addEventListener('input', () => {
        // Вызываем isValid, передаем форму и инпут
        this._isValidInput(inputElement)
        this._submitButtonStatus(this._allInputs, this._submitButton);
      })
    })

  }
  _isValidInput(inputElement) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);
    }
  }
  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._inputTypeError)
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorText)
  }

  _hideInputError(inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._inputTypeError)
    this._errorElement.classList.remove(this._errorText)
    this._errorElement.textContent = ''
  }

  _inputCheckValidity(allInputs) {
    return allInputs.some((inputElement) => {
      // Если поле не валидно, вернем true
      // Обход массива прекратится и вся фунцкция
      // inputCheckValidity вернёт true
      return !inputElement.validity.valid;
    })
  }
  _submitButtonStatus(allInputs) {
    if (this._inputCheckValidity(allInputs)) {
      // делаем кнопку неактивной
      this._submitButton.classList.add(this._submitButtonDisabled);
      this._submitButton.setAttribute('disabled', true)
    } else {
      // иначе делаем кнопку активной
      this._submitButton.classList.remove(this._submitButtonDisabled);
      this._submitButton.removeAttribute('disabled')
    }
  }


}


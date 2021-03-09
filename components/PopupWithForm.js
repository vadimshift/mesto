import { Popup } from '../components/Popup.js'
export class PopupWithForm extends Popup {
  constructor({ formSelector, handleFormSubmit, popupSelector }) {
    super(popupSelector);
    //super._popup = document.querySelector(popupSelector);
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__enter');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
     //super.setEventListeners();
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._element.reset();
    })
  }

  close() {
    super.close()
    this._formSelector.reset();
  }
}


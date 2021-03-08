import { Popup } from '../components/Popup.js'
export class PopupWithForm extends Popup {
  constructor(formSubmit, popupSelector) {
    super(popupSelector);
    super._popup = document.querySelector(popupSelector);
    this._formSubmit = formSubmit;
  }
  _getInputValues() {
    this._inputValue = Array.from(document.querySelectorAll('.popup__enter').value)
  }
  setEventListeners() {
    this._popup.addEventListener('submit', this._formSubmit)
  }
  close() {
    this._popup.reset();
  }
}



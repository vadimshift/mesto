import { Popup } from '../components/Popup.js'
export class PopupWithSubmit extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__submit-button')
    this._handleFormSubmit = handleFormSubmit;
    }

  setSubmitAction() {
    this._submitButton.addEventListener('click', () => {
      //this._handleFormSubmit()
    this.close()
    })

  }
}

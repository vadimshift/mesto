import { Popup } from '../components/Popup.js'
export class PopupWithSubmit extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit();
      this.close()
    })
  }
}

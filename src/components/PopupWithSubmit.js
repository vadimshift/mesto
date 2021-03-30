import { Popup } from "../components/Popup.js";
export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector(".popup__submit-button");
  }

  setSubmitAction(submitFunction) {
    this._handleFormSubmit = submitFunction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
  }
}

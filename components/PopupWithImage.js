import { Popup } from '../components/Popup.js'
export class PopupWithImage extends Popup {
  constructor(name, link, popupSelector) {
    super(popupSelector);
    super._popup = document.querySelector(popupSelector);
    this._link = link;
    this._name = name;
  }
  open() {
    this._link;
    this._name;
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', super._handleEscClose(), super.setEventListeners())
  }
}


import { Popup } from '../components/Popup.js'
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    const img = this._popup.querySelector('.popup__image-xl')
    const title = this._popup.querySelector('.popup__title_type_image-xl')
    img.src = link
    title.textContent = name
    super.open()
  }
}


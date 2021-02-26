import { popupImageXl, imageXlLink, imageXlName } from './constants.js'
import {openPopup } from './index.js'

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    // манипуляции с темплейт тегом
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }
  //подготовка карточки к публикации
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__text-title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeIcon();
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._hendleDeleteCard();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openPreviewImage();
    });
  }
  _handleLikeIcon() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }
  _hendleDeleteCard() {
    this._element.querySelector('.element__delete-button').closest('.element').remove();
  }
  _openPreviewImage() {
    openPopup(popupImageXl)
    imageXlName.textContent = this._name
    imageXlLink.src = this._link
  }
}


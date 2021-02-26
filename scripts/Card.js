export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;

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
    this._cardImage = this._element.querySelector('.element__image');
    this._cardLikeButton = this._element.querySelector('.element__like-button');
    this._cardDeleteButton = this._element.querySelector('.element__delete-button');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._element.querySelector('.element__text-title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeIcon();
    });
    this._cardDeleteButton.addEventListener('click', () => {
      this._hendleDeleteCard();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  _handleLikeIcon() {
    this._cardLikeButton.classList.toggle('element__like-button_active');
  }
  _hendleDeleteCard() {
    this._cardDeleteButton.closest('.element').remove();
  }
}


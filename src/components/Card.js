export class Card {
  constructor(data, cardSelector, handleCardClick, api) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._owner = data.owner._id;
    this._myId = '46a9409ea603dfec2fa8933c'
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._api = api
    this._data = data


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
    this._cardLikesAmount = this._element.querySelector('.element__like-amount');
    this._cardLikesAmount.textContent = this._likes;
    this._cardImage.src = this._link;
    this._element.querySelector('.element__text-title').textContent = this._name;
    this._setCardDeleteButton();
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
  _setCardDeleteButton() {
    if (this._myId === this._owner) {
      this._cardDeleteButton.classList.toggle('element__delete-button_active')
    }
  }
}


export class Card {
  constructor({ data, handleCardClick, handleLikeClick, handleDeleteIconClick }, cardSelector, api) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner._id;
    this._myId = '46a9409ea603dfec2fa8933c';
    this._cardId = data._id;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
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
    this._cardLikesAmount.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._element.querySelector('.element__text-title').textContent = this._name;
    //проверяем карточки, которые я лайкнул
    this._likes.some(data => {
      if (data._id === this._myId) {
        this._cardLikeButton.classList.add('element__like-button_active');
      }
    });

    this._setCardDeleteButton();
    this._setEventListeners();

    return this._element;
  }
  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeIcon(this.isLiked);
    });
    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteIconClick()
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeIcon() {
     this._handleLikeClick(this.isLiked())
  }

  deleteCard() {
    this._api.delCard(this.getMyCardId())
      .then(() => {
        this._cardDeleteButton.closest('.element').remove();
      })
      .catch(err => {
        console.log('Ошибка', err.message);
      });
  }

  _setCardDeleteButton() {
    if (this._myId === this._owner) {
      this._cardDeleteButton.classList.toggle('element__delete-button_active')
    }
  }

  getMyCardId() {
    if (this._myId === this._owner) {
      return this._cardId
    }
  }

  getCardId() {
    return this._cardId = this._data._id
  }

  isLiked() {
    if (this._cardLikeButton.classList.contains('element__like-button_active')) {
      return true;
    }
    else {
      return false;
    }
  }

  hedlelikeCard(data) {
    this._cardLikeButton.classList.toggle('element__like-button_active');
    this._cardLikesAmount.textContent = data.likes.length;
  }
}


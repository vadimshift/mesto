const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

class Card {
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
  }
  _handleLikeIcon() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }
}

initialCards.forEach((item) => {
  // передаём селектор темплейта при создании
	const card = new Card(item, '.template-place');
	const cardElement = card.generateCard();
// Добавляем в DOM
  document.querySelector('.elements').prepend(cardElement);
});

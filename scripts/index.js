const profileEditButton = document.querySelector('.profile__edit-button') //кнопка редактирования профиля
const profileForm = document.querySelector('.popup__form_type_edit-profile') //форма редактирования профиля
const profileEnterName = document.querySelector('.popup__enter_type_name') //поле ввода имени профиля
const profileEnterAbout = document.querySelector('.popup__enter_type_about') //поле ввода "о себе" в профиле
const newProfileName = document.querySelector('.profile__title') //новое имя профиля
const newProfileAbout = document.querySelector('.profile__subtitle') //новое о себе профиля

const addPlaceButton = document.querySelector('.profile__add-button') //кнопка добавления места

const closeButtonProfile = document.querySelector('.popup__close-button_type_edit-profile') // кнопка закрытия попапа редактирования профиля
const closeButtonAddPlace = document.querySelector('.popup__close-button_type_add-place') // кнопка закрытия попапа добавления места
const closeButtonImageXl = document.querySelector('.popup__close-button_type_image-xl') // кнопка закрытия попапа с фотографией

const popupEditProfile = document.querySelector('.popup_type_edit-profile') // попап редактирования профиля
const popupAddPlace = document.querySelector('.popup_type_add-place') // попап добавления места
const popupImageXl = document.querySelector('.popup_type_image-xl') // попап разворота фотографии места на весь экран

const inputPlaceName = document.querySelector('.popup__enter_type_name-place') //инпут добавления ссылки на изображение места
const inputPlaceLink = document.querySelector('.popup__enter_type_link-image') //инпут добавления названия места
const addPlaceForm = document.querySelector('.popup__form_type_add-place') //форма добавления нового места

const imageXlLink = document.querySelector('.popup__image-xl') //ссылка на картинку
const imageXlName = document.querySelector('.popup__title_type_image-xl') //подпись к картинке

const placeElements = document.querySelector('.elements') //контейнер с карточками места
const placeTemplate = document.querySelector('.template-place').content; //темплейт тег карточки места

const allPopup = Array.from(document.querySelectorAll('.popup')) //находим все попапы
const allInput = Array.from(document.querySelectorAll('.popup__enter')) //находим все инпуты

const submitButtonAddPlace = document.querySelector('.popup__submit-button_type_add-place')
const submitButtonProfile = document.querySelector('.popup__submit-button_type_edit-profile')

//Объект со всеми необходимыми классами для валидации форм.

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
//Вставляем информацию со страницы в инпуты формы редактирования профиля
const openPopupEditProfile = () => {
  profileEnterName.value = newProfileName.textContent
  profileEnterAbout.value = newProfileAbout.textContent
}

//функция открытия попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_active')
  document.addEventListener('keydown', closePopupKeybord)
}

//функция закрытия попапа
function closePopup(popupElement) {
  popupElement.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupKeybord);
};

//закрытие попапа по клику на оверлей
function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup_active')) {
    closePopup(evt.target)
  }
}

//функция закрытия попапа нажатием на клавишу Esc
function closePopupKeybord(evt) {
  if(evt.key === 'Escape') {
     closePopup(document.querySelector('.popup_active'));
  }
}

//функция редактирования профиля
function hendlerFormSubmit(evt) {
  evt.preventDefault();
  // Получение значение полей из свойства value
  const editName = profileEnterName.value
  const editAbout = profileEnterAbout.value

  // Вставка новых значений с помощью textContent
  newProfileName.textContent = editName
  newProfileAbout.textContent = editAbout

  closePopup(popupEditProfile)
}

//функция отрисовки разметки карточки с местом
function getCardElement(data) {
  const placeElement = placeTemplate.cloneNode(true); //клонируем темплейт тег
  const elementImage = placeElement.querySelector('.element__image') //переменная в которой содержится картинка из карточки

  placeElement.querySelector('.element__text-title').textContent = data.name //подставляем в темлейт тег название места
  placeElement.querySelector('.element__image').src = data.link //подставляем картинку (ссылку)

  placeElement.querySelector('.element__delete-button').addEventListener('click', hendlerDeleteCard) //удаляем карточку
  placeElement.querySelector('.element__like-button').addEventListener('click', handleLikeIcon) //ставим лайки на карточку
  //функция разворота картинки на весь экран
  elementImage.addEventListener('click', function (evt) {
    openPopup(popupImageXl)
    imageXlName.textContent = data.name
    imageXlLink.src = data.link
  })
  return placeElement
}

//функция рендер карточки
function renderCards(data) {
  placeElements.prepend(getCardElement(data))
}

//функция рендер карточки для массива
function render() {
  initialCards.forEach(renderCards);
}
//функция добавления новой карточки места
function hendlerAddPlace(evt) {
  evt.preventDefault();
  const data = {}
  data.name = inputPlaceName.value
  data.link = inputPlaceLink.value
  renderCards(data)
  addPlaceForm.reset()
  submitButtonStatus(allInput, submitButtonAddPlace, allSelectors)
  closePopup(popupAddPlace)
}

//лайк карточки места
function handleLikeIcon(evt) {
  evt.target.classList.toggle('element__like-button_active')
}

//удаление карточки места
function hendlerDeleteCard(evt) {
  evt.target.closest('.element').remove();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', hendlerFormSubmit)
addPlaceForm.addEventListener('submit', hendlerAddPlace)

popupEditProfile.addEventListener('keydown', closePopupKeybord)
popupAddPlace.addEventListener('keydown', closePopupKeybord)
popupImageXl.addEventListener('keydown', closePopupKeybord)

popupEditProfile.addEventListener('click', closePopupOverlay)
popupAddPlace.addEventListener('click', closePopupOverlay)
popupImageXl.addEventListener('click', closePopupOverlay)



profileEditButton.addEventListener('click', () => openPopup(popupEditProfile), openPopupEditProfile(), enableValidation(allSelectors)) //открытие формы редактирования профиля
addPlaceButton.addEventListener('click', () => openPopup(popupAddPlace), submitButtonStatus(allInput, submitButtonAddPlace, allSelectors)) //открытие формы добавления места

closeButtonProfile.addEventListener('click', () => closePopup(popupEditProfile)) // закрытие папапа редактирования профиля
closeButtonAddPlace.addEventListener('click', () => closePopup(popupAddPlace)) // закрытие попапа добавления места
closeButtonImageXl.addEventListener('click', () => closePopup(popupImageXl)) // закрытие попапа с фотографией на весь экран

render()

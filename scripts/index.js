const profileEditButton = document.querySelector('.profile__edit-button') //кнопка редактирования профиля
const profileForm = document.querySelector('.popup__form_type_edit-profile') //форма редактирования профиля
const profileEnterName = document.querySelector('.popup__enter_type_name') //поле ввода имени профиля
const profileEnterAbout = document.querySelector('.popup__enter_type_about') //поле ввода "о себе" в профиле
const newProfileName = document.querySelector('.profile__title') //новое имя профиля
const newProfileAbout = document.querySelector('.profile__subtitle') //новое о себе профиля

const addPlaceButton = document.querySelector('.profile__add-button') //кнопка добавления места

const closeButtonProfile = document.querySelector('.popup__close-button_type_edit-profile') // кнопка закрытия попапа редактирования профиля
const closeButtonAddPlace = document.querySelector('.popup__close-button_type_add-place') // кнопка закрытия попапа добавления места
const closeButtonImageXl = document.querySelector('popup__close-button_type_image') // кнопка закрытия попапа с фотографией

const popupEditProfile = document.querySelector('.popup_type_edit-profile') // попап редактирования профиля
const popupAddPlace = document.querySelector('.popup_type_add-place') // попап добавления места
const popupImageXl = document.querySelector('.popup_type_image-xl') // попап разворота фотографии места на весь экран

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


//функция открытия/закрытия попапа
const togglePopup = (popup) => {
  popup.classList.toggle('popup_active')
}

//функция редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  // Получение значение полей из свойства value
  const editName = profileEnterName.value
  const editAbout = profileEnterAbout.value

  // Вставка новых значений с помощью textContent
  newProfileName.textContent = editName
  newProfileAbout.textContent = editAbout

  togglePopup(popupEditProfile)
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', formSubmitHandler)


profileEditButton.addEventListener('click', () => togglePopup(popupEditProfile)) //открытие попапа редактирования профиля
addPlaceButton.addEventListener('click', () => togglePopup(popupAddPlace)) // открытие попапа добавления места
popupImageXl.addEventListener('click', () => togglePopup(popupImageXl)) // открытие попапа с фотографией на весь экран

closeButtonProfile.addEventListener('click', () => togglePopup(popupEditProfile)) // закрытие папапа редактирования профиля
closeButtonAddPlace.addEventListener('click', () => togglePopup(popupAddPlace)) // закрытие попапа добавления места
//closeButtonImageXl.addEventListener('click', () => togglePopup(popupImageXl)) // закрытие попапа с фотографией на весь экран




/*
const editButton = document.querySelector('.profile__edit-button') //кнопка редактирования профиля
const addButton = document.querySelector('.profile__add-button') //кнопка добавления места

const openPopup = document.querySelector('.popup') //открытие попапа профиля
const closePopup = document.querySelector('.popup__close-button') //закрытие попапа профиля

const openPopupAdd = document.querySelector('.popup_type_add-place') // открытие попапа места
const closePopupAdd = document.querySelector('.popup__close-button_type_add-place') //закрытие попапа места

const openPopupImage = document.querySelector('.popup_type_image')
const closePopupImage = document.querySelector('.popup__close-button_type_image')
const linkPopupImage = document.querySelector('.popup__image-xl')
const namePopupImage = document.querySelector('.popup__title_type_image-xl')

const formElement = document.querySelector('.popup__edit-form') //форма редактирования профиля
const nameInput = document.querySelector('.popup__edit_input_name') //инпут имя профиля
const jobInput = document.querySelector('.popup__edit_input_about') //инпут о себе профиля
const newNameInput = document.querySelector('.profile__title') //новое имя профиля
const newJobInput = document.querySelector('.profile__subtitle') //новое о себе профиля

const addPlaceForm = document.querySelector('.popup__edit-form_add-place') //форма добавления места

const inputImagePlace = document.querySelector('.popup__edit_type_input-link-image') //инпут добавления картинки места
const inputNamePlace = document.querySelector('.popup__edit_type_input-name-place') //инпут добавления названрия места

const placeElements = document.querySelector('.elements') //контейнер с карточками места
const placeTemplate = document.querySelector('.template-place').content; //темплейт тег карточки места

const popup = document.querySelector('.popup')

//массив с карточками места
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
// берем массив и выполняем рендер для каждого элемента массива
function render() {
  initialCards.forEach(renderItem);
}

//отрисовка карточек с местами
function renderItem(element) {
  const placeElement = placeTemplate.cloneNode(true); //клонируем темплейт тег

  placeElement.querySelector('.element__text-title').textContent = element.name //подставляем в темлейт тег название места
  placeElement.querySelector('.element__image').src = element.link //подставляем картинку (ссылку)

  placeElement.querySelector('.element__delete-button').addEventListener('click', hendlerDelete) //вешаем на кнопку удаление карточки с местом

  //лайк на карточке с местом
  placeElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')
  })

  //разворот фото на весь экран
  placeElement.querySelector('.element__image').addEventListener ('click', function(evt) {
    openPopupImage.classList.add('popup_active')
    namePopupImage.textContent = element.name
    linkPopupImage.src = element.link
  })
  placeElements.append(placeElement)
}

//удаление карточки места
function hendlerDelete(evt) {
  evt.target.closest('.element').remove();
}
//эта функция добавления карточки. Она заработала, но криво
function hendlerAddPlace(evt) {
  //evt.preventDefault();

  let addImagePlace = inputImagePlace.value
  let addNamePlace = inputNamePlace.value

  const placeElement = placeTemplate.cloneNode(true); //клонируем темплейт тег

  placeElement.querySelector('.element__text-title').textContent = addNamePlace //подставляем в темлейт тег название места
  placeElement.querySelector('.element__image').src = addImagePlace //подставляем картинку (ссылку)

  placeElement.querySelector('.element__delete-button').addEventListener('click', hendlerDelete) //вешаем на кнопку удаление карточки с местом

  //лайк на карточке с местом
  placeElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active')
  })
  placeElements.prepend(placeElement)
  evt.preventDefault();
  //renderItem()
  //imagePlace.textContent = addImagePlace
  //namePlace.textContent = addNamePlace
  disabledPopup();

}

//открытие попапа добавления места
function activatePopupAdd() {
  openPopupAdd.classList.add('popup_active')
}

function activatePopup() {
  openPopup.classList.add('popup_active')
  //присваиваем текстовое значение профайла инпутам
  nameInput.value = newNameInput.textContent
  jobInput.value = newJobInput.textContent
}

function disabledPopup() {
  openPopup.classList.remove('popup_active')
  openPopupAdd.classList.remove('popup_active')
  openPopupImage.classList.remove('popup_active')
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  // Получите значение полей из свойства value
  let editName = nameInput.value
  let editAbout = jobInput.value

  // Вставьте новые значения с помощью textContent
  newNameInput.textContent = editName
  newJobInput.textContent = editAbout
  disabledPopup()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler)
addPlaceForm.addEventListener('submit', hendlerAddPlace)
editButton.addEventListener('click', activatePopup)
addButton.addEventListener('click', activatePopupAdd)
closePopup.addEventListener('click', disabledPopup)
closePopupAdd.addEventListener('click', disabledPopup)
closePopupImage.addEventListener('click', disabledPopup)

//render();*/

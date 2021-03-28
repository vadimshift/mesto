import '../pages/index.css'

import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { Popup } from '../components/Popup.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithSubmit } from '../components/PopupWithSubmit.js'
import { UserInfo } from '../components/UserInfo.js'
import { Api } from '../components/Api.js'

import {
  profileEditButton, profileForm, profileEnterName, profileEnterAbout, newProfileName,
  newProfileAbout, addPlaceButton, popupEditProfile, popupAddPlace, popupImageXl, inputPlaceName, inputPlaceLink,
  addPlaceForm, allSelectors, initialCards, imageXlLink, imageXlName, elements, validationAddPlaceForm,
  enableValidationAddPlaceForm, validationProfileForm, enableValidationProfileForm, popups, options, profileImage,
  popupChangeAvatar, validationChangeAvatarForm, profileAvatarEditButton, enableValidationChangeAvatarForm,
  changeAvatarForm, submitDeleteButton
} from '../utils/constants.js'

//создали экземпляр api
const api = new Api(options)

const popupWithSubmit = new PopupWithSubmit('.popup_type_submit-form');

//вставляем значения со страницы в форму редактирования профиля
function getUserInfoForm() {
  const info = userInfo.getUserInfo()
  profileEnterName.value = info.name
  profileEnterAbout.value = info.about
}
//рендерим карточки, полученные с сервера
api.getCards()
  .then(data => {
    data.forEach(item => {
      creationCard(item)
    });
  })
  .catch(err => {
    console.log('Ошибка', err.message);
  });

//загрузка информации о профиле с сервера
api.getProfileInfo()
  .then(data => {
    newProfileName.textContent = data.name
    newProfileAbout.textContent = data.about
    profileImage.src = data.avatar
  })
  .catch(err => {
    console.log('Ошибка', err.message);
  });

//создаем карточку
function creationCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: (name, link) => {
      popupWithImageXl.open(name, link)
    },
    handleLikeClick: (isLiked) => {
      if (!isLiked) {
        api.setLikeCard(card.getCardId())
          .then((data) => {
            card.hedlelikeCard(data);
          })
          .catch(err => {
            console.log('Ошибка', err.message)
          })
      } else if (isLiked) {
        api.delLikeCard(card.getCardId())
          .then((data) => {
            card.hedlelikeCard(data);
          })
          .catch(err => {
            console.log('Ошибка', err.message)
          })
      }

    },

    handleDeleteIconClick: () => {
      popupWithSubmit.open() 
      popupWithSubmit.setSubmitAction(() => {
        card.deleteCard();
      });
    }
  },
    '.template-place', api);

  const cardElement = card.generateCard();
  renderCards.addItem(cardElement)

}

//вставляем карточку в разметку
const renderCards = new Section({
  renderer: (item) => {
    creationCard(item)
  }
},
  '.elements');

//добавление новой карточки через форму
const formAddPlace = new PopupWithForm({
  handleFormSubmit: (data) => {
    api.setNewCard(data)
      .then(data => {
        creationCard(data)
      })
      .catch(err => {
        console.log('Ошибка', err.message);
      });
  }
}, '.popup_type_add-place');

//редактирование профиля через форму
const formProfileEdit = new PopupWithForm({
  handleFormSubmit: (data) => {
    api.setNewProfileInfo(data)
      .then(data => {
        userInfo.setUserInfo(data)
      })
      .catch(err => {
        console.log('Ошибка', err.message)
      })
  }
}, '.popup_type_edit-profile')

//обновление аватара через форму
const formProfileAvatarEdit = new PopupWithForm({
  handleFormSubmit: (data) => {
    api.setNewAvatar(data)
      .then(data => {
        userInfo.setUserAvatar(data)
      })
      .catch(err => {
        console.log('Ошибка', err.message)
      })
  }
}, '.popup_type_change-avatar')



const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar')

const popupWithImageXl = new PopupWithImage('.popup_type_image-xl')

//открытие формы обновления аватара
profileAvatarEditButton.addEventListener('click', () => {
  formProfileAvatarEdit.open();
  changeAvatarForm.reset();
  validationChangeAvatarForm.resetValidation();
})


//открытие формы редактирования профиля
profileEditButton.addEventListener('click', () => {
  formProfileEdit.open();
  getUserInfoForm();
  validationProfileForm.resetValidation();
})

//открытие формы добавления карточки с местом
addPlaceButton.addEventListener('click', () => {
  formAddPlace.open();
  addPlaceForm.reset();
  validationAddPlaceForm.resetValidation();
})


formAddPlace.setEventListeners();
formProfileEdit.setEventListeners();
popupWithImageXl.setEventListeners();
popupWithSubmit.setEventListeners();
formProfileAvatarEdit.setEventListeners();





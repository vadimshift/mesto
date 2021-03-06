import "../pages/index.css";

import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

import {
  profileEditButton,
  profileForm,
  profileEnterName,
  profileEnterAbout,
  newProfileName,
  newProfileAbout,
  addPlaceButton,
  popupEditProfile,
  popupAddPlace,
  popupImageXl,
  inputPlaceName,
  inputPlaceLink,
  addPlaceForm,
  allSelectors,
  imageXlLink,
  imageXlName,
  elements,
  validationAddPlaceForm,
  enableValidationAddPlaceForm,
  validationProfileForm,
  enableValidationProfileForm,
  popups,
  options,
  profileImage,
  popupChangeAvatar,
  validationChangeAvatarForm,
  profileAvatarEditButton,
  enableValidationChangeAvatarForm,
  changeAvatarForm,
  submitDeleteButton,
  submitButtonAddPlace,
  submitbuttonEditProfile,
  submitButtonChangeAvatar,
  submitbuttonConfirm,
} from "../utils/constants.js";

let userId; //переменная, для записи id пользователя

//меняем текст и статус кнопки, во время ожидания ответа от сервера
function requestDownload(button, isLoading, buttonText) {
  if (isLoading) {
    button.textContent = buttonText;
    button.setAttribute("disabled", true);
  } else {
    button.textContent = buttonText;
    button.removeAttribute("disabled", false);
  }
}

//создали экземпляр api
const api = new Api(options);

//создали экземпляр попапа с подтверждением
const popupWithSubmit = new PopupWithSubmit(".popup_type_submit-form");

//вставляем значения со страницы в форму редактирования профиля
function getUserInfoForm() {
  const info = userInfo.getUserInfo();
  profileEnterName.value = info.name;
  profileEnterAbout.value = info.about;
}

//запрашиваем данные с сервера для их отрисовки на странице
Promise.all([api.getProfileInfo(), api.getCards()])
  .then(([userData, initialCards]) => {
    newProfileName.textContent = userData.name;
    newProfileAbout.textContent = userData.about;
    profileImage.src = userData.avatar;
    userId = userData._id;
    initialCards.forEach((item) => {
      creationCard(item);
    });
  })
  .catch((err) => {
    console.log("Ошибка", err.message);
  });

//вставляем карточку в разметку
const renderCards = new Section(
  {
    renderer: (item) => {
      creationCard(item);
    },
  },
  ".elements"
);

//добавление новой карточки через форму
const formAddPlace = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      requestDownload(submitButtonAddPlace, true, "Сохранение...");
      api
        .setNewCard(data)
        .then((data) => {
          creationCard(data);
        })
        .catch((err) => {
          console.log("Ошибка", err.message);
        })
        .finally(() => {
          requestDownload(submitButtonAddPlace, false, "Сохранить");
          formAddPlace.close();
        });
    },
  },
  ".popup_type_add-place"
);

//редактирование профиля через форму
const formProfileEdit = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      requestDownload(submitbuttonEditProfile, true, "Сохранение...");
      api
        .setNewProfileInfo(data)
        .then((data) => {
          userInfo.setUserInfo(data);
        })
        .catch((err) => {
          console.log("Ошибка", err.message);
        })
        .finally(() => {
          requestDownload(submitbuttonEditProfile, false, "Сохранить");
          formProfileEdit.close();
        });
    },
  },
  ".popup_type_edit-profile"
);

//обновление аватара через форму
const formProfileAvatarEdit = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      requestDownload(submitButtonChangeAvatar, true, "Сохранение...");
      api
        .setNewAvatar(data)
        .then((data) => {
          userInfo.setUserAvatar(data);
        })
        .catch((err) => {
          console.log("Ошибка", err.message);
        })
        .finally(() => {
          requestDownload(submitButtonChangeAvatar, false, "Сохранить");
          formProfileAvatarEdit.close();
        });
    },
  },
  ".popup_type_change-avatar"
);

//создаем карточку
function creationCard(item) {
  const card = new Card(
    {
      data: item,

      handleCardClick: (name, link) => {
        popupWithImageXl.open(name, link);
      },

      handleLikeClick: (isLiked) => {
        if (!isLiked) {
          api
            .setLikeCard(card.getCardId())
            .then((data) => {
              card.hedlelikeCard(data);
            })
            .catch((err) => {
              console.log("Ошибка", err.message);
            });
        } else if (isLiked) {
          api
            .delLikeCard(card.getCardId())
            .then((data) => {
              card.hedlelikeCard(data);
            })
            .catch((err) => {
              console.log("Ошибка", err.message);
            });
        }
      },

      handleDeleteIconClick: () => {
        popupWithSubmit.open();
        popupWithSubmit.setSubmitAction(() => {
          requestDownload(submitbuttonConfirm, true, "Выполнение...");
          api
            .delCard(card.getMyCardId())
            .then(() => {
              card.deleteCard();
              popupWithSubmit.close();
            })
            .catch((err) => {
              console.log("Ошибка", err.message);
            })
            .finally(() => {
              requestDownload(submitbuttonConfirm, false, "Да");
            });
        });
      },
    },
    ".template-place",
    api,
    userId
  );

  const cardElement = card.generateCard();
  renderCards.addItem(cardElement);
}

//
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
  ".profile__avatar"
);

const popupWithImageXl = new PopupWithImage(".popup_type_image-xl");

//открытие формы обновления аватара
profileAvatarEditButton.addEventListener("click", () => {
  formProfileAvatarEdit.open();
  changeAvatarForm.reset();
  validationChangeAvatarForm.resetValidation();
});

//открытие формы редактирования профиля
profileEditButton.addEventListener("click", () => {
  formProfileEdit.open();
  getUserInfoForm();
  validationProfileForm.resetValidation();
});

//открытие формы добавления карточки с местом
addPlaceButton.addEventListener("click", () => {
  formAddPlace.open();
  addPlaceForm.reset();
  validationAddPlaceForm.resetValidation();
});

formAddPlace.setEventListeners();
formProfileEdit.setEventListeners();
popupWithImageXl.setEventListeners();
popupWithSubmit.setEventListeners();
formProfileAvatarEdit.setEventListeners();

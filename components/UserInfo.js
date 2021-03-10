export class UserInfo {
  constructor(selectorName, selectorAbout, popupSelector, selectorNameTitle, selectorAboutSubtitle) {
    this._selectorName = document.querySelector(selectorName);
    this._selectorAbout = document.querySelector(selectorAbout);
    this._selectorNameTitle = document.querySelector(selectorNameTitle);
    this._selectorAboutSubtitle = document.querySelector(selectorAboutSubtitle);
    this._popup = document.querySelector(popupSelector);

  }

  getUserInfo() {
    this._selectorName.value = this._selectorNameTitle.textContent
    this._selectorAbout.value = this._selectorAboutSubtitle.textContent
  }

  setUserInfo() {
    this._nameValue = this._selectorName.value
    this._aboutValue = this._selectorAbout.value

    this._selectorNameTitle.textContent = this._nameValue
    this._selectorAboutSubtitle.textContent = this._aboutValue
  }
}

/*
//Вставляем информацию со страницы в инпуты формы редактирования профиля
const openPopupEditProfile = () => {
  profileEnterName.value = newProfileName.textContent
  profileEnterAbout.value = newProfileAbout.textContent
}*/

/*
//функция редактирования профиля
export function hendleFormSubmit(evt) {
  evt.preventDefault();
  // Получение значение полей из свойства value
  const editName = profileEnterName.value
  const editAbout = profileEnterAbout.value

  // Вставка новых значений с помощью textContent
  newProfileName.textContent = editName
  newProfileAbout.textContent = editAbout

  popupProfile.close()
}*/

export class UserInfo {
  constructor(selectorNameTitle, selectorAboutSubtitle, selectorUserAvatar) {
    this._selectorNameTitle = document.querySelector(selectorNameTitle);
    this._selectorAboutSubtitle = document.querySelector(selectorAboutSubtitle);
    this._selectorUserAvatar = document.querySelector(selectorUserAvatar)
  }

  getUserInfo() {
    const info = {
      name: this._selectorNameTitle.textContent,
      about: this._selectorAboutSubtitle.textContent
    }
    return info
  }


  setUserInfo(data) {
    this._selectorNameTitle.textContent = data.name;
    this._selectorAboutSubtitle.textContent = data.about;
  }

  setUserAvatar(data) {
    this._selectorUserAvatar.src = data.avatar;
  }
}



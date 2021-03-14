export class UserInfo {
  constructor(selectorNameTitle, selectorAboutSubtitle) {
    this._selectorNameTitle = document.querySelector(selectorNameTitle);
    this._selectorAboutSubtitle = document.querySelector(selectorAboutSubtitle);
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
}



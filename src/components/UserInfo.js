export class UserInfo {
  //constructor(selectorName, selectorAbout, popupSelector, selectorNameTitle, selectorAboutSubtitle) {
  constructor(selectorNameTitle, selectorAboutSubtitle) {
    //this._selectorName = document.querySelector(selectorName);
    //this._selectorAbout = document.querySelector(selectorAbout);
    this._selectorNameTitle = document.querySelector(selectorNameTitle);
    this._selectorAboutSubtitle = document.querySelector(selectorAboutSubtitle);
    //this._popup = document.querySelector(popupSelector);

  }

  getUserInfo() {
    //this._selectorName.value = this._selectorNameTitle.textContent
    //this._selectorAbout.value = this._selectorAboutSubtitle.textContent
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



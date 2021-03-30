export class Api {
  constructor(options) {
    this._userUrl = options.userUrl;
    this._cardsUrl = options.cardsUrl;
    this._cardsUrlLike = options.cardsUrlLike;
    this._userAvatar = options.userAvatar;
    this._headers = options.headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getCards() {
    return fetch(this._cardsUrl, {
      headers: this._headers,
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  getProfileInfo() {
    return fetch(this._userUrl, {
      headers: this._headers,
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  setNewProfileInfo(data) {
    return fetch(this._userUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  setNewCard(formData) {
    return fetch(this._cardsUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: formData.name,
        link: formData.link,
      }),
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  delCard(id) {
    return fetch(`${this._cardsUrl}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  setLikeCard(id) {
    return fetch(`${this._cardsUrlLike}/${id}`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  delLikeCard(id) {
    return fetch(`${this._cardsUrlLike}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }

  setNewAvatar(data) {
    return fetch(this._userAvatar, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      }),
    })
      .then((res) => this._parseResponse(res))
      .catch((err) => Promise.reject(err));
  }
}

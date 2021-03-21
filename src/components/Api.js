export class Api {
  constructor(options) {
    this._userUrl = options.userUrl
    this._cardsUrl = options.cardsUrl
    this._headers = options.headers
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
      .then(res => this._parseResponse(res))
      .catch(err => Promise.reject(err));
  }

  getUserInfo() {
    return fetch(this._userUrl, {
      headers: this._headers,
    })
      .then(res => this._parseResponse(res))
      .catch(err => Promise.reject(err));
  }
}

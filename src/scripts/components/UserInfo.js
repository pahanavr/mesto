export default class UserInfo {
  constructor(profileName, profileAbout, profileAvatar) {
    this._profileName = document.querySelector(profileName);
    this._profileAbout = document.querySelector(profileAbout);
    this._avatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
      avatar: this._avatar.src
    };
  }

  setUserInfo = (data) => {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this._avatar.src = data.avatar;
    this._userId = data._id;
  }

  getId() {
    return this._userId;
  }
}

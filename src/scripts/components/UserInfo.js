export default class UserInfo {
  constructor(profileName, profilePosition) {
    this._profileName = document.querySelector(profileName);
    this._profilePosition = document.querySelector(profilePosition);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      position: this._profilePosition.textContent,
    };
  }

  setUserInfo = (name, position) => {
    this._profileName.textContent = name;
    this._profilePosition.textContent = position;
  }
}

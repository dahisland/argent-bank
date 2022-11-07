export class modelLoginData {
  constructor(loginData, inputCheckboxValue) {
    this.status = parseInt(loginData.status);
    this.message = String(loginData.message);
    this.connected = true;
    this.remember = inputCheckboxValue === true ? true : false;
    this.token = String(loginData.body.token);
  }

  formatLoginData() {
    return {
      status: this.status,
      message: this.message,
      connected: this.connected,
      remember: this.remember,
      token: this.token,
    };
  }
}

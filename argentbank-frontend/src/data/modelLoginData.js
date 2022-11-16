export class modelLoginData {
  constructor(data, inputCheckboxValue) {
    this.status = data.status;
    this.remember = inputCheckboxValue === true ? true : false;
    this.token = data.body.token;
    this.message = data.message;
  }
  formatLoginData() {
    return {
      loginData: {
        remember: this.remember,
        token: this.token,
      },
      loginStatus: this.status,
      loginMessage: this.message,
    };
  }
}

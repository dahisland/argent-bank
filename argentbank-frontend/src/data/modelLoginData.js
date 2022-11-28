/**
 * Create an instance object for login data response called by api.
 * @class
 */
export class modelLoginData {
  constructor(data, inputCheckboxValue) {
    this.status = data.status;
    this.remember = inputCheckboxValue === true ? true : false;
    this.token = data.body.token;
    this.message = data.message;
  }

  /**
   * Static method used to format login data
   * @returns {object} - Object containing login data formatted
   */
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

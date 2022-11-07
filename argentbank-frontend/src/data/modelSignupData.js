export class modelSignupData {
  constructor(signupData) {
    this.status = parseInt(signupData.status);
    this.message = String(signupData.message);
    this.createdAt = String(signupData.body.createdAt);
    this.email = String(signupData.body.email);
    this.firstName = String(signupData.body.firstName);
    this.lastName = String(signupData.body.lastName);
    this.password = String(signupData.body.password);
    this.updatedAt = String(signupData.body.updatedAt);
    this.__v = parseInt(signupData.body.__v);
    this._id = String(signupData.body._id);
  }

  formatSignupData() {
    return {
      status: this.status,
      message: this.message,
      createdAt: this.createdAt,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      updatedAt: this.updatedAt,
      __v: this.__v,
      _id: this._id,
    };
  }
}

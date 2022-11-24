export class modelAccountData {
  constructor(data) {
    this.accountData = data.body.accountData;
    this.status = data.status;
    this.message = data.message;
  }
  formatAccountData() {
    return {
      accountData: this.accountData,
      accountStatus: this.status,
      accountMessage: this.message,
    };
  }
}

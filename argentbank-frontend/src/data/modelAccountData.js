export class modelAccountData {
  constructor(data) {
    this.accountData = data.body.accountData;
    this.accountId = data.body.accountId;
    this.status = data.status;
    this.message = data.message;
  }
  formatAccountData() {
    return {
      accountData: this.accountData,
      accountId: this.accountId,
      accountStatus: this.status,
      accountMessage: this.message,
    };
  }
}

export class modelTransactionsData {
  constructor(data) {
    this.transactionsData = data.body.transactions;
    this.accountId = data.body.accountId;
    this.status = data.status;
    this.message = data.message;
  }
  formatAccountData() {
    return {
      transactionsData: this.transactionsData,
      accountId: this.accountId,
      transactionsStatus: this.status,
      transactionsMessage: this.message,
    };
  }
}

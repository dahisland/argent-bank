export class modelTransactionsData {
  constructor(data) {
    this.transactionsData = data.body.transactions;
    this.categoryId = data.body.categoryId;
    this.status = data.status;
    this.message = data.message;
  }
  formatAccountData() {
    return {
      transactionsData: this.transactionsData,
      categoryId: this.categoryId,
      transactionsStatus: this.status,
      transactionsMessage: this.message,
    };
  }
}

/**
 * Create an instance object for transactions data response called by api.
 * @class
 */
export class modelTransactionsData {
  constructor(data) {
    this.transactionsData = data.body.transactions;
    this.accountId = data.body.accountId;
    this.status = data.status;
    this.message = data.message;
  }

  /**
   * Static method used to format transactions data
   * @returns {object} - Object containing transactions data formatted
   */
  formatTransactionsData() {
    return {
      transactionsData: this.transactionsData,
      accountId: this.accountId,
      transactionsStatus: this.status,
      transactionsMessage: this.message,
    };
  }
}

/**
 * Create an instance object for account data response called by api.
 * @class
 */
export class modelAccountData {
  constructor(data) {
    this.accountData = data.body.accountData;
    this.status = data.status;
    this.message = data.message;
  }

  /**
   * Static method used to format account data
   * @returns {object} - Object containing account data formatted
   */
  formatAccountData() {
    return {
      accountData: this.accountData,
      accountStatus: this.status,
      accountMessage: this.message,
    };
  }
}

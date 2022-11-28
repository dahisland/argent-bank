import { modelTransactionsData } from "../../data/modelTransactionsData";
import { getTransactionsData } from "../reducers/transactions.slice";
import {
  userTransactionsCheckingData,
  userTransactionsSavingsData,
  userTransactionsCreditCardData,
} from "../../data/mockData";

/**
 * Redux action to get transactions data
 * @param {func} dispatch - Hook to update redux store
 * @param {string} accountID - Account id to display specified data (checking, savings or credit-card transactions)
 * @returns {object} - Object containing transactions data
 */
export function actionGetTransactionsData(dispatch, accountID) {
  if (accountID === "checking") {
    const transactionsData = new modelTransactionsData(
      userTransactionsCheckingData
    );
    const transactionsDataFormatted = transactionsData.formatTransactionsData();
    dispatch(getTransactionsData(transactionsDataFormatted));
    return transactionsDataFormatted;
  }
  if (accountID === "savings") {
    const transactionsData = new modelTransactionsData(
      userTransactionsSavingsData
    );
    const transactionsDataFormatted = transactionsData.formatTransactionsData();
    dispatch(getTransactionsData(transactionsDataFormatted));
    return transactionsDataFormatted;
  }
  if (accountID === "credit-card") {
    const transactionsData = new modelTransactionsData(
      userTransactionsCreditCardData
    );
    const transactionsDataFormatted = transactionsData.formatTransactionsData();
    dispatch(getTransactionsData(transactionsDataFormatted));
    return transactionsDataFormatted;
  }
}

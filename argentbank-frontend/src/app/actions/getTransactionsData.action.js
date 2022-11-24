import { modelTransactionsData } from "../../data/modelTransactionsData";
import { getTransactionsData } from "../reducers/transactions.slice";
import {
  userTransactionsCheckingData,
  userTransactionsSavingsData,
  userTransactionsCreditCardData,
} from "../../data/mockData";

export function actionGetTransactionsData(dispatch, accountID) {
  if (accountID === "checking") {
    const transactionsData = new modelTransactionsData(
      userTransactionsCheckingData
    );
    const transactionsDataFormatted = transactionsData.formatAccountData();
    dispatch(getTransactionsData(transactionsDataFormatted));
    return transactionsDataFormatted;
  }
  if (accountID === "savings") {
    const transactionsData = new modelTransactionsData(
      userTransactionsSavingsData
    );
    const transactionsDataFormatted = transactionsData.formatAccountData();
    dispatch(getTransactionsData(transactionsDataFormatted));
    return transactionsDataFormatted;
  }
  if (accountID === "credit-card") {
    const transactionsData = new modelTransactionsData(
      userTransactionsCreditCardData
    );
    const transactionsDataFormatted = transactionsData.formatAccountData();
    dispatch(getTransactionsData(transactionsDataFormatted));
    return transactionsDataFormatted;
  }
}

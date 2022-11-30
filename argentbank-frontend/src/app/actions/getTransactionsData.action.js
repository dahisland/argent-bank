import { modelTransactionsData } from "../../data/modelTransactionsData";
import { getTransactionsData } from "../reducers/transactions.slice";
import { userTransactionsData } from "../../data/mockData";

/**
 * Redux action to get transactions data
 * @param {func} dispatch - Hook to update redux store
 * @param {string} accountID - Account id to display specified data (checking, savings or credit-card transactions)
 * @returns {object} - Object containing transactions data
 */
export function actionGetTransactionsData(dispatch, accountID) {
  const arrayTransactions = userTransactionsData.body.transactions;
  const userTransactionsDataFiltered = {
    ...userTransactionsData,
    body: {
      transactions: arrayTransactions.filter(
        (item) => item.accountId === accountID
      ),
    },
  };
  const transactionsData = new modelTransactionsData(
    userTransactionsDataFiltered
  );
  const transactionsDataFormatted = transactionsData.formatTransactionsData();
  dispatch(getTransactionsData(transactionsDataFormatted));
  return transactionsDataFormatted;
}

import { modelTransactionsData } from "../../data/modelTransactionsData";
import { getTransactionsData } from "../reducers/transactions.slice";
import { userTransactionsData } from "../../data/mockData";

export function actionGetTransactionsData(dispatch) {
  const transactionsData = new modelTransactionsData(userTransactionsData);
  const transactionsDataFormatted = transactionsData.formatAccountData();
  dispatch(getTransactionsData(transactionsDataFormatted));
  return transactionsDataFormatted;
}

import { modelAccountData } from "../../data/modelAccountData";
import { getAccountData } from "../reducers/account.slice";
import { userAccountData } from "../../data/mockData";

/**
 * Redux action to get account data
 * @param {func} dispatch - Hook to update redux store
 * @returns {object} - Object containing account data
 */
export function actionGetAccountData(dispatch) {
  const accountData = new modelAccountData(userAccountData);
  const accountDataFormatted = accountData.formatAccountData();
  dispatch(getAccountData(accountDataFormatted));
  return accountDataFormatted;
}

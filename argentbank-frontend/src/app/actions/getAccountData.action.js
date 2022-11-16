import { modelAccountData } from "../../data/modelAccountData";
import { getAccountData } from "../reducers/account.slice";
import { userAccountData } from "../../data/mockData";

export function actionGetAccountData(dispatch) {
  const accountData = new modelAccountData(userAccountData);
  const accountDataFormatted = accountData.formatAccountData();
  dispatch(getAccountData(accountDataFormatted));
  return accountDataFormatted;
}

import { resetLoginData } from "../reducers/login.slice";
import { resetProfileData } from "../reducers/profile.slice";
import { resetSignupData } from "../reducers/signup.slice";
import { resetAccountData } from "../reducers/account.slice";
import { resetTransactionsData } from "../reducers/transactions.slice";

import {
  initStateLogin,
  initStateProfile,
  initStateSignup,
  initStateAccount,
  initStateTransactions,
} from "../initStatesData";

export function actionResetStore(dispatch) {
  dispatch(resetLoginData(initStateLogin));
  dispatch(resetProfileData(initStateProfile));
  dispatch(resetSignupData(initStateSignup));
  dispatch(resetAccountData(initStateAccount));
  dispatch(resetTransactionsData(initStateTransactions));
}

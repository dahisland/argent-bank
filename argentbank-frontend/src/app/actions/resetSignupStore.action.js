import { resetSignupData } from "../reducers/signup.slice";
import { initStateSignup } from "../initStatesData";

export function actionResetSignupStore(dispatch) {
  dispatch(resetSignupData(initStateSignup));
}

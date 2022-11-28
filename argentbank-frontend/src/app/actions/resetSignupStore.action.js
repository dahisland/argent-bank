import { resetSignupData } from "../reducers/signup.slice";
import { initStateSignup } from "../initStatesData";

/**
 * Redux action to reset signup data in redux store
 * @param {func} dispatch - Hook to update redux store
 */
export function actionResetSignupStore(dispatch) {
  dispatch(resetSignupData(initStateSignup));
}

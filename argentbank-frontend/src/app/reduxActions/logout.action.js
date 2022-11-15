import { resetLoginData } from "../reduxSlices/loginSlice";
import { resetProfileData } from "../reduxSlices/profileSlice";
import { initStateLogin, initStateProfile } from "../initStatesData";

export function resetStore(dispatch) {
  dispatch(resetLoginData(initStateLogin));
  dispatch(resetProfileData(initStateProfile));
}

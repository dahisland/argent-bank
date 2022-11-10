import { resetLoginData } from "../reduxSlices/loginSlice";
import { resetProfileData } from "../reduxSlices/profileSlice";
import { initStateLogin, initStateProfile } from "../initialStoreData";

export function resetStore(dispatch) {
  dispatch(resetLoginData(initStateLogin.loginData));
  dispatch(resetProfileData(initStateProfile.profileData));
}

import { editProfileStatus } from "../reducers/profile.slice";

export function actionOnEditProfile(dispatch) {
  dispatch(editProfileStatus(true));
}

export function actionOffEditProfile(dispatch) {
  dispatch(editProfileStatus(false));
}

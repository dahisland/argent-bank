import { editProfileStatus } from "../reducers/profile.slice";

/**
 * Redux action to update profile status to true when profile is edited
 * @param {func} dispatch - Hook to update redux store
 */
export function actionOnEditProfile(dispatch) {
  dispatch(editProfileStatus(true));
}

/**
 * Redux action to update profile status to false when profile is edited
 * @param {func} dispatch - Hook to update redux store
 */
export function actionOffEditProfile(dispatch) {
  dispatch(editProfileStatus(false));
}

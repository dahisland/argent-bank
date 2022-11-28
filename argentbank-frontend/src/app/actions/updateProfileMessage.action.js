import { updateProfileMessage } from "../reducers/profile.slice";

/**
 * Redux action to update message displayed when profile is edited
 * @param {string} message - Message to display
 * @param {func} dispatch - Hook to update redux store
 */
export function actionUpdateProfileMessage(message, dispatch) {
  dispatch(updateProfileMessage(message));
}

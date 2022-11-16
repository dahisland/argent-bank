import { updateProfileMessage } from "../reducers/profile.slice";

export function actionUpdateProfileMessage(message, dispatch) {
  dispatch(updateProfileMessage(message));
}

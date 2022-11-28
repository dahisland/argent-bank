import { connectStatus } from "../reducers/login.slice";

/**
 * Redux action to update connection status to "pending"
 * @param {func} dispatch - Hook to update redux store
 */
export function actionLoginPending(dispatch) {
  dispatch(connectStatus("pending"));
}

/**
 * Redux action to update connection status to "online"
 * @param {func} dispatch - Hook to update redux store
 */
export function actionLoginOnline(dispatch) {
  dispatch(connectStatus("online"));
}

/**
 * Redux action to update connection status to "offline"
 * @param {func} dispatch - Hook to update redux store
 */
export function actionLoginOffline(dispatch) {
  dispatch(connectStatus("offline"));
}

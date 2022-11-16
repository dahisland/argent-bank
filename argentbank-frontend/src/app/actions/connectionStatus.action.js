import { connectStatus } from "../reducers/login.slice";

export function actionLoginPending(dispatch) {
  dispatch(connectStatus("pending"));
}

export function actionLoginOnline(dispatch) {
  dispatch(connectStatus("online"));
}

export function actionLoginOffline(dispatch) {
  dispatch(connectStatus("offline"));
}

import { connectStatus } from "../reduxSlices/loginSlice";

export function loginOnload(dispatch) {
  dispatch(connectStatus("on load"));
}

export function loginConnected(dispatch) {
  dispatch(connectStatus("connected"));
}

export function loginDisconnected(dispatch) {
  dispatch(connectStatus("not connected"));
}

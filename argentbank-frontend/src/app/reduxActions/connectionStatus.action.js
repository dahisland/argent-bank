import { connectStatus } from "../reduxSlices/loginSlice";

export function loginPending(dispatch) {
  dispatch(connectStatus("pending"));
}

export function loginOnline(dispatch) {
  dispatch(connectStatus("online"));
}

export function loginOffline(dispatch) {
  dispatch(connectStatus("offline"));
}

import { editProfileStatus } from "../reduxSlices/profileSlice";

export function profileOnEdit(dispatch) {
  dispatch(editProfileStatus(true));
}

export function profileOutEdit(dispatch) {
  dispatch(editProfileStatus(false));
}

import { createSlice } from "@reduxjs/toolkit";
import { initStateSignup } from "../initStatesData";

/**
 * Redux slice containing reducers for signup data
 */
export const signupSlice = createSlice({
  name: "signup",
  initialState: initStateSignup,
  reducers: {
    getSignupData: (state, action) => {
      state.signupData = action.payload.signupData;
      state.signupStatus = action.payload.signupStatus;
      state.signupMessage = action.payload.signupMessage;
    },
    rejectedSignupData: (state, action) => {
      state.signupData = initStateSignup.signupData;
      state.signupStatus = action.payload.signupStatus;
      state.signupMessage = action.payload.signupMessage;
    },
    resetSignupData: (state, action) => {
      state.signupData = action.payload.signupData;
      state.signupStatus = action.payload.signupStatus;
      state.signupMessage = action.payload.signupMessage;
    },
  },
});

export const { getSignupData, rejectedSignupData, resetSignupData } =
  signupSlice.actions;
export default signupSlice.reducer;

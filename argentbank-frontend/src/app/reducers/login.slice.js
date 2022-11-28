import { createSlice } from "@reduxjs/toolkit";
import { initStateLogin } from "../initStatesData";

/**
 * Redux slice containing reducers for login data
 */
export const loginSlice = createSlice({
  name: "login",
  initialState: initStateLogin,
  reducers: {
    getLoginData: (state, action) => {
      state.loginData = action.payload.loginData;
      state.connection = "pending";
      state.loginStatus = action.payload.loginStatus;
      state.loginMessage = action.payload.loginMessage;
    },
    connectStatus: (state, action) => {
      state.connection = action.payload;
    },
    rejectedLoginData: (state, action) => {
      state.loginData = initStateLogin.loginData;
      state.connection = "offline";
      state.loginStatus = action.payload.loginStatus;
      state.loginMessage = action.payload.loginMessage;
    },
    resetLoginData: (state, action) => {
      state.loginData = action.payload.loginData;
      state.connection = "offline";
      state.loginStatus = action.payload.loginStatus;
      state.loginMessage = action.payload.loginMessage;
    },
  },
});

export const {
  getLoginData,
  rejectedLoginData,
  resetLoginData,
  connectStatus,
} = loginSlice.actions;
export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { initStateLogin } from "../initStatesData";

export const loginSlice = createSlice({
  name: "login",
  initialState: initStateLogin,
  reducers: {
    getLoginData: (state, action) => {
      state.loginData = action.payload.loginData;
      state.connection = "pending";
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    connectStatus: (state, action) => {
      state.connection = action.payload;
    },
    rejectedLoginData: (state, action) => {
      state.loginData = initStateLogin.loginData;
      state.connection = "offline";
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    resetLoginData: (state, action) => {
      state.loginData = action.payload.loginData;
      state.connection = "offline";
      state.status = action.payload.status;
      state.message = action.payload.message;
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

import { createSlice } from "@reduxjs/toolkit";
import { initStateLogin } from "../initialStoreData";

export const loginSlice = createSlice({
  name: "login",
  initialState: initStateLogin,
  reducers: {
    getLoginData: (state, action) => {
      state.loginData = action.payload;
      state.connexion = "on load";
    },
    connectStatus: (state, action) => {
      state.connexion = action.payload;
    },
    errorRequestLoginData: (state, action) => {
      state.loginData = action.payload;
      state.connexion = "not connected";
    },
    resetLoginData: (state, action) => {
      state.loginData = action.payload;
      state.connexion = "not connected";
    },
  },
});

export const {
  getLoginData,
  errorRequestLoginData,
  resetLoginData,
  connectStatus,
} = loginSlice.actions;
export default loginSlice.reducer;

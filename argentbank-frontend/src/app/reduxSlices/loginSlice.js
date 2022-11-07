import { createSlice } from "@reduxjs/toolkit";
import { initLoginData } from "../initialStoreData";

export const loginSlice = createSlice({
  name: "login",
  initialState: initLoginData,
  reducers: {
    setLoginData: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.connected = action.payload.connected;
      state.remember = action.payload.remember;
      state.token = action.payload.token;
    },
  },
});

export const { setLoginData } = loginSlice.actions;
export default loginSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reduxSlices/loginSlice";
import profileReducer from "./reduxSlices/profileSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { initStateAccount } from "../initStatesData";

/**
 * Redux slice containing reducers for account data
 */
export const accountSlice = createSlice({
  name: "account",
  initialState: initStateAccount,
  reducers: {
    getAccountData: (state, action) => {
      state.accountData = action.payload.accountData;
      state.accountStatus = action.payload.accountStatus;
      state.accountMessage = action.payload.accountMessage;
    },
    resetAccountData: (state, action) => {
      state.accountData = action.payload.accountData;
      state.accountStatus = action.payload.accountStatus;
      state.accountMessage = action.payload.accountMessage;
    },
  },
});

export const { getAccountData, resetAccountData } = accountSlice.actions;
export default accountSlice.reducer;

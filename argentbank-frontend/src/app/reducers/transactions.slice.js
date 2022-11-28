import { createSlice } from "@reduxjs/toolkit";
import { initStateTransactions } from "../initStatesData";

/**
 * Redux slice containing reducers for transactions data
 */
export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initStateTransactions,
  reducers: {
    getTransactionsData: (state, action) => {
      state.transactionsData = action.payload.transactionsData;
      state.accountId = action.payload.accountId;
      state.transactionsStatus = action.payload.transactionsStatus;
      state.transactionsMessage = action.payload.transactionsMessage;
    },
    resetTransactionsData: (state, action) => {
      state.transactionsData = action.payload.transactionsData;
      state.accountId = action.payload.accountId;
      state.transactionsStatus = action.payload.transactionsStatus;
      state.transactionsMessage = action.payload.transactionsMessage;
    },
  },
});

export const { getTransactionsData, resetTransactionsData } =
  transactionsSlice.actions;
export default transactionsSlice.reducer;

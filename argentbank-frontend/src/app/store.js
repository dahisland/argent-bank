import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.slice";
import profileReducer from "./reducers/profile.slice";
import signupReducer from "./reducers/signup.slice";
import accountReducer from "./reducers/account.slice";
import transactionsReducer from "./reducers/transactions.slice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

/**
 * Configuration for redux persist store
 */
const persistConfig = {
  key: "root",
  storage: storage,
};

/**
 * combine all the reducers implemented in the store
 */
export const rootReducers = combineReducers({
  login: loginReducer,
  profile: profileReducer,
  signup: signupReducer,
  account: accountReducer,
  transactions: transactionsReducer,
});

/**
 * Link the reducers to the redux persist store
 */
const persistedReducer = persistReducer(persistConfig, rootReducers);

/**
 * Configuration redux store
 */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

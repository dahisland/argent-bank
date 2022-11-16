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

const persistConfig = {
  key: "root",
  storage: storage,
};

export const rootReducers = combineReducers({
  login: loginReducer,
  profile: profileReducer,
  signup: signupReducer,
  account: accountReducer,
  transactions: transactionsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

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

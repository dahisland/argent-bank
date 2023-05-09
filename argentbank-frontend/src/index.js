import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import store from "./app/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AppProvider from "./AppProvider";

let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppProvider />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

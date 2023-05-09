import React, { createContext } from "react";
import App from "./App";

export const ServerContext = createContext(null);

const AppProvider = () => {
  // Pass it to true to switch between mock data to API data
  const serverIsOn = false;
  return (
    <ServerContext.Provider value={serverIsOn}>
      <App />
    </ServerContext.Provider>
  );
};

export default AppProvider;

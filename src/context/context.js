import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("tokyo");
  const [isCity, setIsCity] = useState(false);

  return (
    <AppContext.Provider value={{ city, setCity, isCity, setIsCity }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

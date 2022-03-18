import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("vancouver");
  const [isCity, setIsCity] = useState(false);
  // const [location, setLocation] = useState({ lat: 49.2827, lng: -123.116226 });
  const [location, setLocation] = useState({});

  return (
    <AppContext.Provider
      value={{ city, setCity, isCity, setIsCity, location, setLocation }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

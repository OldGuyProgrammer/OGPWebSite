//
// Airport Info
//
// Airport Information context component
// Holds airport informaiton that can be used by any other component.
//
// Jim Olivi 2024

import React, { createContext, useState } from "react";
// import AIRPORT from "../ORD.json";

// Aiport information available to the entire app.
export const AirportContext = createContext({
  airport: null,
  setAirport: () => {},
});

// Airport information component.

export const AirportProvider = ({ children }) => {
  const [airport, setAirport] = useState(null);
  const value = { airport, setAirport };

  return (
    <AirportContext.Provider value={value}>{children}</AirportContext.Provider>
  );
};

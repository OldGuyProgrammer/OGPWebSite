//
// Airport Info
//
// Airport Display Screen component
//
// Main Container for Airport Display
//
// Jim Olivi 2024

import React, { useContext } from "react";
import "./airportdisplay.scss";
import { AirportContext } from "../../context/airport.context";
import RunwayDetails from "../runway-details/runway-details";
import AirportInput from "../airport-input/airport-input";
import Header from "../header/header";

const AirPortDisplay = () => {
  console.log("In AirportDisplay");
  const { airport } = useContext(AirportContext);
  console.log("Airport context: " + airport);
  return (
    <>
      <div className="airport-display-container">
        <Header />
        <AirportInput />
        {/* <RunwayDetails /> */}
        {airport && <RunwayDetails />}
      </div>
    </>
  );
};

export default AirPortDisplay;

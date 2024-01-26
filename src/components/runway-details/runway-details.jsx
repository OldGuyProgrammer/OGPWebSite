//
// Airport Info
//
// Airport Display Details component
//
// Main Container for Airport Display
//
// Jim Olivi 2024

import React, { useState, useContext } from "react";
import { AirportContext } from "../../context/airport.context";
import "./runway-details.scss";

const RunwayDetails = () => {
  const { airport } = useContext(AirportContext);
  // console.log("In Runway Details");

  return (
    <>
      <div className="runway-display">
        <div className="runway-columns">
          <div>
            <h3>Runways</h3>
            {airport.runways.map(({ id, le_ident, length_ft, width_ft }) => (
              <div key={id}>
                {le_ident} L:{length_ft} W:{width_ft}
              </div>
            ))}
          </div>
          <div>
            <h3>Frequencies</h3>
            {airport.freqs.map(({ id, type, frequency_mhz }) => (
              <div key={id}>
                {type} mhz:{frequency_mhz}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default RunwayDetails;

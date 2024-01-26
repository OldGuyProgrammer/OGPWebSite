//
// Airport Info
//
// Airport Display Screen component
//
// Main Container for Airport Display
//
// Jim Olivi 2024

import React, { useState, useContext } from "react";
import { AirportContext } from "../../context/airport.context";
import ShowSpinner from "../show-spinner/show-spinner";
import { Button } from "react-bootstrap";
import "./airport-input.scss";

const AirportInput = () => {
  const [airportCode, setAirportCode] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = (event) => {
    setAirportCode(event.target.value);
  };

  // console.log("Airport Input");
  const { airport, setAirport } = useContext(AirportContext);
  // When the user changes the desired airport, The get airport API call should fire.
  // The page will render and display airport information.
  const handleClick = async (event) => {
    // console.log("handle Click");
    event.preventDefault();
    setShowSpinner(true);
    const url = process.env.REACT_APP_URL;
    const url1 = url.replace("<AIRPORT>", airportCode);
    const urlToSend = url1.replace(
      "<API_TOKEN>",
      process.env.REACT_APP_API_TOKEN
    );
    // console.log(urlToSend);
    try {
      const res = await fetch(urlToSend);
      if (res.status == 200) {
        const newAirport = await res.json();
        // console.log(newAirport);
        setAirport(newAirport);
      } else if (res.status == 404) {
        const msg = "Invalid airport code: " + airportCode;
        console.log(msg);
        alert(msg);
        setAirport(null);
      } else {
        console.log(`fetch failed - response code: ${res.status}`);
      }
      setShowSpinner(false);
    } catch (error) {
      const msg = `Error caught, GET from Airport Database failed\nmessage: ${error}`;
      return null;
    }
  };

  return (
    /* Input box */
    <>
      <div>
        <img
          className="airplane-image-left"
          src={require("../../../src/assets/airplane-8315886_1280.jpg")}
          alt="Mustang In Flight"
        />
      </div>
      <div className="airport-code-prompt ">
        <span>Type airport IATA or ICAO code:</span>
        <input
          type="text"
          name="airportCode"
          value={airportCode}
          onChange={handleChange}
          placeholder="CODE"
        />
        <Button varient="primary" className="pe-3 pl-3" onClick={handleClick}>
          Get Info
        </Button>
        <span id="airport-code-help">
          International Air Transport Association (IATA) and International Civil
          Aviation Code (ICAO) are shortcut codes to designate almost all
          airports around the world. The ability to look up airports by name or
          city is not yet available here, but we are planning on adding this
          capability in the future.
        </span>
        {airport && (
          <h3>
            {airport.name} {airport.ident} City: {airport.municipality}
          </h3>
        )}
        {airport && airport.hasOwnProperty("home_link") && (
          <a href={airport.home_link} target="_blank">
            Web Site
          </a>
        )}
      </div>
      {showSpinner && <ShowSpinner />}
      <img
        className="airplane-image-right"
        src={require("../../../src/assets/cessna-5331171_1280.jpg")}
        alt="Cessna In Flight"
      />
    </>
  );
};

export default AirportInput;

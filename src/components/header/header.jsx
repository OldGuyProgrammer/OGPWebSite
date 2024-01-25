//
// Airport Info
//
// Header component
//
// Set up to allow a menu
//
// Jim Olivi 2024

import React from "react";
import imageFile from "../../../src/assets/plane-7013022_1280.jpg";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="logo-container">
        <img
          className="logo-image"
          src={require("../../../src/assets/OGP-Logo.png")}
          alt="OGP Logo"
        />
        <span id="copyright-text">
          <p>
            Display information about most airports. Old Guy Programmer
            Development Company
          </p>
          <p> © Copyright Old Guy Programmer {new Date().getFullYear()}</p>
        </span>
      </div>
      <h1 className="title-text">Airport Info</h1>
      <img
        className="airplane-image"
        src={imageFile}
        alt="737 Landing Sunset"
      />
    </>
  );
};

export default Header;

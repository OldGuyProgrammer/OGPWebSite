//
// Airport Info
//
// Spinner component
//
// Can be used to show delay to the user.
//
// Jim Olivi 2024

import React, { useState, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";

const ShowSpinner = () => {
  return (
    <div>
      <Spinner animation="border" role="status" />
      <span>Loading Airport Information...</span>
    </div>
  );
};

export default ShowSpinner;

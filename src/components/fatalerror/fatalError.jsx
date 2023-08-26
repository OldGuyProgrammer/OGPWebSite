//
// Old Guy Programmer
//
// Fatal Error.
// The message transmission failed and ccould not be recovered.
//
// Jim Olivi 2023

import MenuBar from "../../navigation/menubar/menubar.jsx";

export default function FatalError() {
  return (
    <>
      <MenuBar />
      <h1>Transmission Error.</h1>
      <h2>Attempt to send message to server failed.</h2>
      <h3>Please contact Old Guy Programmer support.</h3>
    </>
  );
}

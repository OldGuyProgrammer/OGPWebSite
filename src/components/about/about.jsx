//
// Old Guy Programmer
//
// About Screen
//
// Jim Olivi 2023

import MenuBar from "../../navigation/menubar/menubar.jsx";
import JimOliviPortrait from "../jimolivi/jimoliviportrait.jsx";
import IntentProgrammer from "../intentprogrammer/intentprogrammer.jsx";
import Applications from "../applications/applications.jsx";
import "./about.scss";
import InternetSecurity from "../internetsecurity/internetsecurityimage.jsx";
import Crypto from "../Crypto/crypto.jsx";
import ProgrammingLanguages from "../programmingLanguages/programmingLanguages.jsx";

export default function About() {
  return (
    <>
      <MenuBar about={false} />
      <div className="container-fluid about-page-container">
        <JimOliviPortrait />
        <IntentProgrammer />
        <Applications />
        <InternetSecurity />
        <Crypto />
      </div>
      <div className="container-fluid">
        <ProgrammingLanguages />
      </div>
    </>
  );
}

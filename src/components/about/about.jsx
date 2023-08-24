import MenuBar from "../../navigation/menubar/menubar.jsx";
import JimOliviPortrait from "../jimolivi/jimolivi.jsx";
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
        <ProgrammingLanguages />
      </div>
    </>
  );
}

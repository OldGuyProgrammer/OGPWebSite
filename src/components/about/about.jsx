import MenuBar from "../../navigation/menubar/menubar.jsx";
import JimOliviPortrait from "../jimolivi/jimolivi.jsx";
import IntentProgrammer from "../intentprogrammer/intentprogrammer.jsx";
import Applications from "../applications/applications.jsx";
import "./about.scss";

export default function About() {
  return (
    <>
      <MenuBar about={false} />
      <div className="container-fluid about-page-container">
        <div>
          <JimOliviPortrait />
        </div>
        <div className="image-right">
          <IntentProgrammer />
        </div>
        <Applications />
        <img
          className="image-fluid"
          src={require("../../assets/Group_1.png")}
          alt="Internet Security"
        />
        <img
          className="image-fluid"
          src={require("../../assets/Group_2.png")}
          alt="Internet Computer"
        />
      </div>
      <div className="about-page-container about-container-3">
        <div className="about-text-left">React</div>
        <div className="about-text-left">Python</div>
        <div className="about-text-left">JavaScript</div>
      </div>
    </>
  );
}

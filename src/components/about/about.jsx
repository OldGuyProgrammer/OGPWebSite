import MenuBar from "../../navigation/menubar/menubar.jsx";
import "./about.css";

export default function About() {
  return (
    <>
      <MenuBar />
      <div className="about-body-container">
        <div className="image-container">
          <img
            style={{ width: "50%" }}
            src={require("../../assets/Jim_Olivi.jpeg")}
            alt="Jim Olivi"
          />
          <div className="image-caption">
            <h3>Programming Experience</h3>
          </div>
        </div>
        <div className="text-container text-center">
          <h3>Professional Integrity</h3>
        </div>
        <div className="text-container text-center">
          <h3>Complete System Design</h3>
        </div>
        <div className="image-container">
          <div className="image-caption">
            <h3>Supported Implementations</h3>
          </div>
          <img
            style={{ width: "75%" }}
            className="programmer-img"
            src={require("../../assets/istockphoto-1147195672-612x612.jpg")}
            alt="Intent Programmer"
          />
        </div>
        {/* End Programmer picture section. */}
        {/* Business Category Section */}
        <div className="text-container"></div>
        <div className="text-container text-center">
          <h3>Business Systems</h3>
        </div>
        <div className="text-container text-center">
          <h3>Web Sites</h3>
        </div>
        <div className="text-container"></div>
        {/*  End Business Category Section. */}
        <div className="image-container image-caption">
          <img
            style={{ width: "75%" }}
            src={require("../../assets/Group_1.png")}
            alt="Security"
          />
        </div>
        <div className="text-container"></div>
        <div className="text-container"></div>
        <div className="image-container">
          <img
            style={{ width: "75%" }}
            src={require("../../assets/Group_2.png")}
            alt="Crypto"
          />
        </div>
      </div>
      <div className="about-container-3">
        <div className="text-container text-center">
          <h3>React</h3>
        </div>
        <div className="text-container text-center">
          <h3>Python</h3>
        </div>
        <div className="text-container text-center">
          <h3>JavaScript</h3>
        </div>
      </div>
    </>
  );
}

//
// OGP Web Site.
// Intent Programmer Portrait component
//
// Jim Olivi 2003
//

import "../about/about.scss";

export default function IntentProgrammer() {
  return (
    <div className="about-image-caption">
      <p align="right">
        Complete System Design.
        <br />
        Supported Implementations
      </p>
      {/* <div className="about-images"> */}
      <img
        src={require("../../assets/istockphoto-1147195672-612x612.jpg")}
        alt="Intent Programmer"
        align="right"
      />
      {/* </div> */}
    </div>
  );
}

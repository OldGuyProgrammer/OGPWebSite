//
// OGP Web Site.
// Intent Programmer Portrait component
//
// Jim Olivi 2023
//

import "../about/about.scss";

export default function IntentProgrammer() {
  return (
    <div>
      <p className="about-text-right">
        Complete System Design.
        <br />
        Supported Implementations.
      </p>
      <img
        className="about-image-right"
        src={require("../jimolivi/Jim_At_Computer_back.png")}
        // src={require("../../assets/istockphoto-1147195672-612x612.jpg")}
        alt="Intent Programmer"
      />
    </div>
  );
}

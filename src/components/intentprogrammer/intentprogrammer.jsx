//
// OGP Web Site.
// Intent Programmer Portrait component
//
// Jim Olivi 2003
//

import "../about/about.scss";

export default function IntentProgrammer() {
  return (
    <>
      <div className="image-caption">Complete System Design</div>
      <div className="image-caption">Supported Implementations</div>
      <img
        className="image-fluid image-jim"
        src={require("../../assets/istockphoto-1147195672-612x612.jpg")}
        alt="Intent Programmer"
      />
    </>
  );
}

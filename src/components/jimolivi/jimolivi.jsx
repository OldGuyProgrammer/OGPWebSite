//
// OGP Web Site.
// JimOLivi Portrait component
//
// Jim Olivi 2003
//

import "../about/about.scss";

export default function JimOliviPortrait() {
  return (
    <div>
      {/* <div className="about-images"> */}
      <img
        // className="about-images"
        src={require("../../assets/Jim_Olivi.jpeg")}
        alt="Jim Olivi"
      />
      <p className="about-image-caption">
        Programming Experience.
        <br />
        Professional Integrity.
      </p>
      {/* </div> */}
    </div>
  );
}

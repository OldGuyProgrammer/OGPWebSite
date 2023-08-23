//
// OGP Web Site.
// JimOLivi Portrait component
//
// Jim Olivi 2003
//

import "../about/about.scss";

export default function JimOliviPortrait() {
  return (
    <>
      <img
        className="image-responsive image-jim"
        src={require("../../assets/Jim_Olivi.jpeg")}
        alt="Jim Olivi"
      />
      <div className="image-caption">Programming Experience</div>
      <div className="image-caption">Professional Integrity</div>
    </>
  );
}

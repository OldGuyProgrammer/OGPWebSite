//
// OGP Web Site.
// JimOLivi Portrait Photo component
//
// Jim Olivi 2023
//

import "../about/about.scss";
import JimOliviPortraitCaptions from "./jimoportraittext";

export default function JimOliviPhoto() {
  return (
    <div>
      <img src={require("../../assets/Jim_Olivi.jpeg")} alt="Jim Olivi" />
    </div>
  );
}

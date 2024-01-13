//
// OGP Web Site.
// JimOLivi Portrait with Captions component
//
// Jim Olivi 2023
//

import "../about/about.scss";
import JimOliviPhoto from "./jimoliviphoto";
import JimOliviPortraitCaptions from "./jimoportraittext";

export default function JimOliviPortrait() {
  return (
    <div>
      <JimOliviPhoto />
      <JimOliviPortraitCaptions />
    </div>
  );
}

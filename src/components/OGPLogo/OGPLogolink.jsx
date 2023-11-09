//
// OGP Web Site.
// OGPLogo Live Compnent component
//
// Jim Olivi 2003
//

import { Link } from "react-router-dom";

export default function OGPLogoLink() {
  return (
    <Link to={"/"}>
      <span className="menu-item">OGP</span>
    </Link>
  );
}

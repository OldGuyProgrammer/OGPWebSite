//
// OGP Web Site.
// Menubar Logo component
//
// Jim Olivi 2023
//

import Navbar from "react-bootstrap/Navbar";
import OGPLogoLink from "./OGPLogolink";

export default function OGPLogo() {
  return (
    <>
      <Navbar.Brand>
        <OGPLogoLink />
      </Navbar.Brand>
    </>
  );
}

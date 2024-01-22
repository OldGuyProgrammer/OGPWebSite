//
// OGP Web Site.
// menubar component
//
// Jim Olivi 2023
//

import Navbar from "react-bootstrap/Navbar";
import OGPLogo from "../../components/OGPLogo/OGPLogo";
import MenuItems from "./MenuItems";
import "./menubar.scss";

export default function MenuBar({ home = true, about = true, contact = true }) {
  return (
    <div className="menubar-container menu-item">
      <Navbar expand="lg" className="navbar-dark">
        <OGPLogo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <MenuItems home={home} about={about} contact={contact} />
        </Navbar.Collapse>
      </Navbar>
      <div id="portfolio-help">Tap Portfolio to see other work we've done.</div>
    </div>
  );
}

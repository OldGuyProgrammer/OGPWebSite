//
// OGP Web Site.
// menubar component
//
// Jim Olivi 2003
//

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OGPLogo from "./OGPLogolink";
import AboutLink from "./aboutlink";
import ContactUsLink from "./contactuslink";
import HomeLink from "./homelink";
import "./menubar.scss";

export default function MenuBar({ home = true, about = true, contact = true }) {
  return (
    <Navbar expand="sm" className="navbar-dark menubar-container">
      <Navbar.Brand>
        <OGPLogo />
      </Navbar.Brand>
      <Navbar.Toggle
        className="ms-auto"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          {home && <HomeLink />}
          {about && <AboutLink />}
          {contact && <ContactUsLink />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

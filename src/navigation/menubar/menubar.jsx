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
    <>
      <Navbar expand="lg" className="navbar-dark menubar-container">
        <OGPLogo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <MenuItems home={home} about={about} contact={contact} />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

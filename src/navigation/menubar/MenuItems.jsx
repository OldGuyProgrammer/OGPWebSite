//
// OGP Web Site.
// MenuItems component
//
// Jim Olivi 2023
//

import React from "react";
import {
  Nav,
  Button,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import "./menubar.scss";

export default function MenuItems({
  home = true,
  about = true,
  contact = true,
}) {
  return (
    <>
      <Nav className="me-auto menu-item">
        {home && <Nav.Link href="/">Home</Nav.Link>}
        {about && <Nav.Link href="/about">About</Nav.Link>}
        {contact && <Nav.Link href="/contactus">Contact Us</Nav.Link>}
        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
          <NavDropdown.Item href="/airportdisplay" className="">
            Airport Info
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
}

//
// OGP Web Site.
// MenuItems component
//
// Jim Olivi 2023
//

import Nav from "react-bootstrap/Nav";
import "./menubar.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";

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
        <DropdownButton title="Portfolio" size="lg" variant="secondary">
          <Dropdown.Item href="/airportdisplay">Airport Info</Dropdown.Item>
        </DropdownButton>
      </Nav>
    </>
  );
}

//
// OGP Web Site.
// MenuItems component
//
// Jim Olivi 2023
//

import Nav from "react-bootstrap/Nav";
// import AboutLink from "./aboutlink";
// import ContactUsLink from "./contactuslink";
// import HomeLink from "./homelink";
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
      </Nav>
    </>
  );
}

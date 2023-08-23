//
// OGP Web Site.
// Home Screen Live Compnent component
//
// Jim Olivi 2003
//

import { Navbar } from "react-bootstrap";
import "./menubar.scss";
import { Link } from "react-router-dom";

export default function HomeLink() {
  return (
    <Link to={"/"} className="align-self-end">
      <span className="menu-item">Home</span>
    </Link>
  );
}

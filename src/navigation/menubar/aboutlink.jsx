//
// OGP Web Site.
// About Screen Live Compnent component
//
// Jim Olivi 2003
//

import "./menubar.scss";
import { Link } from "react-router-dom";

export default function AboutLink() {
  return (
    <Link to={"/about"} className="align-self-end">
      <span className="menu-item">About</span>
    </Link>
  );
}

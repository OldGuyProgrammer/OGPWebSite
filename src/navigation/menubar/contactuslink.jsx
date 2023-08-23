//
// OGP Web Site.
// ContactUs Screen Live Compnent component
//
// Jim Olivi 2003
//

import "./menubar.scss";
import { Link } from "react-router-dom";

export default function ContactUsLink() {
  return (
    <Link to={"/contactus"} className="align-self-end">
      <span className="menu-item">Contact</span>
    </Link>
  );
}

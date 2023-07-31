import "./menubar.css";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="menubar-container">
      <img
        style={{ width: "5%" }}
        src={require("../../assets/profile.png")}
        alt="OGP Logo"
      />
      <span>Old Guy Programmer</span>
      <Link to={"/"}>
        <span className="menu-item">Home</span>
      </Link>
      <Link to={"/about"}>
        <span className="menu-item">About</span>
      </Link>
      <Link to={"/contactus"}>
        <span className="menu-item">Contact Us</span>
      </Link>
    </div>
  );
}

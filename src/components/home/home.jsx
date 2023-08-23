import React from "react";
import MenuBar from "../../navigation/menubar/menubar.jsx";
import "./home.css";
import background from "../../assets/wp2823565-tech-wallpaper.jpg";

export default function Home() {
  return (
    <>
      <MenuBar home={false} />
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="home-screen-container"
      >
        <div className="home-screen-grid">
          <img
            className="logo-image"
            style={{ maxWidth: "25%" }}
            src={require("../../assets/default.png")}
            alt="Jim Olivi"
          />
          <div>
            <span className="text-center home-text-container">
              Old Guy Programmer
            </span>
            <span className="text-center home-text-container">
              Professional IT Developement
            </span>
            <span className="text-center home-text-container">
              Professional IT Support
            </span>
            <span className="text-center home-text-container smaller-text ">
              Tap the About menu item to see our portfolio.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

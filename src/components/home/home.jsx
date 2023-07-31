import React from "react";
import MenuBar from "../../navigation/menubar/menubar.jsx";
import "./home.css";
import background from "../../assets/python_code_2.png";

export default function Home() {
  return (
    <>
      <MenuBar />
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="home-screen-container"
      >
        <div className="home-screen-grid">
          <img
            style={{ width: "30%" }}
            src={require("../../assets/default.png")}
            alt="Jim Olivi"
          />
          <div>
            <h1>Professional IT Developement</h1>
            <h3>Professional IT Support</h3>
            <h3>Tap the About menu item to see our portfolio.</h3>
          </div>
        </div>
      </div>
    </>
  );
}

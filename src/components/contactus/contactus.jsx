//
// Old Guy Programmer
//
// Contact Us Component
//
// Jim Olivi 2023

import React from "react";
import { useState } from "react";
import MenuBar from "../../navigation/menubar/menubar.jsx";
import JimOliviPhoto from "../jimolivi/jimoliviphoto.jsx";
import Button from "react-bootstrap/Button";
import "./contactus.scss";

const defaultContactFields = {
  contactName: "",
  contactCompany: "",
  contactEmail: "",
  contactMessage: "",
};

export default function ContactUs() {
  const [formFields, setFormFields] = useState({
    contactName: "",
    contactCompany: "",
    contactEmail: "",
    contactMessage: "",
  });

  const { contactName, contactCompany, contactEmail, contactMessage } =
    formFields;

  const handleSubmit = async (event) => {
    console.log("In handle submit, sending data to server.");
    event.preventDefault();
    const contactData = {
      eMailFrom: contactEmail,
      mailFromName: contactName,
      contactCompany: contactCompany,
      message: contactMessage,
    };
    console.log(contactData);
    try {
      const url = process.env.REACT_APP_OGP_SERVER_URL;
      // const url = "http://localhost:3010/savecontact";
      console.log(url);
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        Accept: "*/*",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      if (response.ok) {
        if (response.status == 201) {
          console.log("Fetch response 201 returned.");
          window.location = "/sendsuccess";
        } else {
          const msg = `Send to the server failed\nStatus Code: ${response.status}, message: ${response.statusText}`;
          console.log(msg);
        }
      } else {
        console.log(
          `Fetch from server failed, response: ${response.status}\nMessage: ${response.statusText}`
        );
      }
      return response.status;
    } catch (error) {
      const msg = `Error Caught, send to the server failed\nmessage: ${error}`;
      console.log(msg);
      return error;
    }

    console.log(`Return from sender: ${ret}`);
    if (ret == 201) {
      setFormFields(defaultContactFields);
      window.location = "/sendsuccess";
    } else {
      window.location = "/fatalerror";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <>
      <MenuBar contact={false} />
      <div className="container-fluid screen-container">
        <div className="text-header">
          <p>
            Get more information from the Old Guy Team.
            <br />
            Find out more about our skills, expertise and experience.
            <br />
            We will reply as soon as we can.
          </p>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="input-container">
            <div className="card-container">
              <label for="contactName">Name:</label>
              <input
                className="form-control"
                type="text"
                name="contactName"
                value={contactName}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
              />
              <label for="contactCompany">Company Name:</label>
              <input
                className="form-control"
                type="text"
                name="contactCompany"
                value={contactCompany}
                onChange={handleChange}
                placeholder="Enter Your Company Name"
              />
              <label for="contactEmail">Email Address:</label>
              <input
                className="form-control"
                type="email"
                name="contactEmail"
                value={contactEmail}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
              />
              <label for="contactMessage">Message:</label>
              <textarea
                className="form-control"
                rows="5"
                value={contactMessage}
                name="contactMessage"
                onChange={handleChange}
              />
              <button className="btn contactus-button" type="submit">
                Submit
              </button>
            </div>
            <div className="d-none d-md-block d-lg-block d-xl-block">
              <JimOliviPhoto />
              <p className="text-left">
                Jim Olivi <br />
                IT Professional
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

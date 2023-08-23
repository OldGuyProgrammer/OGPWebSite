//
// Old Guy Programmer
//
// Company web site
//
// Jim Olivi 2023

import React from "react";
import { useState } from "react";
import MenuBar from "../../navigation/menubar/menubar.jsx";
import "./contactus.css";
import { postData } from "../../utilities/fetchFromServer.js";

const defaultContactFields = {
  contactName: "",
  contactEmail: "",
  contactMessage: "",
};

export default function ContactUs() {
  const [formFields, setFormFields] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  });

  const { contactName, contactEmail, contactMessage } = formFields;

  const handleSubmit = (event) => {
    event.preventDefault();
    const now = new Date().toTimeString();
    const contactData = {
      eMailFrom: contactEmail,
      mailFromName: contactEmail,
      message: contactMessage,
    };
    console.log(contactData);
    postData(contactData);
    setFormFields(defaultContactFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div className="whole_container">
      <MenuBar contact={false} />
      <form onSubmit={handleSubmit} method="POST">
        <div className="contactus-container">
          <div className="text-container">Name:</div>
          <div className="input-container">
            <input
              type="text"
              name="contactName"
              value={contactName}
              onChange={handleChange}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="text-container">Email Address:</div>
          <div className="input-container">
            <input
              type="email"
              name="contactEmail"
              aria-describedby="emailHelp"
              value={contactEmail}
              onChange={handleChange}
            />
          </div>
          <div className="text-container">Message:</div>
          <div className="text-container">
            <textarea
              rows="5"
              value={contactMessage}
              name="contactMessage"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

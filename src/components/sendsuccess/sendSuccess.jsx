//
// Old Guy Programmer
//
// Display sent email success screen
//
// Jim Olivi 2023

import MenuBar from "../../navigation/menubar/menubar.jsx";
import JimOliviPhoto from "../jimolivi/jimoliviphoto.jsx";
import "./sendsuccess.scss";

export default function SendSuccess() {
  return (
    <>
      <MenuBar />
      <div className="container-fluid send-success-basic">
        <div>
          <p>
            Thank you for contacting us. Your message was sent to our support
            staff. Watch your email for replies.
          </p>
          <p>If you don't get a response soon, please contact us again.</p>
        </div>
        <JimOliviPhoto />
      </div>
    </>
  );
}

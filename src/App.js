//
// OGP Web Site.
//
// Jim Olivi 2003
//

import { Routes, Route } from "react-router-dom";
import About from "../src/components/about/about.jsx";
import Home from "../src/components/home/home.jsx";
import ContactUs from "./components/contactus/contactus.jsx";
import SendSuccess from "./components/sendsuccess/sendSuccess.jsx";
import FatalError from "./components/fatalerror/fatalError.jsx";
import "./styles.scss";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/sendsuccess" element={<SendSuccess />} />
      <Route path="/fatalerror" element={<FatalError />} />
    </Routes>
  );
}

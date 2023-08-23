//
// OGP Web Site.
//
// Jim Olivi 2003
//

import { Routes, Route } from "react-router-dom";
import About from "../src/components/about/about.jsx";
import Home from "../src/components/home/home.jsx";
import ContactUs from "./components/contactus/contactus.jsx";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}

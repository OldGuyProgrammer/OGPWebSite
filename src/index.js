//
// OGP Web Site.
//
// Jim Olivi 2024
//

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from '../src/components/footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import { AirportProvider } from "./context/airport.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AirportProvider>
        <App />
      </AirportProvider>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);

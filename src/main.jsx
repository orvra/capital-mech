import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/roboto-flex";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/capital-mech">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

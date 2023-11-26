import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/roboto-flex";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/capital-mech">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
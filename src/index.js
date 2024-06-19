import React from "react";
import ReactDOM from "react-dom/client";
import RoutesComponent from "./Routes";
import "./index.scss";
import "./utility/globalVariablesForThemeChange.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);

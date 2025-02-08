import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AboutPage from "./AboutPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AboutPage/>
  </React.StrictMode>
);

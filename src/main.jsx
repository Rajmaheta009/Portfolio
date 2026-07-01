import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Global Styles
import "./style/Variables.css";
import "./style/global.css";
import "./style/animations.css";

// Base Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
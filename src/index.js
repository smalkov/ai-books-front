import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (window.Telegram?.WebApp) {
  // console.log("window", window.Telegram);
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

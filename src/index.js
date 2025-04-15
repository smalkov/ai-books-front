import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";

import "./index.css";

const theme = createTheme({
  palette: {
    secondary: {
      light: "#f8e8d8",
      main: "#f0dac5",
      dark: "#e8cbae",
      contrastText: "#000",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

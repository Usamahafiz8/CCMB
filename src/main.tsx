import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import light from "./theme/theme.ts";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <div style={{maxWidth : "2000px" , margin: "auto"}} >
        <App />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

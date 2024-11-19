import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css"; // Tailwind CSS

// Find the root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Wrap the App in BrowserRouter and render it
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

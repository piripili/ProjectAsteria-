import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";

import "./styles/globals.css";

import { AudioProvider } from "./context/AudioContext";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento #root.");
}

createRoot(rootElement).render(
  <StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </StrictMode>,
);
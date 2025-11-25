import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // importante para estilos globales

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
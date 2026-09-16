import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/bootstrap-custom.scss";
import "./styles/bootstrap-icons-subset.css";

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";

import "@fontsource/fredoka/latin-400.css";
import "@fontsource/fredoka/latin-500.css";
import "@fontsource/fredoka/latin-600.css";
import "@fontsource/fredoka/latin-700.css";

import "./index.css";

import App from "./App.jsx";
import "./i18n/i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

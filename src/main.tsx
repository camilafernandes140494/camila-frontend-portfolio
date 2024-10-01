import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../public/locales/i18n.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

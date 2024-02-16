import * as React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
if (!root) throw new Error("Root element not found");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

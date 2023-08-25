import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/styles/main.scss";
import App from "./assets/components/App/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

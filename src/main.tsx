import React from "react";
import ReactDOM from "react-dom/client";
import { ContextNRouterApp } from "./ContextNRouterApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextNRouterApp />
    </BrowserRouter>
  </React.StrictMode>
);

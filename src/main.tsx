import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { ToolkitReduxApp } from "./ToolkitReduxApp";
import { store } from "./ToolkitRedux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToolkitReduxApp />
    </Provider>
  </React.StrictMode>
);

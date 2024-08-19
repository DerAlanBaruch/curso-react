import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { store } from "./ToolkitRedux/store";
import { HeroesApp } from "./HeroesApp";
import { GifExpertApp } from "./GifExpertApp";
import { HooksApp } from "./HooksApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HooksApp />
    </Provider>
  </React.StrictMode>
);

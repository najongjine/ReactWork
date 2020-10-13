import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import ToDosProvider from "./context";

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById("root")
);

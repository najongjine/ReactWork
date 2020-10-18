import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import LoginProvider from "./ReduX/context";

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById("root")
);

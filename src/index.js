import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ToastContainer>
    <App />
  </ToastContainer>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <ToastContainer theme="dark" />
  </React.StrictMode>
);

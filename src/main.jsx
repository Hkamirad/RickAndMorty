import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={Router}/>
    <Footer />
  </React.StrictMode>
);

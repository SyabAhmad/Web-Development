import React from "react";
import ReactDOM from "react-dom/client";
import HeaderNavbar from "./components/NavBar.jsx";
import HeadSection from "./components/HeadSection.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <HeaderNavbar />
      <HeadSection />
    </div>
  </React.StrictMode>
);

import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="Logo">
          <h2>NavBar</h2>
        </div>
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Media</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

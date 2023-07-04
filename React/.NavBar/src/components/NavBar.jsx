import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <section className="headerSection">
        <header>
          <h1>logo</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </header>
        <hr />
      </section>
    </>
  );
};

export default NavBar;

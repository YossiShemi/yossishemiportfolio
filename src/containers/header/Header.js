import React from "react";
import "./Header.css";
import {Fade} from "react-reveal";

function Header() {
  return (
  
  <Fade top duration={1000} distance="20px">
    <div>
      <header className="header">

      <img src={require("../../images/logo.png")} className="logo"></img>
       
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        
        <ul className="menu">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

      </header>
    </div>
    </Fade>

  );
}
export default Header;

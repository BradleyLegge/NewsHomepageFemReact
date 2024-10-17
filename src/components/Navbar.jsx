import React from "react";
import Logo from "../images/logo.svg";
import BurgerMenu from "../images/icon-menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img className="navbar-logo" src={Logo} alt="Company logo" />
      <button className="navbar-burger-button">
        <img className="navbar-burger-icon" src={BurgerMenu} alt="" />
      </button>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

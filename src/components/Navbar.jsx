import React from "react";
import { useState } from "react";
import Logo from "../images/logo.svg";
import BurgerMenu from "../images/icon-menu.svg";
import CloseMenu from "../images/icon-menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <img className="navbar-logo" src={Logo} alt="Company logo" />
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
      <div className="navbar-burger-container">
        {isOpen ? (
          <button onClick={handleOpenMenu} className="burger-open-button">
            <img src={BurgerMenu} alt="Image of hamburger menu icon" />
          </button>
        ) : (
          <div className="burger-menu-open">
            <button onClick={handleOpenMenu} className="burger-close-button">
              <img src={CloseMenu} alt="Image of an X to close menu" />
            </button>
            <ul className="navbar-links-mobile">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;

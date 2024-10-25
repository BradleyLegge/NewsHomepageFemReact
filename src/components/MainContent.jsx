import React from "react";
import Web3Image from "../images/image-web-3-desktop.jpg";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <img
        className="main-content-image"
        src={Web3Image}
        alt="Web 3.0 main image"
      />
      <div className="main-content-info">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="left-side">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="read-more-btn">read more</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

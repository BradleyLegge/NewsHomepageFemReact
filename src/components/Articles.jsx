import React from "react";
import RetroPcImage from "../images/image-retro-pcs.jpg";
import TopLaptopImage from "../images/image-top-laptops.jpg";
import GamingGrowthImage from "../images/image-gaming-growth.jpg";

const Articles = () => {
  return (
    <div className="articles-container">
      <div className="article">
        <img src={RetroPcImage} alt="Image of a retro pc" />
        <div className="article-info">
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="article">
        <img src={TopLaptopImage} alt="Image of a retro pc" />
        <div className="article-info">
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="article">
        <img src={GamingGrowthImage} alt="Image of a retro pc" />
        <div className="article-info">
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;

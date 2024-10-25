import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import NewSection from "./components/NewSection";
import Articles from "./components/Articles";

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="desktop-view">
        <MainContent />
        <NewSection />
      </div>
      <Articles />
    </div>
  );
};

export default App;

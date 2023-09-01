import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="herosection">
      <div className="herosection-container">
        <img
          className="herosection-background"
          src={require("../../images/hero-section-background.png")}
          alt="hero-section-background"
        />
        {/* <img
          className="herosection-badmintonguy"
          src={require("../../images/hero-section-badmintonguy.png")}
          alt="herosection-badmintonguy"
        />
        <img
          className="herosection-basketballguy"
          src={require("../../images/hero-section-basketballguy.png")}
          alt="herosection-basketballguy"
        />
        <img
          className="herosection-footballguy"
          src={require("../../images/hero-section-footballguy.png")}
          alt="herosection-footballguy"
        /> */}
      </div>
    </div>
  );
}

export default HeroSection;

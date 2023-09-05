import React from "react";
import "./HeroSection.css";
// import Ehsaas from "./Ehsaas";

function HeroSection() {
  const Letters = ['E','h','s','a','a','s'];
  return (
    <div className="herosection">
      <div className="herosection-container">
        <img
          className="herosection-background"
          src={require("../../images/hero-section-background.png")}
          alt="hero-section-background"
        />
        <div className='ehsaas-block'>       
        {Letters.map((letter, index) =>
          <span key={index} id={letter} className="ehsaas-char bounce-3">{letter}</span>
          )}
        </div>
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

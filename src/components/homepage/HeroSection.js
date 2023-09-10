import React from "react";
import "./HeroSection.css";
// import Ehsaas from "./Ehsaas";

function HeroSection() {
  const Letters = ["E", "h", "s", "a", "a", "s"];
  return (
    <div className="herosection">
      <div className="herosection-container">
        <div className="ehsaas-block">
          {Letters.map((letter, index) => (
            <span
              key={index}
              id={`${letter}${index}`}
              className="ehsaas-char bounce-3"
            >
              {letter}
            </span>
          ))}
        </div>
        <img
          className="herosection-background"
          src={require("../../images/hero-section-background.png")}
          alt="hero-section-background"
        />
        <img
          className="herosection-badmintonguy"
          src={require("../../images/hero-section-badmintonguy.png")}
          alt="herosection-badmintonguy"
        />
        <img
          className="herosection-football"
          src={require("../../images/hero-section-football.png")}
          alt="herosection-football"
        />
        <img
          className="herosection-basketball"
          src={require("../../images/hero-section-basketball.png")}
          alt="herosection-basketball"
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
        />

        <img
          className="herosection-hoop1"
          src={require("../../images/hero-section-hoop1.png")}
          alt="herosection-hoop"
        />
        <img
          className="herosection-hoop2"
          src={require("../../images/hero-section-hoop2.png")}
          alt="herosection-hoop"
        />
        <img
          className="herosection-hoop3"
          src={require("../../images/hero-section-hoop4.png")}
          alt="herosection-hoop"
        />
        <img
          className="herosection-beam1"
          src={require("../../images/hero-section-beam1.png")}
          alt="herosection-beam"
        />
        <img
          className="herosection-beam2"
          src={require("../../images/hero-section-beam2.png")}
          alt="herosection-beam"
        />
        <img
          className="herosection-beam3"
          src={require("../../images/hero-section-beam3.png")}
          alt="herosection-beam"
        />
        <img
          className="herosection-beam4"
          src={require("../../images/hero-section-beam4.png")}
          alt="herosection-beam"
        />
        <img
          className="herosection-beam5"
          src={require("../../images/hero-section-beam5.png")}
          alt="herosection-beam"
        />
        <img
          className="herosection-clef"
          src={require("../../images/hero-section-clef.png")}
          alt="herosection-clef"
        />
        <img
          className="herosection-guitar"
          src={require("../../images/hero-section-guitar.png")}
          alt="herosection-guitar"
        />
        <img
          className="herosection-keyboard"
          src={require("../../images/hero-section-keyboard.png")}
          alt="herosection-keyboard"
        />
        <img
          className="herosection-tape"
          src={require("../../images/hero-section-tape.png")}
          alt="herosection-tape"
        />
        <img
          className="herosection-boy"
          src={require("../../images/hero-section-boy.png")}
          alt="herosection-boy"
        />
        <img
          className="herosection-girl1"
          src={require("../../images/hero-section-girl1.png")}
          alt="herosection-girl"
        />
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import Navbar from "../Navbar.js";
import HeroSection from "./HeroSection";
import "./Homepage.css";
import FeaturedEvents from "./FeaturedEvents.js";
import Sponsors from "../Sponsors.js";
import Footer from "../Footer.js";

function Homepage() {
  return (
    <main className="homepage">
      <Navbar />
      <HeroSection />
      <FeaturedEvents />
      <Sponsors />
      <Footer />
      <img
        className="footer-background"
        src={require("../../images/footer-background.png")}
        alt="footer-background"
      />
    </main>
  );
}

export default Homepage;

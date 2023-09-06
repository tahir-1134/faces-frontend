import React, { useState, useEffect } from "react";
import Navbar from "../Navbar.js";
import "./EventsPage.css";
import Disclaimer from "./Disclaimer.js";
import EventsFilter from "./EventsFilter.js";
import Sponsors from "../Sponsors.js";
import Footer from "../Footer.js";
import axios from "axios";

function EventsPage() {
  
  return (
    <main className="eventspage">
      <Navbar />
      <Disclaimer/>
      <Sponsors />

      <div class="line-1"></div>

      <EventsFilter/>

      <Footer />
      
      <img
        className="footer-background"
        src={require("../../images/footer-background.png")}
        alt="footer-background"
      />
    </main>
  );
}

export default EventsPage;
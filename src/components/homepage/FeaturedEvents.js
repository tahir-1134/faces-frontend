import React, { useState } from "react";
import "./FeaturedEvents.css";
import FeaturedEvent from "./FeaturedEvent.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function FeaturedEvents() {
  // #0 --> Cultural  #1 --> Sports #2 --> Seminar
  const [active, setActive] = useState(0);

  return (
    <div className="featuredEvents">
      <h3>Featured Events</h3>
              <FeaturedEvent/>
    </div>
  );
}

export default FeaturedEvents;

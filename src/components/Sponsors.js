import React from "react";
import "./Sponsors.css";

function Sponsors() {
  const sponsors = [1];
  return (
    <div className="sponsors">
      <h3>Our Sponsors</h3>
      <div className="sponsorsCards">
        {sponsors.map((sponsors, index) => (
          <div key={index} className="sponsorsCardContainer">
            <img
              className="sponsorsCard"
              
              src={require(`../images/sponsor${index + 1}.png`)}
              alt="sponsor logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;

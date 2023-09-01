import React from "react";
import "./Sponsors.css";

function Sponsors() {
  const sponsors = [1, 2, 3, 4, 5, 6];
  return (
    <div className="sponsors">
      <h3>Our Sponsors</h3>
      <div className="sponsorsCards">
        {sponsors.map((sponsors, index) => (
          <div className="sponsorsCardContainer">
            <img
              className="sponsorsCard"
              key={index}
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

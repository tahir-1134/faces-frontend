import React from "react";
import "./FeaturedEventsCards.css";

function FeaturedEventsCard() {
  return (
    <div className="featuredEventsCard">
      <div className="featuredEventsCardTop">
        <div className="featuredEventsCardButtons">
          <button className="featuredEventsCardBtn">Cultural</button>
          <button
            className="featuredEventsCardBtn"
            style={{ background: "#F9F9f7" }}
          >
            Day x
          </button>
        </div>
      </div>
      <div className="featuredEventsCardBottom">
        <span className="fearuredEventsCardName">Rock Band Concert</span>
        <span className="fearuredEventsCardTime">3:00 - 5:00</span>
      </div>
    </div>
  );
}

export default FeaturedEventsCard;

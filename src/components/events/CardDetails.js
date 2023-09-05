import React from "react";
// import "./CardDetails.css";

function CardDetails({ card, onClose }) {
  return (
    <div className="card-details">
      <div className="card-description">Description: {card.description}</div>
      <div className="card-single-team">Single/Team: {card.singleTeam}</div>
      <div className="card-category">Category: {card.category}</div>
      <div className="card-cost">Cost: {card.cost}</div>
      <div className="card-day">Day: {card.day}</div>
      <div className="card-location">Location: {card.location}</div>
      <div className="card-time">Time: {card.time}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default CardDetails;

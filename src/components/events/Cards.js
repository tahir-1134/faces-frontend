import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";

function Cards({ filteredCards, events }) {
  const [expandedCardId, setExpandedCardId] = useState(null);
  

  const handleCardClick = (cardId) => {
    if (expandedCardId === cardId) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(cardId);
    }
  };

  return (
    <div className="cards">
      {events?.map((card) => (
        <div
          key={card.event_code}
          className={`card ${expandedCardId === card.event_code ? "expanded" : ""}`}
          onClick={() => handleCardClick(card.event_code)}
        >
          <div
            className="card-image"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="card-title">{card.title}</div>
            <div className="card-timing">
              {`${card.start} - ${card.end}`}
            </div>
            <div className="card-category">{card.category === 'T' && 'Seminar' || card.category === 'C' && 'Cultural' || card.category === 'S' && 'Sports'}</div>
            <div className="card-day">Day {card.day}</div>
          </div>
          <div className={`card-description ${expandedCardId === card.event_code ? "show" : "hide"}`}>
            <div> Event Description: {card.description} </div>
            <div> Max seats: {card.max_seats} </div>
            <div> Entry seats: {card.entry_fee} </div>
            <div> Prize Money: {card.prize_money} </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

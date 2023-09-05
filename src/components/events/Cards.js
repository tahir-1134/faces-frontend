import React, { useState } from "react";
import "./Cards.css";

function Cards({ filteredCards }) {
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
      {filteredCards.map((card) => (
        <div key={card.id} className="card">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${card.imageSrc})` }}
            onClick={() => handleCardClick(card.id)}
          ></div>
          <div className="card-title">{card.title}</div>
          <div className="card-timing">{card.timing}</div>
          <div className="card-category">{card.category}</div>
          <div className="card-day">{card.day}</div>
          {expandedCardId === card.id && (
            <div className="additional-info">
              <h2>Box hofhiehihhfiafhihfahfihwfa</h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;

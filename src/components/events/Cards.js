import React, { useState } from "react";
import "./Cards.css";

function Cards({ filteredCards, isVerified }) {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [inputId, setInputId] = useState();
  const [addedIds, setAddedIds] = useState([]);

  const handleCardClick = (cardId) => {
    setExpandedCardId(cardId);
  };
  const showVerificationStatus = () => {
    alert("Verification status: " + (verified ? "verified" : "not-verified"));
}
  // Function to render the verification icon based on the verification status
  const renderVerificationIcon = (isVerified) => {
    if (isVerified === null) {
      return null; // Don't display any icon if verification status is null
    } else if (isVerified) {
      return <span className="verification-icon">&#10004;</span>; // Display a tick icon for true
    } else {
      return <span className="verification-icon">&#10006;</span>; // Display a cross icon for false
    }
  };

  return (
    <div className="cards">
      {filteredCards.map((card) => (
        <div
          key={card.event_code}
          className={`card ${
            expandedCardId === card.event_code ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(card.event_code)}
        >
          <div
            className="card-image"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="card-title">
              {card.title} 
              {isVerified ? <img src={require("../../images/verified.png")} alt="name" className='eventVerification' onClick={showVerificationStatus}
                                    /> : <img src={require("../../images/unverified.png")} alt="name"
                                        className='eventVerification' onClick={showVerificationStatus} />}
            </div>
            <div className="card-timing">
              {`${card.start} - ${card.end}`}
            </div>
            <div className="card-category">{card.category}</div>
            <div className="card-day">Day {card.day}</div>
          </div>
          <div
            className={`card-description ${
              expandedCardId === card.event_code ? "show" : "hide"
            }`}
          >
            <div> Event Description: {card.description} </div>
            <div> Max seats: {card.max_seats} </div>
            <div> Entry seats: {card.entry_fee} </div>
            <div> Prize Money: {card.prize_money} </div>
            <div className="card-addteam">
              <p>Add Team Members:</p>
              <span className="card-addteam-add">
                <input
                  type="text"
                  className="card-addteam-input"
                  placeholder="Roll number"
                  name="addteam"
                  value={inputId}
                  onChange={(e) => {
                    setInputId(e.target.value);
                  }}
                />
                <button
                  className="card-addteam-button"
                  onClick={() => {
                    setAddedIds([...addedIds, inputId]);
                    setInputId("");
                  }}
                >
                  Add
                </button>
              </span>
              <span className="card-addteam-added">
                {addedIds?.map((id) => (
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p key={id} id={id}>
                      {id}
                    </p>
                    <p
                      style={{ color: "#ff2f45" }}
                      id={id}
                      onClick={(e) => {
                        setAddedIds(
                          addedIds.filter((id) => id !== e.target.id)
                        );
                      }}
                    >
                      X
                    </p>
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

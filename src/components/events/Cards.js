import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cards({  isVerified , events, onRegisterClick}) {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [inputId, setInputId] = useState();
  const [addedIds, setAddedIds] = useState();
  const [token, setToken] = useState();
  const [tokenExist, setTokenExist] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();

  function checkToken() {
    if (localStorage.getItem('token')) {
      // Token exists, do something with it
       setTokenExist(true);
      const token = localStorage.getItem('token');
      setToken(token)
      // console.log('Token exists:', token);

      // You can use the token for authentication or perform other actions here
    } else {
      // Token does not exist in localStorage
      setTokenExist(false);
      console.log('You need to Login first');
    }

  }
  useEffect(() => {
    checkToken();
  })




  const handleRegisterClick = async (event_code) => {
    try {

      const headers = {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json', 
      }
      console.log(addedIds);
      const response = await axios.post('http://127.0.0.1:8000/api/e/register/', { "event_code":event_code, "team_name": name}, {
        headers
});
      // Successful login logic (e.g., save token, redirect)

    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.detail); // Show error message in alert
      } else {
        console.log(error); // Fallback error message
      }
    }
  };





 


  const handleCardClick = (cardId) => {
    if (expandedCardId === cardId) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(cardId);
    }
    setAddedIds([]);
  };


  const showVerificationStatus = () => {
    alert("Verification status: " + (isVerified ? "verified" : "not-verified"));
  }
  


  // Function to render the verification icon based on the verification status
  const renderVerificationIcon = (isVerified) => {
    if (isVerified === null) {
      return null; // Don't display any icon if verification status is null
    } else if (isVerified) {
      return <img src={require("../../images/verified.png")} alt="name" className='eventVerification' onClick={showVerificationStatus}
      />; // Display a tick icon for true
    } else {
      return <img src={require("../../images/unverified.png")} alt="name"
      className='eventVerification' onClick={showVerificationStatus} />; // Display a cross icon for false
    }
  };



  return (
    <div className="cards">
      {events?.map((card) => (
        <div
          key={card.event_code}
          className={`card ${
            expandedCardId === card.event_code ? "expanded" : ""
          }`}
        >
          <div
            className="card-image"
            style={{ backgroundImage: `url(${card.image})` }}
            onClick={() => handleCardClick(card.event_code)}
          >
            <div className="card-title">
              {card.title} 
           {renderVerificationIcon(card.isVerified)}
            </div>
            <div className="card-timing">
              {`${card.start} - ${card.end}`}
            </div>
            <div className="card-category">{card.category === 'T' && 'Seminar' || card.category === 'C' && 'Cultural' || card.category === 'S' && 'Sports'}</div>
            <div className="card-day">Day {card.day}</div>
          </div>
          <div
            className={`card-description ${
              expandedCardId === card.event_code ? "show" : "hide"
            }`}
          >
            <div> Event Description: {card.description} </div>
            <div> Seats Booked: {card.seats} /{ card.max_seats} </div>
            <div> Entry seats: {card.entry_fee} </div>
            <div> Prize Money: {card.prize_money} </div>
            <div>whatsapp_link:{card.whatsapp_link}</div>
            <div> Team Size: {card.team_size} </div>
            <div className="card-addteam">
                        
              {card.team_size > 1 ? <>
                <p>Add Team Name:</p>
                <input
                  type="text"
                  className="card-addteam-input"
                  placeholder="Name"
                  name="addteam"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                 <p>Add Team Members' roll numbers (one by one):</p>
              <span className="card-addteam-add">
                  <input
                  type="number"
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
                    let flag = 1;
                    if (
                      isNaN(inputId) ||
                      inputId === "" ||
                      inputId.length < 7
                    ) {
                      alert("Enter a valid id!");
                    } else {
                      addedIds.forEach((id) => {
                        if (id === inputId) {
                          alert("Duplicate Ids are not allowed");
                          flag = 0;
                        }
                      });
                      if (flag) {
                        setAddedIds([...addedIds, inputId]);
                        setInputId("");
                      }
                    }
                  }}
                >
                  Add
                </button>
                </span></> : <>
                <p>Enter Your Name:</p>
                <input
                  type="text"
                  className="card-addteam-input"
                  placeholder="Name"
                  name="addteam"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                /></>}
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
            <div className="register-div">                
            <button className="register-button" onClick={() => handleRegisterClick(card.event_code)}>
                  Register
                </button></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

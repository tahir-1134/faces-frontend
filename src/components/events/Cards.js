import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cards({ isVerified, events, onRegisterClick }) {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [inputId, setInputId] = useState();
  const [addedIds, setAddedIds] = useState();
  const [token, setToken] = useState();
  const [tokenExist, setTokenExist] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const [regEvents, setRegEvents] = useState();
  const [tname, setTname] = useState();
  const [partID, setPartID] = useState();
  const [eventData, setEventData] = useState([]);
  const [eventCode, setEventCode] = useState('');
  const [eventIsVerified, setEventIsVerified] = useState(false);


  
//   useEffect(() => {
  
//     const localStorageData = localStorage.getItem('eventData');

//     if (localStorageData) {
//       // Parse the JSON data into a JavaScript object
//       const parsedData = JSON.parse(localStorageData);
// console.log(parsedData);
//       // Set the event data in the state
//       setEventData(parsedData);
//     } else {
//       console.log('No data found in localStorage.');
//     }
//   }, []);

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
      const body = {
        "event_code": event_code,
        "team_name": name,
        "members": addedIds
      }
      console.log(body);
      if (!name) {
      // console.log(name,tname);
        await axios.post('http://127.0.0.1:8000/api/e/register/', { event_code }, { headers });
      } else {
        await axios.post('http://127.0.0.1:8000/api/e/register/', { "event_code": event_code, "team_name": name, "members": addedIds }, { headers });
      }
      // Successful login logic (e.g., save token, redirect)
      setName("");
      alert("Registered, Go to Profile page to checkOut")

    } catch (error) {
      if (error.response.data.detail) {
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


  // const verificationStatus = (event_code) => {
  //   const participations = JSON.parse(localStorage.getItem('participations'));
  //   participations.map((entry) => {
  //     if (entry.event.event_code === event_code) {
  //       setEventIsVerified(entry.event.isVerified);
  //     }
  //   })

  // }


  // Function to render the verification icon based on the verification status
  const renderVerificationIcon = (isVerified, event_code) => {
    
    if (isVerified == null) {
      return null; // Don't display any icon if verification status is null
    } else if (isVerified) {
      return <img src={require("../../images/verified.png")} alt="name" className='eventVerification' onClick={showVerificationStatus}
      />; // Display a tick icon for true
    } else {
      return <img src={require("../../images/unverified.png")} alt="name"
        className='eventVerification' onClick={showVerificationStatus} />; // Display a cross icon for false
    }
  };

  function unRegisterOption() {
    const participations = JSON.parse(localStorage.getItem('participations'));
    const event_codes = (participations.map((ele) => ele.event.event_code));
    return setRegEvents(event_codes);
  }
  useEffect(() => { unRegisterOption() }, {})




  const handleUnRegisterClick = async (event_code) => {
    try {
      const headers = {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
      }
      const participations = JSON.parse(localStorage.getItem('participations'));
      // console.log(participations[0].event.event_code)
      participations.map((ele) => {
        if (ele.event.event_code === event_code) {
          setPartID(ele.part_id);
        }
      });
      console.log(addedIds);
      if (window.confirm("do you really want to Unregister")) {
        const response = await axios.post('http://127.0.0.1:8000/api/e/unregister/', { 'part_id': partID }, { headers });
        // Successful login logic (e.g., save token, redirect)
        setName("");
        setAddedIds("");
        alert("You are unregistered from the event");
      }
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.details); // Show error message in alert
      } else {
        console.log(error); // Fallback error message
      }
    }
  }


  return (
    <div className="cards">
      {events?.map((card) => (
        <div
          key={card.event_code}
          className={`card ${expandedCardId === card.event_code ? "expanded" : ""
            }`}
        >
          <div
            className="card-image"
            style={{ backgroundImage: `url(${card.image_google_link})` }}
            onClick={() => handleCardClick(card.event_code)}
          >
            <div className="card-title">
              {card.title}
              {/* {verificationStatus(card.event_code)} */}
              {renderVerificationIcon(isVerified,card.event_code)}
            </div>
            <div className="card-timing">
              {`${card.start} - ${card.end}`}
            </div>
            <div className="card-category">{card.category === 'T' && 'Seminar' || card.category === 'C' && 'Cultural' || card.category === 'S' && 'Sports'}</div>
            <div className="card-day">Day {card.day}</div>
          </div>
          <div
            className={`card-description ${expandedCardId === card.event_code ? "show" : "hide"
              }`}
          >
            <div> Event Description: {card.description} </div>
            <div> Event Rules: {card.event_rules} </div>

            <div> Seats Booked: {card.seats} /{card.max_seats} </div>
            <div> Entry fees: Rs.{card.entry_fee}/- </div>
            <div> Prize Money: {card.prize_money} </div>
            <div>whatsapp_link:{card.whatsapp_link}</div>
            <div> Team Size: {card.team_size} </div>
            {regEvents.includes(card.event_code) ? <div className="register-div">
              <button className="register-button" onClick={() => handleUnRegisterClick(card.event_code)}>
                unRegister
              </button></div> : <>
              <div className="card-addteam">

                {card.team_size > 1 && <>
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
                  <p>Add Team Members' roll numbers (Except yours):</p>
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
                            setTname(name)
                          }
                        }
                      }}
                    >
                      Add
                    </button>
                  </span></>}
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
                </button></div></>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

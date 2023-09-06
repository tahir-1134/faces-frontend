import React, { useState, useEffect } from 'react'
import './Profilepage.css'
import Navbar from '../Navbar'
import Sponsors from '../Sponsors'
import Footer from '../Footer'
import ProfileInformation from './ProfileInformation'
import Cards from '../events/Cards.js'
import cardData from '../events/cardsData.json'
import axios from 'axios'

function Profilepage() {
const [selectedFilter, setSelectedFilter] = useState("All");
const [selectedDay, setSelectedDay] = useState("All");
  const [cards, setCards] = useState();
const [token, setToken] = useState();
const [tokenExist, setTokenExist] = useState();
  const [events, SetEvents] = useState();
  const [isVerified, setIsverified]=useState(false)
  

 
 
  
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


  // function cardData() {
  //   const participations = JSON.parse(localStorage.getItem('participations'));
  //   // console.log(participations[0].event.event_code)
  //   setRegEvents(participations.map((ele) => ele.event.event_code)); // Extract event codes
  //   // console.log(eventCodes)
  // }

  useEffect(() => {
    const getEvents = async () => {
      const participations = JSON.parse(localStorage.getItem('participations'));
      // console.log(participations[0].event.event_code)
      const event_codes = (participations.map((ele) => ele.event.event_code));
      const part_codes = (participations.map((ele) => ele.part_id));
      setCards(part_codes);
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/e/');
        SetEvents( res.data.events.filter((event) =>
          event_codes.includes(event.event_code)
        ));

      } catch (error) {
        console.log(error);
      }
    }
    getEvents();
  }, []);
  
  
// const handleFilterChange = (event) => {
//   setSelectedFilter(event.target.value);
// };

// const handleDayChange = (event) => {
//   setSelectedDay(event.target.value);
// };

// const handleReset = () => {
//   setSelectedFilter("All");
//   setSelectedDay("All");
// };

const filteredCards = events?.filter((card) => {
  return (
    (selectedFilter === "All" || card.category == selectedFilter) &&
    (selectedDay === "All" || card.day == selectedDay)
  );
});

  const handleCheckOut = async () => {
    try {
      const headers = {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
      }
      console.log(cards)
      const response = await axios.post('http://127.0.0.1:8000/api/e/register/', { "participations": (JSON.stringify(cards)), "upi_transaction_id": "VADE0CB248932" }, {
        headers
      });
      alert(response);
      // Successful login logic (e.g., save token, redirect)

    } catch (error) {
      if (error.response) {
        console.log(error); // Show error message in alert
      } else {
        alert(error); // Fallback error message
      }
    }
    
}



    return (
        <div className='profileSection'>
            <Navbar />
            <div className="profileMenu">
                <ProfileInformation />
                <div className='myRegisteredEvents'>
                    <h1>Your Registrations</h1>
                    <div className="registeredEvents">
                         <div className="pp"> 
                    <Cards events={filteredCards} /></div>
                    </div>
                    <button className="ProfileSubmit" type='submit' onClick={handleCheckOut}>SUBMIT</button>
                </div>
            </div>
            <Sponsors />
            <Footer />
        </div>
    )
}

export default Profilepage
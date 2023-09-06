import React, { useState } from 'react'
import './Profilepage.css'
import Navbar from '../Navbar'
import Sponsors from '../Sponsors'
import Footer from '../Footer'
import ProfileInformation from './ProfileInformation'
import Cards from '../events/Cards.js'
import cardData from '../events/cardsData.json'

function Profilepage() {
const [selectedFilter, setSelectedFilter] = useState("All");
const [selectedDay, setSelectedDay] = useState("All");
const [cards, setCards] = useState(cardData);

const handleFilterChange = (event) => {
  setSelectedFilter(event.target.value);
};

const handleDayChange = (event) => {
  setSelectedDay(event.target.value);
};

const handleReset = () => {
  setSelectedFilter("All");
  setSelectedDay("All");
};

const filteredCards = cards.filter((card) => {
  return (
    (selectedFilter === "All" || card.category == selectedFilter) &&
    (selectedDay === "All" || card.day == selectedDay)
  );
});

    const [verified, setVerfied] = useState(false);
    //PENDING : SET VERIFICATION STATUS



    return (
        <div className='profileSection'>
            <Navbar />
            <div className="profileMenu">
                <ProfileInformation />
                <div className='myRegisteredEvents'>
                    <h1>Your Registrations</h1>
                    <div className="registeredEvents">
                        {/* {arr.map((event) => (
                            <div className='profileEvent' key={event.id}>
                                <div className="profileEventNameAndStatus">
                                    <p className='registerEventName'>{event.name}</p>
                                    {/* <p className='verificationStatus'>Verification status: {verified ? "verified" : "Not-verified"}</p> */}
                                    {/* {verified ? <img src={require("../../images/verified.png")} alt="name" className='eventVerification' onClick={showVerificationStatus}
                                    /> : <img src={require("../../images/unverified.png")} alt="name"
                                        className='eventVerification' onClick={showVerificationStatus}
                                    />}
                                </div>
                                <div className="profileEventDetails">
                                    <div className='EventDetails' style={{ backgroundColor: "#05D1FE" }}>{event.type}</div>
                                    <div className='EventDetails' style={{ backgroundColor: "#FEFEF7" }}>Day: {event.day}</div>
                                </div>
                            </div>
                        ))} */} 
                         <div className="pp"> 
                    <Cards filteredCards={filteredCards} isVerified={true} /></div>
                    </div>
                    <button className="ProfileSubmit" type='submit'>SUBMIT</button>
                </div>
            </div>
            <Sponsors />
            <Footer />
        </div>
    )
}

export default Profilepage
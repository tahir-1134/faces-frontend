import React, { useState } from 'react'
import './Profilepage.css'
import Navbar from '../Navbar'
import Sponsors from '../Sponsors'
import Footer from '../Footer'
import ProfileInformation from './ProfileInformation'

function Profilepage() {
    const arr = [{
        id: 1,
        day: 3,
        type: "Sport",
        name: "Badmintion (Singles)"
    }, {
        id: 2,
        day: 3,
        type: "Sport",
        name: "Badmintion (Singles)"
    }, {
        id: 3,
        day: 3,
        type: "Sport",
        name: "Badmintion (Singles)"
    }, {
        id: 4,
        day: 3,
        type: "Sport",
        name: "Badmintion (Singles)"
    }];

    const [verified, setVerfied] = useState(false);
    //PENDING : SET VERIFICATION STATUS

    const showVerificationStatus = () => {
        alert("Verification status: " + (verified ? "verified" : "not-verified"));
    }

    return (
        <div className='profileSection'>
            <Navbar />
            <div className="profileMenu">
                <ProfileInformation />
                <div className='myRegisteredEvents'>
                    <h1>Your Registrations</h1>
                    <div className="registeredEvents">
                        {arr.map((event) => (
                            <div className='profileEvent' key={event.id}>
                                <div className="profileEventNameAndStatus">
                                    <p className='registerEventName'>{event.name}</p>
                                    {/* <p className='verificationStatus'>Verification status: {verified ? "verified" : "Not-verified"}</p> */}
                                    {verified ? <img src={require("../../images/verified.png")} alt="name" className='eventVerification' onClick={showVerificationStatus}
                                    /> : <img src={require("../../images/unverified.png")} alt="name"
                                        className='eventVerification' onClick={showVerificationStatus}
                                    />}
                                </div>
                                <div className="profileEventDetails">
                                    <div className='EventDetails' style={{ backgroundColor: "#05D1FE" }}>{event.type}</div>
                                    <div className='EventDetails' style={{ backgroundColor: "#FEFEF7" }}>Day: {event.day}</div>
                                </div>
                            </div>
                        ))}
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
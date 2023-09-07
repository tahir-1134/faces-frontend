import React, { useState } from 'react'

function ProfileInformation() {



    const [details, setDetails] = useState(
        {
            "firstName": "",
            "lastName": "",
            "email": "",
            "phoneNo": "",
            "password": "",
            "confirmPassword": ""
        })

    const handlesetDetails = event => {
        const { name, value } = event.target;
        setDetails({ ...details, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(details)
        setDetails({
            "firstName": "",
            "lastName": "",
            "email": "",
            "phoneNo": "",
            "password": "",
            "confirmPassword": ""
        })
    }

    return (
        <form className='myProfile' onSubmit={handleSubmit}>
            <div className="profileIcon">
                <img src={require("../../images/myLogo.png")} alt="name"
                    className='myProfileLogo'
                />
            </div>
            <div className="profileInfo">
                <div className="profileName">
                    <img src={require("../../images/profileName.png")} alt="name"
                        className='profileLogos'
                    />
                    <input type="text" placeholder='First name' className='profileEnterName' onChange={handlesetDetails} value={details.firstName} name='firstName' />
                </div>
                <div className="profileName">
                    <img src={require("../../images/profileName.png")} alt="name"
                        className='profileLogos'
                    />
                    <input type="text" placeholder='Last name' className='profileEnterName'
                        onChange={handlesetDetails} value={details.lastName} name='lastName' />
                </div>
                <div className="profileEmail">
                    <img src={require("../../images/profileMail.png")} alt="mail"
                        className='profileLogos'
                    />
                    <input type="email" placeholder='Enter your email' className='profileEnterMail'
                        onChange={handlesetDetails} value={details.email} name='email' />
                </div>
                <div className="profileEmail">
                    <img src={require("../../images/profileNum.png")} alt="phone"
                        className='profileLogos'
                    />
                    <input type="text" placeholder='Enter your phone number' className='profileEnterMail' onChange={handlesetDetails} value={details.phoneNo} name='phoneNo'
                    />
                </div>
                <div className="profileName">
                    <img src={require("../../images/profilePass.png")} alt="name"
                        className='profileLogos'
                    />
                    <input type="password" placeholder='Password' className='profileEnterName' onChange={handlesetDetails} value={details.password} name='password'
                    />
                </div><div className="profileName">
                    <img src={require("../../images/profilePass.png")} alt="name"
                        className='profileLogos'
                    />
                    <input type="password" placeholder='confirm password' className='profileEnterName' onChange={handlesetDetails} value={details.confirmPassword} name='confirmPassword'
                    />
                </div>
                {/* <button className="ProfileSubmit" type='submit'>Submit</button> */}
            </div>
        </form>
    )
}

export default ProfileInformation
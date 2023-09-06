import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';

function Login() {
    const [login, setLogin] = useState(
        {
            "id": "",
            "password": ""
        })
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id,password)
        handleLogin();
        setId("");
        setPassword("");
    }


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/u/auth/login/', {"username":id,password });
            // Successful login logic (e.g., save token, redirect)
            const token = response.data.token;
            const success = response.success;
            localStorage.setItem('token', token);
            console.log(success);
            navigate('/home');
            window.location.reload();

            
            

        } catch (error) {
            if (error.response) {
                console.log(error.response); // Show error message in alert
            } else {
                alert('An error occurred'); // Fallback error message
            }
        }
    };


    return (
        <div className='LoginPage'>
            <form className='LoginForm' onSubmit={handleSubmit}>
                <div className="LoginprofileIcon">
                    <img src={require("../images/myLogo.png")} alt="name"
                        className='myProfileLogo'
                    />
                </div>
                <div className="profileInfo">
                    <div className="profileName">
                        <img src={require("../images/profileName.png")} alt="name"
                            className='profileLogos'
                        />
                        <input type="text" placeholder='Enter ID' className='profileEnterName'  onChange={(e) => setId(e.target.value)} value={id} name='id' />
                    </div>
                    <div className="profileName">
                        <img src={require("../images/profilePass.png")} alt="name"
                            className='profileLogos'
                        />
                        <input type="text" placeholder='Password' className='profileEnterName' onChange={(e) => setPassword(e.target.value)} value={password} name='password' />
                    </div>
                    <button className="ProfileSubmit" type='submit'>Login</button>
                </div>
            </form>
        </div>

    )
}

export default Login
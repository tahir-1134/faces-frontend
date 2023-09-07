import React, { useState, useEffect } from 'react'
import { useAsyncError, useNavigate } from 'react-router-dom';
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
    const [tokenExist, setTokenExist] = useState();


    

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
            const roll_no = response.data.user.roll_no;
            const name = response.data.user.name;
            const parts = response.data.user.participations;
            const email = response.data.user.email;
            const userpassword=response.data.user.userpassword
            // console.log(parts);
            const participations=JSON.stringify(parts)
            console.log(participations);
            localStorage.setItem('token', token);
            localStorage.setItem('roll_no', roll_no);
            localStorage.setItem('name', name);
            localStorage.setItem('participations', participations);
            localStorage.setItem('email', email);
            localStorage.setItem('userpassword', userpassword);

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

    function checkToken() {
        if (localStorage.getItem('token')) {
            // Token exists, do something with it
            setTokenExist(true);
            const token = localStorage.getItem('token');
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

export default Login;

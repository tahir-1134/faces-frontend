import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  const handleLoginDetails = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    login({
      id: "",
      password: "",
    });
  };

  return (
    <>
      <div className="LoginPage">
        <form className="LoginForm" onSubmit={handleSubmit}>
          <div className="LoginprofileIcon">
            <img
              src={require("../images/myLogo.png")}
              alt="name"
              className="myProfileLogo"
            />
          </div>
          <div className="profileInfo">
            <div className="profileName">
              <img
                src={require("../images/profileName.png")}
                alt="name"
                className="profileLogos"
              />
              <input
                type="text"
                placeholder="Enter ID"
                className="profileEnterName"
                onChange={handleLoginDetails}
                value={login.id}
                name="id"
              />
            </div>
            <div className="profileName">
              <img
                src={require("../images/profilePass.png")}
                alt="name"
                className="profileLogos"
              />
              <input
                type="text"
                placeholder="Password"
                className="profileEnterName"
                onChange={handleLoginDetails}
                value={login.password}
                name="password"
              />
            </div>
            <button className="ProfileSubmit" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

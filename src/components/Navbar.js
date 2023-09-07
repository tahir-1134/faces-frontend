import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, history } from "react-router-dom";
function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const [tokenExist, setTokenExist] = useState();
  const navigate = useNavigate();
  //roll_no
  const rollno = localStorage.getItem('roll_no');
  const username = rollno ? rollno : "User";
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
      navigate('/Home');
    }

  }
  useEffect(() => {
    checkToken();
  })

  const handleCheckoutClick = () => {
    // setTimeout(() => {
    //   window.location.reload();
    // }, 100); 
  };
  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 650 ? true : false);
  }
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 750 ? true : false
  );
  window.onresize = checkWindowSize;
  function handleClick() {
    setMobileNav(!mobileNav);
  }


  function handleLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('name')
    localStorage.removeItem('roll_no')
    localStorage.removeItem('layer')
    localStorage.removeItem('userpassword')
    localStorage.removeItem('participations');

    navigate('/');
    window.history.pushState({}, document.title, '/');

  }

  return (
    <>
      {windowStatus ? (
        <div className="navbar">
          <div className="navbarLogo">Faces 2023</div>
          <div className="navbarLinks">
            <Link to="/home">
              <p className="navbarLinks_link">Home</p>
            </Link>
            <Link to="/events">
              <p className="navbarLinks_link">Events</p>
            </Link>
            <Link to="/checkout" onClick={handleCheckoutClick}>
              <p className="navbarLinks_link">Checkout</p>
            </Link>

            {
              tokenExist ?
                <p className="navbarLinks_link" onClick={handleLogOut}>Logout</p>
                : <Link to="/">
                  <p className="navbarLinks_link">Login</p>
                </Link>
            }
          </div>
        </div>
      ) : (
        <div className="mobileNavbar">
          <span>
            <FontAwesomeIcon
              className="mobileNavbarIcon"
              onClick={handleClick}
              icon={faBars}
            />
          </span>

          <span>
            <p className="mobileNavbarLogo">Faces 2023</p>
          </span>
        </div>
      )}
      {mobileNav && (
        <div className="mobileNavbarOpen">
          <FontAwesomeIcon
            className="mobileNavbarIcon"
            onClick={handleClick}
            icon={faClose}
          />
          <ul type="none" className="mobileNavbarOpenLinks">
            <li className="mobileNavbarOpenLink usernameNameDisplay">{username}</li>
            <Link to="/home">
              <li className="mobileNavbarOpenLink">Home</li>
            </Link>
            <Link to="/events">
              <li className="mobileNavbarOpenLink">Events</li>
            </Link>
            <Link to="/checkout" onClick={handleCheckoutClick}>
              <li className="mobileNavbarOpenLink">Checkout</li>
            </Link>

            {
              checkToken ?
                <li className="mobileNavbarOpenLink" onClick={handleLogOut}>Logout</li>
                : <Link to="/">
                  <li className="mobileNavbarOpenLink">Login</li>
                </Link>
            }

          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

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
  console.log(windowStatus);
  return (
    <>
      {windowStatus ? (
        <div className="navbar">
          <div className="navbarLogo">Faces 2023</div>
          <div className="navbarLinks">
            <Link to="/">
              <p className="navbarLinks_link">Home</p>
            </Link>
            <Link to="/events">
              <p className="navbarLinks_link">Events</p>
            </Link>
            <Link to="/profile">
              <p className="navbarLinks_link">Profile</p>
            </Link>
            <Link to="/checkout">
              <p className="navbarLinks_link">Checkout</p>
            </Link>
            <Link to="/login">
              <p className="navbarLinks_link">Logout</p>
            </Link>
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
            <Link to="/">
              <li className="mobileNavbarOpenLink">Home</li>
            </Link>
            <Link to="/events">
              <li className="mobileNavbarOpenLink">Events</li>
            </Link>
            <Link to="/profile">
              <li className="mobileNavbarOpenLink">Profile</li>
            </Link>
            <Link to="/checkout">
              <li className="mobileNavbarOpenLink">Checkout</li>
            </Link>
            <Link to="/login">
              <li className="mobileNavbarOpenLink">Logout</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

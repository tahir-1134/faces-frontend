import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
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
            <p className="navbarLinks_link">Home</p>
            <p className="navbarLinks_link">Event</p>
            <p className="navbarLinks_link">Profile</p>
            <p className="navbarLinks_link">Checkout</p>
            <p className="navbarLinks_link">Logout</p>
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
            <li className="mobileNavbarOpenLink">Home</li>
            <li className="mobileNavbarOpenLink">Events</li>
            <li className="mobileNavbarOpenLink">Profile</li>
            <li className="mobileNavbarOpenLink">Checkout</li>
            <li className="mobileNavbarOpenLink">Logout</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;

import React from "react";
import "./Disclaimer.css";

function Disclaimer() {
  return (
    <div className="herosection">
      <div className="herosection-container">
        <div className="image-div">
          <div class="square-wrapper">
            <div class="square">
              {/* <div className="square1"></div>
              <div className="square"> */}
              <div className="disclaimer-text">
                <h1>Disclaimer</h1>
                <p>
                  In case of any discrepancies, the council’s decision will be final.
                </p>
                <p>
                  <strong>Steps to register:</strong>
                </p>
                <ul>
                  <li>All students will receive your credentials via mail directly.</li>
                  <li>
                    Once you have chosen your event and registered for the events, you
                    can see the registered events on the profile page and you can
                    remove them if you want.
                  </li>
                  <li>
                    For <strong>confirming</strong> your slot in the event, you need to go to the Council's desk, <strong>check out from the checkout page, and complete the Cash payment</strong> to get the receipt. Until then, your slot is unconfirmed
                    and some other participant can take it. Slots will be confirmed on &nbsp;
                    <strong>FIRST COME FIRST SERVE basis.</strong>
                  </li>
                  <li>
                    After <strong>confirmation</strong>, you'll get a <strong>WhatsApp icon</strong> for your respective
                    events on the profile page. Join those WhatsApp groups.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img
            className="disclaimer-group"
            src={require("../../images/disclaimer-group.png")}
            alt="disclaimer-group"
          />
        </div>
      </div>
    </div>
    // <div className="image-container">
    //   <img src={require("../../images/disclaimer.png")} alt="Image 1" className="image left-image" />
    //   <img src={require("../../images/disclaimer-group.png")} alt="Image 2" className="image right-image" />
    // </div>
  );
}

export default Disclaimer;

import React, { useState } from "react";
import "./FeaturedEvents.css";
import FeaturedEventsCard from "./FeaturedEventsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function FeaturedEvents() {
  // #0 --> Cultural  #1 --> Sports #2 --> Seminar
  const [active, setActive] = useState(0);

  return (
    <div className="featuredEvents">
      <h3>Featured Events</h3>
      <section className="featuredEvents__nav">
        <span className="featuredEvents__navLinks">
          <span className="featuredEvents__navLinkContainer">
            <span
              className={
                active === 0
                  ? "featuredEvents__navLink featuredEvents__navLinkActive"
                  : "featuredEvents__navLink"
              }
              onClick={() => {
                setActive(0);
              }}
            >
              <p>Cultural</p>
            </span>
          </span>
          <span className="featuredEvents__navLinkContainer">
            <span
              className={
                active === 1
                  ? "featuredEvents__navLink featuredEvents__navLinkActive"
                  : "featuredEvents__navLink"
              }
              onClick={() => {
                setActive(1);
              }}
            >
              <p>Sports</p>
            </span>
          </span>
          <span
            className="featuredEvents__navLinkContainer"
            style={{ "border-right": "none" }}
          >
            <span
              className={
                active === 2
                  ? "featuredEvents__navLink featuredEvents__navLinkActive"
                  : "featuredEvents__navLink"
              }
              onClick={() => {
                setActive(2);
              }}
            >
              <p>Seminar</p>
            </span>
          </span>
        </span>
        <span className="featuredEvents__seeAll">
          See All &nbsp; <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </section>
      <section className="featuredEventsCards">
        <FeaturedEventsCard />
        <FeaturedEventsCard />
        <FeaturedEventsCard />
        <FeaturedEventsCard />
      </section>
    </div>
  );
}

export default FeaturedEvents;

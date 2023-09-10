import React, { useState, useEffect } from "react";
import "../events/EventsFilter.css";
import cardData from "../events/cardsData.json";
import Cards from "../events/Cards";
import axios from "axios";

function EventCards() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedDay, setSelectedDay] = useState("All");
  const [cards, setCards] = useState(cardData);
  const [events, SetEvents] = useState();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get(`http://35.207.211.236/api/e/`);
        SetEvents(res.data.events);
        // console.log(res.data.events);
      } catch (error) {
        console.log(error);
      }
    }

    getEvents();
  }, []);


  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleReset = () => {
    setSelectedFilter("All");
    setSelectedDay("All");
  };

  const filteredEvents = events?.filter((card) => {
    return (
      card.is_featured &&
      (selectedFilter === "All" || card.category == selectedFilter) &&
      (selectedDay === "All" || card.day == selectedDay)
    );
  });

  return (
    <div className="card-division" style={{ marginBottom: '4vw' }}>
      <div className="filters">
        <label>
          <select
            value={selectedDay}
            onChange={handleDayChange}
            className="custom-select"
          >
            <option value="All">Day</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
          </select>
        </label>
        <label>
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="custom-select"
          >
            <option value="All">Category</option>
            <option value="C">Cultural</option>
            <option value="S">Sports</option>
            <option value="T">Seminar</option>
          </select>
        </label>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>


      <Cards events={filteredEvents} isVerified={null} />
    </div>
  );
}

export default EventCards;

import React, { useState } from "react";
import "./EventsFilter.css";
import cardData from "./cardsData.json";
import Cards from "./Cards"; // Import the Cards component

function EventCards() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedDay, setSelectedDay] = useState("All");
  const [cards, setCards] = useState(cardData);

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

  const filteredCards = cards.filter((card) => {
    return (
      (selectedFilter === "All" || card.category === selectedFilter) &&
      (selectedDay === "All" || card.day === selectedDay)
    );
  });

  return (
    <div className="card-division">
      <div className="filters">
        <label>
          <select
            value={selectedDay}
            onChange={handleDayChange}
            className="custom-select"
          >
            <option value="All">Day</option>
            <option value="day1">Day 1</option>
            <option value="day2">Day 2</option>
            <option value="day3">Day 3</option>
          </select>
        </label>
        <label>
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="custom-select"
          >
            <option value="All">Category</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
            <option value="Seminar">Seminar</option>
          </select>
        </label>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>

    
      <Cards filteredCards={filteredCards} />
    </div>
  );
}

export default EventCards;

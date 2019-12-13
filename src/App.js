import React, { useState } from "react";
// Import Components
import Welcome from "./components/welcome/welcome.component";
import BigCalendarContainer from "./components/big-calendar/big.calendar.container";
// Import data
import plants from "./data/data.json";
// import helpers
import { sortPlantsByWateringDate } from "./helpers/plant-helper";
// Import styles
import "./App.css";

// Adding addDays function to Date prototype
Date.prototype.addDays = function(days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

// Adding subtractDays function to Date prototype
Date.prototype.subtractDays = function(days) {
  this.setDate(this.getDate() - parseInt(days));
  return this;
};

function App() {
  const [sortedPlants] = useState(sortPlantsByWateringDate(plants));
  return (
    <div className="App">
      <Welcome />
      <BigCalendarContainer sortedPlants={sortedPlants} />
    </div>
  );
}

export default App;

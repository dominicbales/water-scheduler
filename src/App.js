import React, { useState } from "react";
// Import Components
import Welcome from "./components/welcome/welcome.component";
import BigCalendarContainer from "./components/big-calendar/big.calendar.container";
import ListContainer from "./components/list/list.container";
// Import data
import plants from "./data/data.json";
// Import styles
import "./App.css";

function App() {
  const [openCalendar, setOpenCalendar] = useState(true);

  const handleListButton = () => {
    if (openCalendar) {
      setOpenCalendar(false);
    }
  };

  const handleCalendarButton = () => {
    if (!openCalendar) {
      setOpenCalendar(true);
    }
  };

  return (
    <div className="App">
      <Welcome />
      <div className="app-selection-container">
        <h4>Select which VIEW you would like to use</h4>
        <div className="app-button-container">
          <button
            className={
              "app-button-styles " + (openCalendar === false ? "active" : null)
            }
            onClick={handleListButton}
          >
            List
          </button>
          <button
            className={
              "app-button-styles " + (openCalendar === true ? "active" : null)
            }
            onClick={handleCalendarButton}
          >
            Calendar
          </button>
        </div>
      </div>
      {openCalendar ? (
        <BigCalendarContainer plants={plants} />
      ) : (
        <ListContainer plants={plants} />
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
// Import Component
import BigCalendar from "./big.calendar.component";
// import helpers
import {
  createCalendarDateObject,
  createCalendarEventArray
} from "../../helpers/big-calendar-helper";

const BigCalendarContainer = ({ sortedPlants }) => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        // construct big-calendar events data structure
        const dates = await createCalendarDateObject(sortedPlants);
        setEvents(await createCalendarEventArray(sortedPlants, dates));
      } catch (error) {
        console.log("couldnt create calendar event structure:", error);
      }
    })();
  }, [sortedPlants]);
  return (
    <div>
      {events ? (
        <BigCalendar events={events} />
      ) : (
        <div>Calendar component couldn't be render</div>
      )}
    </div>
  );
};

export default BigCalendarContainer;

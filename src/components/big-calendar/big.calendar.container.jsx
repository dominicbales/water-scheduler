import React, { useEffect, useState } from "react";
// Import Component
import BigCalendar from "./big.calendar.component";
// import helpers
import { createCalendarEventArray } from "../../helpers/big-calendar-helper";
import { createDaysArray, createDateObject } from "../../helpers/date-helpers";

const BigCalendarContainer = ({ plants, sortedPlants }) => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        // 1) create an array of all the dates watering after days ['14 days', '7 days', '4 days']
        const daysArray = createDaysArray(plants);

        // 2) create a date object where the water_after is the key
        //    and and array of dates are the values
        const dates = createDateObject(daysArray);
        // 3) create an array with all the watering events, using the sortedPlants
        //    and date object
        setEvents(createCalendarEventArray(sortedPlants, dates));
      } catch (error) {
        console.log("couldnt create calendar event structure:", error);
      }
    })();
  }, [plants, sortedPlants]);
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

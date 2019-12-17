import React, { useEffect, useState } from "react";
// Import Component
import BigCalendar from "./big.calendar.component";
// import helpers
import { createCalendarEventArray } from "../../helpers/big-calendar-helper";
import { createDateArray, createDateObject } from "../../helpers/date-helpers";

const BigCalendarContainer = ({ plants, sortedPlants }) => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        // 1) create an array of all the dates
        const dateArray = await createDateArray(plants);

        // 2) create a date object where the water_after is the key
        //    and and array of dates are the values
        const dates = await createDateObject(dateArray);
        // 3) create an array with all the watering events, using the sortedPlants
        //    and date object
        setEvents(await createCalendarEventArray(sortedPlants, dates));
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

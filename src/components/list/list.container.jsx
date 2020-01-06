import React, { useEffect, useState } from "react";
// Import components
import List from "./list.component";
// Import helpers
import { mapDatesToPlants } from "../../helpers/list-helpers";
import { createDaysArray, createDateObject } from "../../helpers/date-helpers";

const ListContainer = ({ plants }) => {
  const [list, setList] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        // 1) create an array of all the watering after days ['14 days', '7 days', '4 days']
        const daysArray = createDaysArray(plants);

        // 2) create a date object where the water_after is the key
        //    and and array of dates are the values
        const dateObject = createDateObject(daysArray);

        // 3) loop through the plants data and perform a lookup on the dateObject,
        //    if it finds the plant water_after in the dateObject
        //    then push the dates and plant onto a new array
        setList(mapDatesToPlants(dateObject, plants));
      } catch (err) {
        console.log("found error when creating list:", err);
      }
    })();
  }, [plants]);
  return (
    <div>
      {list ? (
        <List list={list} />
      ) : (
        <div>List couldn't be displayed, please check for errors</div>
      )}
    </div>
  );
};

export default ListContainer;

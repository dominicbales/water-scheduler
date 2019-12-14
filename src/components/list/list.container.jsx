import React, { useEffect, useState } from "react";
// Import components
import List from "./list.component";
// Import helpers
import {
  createDateArray,
  createDateObject,
  mapDatesToPlants
} from "../../helpers/list-helpers";

const ListContainer = ({ plants }) => {
  const [list, setList] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const dateArray = await createDateArray(plants);
        const dateObject = await createDateObject(dateArray);
        setList(await mapDatesToPlants(dateObject, plants));
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

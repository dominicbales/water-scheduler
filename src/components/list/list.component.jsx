import React from "react";
import uuidv4 from "uuid/v4";

import "./list.styles.css";

const List = ({ list }) => {
  let displayList = list.map(plant => {
    return (
      <div key={plant.name}>
        <h3 className="list-plant-title">{plant.name}</h3>
        <h5 className="list-plant-dates">Every {plant.water_after}</h5>
        <ul>
          {plant.dates.map((val, idx) => {
            let newDate = new Date(val.year, val.month, val.day);
            return <li key={uuidv4()}>{newDate.toDateString()}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div className="list-section">
      <h1 className="list-component-title">List Component</h1>
      <div className="list-ui-container">{displayList}</div>
    </div>
  );
};

export default List;

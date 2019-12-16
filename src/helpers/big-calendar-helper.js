import uuidv4 from "uuid/v4";

/**
 * @param {object} - object where water_after is the key and plants info is the value
 * @param {object} - object where water_after is the key and dates are the value
 * @return {array}- returns an flatten array of objects, holding the connected data between dates and plants
 */
export const createCalendarEventArray = (plants, dates) => {
  // 1) init empty array
  const events = [];
  // 2) pull out all the dates and plants into array variables
  const day7Plants = plants["7 days"];
  const day7Dates = dates["7 days"];
  const day2Plants = plants["2 days"];
  const day2Dates = dates["2 days"];
  const day3Dates = dates["3 days"];
  const day3Plants = plants["3 days"];
  const day14Dates = dates["14 days"];
  const day14Plants = plants["14 days"];

  // 3) connect the dates and plants together and push the return array
  //    into the event array
  events.push(combineDatesAndPlants(day7Dates, day7Plants));
  events.push(combineDatesAndPlants(day2Dates, day2Plants));
  events.push(combineDatesAndPlants(day3Dates, day3Plants));
  events.push(combineDatesAndPlants(day14Dates, day14Plants));

  // 3) flatten the event array
  return flatten(events);
};

/**
 * @param {array} - array of objects holding date values
 * @param {array} - array of objects holding plant values
 * @return {array}- returns an array holding the connected data of dates and plants
 */
const combineDatesAndPlants = (dates, plants) => {
  // 1) init an array to hold our objects
  const arrayHolder = [];
  // 2) create a temporary object to structure our water event,
  const tempObj = {
    id: null,
    title: null,
    start: null,
    end: null
  };
  // 3) loop through all the dates for water_after days,
  //    So for example loop through all the dates for '14 days'
  for (let i = 0; i < dates.length; i++) {
    // 4) loop through all the plants that is connected to the water_after days,
    //    So for example loop through all the plants where the water_after is '14 days'
    for (let k = 0; k < plants.length; k++) {
      // 5) fill in the temporary object and then push it to our arrayHolder
      tempObj.id = uuidv4();
      tempObj.title = plants[k].name;
      tempObj.start = new Date(dates[i].year, dates[i].month, dates[i].day);
      tempObj.end = new Date(dates[i].year, dates[i].month, dates[i].day);
      arrayHolder.push({ ...tempObj });
    }
  }
  // 6) return the arrayHolder
  return arrayHolder;
};

/**
 * @param {array} - takes in an array that has nested arrays in it
 * @return {array}- returns a flat array
 */
export const flatten = arr => {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

import uuidv4 from "uuid/v4";
// Import helpers
import { extractNumberFromString } from "./plant-helper";
import { addDays, subtractDays } from "./date-helpers";

export const createCalendarDateObject = sortedPlants => {
  const datesObj = {};
  let dayNum = 0;
  let tempDate = null;
  const endDate = new Date("03/09/2020");

  for (var val in sortedPlants) {
    dayNum = extractNumberFromString(val);
    tempDate = new Date("12/16/2019");

    // 12/16/2016 will be day 1 so we start i at 1
    for (let i = 1; i <= 85; i += dayNum) {
      if (i === 1) {
        // sets up the date object on the first day
        // it should only run 1 time
        if (!datesObj[val]) {
          let dateObjStructure = {
            month: tempDate.getMonth(),
            day: tempDate.getDate(),
            year: tempDate.getFullYear()
          };
          datesObj[val] = [dateObjStructure];
        }
      } else {
        if (datesObj[val]) {
          tempDate = addDays(tempDate, dayNum);

          // makes sure we dont go past the endDate
          if (tempDate > endDate) {
            break;
          }

          // check if the day is either Saturday or Sunday
          // subtract a day if its Saturday
          // add a day if its Sunday
          if (tempDate.getDay() === 6) {
            tempDate = subtractDays(tempDate, 1);
          } else if (tempDate.getDay() === 0) {
            tempDate = addDays(tempDate, 1);
          }

          let dateObjStructure = {
            month: tempDate.getMonth(),
            day: tempDate.getDate(),
            year: tempDate.getFullYear()
          };

          datesObj[val].push(dateObjStructure);
        }
      }
    }
  }
  return datesObj;
};

export const createCalendarEventArray = (plants, dates) => {
  const events = [];
  const day7Plants = plants["7 days"];
  const day7Dates = dates["7 days"];
  const day2Plants = plants["2 days"];
  const day2Dates = dates["2 days"];
  const day3Dates = dates["3 days"];
  const day3Plants = plants["3 days"];
  const day14Dates = dates["14 days"];
  const day14Plants = plants["14 days"];

  events.push(combineDatesAndPlants(day7Dates, day7Plants));
  events.push(combineDatesAndPlants(day2Dates, day2Plants));
  events.push(combineDatesAndPlants(day3Dates, day3Plants));
  events.push(combineDatesAndPlants(day14Dates, day14Plants));

  return flatten(events);
};

const combineDatesAndPlants = (dates, plants) => {
  const arrayHolder = [];
  const tempObj = {
    id: null,
    title: null,
    start: null,
    end: null
  };
  for (let i = 0; i < dates.length; i++) {
    for (let k = 0; k < plants.length; k++) {
      tempObj.id = uuidv4();
      tempObj.title = plants[k].name;
      tempObj.start = new Date(dates[i].year, dates[i].month, dates[i].day);
      tempObj.end = new Date(dates[i].year, dates[i].month, dates[i].day);
      arrayHolder.push({ ...tempObj });
    }
  }
  return arrayHolder;
};

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

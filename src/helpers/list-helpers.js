import { extractNumberFromString } from "../helpers/plant-helper";
import { addDays, subtractDays } from "./date-helpers";

export const createDateArray = data => {
  let dataArray = [];
  for (var date of data) {
    if (!dataArray.includes(date["water_after"])) {
      dataArray.push(date["water_after"]);
    }
  }
  return dataArray;
};

export const createDateObject = date => {
  const datesObj = {};
  let dayNum = 0;
  let tempDate = null;
  const endDate = new Date("03/09/2020");

  for (var val of date) {
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

export const mapDatesToPlants = (dates, plants) => {
  const listArray = [];
  for (var plant of plants) {
    if (dates[plant["water_after"]]) {
      listArray.push({ ...plant, dates: dates[plant["water_after"]] });
    }
  }
  return listArray;
};

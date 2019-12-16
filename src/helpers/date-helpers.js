import { extractNumberFromString } from "../helpers/plant-helper";

/**
 * @param {object} - date object you want to add from
 * @param {number} - number of days you want to add
 * @return {object}- returns an new date object with number of days added to it
 */
export const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * @param {object} - date object you want to subtract from
 * @param {number} - number of days you want to subtract
 * @return {object}- returns an new date object with number of days subtracted from it
 */
export const subtractDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

/**
 * @param {array} - an array of strings hoding the water_after values
 * @return {object}- returns an object holding all the dates,
 */
export const createDateObject = date => {
  // This function is a modify version of createCalendarDateObject function located in
  // the big-calendar-helper file
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

/**
 * @param {array} - an array of objects that is containing plants data
 * @return {array}- returns an array of strings hold the number of days to water after,
 *                  For example, ['14 days', '3 days', '2 days']
 */
export const createDateArray = data => {
  let dataArray = [];
  for (var date of data) {
    if (!dataArray.includes(date["water_after"])) {
      dataArray.push(date["water_after"]);
    }
  }
  return dataArray;
};

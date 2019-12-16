/**
 * @param {object} - an object containing dates
 * @param {array} - an array of objects that is containing plants data
 * @return {array}- returns an array of objects containing all the plants with their dates added onto them
 */
export const mapDatesToPlants = (dates, plants) => {
  const listArray = [];
  for (var plant of plants) {
    if (dates[plant["water_after"]]) {
      listArray.push({ ...plant, dates: dates[plant["water_after"]] });
    }
  }
  return listArray;
};

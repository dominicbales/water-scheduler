/**
 * @param {array} - an array of objects that is containing plants data
 * @return {array}- returns an array of strings hold the number of days to water after,
 *                  For example, ['14 days', '3 days', '2 days']
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

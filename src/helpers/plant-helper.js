/**
 * @param {array} - array of objects holding plant values
 * @return {object}- returns an object of sorted plants
 *                   by watering date
 */
export const sortPlantsByWateringDate = plants => {
  const sortedObj = {};
  for (let i = 0; i < plants.length; i++) {
    let plant = plants[i];
    if (sortedObj[plant.water_after]) {
      sortedObj[plant.water_after].push(plant);
    } else {
      sortedObj[plant.water_after] = [plant];
    }
  }
  return sortedObj;
};

export const extractNumberFromString = str => parseInt(str.replace(/\D/g, ""));

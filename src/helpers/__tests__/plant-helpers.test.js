// Import functions
import {
  sortPlantsByWateringDate,
  extractNumberFromString
} from "../plant-helper";
// Import mocks
import { mockPlants } from "../../__mocks__/mocks";

describe("testing plant-helper functions", () => {
  it("runs sortPlantsByWateringDate function correctly", () => {
    const result = sortPlantsByWateringDate(mockPlants);
    expect(result).toHaveProperty("7 days");
    expect(result).toHaveProperty("14 days");
    expect(result).toHaveProperty("3 days");
    expect(result).toHaveProperty("2 days");
  });

  it("runs extractNumberFromString function correctly", () => {
    const result = extractNumberFromString("7 days");
    expect(result).toStrictEqual(7);
  });
});

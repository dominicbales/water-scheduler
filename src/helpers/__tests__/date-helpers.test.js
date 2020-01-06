// Import functions
import {
  addDays,
  subtractDays,
  createDaysArray,
  createDateObject
} from "../date-helpers";

// Import mocks
import {
  mockSortedPlants,
  mockDatesObject,
  mockPlants
} from "../../__mocks__/mocks";

describe("testing date-helper functions", () => {
  it("runs addDays function correctly", () => {
    let date = new Date("12/16/2019");
    const result = addDays(date, 1);
    expect(result).toStrictEqual(new Date("12-17-2019"));
  });

  it("runs subtrackDays function correctly", () => {
    let date = new Date("12/16/2019");
    const result = subtractDays(date, 1);
    expect(result).toStrictEqual(new Date("12-15-2019"));
  });

  it("runs createDaysArray function correctly", () => {
    const result = createDaysArray(mockPlants);

    expect(result).toStrictEqual(["7 days", "14 days", "3 days", "2 days"]);
  });

  it("runs createDateObject function correctly", () => {
    const date = ["7 days", "14 days", "3 days", "2 days"];
    const result = createDateObject(date);

    expect(result).toHaveProperty("7 days");
    expect(result).toHaveProperty("14 days");
    expect(result).toHaveProperty("3 days");
    expect(result).toHaveProperty("2 days");
  });
});

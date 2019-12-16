// Import functions
import {
  createCalendarEventArray,
  combineDatesAndPlants,
  flatten
} from "./big-calendar-helper";

// Import mocks
import { mockSortedPlants, mockDatesObject } from "../__mocks__/mocks";

describe("testing big-calendar-helper functions", () => {
  it("runs createCalendarEventArray function correctly", () => {
    const result = createCalendarEventArray(mockSortedPlants, mockDatesObject);
    expect(result).toHaveLength(4);
  });

  it("runs combineDatesAndPlants function correctly", () => {
    let date = mockDatesObject["7 days"];
    let plant = mockSortedPlants["7 days"];
    const result = combineDatesAndPlants(date, plant);

    expect(result).toHaveLength(1);
  });

  it("runs flatten function correctly", () => {
    let arr = [1, [2], [3]];
    const result = flatten(arr);

    expect(result).toStrictEqual([1, 2, 3]);
  });
});

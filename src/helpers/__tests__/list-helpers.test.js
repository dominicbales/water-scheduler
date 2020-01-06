// Import functions
import { mapDatesToPlants } from "../list-helpers";

// Import mocks
import { mockDatesObject, mockPlants } from "../../__mocks__/mocks";

describe("testing list-helpers functions", () => {
  it("runs mapDatesToPlants function correctly", () => {
    const result = mapDatesToPlants(mockDatesObject, mockPlants);
    expect(result).toHaveLength(11);
  });
});

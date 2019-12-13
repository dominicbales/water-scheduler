import React from "react";
import { shallow } from "enzyme";
// Import mocks
import {
  mockEmptyEvents,
  mockEvents,
  mockSortedPlants
} from "../../__mocks__/mocks";
// Import components
import BigCalendarContainer from "./big.calendar.container";
import BigCalendar from "./big.calendar.component";

describe("App component", () => {
  let wrapper;
  let bigCalendarCrash;

  beforeEach(() => {
    bigCalendarCrash = <BigCalendar events={mockEmptyEvents} />;
    wrapper = shallow(<BigCalendarContainer sortedPlants={mockSortedPlants} />);
  });

  // Makes sure BigCalendarContainer component is render and BigCalendar component crashes
  it("renders BigCalendarContainer component but big calendar component crashes", () => {
    expect(wrapper.contains(bigCalendarCrash)).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  // Makes sure BigCalendarContainer component is render
  it("renders BigCalendarContainer component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
// Import mocks
import { mockSortedPlants, mockEmptyPlants } from "./__mocks__/mocks";
// Import components
import App from "./App";
import Welcome from "./components/welcome/welcome.component";
import BigCalendarContainer from "./components/big-calendar/big.calendar.container";

describe("App component", () => {
  let wrapper;
  let welcome;
  let bigCalendar;
  let bigCalendarCrash;

  beforeEach(() => {
    welcome = <Welcome />;
    bigCalendar = <BigCalendarContainer sortedPlants={mockSortedPlants} />;
    bigCalendarCrash = <BigCalendarContainer sortedPlants={mockEmptyPlants} />;

    wrapper = shallow(<App />);
  });
  // Makes sure App component is render but Big Calendar component crashes
  it("renders App component but big calendar component crashes", () => {
    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper.contains(bigCalendarCrash)).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });
  // Makes sure App component is render
  it("renders App component without crashing", () => {
    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper.contains(bigCalendar)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});

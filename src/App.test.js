import React from "react";
import { shallow } from "enzyme";
// Import components
import App from "./App";
import Welcome from "./components/welcome/welcome.component";

describe("App component", () => {
  let wrapper;
  let welcome;

  beforeEach(() => {
    welcome = <Welcome />;

    wrapper = shallow(<App />);
  });
  // Makes sure App component is render but Big Calendar component crashes
  it("renders App component but big calendar component crashes", () => {
    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
  // Makes sure App component is render
  it("renders App component without crashing", () => {
    expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});

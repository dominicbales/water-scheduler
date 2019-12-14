import React from "react";
import { shallow } from "enzyme";
// Import components
import ListContainer from "./list.container";

describe("List container", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ListContainer />);
  });
  // Makes sure ListContainer component is rendered
  it("renders ListContainer without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

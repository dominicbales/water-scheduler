import React from "react";
import { shallow } from "enzyme";
// Import mocks
import { mockLists } from "../../__mocks__/mocks";
// Import components
import ListContainer from "./list.container";
import List from "./list.component";

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

describe("List component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List list={mockLists} />);
  });
  // Makes sure List component is rendered
  it("renders List component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

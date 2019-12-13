import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
// Import components
import Welcome from "./welcome.component";

describe("Welcome component", () => {
  // Makes sure the Header section in Welcome component is render
  test("renders Welcome header", () => {
    const { getByText } = render(<Welcome />);
    expect(
      getByText("Welcome to Tandem Watering Scheduler")
    ).toBeInTheDocument();
  });
  // Makes sure the Paragraph section in Welcome component is render
  test("renders Welcome paragraph", () => {
    const { getByText } = render(<Welcome />);
    expect(
      getByText(
        "Tandem Watering Scheduler is an application that helps you keep track of when your plants need watering"
      )
    ).toBeInTheDocument();
  });
  // Makes sure Welcome component is render
  it("renders App component without crashing", () => {
    expect(shallow(<Welcome />)).toMatchSnapshot();
  });
});

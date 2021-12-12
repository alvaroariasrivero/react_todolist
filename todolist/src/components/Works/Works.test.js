import React from "react";
import { shallow } from "enzyme";
import Works from "./Works";

describe("Works", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Works />);
    expect(wrapper).toMatchSnapshot();
  });
});

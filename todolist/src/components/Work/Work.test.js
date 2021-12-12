import React from "react";
import { shallow } from "enzyme";
import Work from "./Work";

describe("Work", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Work />);
    expect(wrapper).toMatchSnapshot();
  });
});

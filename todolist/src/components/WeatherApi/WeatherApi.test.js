import React from "react";
import { shallow } from "enzyme";
import WeatherApi from "./WeatherApi";

describe("WeatherApi", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherApi />);
    expect(wrapper).toMatchSnapshot();
  });
});

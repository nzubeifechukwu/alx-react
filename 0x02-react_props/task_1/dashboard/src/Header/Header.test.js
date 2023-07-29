import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {
  const wrapper = shallow(<Header />);

  it("render without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("render img and h1", () => {
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.exists("h1")).toEqual(true);
  });
});

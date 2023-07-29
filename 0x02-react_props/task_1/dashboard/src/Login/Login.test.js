import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login", () => {
  wrapper = shallow(<Login />);

  it("renders component without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("has 2 input tags and 2 label tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

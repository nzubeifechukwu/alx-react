import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { getFooterCopy, getFullYear } from "../utils/utils";

describe("Footer", () => {
  wrapper = shallow(<Footer />);

  it("render component without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("render the text Copyright", () => {
    expect(wrapper.text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });
});

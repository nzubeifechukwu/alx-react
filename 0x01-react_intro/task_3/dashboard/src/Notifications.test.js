import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("Notifications component tests", () => {
  const notify = shallow(<Notifications />);

  it("Notifications renders without crashing", () => {
    expect(notify).toBeDefined();
  });

  it("renders ul", () => {
    expect(notify.find("ul")).toBeDefined();
  });

  it("renders three li elements", () => {
    expect(notify.find("li")).toHaveLength(3);
  });

  it("renders text", () => {
    expect(notify.find("p")).toBe("Here is the list of notifications");
  });
});

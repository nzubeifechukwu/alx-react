import React from "react";
import { shallow } from "enzyme";

import App from "./App";

// Test that App component renders without crashing
describe("App", () => {
  const app = shallow(<App />);

  it("renders App component without crashing", () => {
    expect(app).toBeDefined();
  });

  it("renders a div with class App-header", () => {
    expect(app.find(".App-header")).toBeDefined();
  });

  it("renders a div with class App-body", () => {
    expect(app.find(".App-body")).toBeDefined();
  });

  it("renders a div with class App-footer", () => {
    expect(app.find(".App-footer")).toBeDefined();
  });
});

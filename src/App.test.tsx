import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("background color is #333", () => {
    render(<App />);
    const wrapper = screen.getByTestId("Wrapper");
    expect(wrapper).toHaveStyle("background: #333");
  });

  it("the children is centered", () => {
    render(<App />);
    const wrapper = screen.getByTestId("Wrapper");
    expect(wrapper).toHaveStyle("justify-content: center");
    expect(wrapper).toHaveStyle("align-items: center");
  });
});

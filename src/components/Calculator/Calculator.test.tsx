import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Calculator } from "./index";

afterEach(cleanup);

describe("Calculator", () => {
  describe("calculator", () => {
    it("background color is #2c2b2e", () => {
      render(<Calculator />);
      const wrapper = screen.getByTestId("calculator");
      expect(wrapper).toHaveStyle("background: #2c2b2e");
    });

    it("The value of border-radius is 7px", () => {
      render(<Calculator />);
      const wrapper = screen.getByTestId("calculator");
      expect(wrapper).toHaveStyle("border-radius: 7px");
    });
  });
});

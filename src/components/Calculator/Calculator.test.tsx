import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Calculator } from "./index";

afterEach(cleanup);

describe("Calculator", () => {
  describe("calculator", () => {
    it("background color is #242424", () => {
      render(<Calculator />);
      const wrapper = screen.getByTestId("calculator");
      expect(wrapper).toHaveStyle("background: #242424");
    });

    it("The value of border-radius is 7px", () => {
      render(<Calculator />);
      const wrapper = screen.getByTestId("calculator");
      expect(wrapper).toHaveStyle("border-radius: 7px");
    });
  });
});

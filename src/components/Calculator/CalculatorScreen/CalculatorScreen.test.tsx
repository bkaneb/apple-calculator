import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { CalculatorScreen } from "./index";

afterEach(cleanup);

describe("Calculator", () => {
  describe("calculator-screen", () => {
    it("The value of height is 18%", () => {
      render(<CalculatorScreen />);
      const wrapper = screen.getByTestId("calculator-screen");
      expect(wrapper).toHaveStyle("height: 18%");
    });
  });
});

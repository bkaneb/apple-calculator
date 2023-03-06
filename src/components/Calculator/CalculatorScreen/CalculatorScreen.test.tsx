import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { CalculatorScreen } from "./index";

afterEach(cleanup);

describe("Calculator", () => {
  describe("calculator-screen", () => {
    it("The value of height is 18%", () => {
      render(<CalculatorScreen value={'0'} />);
      const calculatorScreen = screen.getByTestId("calculator-screen");
      expect(calculatorScreen).toHaveStyle("height: 18%");
    });
  });
});

import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Calculator } from "../index";

afterEach(cleanup);

describe("Calculator", () => {
  describe("calculator-keyboard", () => {
    it("The value of height is 75%", () => {
      render(<Calculator />);
      const calculatorKeyboard = screen.getByTestId("calculator-keyboard");
      expect(calculatorKeyboard).toHaveStyle("height: 75%");
    });

    it("the keyboard is divided into grid", () => {
      render(<Calculator />);
      const calculatorKeyboard = screen.getByTestId("calculator-keyboard");
      expect(calculatorKeyboard).toHaveStyle("display: grid");
    });

    it("the keyboard has 4 columns at 25%", () => {
      render(<Calculator />);
      const calculatorKeyboard = screen.getByTestId("calculator-keyboard");
      expect(calculatorKeyboard).toHaveStyle(
        "grid-template-columns: repeat(4,25%)"
      );
    });

    it("the keyboard has 5 rows at 20%", () => {
      render(<Calculator />);
      const calculatorKeyboard = screen.getByTestId("calculator-keyboard");
      expect(calculatorKeyboard).toHaveStyle(
        "grid-template-rows: repeat(5,20%)"
      );
    });
  });
});

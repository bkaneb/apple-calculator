import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Calculator } from "./index";

afterEach(cleanup);

describe("Calculator", () => {
  describe("calculator", () => {
    it("The value of border-radius is 8px", () => {
      render(<Calculator />);
      const calculator = screen.getByTestId("calculator");
      expect(calculator).toHaveStyle("border-radius: 8px");
    });
  });
});

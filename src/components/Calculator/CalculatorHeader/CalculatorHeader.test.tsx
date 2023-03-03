import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { CalculatorHeader } from "./index";

afterEach(cleanup);

describe("Calculator", () => {
    describe("calculator-header", () => {
        it("The value of height is 7%", () => {
            render(<CalculatorHeader />);
            const calculatorHeader = screen.getByTestId("calculator-header");
            expect(calculatorHeader).toHaveStyle("height: 7%");
        });
    });
});

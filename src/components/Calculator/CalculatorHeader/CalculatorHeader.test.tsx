import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { CalculatorHeader } from "./index";

afterEach(cleanup);

describe("Calculator", () => {
    describe("calculator-header", () => {
        it("The value of height is 18%", () => {
            render(<CalculatorHeader />);
            const wrapper = screen.getByTestId("calculator-header");
            expect(wrapper).toHaveStyle("height: 7%");
        });
    });
});

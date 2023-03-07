import {
  ICalculatorState,
  initialCalculatorState,
} from "../../models/initialCalculatorState";
import { chooseOperation } from "../chooseOperation";
import { constant } from "../../utils/constant";

const initialState: ICalculatorState = initialCalculatorState;

describe("As a user, I want to choose a type of operation", () => {
  describe("Given the value 'Error'", () => {
    const state = { ...initialState, currentValue: constant.ERROR };

    describe("When I choose the '+' operation type.", () => {
      const result = chooseOperation(state, { value: "+" });

      test("Then I expect the previous value is 'Error', current value is 'Error' and the operation type is '+'", () => {
        expect(result).toEqual({
          ...initialState,
          previousValue: constant.ERROR,
          currentValue: constant.ERROR,
          operation: "+",
        });
      });
    });
  });

  describe("Given the value 30", () => {
    const state = { ...initialState, currentValue: "30" };

    describe("When I choose the '+' operation type.", () => {
      const result = chooseOperation(state, { value: "+" });

      test("Then I expect the previous value is 30, current value is 0 and the operation type is '+'", () => {
        expect(result).toEqual({
          ...initialState,
          previousValue: "30",
          currentValue: "0",
          operation: "+",
        });
      });
    });
  });
});

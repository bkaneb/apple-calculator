import {
  ICalculatorState,
  initialCalculatorState,
} from "../../models/initialCalculatorState";
import { changeSign } from "../changeSign";
import { constant } from "../../utils/constant";

const initialState: ICalculatorState = initialCalculatorState;

describe("As a user, I want to change the sign of the value", () => {
  describe("Given the value 'Error'", () => {
    const state = { ...initialState, currentValue: constant.ERROR };

    describe("When I click on the '+/-' button.", () => {
      const result = changeSign(state);

      test("Then I expect the value is 'Error'", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: constant.ERROR,
        });
      });
    });
  });

  describe("Given the value 0", () => {
    const state = { ...initialState, currentValue: "0" };

    describe("When I click on the '+/-' button.", () => {
      const result = changeSign(state);

      test("Then I expect the value is 0", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "0",
        });
      });
    });
  });

  describe("Given the value 8", () => {
    const state = { ...initialState, currentValue: "8" };

    describe("When I click on the '+/-' button.", () => {
      const result = changeSign(state);

      test("Then I expect the value is -8", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "-8",
        });
      });
    });
  });

  describe("Given the value -8", () => {
    const state = { ...initialState, currentValue: "-8" };

    describe("When I click on the '+/-' button.", () => {
      const result = changeSign(state);

      test("Then I expect the value is 8", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "8",
        });
      });
    });
  });
});

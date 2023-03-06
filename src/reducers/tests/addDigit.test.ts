import { addDigit } from "../addDigit";
import {
  ICalculatorState,
  initialCalculatorState,
} from "../../models/initialCalculatorState";

let initialState: ICalculatorState = initialCalculatorState;

describe("As a user I want to add a number to the value", () => {
  describe("Given the value crushable 100", () => {
    const state = { ...initialState, currentValue: "100", crushable: true };

    describe("When I add 1", () => {
      const result = addDigit(state, { value: "1" });

      test("Then I expect the value is 1", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "1",
          crushable: false,
        });
      });
    });
  });

  describe("Given the value 'Error'", () => {
    const state = { ...initialState, currentValue: "Error" };

    describe("When I add 1", () => {
      const result = addDigit(state, { value: "1" });

      test("Then I expect the value is 1", () => {
        expect(result).toEqual({ ...initialState, currentValue: "1" });
      });
    });
  });

  describe("Given the value 0", () => {
    const state = { ...initialState, currentValue: "0" };

    describe("When I add 0", () => {
      const result = addDigit(state, { value: "0" });

      test("Then I expect the value is 0", () => {
        expect(result).toEqual({ ...initialState, currentValue: "0" });
      });
    });

    describe("When I add 3", () => {
      const result = addDigit(state, { value: "3" });

      test("Then I expect the value is 3", () => {
        expect(result).toEqual({ ...initialState, currentValue: "3" });
      });
    });
  });

  describe("Given the value ','", () => {
    const state = { ...initialState, currentValue: "," };

    describe("When I add ','", () => {
      const result = addDigit(state, { value: "," });

      test("Then I expect the value is ','", () => {
        expect(result).toEqual({ ...initialState, currentValue: "," });
      });
    });
  });

  describe("Given the value 3", () => {
    const state = { ...initialState, currentValue: "3" };

    describe("When I add 3", () => {
      const result = addDigit(state, { value: "3" });

      test("Then I expect the value is 33", () => {
        expect(result).toEqual({ ...initialState, currentValue: "33" });
      });
    });
  });
});

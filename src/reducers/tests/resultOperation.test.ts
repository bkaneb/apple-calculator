import {
  ICalculatorState,
  initialCalculatorState,
} from "../../models/initialCalculatorState";
import { resultOperation } from "../resultOperation";

const initialState: ICalculatorState = initialCalculatorState;

describe("As a user I want to perform an operation", () => {
  describe("Given the operation Error + 3", () => {
    const state = {
      ...initialState,
      previousValue: "Error",
      currentValue: "3",
      operation: "+",
    };
    describe("When the user press the '=' button", () => {
      const result = resultOperation(state);

      test("Then I expect the state to be reset with the value 'Error'.", () => {
        expect(result).toEqual({
          ...initialState,
          previousValue: "Error",
          currentValue: "Error",
          crushable: true,
        });
      });
    });
  });

  describe("Given the operation 5 ÷ 0", () => {
    describe("When the user press the '=' button", () => {
      const state = {
        ...initialState,
        previousValue: "5",
        currentValue: "0",
        operation: "÷",
      };
      const result = resultOperation(state);

      test("Then I expect the result should be 'Error'", () => {
        expect(result).toEqual({
          ...initialState,
          operation: null,
          previousValue: "0",
          currentValue: "Error",
          crushable: true,
        });
      });
    });
  });

  describe("Given the operation 4 + 7", () => {
    describe("When the user press the '=' button", () => {
      const state = {
        ...initialState,
        previousValue: "4",
        currentValue: "7",
        operation: "+",
      };
      const result = resultOperation(state);

      test("Then I expect the result should be 11", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "11",
          crushable: true,
        });
      });
    });
  });

  describe("Given the operation 4 - 7", () => {
    describe("When the user press the '=' button", () => {
      const state = {
        ...initialState,
        previousValue: "4",
        currentValue: "7",
        operation: "-",
      };
      const result = resultOperation(state);

      test("Then I expect the result should be -3", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "-3",
          crushable: true,
        });
      });
    });
  });

  describe("Given the operation 4 * 7", () => {
    describe("When the user press the '=' button", () => {
      const state = {
        ...initialState,
        previousValue: "4",
        currentValue: "7",
        operation: "x",
      };
      const result = resultOperation(state);

      test("Then I expect the result should be 28", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "28",
          crushable: true,
        });
      });
    });
  });

  describe("Given the operation 5 ÷ 2", () => {
    describe("When the user press the '=' button", () => {
      const state = {
        ...initialState,
        previousValue: "5",
        currentValue: "2",
        operation: "÷",
      };
      const result = resultOperation(state);

      test("Then I expect the result should be 2,5", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "2,5",
          crushable: true,
        });
      });
    });
  });
});

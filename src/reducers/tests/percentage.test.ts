import {
  ICalculatorState,
  initialCalculatorState,
} from "../../models/initialCalculatorState";
import { percentage } from "../percentage";
import { constant } from "../../utils/constant";

const initialState: ICalculatorState = initialCalculatorState;

describe("As a user, I want to apply a percentage to a value", () => {
  describe("Given the value 0", () => {
    const state = { ...initialState, currentValue: "0" };

    describe("When I click on the '%' button.", () => {
      const result = percentage(state);

      test("Then I expect the value is 0", () => {
        expect(result).toEqual({
          ...state,
        });
      });
    });
  });

  describe("Given the value 0,0000", () => {
    const state = { ...initialState, currentValue: "0,0000" };

    describe("When I click on the '%' button.", () => {
      const result = percentage(state);

      test("Then I expect the value is 0", () => {
        expect(result).toEqual({
          ...state,
          currentValue: "0",
        });
      });
    });
  });

  describe("Given the value 'Error'", () => {
    const state = { ...initialState, currentValue: constant.ERROR };

    describe("When I click on the '%' button.", () => {
      const result = percentage(state);

      test("Then I expect the value is 'Error'", () => {
        expect(result).toEqual({
          ...state,
        });
      });
    });
  });

  describe("Given the value 30", () => {
    const state = { ...initialState, currentValue: "30" };

    describe("When I click on the '%' button.", () => {
      const result = percentage(state);

      test("Then I expect the value is 0,3", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "0,3",
        });
      });
    });
  });

  describe("Given the value 30,000", () => {
    const state = { ...initialState, currentValue: "30,000" };

    describe("When I click on the '%' button.", () => {
      const result = percentage(state);

      test("Then I expect the value is 0,3", () => {
        expect(result).toEqual({
          ...initialState,
          currentValue: "0,3",
        });
      });
    });
  });

  describe("Given the value 100", () => {
    let state = { ...initialState, currentValue: "100" };

    describe("And choose the operation '+'", () => {
      state = { ...state, operation: "+", previousValue: "100" };

      describe("And give the value 50", () => {
        state = { ...state, currentValue: "50" };

        describe("When I click on the '%' button.", () => {
          const result = percentage(state);

          test("Then I expect the value is 150", () => {
            expect(result).toEqual({
              ...state,
              operation: "+",
              currentValue: "150",
            });
          });
        });
      });
    });

    describe("And choose the operation '-'", () => {
      state = { ...state, operation: "-", previousValue: "100" };

      describe("And give the value 50", () => {
        state = { ...state, currentValue: "50" };

        describe("When I click on the '%' button.", () => {
          const result = percentage(state);

          test("Then I expect the value is 50", () => {
            expect(result).toEqual({
              ...state,
              operation: "-",
              currentValue: "50",
            });
          });
        });
      });
    });

    describe("And choose the operation '÷'", () => {
      state = { ...state, operation: "÷", previousValue: "100" };

      describe("And give the value 50", () => {
        state = { ...state, currentValue: "50" };

        describe("When I click on the '%' button.", () => {
          const result = percentage(state);

          test("Then I expect the value is 0,5", () => {
            expect(result).toEqual({
              ...state,
              operation: "÷",
              currentValue: "0,5",
            });
          });
        });
      });
    });

    describe("And choose the operation 'x'", () => {
      state = { ...state, operation: "x", previousValue: "100" };

      describe("And give the value 50", () => {
        state = { ...state, currentValue: "50" };

        describe("When I click on the 'x' button.", () => {
          const result = percentage(state);

          test("Then I expect the value is 0,5", () => {
            expect(result).toEqual({
              ...state,
              operation: "x",
              currentValue: "0,5",
            });
          });
        });
      });
    });
  });
});

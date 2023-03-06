import {
  ICalculatorState,
  initialCalculatorState,
} from "../../models/initialCalculatorState";
import { resetValue } from "../resetValue";
import { chooseOperation } from "../chooseOperation";

const initialState: ICalculatorState = initialCalculatorState;

describe("As a user, I want to reinitialize my calculation", () => {
  describe("Given the value 30", () => {
    const state = { ...initialState, currentValue: "30" };

    describe("When I click on the 'AC' button.", () => {
      const result = resetValue(state);

      test("Then I expect the value is 0", () => {
        expect(result).toEqual({
          ...initialState,
        });
      });
    });
  });
});

import {ICalculatorState, initialCalculatorState} from "../models/initialCalculatorState";

export const resetValue = (state: ICalculatorState) => ({
  ...state,
  ...initialCalculatorState,
});

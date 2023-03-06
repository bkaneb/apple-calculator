import { ICalculatorState } from "../models/initialCalculatorState";

export const resetValue = (state: ICalculatorState) => {
  return { ...state, currentValue: "0" };
};

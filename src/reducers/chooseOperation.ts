import { ICalculatorState } from "../models/initialCalculatorState";
import { IPayload } from "./index";

export const chooseOperation = (state: ICalculatorState, payload: IPayload) => {
  const { currentValue } = state;
  const { value } = payload;

  return {
    ...state,
    previousValue: currentValue,
    currentValue: "0",
    operation: value,
  };
};

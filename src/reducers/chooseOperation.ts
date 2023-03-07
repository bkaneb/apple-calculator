import { ICalculatorState } from "../models/initialCalculatorState";
import { IPayload } from "./index";
import { constant } from "../utils/constant";

export const chooseOperation = (state: ICalculatorState, payload: IPayload) => {
  const { currentValue } = state;
  const { value } = payload;

  if (currentValue === constant.ERROR)
    return { ...state, operation: value, previousValue: currentValue };

  return {
    ...state,
    previousValue: currentValue,
    currentValue: "0",
    operation: value,
  };
};

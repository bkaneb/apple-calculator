import { ICalculatorState } from "../models/initialCalculatorState";
import { IPayload } from "./index";

export const addDigit = (state: ICalculatorState, payload: IPayload) => {
  const { currentValue } = state;
  const { value } = payload;
  if (currentValue === "0" && value === "0") return { ...state };
  if (currentValue === "0" && value !== "0" && value !== ",")
    return { ...state, currentValue: value };
  if (currentValue === "," && value === ",") return { ...state };

  return {
    ...state,
    currentValue: `${currentValue}${value}`,
  };
};

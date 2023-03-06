import { ICalculatorState } from "../models/initialCalculatorState";
import { IPayload } from "./index";

export const addDigit = (state: ICalculatorState, payload: IPayload) => {
  const { currentValue, crushable } = state;
  const { value } = payload;
  const lastCharacterCurrentValue = currentValue[currentValue.length - 1];

  const valueAndCurrentValueIsZero = currentValue === "0" && value === "0";
  const valueAndCurrentValueIsComma = lastCharacterCurrentValue === "," && value === ",";
  const isFirstValue = currentValue === "0" && value !== "0" && value !== ",";

  if (crushable) return { ...state, currentValue: value, crushable: false };
  if (currentValue === "Error") return { ...state, currentValue: value };

  if (valueAndCurrentValueIsZero) return { ...state };
  if (valueAndCurrentValueIsComma) return { ...state };

  if (isFirstValue) return { ...state, currentValue: value };

  return {
    ...state,
    currentValue: `${currentValue}${value}`,
  };
};

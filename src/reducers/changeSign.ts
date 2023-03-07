import { ICalculatorState } from "../models/initialCalculatorState";
import { constant } from "../utils/constant";

export const changeSign = (state: ICalculatorState) => {
  const { currentValue } = state;

  if (currentValue === constant.ERROR) return { ...state };
  if (currentValue === "0") return { ...state };

  const currentValueIsNegative = currentValue[0] === "-";
  const changeSign = currentValueIsNegative
    ? currentValue.slice(1)
    : `-${currentValue}`;

  return {
    ...state,
    currentValue: changeSign,
  };
};

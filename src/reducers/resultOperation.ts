import { ICalculatorState } from "../models/initialCalculatorState";
import { constant } from "../utils/constant";

export const resultOperation = (state: ICalculatorState) => {
  const { currentValue, previousValue, operation } = state;
  const previousValueNumber = parseFloat(previousValue.replace(/,/g, "."));
  const currentValueNumber = parseFloat(currentValue.replace(/,/g, "."));

  let calculatedValue = 0;

  if (!previousValue || !operation) return { ...state };
  if (previousValue === constant.ERROR)
    return {
      ...state,
      operation: null,
      currentValue: constant.ERROR,
      crushable: true,
    };

  if (operation === "÷" && currentValue === "0")
    return {
      ...state,
      operation: null,
      previousValue: "0",
      currentValue: constant.ERROR,
      crushable: true,
    };

  if (operation === "÷" && currentValue !== "0") {
    calculatedValue = previousValueNumber / currentValueNumber;
  }

  if (operation === "x") {
    calculatedValue = previousValueNumber * currentValueNumber;
  }

  if (operation === "-") {
    calculatedValue = previousValueNumber - currentValueNumber;
  }

  if (operation === "+") {
    calculatedValue = previousValueNumber + currentValueNumber;
  }

  return {
    ...state,
    operation: null,
    previousValue: "0",
    currentValue: `${calculatedValue}`.replace(/\./g, ","),
    crushable: true,
  };
};

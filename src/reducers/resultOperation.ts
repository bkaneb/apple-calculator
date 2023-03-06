import { ICalculatorState } from "../models/initialCalculatorState";

export const resultOperation = (state: ICalculatorState) => {
  const { currentValue, previousValue, operation } = state;
  const previousValueNumber = parseFloat(previousValue.replace(/,/g, "."));
  const currentValueNumber = parseFloat(currentValue.replace(/,/g, "."));

  let calculatedValue = 0;

  if (!previousValue || !operation) return { ...state };
  if (previousValue === "Error")
    return {
      ...state,
      operation: null,
      currentValue: "Error",
      crushable: true,
    };

  if (operation === "÷" && currentValue === "0")
    return {
      ...state,
      operation: null,
      previousValue: "0",
      currentValue: "Error",
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

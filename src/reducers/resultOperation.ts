import { ICalculatorState } from "../models/initialCalculatorState";

export const resultOperation = (state: ICalculatorState) => {
  const { currentValue, previousValue, operation } = state;
  const previousValueNumber = parseFloat(previousValue.replace(/,/g, "."));
  const currentValueNumber = parseFloat(currentValue.replace(/,/g, "."));

  let calculatedValue = 0;

  if (!previousValue || !operation) return { ...state };
  if (operation === "÷" && currentValue === "0")
    return { ...state, currentValue: "Error" };

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
    currentValue: `${calculatedValue}`.replace(/\./g, ","),
    crushable: true,
  };
};

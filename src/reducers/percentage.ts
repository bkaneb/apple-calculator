import { ICalculatorState } from "../models/initialCalculatorState";
import { constant } from "../utils/constant";

export const percentage = (state: ICalculatorState) => {
  const { currentValue, previousValue, operation } = state;
  const previousValueNumber = parseFloat(previousValue.replace(/,/g, "."));
  const currentValueNumber = parseFloat(currentValue.replace(/,/g, "."));
  const calculatedPercentage = currentValueNumber / 100;

  if (operation === "+") {
    return calculatedAdditionPercentage(
      state,
      previousValueNumber,
      currentValueNumber
    );
  }

  if (operation === "-") {
    return calculatedSubtractionPercentage(
      state,
      previousValueNumber,
      currentValueNumber
    );
  }

  if (currentValue === constant.ERROR) return { ...state };
  if (!currentValueNumber) return { ...state, currentValue: "0" };

  return {
    ...state,
    currentValue: `${calculatedPercentage}`.replace(/\./g, ","),
  };
};

const calculatedAdditionPercentage = (
  state: ICalculatorState,
  previousValueNumber: number,
  currentValueNumber: number
): ICalculatorState => {
  const calculatedPercentage = (previousValueNumber * currentValueNumber) / 100;
  const calculatedValue = previousValueNumber + calculatedPercentage;

  return {
    ...state,
    currentValue: `${calculatedValue}`.replace(/\./g, ","),
  };
};

const calculatedSubtractionPercentage = (
  state: ICalculatorState,
  previousValueNumber: number,
  currentValueNumber: number
): ICalculatorState => {
  const calculatedPercentage = (previousValueNumber * currentValueNumber) / 100;
  const calculatedValue = previousValueNumber - calculatedPercentage;

  return {
    ...state,
    currentValue: `${calculatedValue}`.replace(/\./g, ","),
  };
};

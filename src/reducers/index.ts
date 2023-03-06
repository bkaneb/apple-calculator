import { ICalculatorState } from "../models/initialCalculatorState";
import { addDigit } from "./addDigit";
import { resetValue } from "./resetValue";
import { chooseOperation } from "./chooseOperation";
import { resultOperation } from "./resultOperation";

export type IAction =
  | "ADD_DIGIT"
  | "CHOOSE_OPERATION"
  | "CLEAR"
  | "CHANGE_SIGN"
  | "PERCENTAGE"
  | "RESULT_OPERATION";

export interface IPayload {
  value: string;
}

export interface IDispatch {
  type: IAction;
  payload: IPayload;
}

export const reducer = (
  state: ICalculatorState,
  { type, payload }: IDispatch
) => {
  switch (type) {
    case "ADD_DIGIT":
      return addDigit(state, payload);
    case "CHOOSE_OPERATION":
      return chooseOperation(state, payload);
    case "CLEAR":
      return resetValue(state);
    case "RESULT_OPERATION":
      return resultOperation(state);
    default:
      return { ...state };
  }
};

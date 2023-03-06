import { ICalculatorState } from "../models/initialCalculatorState";
import { addDigit } from "./addDigit";

export type IAction = "ADD_DIGIT" | "CHOOSE_OPERATION" | "CLEAR" | "CHANGE_SIGN" | "PERCENTAGE" | "RESULT";

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
    default:
      return { ...state };
  }
};

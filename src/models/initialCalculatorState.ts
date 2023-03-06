export interface ICalculatorState {
  currentValue: string;
  previousValue: string;
  operation: string | null;
  crushable: boolean;
}

export const initialCalculatorState: ICalculatorState = {
  currentValue: "0",
  previousValue: "0",
  operation: null,
  crushable: false,
};

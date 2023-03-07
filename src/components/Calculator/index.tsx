import React, { useReducer } from "react";
import styled from "styled-components";
import { CalculatorHeader } from "./CalculatorHeader";
import { colors } from "../../utils/colors";
import { CalculatorScreen } from "./CalculatorScreen";
import { CalculatorKeyboard } from "./CalculatorKeyboard";
import { reducer } from "../../reducers";
import { initialCalculatorState } from "../../models/initialCalculatorState";

export const Calculator = () => {
  const [{ currentValue, operation }, dispatch] = useReducer(
    reducer,
    initialCalculatorState
  );

  return (
    <CalculatorWrapper data-testid="calculator">
      <CalculatorHeader />
      <CalculatorScreen value={currentValue} />
      <CalculatorKeyboard dispatch={dispatch} operation={operation || ""} />
    </CalculatorWrapper>
  );
};

const CalculatorWrapper = styled.div`
  background: ${colors.calculator.background};
  height: 320px;
  width: 230px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #65646c;
`;

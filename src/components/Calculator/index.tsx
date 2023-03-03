import React from "react";
import styled from "styled-components";
import { CalculatorHeader } from "./CalculatorHeader";
import { colors } from "../../utils/colors";

export const Calculator = () => (
  <CalculatorWrapper data-testid="calculator">
    <CalculatorHeader />
  </CalculatorWrapper>
);

const CalculatorWrapper = styled.div`
  background: ${colors.calculator.background};
  height: 320px;
  width: 230px;
  border-radius: 7px;
  overflow: hidden;
`;

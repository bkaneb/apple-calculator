import React from "react";
import styled from "styled-components";
import {CalculatorHeader} from "./CalculatorHeader";

export const Calculator = () => (
  <CalculatorWrapper data-testid="calculator">
      <CalculatorHeader />
  </CalculatorWrapper>
);

const CalculatorWrapper = styled.div`
  background: #242424;
  height: 320px;
  width: 230px;
  border-radius: 7px;
  overflow: hidden;
`;

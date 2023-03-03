import React from "react";
import styled from "styled-components";

export const Calculator = () => (
  <CalculatorWrapper data-testid="calculator"></CalculatorWrapper>
);

const CalculatorWrapper = styled.div`
  background: #242424;
  height: 320px;
  width: 230px;
  border-radius: 7px;
`;

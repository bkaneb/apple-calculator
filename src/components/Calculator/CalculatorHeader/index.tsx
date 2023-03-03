import React from "react";
import styled from "styled-components";
import { colors } from "../../../utils/colors";

const headerColors = colors.calculator.header;

export const CalculatorHeader = () => (
  <CalculatorHeaderWrapper>
    <Button color={headerColors.buttons.close} />
    <Button color={headerColors.buttons.reduce} />
    <Button color={headerColors.buttons.fullScreen} />
  </CalculatorHeaderWrapper>
);

const CalculatorHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  width: 100%;
`;

const Button = styled.div`
  margin: 0 0 0 8px;
  height: 50%;
  width: 5%;
  background: ${({ color }: { color: string }) => color};
  border-radius: 50%;
`;

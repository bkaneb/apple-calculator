import React from "react";
import styled from "styled-components";

export const CalculatorHeader = () => (
  <CalculatorHeaderWrapper>
    <Button color={"#fe5f57"} />
    <Button color={"#fdbc2c"} />
    <Button color={"#29c73f"} />
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

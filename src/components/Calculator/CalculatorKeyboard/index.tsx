import React, { useState } from "react";
import styled from "styled-components";
import { keyboardConfig } from "../../../models/keyboard.config";
import { colors } from "../../../utils/colors";
import { IDispatch } from "../../../reducers";

interface ICalculatorKeyboardProps {
  dispatch: React.Dispatch<IDispatch>;
  operation: string;
}

export const CalculatorKeyboard = ({
  dispatch,
  operation,
}: ICalculatorKeyboardProps) => {
  const [isClickedKey, setIsClickedKey] = useState("");

  const onKeyIsClicked = (key: string) => setIsClickedKey(key);

  const onKeyIsNotClicked = () => setIsClickedKey("");

  return (
    <CalculatorKeyboardWrapper data-testid="calculator-keyboard">
      {keyboardConfig.map((keyboardKey, index) => {
        const { action, value, row, column, background, clickedBackground } =
          keyboardKey;

        const key = `key ${index}: ${value}`;
        const operationIsActive = operation === value;

        return (
          <KeyboardKey
            key={key}
            gridRow={row}
            gridColumn={column}
            background={
              isClickedKey === key
                ? clickedBackground
                : background
            }
            onClick={() => dispatch({ type: action, payload: { value } })}
            onMouseDown={() => onKeyIsClicked(key)}
            onMouseUp={onKeyIsNotClicked}
            operationIsActive={operationIsActive}
          >
            <TextValue>{value}</TextValue>
          </KeyboardKey>
        );
      })}
    </CalculatorKeyboardWrapper>
  );
};

type BorderDirection = "top" | "left" | "bottom" | "right";

const getBorderKeyboardKey = (
  gridAttribute: string,
  direction: BorderDirection,
  operationIsActive: boolean
): string => {
  const border = operationIsActive
    ? `1.5px solid ${colors.calculator.keyboard.border}`
    : `.5px solid ${colors.calculator.keyboard.border}`;

  if (direction === "top" || direction === "left")
    return gridAttribute?.[0] === "1" ? "none" : border;

  if (direction === "bottom")
    return gridAttribute?.[0] === "5" ? "none" : border;

  if (direction === "right")
    return gridAttribute?.[0] === "4" ? "none" : border;

  return "none";
};

const CalculatorKeyboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);
  height: 75%;
`;

interface IKeyboardKeyProps {
  background: string;
  gridColumn: string;
  gridRow: string;
  operationIsActive: boolean;
}

const KeyboardKey = styled.div<IKeyboardKeyProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: ${({ background }) => background};
  color: ${colors.calculator.keyboard.text};
  border-top: ${({ gridRow, operationIsActive }) =>
    getBorderKeyboardKey(gridRow, "top", operationIsActive)};
  border-left: ${({ gridColumn, operationIsActive }) =>
    getBorderKeyboardKey(gridColumn, "left", operationIsActive)};
  border-bottom: ${({ gridRow, operationIsActive }) =>
    getBorderKeyboardKey(gridRow, "bottom", operationIsActive)};
  border-right: ${({ gridColumn, operationIsActive }) =>
    getBorderKeyboardKey(gridColumn, "right", operationIsActive)};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  cursor: pointer;
`;

const TextValue = styled.p`
  margin: 0;
  font-size: 1.3em;
  font-weight: 500;
`;

import { colors } from "../utils/colors";
import { IAction } from "../reducers";

interface IKeyboardConfig {
  column: string;
  row: string;
  value: string;
  action: IAction;
  background: string;
  clickedBackground: string;
}

export const keyboardConfig: IKeyboardConfig[] = [
  {
    column: "1",
    row: "1",
    value: "AC",
    action: "CLEAR",
    background: colors.calculator.keyboard.key.darkGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.darkGrey,
  },
  {
    column: "2",
    row: "1",
    value: "+/-",
    action: "CHANGE_SIGN",
    background: colors.calculator.keyboard.key.darkGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.darkGrey,
  },
  {
    column: "3",
    row: "1",
    value: "%",
    action: "PERCENTAGE",
    background: colors.calculator.keyboard.key.darkGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.darkGrey,
  },
  {
    column: "4",
    row: "1",
    value: "÷",
    action: "CHOOSE_OPERATION",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1",
    row: "2",
    value: "7",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "2",
    row: "2",
    value: "8",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "2",
    value: "9",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "2",
    value: "x",
    action: "CHOOSE_OPERATION",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1",
    row: "3",
    value: "4",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "2",
    row: "3",
    value: "5",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "3",
    value: "6",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "3",
    value: "-",
    action: "CHOOSE_OPERATION",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1",
    row: "4",
    value: "1",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "2",
    row: "4",
    value: "2",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "4",
    value: "3",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "4",
    value: "+",
    action: "CHOOSE_OPERATION",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1/3",
    row: "5",
    value: "0",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "5",
    value: ",",
    action: "ADD_DIGIT",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "5",
    value: "=",
    action: "RESULT",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
];

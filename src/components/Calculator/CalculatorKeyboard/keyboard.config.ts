import { colors } from "../../../utils/colors";

interface IKeyboardConfig {
  column: string;
  row: string;
  value: string;
  background: string;
  clickedBackground: string;
}

export const keyboardConfig: IKeyboardConfig[] = [
  {
    column: "1",
    row: "1",
    value: "AC",
    background: colors.calculator.keyboard.key.darkGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.darkGrey,
  },
  {
    column: "2",
    row: "1",
    value: "+/-",
    background: colors.calculator.keyboard.key.darkGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.darkGrey,
  },
  {
    column: "3",
    row: "1",
    value: "%",
    background: colors.calculator.keyboard.key.darkGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.darkGrey,
  },
  {
    column: "4",
    row: "1",
    value: "÷",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1",
    row: "2",
    value: "7",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "2",
    row: "2",
    value: "8",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "2",
    value: "9",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "2",
    value: "x",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1",
    row: "3",
    value: "4",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "2",
    row: "3",
    value: "5",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "3",
    value: "6",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "3",
    value: "-",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1",
    row: "4",
    value: "1",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "2",
    row: "4",
    value: "2",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "4",
    value: "3",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "4",
    value: "+",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
  {
    column: "1/3",
    row: "5",
    value: "0",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "3",
    row: "5",
    value: ",",
    background: colors.calculator.keyboard.key.lightGrey,
    clickedBackground: colors.calculator.keyboard.keyClicked.lightGrey,
  },
  {
    column: "4",
    row: "5",
    value: "=",
    background: colors.calculator.keyboard.key.operator,
    clickedBackground: colors.calculator.keyboard.keyClicked.operator,
  },
];

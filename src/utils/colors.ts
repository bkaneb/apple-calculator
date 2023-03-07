import { IColors } from "../types/colors.types";

export const colors: IColors = {
  app: {
    background: "#333",
  },
  calculator: {
    background: "#2c2b2e",
    header: {
      buttons: {
        close: "#fe5f57",
        reduce: "#fdbc2c",
        fullScreen: "#29c73f",
      },
    },
    keyboard: {
      border: "#262629",
      text: "#fff",
      key:{
        darkGrey: '#3b3b3c',
        lightGrey: '#5b5b5c',
        operator: '#ff9e0b',
      },
      keyClicked: {
        darkGrey: '#5b5b5c',
        lightGrey: '#a1a1a3',
        operator: '#cb7d08',
      }
    },
  },
};

export interface IColors {
  app: {
    background: string;
  };
  calculator: {
    background: string;
    header: {
      buttons: {
        close: string;
        reduce: string;
        fullScreen: string;
      };
    };
    keyboard: {
      border: string;
      text: string;
      key: {
        darkGrey: string;
        lightGrey: string;
        operator: string;
      };
    };
  };
}

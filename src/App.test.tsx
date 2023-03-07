import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("the children is centered", () => {
    render(<App />);
    const app = screen.getByTestId("app");
    expect(app).toHaveStyle("justify-content: center");
    expect(app).toHaveStyle("align-items: center");
  });
});

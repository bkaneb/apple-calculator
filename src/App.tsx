import React from "react";
import styled from "styled-components";
import { Calculator } from "./components/Calculator";
import { colors } from "./utils/colors";

const App = () => (
  <Wrapper data-testid="app">
    <Calculator />
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${colors.app.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;

import React from "react";
import styled from "styled-components";
import { Calculator } from "./components/Calculator";

const App = () => (
  <Wrapper data-testid="app">
    <Calculator />
  </Wrapper>
);

const Wrapper = styled.div`
  background: #333;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;

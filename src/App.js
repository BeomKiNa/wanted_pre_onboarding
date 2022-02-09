import styled from "styled-components";
import GlobalStyle from "./component/GlobalStyle";
import Toggle from "./component/Toggle";

const AppWapper = styled.div`
  min-height: 100vh;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWapper className="App">
        <Title>Wanted pre onboarding</Title>
        <Toggle />
      </AppWapper>
    </>
  );
}

export default App;

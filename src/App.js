import styled from "styled-components";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import GlobalStyle from "./component/GlobalStyle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
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
        <Modal />
        <Tab />
        <Tag />
        <AutoComplete />
        <ClickToEdit />
      </AppWapper>
    </>
  );
}

export default App;

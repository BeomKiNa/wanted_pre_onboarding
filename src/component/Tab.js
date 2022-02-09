import { useState } from "react";
import styled from "styled-components";
import Layout from "./Layout";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const Nav = styled.nav`
  width: 100%;
`;

const TabList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: #ccc;
`;

const TabItem = styled.li`
  width: 30%;
  padding: 1.5rem;
  background: ${(props) => (props.active ? "purple" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  transition: all 0.3s;
  cursor: pointer;
`;

const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabContent = {
    0: "ONE",
    1: "TWO",
    2: "THREE",
  };

  const onClick = (e) => {
    setActiveIndex(+e.target.dataset.index);
  };

  return (
    <Layout title="Tab">
      <ContentWrapper>
        <Nav>
          <TabList>
            {Object.keys(tabContent).map((e, i) => (
              <TabItem
                key={e}
                active={activeIndex === i}
                data-index={i}
                onClick={onClick}
              >
                Tab {e}
              </TabItem>
            ))}
          </TabList>
        </Nav>
        <P>Tab menu {tabContent[activeIndex]}</P>
      </ContentWrapper>
    </Layout>
  );
};

export default Tab;

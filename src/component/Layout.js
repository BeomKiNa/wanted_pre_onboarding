import styled from "styled-components";

const Article = styled.article`
  margin: 1.5rem 0;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const Layout = ({ title, children }) => {
  return (
    <Article>
      <Title>{title}</Title>
      <ContentWrapper>{children}</ContentWrapper>
    </Article>
  );
};

export default Layout;

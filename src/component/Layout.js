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

const Layout = ({ title, children }) => {
  return (
    <Article>
      <Title>{title}</Title>
      {children}
    </Article>
  );
};

export default Layout;

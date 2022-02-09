import { useState } from "react";
import styled from "styled-components";
import Layout from "./Layout";

const OpenBtn = styled.button`
  all: unset;
  padding: 1rem;
  border-radius: 30px;
  background: purple;
  color: #fff;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 10rem;
  padding: 1rem;
  border-radius: 10px;
  background: #fff;
`;

const ModalCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

const ModalContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Modal = () => {
  const [active, setActive] = useState(false);

  const onModalOpen = () => {
    setActive(true);
  };

  const onModalClose = (e) => {
    if (e.target === e.currentTarget) {
      setActive(false);
    }
  };

  return (
    <Layout title="Modal">
      <OpenBtn onClick={onModalOpen}>Open Modal</OpenBtn>
      {active && (
        <ModalWrapper onClick={onModalClose}>
          <ModalContainer>
            <ModalCloseBtn onClick={onModalClose}>❌</ModalCloseBtn>
            <ModalContent>Welcome Modal!</ModalContent>
          </ModalContainer>
        </ModalWrapper>
      )}
    </Layout>
  );
};

export default Modal;

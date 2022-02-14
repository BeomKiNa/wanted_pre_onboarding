import { useRef, useState } from "react";
import styled from "styled-components";
import Layout from "./Layout";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const List = styled.ul`
  width: 12rem;
  margin: 0 auto;
`;

const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 1rem 0;
`;

const P = styled.p`
  width: 80%;
  height: 20px;
  padding: 3px 0;
  border: 1px solid #666;
`;

const Input = styled.input`
  text-align: center;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Span = styled.span`
  display: inline-block;
  margin: 0 0.5rem;
  min-width: 2rem;
`;

const ClickToEdit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isEditable, setIsEditable] = useState({ name: false, age: false });

  const nameRef = useRef();
  const ageRef = useRef();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value.replaceAll("-", ""));
  };

  const onFocus = (e) => {
    e.target.select();
  };

  const onDisplayInput = (target) => (e) => {
    if (e.type === "dblclick" || (e.type === "keydown" && e.key === "Enter")) {
      setIsEditable((prev) => ({ ...prev, [target]: true }));
    }
  };

  const onBlur = () => {
    setIsEditable({ name: false, age: false });
    nameRef.current.textContent = name;
    ageRef.current.textContent = age;
  };

  return (
    <Layout title="ClickToEdit">
      <Wrapper>
        <List onBlur={onBlur}>
          <Item
            onDoubleClick={onDisplayInput("name")}
            onKeyDown={onDisplayInput("name")}
          >
            <span>이름</span>
            {isEditable.name ? (
              <Input
                type="text"
                name="name"
                value={name}
                onChange={onChangeName}
                autoFocus={true}
                onFocus={onFocus}
              />
            ) : (
              <P tabIndex="0">{name}</P>
            )}
          </Item>
          <Item
            onDoubleClick={onDisplayInput("age")}
            onKeyDown={onDisplayInput("age")}
          >
            <span>나이</span>
            {isEditable.age ? (
              <Input
                type="number"
                name="age"
                value={age}
                onChange={onChangeAge}
                min="0"
                autoFocus={true}
                onFocus={onFocus}
              />
            ) : (
              <P tabIndex="0">{age}</P>
            )}
          </Item>
        </List>
        <p>
          이름
          <Span ref={nameRef}></Span>
          나이
          <Span ref={ageRef}></Span>
        </p>
      </Wrapper>
    </Layout>
  );
};

export default ClickToEdit;

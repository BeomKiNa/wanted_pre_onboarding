import { useRef, useState } from "react";
import styled from "styled-components";
import useOutsideFocus from "../hooks/useOutsideFocus";
import Layout from "./Layout";

const Wrapper = styled.div`
  position: relative;
  width: 80%;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;

  &:focus-within {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
`;

const ResetBtn = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-100%, -50%);
  cursor: pointer;

  &:hover,
  &:focus {
    color: red;
    font-weight: bold;
  }
`;

const List = styled.ul`
  display: none;
  width: 100%;
  background: #fff;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 0.5rem;

  &:first-child {
    border-top: 1px solid #ccc;
  }

  &:hover,
  &:focus {
    background: #ccc;
  }
`;

const DATA_LIST = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Berry",
  "Blackberry",
  "Blood orange",
  "Blueberry",
  "Boysenberry",
  "Breadfruit",
  "Cantaloupe",
  "Cherry",
  "Citron",
  "Citrus",
  "Coconut",
  "Crabapple",
  "Cranberry",
  "Current",
  "Date",
  "Dragon fruit",
  "Durian",
  "Elderberry",
  "Fig",
  "Grape",
  "Grapefruit",
  "Guava",
  "Honeydew",
  "Jackfruit",
  "Kiwi",
  "Kumquat",
  "Lemon",
  "Lime",
  "Lingonberry",
  "Loquat",
  "Lychee",
  "Mandarin orange",
  "Mango",
  "Marionberry",
  "Melon",
  "Mulberry",
  "Nectarine",
  "Orange",
  "Papaya",
  "Passion fruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Pineapple",
  "Plantain",
  "Plum",
  "Pluot",
  "Pomegranate",
  "Pomelo",
  "Prune",
  "Quince",
  "Raisin",
  "Raspberry",
  "Star fruit",
  "Strawberry",
  "Tangelo",
  "Tangerine",
  "Ugli fruit",
  "Watermelon",
];

const AutoComplete = () => {
  const [text, setText] = useState("");

  const listRef = useRef();
  const wrapperRef = useRef();
  const inputRef = useRef();

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onOpenList = () => {
    listRef.current.style.display = "block";
  };

  const onCloseList = () => {
    listRef.current.style.display = "none";
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onReset = () => {
    setText("");
    inputRef.current.focus();
  };

  const onListChose = (listText) => (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter"))
      setText(listText);
  };

  useOutsideFocus(wrapperRef, onCloseList);

  return (
    <Layout title="AutoComplete">
      <Wrapper ref={wrapperRef}>
        <Container>
          <Form onSubmit={onSubmit} onFocus={onOpenList}>
            <Input
              type="text"
              value={text}
              onChange={onTextChange}
              ref={inputRef}
            />
            <ResetBtn type="reset" onClick={onReset}>
              x
            </ResetBtn>
          </Form>
          <List ref={listRef}>
            {text
              ? DATA_LIST.filter((item) =>
                  item.toLowerCase().includes(text.toLowerCase())
                ).map((item) => (
                  <ListItem
                    key={item}
                    onClick={onListChose(item)}
                    onKeyDown={onListChose(item)}
                    tabIndex={0}
                  >
                    {item}
                  </ListItem>
                ))
              : DATA_LIST.map((item) => (
                  <ListItem
                    key={item}
                    onClick={onListChose(item)}
                    onKeyDown={onListChose(item)}
                    tabIndex={0}
                  >
                    {item}
                  </ListItem>
                ))}
          </List>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default AutoComplete;

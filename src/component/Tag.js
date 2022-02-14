import { useRef, useState } from "react";
import styled from "styled-components";
import Layout from "./Layout";

const Wrapper = styled.div`
  width: 80%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow-x: scroll;

  &:focus-within {
    border: 2px solid purple;
  }

  // scroll hidden

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const TagsList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
`;

const TagItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  padding: 0.5rem;
  background: purple;
  color: #fff;
  border-radius: 10px;
`;

const DelBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-left: 0.5rem;
  background: #fff;
  color: purple;
  border-radius: 50%;
  cursor: pointer;
`;

const Input = styled.input`
  all: unset;
`;

const Tag = () => {
  const [tags, setTags] = useState([]);
  const [text, setText] = useState("");

  const inputRef = useRef();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    if (!tags.includes(text)) {
      setTags((prev) => [...prev, text]);
    }
    setText("");
  };

  const onDelClick = (event) => {
    const targetText = event.target.id;
    setTags((prev) => prev.filter((e) => e !== targetText));
  };

  const onWrapperClick = () => {
    inputRef.current.focus();
  };

  return (
    <Layout title="Tag">
      <Wrapper onClick={onWrapperClick}>
        <TagsList>
          {tags.map((tag) => (
            <TagItem key={tag}>
              <span>{tag}</span>
              <DelBtn id={tag} onClick={onDelClick}>
                x
              </DelBtn>
            </TagItem>
          ))}
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="Press enter to add tags"
              value={text}
              onChange={onChange}
              ref={inputRef}
            />
          </form>
        </TagsList>
      </Wrapper>
    </Layout>
  );
};

export default Tag;

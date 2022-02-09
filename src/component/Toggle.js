import { useState } from "react";
import styled from "styled-components";
import Layout from "./Layout";

const Input = styled.input`
  all: unset;
  position: relative;
  display: block;
  align-items: center;
  width: 70px;
  height: 30px;
  margin-bottom: 20px;
  background: #aaa;
  border-radius: 40px;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: purple;
    transition: width 0.3s;
  }

  &:checked::before {
    width: 100%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    transform: translate(8%, -50%);
    transition: all 0.3s;
  }

  &:checked::after {
    left: calc(100% - 25px);
    transform: translate(-8%, -50%);
  }
`;

const Label = styled.label`
  text-align: center;
`;

const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const onToggle = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Layout title="Toggle">
      <Input
        id="toggle-btn"
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      <Label htmlFor="toggle-btn">Toggle Switch {checked ? "ON" : "OFF"}</Label>
    </Layout>
  );
};

export default Toggle;

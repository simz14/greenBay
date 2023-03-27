import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 25px;
  margin: 1rem 0;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  width: 85%;
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
  @media (max-width: 700px) {
    padding: 5px 0 5px 20px;
    font-size: 13px;
    border-radius: 5px;
    width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 11px;
    margin: 0.5rem 0px;
    width: 100%;
    height: 2rem;
  }
`;
const Icon = styled.div`
  position: absolute;
  top: 35%;
  left: 0.3rem;
  @media (max-width: 700px) {
    top: 30%;
    & svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
  @media (max-width: 400px) {
    top: 20%;

    & svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
`;

const Input = ({ onChange, onBlur, value, type, placeholder, icon }) => {
  return (
    <InputWrapper>
      {icon && <Icon>{icon}</Icon>}
      <StyledInput
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;

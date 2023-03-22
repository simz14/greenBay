import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: 16px;
  max-width: 20rem;
  width: 100%;
  color: white;
  padding: 6px 12px;
  border: 1px solid;
  line-height: 1.5;
  background-color: #73c69c;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background-color: #50856b;
    transition: 0.5s ease;
  }
  @media (max-width: 510px) {
    font-size: 10px;
  }
`;

const Button = ({ buttonName, onClick, disabled }) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={onClick} disabled={disabled}>
        {buttonName}
      </StyledButton>
    </ButtonWrapper>
  );
};
export default Button;

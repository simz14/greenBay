import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 16;
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
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #50856b;
    transition: 0.5s ease;
  }
  @media (max-width: 510px) {
    font-size: x-small;
  }
`;

const Button = ({ buttonName, onClick, disabled }) => {
  return (
    <div>
      <StyledButton onClick={onClick} disabled={disabled}>
        {buttonName}
      </StyledButton>
    </div>
  );
};
export default Button;

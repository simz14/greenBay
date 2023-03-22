import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  @keyframes animate {
    0% {
      border-radius: 25px;
      box-shadow: 0 0 0 0 rgb(115, 198, 156);
    }
    40% {
      border-radius: 25px;
      box-shadow: 0 0 0 20px rgba(255, 26, 67, 0);
    }
    80% {
      border-radius: 25px;
      box-shadow: 0 0 0 20px rgba(255, 206, 67, 0);
    }
    100% {
      border-radius: 25px;
      box-shadow: 0 0 0 rgba(255, 206, 67, 0);
    }
  }
  & .pulsing {
    z-index: 99;
    position: relative;
    animation: animate 3s linear infinite;
  }
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

const Button = ({ buttonName, onClick, disabled, pulsing }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (pulsing) {
      ref.current.classList.add("pulsing");
    }
  }, []);

  console.log(ref);
  return (
    <ButtonWrapper>
      <StyledButton ref={ref} onClick={onClick} disabled={disabled}>
        {buttonName}
      </StyledButton>
    </ButtonWrapper>
  );
};
export default Button;

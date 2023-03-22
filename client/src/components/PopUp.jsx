import React, { useEffect } from "react";
import styled from "styled-components";

const SuccessBox = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: black;
  color: white;
  display: flex;
  justify-self: center;
  align-self: center;
  border-radius: 15px;
  padding: 1rem;
  @keyframes myAnimation {
    0% {
      opacity: 1;
      transform: rotateX(90deg);
    }
    50% {
      opacity: 0.8;
      transform: rotateX(0deg);
    }
    100% {
      display: none;
      opacity: 0;
      transform: rotateX(90deg);
    }
  }
  animation-name: myAnimation;
  animation-duration: 5000ms;
  animation-fill-mode: forwards;
`;

const PopUp = ({ show, showHandler, title }) => {
  useEffect(() => {
    setTimeout(() => {
      showHandler(false);
    }, 5000);
  }, [show]);

  return (
    <>
      {show && (
        <SuccessBox>
          <h3>{title}</h3>
        </SuccessBox>
      )}
    </>
  );
};

export default PopUp;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const StyledButton = styled.button`
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
    font-size: x-small;
  }
`;

const Button = ({ buttonName, onClick, itemId }) => {
  const { setCartItems, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const clickHandler = () => {
    let toAdd = true;
    cartItems.map((item) => {
      if (itemId && item.id === itemId) {
        toAdd = false;
      }
    });
    if (toAdd) {
      onClick();
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (itemId && item.id === itemId) {
            item.amount += 1;
          }
          return item;
        })
      );
      alert("Item was added to the cart!");
    }
  };
  return (
    <div>
      <StyledButton
        onClick={() => {
          clickHandler();
        }}
      >
        {buttonName}
      </StyledButton>
    </div>
  );
};
export default Button;

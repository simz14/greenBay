import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../../context/CartContext";

const StyledButton = styled.button`
  font-size: 10px;
  width: 100%;
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
  @media (max-width: 550px) {
    padding: 4px 10px;
  }
`;

const ButtonProduct = ({ buttonName, onClick, itemId }) => {
  const { setCartItems, cartItems } = useContext(CartContext);

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
export default ButtonProduct;

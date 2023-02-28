import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const CartWrapper = styled.div`
  display: grid;
  position: fixed;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  background-color: #ffffff;
  justify-self: end;
  top: 5rem;
  padding: 1rem;

  width: 25rem;
  height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;

  @media (max-width: 510px) {
    padding: 0.5rem;
  }
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & img {
    height: 10rem;
  }
`;

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartWrapper>
      {cartItems.length < 1 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => {
          return (
            <ProductWrapper key={item.id * Math.random()}>
              <div>
                <img src={item.images[0]} />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </ProductWrapper>
          );
        })
      )}
    </CartWrapper>
  );
};

export default Cart;

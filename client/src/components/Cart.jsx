import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import emptyCart from "../assets/empty.gif";

const CartWrapper = styled.div`
  display: grid;
  position: fixed;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  background-color: #fbfbfb;
  justify-self: end;
  top: 5rem;
  padding: 1rem;
  width: 25rem;
  justify-content: center;
  height: 36rem;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  & img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 510px) {
    padding: 0.5rem;
  }
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  & img {
    height: 10rem;
  }
`;

const EmptyCartWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartWrapper>
      {cartItems.length < 1 ? (
        <EmptyCartWrapper>
          <p>Your cart is empty</p>
          <img src={emptyCart} />
        </EmptyCartWrapper>
      ) : (
        cartItems.map((item) => {
          return (
            <ProductWrapper key={item.id * Math.random()}>
              <div>
                <img src={item.images[0]} />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.price + "€"}</p>
                <select onChange={(e) => (item.amount = e.target.value)}>
                  <option value={item.amount}>{item.amount}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </ProductWrapper>
          );
        })
      )}
    </CartWrapper>
  );
};

export default Cart;

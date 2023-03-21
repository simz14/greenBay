import React, { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import emptyCart from "../../assets/empty.gif";
import { getTotal } from "../../utils/getTotal";
import Button from "../Button";
import CartItem from "../../screens/Cart/components/CartItem";

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
  width: 50%;
  justify-content: center;
  height: 36rem;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  & img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 750px) {
    width: 75%;
  }
  @media (max-width: 510px) {
    padding: 0.5rem;
    width: 95%;
  }
`;

const EmptyCartWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  justify-content: space-evenly;
  @media (max-width: 550px) {
    & img {
      height: 15rem;
    }
  }
  @media (max-width: 400px) {
    & img {
      height: 13rem;
    }
  }
`;
const TotalWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-content: center;
  justify-content: space-evenly;
  & div {
    align-self: center;
  }
`;

const CartComponent = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartWrapper>
      {cartItems && cartItems.length < 1 ? (
        <EmptyCartWrapper>
          <p>Your cart is empty</p>
          <img src={emptyCart} />
        </EmptyCartWrapper>
      ) : (
        <div>
          {cartItems &&
            cartItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          <TotalWrapper>
            <h2>Total:{getTotal(cartItems)}€</h2>
            <Button
              buttonName={"Continue to cart"}
              onClick={() => navigate("/cart")}
            />
          </TotalWrapper>
        </div>
      )}
    </CartWrapper>
  );
};

export default CartComponent;

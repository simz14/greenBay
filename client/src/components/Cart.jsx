import React, { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import emptyCart from "../assets/empty.gif";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getTotal } from "../utils/getTotal";
import { BiX } from "react-icons/bi";
import Button from "../components/Button";

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 1rem;
`;
const ImageWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const EmptyCartWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  justify-content: space-evenly;
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

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const changeHandle = (itemId, amount) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemId) {
          item.amount = amount;
        }
        return item;
      })
    );
  };

  const removeHandle = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

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
              return (
                <ProductWrapper key={item.id * Math.random()}>
                  <ImageWrapper>
                    <img src={item.thumbnail} />
                  </ImageWrapper>
                  <div>
                    <p>{item.title}</p>
                    <p>{item.price + "€"}</p>
                    <FormControl
                      id="demo-simple-select-label"
                      sx={{ maxWidth: 100 }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel>Amount</InputLabel>
                      <Select
                        value={item.amount}
                        label={item.amount}
                        onChange={(e) => changeHandle(item.id, e.target.value)}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <IconWrapper onClick={() => removeHandle(item.id)}>
                    <BiX />
                  </IconWrapper>
                </ProductWrapper>
              );
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

export default Cart;

import React, { useContext } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BiX } from "react-icons/bi";

import { CartContext } from "../../../context/CartContext";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  justify-content: flex-start;

  @media (max-width: 1000px) {
    & p {
      font-size: 14px;
    }
  }
  &.productContent {
    display: flex;
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
  & img {
    object-fit: cover;
    height: 8rem;
    width: 100%;
  }
  @media (max-width: 550px) {
    & img {
      height: 7rem;
    }
  }
  @media (max-width: 400px) {
    & img {
      height: 8rem;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

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
    <ProductWrapper key={item.id}>
      <ImageWrapper>
        <img src={item.thumbnail} />
      </ImageWrapper>
      <div>
        <p>{item.title}</p>
        <p>{item.price + "€"}</p>
        <FormControl
          id="demo-simple-select-label"
          sx={{ maxWidth: 100 }}
          size="13px"
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
};

export default CartItem;

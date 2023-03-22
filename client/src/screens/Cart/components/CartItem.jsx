import React, { useContext } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BiX } from "react-icons/bi";

import { CartContext } from "../../../context/CartContext";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.5rem;
  padding: 1rem;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(115 198 156);
  align-items: center;
  justify-items: center;

  @media (max-width: 1000px) {
    & p {
      font-size: 14px;
    }
  }
  @media (max-width: 550px) {
    & p {
      font-size: 10px;
    }
  }
  &.productContent {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.p`
  display: grid;
  grid-column: 3/5;
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
  & img {
    border-radius: 5px;
    min-width: 100%;
    max-width: 100%;
    min-height: 5rem;
    max-height: 5rem;
    object-fit: cover;
    margin: 0;
    overflow: hidden;
    cursor: pointer;
  }
`;

const StyledFormControl = styled(FormControl)`
  display: grid;
  grid-column: 5/7;
  & .MuiOutlinedInput-input {
    padding: 8px;
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
      </ImageWrapper>{" "}
      <Title>{item.title}</Title>
      <StyledFormControl id="demo-simple-select-label" fullWidth>
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
      </StyledFormControl>
      <p>{item.price + "€"}</p>
      <IconWrapper onClick={() => removeHandle(item.id)}>
        <BiX />
      </IconWrapper>
    </ProductWrapper>
  );
};

export default CartItem;

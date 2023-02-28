import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const ProductWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  justify-content: center;
  display: grid;
`;

const ProductImage = styled.img`
  height: 10rem;
`;

const Product = ({ item }) => {
  const { setCartItems } = useContext(CartContext);
  return (
    <ProductWrapper onClick={() => setCartItems((prev) => [...prev, item])}>
      <ProductImage src={item.images[0]} />
      <p>{item.price + "€"}</p>
      <p>{item.title}</p>
    </ProductWrapper>
  );
};

export default Product;

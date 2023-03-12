import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../../context/CartContext";
import ButtonProduct from "./ButtonProduct";

const ProductWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  justify-content: center;
  align-content: space-between;
  display: grid;
  max-height: 25rem;
`;

const ProductImage = styled.img`
  height: 10rem;
  width: 10rem;
  object-fit: contain;
`;

const Product = ({ item }) => {
  const { setCartItems } = useContext(CartContext);

  const handleClick = () => {
    setCartItems((prev) => [...prev, { ...item, amount: 1 }]);
  };

  return (
    <ProductWrapper>
      <ProductImage src={item.thumbnail} />
      <p>{item.title}</p>
      <p>{item.price + "€"}</p>
      <ButtonProduct
        itemId={item.id}
        buttonName={"Add to cart"}
        onClick={handleClick}
      />
    </ProductWrapper>
  );
};

export default Product;

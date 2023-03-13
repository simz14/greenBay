import React from "react";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

const ProductWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.59);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Remove = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  cursor: pointer;
`;
const ProductInfoWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
`;
const ItemsImageWrapper = styled.div`
  & img {
    width: 20rem;
    object-fit: contain;
    height: 20rem;
  }
`;
const ItemInfo = styled.div``;

const ProductInfo = ({ item, setShow }) => {
  const { image, title, description, price } = item;

  return (
    <ProductWrapper>
      <Remove onClick={setShow}>
        <BiX size="2em" />
      </Remove>
      <ProductInfoWrapper>
        <ItemsImageWrapper>
          <img src={image} />
        </ItemsImageWrapper>
        <ItemInfo>
          <h3>{title}</h3>
          <p>{description}</p>
          <h2>{price + "€"}</h2>
        </ItemInfo>
      </ProductInfoWrapper>
    </ProductWrapper>
  );
};

export default ProductInfo;

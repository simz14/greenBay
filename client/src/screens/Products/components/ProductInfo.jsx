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
const Remove = styled.div``;
const ProductInfoWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
`;

const StyledIcon = styled(BiX)`
  display: flex;
  width: 1rem;
  height: 1rem;
  top: 0;
  justify-self: end;
  position: absolute;
  right: 0rem;
  padding: 0.2rem;
  z-index: 9;
  cursor: pointer;
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
      <ProductInfoWrapper>
        <Remove onClick={setShow}>
          <StyledIcon size="2em" />
        </Remove>
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

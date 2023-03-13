import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../../context/CartContext";
import { PurchasesContext } from "../../../context/PurchasesContext";
import ButtonProduct from "./ButtonProduct";

const ProductZoomWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.59);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductBox = styled.div`
  background-color: #ffffff;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 5rem;
`;

const ProductWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  justify-content: center;
  align-content: space-between;
  display: grid;
  max-height: 25rem;
  cursor: pointer;
`;

const ProductImage = styled.img`
  height: 10rem;
  width: 10rem;
  object-fit: contain;
`;

const Product = ({ item }) => {
  const { setCartItems } = useContext(CartContext);
  const [showProduct, setShowProduct] = useState(false);

  const handleClickAdd = () => {
    setCartItems((prev) => [...prev, { ...item, amount: 1 }]);
  };

  const hadnleClickProduct = () => {
    setShowProduct((prev) => !prev);
  };

  return (
    <ProductWrapper onClick={hadnleClickProduct}>
      {showProduct && (
        <ProductZoomWrapper>
          <ProductBox>
            <ProductImage src={item.thumbnail} />
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price + "€"}</p>
            <ButtonProduct
              itemId={item.id}
              buttonName={"Add to cart"}
              onClick={handleClickAdd}
            />
          </ProductBox>
        </ProductZoomWrapper>
      )}
      <ProductImage src={item.thumbnail} />
      <p>{item.title}</p>
      <p>{item.price + "€"}</p>
      <ButtonProduct
        itemId={item.id}
        buttonName={"Add to cart"}
        onClick={handleClickAdd}
      />
    </ProductWrapper>
  );
};

export default Product;

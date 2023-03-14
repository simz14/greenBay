import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../../context/CartContext";
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
  justify-content: flex-start;

  max-height: 25rem;
  cursor: pointer;
  gap: 0.5rem;
  @media (max-width: 1000px) {
    & p {
      font-size: 10px;
    }
  }
  &.productContent {
    display: flex;
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  border-radius: 5px;
  height: 8rem;
  width: 100%;
  object-fit: cover;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 550px) {
    height: 5rem;
  }
  @media (max-width: 400px) {
    height: 4rem;
  }
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
    <ProductWrapper>
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
      <ProductImage onClick={hadnleClickProduct} src={item.thumbnail} />
      <div className="productContent">
        <p>{item.title}</p>
        <p>{item.price + "€"}</p>
        <ButtonProduct
          itemId={item.id}
          buttonName={"Add"}
          onClick={handleClickAdd}
        />
      </div>
    </ProductWrapper>
  );
};

export default Product;

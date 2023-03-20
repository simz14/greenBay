import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CartContext } from "../../context/CartContext";

import CartItem from "./components/CartItem";
import { getTotal } from "../../utils/getTotal";
import Button from "../../components/Button";
import { PurchasesContext } from "../../context/PurchasesContext";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const CartContainer = styled.div`
  width: 100%;
`;
const ItemsWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
  padding: 1rem;
`;

const TotalWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: space-between;
  border: 1.5px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 23px;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
  height: 100%;
  width: 50%;
  justify-self: center;
`;

const InfoWrapper = styled.div`
  border-bottom: 1px solid gray;
`;

const CartScreen = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { purchases, setPurchases } = useContext(PurchasesContext);

  const handleClickOrder = () => {
    setPurchases((prev) => [...prev, ...cartItems]);
    setCartItems([]);
  };

  return (
    <CartContainer>
      <Header cartItems={cartItems} />
      <Container>
        <div>
          {cartItems.length < 1 ? (
            <h2>Your cart is empty</h2>
          ) : (
            <ContentWrapper>
              <ItemsWrapper>
                <InfoWrapper>
                  <h2>Your cart</h2>
                </InfoWrapper>
                {cartItems &&
                  cartItems.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                  })}
              </ItemsWrapper>

              <TotalWrapper>
                <h2>Total: {getTotal(cartItems)}€</h2>
                <Button
                  onClick={() => handleClickOrder()}
                  buttonName={"Order"}
                />
              </TotalWrapper>
            </ContentWrapper>
          )}
        </div>
      </Container>
      <Footer />
    </CartContainer>
  );
};

export default CartScreen;

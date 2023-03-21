import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { CartContext } from "../../context/CartContext";
import CartItem from "./components/CartItem";
import { getTotal } from "../../utils/getTotal";
import Button from "../../components/Button";
import { PurchasesContext } from "../../context/PurchasesContext";
import EmptyBasket from "../../assets/emptyBasket.webp";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartContainer = styled.div`
  width: 100%;
`;

const EmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    height: 60%;
    width: 60%;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    & h2 {
      font-size: 15px;
    }
  }
`;
const ItemsWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
  padding: 1rem;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  border-bottom: 1px solid rgb(115 198 156);
`;

const CartScreen = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { setPurchases } = useContext(PurchasesContext);

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
            <EmptyCartWrapper>
              <h2>Your cart is empty</h2>
              <img src={EmptyBasket} />
            </EmptyCartWrapper>
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
                <Total>
                  <h2>Total: </h2>
                  <p>{getTotal(cartItems)}€</p>
                </Total>

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

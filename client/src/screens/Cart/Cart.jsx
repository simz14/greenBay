import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { CartContext } from "../../context/CartContext";
import CartItem from "./components/CartItem";
import { getTotal } from "../../utils/getTotal";
import Button from "../../components/Button";
import EmptyBasket from "../../assets/emptyBasket.webp";
import { useNavigate } from "react-router";

const CartWrapper = styled.div`
  top: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  border-bottom: 1px solid #cfcaca;
`;

const CartScreen = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Container>
      <Header cartItems={cartItems} />
      <CartWrapper>
        {cartItems.length < 1 ? (
          <EmptyCartWrapper>
            <h2>Your cart is empty</h2>
            <img src={EmptyBasket} />
          </EmptyCartWrapper>
        ) : (
          <ContentWrapper>
            <ItemsWrapper>
              <InfoWrapper>
                <h2 className="underline">Your cart:</h2>
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

              <Button onClick={() => navigate("/order")} buttonName={"Order"} />
            </TotalWrapper>
          </ContentWrapper>
        )}
      </CartWrapper>

      <Footer />
    </Container>
  );
};

export default CartScreen;

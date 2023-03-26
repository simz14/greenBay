import React, { useContext } from "react";
import styled from "styled-components";
import { PurchasesContext } from "../../../context/PurchasesContext";
import goShopping from "../../../assets/goShopping.avif";
import Button from "../../../components/Button";
import { useNavigate } from "react-router";
import PorductInfo from "../../../components/ProductInfo";

const PurchasesContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 1rem;
  & .itemsWrapper {
    display: grid;
    gap: 1rem;
  }
`;

const InfoText = styled.h2`
  border-bottom: 1px solid gray;
  margin-top: 0;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const NoPurchasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    max-width: 80%;
    max-height: 80%;
    min-height: 10rem;
    min-width: 10rem;
  }
  & h1 {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 500px) {
    & h1 {
      font-size: 17px;
    }
  }
`;

const PurchaseWrapper = styled.div`
  display: grid;
  gap: 1rem;
  & .time {
    border-bottom: 1px solid #cfcaca;
  }
  @media (max-width: 500px) {
    & .time {
      font-size: 12px;
    }
  }
`;

const PurchaseInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #73c69c3d;
  border-radius: 15px;
  padding: 1rem;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const Purchases = () => {
  const { purchases } = useContext(PurchasesContext);
  const navigate = useNavigate();

  return (
    <PurchasesContainer>
      {purchases.length > 0 ? (
        <div className="itemsWrapper">
          <InfoText>Here you can find all your purchases</InfoText>
          {purchases.map((item) => {
            return (
              <PurchaseWrapper key={item.time}>
                <p className="time">{item.time}</p>
                <PurchaseInfo>
                  <div>
                    <h2>Shipping adress</h2>
                    <ul>
                      <li>
                        {item.name} {item.lastName}
                      </li>
                      <li>{item.adress}</li>
                      <li>{item.city}</li>
                      <li>{item.country}</li>
                    </ul>
                  </div>
                  <div>
                    <h2>Shiping method</h2>
                    <ul>
                      <li>{item.shipping.type}</li>
                      <li>{item.shipping.carriers}</li>
                      <li>{item.shipping.cost}€</li>
                    </ul>
                  </div>
                  <div>
                    <h2>Payment method</h2>
                    <ul>
                      <li>{item.payment.method}</li>
                    </ul>
                  </div>
                </PurchaseInfo>
                {item.products.map((product) => {
                  return <PorductInfo item={product} key={product.id} />;
                })}
              </PurchaseWrapper>
            );
          })}
        </div>
      ) : (
        <NoPurchasesWrapper>
          <h1>No purchases yet!</h1>
          <img src={goShopping} />
          <Button
            buttonName={"Go shopping"}
            onClick={() => navigate("/products")}
            pulsing={true}
          ></Button>
        </NoPurchasesWrapper>
      )}
    </PurchasesContainer>
  );
};
export default Purchases;

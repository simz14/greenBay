import React, { useContext } from "react";
import styled from "styled-components";
import { PurchasesContext } from "../../../context/PurchasesContext";
import goShopping from "../../../assets/goShopping.avif";
import Button from "../../../components/Button";
import { useNavigate } from "react-router";

const PurchasesContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 1rem;
  & .itemsWrapper {
    display: grid;
    gap: 1rem;
  }
`;
const PurchaseItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  & img {
    display: grid;
    grid-column: 1/3;
    min-height: 5rem;
    min-width: 5rem;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 15px;
  }
  @media (max-width: 700px) {
    & p {
      font-size: 12px;
    }
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
              <PurchaseItem key={item.id}>
                <img src={item.thumbnail} />
                <p>{item.title}</p>
                <p>{item.price + "€"}</p>
                <p>{item.amount + "x"}</p>
              </PurchaseItem>
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

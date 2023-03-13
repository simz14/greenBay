import React, { useContext } from "react";
import styled from "styled-components";
import { PurchasesContext } from "../../../context/PurchasesContext";

const PurchasesContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 1rem;
`;
const PurchaseItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  & img {
    width: 20rem;
  }
`;
const InfoText = styled.h2`
  border-bottom: 1px solid gray;
  margin-top: 0;
`;

const Purchases = () => {
  const { purchases } = useContext(PurchasesContext);

  return (
    <PurchasesContainer>
      {purchases.length > 0 ? (
        <div>
          <InfoText>Here you can find all your purchases</InfoText>
          {purchases.map((item) => {
            return (
              <PurchaseItem key={item.id}>
                <div>
                  <img src={item.thumbnail} />
                </div>
                <p>{item.title}</p>
                <p>{item.price + "€"}</p>
                <p>{item.amount + "x"}</p>
              </PurchaseItem>
            );
          })}
        </div>
      ) : (
        <h1>No purchases yet!</h1>
      )}
    </PurchasesContainer>
  );
};
export default Purchases;

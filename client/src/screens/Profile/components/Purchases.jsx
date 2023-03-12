import React, { useContext } from "react";
import styled from "styled-components";
import { PurchasesContext } from "../../../context/PurchasesContext";

const PurchasesContainer = styled.div``;

const Purchases = () => {
  const { purchases } = useContext(PurchasesContext);
  return (
    <PurchasesContainer>
      {purchases ? (
        purchases.map((item) => {
          return (
            <div>
              <div>
                <img src={item.thumbnail} />
              </div>
              <p>{item.title}</p>
              <p>{item.price + "€"}</p>
            </div>
          );
        })
      ) : (
        <h1>No purchases yet!</h1>
      )}
    </PurchasesContainer>
  );
};
export default Purchases;

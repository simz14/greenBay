import React from "react";
import styled from "@emotion/styled";

const PorductInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;

  & .productData {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column: 2/5;
    gap: 1rem;
  }

  & img {
    display: grid;
    min-height: 5rem;
    min-width: 5rem;
    max-width: 12rem;
    max-height: 12rem;
    width: 100%;
    height: 8rem;
    border-radius: 15px;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    & .productData {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }

  @media (max-width: 500px) {
    & p {
      font-size: 13px;
    }
  }
`;

const PorductInfo = ({ item }) => {
  return (
    <PorductInfoWrapper>
      <img src={item.thumbnail} />
      <div className="productData">
        <p>{item.title}</p>
        <p>{item.price}€</p>
        <p>{item.amount}x</p>
      </div>
    </PorductInfoWrapper>
  );
};

export default PorductInfo;

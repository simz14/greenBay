import React, { useContext } from "react";
import styled from "styled-components";
import { SellingItemsContext } from "../../../context/SellingItems";
import earnMoney from "../../../assets/earnMoney.avif";
import Button from "../../../components/Button";
import { useNavigate } from "react-router";

const SellingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 16rem;
  text-align: center;

  & p {
    overflow-wrap: anywhere;
  }
  @media (max-width: 1000px) {
    & p {
      font-size: 14px;
    }
  }
  & img {
    max-width: 100%;
    max-height: 100%;
    min-height: 8rem;
    min-width: 8rem;
    border-radius: 15px;
  }
`;
const NoSellingItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & img {
    max-width: 100%;
    max-height: 100%;
    min-height: 8rem;
    min-width: 8rem;
  }

  @media (max-width: 600px) {
    & h2 {
      font-size: 14px;
    }
  }
  @media (max-width: 400px) {
    & h2 {
      font-size: 11px;
    }
  }
`;
const Selling = () => {
  const { sellingItems } = useContext(SellingItemsContext);
  const navigate = useNavigate();

  return (
    <>
      {sellingItems.length > 0 ? (
        <SellingContainer>
          {sellingItems.map((item) => {
            return (
              <ProductWrapper>
                <img src={item.thumbnail} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price + "€"}</p>
              </ProductWrapper>
            );
          })}
        </SellingContainer>
      ) : (
        <NoSellingItemsWrapper>
          <div>
            <h2>You are currently not selling any products </h2>
            <h2>Start now </h2>
            <Button
              onClick={() => navigate("/sell")}
              buttonName={"Sell an item"}
              pulsing={true}
            />
          </div>
          <img src={earnMoney} />
        </NoSellingItemsWrapper>
      )}
    </>
  );
};
export default Selling;

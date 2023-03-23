import React from "react";
import styled from "styled-components";
import shippingImg from "../../../assets/shipping.svg";
import Button from "../../../components/Button";
import visa from "../../../assets/visa.svg";
import paypal from "../../../assets/paypal.svg";
import mastercard from "../../../assets/mastercard.svg";

const YourDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & .shippingImg {
    grid-column: 2/3;
  }
  & img {
    max-width: 80%;
    max-height: 100%;
    min-height: 8rem;
    min-width: 8rem;
  }

  & .buttonContinue {
    margin-top: 1rem;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: auto;
    & .shippingImg {
      display: none;
    }
  }
`;

const ShippingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: 1/3;
  justify-self: center;
  margin-top: 3rem;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const ShippingOptionWrapper = styled.div`
  display: grid;
  border: 1.5px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 23px;
  backdrop-filter: blur(10px);
  border-radius: 15px;

  width: 80%;
  margin: 0.5rem;
  font-size: 13px;
  justify-self: center;
  padding: 1rem;
  align-content: flex-start;
  cursor: pointer;
  transition: 0.5s ease;
  & .clicked {
    box-shadow: #50856b 0px 7px 23px;
  }
  &:hover {
    transition: 0.5s ease;
    box-shadow: #50856b 0px 7px 23px;
  }
`;

const PaymentWrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  & .optionWrapper {
    display: flex;
    flex-direction: column;
    border: 1.5px solid rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 23px;
    backdrop-filter: blur(10px);
    border-radius: 15px;
    transition: 0.5s ease;
    cursor: pointer;
    padding: 1rem;
    & img {
      max-width: 20%;
      max-height: 100%;
      min-height: 3rem;
      min-width: 3rem;
      border-radius: 5px;
    }
    & .cards {
      display: flex;
      justify-content: space-evenly;
    }
    & p {
      display: flex;
      justify-content: center;
      font-weight: 600;
    }
    &:hover {
      transition: 0.5s ease;
      box-shadow: #50856b 0px 7px 23px;
    }
  }
`;

const ShippingPage = ({ setShowShipping, setShowSummary }) => {
  const handleClickContinue = () => {
    setShowShipping(false);
    setShowSummary(true);
  };

  return (
    <YourDataWrapper>
      <ShippingWrapper>
        <ShippingOptionWrapper>
          <h3>Standard: 5-7 Business Days</h3>
          <ul>
            <li>Cost: $4.99 or FREE on orders above $99</li>
            <li>Carriers: FedEx, FedEx SmartPost, LaserShip, DHL</li>
          </ul>
        </ShippingOptionWrapper>
        <ShippingOptionWrapper>
          <h3>Express: 3-Business Days</h3>
          <ul>
            <li>Cost: $9.99</li>
            <li>Carrier: FedEx</li>
          </ul>
        </ShippingOptionWrapper>
        <ShippingOptionWrapper className="third">
          <h3>Express: 1-2-Business Days</h3>
          <ul>
            <li>Cost: $19.99</li>
            <li>Carrier: FedEx</li>
          </ul>
        </ShippingOptionWrapper>
      </ShippingWrapper>
      <PaymentWrapper>
        <h2>Payment options</h2>
        <div className="optionWrapper">
          <div className="cards">
            <img src={visa} />
            <img src={paypal} />
            <img src={mastercard} />
          </div>
          <p>Pay by credit card</p>
        </div>
        <div className="optionWrapper">
          <p>Payment on delivery</p>
        </div>
        <div className="buttonContinue">
          <Button
            onClick={() => handleClickContinue()}
            buttonName={"Continue"}
          />
        </div>
      </PaymentWrapper>

      <div className="shippingImg">
        <img src={shippingImg} />
      </div>
    </YourDataWrapper>
  );
};

export default ShippingPage;

import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import orderOnline from "../../../assets/orderOnline.avif";
import Button from "../../../components/Button";
import { validateOrderData } from "../../../utils/validation";

const YourDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & img {
    max-width: 100%;
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
    max-width: 70%;
    margin: auto;
    & .orderOnlineImg {
      display: none;
    }
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: 3rem;
  gap: 1rem;
`;

const ErrorMsg = styled.p`
  color: red;
`;

const YourDataPage = ({
  setShowYourData,
  setShowShipping,
  setOrderData,
  orderData,
}) => {
  const [name, setName] = useState(orderData.name);
  const [lastName, setLastName] = useState(orderData.lastName);
  const [adress, setAdress] = useState(orderData.adress);
  const [city, setCity] = useState(orderData.city);
  const [country, setCountry] = useState(orderData.country);
  const [errorMsg, setErrorMsg] = useState("");

  const handleClickContinue = () => {
    try {
      validateOrderData(name, lastName, adress, city, country);
      setShowYourData(false);
      setShowShipping(true);
      setOrderData({ name, lastName, adress, city, country });
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  return (
    <YourDataWrapper>
      <InputsWrapper>
        <div>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            label={"Name"}
            defaultValue={name}
          />
          <TextField
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            id="standard-basic"
            label="Last name"
            defaultValue={lastName}
          />
        </div>
        <TextField
          onChange={(e) => {
            setAdress(e.target.value);
          }}
          id="standard-basic"
          label="Adress"
          defaultValue={adress}
        />{" "}
        <TextField
          onChange={(e) => {
            setCity(e.target.value);
          }}
          id="standard-basic"
          label="City"
          defaultValue={city}
        />
        <TextField
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          id="standard-basic"
          label="Country"
          defaultValue={country}
        />
        {errorMsg.length > 0 && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <div className="buttonContinue">
          <Button
            onClick={() => handleClickContinue()}
            buttonName={"Continue"}
          />
        </div>
      </InputsWrapper>
      <div className="orderOnlineImg">
        <img src={orderOnline} />
      </div>
    </YourDataWrapper>
  );
};

export default YourDataPage;

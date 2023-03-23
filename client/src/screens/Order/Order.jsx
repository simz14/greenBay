import React, { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { CartContext } from "../../context/CartContext";
import { IoIosArrowForward } from "react-icons/io";

import YourDataPage from "./components/YourDataPage";
import ShippingPage from "./components/ShippingPage";
import SummaryPage from "./components/SummaryPage";

const StepsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #c6b7b7;
  & .step {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Order = () => {
  const [showYourData, setShowYourData] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [orderData, setOrderData] = useState({});

  const { cartItems } = useContext(CartContext);

  const handleClickStep = (page) => {
    if (orderData.name) {
      if (page === "data") {
        setShowYourData(true);
        setShowShipping(false);
        setShowSummary(false);
      }
      if (page === "shipping") {
        setShowYourData(false);
        setShowShipping(true);
        setShowSummary(false);
      }
      if (orderData.shipping && orderData.payment) {
        if (page === "summary") {
          setShowYourData(false);
          setShowShipping(false);
          setShowSummary(true);
        }
      }
    }
  };
  console.log(orderData);
  return (
    <div>
      <Header cartItems={cartItems} />
      <Container>
        <StepsWrapper>
          <div
            onClick={() => {
              handleClickStep("data");
            }}
            className="step"
          >
            <p>Your data</p>
            <IoIosArrowForward />
          </div>
          <div
            onClick={() => {
              handleClickStep("shipping");
            }}
            className="step"
          >
            <p>Shipping and payment</p> <IoIosArrowForward />
          </div>
          <div
            onClick={() => {
              handleClickStep("summary");
            }}
            className="step"
          >
            <p>Summary</p> <IoIosArrowForward />
          </div>
        </StepsWrapper>
        {showYourData && (
          <YourDataPage
            setShowYourData={setShowYourData}
            setShowShipping={setShowShipping}
            setOrderData={setOrderData}
            orderData={orderData}
          />
        )}

        {showShipping && orderData.name && (
          <ShippingPage
            setShowSummary={setShowSummary}
            setShowShipping={setShowShipping}
            setOrderData={setOrderData}
            orderData={orderData}
          />
        )}
        {showSummary && <SummaryPage orderData={orderData} />}
      </Container>
      <Footer />
    </div>
  );
};
export default Order;

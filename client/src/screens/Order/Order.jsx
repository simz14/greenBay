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
  const [userData, setUserData] = useState({});

  const { cartItems } = useContext(CartContext);

  const handleClickStep = (page) => {
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
    if (page === "summary") {
      setShowYourData(false);
      setShowShipping(false);
      setShowSummary(true);
    }
  };

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
            setUserData={setUserData}
            userData={userData}
          />
        )}

        {showShipping && (
          <ShippingPage
            setShowSummary={setShowSummary}
            setShowShipping={setShowShipping}
          />
        )}
        {showSummary && <SummaryPage />}
      </Container>
      <Footer />
    </div>
  );
};
export default Order;

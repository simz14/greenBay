import React from "react";
import styled from "styled-components";

const SummaryWrapper = styled.div``;

const SummaryPage = ({ orderData }) => {
  return (
    <SummaryWrapper>
      <div>
        <h2>Shipping adress</h2>
        <p>
          {orderData.name} {orderData.lastName}
        </p>
        <p>{orderData.adress}</p>
        <p>{orderData.city}</p>
        <p>{orderData.country}</p>
      </div>
      <div>
        <h2>Shiping method</h2>
        <p>{orderData.shipping.type}</p>
        <p>{orderData.shipping.carriers}</p>
      </div>
      <div>
        <h2>Payment method</h2>
        <p>{orderData.payment.method}</p>
      </div>
    </SummaryWrapper>
  );
};

export default SummaryPage;

import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import PorductInfo from "../../../components/ProductInfo";
import { CartContext } from "../../../context/CartContext";
import { getTotal } from "../../../utils/getTotal";

const SummaryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
  gap: 1rem;
`;

const OrderData = styled.div`
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;

  @media (max-width: 600px) {
    display: grid;
    grid-column: 1/3;
    font-size: 13px;
  }
`;

const DetailsWrapper = styled.div`
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
  height: fit-content;
  & .detail {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-column: 1/3;
    font-size: 13px;
  }
`;

const SummaryPage = ({ orderData }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <SummaryWrapper>
      <ItemsWrapper>
        {cartItems.map((item) => {
          return <PorductInfo key={item.id} item={item} />;
        })}
      </ItemsWrapper>

      <OrderData>
        <div>
          <h2>Shipping adress</h2>
          <ul>
            <li>
              {orderData.name} {orderData.lastName}
            </li>
            <li>{orderData.adress}</li>
            <li>{orderData.city}</li>
            <li>{orderData.country}</li>
          </ul>
        </div>
        <div>
          <h2>Shiping method</h2>
          <ul>
            <li>{orderData.shipping.type}</li>
            <li>{orderData.shipping.carriers}</li>
            <li>{orderData.shipping.cost}€</li>
          </ul>
        </div>
        <div>
          <h2>Payment method</h2>
          <ul>
            <li>{orderData.payment.method}</li>
          </ul>
        </div>
      </OrderData>

      <DetailsWrapper>
        <h3>Order details</h3>
        <div className="detail">
          <p>Subtotal:</p>
          <p>{getTotal(cartItems)}€</p>
        </div>
        <div className="detail">
          <p>Shipping:</p>
          <p>{orderData.shipping.cost}€</p>
        </div>
        <div className="detail">
          <p>Total:</p>
          <p>{orderData.shipping.cost + getTotal(cartItems)}</p>
        </div>
        <Button buttonName={"Order products"} />
      </DetailsWrapper>
    </SummaryWrapper>
  );
};

export default SummaryPage;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import PorductInfo from "../../../components/ProductInfo";
import { CartContext } from "../../../context/CartContext";
import { PurchasesContext } from "../../../context/PurchasesContext";
import { getTotal } from "../../../utils/getTotal";
import succesImg from "../../../assets/successOrder.svg";
import moment from "moment";

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

const SuccesInfo = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
  animation: smooth-appear 3s ease forwards;

  & .content {
    border-radius: 10px;
    border: 1.5px solid #ffffff;
    box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 15px;
    padding: 1rem;
  }

  @keyframes smooth-appear {
    to {
      top: 0px;
      bottom: 100%;
    }
  }
`;

const SummaryPage = ({ orderData }) => {
  const { name, lastName, adress, city, country, shipping, payment } =
    orderData;
  const { cartItems, setCartItems } = useContext(CartContext);
  const { setPurchases } = useContext(PurchasesContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectTime, setRedirectTime] = useState(10);

  const handleClickOrder = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setPurchases((prev) => [
        ...prev,
        {
          products: [...cartItems],
          time: moment
            .unix(String(Date.now() / 1000))
            .format("DD.MM.YYYY, h:mm:ss"),
          name: name,
          lastName: lastName,
          adress: adress,
          city: city,
          country: country,
          shipping: shipping,
          payment: payment,
        },
      ]);
      setCartItems([]);
    }, 10000);
    setInterval(() => {
      setRedirectTime((prev) => prev - 1);
    }, 1000);
  };

  return (
    <SummaryWrapper>
      {showSuccess && (
        <SuccesInfo>
          <div className="content">
            <h2>You order is being processed.</h2>
            <h3>Thank you for shopping at GreenBay!</h3>
            <img src={succesImg} />
            <p>You will be redirected back to products in {redirectTime}</p>
          </div>
        </SuccesInfo>
      )}
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
              {name} {lastName}
            </li>
            <li>{adress}</li>
            <li>{city}</li>
            <li>{country}</li>
          </ul>
        </div>
        <div>
          <h2>Shiping method</h2>
          <ul>
            <li>{shipping.type}</li>
            <li>{shipping.carriers}</li>
            <li>{shipping.cost}€</li>
          </ul>
        </div>
        <div>
          <h2>Payment method</h2>
          <ul>
            <li>{payment.method}</li>
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
        <Button
          onClick={() => handleClickOrder()}
          buttonName={"Order products"}
        />
      </DetailsWrapper>
    </SummaryWrapper>
  );
};

export default SummaryPage;

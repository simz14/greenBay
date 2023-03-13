import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import { CategoriesContext } from "../../context/CategoriesContext";
import { ProductsContext } from "../../context/ProductsContext";
import { UserContext } from "../../context/UserContext";
import shoppingImage from "../../assets/shoppingImage.png";
import CategoriesComp from "./components/Categories";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import TopProducts from "./components/TopProducts";

const HomeContainer = styled.div``;

const Description = styled.div`
  padding-right: 4rem;
  font-size: xx-large;
  font-weight: 700;
  align-self: self-start;
  & span {
    display: flex;
    font-size: large;
    font-weight: 100;
    margin-bottom: 1rem;
  }
  @media (max-width: 1000px) {
    padding-right: 0;
    font-size: x-large;
    & span {
      font-size: small;
    }
  }
  @media (max-width: 750px) {
    padding-right: 0;
    font-size: large;
    & span {
      font-size: smaller;
    }
  }
  @media (max-width: 550px) {
    padding-right: 0;
    font-size: small;
    & span {
      font-size: xx-small;
    }
  }
`;
const WelcomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    display: flex;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-self: self-end;
  height: 30rem;

  @media (max-width: 1000px) {
    & img {
      height: 20rem;
    }
  }
  @media (max-width: 750px) {
    & img {
      height: 15rem;
    }
  }
  @media (max-width: 550px) {
    & img {
      display: none;
    }
  }
`;

const GreenP = styled.h2`
  color: #73c69c;
`;

const WhyUsWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 5rem 0;

  & h2 {
    color: #73c69c;
    justify-self: center;
  }
`;
const ReasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

const ReasonsWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

const Home = () => {
  const { cartItems } = useContext(CartContext);
  const { categories } = useContext(CategoriesContext);
  const { products } = useContext(ProductsContext);
  const { username } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickCategory = () => {
    navigate("/products");
  };

  return (
    <HomeContainer>
      <Header cartItems={cartItems} />
      <Container>
        <WelcomeWrapper>
          <Description>
            <GreenP>Welcome to GreenBay</GreenP>
            <p>Best Place to Buy Everything</p>
            <span>
              At GreenBay you can buy clothes, houshold products and more
              anytime at one place.
            </span>
          </Description>

          <ImageWrapper>
            <img src={shoppingImage} />
          </ImageWrapper>
        </WelcomeWrapper>
        <h2>Shop our top categories</h2>
        <CategoriesComp />
        <WhyUsWrapper>
          <h2>Why choose us?</h2>
          <ReasonsWrapper>
            <ReasonWrapper>
              <TbTruckDelivery />
              <p>Free delivery</p>
            </ReasonWrapper>{" "}
            <ReasonWrapper>
              <FaRegHandshake />
              <p>Trusted platform</p>
            </ReasonWrapper>
            <ReasonWrapper>
              <AiOutlineFieldTime />
              <p>Here for you 24/7</p>
            </ReasonWrapper>
          </ReasonsWrapper>
        </WhyUsWrapper>
        <h2>Our top products</h2>
        <TopProducts />
      </Container>
      <Footer />
    </HomeContainer>
  );
};
export default Home;

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "../components/Container";
import styled from "styled-components";
import shoppingImage from "../assets/shoppingImage.png";
import Button from "../components/Button";

const LandingContainer = styled.div`
  width: 100%;
  justify-content: center;
`;
const Description = styled.div`
  padding-right: 4rem;
  font-family: sans-serif;
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

const Landing = () => {
  return (
    <LandingContainer>
      <Header />
      <Container>
        <WelcomeWrapper>
          <Description>
            <GreenP>Welcome to GreenBay</GreenP>
            <p>Best Place to Buy Everything</p>
            <span>
              At GreenBay you can buy clothes, houshold products and more
              anytime at one place.
            </span>
            <Button buttonName="Go Shopping" />
          </Description>

          <ImageWrapper>
            <img src={shoppingImage} />
          </ImageWrapper>
        </WelcomeWrapper>
      </Container>
      <Footer />
    </LandingContainer>
  );
};

export default Landing;

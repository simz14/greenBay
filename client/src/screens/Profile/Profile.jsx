import React, { useContext, useState } from "react";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { CartContext } from "../../context/CartContext";
import styled from "styled-components";
import ProfileSideBar from "./components/Sidebar";
import Account from "./components/Account";
import Selling from "./components/Selling";
import Purchases from "./components/Purchases";

const ProfileContainer = styled.div``;
const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1rem;
  margin-bottom: auto;

  @media (max-width: 800px) {
    & .links {
      display: grid;
      grid-column: 1/5;
      margin-bottom: 1rem;
    }
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-column: 2/5;
  @media (max-width: 800px) {
    grid-column: 1 / 5;
  }
  @media (max-width: 500px) {
    grid-column: 1 / 5;
  }
`;
const Profile = () => {
  const [showAccount, setShowAccount] = useState(true);
  const [showSelling, setShowSelling] = useState(false);
  const [showPurchases, setShowPurchases] = useState(false);
  const { cartItems } = useContext(CartContext);

  //have to fix this repeptition
  const handleClickAccount = () => {
    setShowAccount(true);
    setShowSelling(false);
    setShowPurchases(false);
  };

  const handleClickSelling = () => {
    setShowAccount(false);
    setShowSelling(true);
    setShowPurchases(false);
  };

  const handleClickPurchases = () => {
    setShowAccount(false);
    setShowSelling(false);
    setShowPurchases(true);
  };
  return (
    <ProfileContainer>
      <Header cartItems={cartItems} />
      <ProfileWrapper>
        <div className="links">
          <ProfileSideBar
            showAccount={handleClickAccount}
            showSelling={handleClickSelling}
            showPurchases={handleClickPurchases}
          />
        </div>
        <ContentWrapper>
          {showAccount && <Account />}
          {showSelling && <Selling />}
          {showPurchases && <Purchases />}
        </ContentWrapper>
      </ProfileWrapper>
      <Footer />
    </ProfileContainer>
  );
};
export default Profile;

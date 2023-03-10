import React, { useContext, useState } from "react";
import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CartContext } from "../../context/CartContext";
import styled from "styled-components";
import ProfileSideBar from "./components/Sidebar";
import Account from "./components/Account";
import Selling from "./components/Selling";

const ProfileContainer = styled.div``;
const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1rem;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-column: 2/5;
`;
const Profile = () => {
  const [showAccount, setShowAccount] = useState(true);
  const [showSelling, setShowSelling] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleClickAccount = () => {
    setShowAccount(true);
    setShowSelling(false);
  };

  const handleClickSelling = () => {
    setShowAccount(false);
    setShowSelling(true);
  };

  return (
    <ProfileContainer>
      <Header showAuth={false} cartItems={cartItems} />
      <Container>
        <ProfileWrapper>
          <div>
            <ProfileSideBar
              showAccount={handleClickAccount}
              showSelling={handleClickSelling}
            />
          </div>
          <ContentWrapper>
            {showAccount ? <Account /> : <Selling />}
          </ContentWrapper>
        </ProfileWrapper>
      </Container>
      <Footer />
    </ProfileContainer>
  );
};
export default Profile;

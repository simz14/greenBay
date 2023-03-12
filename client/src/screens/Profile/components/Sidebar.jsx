import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";

const SideContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const ProfileSideBar = ({ showAccount, showSelling, showPurchases }) => {
  return (
    <SideContainer>
      <Button onClick={showAccount} buttonName={"Account"} />
      <Button onClick={showSelling} buttonName={"Selling"} />
      <Button onClick={showPurchases} buttonName={"Purchases"} />
    </SideContainer>
  );
};
export default ProfileSideBar;

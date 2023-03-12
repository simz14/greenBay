import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";

const SideContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const ProfileSideBar = ({ showAccount, showSelling }) => {
  return (
    <SideContainer>
      <Button onClick={showAccount} buttonName={"Account"} />
      <Button onClick={showSelling} buttonName={"Selling"} />
    </SideContainer>
  );
};
export default ProfileSideBar;

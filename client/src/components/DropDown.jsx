import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DropWrapper = styled.div`
  display: grid;
  position: fixed;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  background-color: #ffffff;
  justify-self: end;
  top: 5rem;
  padding: 1rem;

  @media (max-width: 510px) {
    padding: 0.5rem;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-size: small;
  font-weight: 600;
  color: #252525;
  padding: 0.5rem;
  transition: 0.5s ease;
  border-radius: 15px;
  &:hover {
    background-color: #73c69ca4;
    border-radius: 15px;
    transition: 0.5s ease;
  }
  @media (max-width: 510px) {
    &:hover {
      border-radius: 10px;
    }
    font-size: x-small;
    padding: 0.5rem;
    border-radius: 10px;
  }
`;
const DropDown = () => {
  return (
    <DropWrapper>
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/sell">Sell</Link>
    </DropWrapper>
  );
};

export default DropDown;

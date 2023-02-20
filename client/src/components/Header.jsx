import styled from "styled-components";
import logo from "../assets/logo.svg";
import DropDown from "./DropDown";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const HeaderContainer = styled.div`
  width: 100%;
  justify-content: center;
  position: relative;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 0.5rem;
  font-size: small;
`;
const BrandImage = styled.img`
  height: 1.5rem;
  @media (max-width: 510px) {
    height: 1rem;
  }
`;

const HeaderLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  font-family: sans-serif;
  color: #252525;
  padding: 0.5rem;
  transition: 0.5s ease;
  border-radius: 10px;
  &:hover {
    background-color: #73c69c;
    border-radius: 10px;
    transition: 0.5s ease;
  }
  &.register {
    background-color: #73c69c;
    color: #252525;
  }
  &.register:hover {
    background-color: #50856b;
  }
  &.logo:hover {
    background-color: #ffffff;
  }
  @media (max-width: 510px) {
    font-size: x-small;
  }
`;
const MenuIcon = styled(BiMenu)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;
const UserAuthWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);
  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <HeaderLink className="logo" to="/home">
            <BrandImage src={logo} />
          </HeaderLink>
          <UserAuthWrapper>
            <HeaderLink to="/login">Login</HeaderLink>
            <HeaderLink className="register" to="/register">
              Register
            </HeaderLink>
          </UserAuthWrapper>
          <MenuIcon onClick={() => setShowMenu((prev) => !prev)} />
        </HeaderWrapper>
        {showMenu && <DropDown />}
      </Container>
    </HeaderContainer>
  );
};

export default Header;

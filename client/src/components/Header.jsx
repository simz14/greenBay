import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Container } from "./Container";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  justify-content: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
`;
const BrandWrapper = styled.img`
  size: 1rem;
  height: 2rem;
`;
const MenuWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  font-family: sans-serif;
  color: #252525;
  font-weight: 600;
  padding: 0.5rem;
  transition: 0.5s ease;
  border-radius: 10px;
  &:hover {
    background-color: #54a65792;
    border-radius: 10px;
    transition: 0.5s ease;
  }
  &.register {
    background-color: #54a65792;
    color: #252525;
  }
  &.register:hover {
    background-color: #54a657;
  }
  &.logo:hover {
    background-color: #ffffff;
  }
`;
const UserAuthWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <HeaderLink className="logo" to="/home">
            <BrandWrapper src={logo} />
          </HeaderLink>
          <MenuWrapper>
            <HeaderLink to="/home">Home</HeaderLink>
            <HeaderLink to="/products">Products</HeaderLink>
            <HeaderLink to="/categories">Categories</HeaderLink>
            <HeaderLink to="/about">About us</HeaderLink>
          </MenuWrapper>
          <UserAuthWrapper>
            <HeaderLink to="/login">Login</HeaderLink>
            <HeaderLink className="register" to="/register">
              Register
            </HeaderLink>
          </UserAuthWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

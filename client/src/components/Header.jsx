import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import DropDown from "./DropDown";
import { Container } from "./Container";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiLogOut, BiCartAlt } from "react-icons/bi";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Cart from "./Cart";

const HeaderContainer = styled.div`
  width: 100%;
  justify-content: center;
  position: sticky;
  top: 0;
`;
const HeaderWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
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

const LogOutIcon = styled(BiLogOut)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  transform: rotate(180deg);
`;

const CartIcon = styled(BiCartAlt)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;
const UserAuthWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = ({ showAuth, cartItems }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { setUserId, setUsername, setIsAdmin } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <HeaderLink className="logo" to="/home">
            <BrandImage src={logo} />
          </HeaderLink>
          {showAuth && (
            <UserAuthWrapper>
              <HeaderLink to="/login">Login</HeaderLink>
              <HeaderLink className="register" to="/register">
                Register
              </HeaderLink>
            </UserAuthWrapper>
          )}
          <Icons>
            <MenuIcon onClick={() => setShowMenu((prev) => !prev)} />{" "}
            {!showAuth && (
              <CartIcon onClick={() => setShowCart((prev) => !prev)} />
            )}
            {!showAuth && (
              <LogOutIcon
                onClick={() => {
                  localStorage.removeItem("token");
                  setUserId(null),
                    setUsername(null),
                    setIsAdmin(null),
                    navigate("/login");
                }}
              />
            )}
          </Icons>
          {showMenu && <DropDown />}
          {showCart && <Cart />}
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import DropDown from "./DropDown";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiLogOut, BiCartAlt } from "react-icons/bi";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import CartComponent from "./Cart";
import { CartContext } from "../../context/CartContext";
import { userAuth } from "../../utils/auth";

const HeaderContainer = styled.div`
  width: 100%;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const HeaderWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 0.5rem;
  font-size: 13px;
  position: relative;
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
    font-size: 10px;
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
  position: relative;
  justify-self: end;
  z-index: 99999;
`;

const CartCount = styled.span`
  display: inline-block;

  border-radius: 9px;
  font-size: 10px;
  background: #ff0000;
  color: #fff;
  padding: 0px 4px;
  vertical-align: top;
  margin-left: -10px;
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { setUserId, setUsername, setIsAdmin } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClickMenu = () => {
    setShowMenu((prev) => !prev);
    setShowCart(false);
  };

  const handleClickCart = () => {
    setShowCart((prev) => !prev);
    setShowMenu(false);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLink className="logo" to="/">
          <BrandImage src={logo} />
        </HeaderLink>
        {!userAuth() && (
          <UserAuthWrapper>
            <HeaderLink to="/login">Login</HeaderLink>
            <HeaderLink className="register" to="/register">
              Register
            </HeaderLink>
          </UserAuthWrapper>
        )}

        {userAuth() && (
          <Icons>
            <MenuIcon onClick={() => handleClickMenu()} />
            <div>
              <CartIcon onClick={() => handleClickCart()} />
              <CartCount> {cartItems && cartItems.length}</CartCount>
            </div>
            <LogOutIcon
              onClick={() => {
                localStorage.removeItem("token");
                setUserId(null),
                  setUsername(null),
                  setIsAdmin(null),
                  navigate("/login");
              }}
            />
          </Icons>
        )}

        {showMenu && <DropDown />}
        {showCart && <CartComponent />}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

import { Container } from "./Container";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoImage = styled.img`
  height: 1.5rem;
  @media (max-width: 510px) {
    height: 1rem;
  }
`;
const Links = styled.div`
  display: flex;
  gap: 1rem;
  & a {
    color: #529070;
    font-family: sans-serif;
  }
  @media (max-width: 510px) {
    font-size: xx-small;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterWrapper>
          <Links>
            <a href="">Policy</a>
            <a href="">Security</a>
          </Links>
          <LogoImage src={logo} />
          <Links>
            <a href="">About us</a>
            <a href="">Account</a>
          </Links>
        </FooterWrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

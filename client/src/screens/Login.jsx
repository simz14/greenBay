import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { validateEmail, validatePassword } from "../utils/validation";
import { fetchLogin } from "../services/login";
import greenShape from "../assets/greenShape.jpg";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";

const LoginContainer = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
`;

const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 5rem 0 5rem;

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 700px) {
    & h1 {
      font-size: 1em;
    }
  }
`;

const InfoWrapper = styled.div`
  @media (max-width: 700px) {
    & h1 {
      font-size: 1em;
    }
    & p {
      font-size: 0.5em;
    }
  }
  @media (max-width: 400px) {
    & h1 {
      font-size: 0.5em;
    }
    & p {
      font-size: 0.2em;
    }
  }
`;

const StyledImg = styled.img`
  width: 25rem;
  position: fixed;
  z-index: -9999;
  top: 10rem;
  right: 5rem;
  @media (max-width: 1120px) {
    display: flex;
    justify-self: center;
    flex-wrap: wrap;
    right: initial;
  }
  @media (max-width: 700px) {
    width: 20rem;
  }
  @media (max-width: 400px) {
    width: 15rem;
  }
`;

const InputsWrapper = styled.div`
  display: grid;
  width: 30%;
  justify-self: end;
  border-radius: 15px;
  padding: 2rem 4rem;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  @media (max-width: 700px) {
    padding: 2rem 2rem;
    width: 40%;
  }
  @media (max-width: 400px) {
    padding: 1rem 1rem;
    width: 50%;
  }
`;
const EroorMessage = styled.p`
  font-size: small;
  width: 90%;
  font-weight: 600;
  justify-self: center;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 7px 23px rgb(0 0 0 / 10%);
  backdrop-filter: blur(10px);
  color: red;
  @media (max-width: 700px) {
    font-size: x-small;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const response = await fetchLogin({ email, password });
    const data = await response.json();
    if (!data.jwt) {
      setErrorMsg((prev) => (prev = data.message));
    } else {
      window.localStorage.setItem("token", data.jwt);
      navigate("/home");
    }
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrorMsg("Invalid Email adress!");
    } else {
      setErrorMsg("");
    }
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setErrorMsg("Password needs 8 characters!");
    } else {
      setErrorMsg("");
    }
  };

  return (
    <LoginContainer>
      <Header showAuth={true} />
      <Container>
        <LoginWrapper>
          <InfoWrapper>
            <h1> Welcome back!</h1>
            <p>Sign in to continue</p>
          </InfoWrapper>
          <InputsWrapper>
            <StyledImg src={greenShape} />
            <h1>Login</h1>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleEmailBlur()}
              value={email}
              type="text"
              placeholder="email"
              icon={<BiEnvelope />}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handlePasswordBlur()}
              value={password}
              type="password"
              placeholder="password"
              icon={<BiLockAlt />}
            />
            <Button onClick={() => handleLoginClick()} buttonName="Sign in" />
            {errorMsg.length > 0 && <EroorMessage>{errorMsg}</EroorMessage>}
          </InputsWrapper>
        </LoginWrapper>
      </Container>
      <Footer />
    </LoginContainer>
  );
};

export default Login;

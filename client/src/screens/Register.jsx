import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { fetchRegister } from "../services/register";
import { validateEmail, validatePassword } from "../utils/validation";
import greenShape from "../assets/greenShape.jpg";
import { BiUser, BiEnvelope, BiLockAlt } from "react-icons/bi";

const RegisterContainer = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
`;

const RegisterWrapper = styled.div`
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
const ErrorMessage = styled.p`
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegisterClick = async () => {
    const response = await fetchRegister({ username, email, password });
    const message = await response.json();
    setErrorMsg((prev) => (prev = message.message));
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
    <RegisterContainer>
      <Header showAuth={true} />
      <Container>
        <RegisterWrapper>
          <InfoWrapper>
            <h1> Welcome to GreenBay!</h1>
            <p>Sign up to continue</p>
          </InfoWrapper>
          <InputsWrapper>
            {" "}
            <StyledImg src={greenShape} />
            <h1>Register</h1>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="username"
              icon={<BiUser />}
            />
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
            <Button
              onClick={() => handleRegisterClick()}
              buttonName="Sign up"
            />
            {errorMsg.length > 0 && <ErrorMessage>{errorMsg}</ErrorMessage>}
          </InputsWrapper>
        </RegisterWrapper>
      </Container>
      <Footer />
    </RegisterContainer>
  );
};

export default Register;

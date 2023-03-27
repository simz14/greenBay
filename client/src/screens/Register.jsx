import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { fetchRegister } from "../services/register";
import { validateEmail, validatePassword } from "../utils/validation";
import { BiUser, BiEnvelope, BiLockAlt } from "react-icons/bi";

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
      font-size: 15px;
    }
    & p {
      font-size: 13px;
    }
  }
`;
const InputsWrapper = styled.div`
  display: grid;
  width: 50%;
  justify-self: end;
  border-radius: 15px;
  padding: 2rem 4rem;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  @media (max-width: 400px) {
    padding: 2rem 2rem;
    width: 80%;
  }
`;
const InfoMessage = styled.p`
  font-size: 13px;
  width: 90%;
  font-weight: 600;
  justify-self: center;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 7px 23px rgb(0 0 0 / 10%);
  backdrop-filter: blur(10px);
  @media (max-width: 700px) {
    font-size: 10px;
  }
  &.error {
    color: red;
  }
  &.success {
    color: green;
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [succesMsg, setSuccesMsg] = useState([false, ""]);
  const [failMsg, setFailMsg] = useState([false, ""]);

  const handleRegisterClick = async () => {
    const response = await fetchRegister({ username, email, password });
    const message = await response.json();
    setSuccesMsg([true, message.message]);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setFailMsg([true, "Invalid Email adress!"]);
      setSuccesMsg([false, ""]);
    } else {
      setFailMsg([false, ""]);
    }
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setFailMsg([true, "Password needs 8 characters!"]);
      setSuccesMsg([false, ""]);
    } else {
      setFailMsg([false, ""]);
    }
  };

  return (
    <Container>
      <Header />

      <RegisterWrapper>
        <InfoWrapper>
          <h1>Registering is not possible😬</h1>
          <h1> Welcome to GreenBay!</h1>
          <p>Sign up to continue</p>
        </InfoWrapper>
        <InputsWrapper>
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
            disabled={true}
            onClick={() => handleRegisterClick()}
            buttonName="Sign up"
          />
          {succesMsg[0] && (
            <InfoMessage className="success">{succesMsg[1]}</InfoMessage>
          )}
          {failMsg[0] && (
            <InfoMessage className="error">{failMsg[1]}</InfoMessage>
          )}
        </InputsWrapper>
      </RegisterWrapper>

      <Footer />
    </Container>
  );
};

export default Register;

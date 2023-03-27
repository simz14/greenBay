import React, { useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { validateEmail, validatePassword } from "../utils/validation";
import { fetchLogin } from "../services/login";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { UserContext } from "../context/UserContext";
import { userAuth } from "../utils/auth";

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

const Login = () => {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("user1234");
  const [succesMsg, setSuccesMsg] = useState([false, ""]);
  const [failMsg, setFailMsg] = useState([false, ""]);
  const { setUserPassword, setUserId, setUsername, setUserEmail, setIsAdmin } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    try {
      const data = await fetchLogin({ email, password });
      //const data = await response.json();
      window.localStorage.setItem("token", data.jwt);
      const userData = await userAuth();
      if (userData) {
        setUserId(userData.userId);
        setUsername(userData.username);
        setUserEmail(userData.email);
        setIsAdmin(userData.isAdmin);
        setUserPassword(userData.password);
      }
      navigate("/");
    } catch (e) {
      setFailMsg([true, e.message]);
      setSuccesMsg([false, ""]);
    }
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setSuccesMsg([false, " data.message"]);
      setFailMsg([true, "Invalid Email adress!"]);
    } else {
      setFailMsg("");
    }
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setSuccesMsg([false, " data.message"]);
      setFailMsg([true, "Password needs 8 characters!"]);
    } else {
      setFailMsg("");
    }
  };
  return (
    <Container>
      <Header />

      <LoginWrapper>
        <InfoWrapper>
          <h1> Welcome back!</h1>
          <p>Sign in to continue</p>
        </InfoWrapper>
        <InputsWrapper>
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
          {succesMsg[0] && (
            <InfoMessage className="success">{succesMsg[1]}</InfoMessage>
          )}
          {failMsg[0] ? (
            <InfoMessage className="error">{failMsg[1]}</InfoMessage>
          ) : null}
        </InputsWrapper>
      </LoginWrapper>
      <Footer />
    </Container>
  );
};

export default Login;

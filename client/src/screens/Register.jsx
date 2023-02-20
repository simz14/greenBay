import styled from "styled-components";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { fetchRegister } from "../services/register";

const RegisterContainer = styled.div`
  width: 100%;
`;

const RegisterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const InfoWrapper = styled.div``;

const InputsWrapper = styled.div`
  display: grid;
  width: 100%;
  margin: auto;
  width: fit-content;
  height: 100%;
  justify-self: center;
  background-color: #c2e8d5;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    fetchRegister({ email, username, password });
  };

  return (
    <RegisterContainer>
      <Header />
      <Container>
        <RegisterWrapper>
          <InfoWrapper>
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
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="text"
              placeholder="password"
            />
            <Button
              onClick={() => handleRegisterClick()}
              buttonName="Sign up"
            />
          </InputsWrapper>
        </RegisterWrapper>
      </Container>
      <Footer />
    </RegisterContainer>
  );
};

export default Register;

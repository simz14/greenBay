import styled, { keyframes } from "styled-components";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { fetchRegister } from "../services/register";
import greenShape from "../assets/greenShape.jpg";

const RegisterContainer = styled.div`
  width: 100%;
`;

const RegisterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 5rem 0 5rem;
`;

const InfoWrapper = styled.div``;

const StyledImg = styled.img`
  width: 30rem;
  position: fixed;
  z-index: -9999;
  top: 10rem;
  right: 5rem;
`;

const InputsWrapper = styled.div`
  display: grid;
  width: fit-content;
  justify-self: end;
  border-radius: 15px;
  padding: 5rem;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = async () => {
    const response = await fetchRegister({ username, email, password });
    const message = await response.json();
    console.log(message.message);
  };

  return (
    <RegisterContainer>
      <Header />
      <Container>
        <RegisterWrapper>
          <InfoWrapper>
            <StyledImg src={greenShape} />
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

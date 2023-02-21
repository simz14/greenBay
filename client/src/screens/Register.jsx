import styled, { keyframes } from "styled-components";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { fetchRegister } from "../services/register";
import { validateEmail, validatePassword } from "../utils/validation";
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
  width: 30%;
  justify-self: end;
  border-radius: 15px;
  padding: 5rem;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
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
              onBlur={() => handleEmailBlur()}
              value={email}
              type="text"
              placeholder="email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handlePasswordBlur()}
              value={password}
              type="text"
              placeholder="password"
            />
            <Button
              onClick={() => handleRegisterClick()}
              buttonName="Sign up"
            />{" "}
            {errorMsg.length > 0 && <EroorMessage>{errorMsg}</EroorMessage>}
          </InputsWrapper>
        </RegisterWrapper>
      </Container>
      <Footer />
    </RegisterContainer>
  );
};

export default Register;

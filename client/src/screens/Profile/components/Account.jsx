import { FormGroup, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { UserContext } from "../../../context/UserContext";
import { updateUserData } from "../../../services/updateProfile";
import { userAuth } from "../../../utils/auth";
import { validateEmail } from "../../../utils/validation";

const AccountContainer = styled.div``;

const FormWrapper = styled(FormGroup)`
  width: 50%;
  margin: auto;
  padding: 1rem;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  gap: 1rem;
`;

const InfoMessage = styled.p`
  font-size: small;
  width: 90%;
  font-weight: 600;
  justify-self: center;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 7px 23px rgb(0 0 0 / 10%);
  backdrop-filter: blur(10px);
  @media (max-width: 700px) {
    font-size: x-small;
  }
  &.error {
    color: red;
  }
  &.success {
    color: green;
  }
`;

const Account = () => {
  const { userId, username, setUsername, userEmail, setUserEmail } =
    useContext(UserContext);
  const [changedUsername, setChangedUsername] = useState("");
  const [changedEmail, setChangedEmail] = useState("");
  const [changedPasword, setChangedPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [succesMsg, setSuccesMsg] = useState([false, ""]);
  const [failMsg, setFailMsg] = useState([false, ""]);

  useEffect(() => {
    setChangedUsername(username);
    setChangedEmail(userEmail);
  }, []);

  const handleClickEdit = async () => {
    try {
      const response = await updateUserData([
        userId,
        changedUsername,
        changedEmail,
        currentPassword,
        changedPasword,
      ]);
      const data = await response.json();
      window.localStorage.setItem("token", data.jwt);
      const userData = await userAuth();
      if (userData) {
        setUsername(userData.username);
        setUserEmail(userData.email);
      }
      setSuccesMsg([true, "Successfully edited!"]);
      setFailMsg([false, ""]);
    } catch (e) {
      setSuccesMsg([false, ""]);
      setFailMsg([true, e.message]);
    }
  };

  const handleEmailBlur = () => {
    if (!validateEmail(changedEmail)) {
      setFailMsg([true, "Invalid Email adress!"]);
    } else {
      setFailMsg([false, ""]);
    }
  };
  return (
    <AccountContainer>
      <FormWrapper>
        <TextField
          onChange={(e) => setChangedUsername(e.target.value)}
          id="outlined-basic"
          label={username}
          variant="outlined"
        />
        <TextField
          onBlur={() => handleEmailBlur()}
          onChange={(e) => setChangedEmail(e.target.value)}
          id="outlined-basic"
          label={userEmail}
          variant="outlined"
        />
        <TextField
          onChange={(e) => setChangedPassword(e.target.value)}
          id="outlined-basic"
          label="New password"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setCurrentPassword(e.target.value)}
          id="outlined-basic"
          label="Current password"
          variant="outlined"
          required
        />
        <Button onClick={() => handleClickEdit()} buttonName={"Edit"} />
        {succesMsg[0] && (
          <InfoMessage className="success">{succesMsg[1]}</InfoMessage>
        )}
        {failMsg[0] && (
          <InfoMessage className="error">{failMsg[1]}</InfoMessage>
        )}
      </FormWrapper>
    </AccountContainer>
  );
};
export default Account;

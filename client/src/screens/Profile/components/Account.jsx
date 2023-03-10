import { FormGroup, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { UserContext } from "../../../context/UserContext";
import { updateUserData } from "../../../services/updateProfile";

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

const Account = () => {
  const { userId, username, setUsername, userEmail, setUserEmail } =
    useContext(UserContext);
  const [changedUsername, setChangedUsername] = useState("");
  const [changedEmail, setChangedEmail] = useState("");
  const [changedPasword, setChangedPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handleClickEdit = async () => {
    try {
      const response = await updateUserData([
        userId,
        changedUsername,
        changedEmail,
        currentPassword,
        changedPasword,
      ]);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(currentPassword);
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
        />{" "}
        <TextField
          onChange={(e) => setCurrentPassword(e.target.value)}
          id="outlined-basic"
          label="Current password"
          variant="outlined"
          required
        />
        <Button onClick={() => handleClickEdit()} buttonName={"Edit"} />
      </FormWrapper>
    </AccountContainer>
  );
};
export default Account;

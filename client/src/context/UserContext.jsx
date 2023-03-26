import React, { useEffect, useState, createContext } from "react";
import { userAuth } from "../utils/auth.js";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const setUser = async () => {
    const userData = await userAuth();
    if (userData) {
      setUserId(userData.userId);
      setUsername(userData.username);
      setUserEmail(userData.email);
      setIsAdmin(userData.isAdmin);
      setUserPassword(userData.password);
    }
  };

  useEffect(() => {
    setUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        username,
        setUsername,
        isAdmin,
        setIsAdmin,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

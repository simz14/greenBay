import React, { useEffect, useState, createContext } from "react";
import { userAuth } from "../utils/auth.js";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const setContext = async () => {
    let userData = await userAuth();
    if (userData) {
      setUserId(userData.userId);
      setUsername(userData.username);
      setIsAdmin(userData.isAdmin);
    }
  };

  useEffect(() => {
    setContext();
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

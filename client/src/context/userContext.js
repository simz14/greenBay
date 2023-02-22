import { createContext } from "React";
import { useEffect, useState } from "react";

const UserContext = createContext(null);

const UserProvider = (props) => {
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

export default UserProvider;

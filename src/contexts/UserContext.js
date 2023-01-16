import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userIsLoggedIn,
        setUserIsLoggedIn,
      }}
    >
      {user && children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

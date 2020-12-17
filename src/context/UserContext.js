import React, { useState, useEffect, useMemo, createContext } from "react";
import Auth from "utils/Auth";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userProviderValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (!user) {
      Auth.checkIsAlreadyLoggedIn()
        .then((loggedInUser) => {
          setUser(loggedInUser);
        })
        .catch((err) => console.log("not logged in ==>"));
    }
  }, [user]);

  return (
    <UserContext.Provider value={userProviderValue}>
      {children}
    </UserContext.Provider>
  );
};

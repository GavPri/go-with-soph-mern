import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function userContextProvider({ children }) {
  const [user, setuser] = useState(null);

  useEffect(() => {}, []);
  return <UserContext.Provider value={<></>}>{children}</UserContext.Provider>;
}

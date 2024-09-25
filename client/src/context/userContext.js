import axios from "axios";
import { createContext } from "react";

export const UserContext = createContext({});

export function userContextProvider({ children }) {
  return <UserContext.Provider value={<></>}>{children}</UserContext.Provider>;
}

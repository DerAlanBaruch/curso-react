import { UserContext } from "./UserContext";

export const UserProvider = ({ children, value }: any) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

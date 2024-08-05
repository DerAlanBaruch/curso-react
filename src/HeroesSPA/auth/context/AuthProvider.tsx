import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { Auth, AuthActions } from "../types/Auth";
import { User } from "../types/User";

const initialState: Auth = {
  logged: false,
};
const initAuth = () => {
  const authFromLocalStorage = localStorage.getItem("auth");
  return authFromLocalStorage ? JSON.parse(authFromLocalStorage) : initialState;
};

export const AuthProvider = ({ children }: any) => {
  const [auth, dispatchAuth] = useReducer(authReducer, initialState, initAuth);
  
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const onLogin = (user?: User) => {
    const action = {
      type: AuthActions.Login,
      payload: {
        logged: true,
        user,
      },
    };
    dispatchAuth(action);
  };
  const onLogout = () => {
    const action = {
      type: AuthActions.Logout,
      payload: {
        logged: false,
      },
    };
    dispatchAuth(action);
  };

  return (
    <AuthContext.Provider value={{ auth, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

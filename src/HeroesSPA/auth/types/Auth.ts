import { User } from "./User";

export enum AuthActions {
  Login = "[Auth] Login",
  Logout = "[Auth] Logout",
}

export interface Auth {
  logged: boolean;
  user?: User;
}
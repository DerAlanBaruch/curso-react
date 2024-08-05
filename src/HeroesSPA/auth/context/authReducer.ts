import { Action } from "../types/Action";
import { Auth, AuthActions } from "../types/Auth";

export const authReducer = (
  state: Auth,
  action: Action<AuthActions, Auth>
): Auth => {
  switch (action.type) {
    case AuthActions.Login:
      return {
        ...state,
        logged: true,
        user: action.payload.user,
      };
    case AuthActions.Logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};

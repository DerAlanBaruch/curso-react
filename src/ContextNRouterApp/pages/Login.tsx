import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Login</h1>
      <hr />
      {user}
      <button className="btn btn-primary" onClick={() => setUser("Pedro")}>
        Set user
      </button>
    </>
  );
};

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const lastPath = localStorage.getItem("lastPath") || "/";

  const onLogin = () => {
    authContext.onLogin({
      id: 1,
      name: "John Doe",
    });
    navigate(lastPath, { replace: true });
  };
  
  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

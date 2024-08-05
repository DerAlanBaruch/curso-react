import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

type Route = {
  name: string;
  path: string;
};

export const Navbar = ({ routes }: { routes: Route[] }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { user } = authContext.auth;
  const onLogout = () => {
    authContext.onLogout();
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {routes.map((route) => (
            <NavLink
              key={route.name}
              className={(args) =>
                "nav-link" + (args.isActive ? " active" : "")
              }
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dualcollapse justify-content-end">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <span className="nav-link text-primary">{user?.name}</span>
          </li>
          <li className="nav-item" onClick={onLogout}>
            <button className="btn nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

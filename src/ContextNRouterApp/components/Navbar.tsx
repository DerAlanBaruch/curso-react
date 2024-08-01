import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark roudend-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Main
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={(args) =>
                "nav-link" + (args.isActive ? " active" : "")
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(args) =>
                "nav-link" + (args.isActive ? " active" : "")
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={(args) =>
                "nav-link" + (args.isActive ? " active" : "")
              }
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

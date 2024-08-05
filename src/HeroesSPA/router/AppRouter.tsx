import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  localStorage.setItem("lastPath", pathname + search);
  return auth.logged ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useContext(AuthContext);
  return !auth.logged ? children : <Navigate to="/marvel" />;
};

export const AppRouter = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route
            path="login/*"
            element={
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<Login />} />
                </Routes>
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./ContextNRouterApp/pages/Home";
import { About } from "./ContextNRouterApp/pages/About";
import { Login } from "./ContextNRouterApp/pages/Login";
import { Navbar } from "./ContextNRouterApp/components/Navbar";
import { UserProvider } from "./ContextNRouterApp/context/UserProvider";
import { useState } from "react";

export const ContextNRouterApp = () => {
  const [user, setUser] = useState("Juan"); //["Juan", setUser]
  return (
    <>
      <div className="container">
        <UserProvider value={{ user, setUser }}>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </UserProvider>
      </div>
    </>
  );
};

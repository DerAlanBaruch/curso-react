import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";

const navbarRoutes = [
  {
    name: "Search",
    path: "/search",
  },
  {
    name: "Marvel",
    path: "/marvel",
  },
  {
    name: "DC",
    path: "/dc",
  },
];

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar routes={navbarRoutes} />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
        <Route path="/*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};

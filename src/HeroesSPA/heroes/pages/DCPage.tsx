import { HeroesList } from "../components";
import { Publisher } from "../types";

export const DCPage = () => {
  const publisher = Publisher.DCComics;
  return (
    <>
      <h1>{publisher}</h1>
      <hr />
      <HeroesList publisher={publisher} />
    </>
  );
};

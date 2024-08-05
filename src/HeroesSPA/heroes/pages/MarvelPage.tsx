import { HeroesList } from "../components";
import { Publisher } from "../types";

export const MarvelPage = () => {
  const publisher = Publisher.MarvelComics;
  return (
    <>
      <h1>{publisher}</h1>
      <hr />
      <HeroesList publisher={publisher} />
    </>
  );
};

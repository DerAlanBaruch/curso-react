import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/slices";
import { AppDispatch, RootState } from "../store";

export const PokemonPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { page, pokemons, isLoading } = useSelector(
    (state: RootState) => state.pokemons
  );

  useEffect(() => {
    dispatch(getPokemons(0));
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      {isLoading && <p>Loading...</p>}
      {pokemons.length > 0 && !isLoading && (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
      <button className="btn" onClick={() => dispatch(getPokemons(page - 1))}>
        Previous Page
      </button>
      <button className="btn" onClick={() => dispatch(getPokemons(page + 1))}>
        Next Page
      </button>
    </>
  );
};

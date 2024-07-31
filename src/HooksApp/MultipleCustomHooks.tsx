import { FormEvent, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { PokemonCard } from "./components/PokemonCard";
import { Loading } from "./components/Loading";
import { Pokemon } from "./types/Pokemon";

export const MultipleCustomHooks = () => {
  const [pokemon, setPokemon] = useState<string>("bulbasaur");
  const [url, setUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon/" + pokemon
  );

  const { data, hasError, isLoading } = useFetch<Pokemon>(url);

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrl("https://pokeapi.co/api/v2/pokemon/" + pokemon);
  };

  return (
    <>
      <h1>Pokedex</h1>
      <hr />
      <div className="row gap-3">
        <form onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Buscar Pokemon"
            className="form-control"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          />
        </form>
        {isLoading ? (
          <Loading />
        ) : data === null ? (
          <div>No hay pokemon</div>
        ) : (
          <PokemonCard {...data} />
        )}
        {hasError && <pre>Hubo un error...</pre>}
      </div>
    </>
  );
};

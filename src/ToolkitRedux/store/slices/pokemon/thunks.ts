import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = createAsyncThunk(
  "pokemons/getPokemons",
  async (page: number, thunkAPI) => {
    thunkAPI.dispatch(startLoadingPokemons());
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    thunkAPI.dispatch(setPokemons({ page, results: data.results }));
  }
);

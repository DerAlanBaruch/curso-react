import { createSlice } from "@reduxjs/toolkit";

export type PokemonState = {
  page: number;
  pokemons: any[];
  isLoading: boolean;
};

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.pokemons = action.payload.results;
      state.page = action.payload.page;
    },
  },
});



export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

import { heroes } from "../data";
import { Publisher } from "../types";

export const getHeroesByPublisher = (publisher: Publisher) => {
  if (!publisher) return [];
  return heroes.filter((hero) => hero.publisher === publisher);
};

export const getHeroById = (id?: string) => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroesByName = (name: string = "") => {
  if (name.length === 0) return [];
  return heroes.filter((hero) =>
    hero.superhero
      .toLowerCase()
      .replace(" ", "")
      .includes(name.toLowerCase().replace(" ", ""))
  );
};

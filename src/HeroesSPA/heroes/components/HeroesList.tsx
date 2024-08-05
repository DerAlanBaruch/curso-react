import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { Publisher } from "../types";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }: { publisher: Publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <ul className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </ul>
  );
};

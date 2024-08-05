import { Link } from "react-router-dom";
import { Hero } from "../types";

const CharactersByHero = ({
  alter_ego,
  characters,
}: {
  alter_ego: string;
  characters: string;
}) => {
  return (
    <>
      <p className="card-text">{alter_ego}</p>
      {characters !== alter_ego && <p className="text-muted">{characters}</p>}
    </>
  );
};

export const HeroCard = ({
  alter_ego,
  characters,
  first_appearance,
  id,
  superhero,
}: Hero) => {
  const imgUrl = `/public/heroes/${id}.jpg`;
  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="card-img">
            <img src={imgUrl} alt={superhero} className="img-fluid" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <CharactersByHero alter_ego={alter_ego} characters={characters} />
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>Mas..</Link>
          </div>
        </div>
      </div>
    </>
  );
};

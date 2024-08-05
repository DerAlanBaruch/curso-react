import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../../HooksApp/hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const term = typeof q === "string" ? q : "";
  const heroes = getHeroesByName(term);
  const { formState, handleInputChange } = useForm({
    searchText: term,
  });

  const onSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchTerm = formState.searchText.trim();
    navigate(`?q=${searchTerm}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search a Hero</h4>
          <hr />
          <form onSubmit={onSumbit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={formState.searchText}
              onChange={handleInputChange}
            />
            <hr />
            <button className="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {term === "" && (
            <div className="alert alert-info animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}
          {heroes.length === 0 && term !== "" && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              No results with "{term}"
            </div>
          )}
          <div className="row">
            {heroes.map((hero) => (
              <div className="col-6 mb-3">
                <HeroCard key={hero.id} {...hero} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

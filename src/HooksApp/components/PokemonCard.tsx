import { Pokemon } from "../types/Pokemon";

export const PokemonCard = (data: Pokemon) => {
  return (
    <div className="card col-12 bg-light text-dark p-3">
      <h3>
        #{data.order} - {data.name.toUpperCase()}
      </h3>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <img
            src={data.sprites.other?.["official-artwork"].front_default}
            alt={data.name}
            className="img-fluid w-100"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="row">
            <img
              src={data.sprites.front_default}
              alt={data.name}
              className="col-6 img-fluid"
            />
            <img
              src={data.sprites.back_default}
              alt={data.name}
              className="col-6 img-fluid"
            />
          </div>
          <div className="row">
            <img
              src={data.sprites.other?.["showdown"].front_default}
              alt={data.name}
              className="col-4 mx-auto img-fluid"
            />
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <p>Altura: {((data.height ?? 0) * 10) / 100} m</p>
          <p>Peso: {(data.weight ?? 0) / 10} kg</p>
          <p>Tipo: {data.types.map((type) => type.type.name).join(", ")}</p>
        </div>
        <div className="col-md-3 col-sm-12">
          <p>Estadísticas:</p>
          <ul>
            {data.stats.map(({ stat, base_stat, effort }) => (
              <li
                key={stat.name}
              >{`${stat.name}: ${base_stat} (${effort})`}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <h4>Generaciones</h4>
        <div className="row">
          {Object.keys(data.sprites.versions ?? {}).map((version) => (
            <>
              <div className="col-md-3 col-sm-6">
                <p>
                  <strong>{version}</strong>
                </p>
                <div className="row" key={version.replace("-", "")}>
                  {Object.keys(data.sprites.versions?.[version] ?? {})
                    .filter(
                      (game) =>
                        data.sprites.versions?.[version]?.[game]
                          .front_default && game !== "icons"
                    )
                    .map((game) => (
                      <div className="col">
                        <img
                          key={game}
                          src={
                            data.sprites.versions?.[version]?.[game]
                              .front_default
                          }
                          alt=""
                        />
                        <p>{game}</p>
                      </div>
                    ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

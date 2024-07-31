import { useFetch } from "./hooks/useFetch";
import { Loading } from "./components/Loading";
import { useCounter } from "./hooks/useCounter";
import { QuoteCard } from "./components/Quote";
import { Quote } from "./types/Quote";

export const Layout = () => {
  const { counter, add, subtract } = useCounter();
  const { data, hasError, isLoading } = useFetch<Quote[]>(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = data ? data[0] : {} as any;

  return (
    <>
      <h1>Frases de Breaking Bad</h1>
      <hr />
      <div className="row gap-3 mb-3">
        <button
          className="col btn btn-primary"
          onClick={() => (counter > 0 ? subtract() : null)}
        >
          Anterior
        </button>
        <button className="col btn btn-primary" onClick={() => add()}>
          Siguiente
        </button>
      </div>
      <div className="row">
        {isLoading ? (
          <Loading />
        ) : data === null ? (
          <div>No hay frase</div>
        ) : (
          <QuoteCard author={author} quote={quote} />
        )}
        {hasError && <pre>Hubo un error...</pre>}
      </div>
    </>
  );
};

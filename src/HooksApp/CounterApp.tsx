import { useCounter } from "./hooks/useCounter";

export const CounterApp = () => {
  const { counter, add, subtract, reset } = useCounter();

  return (
    <>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <hr />
      <div className="d-flex gap-3">
        <button className="btn btn-danger" onClick={() => subtract(10)}>
          -
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-success" onClick={() => add(10)}>
          +
        </button>
      </div>
    </>
  );
};

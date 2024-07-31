import { useMemo, useState } from "react";
import { Small } from "./components/Small";
import { useCounter } from "./hooks/useCounter";

const heavyStuff = (iterations: number) => {
  for (let i = 0; i < iterations; i++) {
    console.log("heavyStuff");
  }
  return `${iterations} done`;
};

export const Memorize = () => {
  const { counter, add } = useCounter(40);
  const [show, setShow] = useState(true);
  const memorized = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Memorize: <Small value={counter} />
      </h1>
      <hr />
      <h4>{memorized}</h4>
      <button className="btn btn-primary me-3" onClick={() => add()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
};

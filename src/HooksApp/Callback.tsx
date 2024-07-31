import { useCallback } from "react";
import { Small } from "./components/Small";
import { useCounter } from "./hooks/useCounter";
import { ShowAdd } from "./components/ShowAdd";

export const Callback = () => {
  const { counter, add } = useCounter(40);
  const addFather = useCallback(() => {
    add();
  }, []);
  return (
    <>
      <h1>
        Callback: <Small value={counter} />
      </h1>
      <hr />
      <ShowAdd add={addFather} />
    </>
  );
};

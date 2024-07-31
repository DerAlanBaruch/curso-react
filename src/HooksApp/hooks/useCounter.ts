import { useState } from "react";

export const useCounter = (initialCount: number = 0) => {
  const [counter, setCounter] = useState(initialCount);
  const add = (value = 1) => {
    setCounter((v) => v + value);
  };
  const subtract = (value = 1) => {
    setCounter(counter - value);
  };
  const reset = () => {
    setCounter(initialCount);
  };
  return {
    counter,
    add,
    subtract,
    reset,
  };
};

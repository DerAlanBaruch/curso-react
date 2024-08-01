import { useCallback, useState } from "react";
import { MemorizedButton } from "./components/MemorizedButton";

export const MemorizeButtons = () => {
  const nums = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);
  const increase = useCallback((num: number) => {
    setValue((v) => v + num);
  }, []);
  return (
    <>
      <h1>MemorizeButtons</h1>
      <p>Total: {value}</p>
      <hr />
      {nums.map((num) => (
        <MemorizedButton key={num} value={num} handler={increase} />
      ))}
    </>
  );
};

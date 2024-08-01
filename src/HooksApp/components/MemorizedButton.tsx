import { memo } from "react";

const Button = ({ value, handler }: any) => {
  console.log("render button " + value);
  return (
    <button className="btn btn-primary me-2" onClick={() => handler(value)}>
      {value}
    </button>
  );
};

export const MemorizedButton = memo(Button);

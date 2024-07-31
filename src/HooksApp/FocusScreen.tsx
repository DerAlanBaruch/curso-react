import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => inputRef.current?.focus();

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre"
        className="form-control"
      />
      <button className="btn btn-primary mt-3" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};

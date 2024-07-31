import { memo } from "react";

export const ShowAdd = memo(({ add }: { add: () => void }) => {
  return (
    <button className="btn btn-primary" onClick={() => add()}>
      Add
    </button>
  );
});

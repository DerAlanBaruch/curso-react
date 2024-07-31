import { memo } from "react";

export const Small = memo(({ value }: { value: any }) => {
  console.log("Small");
  return <small>{value}</small>;
});

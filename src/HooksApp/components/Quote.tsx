import { useLayoutEffect, useRef, useState } from "react";
import { Quote } from "../types/Quote";

export const QuoteCard = ({ author, quote }: Quote) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [box, setBox] = useState({
    width: 0,
    height: 0,
  });
  useLayoutEffect(() => {
    const { height = 0, width = 0 } =
      pRef.current?.getBoundingClientRect() ?? {};
    setBox({ width, height });
  }, [quote]);
  return (
    <blockquote style={{ display: "flex" }} className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};

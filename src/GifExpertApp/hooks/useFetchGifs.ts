import { useEffect, useState } from "react";
import { Gif } from "../types/gifs";
import { getGifs } from "../api/gifs";

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then(setGifs);
    setIsLoading(false);
  }, []);

  return {
    gifs,
    isLoading,
  };
};

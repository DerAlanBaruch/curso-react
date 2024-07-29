import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }: { category: string }) => {

  const { gifs, isLoading } = useFetchGifs(category);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h3>{category}</h3>
      <div className="cards">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

import { GifsResponse } from "../types/gifs";

const API_KEY = "JAOyK6wWqt0kYzwt3SQIEV4PDy7bk113";

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) =>
      (res.data as GifsResponse[]).map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }))
    );
};

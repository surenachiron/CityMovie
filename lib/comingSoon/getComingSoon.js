import { options } from "../config";

export const getComingSoonMovie = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

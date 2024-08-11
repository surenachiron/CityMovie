import { options } from "../config";

export const getTrendsMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

export const getTopRatedMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

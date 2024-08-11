import { options } from "../config";

export const getTrendsTvShows = async () => {
  const url = `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=true&language=en-US&page=1&sort_by=popularity.desc`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

export const getTopRatedTvShows = async () => {
  const url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

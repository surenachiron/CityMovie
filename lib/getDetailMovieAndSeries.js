import { options } from "./config";

export const getDetailsMovie = async (id, type) => {
  const url = type
    ? `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    : `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

export const getPhotos = async (id, type) => {
  const url = type
    ? `https://api.themoviedb.org/3/tv/${id}/images`
    : `https://api.themoviedb.org/3/movie/${id}/images`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

export const getCasts = async (id, type) => {
  const url = type
    ? `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?language=en-US`
    : `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

import { options } from "../config";

export const getCategoryMovies = async (id) => {
  const url = ``;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

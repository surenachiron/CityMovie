import { options } from "./config";

export const getSearchResult = async (keyword) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`;
  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => null);
  return res;
};

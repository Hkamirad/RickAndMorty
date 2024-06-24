import axios from "axios";

export const getCharacters = (page = 1) => {
  let url = "https://rickandmortyapi.com/api/character";
  if (page) {
    url = `${url}/?page=${page}`;
  }

  return axios.get(url);
};

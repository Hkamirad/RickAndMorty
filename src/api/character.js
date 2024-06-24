import axios from "axios";

export const getCharacter = (id = 1) => {
  let url = "https://rickandmortyapi.com/api/character/";
  if (id) {
    url = `${url}${id}`;
  }

  return axios.get(url);
};

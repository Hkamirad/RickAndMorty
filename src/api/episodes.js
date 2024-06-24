import { get } from "axios";

export const getEpisode = (id) => {
  if (!id || typeof id !== "string") {
    return;
  }
  return get(`https://rickandmortyapi.com/api/episode/${id}`)
};

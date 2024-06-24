import { getCharacter } from "../api/character";

export async function Loader({ params }) {
  const { id } = params;
  const { data } = await getCharacter(id);
  return data;
}

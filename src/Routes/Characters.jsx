import { getCharacters } from "../api/characters";
import { useLoaderData } from "react-router-dom";
export async function Loader() {
   const{data}= await getCharacters(1)
   return{charcter: data.results}
}

export default function Characters() {
    const data = useLoaderData()
    console.log(data)
  return <p>Chars</p>;
}

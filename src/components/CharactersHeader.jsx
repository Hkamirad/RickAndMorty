import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faIdBadge,
  faSkullCrossbones,
  faQuestion,
  faUser,
  faUserAstronaut,
  faTv,
  faMale,
  faFemale,
  faGenderless,
  faHeart as faFilledHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import TextCard from "./TextCard";
import { useOutletContext } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function CharactersHeader() {
  const { selectedCharacter, like, toggleHeart } = useOutletContext();
  const loaderData = useLoaderData();
  let character= null
  if (selectedCharacter){character = selectedCharacter} else {character = loaderData}

  const StatusIcon = () => {
    let icon = null;
    let classe = null;
    switch (character.status) {
      case "Dead":
        icon = faSkullCrossbones;
        classe = "text-red-600";
        break;
      case "Alive":
        icon = faHeartbeat;
        classe = "text-green-600";
        break;
      case "unknown":
      default:
        icon = faQuestion;
        classe = "text-gray-600";
        break;
    }
    return <FontAwesomeIcon className={classe} icon={icon} />;
  };
  const SpeciesIcon = () => {
    let icon = null;
    switch (character.species) {
      case "Human":
        icon = faUser;
        break;
      case "Alien":
        icon = faUserAstronaut;
        break;
      default:
        icon = faIdBadge;
        break;
    }
    return <FontAwesomeIcon icon={icon} />;
  };
  const GenderIcon = () => {
    let icon = null;
    switch (character.gender) {
      case "Female":
        icon = faFemale;
        break;
      case "Male":
        icon = faMale;
        break;
      default:
        icon = faGenderless;
        break;
    }
    return <FontAwesomeIcon icon={icon} />;
  };
  const episodeCount = character.episode
    ? character.episode.length
    : 0;

  return (
    <>
      <div className="flex  gap-10 p-4  mb-10  border-b border-cyan-500 border-solid ">
    <div>
          <img className=" rounded-lg" src={character.image} alt="" />
        </div>
        <div className=" flex flex-col flex-grow ">
          <div className=" flex-grow mb-4 flex flex-col gap-4">
            <div className="flex gap-6 ">
              <h3 className=" font-bold  text-2xl mb-4">
                {character.name}
              </h3>
              <FontAwesomeIcon
                onClick={(event) => toggleHeart(event, character.id)}
                icon={like[character.id] ? faFilledHeart : faHeart}
                className="text-3xl text-cyan-500 mt-1 hover:scale-150 cursor-pointer"
              />
            </div>
            <p className=" text-lg mb-4">
              <FontAwesomeIcon icon={faTv} /> Participated in {episodeCount}{" "}
              {episodeCount > 1 ? "episodes" : "episode"}
            </p>
            <div className="flex gap-8 text-l ">
              <p>
                {" "}
                <StatusIcon /> {character.status}
              </p>
              <p>
                <SpeciesIcon /> {character.species}
              </p>
              <p>
                <GenderIcon /> {character.gender}
              </p>
            </div>
          </div>

          <div className=" flex justify-end gap-4">
            <TextCard origin={character.origin} />
            <TextCard location={character.location} />
          </div>
        </div>
      </div>
    </>
  );
}

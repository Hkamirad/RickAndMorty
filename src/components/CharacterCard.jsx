import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faMapPin,
  faIdBadge,
  faSkullCrossbones,
  faQuestion,
  faUser,
  faUserAstronaut,
  faHeart as faFilledHeart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function CharacterCard({
  id,
  name,
  image,
  status,
  species,
  location,
  changeHeadersCharacter,
  toggleHeart,
  like,
}) {
  const StatusIcon = ({ status }) => {
    let icon = null;
    let classe = null;
    switch (status) {
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
        classe = "text-gary-600";
        break;
    }
    return <FontAwesomeIcon className={classe} icon={icon} />;
  };
  const SpeciesIcon = ({ species }) => {
    let icon = null;
    switch (species) {
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Link to={`/characters/${id}`}>
        <Card
          onClick={() => {
            changeHeadersCharacter(id);
            scrollToTop();
          }}
          className="max-w-sm bg-stone-50 cursor-pointer   hover:scale-105 hover:shadow-lg transition    duration-300 hover:bg-stone-200 mb-6 relative h-full"
          renderImage={() => (
            <img src={image} className="mx-4 mt-4 rounded-2xl" />
          )}
        >
          <div className="flex gap-3">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex-grow ">
              {name}
            </h5>
            <FontAwesomeIcon
              onClick={(event) => {
                event.preventDefault();
                toggleHeart(event, id);
              }}
              className=" text-cyan-500 text-3xl mt-2 bg hover:scale-150"
              icon={like ? faFilledHeart : faHeart}
            />
          </div>
          <div className="flex items-center gap-2">
            <StatusIcon status={status} />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {status}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SpeciesIcon species={species} />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {species}
            </p>
          </div>
          <div className="flex items-center gap-2 mb-8">
            {" "}
            <FontAwesomeIcon icon={faMapPin} />{" "}
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              {location}
            </p>
          </div>
          <div className="absolute bottom-4 right-4 hover:bg-cyan-500 rounded-xl p-1 hover:text-white">
            <p>
              {" "}
              <FontAwesomeIcon icon={faInfoCircle} /> Click for more!
            </p>
          </div>
        </Card>
      </Link>
    </>
  );
}

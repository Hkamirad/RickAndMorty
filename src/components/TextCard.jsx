import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faHeart,
  faMapPin,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
export default function TextCard({ origin, location }) {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="relative ">
          <div className="text-center -mb-4">
            <FontAwesomeIcon
              className="text-2xl "
              icon={origin ? faGlobe : faMapPin}
            />
          </div>
          <div className=" bg-stone-50 text-center rounded-2xl p-4 max-w-44  flex flex-col justify-between min-h-44">
            {origin ? <p>Planet</p> : <p>Location</p>}
            <p
              className="text-black mb-2 "
            >
              {" "}
              {origin && `${origin.name}`} {location && `${location.name}`}
            </p>
            <div className="bg-cyan-500 rounded-3xl mb-4  inline-block px-3 ">
              <p className="text-white">
                <FontAwesomeIcon icon={faInfoCircle} /> more!
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                className=" text-cyan-500 text-xl mb-4"
                icon={faHeart}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

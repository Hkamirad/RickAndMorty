import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header (){
    return(
        <>
         <header className="flex mb-10 items-center mx-12 my-10">
            <div className="flex-grow ">
              <img className="max-w-44" src="../assets/logo.png" alt="" />
            </div>
            <div className="bg-cyan-500 rounded-3xl px-3 py-1  text-white hover:scale-110  cursor-pointer">
              <p><FontAwesomeIcon icon={faHeart}/> Favorites List</p>
            </div>

          </header>
        </>
    )

}
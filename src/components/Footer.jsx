import {
  faArrowUp,
  faCopyright,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="mt-10 mx-12">
        <div className="flex mb-10 items-center">
          <div className="flex-grow">
            <img className="max-w-44" src="../assets/logo.png" alt="" />
          </div>
          <div
            className=" rounded-3xl px-3 py-1  hover:scale-110  cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="flex gap-4 items-center">
              <p>Return to the top</p>
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-3xl p border border-black border-1 py-2 px-3 rounded-full "
              />{" "}
            </div>
          </div>
        </div>
        <div className=" border-t border-black mb-10 flex ">
          <p className="flex-grow ">
            <FontAwesomeIcon icon={faCopyright} /> 2024
          </p>
          <p className="">
            {" "}
            <span className="text-cyan-500">
              <FontAwesomeIcon icon={faCode} />
            </span>{" "}
            Developed by{" "}
            <span className="text-cyan-500   font-bold">Hkamirad</span>
          </p>
        </div>
      </footer>
    </>
  );
}

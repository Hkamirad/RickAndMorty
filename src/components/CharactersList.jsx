import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.jsx";
import CharactersHeader from "./CharactersHeader.jsx";
import { getCharacters } from "../api/characters";
import { Spinner } from "flowbite-react";
import PaginationCp from "./Pagination.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinAlt } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [like, setLike] = useState({});

  const changeHeadersCharacter = (id) => {
    const selectedCharacter = items.find((item) => item.id === id);
    setSelectedCharacter(selectedCharacter);
  };
  const scrollToTop = () => {
    let position = 0;
    if (selectedCharacter) {
      position = 500;
    }
    window.scrollTo({
      top: position,
    });
  };

  const toggleHeart = (event, id) => {
    event.stopPropagation();
    setLike((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    setLoading(true);
    getCharacters(currentPage)
      .then((resp) => {
        const fetchedItems = resp.data.results;
        setItems(fetchedItems);
        setTotalPages(resp.data.info.pages);
        // if (fetchedItems.length > 0) {
        //   setSelectedCharacter(fetchedItems[0]);
        // }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <>
      <div className="mx-12 ">
        {!loading && (
          <>
            <Outlet context={{ selectedCharacter, like, toggleHeart }} />
            <div className=" ml-2 mb-8 flex  items-center gap-4">
              <FontAwesomeIcon icon={faGrinAlt} className="text-2xl" />
              <p className="text-xl font-bold">
                more <br />
                Characters
              </p>
            </div>
          </>
        )}

        {loading && (
          <div className="flex h-screen justify-center items-center ">
            <Spinner />
          </div>
        )}
        <div className="grid grid-cols-4  gap-6 mb-8">
          {!loading &&
            items.length > 0 && (
              <div className=" ml-2 mb-4 flex  items-center gap-2">
                <FontAwesomeIcon icon={faGrinAlt} />
                <p>
                  more <br />
                  Characters
                </p>
              </div>
            ) &&
            items.map((item) => (
              <div key={item.id}>
                <CharacterCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  species={item.species}
                  location={item.location.name}
                  changeHeadersCharacter={changeHeadersCharacter}
                  toggleHeart={toggleHeart}
                  like={like[item.id]}
                />
              </div>
            ))}
        </div>
        {!loading && (
          <>
            {" "}
            <PaginationCp
              currentPage={currentPage}
              onPageChange={onPageChange}
              totalPages={totalPages}
              scrollToTop={scrollToTop}
            />
          </>
        )}
      </div>
    </>
  );
}

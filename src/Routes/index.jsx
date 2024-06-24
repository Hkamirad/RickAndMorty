import { createBrowserRouter } from "react-router-dom";
import CharactersList from "../components/CharactersList";
import Characters from "./Characters";
import App from "../App";
import { Loader as characterLoader } from "./CharacterLoader";
import CharactersHeader from "../components/CharactersHeader";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "characters",
    element: <CharactersList />,
    children: [
      {
        path: ":id",
        loader: characterLoader,
        element: <CharactersHeader />,
      },
    ],
  },
]);

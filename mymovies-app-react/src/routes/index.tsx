import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AnimeRecom from "../pages/animeRecom";
import DetailMovie from "../pages/detail";
import Favorite from "../pages/favorite";
import Homepage from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:id_movie", // Path param
    element: <DetailMovie />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/animeRecom",
    element: <AnimeRecom />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

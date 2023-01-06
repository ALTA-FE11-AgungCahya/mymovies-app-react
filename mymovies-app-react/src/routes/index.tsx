import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component } from "react";

import Homepage from "../pages";
import DetailMovie from "../pages/detail";
import Favorite from "../pages/favorite";

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
    path: "/favorites",
    element: <Favorite />,
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;

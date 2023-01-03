import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../styles/App.css";
import DetailMovie from "./detailMovie";
import ListFavorite from "./listFavoriteMoviesPage";
import ListOfNow from "./listOfNowPlayingMovies";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h2>App</h2>
      <DetailMovie />
      <ListFavorite />
      <ListOfNow />
    </div>
  );
}

export default App;

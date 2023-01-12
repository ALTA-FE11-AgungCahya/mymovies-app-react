import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "utils/contex";
import Button from "./button";

const Navbar = () => {
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");

  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar bg-slate-50 transition delay-150 ease-in-out duration-300 dark:transition dark:delay-150 dark:ease-in-out dark:bg-slate-800 dark:duration-300 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
            <li>
              <Link to="/animeRecom">Anime Rekomendasi</Link>
            </li>
            <li>
              <a>Jadwal Update</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      <div className="navbar-end ">
        <Button
          className=" btn btn-ghost btn-circle h-5 w-auto px-1"
          label="Theme"
          onClick={() => handleTheme()}
        />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-3">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 shadow p-1 bg-base-100 rounded-box w-30"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    // <div className="navbar bg-base-100 dark:bg-merah justify-between">
    //   <div className="flex">
    //     <Link
    //       to="/"
    //       className="btn btn-ghost normal-case text-xl text-black dark:text-white"
    //     >
    //       Cinephile
    //     </Link>
    //     <Link
    //       to="/favorites"
    //       className="btn btn-ghost normal-case text-xl text-black dark:text-white"
    //     >
    //       Favorite
    //     </Link>
    //     <Link
    //       to="/sandbox"
    //       className="btn btn-ghost normal-case text-xl text-black dark:text-white"
    //     >
    //       Sandbox
    //     </Link>
    //   </div>
    //   <div>
    //     <Button label="Theme" onClick={() => handleTheme()} />
    //   </div>
    // </div>
  );
};

export default Navbar;

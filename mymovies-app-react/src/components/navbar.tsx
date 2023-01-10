import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "utils/contex";
import Button from "button";

const Navbar = () => {
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
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
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
        <img src="" alt="logo.jpg" />
      </div>

      <div className="navbar-en ">
        <Button label="Theme" onClick={() => handleTheme()} />
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

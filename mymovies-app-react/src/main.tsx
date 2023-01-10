import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import axios from "axios";

import store from "./utils/store/store";
import App from "./routes";
import "./styles/index.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

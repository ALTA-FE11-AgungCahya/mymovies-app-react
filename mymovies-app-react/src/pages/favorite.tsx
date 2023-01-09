import { useState, useEffect } from "react";
import axios from "axios";

import SkeletonLoading from "../components/loading";
import CardImage from "../components/cardImage";
import Layout from "../components/layout";
import { MoviesType } from "../utils/types/movie";
import { useTitle } from "../utils/hooks/customHooks";

const Favorite = () => {
  const [datas, setDatas] = useState<MoviesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useTitle("Favorite|Page");
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getFavorite = localStorage.getItem("FavMovie");
    if (getFavorite) {
      setDatas(JSON.parse(getFavorite));
    }
    setLoading(false);
  }

  // useEffect(() => {
  //   localStorage.setItem("FavMovie", JSON.stringify(filterData));
  // }, [filterData]);

  function removeFavorite(data: MoviesType) {
    let dupeDatas: MoviesType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);

    if (filterData) {
      localStorage.setItem("FavMovie", JSON.stringify(filterData));
      setDatas(filterData);
      alert(`Delete ${data.title} from favorite list`);
    }
  }

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3">
        {loading
          ? [...Array(12).keys()].map((data) => <SkeletonLoading key={data} />)
          : datas.map((data) => (
              <CardImage
                key={data.id}
                title={data.title}
                image={data.poster_path}
                id={data.id}
                labelButton="REMOVE FROM FAVORITE"
                onClickFav={() => removeFavorite(data)}
              />
            ))}
      </div>
    </Layout>
  );
};

export default Favorite;

import { useState, useEffect } from "react";
import axios from "axios";

import SkeletonLoading from "components/loading";
import CardImage from "components/cardImage";
import Layout from "components/layout";

import { MoviesType } from "utils/types/movie";
import { useTitle } from "utils/hooks/customHooks";

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
      <h1 className="flex justify-center text-5xl font-medium text-zinc-800 py-6 underline underline-offset-[12px] decoration-solid decoration-[2px]  decoration-slate-500">
        Fav{" "}
        <span className="underline  decoration-sky-400 decoration-[3px]">
          orite Mo
        </span>
        vie
      </h1>
      <div className="container mx-auto grid grid-col-2 lg:grid-cols-4 gap-3 mt-5">
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

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import SkeletonLoading from "components/loading";
import CardImage from "components/cardImage";
import Layout from "components/layout";

import { MoviesType } from "utils/types/movie";
import { useTitle } from "utils/hooks/customHooks";
import { RootState } from "utils/types/redux";
import { setFavorites } from "utils/reducer/reducer";

const Favorite = () => {
  const dispatch = useDispatch();
  useTitle("Favorite|Page");
  const datas = useSelector((state: RootState) => state.data.favorites);

  function removeFavorite(data: MoviesType) {
    let dupeDatas: MoviesType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);

    if (filterData) {
      dispatch(setFavorites(filterData));
      localStorage.setItem("FavMovie", JSON.stringify(filterData));
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
        {datas.map((data) => (
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

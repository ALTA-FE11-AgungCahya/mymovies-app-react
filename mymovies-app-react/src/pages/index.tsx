/*
1. page -> data dalam API dengan nama page
2. totalPage -> dat dalam API dengan nama totalPage

Noted: method .map hanya ada di bentuk data array
*/

import { useEffect, useState } from "react";
import axios from "axios";

import SkeletonLoading from "components/loading";
import CardImage from "components/cardImage";
import Carousel from "components/carousel";
import Layout from "components/layout";

import { MoviesType } from "utils/types/movie";
import { useTitle } from "utils/hooks/customHooks";

const Index = () => {
  useTitle("Home | Page");
  const [datas, setDatas] = useState<MoviesType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  function fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        const { results, totalPage } = data.data;
        setDatas(results);
        setTotalPage(totalPage);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function handleFavorite(data: MoviesType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parseFav: MoviesType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
    }
    alert("Added Movie to Favorite");
  }

  return (
    <Layout>
      {!loading && (
        <Carousel
          datas={datas.slice(0, 5)}
          content={(data) => (
            <div
              className="w-full h-full flex justify-center items-center bg-cover bg-no-repeat bg-top bg-fixed"
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              }}
            >
              <div className="w-1/2 place-self-center text-zinc-50 font-bold break-words text-[50px] text-center">
                <p>{data.title}</p>
                <p className="text-[16px] font-normal mt-3">{data.overview}</p>
              </div>
            </div>
          )}
        />
      )}

      {!loading && (
        <h1 className="flex justify-center text-5xl font-medium text-zinc-800 py-6 underline underline-offset-[12px] decoration-solid decoration-[2px]  decoration-slate-500">
          No{" "}
          <span className="underline  decoration-sky-400 decoration-[3px]">
            w Play
          </span>
          ing
        </h1>
      )}

      <div className="container mx-auto grid grid-col-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5">
        {loading
          ? [...Array(12).keys()].map((data) => <SkeletonLoading key={data} />)
          : datas.map((data) => (
              <CardImage
                key={data.id}
                title={data.title}
                image={data.poster_path}
                id={data.id}
                labelButton="ADD TO FAVORITE"
                // onClickFav={()=>console.log("Tets")}
                onClickFav={() => handleFavorite(data)}
              />
            ))}
      </div>
      <div className="btn-group w-full justify-center">
        <button
          className="btn"
          onClick={() => prevPage()}
          disabled={page === 1}
        >
          «
        </button>
        <button className="btn">{page}</button>
        <button
          className="btn"
          onClick={() => nextPage()}
          disabled={page === totalPage}
        >
          »
        </button>
      </div>
    </Layout>
  );
};

export default Index;

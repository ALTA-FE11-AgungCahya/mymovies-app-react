/*
hooks memiliki fungsi pengganti withrouter yaitu useParams dari router-dom
*/

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";

import SkeletonLoading from "components/loading";
import Layout from "components/layout";
import "styles/detail.css";
import { MoviesType, VidiosType } from "utils/types/movie";
import { useTitle } from "utils/hooks/customHooks";

const Detail = () => {
  const { id_movie } = useParams();
  const [data, setData] = useState<MoviesType>({});
  const [videos, setVideos] = useState<VidiosType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useTitle(`${data.title} | Detail_Page`);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setVideos(data.videos?.results);
      })
      .catch((error) => {
        alert(error.toString);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Layout>
      {loading ? (
        <SkeletonLoading />
      ) : (
        // background image
        <div
          className="w-full bg-cover bg-no-repeat bg-top"
          style={{
            backgroundImage: `URL( https://image.tmdb.org/t/p/original${data.backdrop_path} )`,
          }}
        >
          {/* container light/dark */}
          <div className=" flex h-full w-full flex-wrap item-center justify-center bg-gradient-to-t from-zinc-50 p-6 py-16">
            {/* container isi */}
            <div className="bgGlass card lg:card-side w-4/5 gap-20 p-3 pt-2 shadow-lg shadow-slate-700 backdrop-blur-md">
              <img
                className=" lg:ml-8 lg:w-[11rem] place-self-center"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.poster_path}
              />

              <div className="p-5 text-[18px] text-zinc-900">
                <p className="text-[32px] font-bold text-center">
                  {data.title}
                </p>
                <p>Runtime : {data.runtime} menit </p>
                <p>
                  Release Date :{" "}
                  {moment(data.relase_date).format("dddd, DD MMMM YYYY")}
                </p>
                <p>
                  Genre :{" "}
                  {data.genres
                    ?.map((genre) => {
                      return genre.name;
                    })
                    .join(", ")}
                </p>
                <p>Voting : {data.vote_average} </p>
                <p>
                  Overview : <br />
                  {data.overview}{" "}
                </p>
                <br />
                <button className="btn btn-active w-full text-[14px] hover:bg-gray-400">
                  WATCH NOW{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Detail;

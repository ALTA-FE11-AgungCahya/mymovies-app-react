import React, { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";
import moment from "moment";
import "../styles/detail.css";

import Loading, { SkeletonLoading } from "../components/loading";

interface DataType {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  relase_date?: string;
  runtime?: number;
  vote_average?: number;
  genres?: GenreType[];
  // genres?: GenreType[ ];
}
interface PropsType {}

interface StateType {
  loading: boolean;
  data: DataType;
}

export default class Detail extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/683328?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        alert(error.toString);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <SkeletonLoading />
        ) : (
          // background image
          <div className="bgImage w-full bg-cover bg-center bg-no-repeat ">
            {/* container light/dark */}
            <div className=" flex h-full w-full flex-wrap item-center justify-center bg-gradient-to-t from-zinc-50 p-6 py-16">
              {/* container isi */}
              <div className="bgGlass card lg:card-side w-4/5 gap-20 p-3 pt-2 shadow-lg shadow-slate-700 backdrop-blur-md">
                <img
                  className=" lg:ml-8 lg:w-[11rem] place-self-center"
                  src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
                  alt={this.state.data.poster_path}
                />

                <div className="p-5 text-[18px] text-zinc-900">
                  <p className="text-[32px] font-bold text-center">
                    {this.state.data.title}
                  </p>
                  <p>Runtime : {this.state.data.runtime} menit </p>
                  <p>
                    Release Date :{" "}
                    {moment(this.state.data.relase_date).format(
                      "dddd, DD MMMM YYYY"
                    )}
                  </p>
                  <p>
                    Genre :{" "}
                    {this.state.data.genres
                      ?.map((genre) => {
                        return genre.name;
                      })
                      .join(", ")}
                  </p>
                  <p>Voting : {this.state.data.vote_average} </p>
                  <p>
                    Overview : <br />
                    {this.state.data.overview}{" "}
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
        <h1> hello </h1>
      </Layout>
    );
  }
}

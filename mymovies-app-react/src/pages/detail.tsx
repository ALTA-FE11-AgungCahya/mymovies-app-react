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
      loading: false,
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
      .finally(() => {});
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <SkeletonLoading />
        ) : (
          // background image
          <div className="bgImage w-full h-[70vh] bg-cover bg-center bg-no-repeat ">
            {/* container light/dark */}
            <div className=" flex h-full w-full flex-wrap item-center justify-center bg-gradient-to-t from-white p-6">
              {/* container isi */}
              <div className="bgGlass card lg:card-side w-4/5 lg:h-80  gap-4 p-3 mt-10 shadow-lg shadow-black backdrop-blur">
                <img
                  className="h-3/5 w-30 md:h-4/5 place-self-center object-contain "
                  src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
                  alt={this.state.data.poster_path}
                />
                <div className="p-5">
                  <p>Tittle : {this.state.data.title}</p>
                  <p>
                    Release Date :{" "}
                    {moment(this.state.data.relase_date).format(
                      " DD MMMM YYYY"
                    )}
                  </p>
                  <p>Runtime : {this.state.data.runtime} </p>
                  <p>
                    Genre :{" "}
                    {this.state.data.genres
                      ?.map((genre) => {
                        return genre.name;
                      })
                      .join(", ")}
                  </p>
                  <p>Overview : {this.state.data.overview} </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

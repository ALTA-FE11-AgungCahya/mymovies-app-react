import { Component } from "react";
import axios from "axios";

import CardImage from "../components/cardImage";
import Layout from "../components/layout";
import { SkeletonLoading } from "../components/loading";
import { MoviesType } from "../utils/types/movie";
import Carousel from "../components/carousel";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MoviesType[];
  page: number;
  totalPage: number;
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
      page: 1,
      totalPage: 1,
    };
  }

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        this.setState({ datas: results, totalPage: total_pages });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  nextPage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  render() {
    return (
      <Layout>
        {!this.state.loading && (
          <Carousel
            datas={this.state.datas.slice(0, 5)}
            content={(data) => (
              <div
                className="w-full h-full flex justify-center items-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}
              >
                <p className="text-white tracking-widest font-bold break-words text-2xl">
                  {data.title}
                </p>
              </div>
            )}
          />
        )}

        <div className="grid grid-cols-4 gap-3">
          {this.state.loading
            ? [...Array(12).keys()].map((data) => (
                <SkeletonLoading key={data} />
              ))
            : this.state.datas.map((data) => (
                <CardImage
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  id={data.id}
                  labelButton="ADD TO FAVORITE"
                />
              ))}
        </div>
        <div className="btn-group w-full justify-center">
          <button
            className="btn"
            onClick={() => this.prevPage()}
            disabled={this.state.page === 1}
          >
            «
          </button>
          <button className="btn">{this.state.page}</button>
          <button
            className="btn"
            onClick={() => this.nextPage()}
            disabled={this.state.page === this.state.totalPage}
          >
            »
          </button>
        </div>
      </Layout>
    );
  }
}

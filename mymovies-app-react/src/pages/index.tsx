import React, { Component } from "react";
import axios from "axios";

import CardImage from "../components/cardImage";
import Layout from "../components/layout";
import Loading from "../components/loading";
import { SkeletonLoading } from "../components/loading";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: DatasType[];
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((data) => {
        const { results } = data.data;
        this.setState({ datas: results });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Layout>
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
                />
              ))}
        </div>
      </Layout>
    );
  }
}

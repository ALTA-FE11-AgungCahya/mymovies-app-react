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

export class Favorite extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }

  componentDidMount(): void {
    this.fetchdata();
  }

  fetchdata() {}

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

export default Favorite;

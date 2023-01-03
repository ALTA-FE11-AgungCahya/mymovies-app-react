import React, { Component } from "react";
import CardImage from "../components/cardImage";
import Layout from "../components/layout";
import Loading from "../components/loading";

interface Datatype {
  id: number;
  tittle: string;
  image: string;
}

export default class index extends Component {
  state = {
    datas: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      this.setState({
        datas: [
          {
            id: 1,
            tittle: "Chainsaw-Man",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 2,
            tittle: "Chainsaw-Man",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            tittle: "Chainsaw-Man",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            title: "Chainsaw-Man",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            tittle: "Chainsaw-Man",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
        ],
        loading: false,
      });
    }, 5000);
  }

  render() {
    return (
      <Layout>
        <div className="grid grid-cols-4 gap-4">
          {this.state.loading ? (
            <Loading />
          ) : (
            this.state.datas.map((data: Datatype) => (
              <CardImage key={data.id} title={data.tittle} image={data.image} />
            ))
          )}
        </div>
      </Layout>
    );
  }
}

import React, { Component } from "react";

export class listOfNowPlayingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coba: "list-of-now-playing-movies",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.coba}</h1>
      </div>
    );
  }
}

export default listOfNowPlayingMovies;

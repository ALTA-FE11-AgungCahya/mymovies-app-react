import React, { Component } from "react";
import Lottie from "lottie-react";
import AnimationLoad from "../assets/animation-loading.json";

export default class Loading extends Component {
  render() {
    return <Lottie animationData={AnimationLoad} loop={true} autoPlay />;
  }
}

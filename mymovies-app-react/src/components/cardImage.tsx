import { Component } from "react";
import { Button } from "./button";
import { withRouter } from "../utils/navigation";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  labelButton: string;
  onClickFav?: () => void;
  navigate?: any;
  params?: any;
}

class CardImage extends Component<CardProps> {
  onClickDetail() {
    this.props.navigate(`/movie/${this.props.id}`);
    // alert(`id : ${this.props.id}`);
    // console.log(this.props.navigate);
    // console.log(this.props.params);
  }

  render() {
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure onClick={() => this.onClickDetail()}>
          <img
            className="bg-contain"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between">
          <h2
            className="card-title text-center"
            onClick={() => this.onClickDetail()}
          >
            {" "}
            {this.props.title}{" "}
          </h2>
          <div className="card-actions justify-center w-full">
            <Button
              label={this.props.labelButton}
              onClick={() => console.log("add to Fav")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardImage);

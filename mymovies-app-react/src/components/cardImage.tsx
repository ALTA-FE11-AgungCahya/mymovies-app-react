import { useNavigate } from "react-router-dom";
import { FC } from "react";

import Button from "./button";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  labelButton: string;
  onClickFav?: () => void;
}

// const CardImage: FC<CardProps> = (props) => {
const CardImage: FC<CardProps> = ({
  id,
  title,
  image,
  labelButton,
  onClickFav,
}) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card card-compact bg-zinc-100 shadow-xl transition ease-in delay-150 hover:scale-105 hover:-translate-y-3 hover:shadow-[0px_0px_60px_rgba(0,0,0,0.8)] duration-300 ">
      <figure onClick={() => onClickDetail()}>
        <img
          className="bg-contain"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
      </figure>
      <div className="card-body items-center justify-between">
        <h2 className="card-title text-center" onClick={() => onClickDetail()}>
          {" "}
          {title}{" "}
        </h2>
        <div className="card-actions justify-center w-full">
          <Button label={labelButton} onClick={onClickFav} />
        </div>
      </div>
    </div>
  );
};

export default CardImage;

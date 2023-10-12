import { FC } from "react";
import style from "./Card.module.scss";

interface CardProps {
  elevation: number;
  title: string;
  text: string;
}

const Card: FC<CardProps> = ({ elevation, title, text }) => {
  console.log(elevation);
  return (
    <div className={style.card}>
      <h3 className={style["card__title"]}>{title}</h3>
      <p className={style["card__text"]}>{text}</p>
    </div>
  );
};

export default Card;

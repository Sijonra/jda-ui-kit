import { FC } from "react";
import style from "./Card.module.scss";

interface CardProps {
  elevation: number;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Card: FC<CardProps> = ({ elevation, title, subtitle, children }) => {
  console.log("card_" + elevation.toString());
  return (
    <>
      <div
        className={style["card"] + " " + style["card_" + elevation.toString()]}
      >
        <h3 className={style["card__title"]}>{title}</h3>
        <p className={style["card__subtitle"]}>{subtitle}</p>
        <div className={style["card__content"]}>{children}</div>
      </div>
    </>
  );
};

export default Card;

import { FC } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  type: string;
  text: string;
  icon: boolean;
}

const Button: FC<ButtonProps> = ({ type, text, icon }) => {
  console.log(icon);
  return (
    <div className={style.buttonOuter}>
      <button className={style.button + " " + style[type]}>{text}</button>
    </div>
  );
};

export default Button;

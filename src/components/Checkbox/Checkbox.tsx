import style from "./Checkbox.module.scss";
import { FC } from "react";

interface InputProps {
  type?: string;
}

const Checkbox: FC<InputProps> = () => {
  return (
    <div className={style["checkbox"]}>
      <input type="checkbox" />
    </div>
  );
};

export default Checkbox;
